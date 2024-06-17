import {getBooks} from "@/actions/books";
import PostCard from "@/components/post-card";

export default async function Home() {
    const books = await getBooks()
    return (
    <>
        {
            books.map((book, index) => (
                <PostCard key={index} title={book.title} author={book.author} content={book.content} createdAt={book.published_date} likes={book.likes} />
            ))
        }
    </>
  );
}
