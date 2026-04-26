import Section from "../components/layout/Section";
import SectionTitle from "../components/layout/SectionTitle";

export default function Documents() {
  const documentGroups = [
    {
      title: "Project Proposal",
      color: "#0d9e6e",
      documents: [
        {
          title: "Proposal Report - IT22232090",
          link: "https://drive.google.com/file/d/1R4xssUap8SIQb489NQKWco4GqbfR4neb/view?usp=drive_link",
        },
        {
          title: "Proposal Report - IT22238344",
          link: "https://drive.google.com/file/d/150QoGDsK9hQrzXuAEzF_A8tnYPa8hW-d/view?usp=drive_link",
        },
        {
          title: "Proposal Report - IT22604330",
          link: "https://drive.google.com/file/d/1DclNKNm0BuT9gHLLMvlMXAzm8-_fjjNU/view?usp=drive_link",
        },
        {
          title: "Proposal Report - IT22219084",
          link: "https://drive.google.com/file/d/1CS8KlSOYE45daMqYraEGC3p8o_27d-mQ/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Final Reports",
      color: "#7c3aed",
      documents: [
        {
          title: "Final Report - IT22232090",
          link: "/doc/final-it22232090.pdf",
        },
        {
          title: "Final Report - IT22238344",
          link: "/doc/final-it22238344.pdf",
        },
        {
          title: "Final Report - IT22604330",
          link: "/doc/final-it22604330.pdf",
        },
        {
          title: "Final Report - IT22219084",
          link: "/doc/final-it22219084.pdf",
        },
        {
          title: "Final Group Report",
          link: "/doc/final-group-report.pdf",
        },
      ],
    },
    {
      title: "Research Paper",
      color: "#d4880e",
      documents: [
        {
          title: "Research Paper",
          link: "/doc/research-paper.pdf",
        },
      ],
    },
    {
      title: "Deployment Documents",
      color: "#1e6fba",
      documents: [
        {
          title: "Deployment Report",
          link: "/doc/deployment-report.pdf",
        },
      ],
    },
    {
      title: "Registration Docs",
      color: "#d4880e",
      documents: [
        {
          title: "Topic Assessment",
          link: "/doc/topic-assessment.pdf",
        },
      ],
    },
  ];

  return (
    <Section style={{ paddingBottom: 100 }}>
      <SectionTitle
        eyebrow="Documents"
        title="Project Documents"
        subtitle="All produced documents and links. You can view or download PDFs."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {documentGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {/* Group Title */}
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 800,
                color: group.color,
                marginBottom: 20,
              }}
            >
              {group.title}
            </h3>

            {/* Documents Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {group.documents.map((doc, docIndex) => (
                <div
                  key={docIndex}
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: 22,
                    boxShadow: "0 4px 20px rgba(30,58,110,0.07)",
                    border: `2px solid ${group.color}30`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(30,58,110,0.12)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(30,58,110,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Title */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ fontSize: 28 }}>📄</span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#1e2d4a",
                        lineHeight: 1.4,
                      }}
                    >
                      {doc.title}
                    </span>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      paddingTop: 12,
                      borderTop: `1px solid ${group.color}20`,
                    }}
                  >
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: group.color,
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      View
                    </a>

                    <span style={{ color: `${group.color}60` }}>→</span>

                    <a
                      href={doc.link}
                      download
                      style={{
                        textDecoration: "none",
                        color: group.color,
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      Download
                    </a>

                    <span style={{ color: `${group.color}60` }}>↓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}