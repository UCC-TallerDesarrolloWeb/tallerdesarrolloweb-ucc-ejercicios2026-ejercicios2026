import './styles/Card.scss';

const Card = ({ titulo, subtitulo, children }) => {
  return (
    <article className="card">
      <h2 className="card__titulo">{titulo}</h2>
      <p className="card__subtitulo">{subtitulo}</p>
      <div className="card__contenido">{children}</div>
    </article>
  );
};

export default Card;