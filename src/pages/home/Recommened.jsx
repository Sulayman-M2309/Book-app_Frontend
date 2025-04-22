import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";
const Recommened = () => {
  const { data: books = [] } = useFetchAllBooksQuery();
  return (
    <div className="!py-16">
      <h2 className="text-3xl font-semibold !mb-6">Recommended for you </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {books.length > 0 &&
          books.slice(8, 18).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </div>
    </div>
  );
};

export default Recommened;
