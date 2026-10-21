'use client';
import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. CMS_DATA 模擬資料庫 (整合得獎經歷與分類)
// ==========================================
const CMS_DATA = {
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

// ==========================================
// 1.5 服務流程專屬資料 (ProcessPage)
// ==========================================
const FLOW_DATA = [
  { phase: "Phase 1", time: "2-3 Weeks", title: "品牌診斷與高階訪談", desc: "這不是單向的填寫需求單，而是雙向的商業健檢。我們將與企業決策層進行深度訪談，挖掘品牌的核心價值與獨特銷售主張（USP）。針對跨國品牌，我們亦會進行在地市場的競品視覺盤點，找出市場的視覺空白區，確保後續的設計具備降維打擊的破框潛力。" },
  { phase: "Phase 2", time: "2 Weeks", title: "視覺策略與概念定調", desc: "在進入具體繪圖前，我們會先提出核心概念。透過情緒板（Moodboard）、色彩心理學與材質意象的提案，與企業主對齊對「高級感」與「品牌調性」的共識，確保設計方向緊扣商業策略。" },
  { phase: "Phase 3", time: "4-6 Weeks", title: "識別系統與跨載體展開", desc: "以「大面積留白與克制」的美學原則，發展具備高度延展性的企業識別系統（CIS）。從標誌（Logo）打磨、標準字體設計、色彩計畫，一路延伸至數位介面、包裝結構或空間導覽等商業接觸點，確保品牌在任何跨國市場的落地都能保持絕對的視覺統治力。" },
  { phase: "Phase 4", time: "Ongoing", title: "國際專利佈局與智財保護", desc: "視覺資產的確立必須伴隨法律保障。在設計定案的同時，我們將啟動品牌國際專利與商標的申請諮詢服務。針對客戶預計進軍的海外市場（如美、日、澳），提前進行商標佈局建議，確保您的無形資產在跨國擴張時毫無後顧之憂。" },
  { phase: "Phase 5", time: "1-2 Weeks", title: "品牌規範導入與資產交付", desc: "設計不是結束，而是品牌營運的開始。我們將交付嚴謹且具備國際規格的《品牌視覺規範手冊》（Brand Guidelines），詳細定義標誌的錯誤用法、色彩色碼與排版網格系統。確保企業內部的行銷團隊或海外代理商，都能精準傳遞一致的人文溫度與權威感。" }
];

const FAQ_DATA = [
  { question: "我們的品牌準備進軍海外市場（如歐美、日本），目來視覺設計能提供哪些協助？", answer: "在跨國擴張的過程中，視覺語彙必須跨越文化隔閡。我們提供「跨國品牌整合設計」服務，不僅提煉出您專屬的獨特銷售主張（USP），更透過大面積留白與克制的美學，為您的品牌建構具備國際權威感的視覺規範。我們擁有服務美、日、澳等國際客戶的實戰經驗，確保您的品牌在任何市場都能展現絕對的視覺統治力。" },
  { question: "企業面臨品牌老化或二代接班，進行 CIS 企業識別重塑的切入點是什麼？", answer: "我們不從「畫 Logo」開始，而是從「商業診斷」切入。面對品牌老化，我們會與企業決策層進行深度訪談，盤點市場定位與視覺空白區。如同我們協助傳統品牌轉型的成功案例，我們會萃取企業既有的歷史底蘊，將其轉化為具備現代張力的幾何系統與視覺策略，實質提升品牌的商業高度與年輕世代的共鳴。" },
  { question: "導入高階品牌視覺策略，對企業實質的商業回報（ROI）是什麼？", answer: "頂級的視覺設計不只是裝飾，而是精準的定價策略。精準的品牌定位與高級感視覺，能直接賦予產品更高的「品牌溢價空間（Premium Pricing）」。以我們的專案實績為例，破框的視覺策略能協助企業跳脫價格戰，成功打入高端通路，創造實質的營收增長與長期的品牌資產價值。" }
];

// ==========================================
// 2. SEOHead & 共用元件
// ==========================================
const SEOHead = ({ title, description, schemaData }) => {
  useEffect(() => {
    document.title = `${title} | 目來視覺設計 Mulight Visual Design`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
    if (schemaData) {
      let script = document.getElementById('json-ld-schema');
      if (script) script.remove();
      script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, [title, description, schemaData]);
  return null;
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const updateHoverState = (e) => {
      const target = e.target.closest('.hover-target');
      setIsHovering(!!target);
    };
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference transition-all duration-300 ease-out hidden md:block ${
        isHovering ? 'w-24 h-24 bg-[#002FA7] -ml-12 -mt-12 opacity-80' : 'w-4 h-4 bg-white -ml-2 -mt-2'
      }`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    />
  );
};

const Header = ({ currentRoute, setRoute }) => (
  <header className="fixed top-0 w-full p-6 md:p-12 flex justify-between items-center z-40 mix-blend-difference text-white">
    <div 
      className="text-lg md:text-xl font-medium tracking-widest uppercase cursor-pointer hover-target"
      onClick={() => setRoute('/')}
    >
      Mulight
    </div>
    <nav className="flex gap-8 text-xs md:text-sm font-light tracking-[0.2em] uppercase">
      {['About', 'Works', 'Process', 'Contact'].map((item) => {
        const path = item === 'Works' ? '/works' : `/${item.toLowerCase()}`;
        return (
          <button 
            key={item} 
            className={`hover-target hover:text-gray-300 transition-colors ${currentRoute.startsWith(path) && item !== 'Works' || currentRoute === path ? 'border-b border-white pb-1' : ''}`}
            onClick={() => setRoute(path)}
          >
            {item}
          </button>
        );
      })}
    </nav>
  </header>
);

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-gray-400 uppercase border-t border-gray-200 bg-[#FAFAFA]">
    <p>© {new Date().getFullYear()} Mulight Visual Design. All Rights Reserved.</p>
    <div className="flex gap-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-[#222222] transition-colors hover-target">Instagram</a>
      <a href="#" className="hover:text-[#222222] transition-colors hover-target">Behance</a>
    </div>
  </footer>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-8 flex justify-between items-center text-left hover-target group focus:outline-none"
        onClick={onClick}
      >
        <h4 className={`text-lg md:text-2xl font-light transition-colors duration-300 pr-8 ${isOpen ? 'text-[#002FA7]' : 'text-[#222222] group-hover:text-gray-500'}`}>
          {question}
        </h4>
        <span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
          <span className={`absolute w-full h-[1px] bg-[#222222] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#002FA7]' : ''}`}></span>
          <span className={`absolute h-full w-[1px] bg-[#222222] transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`}></span>
        </span>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <p className="pb-8 text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 3. 頁面視圖元件
// ==========================================

// --- 首頁 (純白主題: Hero + 服務項目 + 4案例) ---
const HomePage = ({ setRoute }) => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "目來視覺設計 Mulight Visual Design",
    "url": "https://www.mulight.tw"
  };

  return (
    <>
      <SEOHead title="首頁" description="目來視覺設計 Mulight Visual Design，專注於品牌重塑、CIS設計與包裝美學。" schemaData={orgSchema} />
      
      {/* 1. 主視覺 Hero (White Theme) */}
      <div className="min-h-screen pt-40 px-6 md:px-12 flex flex-col justify-center bg-[#FAFAFA]">
        <Reveal>
          <h1 className="text-5xl md:text-8xl font-light tracking-tight text-[#222222] leading-tight mb-8">
            Shaping the<br/>Future Vision.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-md tracking-wide leading-relaxed">
            We build timeless brand identities through extreme minimalism and strategic design thinking.
          </p>
        </Reveal>
      </div>

      {/* 2. 服務項目 (White Theme) */}
      <section className="bg-white text-[#222222] pt-32 pb-32 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-16 border-b border-gray-200 pb-4">
              Our Expertise
            </h2>
          </Reveal>
          <div className="flex flex-col border-t border-gray-200">
            {CMS_DATA.services.map((service, index) => (
              <div key={service.id} className="group relative border-b border-gray-200 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start hover-target">
                <Reveal delay={index * 100} className="w-full flex flex-col md:flex-row justify-between items-start relative z-10">
                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-2xl md:text-4xl font-light group-hover:text-[#002FA7] transition-colors duration-300">
                       {service.subtitle} <span className="block text-sm mt-2 font-mono text-gray-400 tracking-widest uppercase">{service.title}</span>
                    </h3>
                  </div>
                  <div className="w-full md:w-2/3 flex flex-col gap-6 md:pl-16">
                     <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-[#222222] transition-colors duration-300">
                       {service.desc}
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                       {service.items.map((item, i) => (
                         <div key={i} className="flex items-center gap-3">
                           <span className="w-1 h-1 bg-[#002FA7] rounded-full"></span>
                           <span className="text-sm font-light text-gray-600 group-hover:text-[#222222] transition-colors">{item}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 滿版 4 案例輪播展示 */}
      <section className="w-full bg-[#FAFAFA]">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          {CMS_DATA.works.slice(0,4).map((work, index) => (
            <div 
              key={work.slug} 
              className="relative group aspect-square md:aspect-auto md:h-[500px] overflow-hidden cursor-pointer hover-target bg-gray-200"
              onClick={() => setRoute(`/works/${work.slug}`)}
            >
              <img 
                src={work.cover} 
                alt={`${work.title} 案例`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#111111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">{work.category.split('/')[0]}</span>
                <h3 className="text-xl md:text-2xl font-light text-white mb-6">{work.title}</h3>
                <button className="border border-white text-white px-8 py-2 text-xs tracking-widest uppercase hover:bg-white hover:text-[#111111] transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        <div 
          className="w-full bg-gray-200 text-[#222222] text-center py-5 text-xs tracking-[0.2em] cursor-pointer hover:bg-[#002FA7] hover:text-white transition-colors duration-300 hover-target uppercase font-medium"
          onClick={() => setRoute('/works')}
        >
          View All Works
        </div>
      </section>
    </>
  );
};

// --- 全新獨立的 Works 總覽頁面 (帶分類篩選) ---
const WorksPage = ({ setRoute }) => {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'BRAND', 'GRAPHIC', 'WEB', 'SPACE'];
  const filteredWorks = CMS_DATA.works.filter(w => filter === 'ALL' || w.filterCategory === filter);

  return (
    <>
      <SEOHead title="作品實績" description="目來視覺設計歷年品牌識別、平面設計與包裝專案。" />
      <div className="min-h-screen pt-40 pb-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col items-center text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-light text-[#222222] mb-12">Selected Works</h1>
            {/* 分類導覽列[cite: 15] */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-colors hover-target pb-1 ${filter === cat ? 'text-[#222222] border-b border-[#222222] font-medium' : 'text-gray-400 hover:text-[#222222]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 網格作品列表[cite: 16] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-[1600px] mx-auto">
          {filteredWorks.map((work, index) => (
            <Reveal key={work.slug} delay={(index % 3) * 100}>
              <div 
                className="relative group aspect-square overflow-hidden cursor-pointer hover-target bg-gray-200"
                onClick={() => setRoute(`/works/${work.slug}`)}
              >
                <img 
                  src={work.cover} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#111111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-light text-white mb-4">{work.title}</h3>
                  <span className="text-[10px] tracking-[0.2em] text-gray-300 uppercase">{work.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

// --- 專案內頁 (下方加入回作品列表按鈕) ---
const WorkDetailPage = ({ slug, setRoute }) => {
  const work = CMS_DATA.works.find(w => w.slug === slug);
  if (!work) return null;
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": work.title,
    "author": { "@type": "Organization", "name": "目來視覺設計" }
  };
  return (
    <>
      <SEOHead title={`${work.title} 案例分析`} description={work.content.challenge} schemaData={workSchema} />
      <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#FAFAFA]">
        <Reveal delay={100}>
          <div className="mb-16 mt-8">
            {work.awardBadge && (
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#002FA7] border border-[#002FA7] px-2 py-1 mb-6">
                {work.awardBadge}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-medium text-[#222222] mb-4">{work.title}</h1>
            <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">{work.category} / {work.year}</p>
          </div>
        </Reveal>
        
        {/* 大圖展示區[cite: 17, 18] */}
        <Reveal delay={200}>
          <div className="aspect-video w-full bg-gray-200 mb-24 overflow-hidden">
             <img src={work.cover} alt={`${work.title} 專案首圖`} className="w-full h-full object-cover" />
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-24">
          <Reveal delay={300} className="md:col-span-1">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">The Challenge</h3>
            <p className="text-sm font-light text-[#222222] leading-relaxed">{work.content.challenge}</p>
          </Reveal>
          <Reveal delay={400} className="md:col-span-1">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Insight & Strategy</h3>
            <p className="text-sm font-light text-[#222222] leading-relaxed">{work.content.strategy}</p>
          </Reveal>
          <Reveal delay={500} className="md:col-span-1">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">The Impact</h3>
            <p className="text-sm font-light text-[#222222] leading-relaxed">{work.content.impact}</p>
          </Reveal>
        </div>

        {work.pressRelease && (
          <Reveal className="mb-24 border-t border-gray-200 pt-16">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">Press & Media</h3>
            <a href={work.pressRelease.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 hover-target">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#002FA7] group-hover:border-[#002FA7] transition-colors duration-300">
                <span className="text-gray-500 group-hover:text-white text-lg leading-none mb-0.5">↗</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#222222] group-hover:text-[#002FA7] transition-colors duration-300">
                  {work.pressRelease.title}
                </p>
                <p className="text-xs text-gray-500 font-light mt-1">Featured on {work.pressRelease.source}</p>
              </div>
            </a>
          </Reveal>
        )}

        {/* 返回列表按鈕[cite: 18] */}
        <Reveal className="border-t border-gray-200 pt-12 flex justify-start">
           <button 
             onClick={() => setRoute('/works')} 
             className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-[#002FA7] transition-colors hover-target"
           >
             <span className="flex gap-1">
               <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#002FA7]"></span>
               <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#002FA7]"></span>
               <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#002FA7]"></span>
             </span>
             BACK TO DESIGN WORKS
           </button>
        </Reveal>
      </div>
    </>
  );
};

// --- 關於我們 (加入最新得獎紀錄) ---
const AboutPage = () => {
  const { director } = CMS_DATA;
  return (
    <>
      <SEOHead title="關於總監" description={`認識 ${director.name}。`} />
      <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#FAFAFA]">
        <Reveal>
          <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-16 border-b border-gray-200 pb-4">
            About The Director
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <Reveal delay={100} className="md:col-span-5 sticky top-32">
            <div className="aspect-[3/4] bg-gray-200 w-full mb-6 overflow-hidden">
               <img src="clyde-lai-profile.jpg" alt={director.name} className="w-full h-full object-cover grayscale" />
            </div>
          </Reveal>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <Reveal delay={200}>
              <h1 className="text-3xl md:text-5xl font-medium text-[#222222] mb-2">{director.name}</h1>
              <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-12">{director.title}</p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="space-y-8 text-sm font-light text-[#222222] leading-relaxed mb-16">
                <p>
                  於 {director.founded} 年創立目來視覺設計，秉持「眼之所見，未來之所向」的理念，深信設計不僅是美學的展現，更是解決商業問題的核心戰略。
                </p>
                <p>
                  專注於品牌診斷、CIS 企業識別系統與國際商標佈局，服務版圖橫跨 {director.globalReach.join('、')}。致力於將大面積留白與克制的高級感，導入頂尖企業的視覺資產中。
                </p>
              </div>
            </Reveal>

            {/* 新增: 國際得獎經歷區塊 */}
            <Reveal delay={400} className="border-t border-gray-200 pt-16">
              <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-12">Awards & Recognitions</h3>
              <div className="space-y-12">
                {director.awards.map((award, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                    <span className="text-sm font-mono text-gray-400 md:w-20 pt-1">{award.year}</span>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-[#222222] mb-1 group-hover:text-[#002FA7] transition-colors">{award.title}</h4>
                      <p className="text-xs font-bold tracking-widest text-[#002FA7] uppercase mb-3">{award.category}</p>
                      <p className="text-sm text-gray-500 font-light mb-4">{award.project}</p>
                      {award.url && (
                        <a href={award.url} target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.1em] text-gray-400 hover:text-[#002FA7] underline hover-target">
                          View Details ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </>
  );
};

// --- 全新獨立流程頁 (結合 FAQ) ---
const ProcessPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <>
      <SEOHead title="服務流程與戰略解答" description="目來視覺設計 5 階段高階品牌導入流程，與跨國品牌整合設計等專業顧問解答。" />
      <div className="min-h-screen bg-[#FAFAFA]">
        <section className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-24">
              <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 border-b border-gray-200 pb-4">Service Flow</h2>
              <h3 className="text-3xl md:text-5xl font-light text-[#222222] mt-12">
                A methodical approach <br/>
                <span className="italic text-gray-400">to visual strategy.</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-0">
            {FLOW_DATA.map((flow, index) => (
              <Reveal key={index} delay={index * 100} className="border-t border-gray-200 py-12 group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover-target">
                  <div className="md:col-span-3 flex flex-col">
                    <span className="text-xs font-bold tracking-widest text-[#002FA7] uppercase mb-1">{flow.phase}</span>
                    <span className="text-xs text-gray-400 font-light tracking-widest uppercase">{flow.time}</span>
                  </div>
                  <div className="md:col-span-9 flex flex-col md:flex-row gap-8 md:gap-16">
                    <h4 className="text-2xl font-medium text-[#222222] md:w-1/3 group-hover:text-[#002FA7] transition-colors">{flow.title}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed md:w-2/3">{flow.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <Reveal className="md:col-span-4 sticky top-32">
              <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Frequently Asked Questions</h2>
              <h3 className="text-3xl md:text-5xl font-light text-[#222222] mb-8">
                Strategic <br/> <span className="italic text-gray-400">Inquiries.</span>
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                釐清商業痛點是每一次成功合作的開端。這裡整理了企業決策層在導入品牌視覺重塑時，最關心的戰略問題。
              </p>
            </Reveal>
            <Reveal className="md:col-span-8 border-t border-gray-200 md:border-t-0" delay={200}>
              {FAQ_DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(index === openFaqIndex ? -1 : index)}
                />
              ))}
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
};

// --- 聯絡我們 ---
const ContactPage = () => {
  const [formData, setFormData] = useState({ company: '', email: '', serviceType: '', botField: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (status === 'error') setStatus('idle'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.botField !== '') {
      setStatus('success');
      return; 
    }
    if (!formData.company.trim() || !formData.email.trim() || !formData.serviceType) {
      setStatus('error');
      setErrorMessage('請完整填寫所有必填欄位。');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('請提供有效的企業電子郵件格式。');
      return;
    }
    setStatus('submitting');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('系統發生錯誤，請稍後再試或直接來信。');
    }
  };

  return (
    <>
      <SEOHead title="聯繫我們" description="聯絡目來視覺設計，啟動您的品牌重塑專案。" />
      <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 flex items-center justify-center bg-[#FAFAFA]">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-light mb-8 text-[#222222]">
              Ready to shape <br/>
              <span className="italic text-gray-400">the future?</span>
            </h2>
            <p className="text-gray-500 font-light mb-16 max-w-lg mx-auto">
              與目來視覺設計共創下一個具備指標意義的視覺專案。請簡述您的需求，我們的策略總監將與您聯繫。
            </p>
          </Reveal>
          <Reveal delay={200} className="w-full max-w-2xl text-left relative min-h-[400px]">
            {status === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-100 animate-fadeIn transition-opacity duration-500">
                <div className="w-16 h-16 bg-[#002FA7] rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-light mb-2 text-[#222222]">Inquiry Submitted.</h3>
                <p className="text-sm text-gray-500 font-light">
                  感謝您的來信。我們的策略團隊已收到您的需求，將於 1-2 個工作日內與您聯繫。
                </p>
              </div>
            ) : (
              <form className={`w-full transition-opacity duration-500 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
                <div className="absolute w-0 h-0 overflow-hidden opacity-0 z-[-1]" aria-hidden="true">
                  <label htmlFor="botField">Leave this field empty if you are human</label>
                  <input type="text" id="botField" name="botField" tabIndex="-1" autoComplete="off" value={formData.botField} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="relative">
                        <input type="text" id="company" value={formData.company} onChange={handleChange} className={`w-full bg-transparent border-b ${status === 'error' && !formData.company ? 'border-red-500' : 'border-gray-300'} py-3 text-sm focus:outline-none focus:border-[#002FA7] transition-colors peer placeholder-transparent hover-target text-[#222222]`} placeholder="Company Name" />
                        <label htmlFor="company" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#002FA7] pointer-events-none uppercase tracking-widest">Company / Brand Name *</label>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" value={formData.email} onChange={handleChange} className={`w-full bg-transparent border-b ${status === 'error' && !formData.email ? 'border-red-500' : 'border-gray-300'} py-3 text-sm focus:outline-none focus:border-[#002FA7] transition-colors peer placeholder-transparent hover-target text-[#222222]`} placeholder="Email Address" />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#002FA7] pointer-events-none uppercase tracking-widest">Email Address *</label>
                    </div>
                </div>
                <div className="relative mb-16">
                    <select id="serviceType" value={formData.serviceType} onChange={handleChange} className={`w-full bg-transparent border-b ${status === 'error' && !formData.serviceType ? 'border-red-500' : 'border-gray-300'} py-3 text-sm text-[#222222] focus:outline-none focus:border-[#002FA7] transition-colors hover-target appearance-none cursor-pointer`}>
                        <option value="" disabled className="text-gray-400">Select Inquiry Type *</option>
                        <option value="brand_cis">Brand Identity / CIS (品牌識別系統)</option>
                        <option value="packaging">Packaging Design (包裝設計)</option>
                        <option value="digital_ex">Digital Experience / Curation (數位策展)</option>
                        <option value="patent">Patent Consulting (專利諮詢)</option>
                    </select>
                </div>
                {status === 'error' && (
                  <div className="mb-8 text-center">
                    <span className="text-xs text-red-500 tracking-widest uppercase">{errorMessage}</span>
                  </div>
                )}
                <div className="text-center mt-8">
                    <button type="submit" disabled={status === 'submitting'} className="text-sm uppercase tracking-widest border border-[#222222] text-[#222222] px-12 py-4 hover:bg-[#222222] hover:text-white transition-colors duration-300 hover-target font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                        {status === 'submitting' ? 'Processing...' : 'Submit Inquiry'}
                    </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </>
  );
};

// ==========================================
// 5. 主應用程式路由
// ==========================================
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const renderPage = () => {
    if (currentRoute === '/') return <HomePage setRoute={setCurrentRoute} />;
    if (currentRoute === '/works') return <WorksPage setRoute={setCurrentRoute} />;
    if (currentRoute.startsWith('/works/')) return <WorkDetailPage slug={currentRoute.split('/')[2]} setRoute={setCurrentRoute} />;
    if (currentRoute === '/about') return <AboutPage />;
    if (currentRoute === '/process') return <ProcessPage />;
    if (currentRoute === '/contact') return <ContactPage />;
    return <HomePage setRoute={setCurrentRoute} />;
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#222222] font-sans selection:bg-[#002FA7] selection:text-white relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <CustomCursor />
      <Header currentRoute={currentRoute} setRoute={setCurrentRoute} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}