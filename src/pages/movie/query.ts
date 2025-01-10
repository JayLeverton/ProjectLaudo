export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGNhZjJjN2U1MGUzOTk4N2U3Y2Q3MWFiMGZjZWEwZSIsIm5iZiI6MTczNDA3ODI5My4wNDQ5OTk4LCJzdWIiOiI2NzViZWY1NTVhY2M1NjA0NDI4OGZiNGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kGYOCEOIK7vtryfpyeB7lXKZ2UauPHmWp-qxJnjSu50"
            }
        }
    );

    const data = await res.json();

    return data;
};

export const fetchMovieVideos = async (movieId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGNhZjJjN2U1MGUzOTk4N2U3Y2Q3MWFiMGZjZWEwZSIsIm5iZiI6MTczNDA3ODI5My4wNDQ5OTk4LCJzdWIiOiI2NzViZWY1NTVhY2M1NjA0NDI4OGZiNGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kGYOCEOIK7vtryfpyeB7lXKZ2UauPHmWp-qxJnjSu50"
            }
        }
    );

    const data = await res.json();

    return data;
};