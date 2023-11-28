import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from '@react-three/drei';
import {useFrame, useThree} from "@react-three/fiber";
import { a } from '@react-spring/three';

import feraligatr from '../assets/baby_feraligatr.glb';
const Feraligatr = (props) => {
    const ref = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials, animations } = useGLTF(feraligatr);
    const {actions} = useAnimations(animations, ref);
    useEffect(()=>{
        actions['Sit'].play();
      }, [actions])

    return (
        <a.group  ref={ref} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="9def6a441ae848ffacea92f6f9cf9016fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="body"
                  position={[0, 91.233, 6.609]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.288}
                />
                <group
                  name="floor"
                  position={[0, -1.641, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={118.695}
                >
                  <mesh
                    name="floor_shadow_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.floor_shadow_0.geometry}
                    material={materials.shadow}
                  />
                </group>
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_8">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.gator}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.black}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <group
                      name="Object_10"
                      position={[0, 91.233, 6.609]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={21.288}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
        </a.group>
  )
}

export default Feraligatr
