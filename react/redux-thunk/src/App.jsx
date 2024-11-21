import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./dataSlice";

export default function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app">
      <h1>NASA picture of the day</h1>
      {data && (
        <>
          <h3>{data?.title}</h3>
          <img src={data?.url} alt={data?.title} width={500} />
          <p>{data?.explanation}</p>
        </>
      )}
    </div>
  );
}
