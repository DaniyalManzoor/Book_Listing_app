import React from "react";
import BookContextProvider from "./contexts/bookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider></BookContextProvider>
    </div>
  );
}

export default App;
