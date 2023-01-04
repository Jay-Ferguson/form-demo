import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use"


const Confetti = dynamic(() => import('react-confetti'), {
  ssr:false,
})

export default function Success() {
  const [pieces, setPieces] = useState(300);
  const [loaded, setLoaded] = useState(false);

  const {width, height} = useWindowSize()

  useEffect(() => {
    setLoaded(true)
  }, [])

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
  
  useEffect(() => {
    stopConfetti();
  }, []);
  
  
  
  const router = useRouter();
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" h-screen items-center flex justify-center relative"
    >
      <div className="bg-white rounded-lg w-1/3 font-latoRegular text-gray-700 p-20 min-w-min">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for the email {router.query.name} ✨
        </h1>
        <p className="text-lg  text-gray-500">
          We have sent you an email over at {router.query.email}. We will get
          back to you as soon as we can!
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces}/>
    </m.main>
  );
}
