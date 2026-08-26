'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Project = {
  title: string;
  code: string;
  docType: string;
  route: string;
  tags: string[];
  image: string;
};

const projects: Project[] = [
  {
    title: 'Global Freight',
    code: '04471',
    docType: 'B/L',
    route: 'Rotterdam \u2192 Singapore',
    tags: ['Sea Freight', 'Logistics', 'Tracking'],
    image: '/featured1.png',
  },
  {
    title: 'Smart Warehousing',
    code: '11820',
    docType: 'WR',
    route: 'Distribution Network',
    tags: ['Warehousing', 'Automation', 'Supply Chain'],
    image: '/featured2.png',
  },
  {
    title: 'Express Cargo',
    code: '22896',
    docType: 'AWB',
    route: 'Dubai \u2192 New York',
    tags: ['Air Freight', 'Delivery', 'Global'],
    image: '/featured3.png',
  },
  {
    title: 'Route Network',
    code: '30751',
    docType: 'CMR',
    route: 'Continental Road Grid',
    tags: ['Road Freight', 'Routing', 'Distribution'],
    image: '/featured4.png',
  },
];

const PAPER = '#E3E6E1';
const INK = '#12161A';
const AMBER = '#3E5A6B';
const STEEL = '#3E5A6B';

export default function FeaturedSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const [shown, setShown] = useState<number | null>(null);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [incomingVisible, setIncomingVisible] = useState(false);

  const target = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const crossfadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // smooth (lerped) cursor follow, always running while a card is active
  useEffect(() => {
    const tick = () => {
      setPos((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.18,
        y: prev.y + (target.current.y - prev.y) * 0.18,
      }));
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      if (crossfadeTimer.current) clearTimeout(crossfadeTimer.current);
    };
  }, []);

  const handleEnter = (index: number, e: React.MouseEvent) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);

    const point = { x: e.clientX, y: e.clientY };
    target.current = point;

    if (activeProject === null) {
      setPos(point);
      setShown(index);
      setIncoming(null);
      setIncomingVisible(false);
    } else if (index !== shown) {
      if (crossfadeTimer.current) clearTimeout(crossfadeTimer.current);
      setIncoming(index);
      requestAnimationFrame(() => setIncomingVisible(true));
      crossfadeTimer.current = setTimeout(() => {
        setShown(index);
        setIncoming(null);
        setIncomingVisible(false);
      }, 280);
    }

    setActiveProject(index);
    requestAnimationFrame(() => setVisible(true));
  };

  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setVisible(false);
      hideTimeout.current = setTimeout(() => {
        setActiveProject(null);
        setShown(null);
        setIncoming(null);
        setIncomingVisible(false);
      }, 250);
    }, 60);
  };

  return (
    <div className="relative h-[350vh] w-screen">
      <div className="sticky top-0">
        <div style={{ backgroundColor: PAPER, color: INK }}>
          <div className="flex flex-col gap-10 px-4 pt-16 pb-10 md:flex-row md:items-end md:gap-6 md:pt-24 md:pb-16">
            <div className="md:w-2/5">
              <span
                className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: STEEL }}
              >
                <span
                  className="h-2 w-2"
                  style={{
                    backgroundColor: AMBER,
                    clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
                  }}
                />
                Manifest \u2014 Featured Operations
              </span>
            </div>

            <div className="md:w-3/5">
              <h2 className="max-w-xl text-4xl leading-[1.05] font-black tracking-tight md:text-5xl">
                Every shipment tells its own story of collaboration and performance.
              </h2>
              <Button text="Who we are" color="black" className="mt-8" />
            </div>
          </div>

          <div className="relative border-t" style={{ borderColor: `${INK}1a` }}>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative flex min-h-32 cursor-pointer items-center gap-4 border-b px-4 py-6 transition-colors duration-300 hover:bg-black/[0.03] md:py-0"
                style={{ borderColor: `${INK}1a` }}
                onMouseEnter={(e) => handleEnter(index, e)}
                onMouseLeave={handleLeave}
                onMouseMove={(e) => {
                  target.current = { x: e.clientX, y: e.clientY };
                }}
              >
                <div className="hidden w-24 shrink-0 font-mono text-xs tracking-widest md:block">
                  <span style={{ color: AMBER }}>{project.docType}</span>
                  <span className="opacity-40"> {project.code}</span>
                </div>

                <div className="w-full md:w-2/5">
                  <h3 className="text-3xl font-semibold opacity-60 transition-opacity duration-300 group-hover:opacity-100 md:text-4xl">
                    {project.title}
                  </h3>
                  <p
                    className="mt-1 font-mono text-xs tracking-wide md:hidden"
                    style={{ color: STEEL }}
                  >
                    {project.route}
                  </p>
                </div>

                <div className="hidden w-1/3 flex-col gap-2 md:flex">
                  <span className="font-mono text-xs tracking-wide" style={{ color: STEEL }}>
                    {project.route}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide uppercase opacity-50 transition-opacity duration-300 group-hover:opacity-90"
                        style={{ borderColor: `${INK}33` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ml-auto flex md:w-16 md:justify-end">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 group-hover:-rotate-0"
                    style={{ borderColor: `${INK}4d` }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <path
                        d="M4 16L16 4M7 4H16V13"
                        stroke={INK}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {activeProject !== null && shown !== null && (
              <div
                className="pointer-events-none fixed z-[60] hidden md:block"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: `translate(-50%, -50%) rotate(-2deg) scale(${visible ? 1 : 0.9})`,
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 250ms ease, transform 250ms ease',
                  willChange: 'transform, opacity',
                }}
              >
                <div className="relative h-72 w-48 overflow-hidden bg-black shadow-2xl">
                  <Image
                    src={projects[shown].image}
                    alt={projects[shown].title}
                    fill
                    className="object-cover opacity-90"
                  />

                  {incoming !== null && (
                    <Image
                      src={projects[incoming].image}
                      alt={projects[incoming].title}
                      fill
                      className="object-cover"
                      style={{
                        opacity: incomingVisible ? 0.9 : 0,
                        transition: 'opacity 280ms ease',
                      }}
                    />
                  )}

                  <div
                    className="pointer-events-none absolute inset-x-0 h-8 opacity-70"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${AMBER}55, transparent)`,
                      animation: 'scan-sweep 2.2s linear infinite',
                    }}
                  />

                  {[
                    'top-2 left-2 border-t border-l',
                    'top-2 right-2 border-t border-r',
                    'bottom-2 left-2 border-b border-l',
                    'bottom-2 right-2 border-b border-r',
                  ].map((corner) => (
                    <div
                      key={corner}
                      className={`absolute h-3 w-3 ${corner}`}
                      style={{ borderColor: AMBER }}
                    />
                  ))}

                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/90 to-transparent px-3 pt-6 pb-2">
                    <div
                      className="font-mono text-[10px] tracking-widest transition-opacity duration-200"
                      style={{ color: AMBER }}
                    >
                      {projects[activeProject].docType} {projects[activeProject].code}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] tracking-wide text-white/70">
                      {projects[activeProject].route}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
