"use client";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParam } from "../../utils";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function CustomFilter({ title, options }) {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e) => {
    const newPathName = updateSearchParam(title, e.value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className="relative inline-block">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative">
          <Listbox.Button className="custom-filter__btn bg-gray-200 text-gray-800 border border-gray-300 px-2 py-1 flex items-center justify-between rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2  focus:ring-offset-2 text-sm font-small transition-all duration-300 ">
            <span className="truncate mr-2 font-[s2] text-[1rem] text-gray-500">
              {title}
            </span>
            {selected === options[0] ? (
              <RiArrowDropDownLine className="text-gray-500" />
            ) : (
              <RiArrowDropUpLine className="text-gray-500" />
            )}
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options absolute z-30 mt-2 w-32 py-1 px-3 text-[0.4rem] bg-white border border-gray-300 rounded-lg shadow-md divide-y divide-gray-300 focus:outline-none">
              {options.map((option, index) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `cursor-default select-none px-4 ${
                      active ? "bg-primary-blue text-black" : "text-gray-900"
                    } w-max text-center text-[0.4rem] font-small ${
                      index === 0 ? "rounded-t-lg" : ""
                    } ${index === options.length - 1 ? "rounded-b-lg" : ""}`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span className="block truncate text-[0.4rem] ">
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
