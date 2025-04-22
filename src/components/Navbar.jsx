import React, { useState } from "react";
import { Link } from "react-router";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };
  return (
    <>
      <header className="max-w-screen-2xl !sm:mx-0 md:!mx-10 md:!px-4 md:!py-6 bg-gray-100 shadow-lg">
        <nav className="flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiBars3BottomLeft className="size-6"></HiBars3BottomLeft>
            </Link>
            {/* search input */}
            <div className="relative sm:w-72 w-40 space-x-2">
              <IoSearchOutline className="absolute inline-block right-0 !inset-y-2" />
              <input
                type="text"
                placeholder="Search here..."
                className="bg-[#EAEAEA] !w-full !py-1 !md:px-8 !px-6 !rounded-md focus:outline-none"
              />
            </div>
          </div>
          {/* Right side */}
          <div className="flex gap-5 sm:gap-2">
            <div>
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src={avatarImg}
                      alt=""
                      className={`size-7 rounded-full ${
                        currentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                    />
                  </button>
                  {/* show dropdowns */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 !mt-2 w-48 bg-gray-400 shadow-lg rounded-md z-40">
                      <ul className="!py-2 !px-2 font-semibold">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <FaRegUser className="size-6" />
                </Link>
              )}
            </div>

            <button className="">
              <IoMdHeartEmpty className="size-6" />
            </button>
            <Link
              to="/cart"
              className="bg-primary !py-1 !px-2 !sm:px-6 flex items-center rounded-sm"
            >
              <FaShoppingCart />
              {cartItems.length > 0 ? (
                <span className="text-sm font-semibold !sm:ml-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="text-sm font-semibold !sm:ml-1">0</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
