"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Activity, ShieldAlert, Cpu, Layers, Globe, Zap } from "lucide-react";

export default function LiveDashboardMockup() {
    const [val, setVal] = useState(142504.32);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setVal(v => v + (Math.random() - 0.4) * 10);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <div className="card" style={{
            overflow: 'hidden',
            padding: 0,
            background: 'rgba(5, 5, 5, 0.9)',
            border: '1px solid var(--border-muted)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8)'
        }}>
            {/* OS Header */}
            <div style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }}></div>
                    </div>
                    <div style={{ fontSize: '0.6rem', opacity: 0.4, letterSpacing: '0.2em' }}>TERMINAL_SESSION: ALPHA-9-X</div>
                </div>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.6rem', opacity: 0.4 }}>
                    <span>CPU_LOAD: 12%</span>
                    <span>MEM: 4.2GB / 16.0GB</span>
                    <span style={{ color: 'var(--accent-electric)' }}>// LINK_STABLE</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 300px', minHeight: '500px' }}>
                {/* Sidebar: Navigation */}
                <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.05)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--accent-acid)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.1em' }}>MAIN_PROTOCOLS</div>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            {[
                                { icon: <Activity size={14} />, label: "MARKET_ENGINE", active: true },
                                { icon: <Layers size={14} />, label: "LIQUIDITY_MAP" },
                                { icon: <Globe size={14} />, label: "CHAIN_EXPLORER" },
                                { icon: <Zap size={14} />, label: "GAS_OPTIMIZER" },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.75rem',
                                    borderRadius: '4px',
                                    background: item.active ? 'rgba(200, 244, 0, 0.05)' : 'transparent',
                                    color: item.active ? 'var(--accent-acid)' : 'var(--text-muted)',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                }}>
                                    {item.icon} {item.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                        <div className="card" style={{ padding: '1rem', background: 'rgba(200, 244, 0, 0.02)', fontSize: '0.65rem' }}>
                            <div style={{ fontWeight: 800, marginBottom: '0.5rem' }}>UPGRADE_PLAN</div>
                            <p style={{ opacity: 0.5, marginBottom: '1rem' }}>Unlock whale alerts & MEV protection.</p>
                            <button style={{ width: '100%', background: 'var(--accent-acid)', border: 'none', padding: '0.5rem', fontWeight: 800, fontSize: '0.6rem' }}>UPGRADE_NOW</button>
                        </div>
                    </div>
                </div>

                {/* Center: Main Dashboard */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>TOTAL_VALUE_LOCKED (TVL)</div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-technical)', letterSpacing: '-0.05em' }}>
                                ${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </div>
                            <div style={{ color: 'var(--accent-electric)', fontSize: '0.8rem', fontWeight: 700, marginTop: '0.5rem' }}>
                                +24.12% <span style={{ opacity: 0.5, marginLeft: '0.5rem' }}>(24H_PERFORMANCE)</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 1rem', fontSize: '0.65rem', fontWeight: 700 }}>24H</button>
                            <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)', padding: '0.5rem 1rem', fontSize: '0.65rem', fontWeight: 700 }}>7D</button>
                        </div>
                    </div>

                    {/* Asset Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {[
                            { asset: "ETH", val: "$42.1k", change: "+4.2%", color: "var(--accent-electric)" },
                            { asset: "SOL", val: "$12.8k", change: "+12.1%", color: "var(--accent-electric)" },
                            { asset: "TIA", val: "$4.5k", change: "-2.4%", color: "#ff5f56" },
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.65rem', opacity: 0.5, marginBottom: '0.5rem' }}>{item.asset}_BALANCE</div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{item.val}</div>
                                <div style={{ fontSize: '0.7rem', color: item.color, fontWeight: 700, marginTop: '0.4rem' }}>{item.change}</div>
                            </div>
                        ))}
                    </div>

                    {/* Activity Logs */}
                    <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', padding: '1rem', fontFamily: 'var(--font-technical)' }}>
                        <div style={{ fontSize: '0.6rem', color: 'var(--accent-acid)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>// RECENT_TRANSACTIONS</div>
                        <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.65rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}>
                                <span>SWAP: 2.1 ETH {'->'} 4200 USDC</span>
                                <span style={{ color: 'var(--accent-acid)' }}>SUCCESS</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}>
                                <span>APPROVE: UNISWAP_V3 (BASE)</span>
                                <span style={{ color: 'var(--accent-acid)' }}>SUCCESS</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.4 }}>
                                <span>BRIDGE: 12.5 SOL {'->'} ARBITRUM</span>
                                <span>PENDING...</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Signals */}
                <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255,255,255,0.01)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ fontSize: '0.65rem', color: '#ffbd2e', fontWeight: 800, letterSpacing: '0.1em' }}>LIVE_SIGNALS</div>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div style={{ padding: '1rem', border: '1px solid #ffbd2e', background: 'rgba(255, 189, 46, 0.05)', borderRadius: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffbd2e', fontSize: '0.65rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                                <ShieldAlert size={12} /> WHALE_ALERT
                            </div>
                            <p style={{ fontSize: '0.7rem', opacity: 0.8, lineHeight: 1.4 }}>
                                50,000 ETH ($172M) moved from unknown wallet to Binance. Potential sell pressure.
                            </p>
                        </div>

                        <div style={{ padding: '1rem', border: '1px solid var(--accent-electric)', background: 'rgba(0, 255, 135, 0.05)', borderRadius: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-electric)', fontSize: '0.65rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                                <Activity size={12} /> ALPHA_DETECTED
                            </div>
                            <p style={{ fontSize: '0.7rem', opacity: 0.8, lineHeight: 1.4 }}>
                                Solana network congestion dropping. Optimal time for high-volume bridging.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                        <div style={{ fontSize: '0.6rem', opacity: 0.3, marginBottom: '0.5rem' }}>SYSTEM_ENGINE_STATUS</div>
                        <div style={{ height: '40px', background: 'rgba(200, 244, 0, 0.05)', borderRadius: '4px', border: '1px solid var(--border-muted)', display: 'flex', alignItems: 'center', padding: '0 0.75rem' }}>
                            <div style={{ display: 'flex', gap: '2px', flex: 1 }}>
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} style={{ height: `${20 + Math.random() * 60}%`, width: '4px', background: 'var(--accent-acid)', opacity: 0.6 }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
