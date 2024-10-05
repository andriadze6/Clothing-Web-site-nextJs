import Header from "../components/Header";
import '../assets/css/homePage.css';
import img1 from '../assets/img/homePageImg/clothing-1.png';
import img2 from '../assets/img/homePageImg/clothing-2.png';
import img3 from '../assets/img/homePageImg/clothing-3.png';
import img4 from '../assets/img/homePageImg/clothing-4.png';
import img5 from '../assets/img/homePageImg/clothing-5.png';


function HomePage(){
    return(
        <div>
            <Header></Header>
            <div className="homePage-Div">
                <div className="main-Slider">
                    <div className="home__circle">
                        <div className="home__subcircle"></div>
                        <h1 className="home__title">GCG</h1>
                    </div>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="slider">
                                <img className="home__img" src={img1} alt="" />
                            </div>
                            <div className="slider">
                                <img className="home__img" src={img2} alt="" />
                            </div>
                            <div className="slider">
                                <img className="home__img" src={img3} alt="" />
                            </div>
                            <div className="slider">
                                <img className="home__img" src={img4} alt="" />
                            </div>
                            <div className="slider">
                                <img className="home__img" src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    )
}
export default HomePage;