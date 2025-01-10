import React, { useRef } from "react";
import CarouselChild from "./CarouselChild";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}

interface CarouselProps {
  data: DisplayData[];
  displayType: "movies" | "tvshows";
}

const Carousel: React.FC<CarouselProps> = ({ data, displayType }) => {
  return (
    <div className="relative">
      <div className="carousel-container flex overflow-x-auto space-x-4 py-4 snap-x snap-mandatory">
        {data.map((item) => (
          <CarouselChild
            key={item.id}
            imageUrl={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            title={item.title || item.name || "Untitled"}
            description={item.overview}
            releaseDate={item.release_date}
            rating={item.vote_average}
            displayType={displayType}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
