// Keep fork-specific translations outside generated Crowdin files.
export const driverTranslations: Record<string, Record<string, string>> = {
  "zh-CN": {
    "drivers.BaiduNetdisk.auth_type": "登录方式",
    "drivers.BaiduNetdisk.auth_types.oauth": "OAuth 刷新令牌",
    "drivers.BaiduNetdisk.auth_types.cookie": "网页 Cookie（浏览与播放）",
    "drivers.BaiduNetdisk.auth_type-tips":
      "OAuth 使用刷新令牌。Cookie 模式支持浏览、播放和媒体扫描，暂不支持上传、移动或删除云盘文件。Cookie 模式可解析 CDN 直链，使用 302 播放时请关闭「Web 代理」。",
    "drivers.BaiduNetdisk.cookie": "网页 Cookie",
    "drivers.BaiduNetdisk.cookie-tips":
      "登录 pan.baidu.com，打开浏览器开发者工具的「网络」面板，进入网盘目录，找到 /api/list 请求，复制请求头中完整的 Cookie 值并粘贴到这里。不要填写 Request URL、bdstoken 或 refresh_token。登录失效后重新复制 Cookie。",
    "drivers.BaiduNetdisk.refresh_token-tips":
      "仅 OAuth 登录方式需要刷新令牌；Cookie 登录方式无需填写。",
  },
  "zh-TW": {
    "drivers.BaiduNetdisk.auth_type": "登入方式",
    "drivers.BaiduNetdisk.auth_types.oauth": "OAuth 更新權杖",
    "drivers.BaiduNetdisk.auth_types.cookie": "網頁 Cookie（瀏覽與播放）",
    "drivers.BaiduNetdisk.auth_type-tips":
      "OAuth 使用更新權杖。Cookie 模式支援瀏覽、播放和媒體掃描，暫不支援上傳、移動或刪除雲端檔案。使用 302 播放時請關閉「Web 代理」。",
    "drivers.BaiduNetdisk.cookie": "網頁 Cookie",
    "drivers.BaiduNetdisk.cookie-tips":
      "登入 pan.baidu.com，開啟瀏覽器開發者工具的「網路」面板，進入網盤目錄，找到 /api/list 請求，複製請求標頭中完整的 Cookie 值。不要填寫 Request URL、bdstoken 或 refresh_token。登入失效後重新複製 Cookie。",
    "drivers.BaiduNetdisk.refresh_token-tips":
      "僅 OAuth 登入方式需要更新權杖；Cookie 登入方式無需填寫。",
  },
}
