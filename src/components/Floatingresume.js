// FloatingResume.js
import React from 'react';
import { Float, Text, Html } from '@react-three/drei';

export default function FloatingResume() {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.5}
      floatIntensity={1.8}
      position={[0, 0.5, 0]}
    >
      <mesh>
        <boxGeometry args={[4.5, 2.2, 0.15]} />
        <meshStandardMaterial
          color="#00bcd4"
          emissive="#2196f3"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.1}
        />
        
        {/* Gradient Overlay Glow (HTML Trick) */}
        <Html center distanceFactor={10} style={{ pointerEvents: 'none' }}>
          <div
            style={{
              width: '280px',
              height: '135px',
              background: 'linear-gradient(145deg, rgba(0,212,255,0.2), rgba(9,9,121,0.15))',
              borderRadius: '20px',
              boxShadow: '0 0 35px rgba(0,255,255,0.3)',
              padding: '25px',
              fontFamily: 'Segoe UI, sans-serif',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              transform: 'translateY(10px)',
              backdropFilter: 'blur(4px)',
              color: '#ffffff',
            }}
          >
            <h2 style={{ fontSize: '22px', margin: '0', color: '#ffffff' }}>
              <b style={{ textShadow: '0 0 10px cyan' }}>NULI LOKESH</b>
            </h2>
            <p style={{ marginTop: '10px', fontSize: '15px', color: '#e0f7fa' }}>
              Full-Stack Developer | AI & Blockchain Enthusiast
            </p>
            <p style={{ marginTop: '5px', fontSize: '13px', color: '#b3e5fc' }}>
              lokeshnuli16@gmail.com
            </p>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
