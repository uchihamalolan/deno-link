export const BASE_URL = Deno.env.get("DENO_ENV") === "dev"
  ? "http://localhost:8000"
  : "https://link.thiswont.work";
