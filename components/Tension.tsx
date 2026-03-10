export default function Tension() {
  return (
    <section className="tension" aria-label="The problem we're solving">
      <span className="tension-bg-text" aria-hidden="true">NAIROBI</span>

      <div className="tension-inner">
        <h2 className="tension-headline reveal-clip">
          Millions of skilled workers.{" "}
          <em>Zero good way to reach them.</em>
        </h2>

        <div className="tension-stat reveal-up">
          <div className="tension-stat-line" aria-hidden="true" />
          <p className="tension-stat-text">
            <strong>43%</strong> of Kenyan SMEs cite staffing as their #1
            operational pain point. The workers exist. The gap is the system.
          </p>
        </div>
      </div>
    </section>
  );
}
