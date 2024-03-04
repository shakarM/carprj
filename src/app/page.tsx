import {
  CarCard,
  CustomFilter,
  Hero,
  SearchManufactor,
  SerchBar,
} from "@/components";
import { fetchCars } from "../../utils";
import { fuels, yearsOfProduction } from "../../constants";
import ShowCars from "@/components/ShowCars";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufactor: searchParams.manufactor || "",
    year: searchParams.year || "",
    model: searchParams.model || "", // Corrected from self.model to searchParams.model
    limit: searchParams.limit || 15,
    fuel: searchParams.fuel || "",
  });

  const isEmpty = !Array.isArray(allCars) || allCars.length === 0;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 max-width padding-x padding-y" id="discover">
        <div className="home__text-continer text-right">
          <h1 className="text-center w-full text-[1.5rem]">
            کەتەلۆگی ئوتۆمبێلەکان
          </h1>
          <p className="text-center w-full mb-[1rem] mt-[-0.3rem]">
            {" "}
            بگەڕێ بەدوای ئۆتۆمبێلی دڵخوازت
          </p>
        </div>
        <div className="w-full flex justify-center items-center sm:flex flex-col ">
          {" "}
          {/* Added flex classes */}
          <SerchBar />
          <div className="flex justify-center items-center space-x-4 mt-4">
            {" "}
            {/* Added flex classes and space-x for spacing */}
            <CustomFilter title="بەنزین" options={fuels} />
            <CustomFilter title="ساڵ" options={yearsOfProduction} />
          </div>
        </div>

        {isEmpty ? (
          <section>
            <div className="home__error-container">
              <h2 className="text-black text-xl text-center mt-5">
                {" "}
                هیچ ئەنجامێک نییە
              </h2>
              {allCars && allCars.message && <p>{allCars.message}</p>}
            </div>{" "}
            <ShowCars
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__cars-wrapper">
            {allCars.map((car: any) => (
              <CarCard key={car} car={car} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
