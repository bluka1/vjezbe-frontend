import { useQuery, gql } from "@apollo/client";

const GET_RATES = gql`
  query ExampleQuery {
    rates(currency: "USD") {
      currency
      name
      rate
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>GraphQL</h1>

      <div>
        {data &&
          data.rates.map((item) => (
            <div>
              <p>
                <b>{item.currency}</b>: {item.rate}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
