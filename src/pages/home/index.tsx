/* eslint-disable @typescript-eslint/no-unused-vars */

import { fetchMovies, fetchTvShows } from "./query";

import { useState } from "react";
import { ColumnDisplay } from "./ColumnDisplay";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import Carousel from "../../components/Carousel";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["Movies"],
    queryFn: fetchMovies,
  });

  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  return (
    <div className="mt-[--navbar-height]">
      <div className="flex flex-col">
        <div className="mb-5">
          <h1>Home</h1>
        </div>

        <div className="flex mx-auto">
          <button
            className={
              displayType === DisplayType.Movies
                ? "bg-blue-500 py-2 px-4"
                : "py-2 px-4"
            }
            onClick={() => setDisplayType(DisplayType.Movies)}
          >
            Movies
          </button>

          <button
            className={
              displayType === DisplayType.TvShows
                ? "bg-blue-500 py-2 px-4"
                : "py-2 px-4"
            }
            onClick={() => setDisplayType(DisplayType.TvShows)}
          >
            TV Shows
          </button>
        </div>
        <div>
          <h2 className="mt-20 text-left font-medium text-lg">Popular</h2>
        </div>
        {isLoadingMovies || isLoadingTvShows ? (
          <div className="flex justify-center place-items-center m-12 pt-20">
            <Loader></Loader>
          </div>
        ) : (
          <div className="">
            {displayType === DisplayType.Movies ? (
              <Carousel
                data={movieData.results}
                displayType={DisplayType.Movies}
              ></Carousel>
            ) : (
              // <ColumnDisplay
              //   data={movieData.results}
              //   displayType={DisplayType.Movies}
              // />
              <Carousel
                data={tvShowData.results}
                displayType={DisplayType.TvShows}
              ></Carousel>
              // <ColumnDisplay
              //   data={tvShowData.results}
              //   displayType={DisplayType.TvShows}
              // />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
