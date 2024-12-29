import BikeCard from "@/components/BikeCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchBikes } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  // const params = await searchParams;

  // const { make, model, year } = params;

  // const allBikes = await fetchBikes({
  //   make: make || '',
  //   model: model || 'Ninja',
  //   year: year || 2015,
  // });

  const allBikes = await fetchBikes({
    make: searchParams.make || "",
    model: searchParams.model || "",
    year: searchParams.year || 2022,
  });

  const isDataEmpty = !Array.isArray(allBikes) || allBikes.length < 1 || !allBikes;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className="mt-12 padding-x padding-y max-width">
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
    </main>
  );
}
