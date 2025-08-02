import React, {Suspense, useEffect, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Homeinfo from '../components/Homeinfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons/icon'

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentstage, setCurrentstage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(()=>{
    if(isPlayingMusic)
    {
      audioRef.current.play();
    }
    return()=>{
      audioRef.current.pause();
    }
  },[isPlayingMusic])
  const adjustPlaneScreenSize = () =>{
    let screenScale, screePosition;
    if(window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5];
      screePosition = [0,-1.5,0];
    }
    else{
      screenScale = [3,3,3];
      screePosition = [0,-4,-4];
    }
    return [screenScale, screePosition];
  }
  const adjustIslandForScreenSize = () =>{
    let screenScale, screePosition;
    if(window.innerWidth<768)
    {
      screenScale = [0.9,0.9,0.9];
      screePosition = [0,-0.65,-43.4];
    }
    else
    {
      screenScale = [1,1,1];
      screePosition = [0,-6.5,-43.4];
    }
    return [screenScale, screePosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneScreenSize();
  return (
    <div className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentstage && <Homeinfo currentstage={currentstage}/>}
      </div>
      <Canvas className={'w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}'} camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <pointLight position={[10, 5, 10]} intensity={2}/>
        <spotLight position={[0,50,10]} angle={0.15} penumbra={1} intensity={2}/>
        <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
        <Bird />
        <Sky isRotating={isRotating} />
        <Island isRotating={isRotating} setIsRotating={setIsRotating} setCurrentstage={setCurrentstage} position={islandPosition} screenScale={islandScale} rotation={[0.1,4.7077,0]}/>
        <Plane isRotating={isRotating} position={planePosition} rotation={[0,20.1,0]} scale={planeScale} />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={isPlayingMusic ? soundoff : soundon} alt='jukebox' onClick={()=>setIsPlayingMusic((curr)=> !curr)} className='w-10 h-10 cursor-pointer object-contain'/>
      </div>
    </div>
  )
}

export default Home