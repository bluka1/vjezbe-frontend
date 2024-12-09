import { useState } from "react";

export const Form = ({ setPost, setKid }) => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchKid = async (id) => {
    try {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const kid = await res.json();
      setKid(kid);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!term.trim()) return;

    try {
      setLoading(true);
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${term}.json`
      );
      const post = await res.json();
      setPost(post);
      await fetchKid(post.kids[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input
          type="text"
          name=""
          id=""
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>

      <button type="submit">SEARCH</button>

      {loading && <p>Loading...</p>}
    </form>
  );
};
