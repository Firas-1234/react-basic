import "./Card.css";

const Card = ({ tittle, description })  => {
  return (
      <div className="card">
        <div className="flex align-center">
          <div className="circle"></div>
          <h3>{tittle}</h3>
        </div>
        <p>{description}</p>
      </div>
  );
};
export default Card;
