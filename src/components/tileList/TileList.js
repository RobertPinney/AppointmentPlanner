import Tile from "../tile/Tile";

export default function TileList({ data }) {
  return (
    <ul>
      {data.map((array, i) => {
        const { name, ...rest } = array;
        return <Tile name={array.name} description={rest} key={i} />;
      })}
    </ul>
  );
}
