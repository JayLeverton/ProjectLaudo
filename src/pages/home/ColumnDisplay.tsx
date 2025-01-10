import { Link } from "react-router-dom";
import { DisplayType } from ".";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

export const ColumnDisplay = (props: Props) => {
  const { data, displayType } = props;

  return (
    <div
      className="grid grid-cols-2 w-full gap-2

     md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-4"
    >
      {data.map((displayData: DisplayData) => (
        <Link
          to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${
            displayData.id
          }`}
          key={displayData.id}
        >
          <div>
            <div className="flex flex-col gap-2 border-2 border-zinc-800 rounded-sm mb-10 shadow-[0_10px_3px_rgba(0,0,0,0.1)]">
              <img
                src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                className="w-full h-full pb-2"
              ></img>

              <h3 className="text-lg font-medium text-left px-2">
                {displayType === DisplayType.Movies
                  ? displayData.title
                  : displayData.name}
              </h3>

              <p className="px-2 text-gray-500 flex mr-auto text-left">{`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}</p>

              <p className="px-2 text-left">
                {displayData.overview.slice(0, 350) + "..."}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
