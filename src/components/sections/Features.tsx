"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Bell, CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Multi-Chain Hub",
        desc: "Track every wallet across Ethereum, Solana, Base, Arbitrum, and more in one live feed.",
        icon: <Globe className="glow-electric" />,
        color: "var(--accent-electric)"
    },
    {
        title: "Real-Time PnL",
        desc: "Instant gas fee breakdowns and entry/exit signals powered by raw on-chain data.",
        icon: <Zap className="glow-acid" />,
        color: "var(--accent-acid)"
    },
    {
        title: "Smart Whale Alerts",
        desc: "Detection for whale movements and liquidation risks before they hit the market.",
        icon: <Bell style={{ color: '#ffbd2e' }} />,
        color: "#ffbd2e"
    }
];

export default function Features() {
    return (
        <section style={{ padding: 'var(--gap-xl) var(--gap-md)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--gap-lg)' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
                        EQUIPPED FOR THE <span className="gradient-text">FRONT LINES</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Ditch the multiple tabs. ChainPulse gives you the technical edge needed to survive and thrive in high-volatility environments.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="card"
                            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: f.color
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>{f.desc}</p>
                            <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    <CheckCircle2 size={12} color={f.color} /> Zero-latency indexing
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    <CheckCircle2 size={12} color={f.color} /> End-to-end encryption
                                </li>
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
