/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 加入這一行
  images: {
    unoptimized: true, // 如果你有使用 next/image，靜態輸出需要關閉圖片優化
  },
};

export default nextConfig;