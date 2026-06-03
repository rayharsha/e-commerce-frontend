import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="topbar">

      {/* LEFT */}
      <div className="topbar-left">
        <button className="menu-btn">☰</button>
      </div>

      {/* CENTER */}
      <div className="topbar-center">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">

        <div className="lang">EN</div>

        <div className="icon">🌙</div>

        <div className="icon notification">
          🔔
         
        </div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
        </div>

      </div>
    </div>
  );
};

export default Navbar;