import { Card, Col } from "react-bootstrap";

export default function CustomCard({ title, text, src }) {
  return (
    <Col>
      <Card>
        <Card.Img
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
          variant="top"
          src={src}
          alt="TESTE"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
