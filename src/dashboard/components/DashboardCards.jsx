import "./Dashboard.css";

const cardData = [
  {
    amount: "$0.00",
    label: "Today Orders",
    extra: ["Cash $0.00", "Card $0.00", "Credit $0.00"],
    className: "blue",
  },
  {
    amount: "$0.00",
    label: "Yesterday Orderss",
    extra: ["Cash $0.00", "Card $0.00", "Credit $0.00"],
    className: "green",
  },
  {
    amount: "$22,972.85",
    label: "This Month",
    extra: [],
    className: "pink",
  },
  {
    amount: "$5,684.46",
    label: "Last Month",
    extra: [],
    className: "mint",
  },
  {
    amount: "$1,275,126.07",
    label: "All-Time Sales",
    extra: [],
    className: "purple",
  },
];

const SummaryCards = () => {
  return (
    <div className="summary-grid">
      {cardData.map((card, index) => (
        <div className={`summary-card ${card.className}`} key={index}>
          <div className="card-icon">📄</div>

          <h2>{card.amount}</h2>
          <p>{card.label}</p>

          {card.extra.length > 0 && (
            <div className="card-extra">
              {card.extra.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;