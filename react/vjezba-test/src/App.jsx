import { useState } from "react";
import { Form } from "./Form";
import { Post } from "./Post";

function App() {
  const [post, setPost] = useState();
  const [kid, setKid] = useState();

  return (
    <div>
      <Form setPost={setPost} setKid={setKid} />
      {post && kid && <Post data={post} kid={kid} />}
    </div>
  );
}

export default App;
