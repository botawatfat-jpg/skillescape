import { Button } from "@/shared/ui";

/**
 * 404 страница
 * Next.js 15/16 - кастомная страница для несуществующих маршрутов
 */
export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        The page you are looking for does not exist.
      </p>
      <Button variant="primary" href="/">
        Go Home
      </Button>
    </div>
  );
}

