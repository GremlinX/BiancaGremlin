export default function Message(props) {
  return (
    <app-message>
      <div className="cover-content">
        <h1>{props.title}</h1>
        <p>
          {props.message1}
          <br />
          {props.message2}
        </p>
        <p>{props.message3}</p>
      </div>
    </app-message>
  );
}
