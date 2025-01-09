"use client"

import Image from 'next/image';

import CustomButton from './CustomButton'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const handleSCroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    };
  };

  useGSAP(() => {
    gsap.to('.hero__text', {
      opacity: 1,
      delay: 1.5,
      duration: 1,
      stagger: 0.5,
      translateX: 0,
    });

    gsap.to('.hero__image', {
      opacity: 1,
      delay: 4,
      duration: 1,
      stagger: 0.5,
      translateX: 0,
    })
  });

  return (
    <section className="hero">
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title hero__text opacity-0'>
          Find, book, or rent a bike — quickly and easily!
        </h1>

        <p className='hero__subtitle hero__text opacity-0'>
          Streamline your bike rental experience with our effortless booking process.
        </p>

        <CustomButton
          title="Explore bikes"
          containerStyles="bg-primary-green text-white rounded-full mt-10 hero__text opacity-0"
          handleClick={handleSCroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image opacity-0 translate-x-32'>
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className='object-contain'
          />
        </div>

        <div className='hero__image-overlay hero__text opacity-0' />
      </div>
    </section>
  )
}

export default Hero