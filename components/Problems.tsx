const problems = [
  {
    glyph: "🔍",
    title: "No trust layer",
    body: "You hire a stranger from WhatsApp. No vetting. No history. No way to know if they'll show up — or do the job right.",
    num: "01",
  },
  {
    glyph: "💸",
    title: "No payment safety net",
    body: "Workers paid late. Or not at all. Employers ghosted after the work is done. Cash disappears with no paper trail.",
    num: "02",
  },
  {
    glyph: "⚡",
    title: "No way to find help fast",
    body: "Need a cleaner by 8am? A fundi this afternoon? The only option is calling three people who all know someone who knows someone.",
    num: "03",
  },
];

export default function Problems() {
  return (
    <section className="problems" aria-label="The three core problems">
      <p className="section-label reveal-up">The broken status quo</p>
      <h2 className="section-title reveal-up" style={{ transitionDelay: "0.08s" }}>
        Three problems. One platform built to kill them.
      </h2>

      <div className="problems-grid">
        {problems.map((p) => (
          <div key={p.num} className="problem-card">
            <span className="problem-glyph" aria-hidden="true">
              {p.glyph}
            </span>
            <h3 className="problem-title">{p.title}</h3>
            <p className="problem-body">{p.body}</p>
            <span className="problem-num" aria-hidden="true">
              {p.num}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
