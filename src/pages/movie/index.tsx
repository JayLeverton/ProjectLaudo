import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieVideos } from "./query";
import Loader from "../../components/Loader";

export const Movie = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid Movie ID</div>;
  }

  const {
    data: movieDetails,
    isLoading: movieDetailsLoading,
    error: movieDetailsError,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovieDetails(id),
  });

  const {
    data: movieVideos,
    isLoading: movieVideosLoading,
    error: movieVideosError,
  } = useQuery({
    queryKey: ["movieVideos", id],
    queryFn: () => fetchMovieVideos(id),
  });

  if (movieDetailsLoading || movieVideosLoading) {
    return (
      <div className="flex justify-center place-items-center m-12 pt-20">
        <Loader></Loader>
      </div>
    );
  }

  if (movieDetailsError || movieVideosError) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="mt-[--navbar-height]">
      
      <div>
        <h2>{movieDetails.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
          alt=""
        />
        {movieVideos.results && movieVideos.results.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {movieVideos.results
              .filter(
                (video: any) =>
                  video.official &&
                  video.site === "YouTube" &&
                  video.type === "Trailer"
              )
              .map((video: any) => (
                <div
                  key={video.id}
                  style={{ marginBottom: "20px" }}
                  className=""
                >
                  <h3>{video.name}</h3>
                  <iframe
                    className="w-full aspect-video place-self-center"
                    src={`https://www.youtube.com/embed/${video.key}?autoplay=0`}
                    loading="lazy"
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
          </div>
        ) : (
          <p>No videos available for this movie.</p>
        )}
      </div>
    </div>
  );
};
