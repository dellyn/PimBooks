import React, { useEffect, useState } from "react";
import { getBooksData, getLiveBooksData } from "../../service/BookService";
import "./SearchPanel.scss";

interface Book {
  readonly title: string;
  readonly selfLink: string;
  readonly authors: string[];
  readonly textSnippet: string;
  readonly imageLinks: string;
}

const SearchPanel = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [booksResult, setBooksResult] = useState<Book[]>([]);
  const [booksLiveResult, setBooksLiveResult] = useState<Book[]>([]);
  const [maxResults] = useState<number>(10);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [statusSearch, setStatusSearch] = useState<boolean>(false);
  const [errorSearch, setErrorSearch] = useState<boolean>(false);

  const updateData = (
    getData: any,
    setData: any,
    index: number = 0,
    statusSearch = true
  ): void => {
    getData(searchString, maxResults, index)
      .then((bookArray: Book[]) => {
        setData(bookArray);
        setStatusSearch(statusSearch);
      })
      .catch(() => {
        setErrorSearch(true);
        setBooksLiveResult([]);
      });
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchString: string = e.target.value;
    setSearchString(searchString);
    setErrorSearch(false);
  };

  useEffect(() => {
    const enterInterval = setTimeout(() => {
      if (searchString) {
        updateData(getLiveBooksData, setBooksLiveResult, 0, false);
      } else {
        setBooksLiveResult([]);
      }
    }, 500);
    return () => {
      clearTimeout(enterInterval);
    };
  }, [searchString]);

  const onSearchSubmit = (): void => {
    searchString && updateData(getBooksData, setBooksResult);
  };

  const getNextBooks = (): void => {
    const newStartIndex = startIndex + 5;
    setStartIndex(newStartIndex);
    updateData(getBooksData, setBooksResult, newStartIndex);
  };

  const renderItems = booksResult.map((book: Book, idx) => {
    const imageLink = book.imageLinks;
    let title = book.title;

    if (title.length > 20) {
      let lenCounter: number = 0;
      let newTitle: string = "";

      title.split(" ").forEach((word: string) => {
        lenCounter += word.length;
        if (lenCounter <= 20) {
          newTitle += " " + word;
          return newTitle;
        }
      });
      title = newTitle + "..";
    }

    return (
      <div className="result-book" key={idx}>
        <img src={imageLink} alt="" />
        <p>{title}</p>
      </div>
    );
  });

  const renderLiveItems = booksLiveResult.map((book: Book, idx) => (
    <li key={idx}>{book.title}</li>
  ));

  return (
    <div className="search">
      <div className="container">
        <div className="">
          <form action="#">
            <div className="search-labels">
              <input
                className="search-labels-input"
                type="text"
                onChange={onSearchChange}
                value={searchString}
                placeholder="Search"
                autoFocus={true}
              />
              <input
                className="search-labels-button"
                type="submit"
                value="Search"
                onClick={onSearchSubmit}
              />
            </div>

            <ul className="result-live-list">
              {renderLiveItems}
              <li className={errorSearch ? "search-error-box" : "dn"}>
                No books were found for <b>"{searchString}"</b>
              </li>
            </ul>

            <button
              className={statusSearch ? "result-next" : "dn"}
              onClick={getNextBooks}
            >
              Next 5 Books
            </button>
          </form>
          <div className="result">{renderItems}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
