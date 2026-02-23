"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Ticker from "@/components/ui/Ticker";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import LiveDashboardMockup from "@/components/ui/LiveDashboardMockup";
import CommandCenter from "@/components/sections/CommandCenter";
import LeadModal from "@/components/ui/LeadModal";

export default function Home() {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
    const openModal = () => setIsLeadModalOpen(true);

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-void)' }}>
            <LeadModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
            <div className="scanline" style={{ background: 'var(--accent-acid)' }}></div>
            <div style={{ position: 'fixed', bottom: 10, right: 10, fontSize: '10px', opacity: 0.2 }}>SYSTEM_ACTIVE: V1.2</div>
            <Ticker />
            <Navbar onCtaClick={openModal} />
            <Hero onCtaClick={openModal} />
            <CommandCenter onCtaClick={openModal} />
            <section style={{ padding: 'var(--gap-xl) 0', position: 'relative' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--gap-md)' }}>
                    <LiveDashboardMockup />
                </div>
            </section>
            <Features />
            <footer style={{
                padding: 'var(--gap-lg) 0',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.65rem',
                borderTop: '1px solid var(--border-muted)',
                letterSpacing: '0.2em'
            }}>
                <p>© 2024 CHAINPULSE_CORP. ALL RIGHTS RESERVED. TERMINAL_ACCESS: GRANTED.</p>
            </footer>
        </main>
    );
}
