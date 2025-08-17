import "./Card.css";

const Card = () => {
  return (
    <section className="cards">
      <div className="card">
        <div className="flex align-center">
          <div className="circle"></div>
          <h3>Text</h3>
        </div>
        <p>Description</p>
      </div>

      <div className="card">
        <div className="flex align-center">
          <div className="circle"></div>
          <h3>Text</h3>
        </div>
        <p>Description</p>
      </div>

      <div className="card">
        <div className="flex align-center">
          <div className="circle"></div>
          <h3>Text</h3>
        </div>
        <p>Description</p>
      </div>
    </section>
  );
};
export default Card;
