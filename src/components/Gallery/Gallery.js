import { Container, Row } from "react-bootstrap";
import CustomCard from "../Card/Card";

export default function Gallery(props) {
  return (
    <app-gallery>
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {props.images.map((e, i) => (
            <CustomCard key={e.id} title={""} text={""} src={e.src} />
          ))}
        </Row>
      </Container>
    </app-gallery>
  );
}
