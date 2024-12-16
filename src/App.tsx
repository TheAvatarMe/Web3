import Scene from './components/XRScene/Scene';
import Web3Connect from './components/Web3Connect';
import Header from './components/UI/Header';

export default function App() {
  return (
    <div className="w-full h-screen">
      <Web3Connect />
      <div className="absolute inset-0">
        <Scene />
      </div>
      <Header 
        title="The Avatar Me"
        subtitle="Enter the metaverse with your Web3 identity"
      />
    </div>
  );
}