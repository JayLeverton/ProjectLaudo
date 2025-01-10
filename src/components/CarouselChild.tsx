import React from "react";

interface CarouselChildProps {
  imageUrl: string;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
  displayType: "movies" | "tvshows";
}

const CarouselChild: React.FC<CarouselChildProps> = ({
  imageUrl,
  title,
  description,
  releaseDate,
  rating,
  displayType,
}) => {
  return (
    <div className="carousel-child w-[120px] border-zinc-800 rounded-lg flex-none snap-start no">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[170px] object-cover rounded-lg"
      />
      <p className=" mt-1 text-md text-left">{`${rating.toPrecision(2)}`}</p>
      <h3 className="text-gray-100 text-sm font-thin text-left">{title}</h3>
      {/* ${releaseDate} |  */}
      {/* <p className="text-sm mt-2">{description.slice(0, 150)}...</p> */}
    </div>
  );
};

export default CarouselChild;
