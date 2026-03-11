import EscrowBar from "./EscrowBar";
import IonIcon from "./IonIcon";

const pillars = [
  {
    icon: "id-card-outline",
    title: "ID & Document Verification",
    desc: "National ID required for all. Police clearance for Security. Valid driving licence for Drivers & Riders. Business cert for Company accounts.",
  },
  {
    icon: "lock-closed-outline",
    title: "Escrow-Protected Payments",
    desc: "Employer pays before the job starts. Funds are held securely and released only when both sides confirm completion — or auto-released after 24 hours.",
  },
  {
    icon: "location-outline",
    title: "GPS Check-In & Check-Out",
    desc: "Workers check in within 200m of the job location. Arrival time, location, and duration are timestamped — creating a tamper-proof record for every job.",
  },
  {
    icon: "star-outline",
    title: "Blind Two-Way Ratings",
    desc: "After every job, both sides rate simultaneously. Ratings stay hidden until both submit — preventing retaliation. Accounts below 3.5 stars are flagged for review.",
  },
];

export default function Trust() {
  return (
    <section className="trust" aria-label="Trust and safety">
      <div className="trust-accent-bar" aria-hidden="true" />

      <div className="trust-inner">
        {/* Left column */}
        <div>
          <p className="trust-label">Built for accountability</p>
          <h2 className="trust-headline reveal-clip">
            Trust isn&apos;t
            <br />
            <span>optional.</span>
          </h2>
          <p className="trust-body reveal-up" style={{ transitionDelay: "0.35s" }}>
            Every worker on huzlla is ID-verified, GPS-tracked at check-in, and rated after every job.
            Every payment is protected by escrow until both sides confirm. Workers keep 100% of their agreed rate — always.
          </p>

          <div className="trust-pillars">
            {pillars.map((p) => (
              <div key={p.title} className="pillar">
                <div className="pillar-icon">
                  <IonIcon name={p.icon} className="pillar-ion-icon" />
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
              ID Verified · Police Cleared
            </div>
            <div className="mock-worker">
              <div className="mock-avatar" aria-label="Worker avatar: BM">
                BM
              </div>
              <div>
                <span className="mock-worker-name">Brian Mwangi</span>
                <span className="mock-worker-role">
                  Security Guard · Nairobi, Kenya
                </span>
              </div>
            </div>
            <div className="mock-stars" aria-label="4.9 out of 5 stars">
              ★★★★★
            </div>
            <p className="mock-rating-text">4.9 · 84 jobs · 98% on-time</p>
          </div>

          {/* Escrow card */}
          <div className="mock-card">
            <div className="mock-escrow">
              <div className="mock-escrow-label">
                <span>Escrow Protected</span>
                <span className="mock-escrow-amount">KES 2,200 held</span>
              </div>
              <div className="mock-escrow-bar">
                <EscrowBar />
              </div>
            </div>
            <p className="mock-escrow-note">
              Worker pay KES 2,000 + platform fee KES 200 (10%). Releases on confirmation.
            </p>
          </div>

          {/* Stats row */}
          <div className="mock-stats">
            <div className="mock-stat">
              <span className="mock-stat-val">0%</span>
              <span className="mock-stat-lbl">Worker deductions</span>
            </div>
            <div className="mock-stat">
              <span className="mock-stat-val">24h</span>
              <span className="mock-stat-lbl">Auto-confirm window</span>
            </div>
            <div className="mock-stat">
              <span className="mock-stat-val">200m</span>
              <span className="mock-stat-lbl">GPS check-in radius</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
