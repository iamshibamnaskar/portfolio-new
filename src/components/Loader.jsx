import React from 'react'
import { Html } from '@react-three/drei'
import { FourSquare } from 'react-loading-indicators'

function Loader() {
  return (
    <Html>
        <FourSquare color="#32cd32" size="medium" text="" textColor="" />
    </Html>
  )
}

export default Loader