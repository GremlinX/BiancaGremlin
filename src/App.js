import "./App.css";
import { Container, Row } from "react-bootstrap";
import CustomCard from "./components/Card/Card";
import Section from "./components/Section/Section";

const mensagem = [
  {
    id: 0,
    title: "Feliz 1 ano de namoro",
    conteudo:
      "Há 5 anos atrás, eu conheci uma garota incrível. E hoje a̶h̶a̶m̶, s̶ó h̶o̶j̶e̶ d̶i̶s̶s̶e̶ e̶l̶e̶, eu sou apaixonado por ela.",
  },
  {
    id: 1,
    title: "Primeiro encontro",
    conteudo:
      "Mesmo indo aí pra curtir e conhecer todo mundo, acabou que nossos sentimentos queriam mais que manter uma amizade antiga.",
  },
  {
    id: 2,
    title: "Onde tudo começou (02/02/2022)",
    conteudo:
      '"Ah não, relaxa! Eu vou te pedir em namoro então não se preocupe". Bianca: "Vamos namorar?"',
  },
  {
    id: 3,
    title: "Primeiro jantar romântico",
    conteudo:
      "Foi o dia que cê ficou menos tempo e que eu tinha que sair correndo do trabalho e pedalar / caminhar feito louco só pra poder aproveitar cada segundinho que eu tinha com você.",
  },
  {
    id: 4,
    title: "Primeira Viagem",
    conteudo:
      "Também foi um tempo bem curto mas a gente fez tanta coisa que pareceu ter durado várias semanas.",
  },
  { id: 5, title: "Feliz 1 ano, Bianca!", conteudo: "- - -" },
];

function App() {
  return (
    <>
      <Section title={mensagem[1].title} text={mensagem[1].conteudo} />
      <Container className="my-3">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <CustomCard
            title={""}
            text={""}
            src={"./image/PrimeiroEncontro/PrimeiroEncontro01.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/PrimeiroEncontro/PrimeiroEncontro02.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/PrimeiroEncontro/PrimeiroEncontro03.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/PrimeiroEncontro/PrimeiroEncontro04.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/PrimeiroEncontro/PrimeiroEncontro05.jpg"}
          />
        </Row>
      </Container>

      <Section title={mensagem[2].title} text={mensagem[2].conteudo} />
      <Container className="my-3">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco01.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco02.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco03.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco04.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco05.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco06.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco07.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Comeco/Comeco08.jpg"}
          />
        </Row>
      </Container>

      <Section title={mensagem[3].title} text={mensagem[3].conteudo} />
      <Container className="my-3">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <CustomCard
            title={""}
            text={""}
            src={"./image/JantarRomantico/JantarRomantico01.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/JantarRomantico/JantarRomantico02.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/JantarRomantico/JantarRomantico03.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/JantarRomantico/JantarRomantico04.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/JantarRomantico/JantarRomantico05.jpg"}
          />
        </Row>
      </Container>

      <Section title={mensagem[4].title} text={mensagem[5].conteudo} />
      <Container className="my-3">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <CustomCard
            title={""}
            text={""}
            src={"./image/Viagem/Viagem02.jpg"}
          />
          <CustomCard
            title={""}
            text={""}
            src={"./image/Viagem/Viagem03.jpg"}
          />
        </Row>
      </Container>
    </>
  );
}

export default App;
