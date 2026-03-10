import EscrowBar from "./EscrowBar";

const pillars = [
  {
    icon: "🪪",
    title: "ID Verification",
    desc: "Every worker is verified against national ID before they take a single job.",
  },
  {
    icon: "💰",
    title: "Escrow Payments",
    desc: "Money is held securely until the job is confirmed complete. Zero risk for both sides.",
  },
  {
    icon: "⭐",
    title: "Verified Reviews",
    desc: "Ratings from real employers only. No fake reviews, no anonymous slander.",
  },
  {
    icon: "🛡️",
    title: "Incident Cover",
    desc: "Basic coverage for on-the-job incidents. Protection that informal hiring never gave.",
  },
];

export default function Trust() {
  return (
    <section className="trust" aria-label="Trust and safety">
      <div className="trust-accent-bar" aria-hidden="true" />

      <div className="trust-inner">
        {/* Left column */}
        <div>
          <p className="trust-label">Why huzlla</p>
          <h2 className="trust-headline reveal-clip">
            Trust isn&apos;t
            <br />
            <span>optional.</span>
          </h2>
          <p className="trust-body reveal-up" style={{ transitionDelay: "0.35s" }}>
            Every worker on huzlla is ID-verified, rated, and insured. Every
            payment is protected by escrow until both sides are satisfied. This
            is how labor markets should have worked from the start.
          </p>

          <div className="trust-pillars">
            {pillars.map((p) => (
              <div key={p.title} className="pillar">
                <div className="pillar-icon" aria-hidden="true">
                  {p.icon}
                </div>
                <div>
                  <p className="pillar-title">{p.title}</p>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — mock UI */}
        <div className="trust-right">
          {/* Verified worker card */}
          <div className="mock-card">
            <div className="mock-badge">
              <span className="mock-badge-dot" aria-hidden="true" />
              Worker Verified
            </div>
            <div className="mock-worker">
              <div className="mock-avatar" aria-label="Worker avatar: JM">
                JM
              </div>
              <div>
                <span className="mock-worker-name">James Mwangi</span>
                <span className="mock-worker-role">
                  Plumber · Nairobi West
                </span>
              </div>
            </div>
            <div className="mock-stars" aria-label="4.9 out of 5 stars">
              ★★★★★
            </div>
            <p className="mock-rating-text">4.9 · 127 jobs completed</p>
          </div>

          {/* Escrow card */}
          <div className="mock-card">
            <div className="mock-escrow">
              <div className="mock-escrow-label">
                <span>Escrow Protected</span>
                <span className="mock-escrow-amount">KES 4,500 held</span>
              </div>
              <div className="mock-escrow-bar">
                <EscrowBar />
              </div>
            </div>
            <p className="mock-escrow-note">
              Releases when job is confirmed complete
            </p>
          </div>

          {/* Stats row */}
          <div className="mock-stats">
            <div className="mock-stat">
              <span className="mock-stat-val">4.8</span>
              <span className="mock-stat-lbl">Avg. Rating</span>
            </div>
            <div className="mock-stat">
              <span className="mock-stat-val">98%</span>
              <span className="mock-stat-lbl">On-time rate</span>
            </div>
            <div className="mock-stat">
              <span className="mock-stat-val">0</span>
              <span className="mock-stat-lbl">Payment disputes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
