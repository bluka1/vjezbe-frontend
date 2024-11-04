export function Description(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Summary: {props.summary}</p>

      <hr />

      <p>Title: {props.title}</p>
      <p>Summary: {props.summary}</p>

      <hr />

      <p>Title: {props.title}</p>
      <p>Summary: {props.summary}</p>

      <hr />

      <div className="children">{props.children}</div>

      <hr />

      <p>Title: {props.title}</p>
      <p>Summary: {props.summary}</p>

      <hr />

      <p>Title: {props.title}</p>
      <p>Summary: {props.summary}</p>
    </div>
  );
}
