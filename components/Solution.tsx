const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Post the job in 60 seconds",
    body: "Tell us what you need, where, and when. No long forms. No agency calls. Just tap and go.",
  },
  {
    num: "02",
    icon: "🤝",
    title: "Match with a vetted worker",
    body: "Verified ID. Rated by previous employers. You see their history before they knock on your door.",
  },
  {
    num: "03",
    icon: "✅",
    title: "Pay safe. Work done.",
    body: "Escrow holds the money until the job's complete. Worker gets paid. You get proof. Everyone wins.",
  },
];

export default function Solution() {
  return (
    <section aria-label="How huzlla works">
      <div className="solution-header">
        <p className="section-label">How it works</p>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Done by noon. Paid by 5.
        </h2>
      </div>

      <div className="solution-steps">
        {steps.map((step) => (
          <div key={step.num} className="step">
            <span className="step-num" aria-hidden="true">
              {step.num}
            </span>
            <span className="step-icon" aria-hidden="true">
              {step.icon}
            </span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-body">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
