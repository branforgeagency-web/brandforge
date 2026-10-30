import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#FFFFFF", textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "5rem", fontWeight: 800, color: "#FF1801", marginBottom: "16px" }}>404</h1>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "12px" }}>Page Not Found</h2>
      <p style={{ color: "#94A3B8", maxWidth: "450px", marginBottom: "28px" }}>
        The page you are looking for doesn&apos;t exist or has been moved to another location.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "12px 28px",
          backgroundColor: "#FF1801",
          color: "#FFFFFF",
          borderRadius: "9999px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
