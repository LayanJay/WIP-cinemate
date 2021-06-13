import Movie from "./Movie";

const Results = ({ data }) => {
  return (
    <div className="px-3 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
