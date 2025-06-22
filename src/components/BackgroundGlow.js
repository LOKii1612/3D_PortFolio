// components/BackgroundGlow.js
import React from 'react';

export default function BackgroundGlow() {
  return (
    <mesh position={[0, 0, -10]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color="#0a192f" transparent opacity={0.5} />
    </mesh>
  );
}
