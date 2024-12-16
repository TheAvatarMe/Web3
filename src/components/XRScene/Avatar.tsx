import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Interactive } from '@react-three/xr';
import type { Mesh } from 'three';

interface AvatarProps {
  position?: [number, number, number];
}

function Avatar({ position = [0, 0, -2] }: AvatarProps) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const handleSelect = () => {
    console.log('Avatar selected');
  };

  return (
    <Interactive onSelect={handleSelect}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Interactive>
  );
}

export default Avatar;