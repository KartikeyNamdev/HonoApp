import { Hono } from "hono";
export default async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    console.log("Middleware is working");
    await next();
  } else return c.text("Access Denied");
}
