import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Interactive, useXR } from '@react-three/xr';

function Avatar({ position = [0, 0, 0] }) {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function Scene() {
  const { isPresenting } = useXR();

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Interactive onSelect={() => console.log('selected')}>
        <Avatar position={[0, 0, -2]} />
      </Interactive>

      {!isPresenting && <OrbitControls />}
    </Canvas>
  );
}

export default Scene;