import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const UpArrow = () => {
  return (
    <div className="flex justify-center py-12">
      <Link href="/">
        <a>
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#d43def]" size={30} />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default UpArrow;
