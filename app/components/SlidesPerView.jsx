'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Slider(props) {
    debugger
    const router = useRouter();

    const [sliderState, setSliderState] = useState({
        clickAmount: 0,
        transferX:0
    });
    const sliderToShow = 4; // Number of slides to show
    const trending = props.obj;
    let clickAmount = trending.length - sliderToShow;

    function handleNextClick() {
        if (sliderState.clickAmount < clickAmount) {
            var width = 100 / sliderToShow;
            setSliderState({
                clickAmount: ++sliderState.clickAmount,
                transferX: sliderState.transferX + width
            })
        }
    }

    function handlePrevClick() {
        if (sliderState.clickAmount > 0) {
            var width = 100 / sliderToShow;
            setSliderState({
                clickAmount: --sliderState.clickAmount,
                transferX: sliderState.transferX - width
            })
        }
    } 
    function handleProductClick(id){
        router.push(`/DetailedPage/${id}`)
    }   
    return (
        <>
            <div className="tranding-Swiper-Conteiner">
                <div className="tranding-Slider" 
                    style={{
                        transform:`translate3d(-${sliderState.transferX}%, 0, 0)`,
                    }}>
                    {
                        trending.map((elemnt, index) => {
                            return (
                                <div
                                    style={{
                                        flex: `0 0 calc(100% / ${sliderToShow})`
                                    }}
                                    key={elemnt.id} // Fix key warning
                                    className={`slider${index} img1`}
                                    onClick={()=>handleProductClick(elemnt.id)}
                                >
                                    <Image
                                        alt={`Slide ${index + 1}`}
                                        width={500}
                                        height={500}
                                        src={elemnt.images[0]}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="slider-navigation">
                    <p onClick={handlePrevClick} aria-label="Previous Slide">&#11144;</p>
                    <p id="nextSlide" onClick={handleNextClick} aria-label="Next Slide">&#11146;</p>
                </div>
            </div>
        </>
    );
}
