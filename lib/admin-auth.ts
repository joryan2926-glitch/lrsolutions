export function isAdminRequest(request: Request) {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return false;
  return request.headers.get("x-admin-token") === token;
}
