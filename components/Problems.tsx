import IonIcon from "./IonIcon";

const problems = [
  {
    icon: "shield-outline",
    num: "01",
    title: "No trust layer",
    body: "You hire a stranger from WhatsApp. No ID check. No job history. No way to know if they'll show up — or do the job right. Informal hiring is a gamble every single time.",
  },
  {
    icon: "wallet-outline",
    num: "02",
    title: "No payment safety",
    body: "Workers paid late — or not at all. Employers ghosted after the work is done. Cash changes hands with no paper trail, no receipt, no recourse.",
  },
  {
    icon: "flash-outline",
    num: "03",
    title: "No way to find help fast",
    body: "Need a security guard for tonight? A cleaner by 8am? The only option is calling a chain of people who all know someone who knows someone. There is no system.",
  },
];

export default function Problems() {
  return (
    <section className="problems" aria-label="The three core problems">
      <p className="section-label reveal-up">The broken status quo</p>
      <h2 className="section-title reveal-up" style={{ transitionDelay: "0.08s" }}>
        Three cracks in the system.
      </h2>

      <div className="problems-list">
        {problems.map((p) => (
          <div key={p.num} className="problem-row">
            <span className="problem-row-num" aria-hidden="true">{p.num}</span>
            <div className="problem-row-body-wrap">
              <IonIcon name={p.icon} className="problem-row-icon" />
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-body">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
