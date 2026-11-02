import "../styles/Activities.scss";
import Card from "../components/Crad";
//import { activities, diasSemana } from "../data/activities";
import { useEffect, useState } from "react";

const Activities = () => {
  const IsLoggedIn = localStorage.getItem("isLoggedIn") === "True";

  const [activities, setActivities] = useState([]);
  const [diasemana, setDiasemana] = useState([]);

  const BASE_URL = "http://localhost:4000/";

  const fetchactivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}activities`);
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error(`error al retonrar actividades: ${error}`);
    }
  };

  const fetchdias = async () => {
    try {
      const response = await fetch(`${BASE_URL}diasemana`);
      const data = await response.json();
      setDiasemana(data);
    } catch (error) {
      console.error(`hubo un error: ${error}`);
    }
  };

  useEffect(() => {
    fetchactivities();
    fetchdias();
  }, []);

  const handleInscribir = (nombreActividad) => {
    alert(`inscripto en ${nombreActividad}`);
  };

  return (
    <div className="activities-container">
      {activities.map((actividad, index) => (
        <Card
          key={index}
          title={actividad.nombre}
          subtitle={actividad.descripcion}
        >
          <h3>{actividad.nombre}</h3>
          <p>{actividad.descripcion}</p>
          <ul>
            {actividad.horarios.map((horario, i) => (
              <li key={i}>
                {diasemana[horario.dia]} - {horario["hora-inicio"]} -{" "}
                {horario["hora-fin"]}
              </li>
            ))}
          </ul>

          {IsLoggedIn && (
            <button onClick={() => handleInscribir(actividad.nombre)}>
              Inscribirse
            </button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Activities;
