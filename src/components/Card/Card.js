import { Card, Col } from "react-bootstrap";

export default function CustomCard({ title, text, src }) {
  return (
    <Col>
      <Card>
        <Card.Img
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            boxShadow:
              "rgba(60, 64, 67, 0.9) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              borderRadius: "0.4rem"
          }}
          variant="top"
          src={src}
          alt="TESTE"
        />
      </Card>
    </Col>
  );
}
