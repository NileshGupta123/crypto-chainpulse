"use client";

import { motion } from "framer-motion";
import { Command, Shield, Zap, Search, ChevronRight } from "lucide-react";

interface CommandCenterProps {
    onCtaClick?: () => void;
}

export default function CommandCenter({ onCtaClick }: CommandCenterProps) {
    return (
        <section style={{ padding: 'var(--gap-xl) 0', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-xl)', alignItems: 'center' }}>
                    <div style={{ paddingRight: 'var(--gap-lg)' }}>
                        <div style={{
                            color: 'var(--accent-electric)',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1rem',
                            letterSpacing: '0.1em'
                        }}>
                            <Command size={14} /> // CORE_INTERFACE
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            ONE COMMAND CENTER. <br />
                            <span className="gradient-text">ZERO COMPROMISE.</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>
                            ChainPulse is built for traders who demand precision. Our command-center interface aggregates every wallet, every chain, and every signal into a single, high-fidelity dashboard.
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                { title: "UNIFIED PORTFOLIO", desc: "Consolidated view of assets across 20+ chains.", icon: <Zap size={18} /> },
                                { title: "RISK MITIGATION", desc: "Automated alerts for gas spikes and whale dumps.", icon: <Shield size={18} /> },
                                { title: "ALPHA SCANNER", desc: "Real-time on-chain signal detection.", icon: <Search size={18} /> },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ color: 'var(--accent-acid)', marginTop: '0.2rem' }}>{item.icon}</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="btn-primary" style={{ marginTop: '3rem' }} onClick={onCtaClick}>
                            EXPLORE_COMMAND_CENTER <ChevronRight size={14} />
                        </button>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <motion.div
                            initial={{ rotateY: 20, rotateX: 5, opacity: 0 }}
                            whileInView={{ rotateY: 10, rotateX: 2, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="card"
                            style={{
                                height: '500px',
                                background: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 40px rgba(200, 244, 0, 0.05)'
                            }}
                        >
                            <div style={{
                                padding: '0.75rem 1rem',
                                borderBottom: '1px solid var(--border-muted)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '0.6rem',
                                opacity: 0.5
                            }}>
                                <div>UI_CORE_v3 // ACTIVE_SESSION</div>
                                <div>SECURE_TUNNEL: ESTABLISHED</div>
                            </div>

                            <div style={{ flex: 1, padding: '1.5rem', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', gap: '1rem', height: '100%' }}>
                                    <div style={{ width: '60px', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} style={{ width: '30px', height: '30px', borderRadius: '4px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }} />
                                        ))}
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ height: '30%', background: 'rgba(200, 244, 0, 0.03)', border: '1px solid rgba(200, 244, 0, 0.1)', borderRadius: '4px' }}></div>
                                        <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', padding: '0.5rem' }}>
                                            <div style={{ background: 'rgba(255,255,255,0.02)' }}></div>
                                            <div style={{ background: 'rgba(255,255,255,0.02)' }}></div>
                                            <div style={{ background: 'rgba(255,255,255,0.02)' }}></div>
                                            <div style={{ background: 'rgba(255,255,255,0.02)' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floaties */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: -1, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    bottom: '10%',
                                    left: '-10%',
                                    width: '180px',
                                    height: '100px',
                                    background: 'var(--panel-dark)',
                                    border: '1px solid var(--accent-electric)',
                                    padding: '1rem',
                                    fontSize: '0.6rem',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                                }}
                            >
                                <div style={{ color: 'var(--accent-electric)', fontWeight: 800, marginBottom: '0.5rem' }}>// NETWORK_LOAD</div>
                                <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: '70%', height: '100%', background: 'var(--accent-electric)' }}></div>
                                </div>
                                <div style={{ marginTop: '0.5rem', opacity: 0.5 }}>LATENCY: 4ms <br /> PACKETS: 1.2k/s</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
