import Section from "../components/layout/Section";
import SectionTitle from "../components/layout/SectionTitle";
import { COMPONENTS, TEAM_MEMBERS, SUPERVISOR, CO_SUPERVISOR } from "../data/siteData";

export default function About() {
  return (
    <Section style={{ paddingBottom: 100 }}>
      <SectionTitle eyebrow="About Us" title="Meet the Team" subtitle="The developers behind EduVisionAI — committed to inclusive education through AI." />
      <div className="project-overview" style={{ background: "linear-gradient(135deg, #1e3a6e 0%, #1e6fba 60%, #1e9fb4 100%)", borderRadius: 24, padding: "40px 48px", color: "#fff", marginBottom: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 900, margin: "0 0 14px" }}>EduVisionAI</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, opacity: 0.85, lineHeight: 1.75, margin: 0 }}>AI-powered e-learning platform for accessible Sri Lankan O/L History education.</p>
        </div>
        <div>
          {/* <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, opacity: 0.85, lineHeight: 1.75, margin: 0 }}>Sri Lanka Institute of Information Technology (SLIIT)</p> */}
        </div>
      </div>

      {/* Team Members Section */}
      <div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#1e2d4a", marginBottom: 30, textAlign: "center" }}>Group Members</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {/* Supervisor */}
          <div style={{ background: "#fff", borderRadius: 20, padding: 28, textAlign: "center", boxShadow: "0 4px 20px rgba(30,58,110,0.08)", border: "2px solid #1e6fba30", display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,58,110,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(30,58,110,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <img src={SUPERVISOR.photo} alt={SUPERVISOR.name} style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", marginBottom: 16, border: "3px solid #1e6fba" }} />
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 800, color: "#1e2d4a", marginBottom: 6 }}>{SUPERVISOR.name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#1e6fba", fontWeight: 700, marginBottom: 6 }}>{SUPERVISOR.role}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#8aabcc", marginBottom: 12 }}>{SUPERVISOR.qualification}</div>
            <a href={`mailto:${SUPERVISOR.email}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#1e6fba", textDecoration: "none", fontWeight: 600 }}>{SUPERVISOR.email}</a>
          </div>

          {/* Co-Supervisor */}
          <div style={{ background: "#fff", borderRadius: 20, padding: 28, textAlign: "center", boxShadow: "0 4px 20px rgba(30,58,110,0.08)", border: "2px solid #0d9e6e30", display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,58,110,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(30,58,110,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <img src={CO_SUPERVISOR.photo} alt={CO_SUPERVISOR.name} style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", marginBottom: 16, border: "3px solid #0d9e6e" }} />
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 800, color: "#1e2d4a", marginBottom: 6 }}>{CO_SUPERVISOR.name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#0d9e6e", fontWeight: 700, marginBottom: 6 }}>{CO_SUPERVISOR.role}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#8aabcc", marginBottom: 12 }}>{CO_SUPERVISOR.qualification}</div>
            <a href={`mailto:${CO_SUPERVISOR.email}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#0d9e6e", textDecoration: "none", fontWeight: 600 }}>{CO_SUPERVISOR.email}</a>
          </div>

          {/* Team Members */}
          {TEAM_MEMBERS.map((member, i) => {
            const component = COMPONENTS[i];
            return (
              <div key={member.name} style={{ background: "#fff", borderRadius: 20, padding: 28, textAlign: "center", boxShadow: "0 4px 20px rgba(30,58,110,0.08)", border: `2px solid ${component.color}30`, display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,58,110,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(30,58,110,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <img src={member.photo} alt={member.name} style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", marginBottom: 16, border: `3px solid ${component.color}` }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 800, color: "#1e2d4a", marginBottom: 6 }}>{member.name}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: component.color, fontWeight: 700, marginBottom: 8 }}>{component.icon} {component.title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#8aabcc", marginBottom: 12 }}>{member.role}</div>
                <a href={`mailto:${member.email}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: component.color, textDecoration: "none", fontWeight: 600 }}>{member.email}</a>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}