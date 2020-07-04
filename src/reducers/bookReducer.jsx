export const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100000000),
          title: action.book.title,
          author: action.book.author
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
