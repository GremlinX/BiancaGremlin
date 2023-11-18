import "./Cover.css";

// const handleScrollToNextPage = () => {
//     window.scrollTo({
//       top: 1000,
//       left: 0,
//       behavior: "smooth",
//     });
// };
const handleClick = () => {
  const sectionElements = document.getElementsByClassName("section-background");

  // Verificar se algum elemento foi encontrado...
  if (sectionElements.length > 0) {
    // ... e acessar o primeiro elemento da lista...
    const firstSectionElement = sectionElements[0];

    // ... para então rolar para a classe .section-background em @App.
    firstSectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Cover(props) {
  return (
    <app-cover>
      <div style={props.style} className="cover-container">
        <video className="video-background" autoPlay loop playsInline muted>
          <source src="./image/wallpaper02.mp4" type="video/mp4" />
        </video>
        <div className="cover-content">
          <h1>{props.title}</h1>
          <p>
            {props.message1}
            <br />
            {props.message2}
          </p>
          <p>{props.message3}</p>
        </div>
        <div onClick={handleClick}>
          <i className="fas fa-chevron-down fa-lg down-arrow"></i>
        </div>
      </div>
    </app-cover>
  );
}
