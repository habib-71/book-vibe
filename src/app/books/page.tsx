import BookCard from "@/componenets/shared/BookCard";
import { IBook } from "@/types/books.types";

const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");

    return res.json();
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-14 px-4">
            {/* Section Header */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#23BE0A]">
                    Explore Our Collection
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Explore All Books
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                    Discover timeless classics, inspiring stories, and
                    fascinating reads for every kind of reader.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.map((book) => (
                    <BookCard book={book} key={book.bookId} />
                ))}
            </div>
        </section>
    );
};

export default Books;