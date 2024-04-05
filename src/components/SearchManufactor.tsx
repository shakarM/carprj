"use client";
import { Combobox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { SearchManufactorProps } from "../../types";
import Image from "next/image";
import { FaCar } from "react-icons/fa";
import { manufacturers } from "../../constants";

const SearchManufactor = ({
  manufactor,
  setManufactor,
}: SearchManufactorProps) => {
  const [query, setQuery] = useState("");

  const filteredManufactors =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className=" mx-auto">
      <Combobox value={manufactor} onChange={setManufactor}>
        <div className="flex items-center w-full">
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            className=" bg-gray-200 p-1 rounded px-6  text-sm text-gray-500 outline-none text-right  w-full"
            placeholder="گەڕان"
          />
          <Combobox.Button className="ml-[-1rem]">
            <FaCar className=" text-white text-[1rem] p-2 bg-gray-400 w-7 h-7 rounded" />
          </Combobox.Button>
        </div>
        <Transition
          as="div"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="mt-2 w-full">
            {filteredManufactors.length === 0 && query !== "" ? (
              <Combobox.Option
                value={query}
                className="search-manufactor__option text-gray-900 border-t border-gray-200 pt-2"
              >
                Create &quot;{query}&quot;
              </Combobox.Option>
            ) : (
              filteredManufactors.map((item, index) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } rounded-md shadow-md hover:bg-blue-600 hover:text-white ${
                      index === 0 ? "border-t border-gray-200 pt-2" : ""
                    } 
          ${active ? "ring-2 ring-blue-400" : ""}
          transition ease-in-out duration-300
          `
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-semibold" : "font-normal"
                        } text-sm`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufactor;
