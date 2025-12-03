import Card from "./Card";

export default function CardList({ items }) {
  return (
    <div className="row g-4">
        {items.map((item) => (
            <Card key={item.id} character={item} />
        ))}
    </div>
  );
}
