"use client"

import Image from "next/image"
import { useState } from "react"

import { BikeProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateBikeRent } from "@/utils";
import BikeDetails from "./BikeDetails";

interface BikeCardProps {
  bike: BikeProps;
}

const BikeCard = ({ bike } : BikeCardProps) => {
  const { make, model, year, transmission, type, fuel_capacity } = bike;

  const [isOpen, setIsOpen] = useState(false);

  const bikeRent = calculateBikeRent(50, year);

  return (
    <div className="bike-card group">
      <div className="bike-card__content">
        <h2 className="bike-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {bikeRent} 
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain"> 
        <Image src="/hero2.png" alt="bike model" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="grid grid-cols-3 grid-rows-1 group-hover:invisible w-full justify-between text-gray gap-6 items-start">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] text-center">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px] text-center">
              {type}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px] text-center">
              {fuel_capacity}
            </p>
          </div>
        </div>

        <div className="bike-card__btn-container">
          <CustomButton 
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-green"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <BikeDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        bike={bike}
      />
    </div>
  )
}

export default BikeCard