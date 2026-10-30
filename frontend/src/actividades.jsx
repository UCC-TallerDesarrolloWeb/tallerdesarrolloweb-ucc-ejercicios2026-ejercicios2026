import Card from './card';
import { activities, diasSemana } from './data/activities';
import './styles/Actividades.scss';

const Actividades = ({ isLoggedIn }) => {
  const handleInscripcion = (nombre) => {
    alert(`Te inscribiste en ${nombre}`);
  };

  return (
    <div className="actividades-container">
      <h1>Actividades</h1>

      <div className="actividades-lista">
        {activities.map((actividad) => (
          <Card
            key={actividad.nombre}
            titulo={actividad.nombre}
            subtitulo={actividad.descripcion}
          >
            {/* Todo lo que va entre las etiquetas de Card es su "children" */}
            <ul className="horarios">
              {actividad.horarios.map((h) => (
                <li key={h.dia}>
                  <span className="dia">{diasSemana[h.dia]}</span>
                  <span className="hora">
                    {h['hora-inicio']} a {h['hora-fin']}
                  </span>
                </li>
              ))}
            </ul>

            {isLoggedIn && (
              <button
                className="btn-inscribir"
                onClick={() => handleInscripcion(actividad.nombre)}
              >
                Inscribirme
              </button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Actividades;