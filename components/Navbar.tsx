"use client"

import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {
  useGSAP(() => {
    gsap.to('.navbar', {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      translateY: 0,
      stagger: 0.5
    });
  });

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/SignIn" className="flex justify-center items-center navbar opacity-0 -translate-y-20">
          <Image src="/logo.svg" alt="BikeHub Logo" width={118} height={18} className="object-contain" />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-green bg-white min-w-[130px] rounded-full navbar opacity-0 -translate-y-20"
        />
      </nav>
    </header>
  )
}

export default Navbar