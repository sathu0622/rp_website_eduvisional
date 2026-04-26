import { useState } from "react";
import Section from "../components/layout/Section";
import SectionTitle from "../components/layout/SectionTitle";
import { COMPONENTS, TEAM_MEMBERS } from "../data/siteData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const handle = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in name, email, and message.");
      return;
    }

    try {
      setSending(true);
      setError("");

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Unable to send message right now.");
      }

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (submitError) {
      setError(submitError.message || "Unable to send message right now.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    border: "2px solid #e0eaf5",
    borderRadius: 12,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: "#1e2d4a",
    background: "#f8fbff",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <Section style={{ paddingBottom: 100 }}>
      <SectionTitle eyebrow="Contact Us" title="Get In Touch" subtitle="Reach out for collaboration, inquiries, or feedback about EduVisionAI." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 40, alignItems: "start" }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: 24, boxShadow: "0 4px 16px rgba(30,58,110,0.08)", border: "1.5px solid #e8f0fa" }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#1e2d4a", margin: "0 0 16px" }}>Component Contacts</h4>
          {COMPONENTS.map((component, i) => (
            <div key={component.id} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
              <span style={{ fontSize: 18 }}>{component.icon}</span>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: component.color }}>{component.title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#8aabcc" }}>{TEAM_MEMBERS[i].email}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 24, padding: "40px 36px", boxShadow: "0 8px 40px rgba(30,58,110,0.09)", border: "1.5px solid #e8f0fa" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1e2d4a", marginBottom: 12 }}>Message Sent!</h3>
              <button onClick={() => setSent(false)} style={{ marginTop: 20, background: "linear-gradient(135deg, #1e3a6e, #1e6fba)", color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
                Send Another
              </button>
            </div>
          ) : (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#1e2d4a", margin: "0 0 28px" }}>Send a Message</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <input style={inputStyle} value={form.name} onChange={(e) => handle("name", e.target.value)} placeholder="Full Name" />
                <input style={inputStyle} value={form.email} onChange={(e) => handle("email", e.target.value)} placeholder="your@email.com" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <input style={inputStyle} value={form.subject} onChange={(e) => handle("subject", e.target.value)} placeholder="Subject" />
              </div>
              <div style={{ marginBottom: 24 }}>
                <textarea style={{ ...inputStyle, height: 130, resize: "vertical" }} value={form.message} onChange={(e) => handle("message", e.target.value)} placeholder="Your message..." />
              </div>
              {error ? (
                <div style={{ marginBottom: 16, color: "#b42318", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>{error}</div>
              ) : null}
              <button
                onClick={submit}
                disabled={sending}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #1e3a6e, #1e6fba)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 14,
                  padding: "14px 0",
                  cursor: sending ? "not-allowed" : "pointer",
                  opacity: sending ? 0.75 : 1,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}