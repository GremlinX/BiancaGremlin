import "./Cover.css";

// const handleScrollToNextPage = () => {
//     window.scrollTo({
//       top: 1000,
//       left: 0,
//       behavior: "smooth",
//     });
// };
const handleClick = () => {
  // Encontrar os elementos @Section usando uma classe (substitua 'section-background' pela classe real do seu componente @Section)
  const sectionElements = document.getElementsByClassName('section-background');

  // Verificar se algum elemento foi encontrado
  if (sectionElements.length > 0) {
    // Acessar o primeiro elemento da lista
    const firstSectionElement = sectionElements[0];

    // Rolar para o elemento @Section
    firstSectionElement.scrollIntoView({ behavior: 'smooth' });
  }
};


export default function Cover() {

  return (
    <div className="video-container">
      <video className="video-background" autoPlay loop playsInline muted>
        <source src="./image/wallpaper02.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>FELIZ 1 ANO DE NAMORO</h1>
        <p>
          Juntos escolhemos viver o amor, mesmo de longe, e juntos acertamos na
          escolha.
          <br />
          Espero que a gente ainda possa viver muitos primeiros juntos!
        </p>
        <p>Te amo, Bianca! &#129655;</p>
      </div>
      <div onClick={handleClick}>
        <i className="fas fa-chevron-down fa-lg down-arrow"></i>
      </div>
    </div>
  );
}
