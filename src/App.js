import "./App.css";
import Cover from "./components/Cover/Cover";
import Gallery from "./components/Gallery/Gallery";

var imagesArray = [
  { id: 0, src: "./image/aniversario1.jpg", alt: "Aniversário 1 ano" },
  { id: 1, src: "./image/aniversario2.jpg", alt: "Aniversário 1 ano" },
  { id: 2, src: "./image/aniversario3.jpg", alt: "Aniversário 1 ano" },
  { id: 3, src: "./image/aniversario4.jpg", alt: "Aniversário 1 ano" },
  { id: 4, src: "./image/aniversario5.jpg", alt: "Aniversário 1 ano" },
  { id: 5, src: "./image/aniversario6.jpg", alt: "Aniversário 1 ano" },
  { id: 6, src: "./image/aniversario7.jpg", alt: "Aniversário 1 ano" },
  { id: 7, src: "./image/aniversario8.jpg", alt: "Aniversário 1 ano" },
  { id: 8, src: "./image/aniversario9.jpg", alt: "Aniversário 1 ano" },
  { id: 9, src: "./image/aniversario10.jpg", alt: "Aniversário 1 ano" },
  { id: 10, src: "./image/aniversario11.jpg", alt: "Aniversário 1 ano" },
  { id: 11, src: "./image/aniversario12.jpg", alt: "Aniversário 1 ano" },
  { id: 12, src: "./image/aniversario13.jpg", alt: "Aniversário 1 ano" },
  { id: 13, src: "./image/aniversario14.jpg", alt: "Aniversário 1 ano" },
  { id: 14, src: "./image/aniversario15.jpg", alt: "Aniversário 1 ano" },
  { id: 15, src: "./image/aniversario16.jpg", alt: "Aniversário 1 ano" },
  { id: 16, src: "./image/aniversario17.jpg", alt: "Aniversário 1 ano" },
  { id: 17, src: "./image/aniversario18.jpg", alt: "Aniversário 1 ano" },
  { id: 18, src: "./image/aniversario19.jpg", alt: "Aniversário 1 ano" },
  { id: 19, src: "./image/aniversario20.jpg", alt: "Aniversário 1 ano" },
];

var videosArray = [];

function App() {
  return (
    <>
      <Cover />
      <div className="section-background">
        <Gallery images={imagesArray} videos={videosArray} />
      </div>
    </>
  );
}

export default App;
