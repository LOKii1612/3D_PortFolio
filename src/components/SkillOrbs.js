import React from 'react';
import { Float, Text } from '@react-three/drei';

const skills = [
  { name: 'React', position: [-3, 3, 1], color: '#BF953F' },
  { name: 'Node.js', position: [3, 3, 1], color: '#3c873a' },
  { name: 'PostgreSQL', position: [-4, 0.5, -2], color: '#336791' },
  { name: 'DSA', position: [4, 0.5, -2], color: '#8B0000' },
  { name: 'Ethereum', position: [0, 4, -1], color: '#627eea' },
  { name: 'Java', position: [0, 2.5, 3], color: '#4B0082' },
  { name: 'Python', position: [0, 1, -3], color: '#3572A5' },
];

export default function SkillOrbs() {
  return (
    <>
      {skills.map((skill, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={1.5}>
          <mesh position={skill.position}>
            <sphereGeometry args={[0.75, 32, 32]} />
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={0.5}
              metalness={0.3}
              roughness={0.2}
            />
            <Text
              position={[0, 0, 0.85]}
              fontSize={0.18}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
          </mesh>
        </Float>
      ))}
    </>
  );
}