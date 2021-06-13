import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Movie = ({ movie }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    original_title,
    vote_average,
    overview,
    release_date,
    first_air_date,
    media_type,
  } = movie;

  const BASE_URL = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="group my-4">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="rounded-lg transition duration-200 ease-in transform sm:hover:scale-105"
          src={
            `${BASE_URL}${backdrop_path || poster_path}` ||
            `${BASE_URL}${poster_path}`
          }
          layout="responsive"
          placeholder="blur"
          width={1920}
          height={1080}
        />
      </div>

      <div>
        <h2 className="font-medium text-2xl text-primary transition-all ease-in-out group-hover:font-bold mt-1">
          {title || original_title}
        </h2>
        <p className="truncate max-w-md my-1">{overview}</p>
        <p className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition ease-in">
          <span>{media_type && `${media_type}`}</span>
          <span>•</span>
          <span>{release_date || first_air_date}</span>
          <span>•</span>
          <ThumbUpIcon className="h-5 mx-2 text-primary" />{" "}
          <span>{vote_average}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
