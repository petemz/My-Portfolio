import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from '../Assets/Logo';

const slideVariants = {
    enter: {
      opacity: 0,
      y: '100%',
    },
    center: {
      opacity: 1,
      y: '0%',
    },
    exit: {
      opacity: 0,
      y: '-100%',
    },
  };

const Test = () => {
    const words = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'VUE', 'TYPESCRIPT']

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
  
      return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="bg-[#eeeeee] h-screen w-full flex justify-center items-center fixed z-50 top-0">
            <Logo />

            <div className="w-48 ml-4 flex text-emerald-800 text-xl font-semibold rounded-lg p-4">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentWordIndex}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={slideVariants}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        {words[currentWordIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>   
    )
}

export default Test