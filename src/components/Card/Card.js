import { Card, Col } from "react-bootstrap";

export default function CustomCard({ title, text, src }) {
  return (
    <Col style={{
      marginTop: '1rem',
      marginBottom: '1rem'
    }}>
      <Card
        style={{
          borderWidth: "0",
          padding: "0",
        }}
      >
        <Card.Img
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            boxShadow:
              "rgba(0, 0, 0, 0.5) 0px 0px 0px 2px",
            borderRadius: "0.4rem",
          }}
          variant="top"
          src={src}
          alt="TESTE"
        />
      </Card>
    </Col>
  );
}
