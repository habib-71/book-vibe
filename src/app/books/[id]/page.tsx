import { IBook } from "@/types/books.types";
import Image from "next/image";

interface IBookDetailsPage {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");

    return res.json();
};

const BookDetailsPage = async ({ params }: IBookDetailsPage) => {
    const { id } = await params;

    const booksData = await getBooks();

    const book = booksData.find(
        (book: IBook) => book.bookId === Number(id)
    );

    if (!book) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Book Not Found
                    </h2>
                    <p className="mt-2 text-gray-500">
                        The book you are looking for does not exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="card overflow-hidden bg-base-100 shadow-xl lg:card-side">

                    {/* Book Image */}
                    <figure className="bg-gray-100 p-8 lg:w-2/5">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            width={500}
                            height={650}
                            className="max-h-[550px] w-auto rounded-lg object-cover shadow-lg transition duration-300 hover:scale-105"
                        />
                    </figure>

                    {/* Book Details */}
                    <div className="card-body justify-center p-6 md:p-10 lg:w-3/5">

                        {/* Category */}
                        <div className="mb-2">
                            <span className="badge badge-primary badge-lg">
                                {book.category}
                            </span>
                        </div>

                        {/* Book Name */}
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            {book.bookName}
                        </h1>

                        {/* Author */}
                        <p className="mt-2 text-lg text-gray-600">
                            by{" "}
                            <span className="font-semibold text-primary">
                                {book.author}
                            </span>
                        </p>

                        {/* Rating */}
                        <div className="mt-4 flex items-center gap-3">
                            <div className="rating">
                                <span className="text-2xl text-yellow-400">
                                    ★
                                </span>
                            </div>

                            <span className="text-lg font-semibold">
                                {book.rating}
                            </span>

                            <span className="text-gray-400">
                                / 5
                            </span>
                        </div>

                        {/* Review */}
                        <div className="my-6 border-y border-gray-200 py-5">
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                About this book
                            </h3>

                            <p className="leading-7 text-gray-600">
                                {book.review}
                            </p>
                        </div>

                        {/* Book Information */}
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-sm text-gray-500">
                                    Publisher
                                </p>
                                <p className="mt-1 font-semibold text-gray-800">
                                    {book.publisher}
                                </p>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-sm text-gray-500">
                                    Pages
                                </p>
                                <p className="mt-1 font-semibold text-gray-800">
                                    {book.totalPages}
                                </p>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-sm text-gray-500">
                                    Published
                                </p>
                                <p className="mt-1 font-semibold text-gray-800">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                        </div>

                        {/* Tags */}
                        <div className="mt-6">
                            <h3 className="mb-3 font-semibold text-gray-800">
                                Tags
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {book.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="badge badge-outline px-4 py-3"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Button */}
                        <div className="card-actions mt-8">
                            <button className="btn btn-primary btn-lg w-full md:w-auto">
                                Read Now
                            </button>

                            <button className="btn btn-outline btn-lg w-full md:w-auto">
                                Wishlist
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;