import BikeCard from "@/components/BikeCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchBikes } from "@/utils";

export default async function Home({ searchParams }) {
  const allBikes = await fetchBikes({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || '',
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || '',
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allBikes) || allBikes.length < 1 || !allBikes;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className="mt-12 padding-x max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Bike Catalogue</h1>
          <p>Explore the bikes you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter 
              title="fuel"
            />
            <CustomFilter 
              title="year"
            />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__bikes-wrapper">
              {allBikes?.map((bike) => (
                <BikeCard bike={bike} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container"> 
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allBikes?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
