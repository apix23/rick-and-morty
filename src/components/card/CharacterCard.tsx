import "./CharacterCard.css";

type CharacterCardProps = {
  name: string;
  status: string;
  species: string;
  origin: string;
  image: string;
};

export const CharacterCard = ({
  name,
  status,
  species,
  origin,
  image,
}: CharacterCardProps) => {
  const statusClass =
    status === "Alive"
      ? "card--alive"
      : status === "Dead"
      ? "card--dead"
      : "card--unknown";
  return (
    <div className="card">
      <img className="card__image" src={image} alt={`${name} picture`} />
      <h4 className="card__name">{name}</h4>
      <div className="card__info">
        <div className={`card__info__status ${statusClass}`}></div>
        <h6 className="card__info__species">{species}</h6>
      </div>
      <h5 className="card__planet">{origin}</h5>
    </div>
  );
};
