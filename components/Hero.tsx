"use client"

import Image from 'next/image';

import CustomButton from './CustomButton'

const Hero = () => {
  const handleSCroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    };
  };

  return (
    <section className="hero">
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, book, or rent a bike — quickly and easily!
        </h1>

        <p className='hero__subtitle'>
          Streamline your bike rental experience with our effortless booking process.
        </p>

        <CustomButton
          title="Explore bikes"
          containerStyles="bg-primary-green text-white rounded-full mt-10"
          handleClick={handleSCroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className='object-contain'
          />
        </div>

        <div className='hero__image-overlay' />
      </div>
    </section>
  )
}

export default Hero