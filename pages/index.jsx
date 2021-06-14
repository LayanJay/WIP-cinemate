import Layout from "../components/Layout";
import Results from "../components/Results";
import request from "../lib/request";

const IndexPage = ({ results }) => {
  return (
    <Layout>
      <Results data={results} />
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const response = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: response.results,
    },
  };
};
