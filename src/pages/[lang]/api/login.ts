import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect, params }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");

  if (username === "jkdcdlly" && password === "mylove123@W") {
    cookies.set("admin_session", "true", {
      path: "/",
      httpOnly: true,
      secure: true
    });
    return redirect("/");
  }

  return redirect(`/${params.lang}/login?error=1`);
};