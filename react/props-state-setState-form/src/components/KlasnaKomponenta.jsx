import React from "react";

export default class KlasnaKomponenta extends React.Component {
  render() {
    const { godine, ime } = this.props;

    return (
      <div>
        <p>KlasnaKomponenta.jsx</p>
        <div>
          <p>Ime: {ime}</p>
          <p>Godine: {godine}</p>
        </div>
      </div>
    );
  }
}
