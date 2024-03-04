"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Interface } from "readline";
import { CarProps } from "../../types";
import { calculateCarRent, generateCarImageURL } from "../../utils";
import { RiSteering2Fill } from "react-icons/ri";
import { GiCartwheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import CardDetails from "./CardDetails";

interface CarCardProps {
  car: CarProps;
  isOpen: boolean;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, model, transmission, make, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group mt-5">
      <div className="car-card__content flex  items-end">
        <h2 className="car-card__content-title text-right" dir="rtl">
          مۆدێل: {make} {model}
        </h2>
      </div>

      <div className="relative w-full h-40 object-contain my-3">
        <Image
          src={generateCarImageURL(car, "23")}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <RiSteering2Fill className="text-blue-600" />
            <p className="text-[0.8rem] text-blue-600">
              {transmission === "a" ? "ئۆتۆماتیک" : "عادی"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiCartwheel className="text-rose-600" />
            <p className="text-[0.8rem] text-rose-600">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFillFuelPumpFill className="text-yellow-600" />
            <p className="text-[0.8rem] text-yellow-600">{city_mpg} MPG</p>
          </div>
        </div>
      </div>
      <div className="car-card__btn-container w-full">
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-blue-500 mt-2 w-full p-1 rounded hover:bg-blue-600 text-white"
        >
          بینینی ئوتومبێل
        </button>
      </div>
      <CardDetails
        closeModal={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
        car={car}
      />
    </div>
  );
};

export default CarCard;
