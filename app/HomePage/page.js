"use client"
import Image from "next/image";
import { useEffect,useState } from 'react';
import '../assets/css/homePage.css';
import '../assets/css/trending.css';
import img1 from '../assets/img/homePageImg/clothing-1.png';
import img2 from '../assets/img/homePageImg/clothing-2.png';
import img3 from '../assets/img/homePageImg/clothing-3.png';
import img4 from '../assets/img/homePageImg/clothing-4.png';
import img5 from '../assets/img/homePageImg/clothing-5.png';

import Slider from '../components/SlidesPerView'

function HomePage(){

    const[trendingData, setTrendingData] = useState({
        womanTrending:[],
        manTrending:[],
        choosedGender:"woman",
    })

    useEffect(()=>{
        (async function GetHomePageData() {
            debugger
            const [woman, man] = await Promise.all([
                fetch('https://dummyjson.com/products/category/womens-dresses'),
                fetch('https://dummyjson.com/products/category/mens-shirts')
            ]) 
            let [manT, womanT] = await Promise.all([
                man.json(), woman.json()
            ])
            debugger
            setTrendingData(prevState=>({
                ...prevState,
                womanTrending:womanT.products,
                manTrending:manT.products
            }))
        })();
    },[]);
    
    function changeGender(gender) {
        setTrendingData(prevState => ({
            ...prevState,
            choosedGender: gender
        }));
    }
    return(
        <>
            <div className="homePage-Div">
                <div className="main-Slider">
                    <div className="home__circle">
                        <div className="home__subcircle"></div>
                        <h1 className="home__title">GCG</h1>
                    </div>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="slider">
                                <Image className="home__img" src={img1} alt="" />
                            </div>
                            <div className="slider">
                                <Image className="home__img" src={img2} alt="" />
                            </div>
                            <div className="slider">
                                <Image className="home__img" src={img3} alt="" />
                            </div>
                            <div className="slider">
                                <Image className="home__img" src={img4} alt="" />
                            </div>
                            <div className="slider">
                                <Image className="home__img" src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ternding-Item-Conteiner">
                   <div className="trending-Slider-Header">
                        <div>
                            <h2>trending items</h2>
                            <p className="capitalize">Browse the collection of our best selling and trending products</p>
                        </div>
                        <ul className="trending-Ul">
                            <li 
                                onClick={() => changeGender("woman")} 
                                className={`treding-gender ${trendingData.choosedGender === "woman" ? "trandingActive" : ""}`}
                            >
                                Woman
                            </li>
                            <li 
                                onClick={() => changeGender("man")} 
                                className={`treding-gender ${trendingData.choosedGender === "man" ? "trandingActive" : ""}`}
                            >
                                Man
                            </li>
                            <li className="treding-gender">Kid</li>
                        </ul>
                   </div>
                   {trendingData.choosedGender === "woman" ? (
                        <Slider obj={trendingData.womanTrending} gender="woman" />
                    ) : (
                        <Slider obj={trendingData.manTrending} gender="man" />
                    )}
                </div>     
            </div>   
        </>
    )
}
export default HomePage;