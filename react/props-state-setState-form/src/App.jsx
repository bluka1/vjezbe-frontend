import { Description } from "./Description";
import Card from "./Card";
import PortfolioItem from "./PortfolioItem";
import { useState } from "react";
import ChangeButton from "./ChangeButton";
import Korisnik from "./Korisnik";
import DodajKorisnikaForm from "./DodajKorisnikaForm";

export default function App() {
  const [state, setState] = useState({
    korisnici: [
      {
        ime: "Ante",
        godine: 20,
      },
      {
        ime: "Ivo",
        godine: 21,
      },
      {
        ime: "Tvrtko",
        godine: 22,
      },
    ],
    text: "Ovo je proizvoljna varijabla unutar statea",
  });

  const changeName = (index, novoIme) => {
    setState((prevState) => {
      const newKorisnici = prevState.korisnici.map((korisnik, idx) => {
        if (idx === index) {
          korisnik.ime = novoIme;
        }
        return korisnik;
      });

      return {
        ...prevState,
        korisnici: newKorisnici,
      };
    });
  };

  const changeYearsHandler = () => {
    setState((prevState) => ({
      ...prevState,
      korisnici: prevState.korisnici.map((korisnik) => ({
        ime: korisnik.ime,
        godine: korisnik.godine + 1,
      })),
    }));
  };

  const obj = {
    title: "Hugo i setnja",
    summary:
      "Film datira iz 1990. godine, glavni lik je Hugo koji voli setati.",
  };

  const dodajKorisnika = (ime, godine) => {
    setState((prevState) => {
      const newKorisnici = [...prevState.korisnici];
      newKorisnici.push({ ime, godine });

      return {
        ...prevState,
        korisnici: newKorisnici,
      };
    });
  };

  return (
    <div>
      <h1>Naslov aplikacije</h1>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        magni modi, omnis placeat reiciendis obcaecati? Sapiente sint laborum
        dicta perferendis!
      </h3>

      <hr />

      <div>
        <ChangeButton changeState={changeYearsHandler} />
      </div>

      <hr />
      <div>
        <DodajKorisnikaForm handleSubmit={dodajKorisnika} />
      </div>
      <hr />

      {state.korisnici.map((korisnik, index) => (
        <Korisnik
          key={Math.random().toFixed(7)}
          korisnik={korisnik}
          index={index}
          promijeniIme={changeName}
        />
      ))}

      <hr />
      <section>
        <hr />
        <div>
          <button
            onClick={() =>
              setState((prevState) => ({ ...prevState, text: Math.random() }))
            }
          >
            PROMJENA TEXTA
          </button>
        </div>
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
          <p>TEXT STATE FROM APP COMPONENT: {state.text}</p>
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
