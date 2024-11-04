import { Description } from "./Description";
import Card from "./Card";
import PortfolioItem from "./PortfolioItem";

export default function App() {
  const obj = {
    title: "Hugo i setnja",
    summary:
      "Film datira iz 1990. godine, glavni lik je Hugo koji voli setati.",
  };

  return (
    <div>
      <h1>Naslov aplikacije</h1>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        magni modi, omnis placeat reiciendis obcaecati? Sapiente sint laborum
        dicta perferendis!
      </h3>
      <section>
        <hr />
        <Description
          title="Hugo Hugo"
          summary="Film iz proslog stoljeca"
          godina={1000}
          auto="suzuki"
          pas="floki"
          macka="lili"
          guster="bonnie"
          random={Math.random()}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            excepturi!
          </p>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
        </Description>
        <hr />
      </section>
      <hr />
      <hr />
      <hr />
      <Card>
        <ul>
          <li data-id={1}>kupiti kruh</li>
          <li>nabaviti laptop</li>
          <li>trenirati</li>
        </ul>
      </Card>

      <Card>
        <div>
          <p>Title: abcdef</p>
          <p>Description: watch this out</p>
        </div>
      </Card>

      <PortfolioItem title="Todo App" description="My first project" />
      <PortfolioItem
        title="Running App"
        description="Running all around the world"
      />
      <PortfolioItem
        title="Food App"
        description="Recipes for everything you like to eat"
      />
      <PortfolioItem
        title="Learn App"
        description="Learn anything you want and become an expert"
      />
    </div>
  );
}
