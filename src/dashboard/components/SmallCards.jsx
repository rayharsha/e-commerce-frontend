import "./SmallCards.css";

const SmallCards = () => {
  const data = [
    { title: "Total Orders", value: "1379", icon: "📦" },
    { title: "Orders Pending", value: "101", icon: "⏳" },
    { title: "Orders Processing", value: "39", icon: "⚙️" },
    { title: "Orders Delivered", value: "125", icon: "✅" },
  ];

  return (
    <div className="smallcards-grid">
      {data.map((item, index) => (
        <div key={index} className="small-card">
          
          <div className="card-top">
            <div className="icon-box">{item.icon}</div>
          </div>

          <p className="small-title">{item.title}</p>
          <h3 className="small-value">{item.value}</h3>

        </div>
      ))}
    </div>
  );
};

export default SmallCards;