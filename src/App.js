import React from "react";
import BookContextProvider from "./contexts/bookContext";
import BookList from "./components/bookList";
import Navbar from "./components/navbar";
import NewBookForm from "./components/bookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
