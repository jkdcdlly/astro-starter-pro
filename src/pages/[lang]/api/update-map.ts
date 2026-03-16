import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, url }) => {
  // 检查登录状态
  const adminSession = cookies.get("admin_session")?.value;
  if (!adminSession) {
    return new Response(JSON.stringify({ error: "未授权访问" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  const form = await request.formData();
  const db = (Astro.locals as any).runtime.env.DB;

  try {
    // 从 URL 路径中获取地图 ID
    const pathSegments = url.pathname.split('/');
    const mapId = pathSegments[pathSegments.indexOf('api') - 1];

    // 获取所有字段
    const updateData: any = {
      name2: form.get("name2"),
      author: form.get("author"),
      description: form.get("description"),
      build: form.get("build"),
      format_version: form.get("format_version"),
      script: parseInt(form.get("script") as string) || 0,
      player_count: parseInt(form.get("player_count") as string) || 1,
      tileset: form.get("tileset"),
      width: parseInt(form.get("width") as string) || 0,
      height: parseInt(form.get("height") as string) || 0,
      playable_width: parseInt(form.get("playable_width") as string) || 0,
      playable_height: parseInt(form.get("playable_height") as string) || 0,
      graphics: parseInt(form.get("graphics") as string) || 0,
      has_triggers: form.get("has_triggers") === "on" ? 1 : 0,
      cheats: form.get("cheats") === "on" ? 1 : 0,
      team_count: parseInt(form.get("team_count") as string) || 1,
      tags: form.get("tags"),
      parsed: form.get("parsed") === "on" ? 1 : 0
    };

    // 构建 UPDATE SQL
    const fields = Object.keys(updateData).map(key => `${key} = ?`).join(", ");
    const values = Object.values(updateData);
    values.push(parseInt(mapId));

    const sql = `UPDATE wc3_maps_complete SET ${fields} WHERE id = ?`;
    
    await db.prepare(sql).bind(...values).run();

    return new Response(JSON.stringify({ success: true, message: "更新成功" }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error updating map:", error);
    return new Response(JSON.stringify({ error: "更新失败" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
