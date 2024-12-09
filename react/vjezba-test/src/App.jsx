import { useState } from "react";
import { Form } from "./Form";
import { Post } from "./Post";

function App() {
  const [post, setPost] = useState();
  const [kid, setKid] = useState();

  return (
    <div>
      <Form setPost={setPost} setKid={setKid} />
      {post && <Post data={post} classNames="post" />}
      {kid && <Post data={kid} classNames="kid" />}
    </div>
  );
}

export default App;
