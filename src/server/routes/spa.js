import { join } from "path";

import compression from "@fastify/compress";
// import modernImages from "fastify-modern-images";
import fastifyStatic from "fastify-static";

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export const spaRoute = async (fastify) => {
  fastify.register(compression, { encodings: ['gzip', 'deflate'] });
  fastify.register(fastifyStatic, {
    root: join(__dirname, "public"),
    wildcard: false,
  });
  // fastify.register(modernImages, { quality: 1 });

  fastify.get("/favicon.ico", () => {
    throw fastify.httpErrors.notFound();
  });

  fastify.get("*", (_req, reply) => {
    return reply.sendFile("index.html", join(__dirname, "public"));
  });
};
