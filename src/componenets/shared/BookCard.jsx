
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* Image */}
            <div className="relative h-80 overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#23BE0A] shadow-md backdrop-blur-sm">
                    {book.category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 rounded-full bg-gray-900/85 px-3 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm">
                    ⭐ {book.rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title */}
                <h3 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#23BE0A]">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    by{" "}
                    <span className="font-medium text-gray-700">
                        {book.author}
                    </span>
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-[#23BE0A]/10 px-2.5 py-1 text-xs font-medium text-[#23BE0A]"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Info */}
                <div className="mt-5 grid grid-cols-2 border-y border-gray-100 py-4">
                    <div>
                        <p className="text-xs text-gray-400">
                            Pages
                        </p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.totalPages}
                        </p>
                    </div>

                    <div className="border-l border-gray-100 pl-5">
                        <p className="text-xs text-gray-400">
                            Published
                        </p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.yearOfPublishing}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#23BE0A] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#1da308] hover:shadow-lg hover:shadow-[#23BE0A]/20">
                        View Details
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;