import React, { useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
const TopSellers = () => {
  // const [books,setBooks]=useState([])
  // useEffect(()=>{
  //     fetch("books.json")
  //     .then(res=>res.json())
  //     .then((data)=>setBooks(data))
  // },[])
  // console.log(books);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const { data: books = [] } = useFetchAllBooksQuery();
  // console.log(books);
  // const {data: books = []} = useFetchAllBooksQuery();

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );
  //  console.log(filteredBooks);
  return (
    <div className="!py-10">
      <h2 className="text-3xl font-semibold !mb-6">Top Sellers</h2>
      {/* category */}
      <div className="!mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md !px-4 !py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </div>
    </div>
  );
};

export default TopSellers;
