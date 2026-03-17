CREATE TABLE "wc3_maps_complete" (
  -- 主键和基础标识
  id INTEGER PRIMARY KEY,
  path TEXT, -- 原始文件名
  name TEXT NOT NULL, -- 地图名称
  name2 TEXT, -- 备用名称/显示名称
  description TEXT, -- 描述
  -- 作者信息
  author TEXT, -- 作者
  -- 时间信息
  first_hosted TEXT, -- 首次托管时间（带$D前缀）
  last_hosted TEXT, -- 最后托管时间（带$D前缀）
  -- 解析状态
  parsed INTEGER DEFAULT 0, -- 解析状态: 0=未完全解析, 1=已解析
  -- 统计指标
  downloads INTEGER DEFAULT 0, -- 下载次数
  hosted_month INTEGER DEFAULT 0, -- 本月对战次数
  hosted_total INTEGER DEFAULT 0, -- 总对战次数
  saves INTEGER DEFAULT 0, -- 保存次数
  -- 技术标识
  sha1 TEXT, -- SHA1哈希值
  tileset TEXT, -- 地形类型: L=Lordaeron, 等
  format_version INTEGER, -- 地图格式版本
  editor_ver INTEGER, -- 编辑器版本
  -- 玩家与队伍
  player_count INTEGER DEFAULT 1, -- 支持玩家数量
  users INTEGER DEFAULT 0, -- 用户数（含义待确认）
  flags INTEGER DEFAULT 0, -- 功能位掩码
  -- 地图尺寸
  width INTEGER, -- 地图宽度（格子）
  height INTEGER, -- 地图高度（格子）
  playable_height INTEGER, -- 可玩区域高度
  playable_width INTEGER, -- 可玩区域宽度
  -- 队伍配置
  team_count INTEGER DEFAULT 1, -- 队伍数量
  team_info TEXT, -- 队伍详细配置（JSON字符串）
  -- 资源文件
  loadscreen TEXT, -- 载入画面配置（JSON字符串）
  minimap_data TEXT, -- 小地图标记数据（JSON字符串）
  -- 文件信息
  size INTEGER, -- 文件大小（字节）
  suggestion TEXT, -- 建议玩家数量范围
  -- 玩家槽位
  slot_info TEXT, -- 玩家槽位配置（JSON字符串）
  -- 技术规格
  alias INTEGER DEFAULT 0, -- 别名/重定向ID
  script INTEGER DEFAULT 0, -- 脚本类型: 0=JASS, 1=Lua
  graphics INTEGER DEFAULT 0, -- 图形支持: 0=?, 1=SD, 2=HD, 3=SD and HD
  build TEXT, -- 支持的War3版本
  -- 互动与标记
  likes INTEGER DEFAULT 0, -- 点赞数
  cheats INTEGER DEFAULT 0, -- 是否允许作弊: 0=否, 1=是
  transpiler INTEGER DEFAULT 0, -- 代码转换器标记
  has_triggers INTEGER DEFAULT 0, -- 是否有触发器: 0=无, 1=有
  -- 地图系列/分组
  group_id INTEGER DEFAULT 0, -- 分组ID
  group_hosted_total INTEGER DEFAULT 0, -- 分组总对战次数
  group_downloads INTEGER DEFAULT 0, -- 分组总下载次数
  latest INTEGER DEFAULT 0, -- 是否是最新版本: 0=否, 1=是
  group_hosted_month INTEGER DEFAULT 0, -- 分组本月对战次数
  preview INTEGER DEFAULT 0, -- 是否有预览图: 0=无, 1=有
  -- 历史与标签
  history TEXT, -- 版本历史（JSON数组字符串）
  tags TEXT, -- 标签
  -- 系统字段
      created_at TIMESTAMP DEFAULT (datetime('now', '+8 hours')),
    updated_at TIMESTAMP DEFAULT (datetime('now', '+8 hours')),
  processed_at TIMESTAMP, -- 数据采集处理时间
  -- 全文搜索优化（SQLite虚拟列）
  search_content TEXT GENERATED ALWAYS AS (
    COALESCE(name, '') || ' ' || COALESCE(name2, '') || ' ' || COALESCE(author, '') || ' ' || COALESCE(description, '')
  ) VIRTUAL
, has_detail INTEGER DEFAULT 0)