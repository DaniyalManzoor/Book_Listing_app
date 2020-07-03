import React from "react";
import BookContextProvider from "./contexts/bookContext";
import BookList from "./components/bookList";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
