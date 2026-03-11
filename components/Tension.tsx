export default function Tension() {
  return (
    <section className="tension" aria-label="The problem we're solving">
      <span className="tension-bg-text" aria-hidden="true">AFRICA</span>

      <div className="tension-inner">
        <h2 className="tension-headline reveal-clip">
          Millions of skilled workers.{" "}
          <em>Zero good way to reach them.</em>
        </h2>

        <div className="tension-stat reveal-up">
          <div className="tension-stat-line" aria-hidden="true" />
          <p className="tension-stat-text">
            <strong>70%</strong> of Africa&apos;s workforce is informal — skilled,
            available, and invisible to every hiring system that exists.
            Ghana. Kenya. Nigeria. South Africa. The workers are there.
            The platform isn&apos;t. Until now.
          </p>
        </div>
      </div>
    </section>
  );
}
