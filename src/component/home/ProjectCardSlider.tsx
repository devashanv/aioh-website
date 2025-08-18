import React, { useLayoutEffect, useMemo, useRef, useState } from "react";

import { gsap } from 'gsap';
import MotionPathPlugin from "gsap/MotionPathPlugin";

import ProjectCard from "./ProjectCard";
import type { Project } from "../../data/projects";

// import plugin
gsap.registerPlugin(MotionPathPlugin)

// control props
type Props = {
    ourProjects: Project[];
    visibleCount?: number;
    duration?: number;
}

const ProjectCardSlider: React.FC<Props> = ({ ourProjects, visibleCount = 3, duration = 12 }) => {

    // initialize sliding path var
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    // set project slider props 
    const [cardProjects, setCardProjects] = useState<Project[]>(
        () => ourProjects.slice(0, visibleCount)
    )

    // set next project to loop
    const nextCardIndex = useRef<number>(visibleCount)

    // card wrapper
    const CardRefs = useRef<HTMLDivElement[]>([]);
    CardRefs.current = [];

    // adds card reference
    const addCardRef = (el: HTMLDivElement | null) => {
        if (el && !CardRefs.current.includes(el)) CardRefs.current.push(el);
    }

    // visible cards
    const initialProgresses = useMemo(() => {
        return Array.from({ length: visibleCount }, (_, i) => 0.85 - (i * 0.5) / Math.max(visibleCount - 1, 1))
    }, [visibleCount])

    useLayoutEffect(() => {
        if (!pathRef.current || CardRefs.current.length === 0) return;

        const ctx = gsap.context(() => {
            const path = pathRef.current!;
            const D = duration;

            // card initially positioning
            CardRefs.current.forEach((card, i) => {
                gsap.set(card, {
                    xPercent: -50,
                    yPercent: -50,
                    // card on curveline
                    motionPath: {
                        path,
                        align: path,
                        autoRotate: false,
                        start: initialProgresses[i],
                        end: initialProgresses[i],
                    }
                })
            })

            // right to left animation
            CardRefs.current.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    {
                        motionPath: {
                            path,
                            align: path,
                            autoRotate: false,
                            start: initialProgresses[i],
                            end: initialProgresses[i],
                        },
                        opacity: 1,
                    },
                    {
                        motionPath: {
                            path,
                            align: path,
                            autoRotate: false,
                            start: initialProgresses[i],
                            end: 0,
                        },
                        duration: D,
                        ease: 'none',
                        repeat: -1,
                        delay: i * (D / (visibleCount + 0.5)),
                        onRepeat: () => {
                            const len = ourProjects.length;
                            if (len <= 0) return;

                            const next = nextCardIndex.current % len;
                            // set card index
                            const cIndex = i;

                            setCardProjects((prev) => {
                                const copy = [...prev];
                                copy[cIndex] = ourProjects[next];
                                return copy;
                            })

                            nextCardIndex.current = next + 1;
                        }
                    }
                )
            })

            gsap.set(path, { strokeDasharray: 8, strokeDashoffset: 0 })
            gsap.to("#rect", {
                duration: 5,
                repeat: 12,
                repeatDelay: 3,
                yoyo: true,
                ease: "power1.inOut",
                motionPath: {
                    path: "#path",
                    align: "#path",
                    autoRotate: true,
                    alignOrigin: [0.5, 0.5]
                }
            });
        }, containerRef)

        return () => ctx.revert()
    }, [ourProjects, duration, initialProgresses, visibleCount])

    return (
        <>
            <div
                ref={containerRef}
                className="relative mx-auto max-w-6xl px-4"
                style={{ height: 280 }}>

                <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
                    <circle cx="100" cy="100" r="3" />
                    <circle cx="300" cy="20" r="3" />
                    {/* <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />*/}

                    <path
                        ref={pathRef}
                        d="M 0,100
                           A 150,150 0 0 1 300,100"
                        fill="none"
                        stroke="white"
                    />
                    
                    <g id="rect">
                        <rect width="85" height="30"  />
                        <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
                    </g>

                    {/* 
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs> */}
                </svg>
                <div className="pointer-events-auto absolute inset-0">
                    {cardProjects.map((project, i) => (
                        <div
                            key={`${project.id}-${i}`}
                            ref={addCardRef}
                            className="absolute"
                            style={{ width: 260, height: 160 }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectCardSlider
