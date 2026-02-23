"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Wallet, BarChart3, ChevronRight, Terminal } from "lucide-react";
import gsap from "gsap";

interface HeroProps {
    onCtaClick?: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".char", {
                y: 40,
                opacity: 0,
                rotateX: -90,
                stagger: 0.02,
                duration: 1,
                ease: "power4.out"
            });

            gsap.to(".grid-line", {
                opacity: 0.2,
                stagger: 0.1,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const titleText = "TRACK EVERY WALLET ACROSS EVERY CHAIN";

    return (
        <section
            ref={containerRef}
            style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--gap-xl) var(--gap-md)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background scanline-like grid decoration */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1, opacity: 0.1 }}>
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="grid-line" style={{
                        position: 'absolute',
                        top: `${i * 10}%`,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        background: 'var(--accent-acid)'
                    }} />
                ))}
            </div>

            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}
            >
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'rgba(200, 244, 0, 0.05)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-muted)',
                    marginBottom: 'var(--gap-md)',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    color: 'var(--accent-acid)',
                    letterSpacing: '0.2em'
                }}>
                    <Zap size={14} className="glow-acid" />
                    <span>ESTABLISHING_LINK... SUCCESS</span>
                </div>

                <h1
                    ref={titleRef}
                    style={{
                        fontSize: 'clamp(3rem, 10vw, 6.5rem)',
                        lineHeight: 0.9,
                        marginBottom: 'var(--gap-md)',
                        perspective: '1000px'
                    }}
                >
                    {titleText.split(" ").map((word, i) => (
                        <span key={i} style={{ display: 'inline-block', marginRight: '0.2em' }}>
                            {word.split("").map((char, j) => (
                                <span key={j} className="char" style={{ display: 'inline-block' }}>
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                    <br />
                    <span className="gradient-text" style={{ fontStyle: 'italic' }}>COMMAND_CENTER</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    color: 'var(--text-muted)',
                    maxWidth: '650px',
                    margin: '0 auto var(--gap-lg)',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-technical)'
                }}>
                    Automated multi-chain liquidity aggregation and risk mitigation.
                    Monitor PnL, monitor gas, monitor whales.
                    <span style={{ color: 'var(--text-main)', display: 'block', marginTop: '0.5rem' }}>// ONE INTERFACE. ZERO LATENCY.</span>
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" onClick={onCtaClick}>
                        <ChevronRight size={18} />
                        INITIALIZE_OS
                    </button>
                    <button className="card" style={{
                        padding: '0.875rem 1.75rem',
                        borderRadius: '4px',
                        background: 'transparent',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        letterSpacing: '0.1em'
                    }}>
                        <Terminal size={18} />
                        VIEW_PROTOCOL
                    </button>
                </div>
            </motion.div>

            {/* Hero Stats */}
            <div style={{
                position: 'absolute',
                bottom: 'var(--gap-md)',
                left: 'var(--gap-md)',
                right: 'var(--gap-md)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                fontSize: '0.65rem',
                opacity: 0.3,
                fontFamily: 'var(--font-technical)'
            }}>
                <div>
                    LOC: 37.7749° N, 122.4194° W <br />
                    SIG: STRONG / 98%
                </div>
                <div style={{ textAlign: 'right' }}>
                    DATA_FREQ: 1.2ms <br />
                    ENCRYPTION: AES-256
                </div>
            </div>
        </section>
    );
}
