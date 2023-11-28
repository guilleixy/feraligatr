import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './components/Loader'
import Feraligatr from './components/Feraligatr'

function getRandomPosition() {
  // Genera posiciones aleatorias dentro de un rango específico
  const getRandomCoordinate = () => (Math.random() - 0.5) * 10;
  const x = Math.max(-5, Math.min(5, getRandomCoordinate()));
  const y = Math.max(-5, Math.min(5, getRandomCoordinate()));
  const z = Math.max(-5, Math.min(5, getRandomCoordinate()));
  return [x, y, z];
}

function getRandomRotation() {
  // Genera rotaciones aleatorias en grados
  return [Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI];
}

function App() {
  const [feraligatrProps, setFeraligatrProps] = useState({
    position: [0, -1, 0],
    scale: [0.02, 0.02, 0.02],
    rotation: [0, 0, 1],
  });

  const handleRandomize = () => {
    // Actualiza las propiedades de posición y rotación con valores aleatorios
    setFeraligatrProps({
      position: getRandomPosition(),
      scale: [0.02, 0.02, 0.02],
      rotation: getRandomRotation(),
    });
  };

  return (
    <main className=''>
      <button onClick={handleRandomize}>Randomize</button>
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5} />
          <Feraligatr {...feraligatrProps} className="cursor" />
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;

