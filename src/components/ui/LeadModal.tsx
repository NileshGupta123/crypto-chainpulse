"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        crypto: "BTC",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://nilesh26.app.n8n.cloud/webhook/0e2eb5f1-30df-4528-a23e-28c5b38e2e88", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString(),
                    source: "ChainPulse_Landing_Page",
                }),
            });

            if (response.ok) {
                setStatus("success");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setFormData({ name: "", email: "", phone: "", crypto: "BTC" });
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0, 0, 0, 0.8)",
                            backdropFilter: "blur(8px)",
                            zIndex: 2000,
                        }}
                    />

                    {/* Modal Container */}
                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2001,
                            pointerEvents: "none",
                            padding: "1rem",
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            style={{
                                width: "100%",
                                maxWidth: "450px",
                                background: "rgba(13, 17, 12, 0.95)",
                                border: "1px solid var(--border-muted)",
                                borderRadius: "8px",
                                padding: "2rem",
                                position: "relative",
                                pointerEvents: "auto",
                                boxShadow: "0 0 50px rgba(200, 244, 0, 0.1)",
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    background: "transparent",
                                    border: "none",
                                    color: "var(--text-muted)",
                                    cursor: "pointer",
                                }}
                            >
                                <X size={20} />
                            </button>

                            {status === "success" ? (
                                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                    <CheckCircle2 size={48} color="var(--accent-electric)" style={{ margin: "0 auto 1.5rem" }} />
                                    <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>ACCESS_GRANTED</h3>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                                        Your terminal credentials have been sent. Redirecting...
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div style={{ marginBottom: "2rem" }}>
                                        <div style={{ color: "var(--accent-acid)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", marginBottom: "0.5rem" }}>
                      // INITIALIZE_REQUEST
                                        </div>
                                        <h3 style={{ fontSize: "1.75rem", letterSpacing: "-0.02em" }}>GET_EARLY_ACCESS</h3>
                                    </div>

                                    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
                                        <div style={{ display: "grid", gap: "0.5rem" }}>
                                            <label style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--text-muted)" }}>FULL_NAME</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="e.g. Satoshi Nakamoto"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                style={{
                                                    background: "rgba(255,255,255,0.03)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "4px",
                                                    padding: "0.75rem",
                                                    color: "white",
                                                    fontSize: "0.875rem",
                                                    outline: "none",
                                                }}
                                            />
                                        </div>

                                        <div style={{ display: "grid", gap: "0.5rem" }}>
                                            <label style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--text-muted)" }}>EMAIL_ADDRESS</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="satoshi@bitcoin.org"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                style={{
                                                    background: "rgba(255,255,255,0.03)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "4px",
                                                    padding: "0.75rem",
                                                    color: "white",
                                                    fontSize: "0.875rem",
                                                    outline: "none",
                                                }}
                                            />
                                        </div>

                                        <div style={{ display: "grid", gap: "0.5rem" }}>
                                            <label style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--text-muted)" }}>PHONE_NUMBER</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+1 (555) 123-4567"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                style={{
                                                    background: "rgba(255,255,255,0.03)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "4px",
                                                    padding: "0.75rem",
                                                    color: "white",
                                                    fontSize: "0.875rem",
                                                    outline: "none",
                                                }}
                                            />
                                        </div>

                                        <div style={{ display: "grid", gap: "0.5rem" }}>
                                            <label style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--text-muted)" }}>INVESTMENT_TARGET</label>
                                            <select
                                                value={formData.crypto}
                                                onChange={(e) => setFormData({ ...formData, crypto: e.target.value })}
                                                style={{
                                                    background: "rgba(255,255,255,0.03)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "4px",
                                                    padding: "0.75rem",
                                                    color: "white",
                                                    fontSize: "0.875rem",
                                                    outline: "none",
                                                    appearance: "none",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <option value="BTC" style={{ background: "#0d110c" }}>Bitcoin (BTC)</option>
                                                <option value="ETH" style={{ background: "#0d110c" }}>Ethereum (ETH)</option>
                                                <option value="SOL" style={{ background: "#0d110c" }}>Solana (SOL)</option>
                                                <option value="LINK" style={{ background: "#0d110c" }}>Chainlink (LINK)</option>
                                                <option value="BASE" style={{ background: "#0d110c" }}>Base Ecosystem</option>
                                                <option value="OTHER" style={{ background: "#0d110c" }}>Other Alpha</option>
                                            </select>
                                        </div>

                                        {status === "error" && (
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#ff5f56", fontSize: "0.75rem" }}>
                                                <AlertCircle size={14} /> Failed to transmit. Retrying link...
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="btn-primary"
                                            style={{
                                                width: "100%",
                                                justifyContent: "center",
                                                marginTop: "1rem",
                                                padding: "1rem",
                                                opacity: status === "submitting" ? 0.7 : 1,
                                            }}
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={18} /> TRANSMITTING...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} /> INITIALIZE_SYNC
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
