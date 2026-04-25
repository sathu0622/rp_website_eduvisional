export default function Section({ children, style = {} }) {
  return <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0", ...style }}>{children}</div>;
}
