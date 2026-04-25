import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../data/siteData";

export default function Footer() {
  return (
    <footer style={{ background: "#1e2d4a", color: "#fff", padding: "40px 24px", marginTop: 60 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 900, marginBottom: 6 }}>
            EDUVISION<span style={{ color: "#1e9fb4" }}>AI</span>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, opacity: 0.6 }}>AI-Powered History E-Learning · Sri Lanka</div>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <span style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: isActive ? 700 : 500 }}>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, opacity: 0.5 }}>© 2025 EduVisionAI · SLIIT</div>
      </div>
    </footer>
  );
}