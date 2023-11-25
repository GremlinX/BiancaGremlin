import "./App.css";
import Cover from "./components/Cover/Cover";
import Gallery from "./components/Gallery/Gallery";
import Video from "./components/Video/Video";

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
      <Cover
        style={null}
        title="FELIZ 1 ANO DE NAMORO"
        message1="Juntos escolhemos viver o amor, mesmo de longe, e juntos acertamos na escolha."
        message2="Espero que a gente ainda possa viver muitos primeiros juntos!"
        message3="Te amo, Bianca! &#129655;"
        arrow={<i className="fas fa-chevron-down fa-lg down-arrow"></i>}
        selector="pinkish-static"
      >
        <Video
          src="./image/wallpaper02.mp4"
          autoPlay={true}
          controls={false}
          playsInline={true}
          loop={true}
          muted={true}
        />
      </Cover>
      <div className="pinkish-static">
        <Cover
          style={{ top: "calc(100vh + 50%)", position: "relative" }}
          title="UM PEQUENO PRESENTE"
          message1="Eu queria poder te dar um presente feito por mim então fiz um pequeno app que é o que sei fazer de melhor."
          message2="Aproveite a seleção de imagens desse casal mais lindo!"
          arrow={<i className="fas fa-chevron-down fa-lg down-arrow"></i>}
          selector="pinkish-linear-gradient"
        />
      </div>
      <div className="pinkish-linear-gradient">
        <Gallery images={imagesArray} videos={videosArray} />
      </div>
      <div className="pinkish-static">
        <Cover
          style={{ top: "calc(100vh + 50%)", position: "relative"}}
          title="QUE SEJA SÓ O COMEÇO DE UMA LONGA HISTÓRIA"
          // message1="Se tem uma pessoa que me faz bem e feliz nessa vida é você, Bianca."
          // message2="É fácil amar você, mesmo de longe, saber que tenho você na minha vida aquece meu coração todos os dias."
          message1="Por você eu vou superar minhas limitações. Por nós eu vou de continuar escrevendo nossa história de muitas páginas. Um livro enorme que faria o eu do passado se assustar com tantas páginas. Por você eu juro, se você quiser!"
          arrow={<i className="fas fa-chevron-down fa-lg down-arrow"></i>}
          selector="video"
        />
      </div>
      <Video
        className="video"
        src="./video/video1.mp4"
        autoPlay={true}
        controls={true}
        playsInline={true}
        loop={false}
        muted={false}
      />
    </>
  );
}

export default App;
