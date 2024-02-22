import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  onSearch: (query: string) => void;
}

export default function Sidebar({ onSearch }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="w-/12 bg-gray-50 h-screen  bottom-0 px-5 py-8">
      <div>
        <div className="bg-[#F5F4F7] relative md:w-[150px] lg:w-72 flex items-center rounded">
          <div className="relative w-full md:w-[200px] lg:w-80">
            <input
              type="text"
              className="bg-[#F5F4F7] w-full rounded-md md:mr-5 truncate outline pl-2"
              placeholder="Search city or country"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="bg-black px-2 py-2 rounded-r" onClick={handleSearch}>
            <CiSearch size={25} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}
