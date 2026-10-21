// app/robots.js

export default function robots() {
  const baseUrl = 'https://www.mulight.com'; // 請替換為您的正式網域

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 如果未來有後台管理系統或客戶專屬草稿預覽頁，可在這裡阻擋爬蟲
      disallow: ['/private/', '/admin/'], 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}