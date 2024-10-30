export default function ConditionalRendering(props) {
  console.log("props:", props);
  let text;
  if (props.number > 0) {
    text = "Ispisujem pozitivan broj:" + props.number;
  } else {
    text = "Ispisujem negativan broj:" + props.number;
  }

  // if (!props.number) return null;

  return <div>{props.number && text}</div>;
}
