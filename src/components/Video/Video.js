export default function Video(props) {
  return (
    <app-video>
      <video
        className={props.className + " video-background"}
        autoPlay={props.autoPlay}
        controls={props.controls}
        playsInline={props.playsInline}
        loop={props.loop}
        muted={props.muted}
        onLoadStart={() => console.log("Iniciando o carregamento do vídeo")}
        onError={(e) => console.error("Erro ao reproduzir vídeo", e)}
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </app-video>
  );
}
