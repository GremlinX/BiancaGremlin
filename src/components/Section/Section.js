import "./Section.css";
import { Container, Row } from "react-bootstrap";

export default function Section({ title, text }) {
  return (
    <app-section>
      <Container className="rounded section-background">
        <Row className="gx-3">
          <section className="p-3">
            <div className="text-center">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </section>
        </Row>
      </Container>
    </app-section>
  );
}
