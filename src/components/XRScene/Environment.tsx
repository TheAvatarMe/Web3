import { Environment as DreiEnvironment } from '@react-three/drei';

export default function Environment() {
  return (
    <DreiEnvironment
      preset="sunset"
      background
      blur={0.8}
    />
  );
}