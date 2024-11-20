import { useEffect, useState } from "react";

const API_LINK = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

// const fetchPicture = () => {
//   fetch(API_LINK)
//     .then((response) => response.json())
//     .then((data) => console.log("data:", data))
//     .catch();
// };

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchPictureOfTheDay = async () => {
      const response = await fetch(API_LINK);
      const data = await response.json();
      setData(data);
    };

    try {
      fetchPictureOfTheDay();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <h1>Image of the day</h1>
      {data && (
        <div className="card">
          <h2>{data.title}</h2>
          <img src={data.url} alt="NASA image of the day" />
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
