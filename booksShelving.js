function shelving(books) {
  return function (row) {
    books -= row;
    row = books >= row + 1 ? ++row : row;
    return [books, row];
  };
}

function arrangeBooks(totalBooks) {
  let bookShelf = shelving(totalBooks);
  let remainingBooks = totalBooks;
  let rows = 1;
  while (remainingBooks > 0) {
    [remainingBooks, rows] = bookShelf(rows);
  }
  return rows;
}

console.log(`1 Books arranged in ${arrangeBooks(1)} rows`);
console.log(`2 Books arranged in ${arrangeBooks(2)} rows`);
console.log(`5 Books arranged in ${arrangeBooks(5)} rows`);
console.log(`6 Books arranged in ${arrangeBooks(6)} rows`);
console.log(`9 Books arranged in ${arrangeBooks(9)} rows`);
console.log(`10 Books arranged in ${arrangeBooks(10)} rows`);
console.log(`11 Books arranged in ${arrangeBooks(11)} rows`);
console.log(`22 Books arranged in ${arrangeBooks(22)} rows`);
console.log(`21 Books arranged in ${arrangeBooks(21)} rows`);
