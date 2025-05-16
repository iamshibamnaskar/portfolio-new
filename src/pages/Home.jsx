import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import RichTextCard from '../components/HomeInfo'

function Home() {
  const [isRotating, setisrotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1.2, 1.2, 1.2]
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [planeScale, planePosition] = adjustPlaneForScreenSize()
  const [screenScale, screenPosition, rotation] = adjustIslandForScreenSize()
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 z-10 flex justify-center md:justify-start w-full px-4 md:px-12'>
  {currentStage && <RichTextCard currentStage={currentStage} />}
</div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >


        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <Bird />
          <Sky isRotating={isRotating} />

          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setisrotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />

        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home


