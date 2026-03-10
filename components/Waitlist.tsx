export default function Waitlist() {
  return (
    <section className="waitlist" id="waitlist" aria-label="Join the waitlist">
      {/* Rotated watermark */}
      <div className="waitlist-watermark" aria-hidden="true">
        EARLY ACCESS
      </div>

      <div className="waitlist-inner">
        {/* Left — headline */}
        <div>
          <h2 className="waitlist-headline reveal-up">
            You&apos;re early.
            <br />
            <span>That matters.</span>
          </h2>
          <p
            className="waitlist-sub reveal-up"
            style={{ transitionDelay: "0.15s" }}
          >
            Early access means priority placement, zero platform fees for your
            first month, and a direct line to shape how huzlla works for you.
          </p>
          <div
            className="waitlist-proof reveal-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="sp-avatars" aria-hidden="true">
              <div className="sp-avatar">JM</div>
              <div className="sp-avatar">AK</div>
              <div className="sp-avatar">FO</div>
              <div className="sp-avatar">RN</div>
            </div>
            Join 240+ workers &amp; employers already waiting
          </div>
        </div>

        {/* Right — Tally form */}
        <div
          className="reveal-up"
          style={{ transitionDelay: "0.2s" }}
        >
          <span className="form-eyebrow">Reserve your spot</span>
          <div className="tally-wrap">
            <iframe
              src="https://tally.so/r/Ek1BEN"
              width="100%"
              height="460"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="huzlla Waitlist Form"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
