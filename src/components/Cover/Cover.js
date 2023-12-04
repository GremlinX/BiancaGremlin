import "./Cover.css";

const handleClick = (selector) => {
  const sectionElements = document.getElementsByClassName(selector);

  // Verificar se algum elemento foi encontrado...
  if (sectionElements.length > 0) {
    // ... e acessar o primeiro elemento da lista...
    const firstSectionElement = sectionElements[0];

    // ... para então rolar para a classe .pinkish-static em @App.
    firstSectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Cover(props) {
  return (
    <app-cover>
      <div style={props.style} className="cover-container">
        {props.children}
        <div className="cover-content">
          <h1>{props.title}</h1>
          <p>{props.message1}</p>
          <p>{props.message2}</p>
          <p>{props.message3}</p>
          <p>{props.message4}</p>
        </div>
        <div onClick={() => handleClick(props.selector)}>{props.arrow}</div>
      </div>
    </app-cover>
  );
}
