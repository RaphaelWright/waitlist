const categories = [
  "Construction",
  "Cleaning",
  "Security",
  "Delivery",
  "Hospitality",
  "Landscaping",
  "Plumbing & Electrical",
];

export default function Categories() {
  return (
    <section className="categories" aria-label="Job categories on Huzla">
      <div className="categories-header">
        <h2 className="categories-title reveal-up">
          Every trade.
          <br />
          One platform.
        </h2>
        <p className="categories-sub">
          From construction sites to hospitality — if it needs a skilled pair
          of hands, it&apos;s on Huzla.
        </p>
      </div>

      <div className="cat-list" role="list">
        {categories.map((name) => (
          <div key={name} className="cat-item cat-tile" role="listitem">
            <span className="cat-name">{name}</span>
            <span className="cat-arrow" aria-hidden="true">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
