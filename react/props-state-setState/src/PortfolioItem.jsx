import Card from "./Card";

export default function PortfolioItem(props) {
  return (
    <Card>
      <h3>Title: {props.title}</h3>
      <p>Description: {props.description}</p>
      <a href="">Link to app</a>
    </Card>
  );
}
