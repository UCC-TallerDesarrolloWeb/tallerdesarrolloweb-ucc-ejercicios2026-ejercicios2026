import "@styles/Home.scss";
import funcionalImg from '@assets/home/funcional.jpg';
import zumba from '@assets/home/zumba.jpg';

const Home = () => {
    return(
        <div>
            <div className="card-home">
                <div>
                    <img src="/home/taekwondo.jpg" alt="Taekwondo" />
                    <h2>Taekwondo</h2>
                </div>
                <div>
                    <img src="/home/yoga.webp" alt="Yoga" />
                    <h2>Yoga</h2>
                </div>
                <div>
                    <img src={funcionalImg} alt="Funcional" />
                    <h2>Funcional</h2>
                </div>
                <div>
                    <img src={zumba} alt="Zumba" />
                    <h2>Zumba</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;