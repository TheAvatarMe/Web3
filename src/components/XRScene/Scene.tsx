import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, VRButton, useXR } from '@react-three/xr';
import Avatar from './Avatar';
import Lighting from './Lighting';
import Environment from './Environment';

function XRContent() {
  const { isPresenting } = useXR();

  return (
    <>
      <Lighting />
      <Environment />
      <Avatar />
      {!isPresenting && <OrbitControls />}
    </>
  );
}

export default function Scene() {
  return (
    <>
      <VRButton className="absolute bottom-4 right-4 z-10" />
      <Canvas>
        <Suspense fallback={null}>
          <XR>
            <XRContent />
          </XR>
        </Suspense>
      </Canvas>
    </>
  );
}