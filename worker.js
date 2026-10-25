const GITHUB_RAW_URL = "https://raw.githubusercontent.com/ricorai/Ryos/main/ryos.md";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 1. OPTIONS * Preflight Support
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          ...CORS_HEADERS,
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // 2. Permissive /robots.txt Route
    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\n", {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=60",
          "X-Robots-Tag": "index, follow",
          ...CORS_HEADERS,
        },
      });
    }

    // 3. Live-Fetch Courier Logic (GET /, /raw, /ryos.md, and any fallback route)
    try {
      const upstream = await fetch(GITHUB_RAW_URL, {
        cf: {
          cacheTtl: 60,
          cacheEverything: true,
        },
      });

      if (!upstream.ok) {
        return new Response(`Upstream error: ${upstream.status}`, {
          status: 502,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            ...CORS_HEADERS,
          },
        });
      }

      const text = await upstream.text();

      return new Response(text, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=60",
          "X-Robots-Tag": "index, follow",
          ...CORS_HEADERS,
        },
      });
    } catch (err) {
      return new Response(`Courier fetch error: ${err.message}`, {
        status: 502,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          ...CORS_HEADERS,
        },
      });
    }
  },
};
