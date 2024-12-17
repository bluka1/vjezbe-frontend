import { useState, useEffect } from "react";

const BASE_URL = "https://cat-fact.herokuapp.com";
const RANDOM_FACT_URL = BASE_URL + "/facts/random";
const RANDOM_FACTS_ARR_URL = RANDOM_FACT_URL + "?animal_type&amount=5";

function App() {
  const [data, setData] = useState();
  const [factsArr, setFactsArr] = useState([]);

  useEffect(() => {
    // const fetchCatFactsArray = () => {
    //   fetch(RANDOM_FACTS_ARR_URL)
    //     .then((res) => res.json())
    //     .then((data) => setFactsArr(data))
    //     .catch(console.error);
    // };

    const fetchCatFactsArray = async () => {
      try {
        const res = await fetch(RANDOM_FACTS_ARR_URL);
        const data = await res.json();
        setFactsArr(data);
      } catch (error) {
        console.error(error);
      }
    };

    // const fetchCatFacts = () => {
    //   fetch(RANDOM_FACT_URL)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setData(data);
    //       fetchCatFactsArray();
    //     })
    //     .catch(console.error);
    // };

    const fetchCatFacts = async () => {
      try {
        const response = await fetch(RANDOM_FACT_URL);
        const data = await response.json();
        setData(data);
        fetchCatFactsArray();
      } catch (err) {
        console.error(err);
      }
    };

    fetchCatFacts();
  }, []);

  return (
    <div>
      <div>
        <h1>CAT FACTS</h1>
      </div>
      {data && (
        <div>
          <p>Type: {data.type}</p>
          <p>Fact: {data.text}</p>
        </div>
      )}
      {factsArr.map((item, index) => (
        <div key={item.id + "" + index}>
          <p>Number: {index + 1}</p>
          <p>Type: {item.type}</p>
          <p>Fact: {item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
