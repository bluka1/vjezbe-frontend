import React from "react";
export default class StatelessKomponenta extends React.Component {
  render() {
    return (
      <div>
        <p>Grad: {this.props.grad}</p>
        <p>Drzava: {this.props.drzava}</p>
        <button onClick={this.props.promijeniState}>Promijeni state</button>
      </div>
    );
  }
}
