// App.js (Upgraded: Enhanced Theme + Modular Effects)
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Stars, Sparkles } from '@react-three/drei';
import FloatingResume from './components/Floatingresume';
import SkillOrbs from './components/SkillOrbs';
import ProjectCards from './components/ProjectCards';
import ContactLinks from './components/ContactLinks';
import BackgroundGlow from './components/BackgroundGlow';
//import FloatingStars from './components/FloatingStars';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: 'radial-gradient(circle at center, #070b1e, #01030c)' }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }} shadows>
        {/* Dynamic Star Field */}
        <Stars radius={100} depth={80} count={5000} factor={4} fade speed={2} />

        {/* Background Enhancer */}
        <BackgroundGlow />

        {/* Animated Sparkles */}
        <Sparkles count={200} scale={[12, 12, 12]} size={2} speed={0.4} color="white" />

        {/* Lighting */}
        <ambientLight intensity={0.7} color="#aaffff" />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ff00ff" castShadow />
        <Environment preset="sunset" background={false} />

        {/* User Interactions */}
        <OrbitControls enablePan enableZoom enableRotate />

        {/* Main Components */}
        <FloatingResume />
        <SkillOrbs />
        <ProjectCards />
        <ContactLinks />

        {/* Floor Shadow */}
        <ContactShadows position={[0, -5, 0]} opacity={0.6} width={20} height={20} blur={3.5} far={8} />
      </Canvas>
    </div>
  );
}

export default App;
