// src/lib/data.js

export const CMS_DATA = {
  director: {
    name: "賴永盛 Clyde Lai",
    title: "創辦人暨設計總監",
    company: "目來視覺設計顧問有限公司 (Mulight Visual Design)",
    founded: "2016",
    expertise: ["品牌診斷與定位", "CIS 企業識別系統設計", "Logo 設計", "品牌國際專利申請諮詢"],
    globalReach: ["台灣", "澳洲", "日本", "馬來西亞", "加拿大", "美國"],
    awards: [
      {
        year: "2026",
        title: "DesignBIZ Award 設計新商業大賞",
        category: "商業破框者",
        project: "宜隆福隆便當 (與酷麥設計共同合作)",
        url: "https://designbiz.shoppingdesign.com.tw/DBA/winner-detail-46.html"
      },
      {
        year: "2026",
        title: "新北市交通警察大隊「猛禽機甲」全新隊徽設計",
        category: "公部門品牌識別",
        project: "成功打造現代化、具科技感與執法威嚴的專屬識別",
        url: "https://www.master.idv.tw/xinbeijiaodaquanxinmengqinji/"
      },
      {
        year: "2025",
        title: "Golden Pin Design Awards 金點設計獎",
        category: "設計標章 (品牌設計)",
        project: "宜隆福隆便當 Yilong Fulong Bento",
        url: "https://goldenpin.org.tw/goldenpin/zh-TW/winners/2503"
      },
      {
        year: "2025",
        title: "Golden Pin Design Awards 金點設計獎",
        category: "設計標章",
        project: "Paper.Print.Portfolio｜紙樣工具書設計",
        url: "https://goldenpin.org.tw/goldenpin/zh-TW/winners/2519"
      },
      {
        year: "2024",
        title: "iF DESIGN AWARD 德國 iF 設計獎",
        category: "包裝設計 (Package Design)",
        project: "水屋厚茶 SIMPLICITEA",
        url: "https://ifdesign.com/en/winner-ranking/project/simplicitea/617617"
      },
      {
        year: "2023",
        title: "Taiwan International Graphic Design Award 臺灣國際平面設計獎",
        category: "台灣優選 (Taiwan Selection)",
        project: "水屋厚茶 SIMPLICITEA (士福國際貿易)",
        url: "https://www.tigda.org.tw/Post/181840"
      }
    ]
  },
  services: [
    {
      id: 'brand-design',
      title: 'BRAND DESIGN',
      subtitle: '品牌設計',
      desc: '為客戶打造從無到有專業整體視覺形象，從標誌設計到品牌視覺語言的構建，為企業和品牌創造獨特與一致的形象。',
      items: ['Logo／商標設計', 'CIS企業識別系統', '標準字設計', '品牌色彩規範', '品牌使用手冊', '名片、信封、信紙設計', '識別證、制服設計']
    },
    {
      id: 'graphic-design',
      title: 'GRAPHIC DESIGN',
      subtitle: '平面設計',
      desc: '專注於提升品牌的視覺溝通效果，透過設計確保品牌訊息的創意呈現和視覺協調性。',
      items: ['網頁網站設計', '包裝盒、紙袋設計', '瓶身、罐身包裝', '型錄、產品目錄', 'DM設計', '海報、菜單設計', '邀請卡、賀卡', '公司簡介', '吉祥物設計', '插畫設計']
    }
  ],
  works: [
    {
      slug: 'guo-tai-wine',
      title: '國泰洋酒',
      category: 'Packaging / Branding',
      filterCategory: 'BRAND',
      year: '2026',
      cover: 'works01.png',
      content: {
        challenge: '如何讓羅亞爾河莊園紅酒跳脫傳統法國酒標的陳舊感，與年輕新貴世代對話，是本次品牌重塑的核心挑戰。',
        strategy: '以「Prismatic Glow 稜鏡之光：巴黎感官之旅」為核心概念。運用現代幾何與光影漸層，重新定義高端紅酒的視覺語彙，創造具備藝術品收藏價值的包裝體驗。',
        impact: '全新識別導入後，成功打入高階品酒社群與米其林星級餐廳通路，產品的品牌溢價空間（Premium Pricing）實質提升了 30%。'
      }
    },
    {
      slug: 'yilong-bento',
      title: '宜隆福隆便當',
      category: 'Brand Identity / F&B',
      filterCategory: 'BRAND',
      year: '2026',
      awardBadge: '金點設計獎 & DesignBIZ 雙料大獎',
      cover: 'works02.png',
      content: {
        challenge: '傳統在地老店面臨品牌老化與跨世代客群流失的危機。',
        strategy: '保留老字號的人文溫度，注入現代化排版與標準字設計，讓傳統美味具備連鎖加盟的視覺高度。(本案由目來視覺設計與酷麥設計共同合作)',
        impact: '榮獲 2026 DesignBIZ Award「商業破框者」與 2025 金點設計獎，成功帶動年輕客群來客數成長。'
      }
    },
    {
      slug: 'raptor-mecha',
      title: '新北市交大「猛禽機甲」',
      category: 'Logo Design / Public Sector',
      filterCategory: 'GRAPHIC',
      year: '2026',
      awardBadge: '全新隊徽設計',
      cover: 'works03.png',
      content: {
        challenge: '公部門執法單位形象長期過於傳統，難以與現代科技執法的高效形象產生連結。',
        strategy: '受新北交大邀請操刀，萃取猛禽的銳利與機甲的俐落，打造具備科技感與執法威嚴的專屬品牌識別。',
        impact: '成功翻轉大眾對公部門視覺的刻板印象，提升單位的向心力與公眾形象。'
      },
      pressRelease: {
        title: "新北交大全新「猛禽機甲」隊徽亮相",
        source: "達人新聞",
        url: "https://www.master.idv.tw/xinbeijiaodaquanxinmengqinji/"
      }
    },
    {
      slug: 'simplicitea',
      title: '水屋厚茶 SIMPLICITEA',
      category: 'Packaging / FMCG',
      filterCategory: 'GRAPHIC',
      year: '2023',
      awardBadge: '德國 iF 設計獎 & 台灣優選',
      cover: 'works04.png',
      content: {
        challenge: '為士福國際貿易旗下品牌設計，需將具備四十年製茶技術的普洱茶膠囊化產品賦予全新視覺形象。',
        strategy: '以極簡主義結合東方茶道精神，採用環保材質與高對比色塊，打破傳統普洱茶厚重的視覺包袱。',
        impact: '榮獲 2024 iF DESIGN AWARD 與 2023 臺灣國際平面設計獎「台灣優選」，順利打入國際高端超市通路。'
      }
    }
  ]
};