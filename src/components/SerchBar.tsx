"use client";
import React, { useState } from "react";
import SearchManufactor from "./SearchManufactor";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiAperture } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { FaCar } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button
      type="submit"
      className={`z-10 px-2 text-[0.7rem] mx-2 py-[0.34rem] bg-gray-500 text-white mr-[-1rem] ${otherClasses}`}
    >
      بگەڕێ
      <FaMagnifyingGlass className="inline-block ml-2 text-[10px]" />
    </button>
  );
};

const SerchBar = () => {
  const [manufactor, setManufactor] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const updateSearchParams = (model: string, manufactor: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufactor) {
      searchParams.set("manufactor", manufactor);
    } else {
      searchParams.delete("manufactor");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufactor === "" && model === "") {
      return alert("Please select something");
    }

    updateSearchParams(model.toLowerCase(), manufactor.toLowerCase());
  };

  return (
    <form
      className=" max-w-xl   sm:mx-auto flex flex-col sm:flex-row items-start sm:items-center"
      onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        <SearchButton otherClasses="sm:" />
        <SearchManufactor
          manufactor={manufactor}
          setManufactor={setManufactor}
        />
      </div>
      <div className="flex items-center  relative">
        <SearchButton otherClasses="sm:" />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="جۆری ئۆتۆمبێل"
          className="bg-gray-200 p-1 rounded px-5 text-sm text-gray-500 outline-none text-right my-2 mx-1"
        />
        <button className="ml-[-1rem]">
          <GiCarWheel className="text-white text-[1rem] p-2 bg-gray-400 w-7 h-7 rounded" />
        </button>
      </div>
    </form>
  );
};

export default SerchBar;
