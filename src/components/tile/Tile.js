export default function Tile({ name, description }) {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((item, i) => {
        return (
          <p className="tile" key={i}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
