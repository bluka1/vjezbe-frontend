export default function FunkKomponenta2({ godine, ime, children }) {
  return (
    <div className="border">
      <p>FunkKomponenta2</p>
      <div>
        <p>Ime: {ime}</p>
        <p>Godine: {godine}</p>
      </div>
      <p>CHILDREN:</p>
      <div className="children">{children}</div>
    </div>
  );
}
