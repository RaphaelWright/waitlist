const categories = [
  "Security",
  "Cleaning",
  "Construction",
  "Catering & Events",
  "Drivers & Riders",
  "Domestic Workers",
  "Artisans",
  "Loading & Offloading",
  "Gardening & Grounds",
  "Farm Labour",
];

export default function Categories() {
  return (
    <section className="categories" aria-label="Job categories on huzlla">
      <div className="categories-header">
        <h2 className="categories-title reveal-up">
          Every trade.
          <br />
          <span>One platform.</span>
        </h2>
        <p className="categories-sub">
          10 categories built for the African labour market — not a Western template.
        </p>
      </div>

      <div className="kente-strip" aria-hidden="true" />

      <ul className="cat-name-list" role="list">
        {categories.map((name, i) => (
          <li key={name} className="cat-name-item cat-item" role="listitem"
            style={{ transitionDelay: `${i * 0.05}s` }}>
            <span className="cat-name-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="cat-name-text">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
