// Keep fork-specific translations outside generated Crowdin files.
export const driverTranslations: Record<string, Record<string, string>> = {
  "zh-CN": {
    "drivers.UC.cookie-tips":
      "登录 drive.uc.cn，在浏览器开发者工具的「网络」面板找到 pc-api.uc.cn 的 /1/clouddrive/file/sort 请求，复制完整 Cookie 值。若有多条 Cookie 请求头，用分号连接后填写。失效后重新复制；UC 不需要移动端请求 URL。",
    "drivers.UC.use_transcoding_address-tips":
      "开启后使用 UC 云端转码视频，由 OpenList 代理播放清单和分片。部分账号的原文件下载会返回 UC 浏览器或会员提示视频，建议开启此选项。",
    "drivers.UC.uc_resolution": "转码清晰度",
    "drivers.UC.uc_resolution-tips":
      "自动选择当前账号可用的最高画质。固定画质不可用时会报错，请切回「自动」。",
    "drivers.UC.uc_resolutions.auto": "自动（最高可用画质）",
    "drivers.UC.uc_resolutions.low": "流畅",
    "drivers.UC.uc_resolutions.high": "高清",
    "drivers.UC.uc_resolutions.super": "超清",
    "drivers.UC.uc_resolutions.2k": "2K",
    "drivers.UC.uc_resolutions.4k": "4K",
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
    "drivers.UC.cookie-tips":
      "登入 drive.uc.cn，在瀏覽器開發者工具的「網路」面板找到 pc-api.uc.cn 的 /1/clouddrive/file/sort 請求，複製完整 Cookie 值。若有多條 Cookie 標頭，用分號連接。失效後重新複製；UC 無需行動端請求 URL。",
    "drivers.UC.use_transcoding_address-tips":
      "使用 UC 雲端轉碼影片，由 OpenList 代理播放清單與分片。部分帳號的原檔下載會傳回 UC 瀏覽器或會員提示影片，建議開啟此選項。",
    "drivers.UC.uc_resolution": "轉碼畫質",
    "drivers.UC.uc_resolution-tips":
      "自動選擇目前帳號可用的最高畫質。固定畫質不可用時會報錯，請切回「自動」。",
    "drivers.UC.uc_resolutions.auto": "自動（最高可用畫質）",
    "drivers.UC.uc_resolutions.low": "流暢",
    "drivers.UC.uc_resolutions.high": "高清",
    "drivers.UC.uc_resolutions.super": "超清",
    "drivers.UC.uc_resolutions.2k": "2K",
    "drivers.UC.uc_resolutions.4k": "4K",
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
