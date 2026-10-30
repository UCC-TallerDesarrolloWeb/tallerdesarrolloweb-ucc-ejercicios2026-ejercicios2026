import './styles/Home.scss';

import zumba from './assets/home/zumba.jpg';
import funcional from './assets/home/funcional.jpg';

const actividades = [
  { titulo: 'Taekwondo', imagen: '/home/taekwondo.jpg' }, 
  { titulo: 'Yoga', imagen: '/home/yoga.webp' },          
  { titulo: 'Zumba', imagen: zumba },                    
  { titulo: 'Funcional', imagen: funcional },            
];

const Home = () => {
  return (
    <section>
      <h1>Nuestras actividades</h1>
      <div>
        <h2>En esta pagina hay info del gym</h2>
      </div>
    </section>
  );
};

export default Home;