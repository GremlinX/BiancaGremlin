import "./Section.css";

export default function Section({ title, text }) {
  return (
    <app-section>
      <div className="section-background">
        <section className="p-3">
          <div className="row col-md-6 mx-auto text-center">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </section>
      </div>
    </app-section>
  );
}
