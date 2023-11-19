export default function Video(props) {
  return (
    <app-video>
      <video className="video-background" autoPlay loop playsInline muted>
        <source src={props.src} type="video/mp4" />
      </video>
    </app-video>
  );
}
