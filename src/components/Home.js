
import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/item.css';
const books = require("../books.js").books;

function Home() {
  const bookList = [];
  books.forEach((book)=>{
    bookList.push(<Item book={book} image ={book.thumbnailUrl} title = {book.title} description={book.longDescription} isbn={book.isbn} key={book.isbn}/>);
  });
  return (
    <>
      <div className="card_group">
        {bookList}
      </div >
    </>
  );
}
export default Home;