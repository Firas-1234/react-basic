import "./CardDescription.css";
import Card from "../molecules/Card";

const CardDescription = () => {
    return (
        <section className="cards">
            <Card title="Text" description="Description" />
            <Card tittle="Text2" description="Description2" />
            <Card tittle="Text3" description ="Description3" />
        </section>
    );
};

export default CardDescription;