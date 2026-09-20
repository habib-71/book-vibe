import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="container mx-auto mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F8FAF8] via-[#F3F3F3] to-[#EAF7E8]">
            <div className="grid grid-cols-1 items-center gap-10 px-6 py-10 sm:px-10 md:grid-cols-2 md:px-14 lg:px-20 lg:py-16">

                <div className="space-y-6">
                    <span className="inline-block rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-semibold text-[#23BE0A]">
                        📚 Discover Your Next Read
                    </span>

                    <h2 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Books to freshen up{" "}
                        <span className="text-[#23BE0A]">
                            your bookshelf
                        </span>
                    </h2>

                    <p className="max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
                        Explore a world of stories, knowledge, and inspiration.
                        Find books that match your interests and make your
                        bookshelf more exciting.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="rounded-xl bg-[#23BE0A] px-6 py-3 font-bold text-white shadow-lg shadow-[#23BE0A]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#1da308] hover:shadow-xl">
                            View The List →
                        </button>

                        <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition duration-300 hover:border-[#23BE0A] hover:text-[#23BE0A]">
                            Explore Books
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center md:justify-end">
                    <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#23BE0A]/10 blur-2xl"></div>

                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-gray-300/50">
                        <Image
                            src={bannerImg}
                            alt="Books collection"
                            className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;