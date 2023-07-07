import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Logo from "../Assets/Logo";

const Welcome = () => {
    const words = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'VUE', 'TYPESCRIPT']

    const interval = 1000

    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const slideHeight = 70; // Adjust the slide height as needed
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % words.length);
      }, interval);
  
      return () => clearInterval(timer);
    }, [words.length, interval]);
  
    useEffect(() => {
      const carousel = carouselRef.current;
      carousel.style.transform = `translateY(-${slideHeight * currentSlide}px)`;
    }, [currentSlide, slideHeight]);
  
    return (
        <div className="bg-[#eeeeee] text-black h-screen w-full flex justify-center items-center fixed z-50 top-0">
            <Logo />

            <div className="overflow-hidden ml-10 text-emerald-800">
                <div
                    ref={carouselRef}
                    className="carousel__slides text-2xl font-bold w-full transition-transform duration-500"
                    style={{ height: `70px` }}
                >
                    {words.map((word, index) => (
                        <div key={index} className="flex items-center h-full w-44"> 
                            <span>{word}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default Welcome;