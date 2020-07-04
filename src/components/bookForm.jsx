import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/bookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={author}
          onChange={e => setAuthor(e.currentTarget.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default NewBookForm;
