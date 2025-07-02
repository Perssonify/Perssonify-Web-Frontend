import React from 'react';
import Image from 'next/image';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';

// Demo icon paths from public/Icons/
const iconPaths = [
  '/Icons/robot.svg',
  '/Icons/technical-support.svg',
  '/Icons/user.svg',
  '/Icons/web-development.svg',
  '/Icons/analytic-report.svg',
  '/Icons/market-analysis.svg',
];

const OrbitingCirclesDemo: React.FC = () => {
  return (
    <div className="relative flex h-[350px] w-full items-center justify-center">
      {/* Center fixed icon */}
      <div className="absolute z-10 flex items-center justify-center">
        <Image
          src={'/Icons/globe.svg'}
          alt="Center Icon"
          width={80}
          height={80}
          className="rounded-full shadow-lg bg-white dark:bg-black p-2 object-contain"
          priority
        />
      </div>
      {/* Orbiting icons */}
      <OrbitingCircles iconSize={48} color="var(--color-primary)">
        {iconPaths.map((src, i) => (
          <div className='rounded-full bg-white dark:bg-black p-2 shadow' key={i}>
            <Image
              key={src}
              src={src}
              alt={`Orbit Icon ${i + 1}`}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={32} radius={100} reverse speed={2} color="var(--color-primary)">
        {iconPaths.slice(1, 5).map((src, i) => (
          <Image
            key={src + '-small'}
            src={src}
            alt={`Orbit Icon Small ${i + 1}`}
            width={32}
            height={32}
            className="rounded-full bg-white dark:bg-black p-1 object-contain shadow"
          />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default OrbitingCirclesDemo; 