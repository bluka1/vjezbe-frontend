import { useState } from "react";

const Form = () => {
  const [ime, setIme] = useState("");
  const [submittedIme, setSubmittedIme] = useState("");

  const changeHandler = (e) => {
    setIme(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmittedIme(ime);
    setIme("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="ime">Ime:</label>
        <input
          type="text"
          name=""
          id="ime"
          onChange={changeHandler}
          value={ime}
        />
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>{submittedIme}</div>
    </>
  );
};

export default Form;
