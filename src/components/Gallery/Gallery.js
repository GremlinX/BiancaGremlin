import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import CustomCard from "../Card/Card";
import "./Gallery.css";

export default function Gallery(props) {
  return (
    <app-gallery>
      <Container className="pt-4">
        <div className="gallery-header">
          <h1>PARABÉNS PARA NÓS!</h1>
        </div>
        {/* <ButtonGroup>
          <Button variant="outline-dark">Versão Card</Button>
          <Button variant="outline-dark">Versão Carrousel</Button>
        </ButtonGroup> */}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3">
          {props.images.map((e, i) => (
            <CustomCard key={e.id} src={e.src} />
          ))}
        </Row>
      </Container>
    </app-gallery>
  );
}
