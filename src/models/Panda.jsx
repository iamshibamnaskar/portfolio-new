import React, { useEffect, useRef, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import panda from '../assets/3d/pandaanimated.glb'

export function Panda(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(panda)
  const { actions } = useAnimations(animations, group)

  // Convert existing materials to MeshStandardMaterial while preserving textures
  const eyeMaterial = useMemo(() => {
    const base = materials?.Eyes
    return new MeshStandardMaterial({
      map: base?.map || null,
      color: base?.color || 'black',
      metalness: 0.3,
      roughness: 0.7
    })
  }, [materials])

  const bodyMaterial = useMemo(() => {
    const base = materials?.Body
    return new MeshStandardMaterial({
      map: base?.map || null,
      color: base?.color || 'white',
      metalness: 0.2,
      roughness: 0.8
    })
  }, [materials])

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play()
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="Body">
            <skinnedMesh
              geometry={nodes['5OOOEWDBCBR630L4R438TGJCD'].geometry}
              material={eyeMaterial}
              skeleton={nodes['5OOOEWDBCBR630L4R438TGJCD'].skeleton}
            />
            <skinnedMesh
              geometry={nodes['5OOOEWDBCBR630L4R438TGJCD_1'].geometry}
              material={bodyMaterial}
              skeleton={nodes['5OOOEWDBCBR630L4R438TGJCD_1'].skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}
