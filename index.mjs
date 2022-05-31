import f from "fastify";
import cors from "@fastify/cors";

const server = f({ logger: true });

async function portfolioRoutes(server) {
  server.get("/search", () => ({ data: [] }));
  server.get("/:portfolioId/positions", () => ({ data: [] }));
  server.get("/:portfolioId/instruments/:instrumentId/positions", () => ({
    data: [],
  }));
  server.get("/:portfolioId", () => ({ data: [] }));
  server.post("/", () => ({ data: [] }));
  server.patch("/:portfolioId", () => ({ data: [] }));
  server.delete("/:portfolioId", () => ({ data: [] }));

  return server;
}

server.register(cors);

server.register(portfolioRoutes, { prefix: "/portfolios" });

server.listen(
  {
    host: process.env.SERVER_HOST || "127.0.0.1",
    port: +process.env.SERVER_PORT || 4000,
  },
  async (err) => {
    if (err) {
      server.log.fatal(err);
      process.exit(1);
    }

    console.log(
      server.printRoutes({
        commonPrefix: false,
      })
    );
  }
);
