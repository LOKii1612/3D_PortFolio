// // import React from 'react';
// // import { Text, RoundedBox } from '@react-three/drei';

// // export default function ContactLinks() {
// //   const links = [
// //     {
// //       title: 'GitHub',
// //       url: 'https://github.com/NULILOKESH',
// //       color: '#2196f3', // Soft Blue
// //       position: [-2.5, -3.5, 3],
// //     },
// //     {
// //       title: 'LinkedIn',
// //       url: 'https://www.linkedin.com/in/nulilokesh/',
// //       color: '#7e57c2', // Soft Purple
// //       position: [0, -3.5, 3],
// //     },
// //     {
// //       title: 'Resume',
// //       url: 'https://drive.google.com/file/d/1FzP_jcdbHROhE-LpSVYXqbwL2UMNZPL-/view?usp=sharing',
// //       color: '#66bb6a', // Soft Green
// //       position: [2.5, -3.5, 3],
// //     },
// //   ];

// //   const handleLinkClick = (url) => window.open(url, '_blank');

// //   return (
// //     <group position={[0, 0, 0]}>
// //       {links.map((link, index) => (
// //         <group key={index} position={link.position}>
// //           <RoundedBox
// //             args={[1.6, 0.6, 0.2]} // smaller size
// //             radius={0.15}
// //             smoothness={4}
// //             onClick={() => handleLinkClick(link.url)}
// //             onPointerOver={(e) => (e.object.material.emissiveIntensity = 0.5)}
// //             onPointerOut={(e) => (e.object.material.emissiveIntensity = 0.2)}
// //             castShadow
// //           >
// //             <meshStandardMaterial
// //               color={link.color}
// //               emissive={link.color}
// //               emissiveIntensity={0.2}
// //               metalness={0.3}
// //               roughness={0.25}
// //             />
// //           </RoundedBox>

// //           <Text
// //             position={[0, 0, 0.15]}
// //             fontSize={0.22}
// //             color="white"
// //             anchorX="center"
// //             anchorY="middle"
// //           >
// //             {link.title}
// //           </Text>
// //         </group>
// //       ))}
// //     </group>
// //   );
// // }


// import React from 'react';
// import { Html } from '@react-three/drei';

// export default function ContactLinks() {
//   return (
//     <Html position={[0, -3.5, 0]}>
//       <div style={{
//         display: 'flex',
//         gap: '20px',
//         background: 'rgba(0,0,0,0.5)',
//         padding: '12px 20px',
//         borderRadius: '15px',
//         border: '1px solid #00ffff',
//         boxShadow: '0 0 20px #00ffff',
//       }}>
//         <a
//           href="https://github.com/your-github"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={linkStyle}
//         >
//           GitHub
//         </a>
//         <a
//           href="https://www.linkedin.com/in/your-linkedin"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={linkStyle}
//         >
//           LinkedIn
//         </a>
//         <a
//           href="https://your-resume-link.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={linkStyle}
//         >
//           Resume
//         </a>
//       </div>
//     </Html>
//   );
// }

// const linkStyle = {
//   color: '#00ffff',
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   fontSize: '16px',
//   padding: '6px 12px',
//   border: '1px solid #00ffff',
//   borderRadius: '8px',
//   transition: '0.2s',
// };


// Enhanced ContactLinks.js (Advanced Neon Style with Structure)
import React from 'react';
import { RoundedBox, Text, Float } from '@react-three/drei';

export default function ContactLinks() {
  const links = [
    {
      title: 'GitHub',
      url: 'https://github.com/LOKii1612',
      color: '#00e5ff',
      glow: '#00bcd4',
      position: [-2.2, -3.7, 2.5],
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nuli-lokesh-nuli/',
      color: '#00e676',
      glow: '#1de9b6',
      position: [0, -3.7, 2.5],
    },
    {
      title: 'Resume',
      url: 'https://drive.google.com/file/d/1d81nXerafA2Mq79zUSIeaTC6zlxAOZuo/view?usp=sharing',
      color: '#7c4dff',
      glow: '#651fff',
      position: [2.2, -3.7, 2.5],
    },
  ];

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <group position={[0, 0, 0]}>
      {links.map((link, idx) => (
        <Float
          key={idx}
          position={link.position}
          speed={1}
          rotationIntensity={0.4}
          floatIntensity={0.8}
        >
          <group>
            <RoundedBox
              args={[2.2, 0.75, 0.2]}
              radius={0.25}
              smoothness={6}
              onClick={() => handleClick(link.url)}
              onPointerOver={(e) => (e.object.material.emissiveIntensity = 0.5)}
              onPointerOut={(e) => (e.object.material.emissiveIntensity = 0.2)}
              castShadow
            >
              <meshStandardMaterial
                color={link.color}
                emissive={link.glow}
                emissiveIntensity={0.2}
                metalness={0.4}
                roughness={0.25}
              />
            </RoundedBox>

            <Text
              position={[0, 0, 0.15]}
              fontSize={0.28}
              color="white"
              anchorX="center"
              anchorY="middle"
              outlineColor="black"
              outlineWidth={0.005}
              fontWeight="bold"
            >
              {link.title}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}
