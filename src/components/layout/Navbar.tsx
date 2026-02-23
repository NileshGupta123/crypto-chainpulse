"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, Activity } from "lucide-react";

interface NavbarProps {
    onCtaClick?: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            background: 'rgba(8, 10, 6, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-muted)',
            padding: '1rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--gradient-active)',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'var(--bg-void)'
                    }}>
                        <Cpu size={18} />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.05em' }}>
                        CHAIN<span style={{ color: 'var(--accent-acid)' }}>PULSE</span>
                    </span>
                </div>

                <div className="nav-links">
                    {['TERMINAL', 'PROTOCOLS', 'NETWORK', 'DOCS'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                letterSpacing: '0.1em',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-acid)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="status-indicator" style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.6rem', opacity: 0.5 }}>NETWORK STATUS</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--accent-electric)', display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end' }}>
                            <Activity size={10} /> OPTIMAL
                        </div>
                    </div>
                    <button
                        className="btn-primary"
                        style={{ padding: '0.6rem 1.2rem', fontSize: '0.65rem' }}
                        onClick={onCtaClick}
                    >
                        LAUNCH_APP
                    </button>
                </div>
            </div>
        </nav>
    );
}
