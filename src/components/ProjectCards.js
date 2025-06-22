import React from 'react';
import { Float, Text } from '@react-three/drei';

const projects = [
  {
    title: 'Rail-India',
    desc: 'Railway system with React, Node.js & PostgreSQL.',
    position: [-4.5, -1.5, 2],
    bgColor: '#003c8f', // Indigo Blue
    textColor: '#ffffff',
  },
  {
    title: 'Disease Detection',
    desc: 'ML health platform using Flask & Deep Learning.',
    position: [4.5, 1.5, 2],
    bgColor: '#6a1b9a', // Deep Purple
    textColor: '#ffffff',
  },
  {
    title: 'Prediction Market',
    desc: 'Blockchain app with Ethereum smart contracts.',
    position: [2, -3, 0],
    bgColor: '#00695c', // Strong Teal
    textColor: '#ffffff',
  }
];

export default function ProjectCards() {
  return (
    <>
      {projects.map((project, i) => (
        <Float key={i} speed={1} rotationIntensity={1.1} floatIntensity={1.2}>
          <mesh position={project.position}>
            <boxGeometry args={[3.6, 1.8, 0.15]} />
            <meshStandardMaterial
              color={project.bgColor}
              emissive={project.bgColor}
              emissiveIntensity={0.4}
              metalness={0.5}
              roughness={0.2}
            />
            <Text
              position={[0, 0.5, 0.09]}
              fontSize={0.26}
              color={project.textColor}
              anchorX="center"
              anchorY="middle"
              maxWidth={2.8}
            >
              {project.title}
            </Text>
            <Text
              position={[0, -0.15, 0.09]}
              fontSize={0.14}
              color={project.textColor}
              anchorX="center"
              anchorY="middle"
              maxWidth={2.8}
              lineHeight={1.2}
            >
              {project.desc}
            </Text>
          </mesh>
        </Float>
      ))}
    </>
  );
}