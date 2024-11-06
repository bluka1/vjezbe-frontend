import React from "react";
import StatelessKomponenta from "./StatelessKomponenta";

export default class StatefulKomponenta extends React.Component {
  state = {
    grad: "Zagreb",
    drzava: "Hrvatska",
  };

  promijeniGrad = () => {
    if (this.state.grad === "Zagreb") {
      this.setState({ grad: "Osijek" });
    } else {
      this.setState({ grad: "Zagreb" });
    }
  };

  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          asperiores vitae necessitatibus perferendis adipisci voluptate qui,
          minima, consequuntur voluptas ipsa tempora, magni atque sed fugit!
          Sint, libero. Adipisci possimus sequi et officia corrupti! Atque,
          consequatur. Sapiente, similique eligendi reprehenderit distinctio
          minus, nihil nisi dignissimos rem, perspiciatis odit eum magni sunt?
        </p>
        <button onClick={this.promijeniGrad}>Promijeni ime grada</button>

        <hr />

        <StatelessKomponenta
          grad={this.state.grad}
          drzava={this.state.drzava}
          promijeniState={this.promijeniGrad}
        />
      </div>
    );
  }
}
