import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { NAV_ITEMS } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 24px rgba(30,58,110,0.10)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,111,186,0.08)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </NavLink>
        <div className="hidden md:flex" style={{ gap: 4 }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <span
                  style={{
                    display: "inline-block",
                    padding: "7px 14px",
                    borderRadius: 8,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: 13.5,
                    letterSpacing: "0.01em",
                    background: isActive ? "linear-gradient(135deg, #1e3a6e, #1e6fba)" : "transparent",
                    color: isActive ? "#fff" : "#3a5a82",
                    transition: "all 0.2s",
                  }}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#1e3a6e" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #e8f0fa", padding: "12px 24px 16px" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 0",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    color: isActive ? "#1e6fba" : "#3a5a82",
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: "1px solid #f0f4fa",
                  }}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}