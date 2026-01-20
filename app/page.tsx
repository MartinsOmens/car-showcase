import { Hero, SearchBar, CustomFilter, CardCar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();
  // console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-10 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="fuel" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CardCar key={`${car.make}-${car.model}-${car.year}`} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <section className="home__error-container">
            <h2 className="text-black-100 text-xl font-bold">
              Oops! No result found
            </h2>
            <p>{allCars?.message}</p>
          </section>
        )}
      </div>
    </main>
  );
}
