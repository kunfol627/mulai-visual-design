// app/sitemap.js
import { CMS_DATA } from '@/lib/data'; // 引入您的模擬資料庫或實際 API

export default async function sitemap() {
  const baseUrl = 'https://www.mulight.com'; // 請替換為您的正式網域

  // 1. 宣告靜態核心頁面 (Static Routes)
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0, // 首頁權重最高
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8, // 包含重要權威新聞連結，給予 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9, // 包含高轉換率的 FAQ 與流程，給予 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  // 2. 動態生成作品內頁 (Dynamic Routes)
  // 在實際應用中，您可以從 CMS (如 Strapi, Sanity) 撈取資料
  const workRoutes = CMS_DATA.works.map((work) => ({
    url: `${baseUrl}/works/${work.slug}`,
    // 若資料庫有 updated_at 欄位，應替換為該作品的最後更新時間
    lastModified: new Date().toISOString(), 
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 3. 回傳完整的 URL 陣列，Next.js 會自動將其轉換為標準 XML 格式
  return [...staticRoutes, ...workRoutes];
}