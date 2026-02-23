"use client";

import { useState, useEffect } from "react";

const assets = [
    { symbol: "BTC", price: "$64,250.32", change: "+2.4%" },
    { symbol: "ETH", price: "$3,450.12", change: "+1.8%" },
    { symbol: "SOL", price: "$145.67", change: "+8.2%" },
    { symbol: "BNB", price: "$580.45", change: "-0.5%" },
    { symbol: "ARB", price: "$1.89", change: "+4.5%" },
    { symbol: "OP", price: "$3.42", change: "+2.1%" },
    { symbol: "MATIC", price: "$1.04", change: "-1.2%" },
    { symbol: "LINK", price: "$18.45", change: "+3.2%" },
];

export default function Ticker() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div style={{ height: '33px', background: '#000' }}></div>;

    const tickerItems = [...assets, ...assets]; // Double for seamless loop

    return (
        <div className="ticker-container">
            <div className="ticker-content">
                {tickerItems.map((asset, i) => (
                    <span key={i} style={{ marginRight: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{asset.symbol}</span>
                        <span style={{ fontWeight: 700 }}>{asset.price}</span>
                        <span style={{
                            color: asset.change.startsWith('+') ? 'var(--accent-electric)' : '#ff5f56',
                            fontSize: '0.65rem'
                        }}>
                            {asset.change}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.1)', marginLeft: '1.5rem' }}>//</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
