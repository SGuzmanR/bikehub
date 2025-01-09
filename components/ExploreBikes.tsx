"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'
import { yearsOfProduction } from '@/constants'
import BikeCard from './BikeCard'
import { ExploreBikesProps } from '@/types'

const ExploreBikes = ({ isDataEmpty, allBikes  }: ExploreBikesProps) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#discover',
        start: "20px 80%",
        end: "bottom 100px",
        toggleActions: "play none none none",
      },
    })

    tl.to('#discover', {
      opacity: 1,
      duration: 1,
      translateX: 0,
      delay: 0,
    });
  });

  return (
    <div id="discover" className="opacity-0 -translate-x-20 mt-12 padding-x padding-y max-width">
    <div className="home__text-container">
      <h1 className="text-4xl font-extrabold">Bike Catalogue</h1>
      <p>Explore our bikes you might like</p>
    </div>

    <div className="home__filters z-10">
      <SearchBar />

      <div className="home__filter-container">
        <CustomFilter 
          title="year"
          options={yearsOfProduction}
        />
      </div>
    </div>

    {!isDataEmpty ? (
      <section>
        <div className="home__bikes-wrapper">
          {allBikes?.map((bike, index) => (
            <BikeCard key={index} bike={bike} />
          ))}
        </div>
      </section>
    ) : (
      <div className="home__error-container"> 
        <h2 className="text-black text-2xl font-bold">Oops, no results</h2>
        <h2 className="text-black text-xl font-medium underline">Try to search another bike in the blanks above</h2>
        <p>{allBikes?.message}</p>
      </div>
    )}
  </div>
  )
}

export default ExploreBikes;