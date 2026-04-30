// 香港元素圖示映射
const iconMap = {
  hotel: '🏨',
  food: '🍜',
  shopping: '🛍️',
  view: '✨',
  temple: '🏯',
  park: '🌳',
  breakfast: '☕',
  airport: '✈️',
  popmart: '🎀',
  tram: '🚊',
  bolo: '🥐',
  charsiu: '🍖'
};

// 根據內容判斷圖示
const getIcon = (text) => {
  if (text.includes('入住') || text.includes('House')) return iconMap.hotel;
  if (text.includes('K11') || text.includes('購物') || text.includes('伴手禮')) return iconMap.shopping;
  if (text.includes('維港') || text.includes('夜景') || text.includes('view')) return iconMap.view;
  if (text.includes('一點心') || text.includes('茶餐廳') || text.includes('點心')) return iconMap.food;
  if (text.includes('黃大仙') || text.includes('祠')) return iconMap.temple;
  if (text.includes('早餐') || text.includes('早飲')) return iconMap.breakfast;
  if (text.includes('機場')) return iconMap.airport;
  if (text.includes('泡泡馬特') || text.includes('POPMART')) return iconMap.popmart;
  if (text.includes('叮叮') || text.includes('電車')) return iconMap.tram;
  if (text.includes('波羅包') || text.includes('菠蘿')) return iconMap.bolo;
  if (text.includes('叉燒')) return iconMap.charsiu;
  return '📍';
};

export default function HongKongTripSite() {
  const dayCards = [
    {
      day: 'DAY 1 · 05/01',
      title: '尖沙嘴＋維港夜景',
      emoji: '🌃',
      // desc: '抵達後先入住，傍晚享用美食，夜晚漫步維港欣賞璀璨夜景',
      items: [
        { time: '16:30', text: '入住 Hygge House', map: 'https://maps.app.goo.gl/wW9UfDbovLJLhBFH6' },
        { time: '17:00', text: '一點心', map: 'https://maps.app.goo.gl/KKUmA5cEQQBmHtYQ6' },
        { time: '20:00', text: 'K11 購物', map: 'https://maps.app.goo.gl/KXBgeMGYcqUEgyQ36' },
        { time: '21:00', text: '維港夜景', map: 'https://maps.app.goo.gl/b9sBy9GGStqmMERCA' }
      ]
    },
    {
      day: 'DAY 2 · 05/02',
      title: '黃大仙＋中環＋上環',
      emoji: '🏯',
      // desc: '祈福、美食、文青街區，體驗港島經典一日遊',
      items: [
        { time: '10:00', text: '黃大仙祠祈福', map: 'https://maps.app.goo.gl/aNwUhWRpc1ptRAh98' },
        { time: '11:00', text: '泡泡馬特樂園', map: '' },
        { time: '14:00', text: '中環逛街＆波羅包', map: '' },
        { time: '17:00', text: '上環叮叮電車體驗', map: '' }
      ]
    },
    {
      day: 'DAY 3 · 05/03',
      title: '早餐＋伴手禮＋返程',
      emoji: '✈️',
      // desc: '享受最後的港式早餐，帶著美好回憶和伴手禮返程',
      items: [
        { time: '8:00', text: '港式早餐＆叉燒飯', map: 'https://maps.google.com/?q=Tsim+Sha+Tsui+Breakfast+Hong+Kong' },
        { time: '10:00', text: '香港機場', map: 'https://maps.google.com/?q=Hong+Kong+International+Airport' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0EB] to-[#E8DFD7]">
      {/* 頁首 Hero 區域 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8DFD7] via-[#F0E8DE] to-[#D9CCC0]">
        {/* 裝飾元素 */}
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-pulse">🎀</div>
        <div className="absolute bottom-20 left-10 text-5xl opacity-20 animate-pulse">✨</div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl opacity-15">🏙️</div>
        
        <div className="text-center px-8 z-10">
          <div className="text-7xl mb-6 animate-bounce">🌃</div>
          <h1 className="text-6xl md:text-7xl font-light mb-6 text-[#5E5A56] tracking-wide">
            香港三天兩夜
          </h1>
          
          <p className="text-lg md:text-xl tracking-[0.25em] text-[#8B8680] mb-4 font-light">
            HONG KONG TRAVEL SCHEDULE
          </p>
          <hr />
          <p className="text-sm text-[#9D9A95] tracking-wide">May 1-3, 2026</p>
          
          {/* 香港元素icon */}
          <div className="flex justify-center gap-6 mt-10 text-3xl">
            <span className="transform hover:scale-125 transition">🎀</span>
            <span className="transform hover:scale-125 transition">🚊</span>
            <span className="transform hover:scale-125 transition">🥐</span>
            <span className="transform hover:scale-125 transition">🍖</span>
          </div>
        </div>
      </section>

      {/* 主內容區域 */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {dayCards.map((card, idx) => (
          <div key={idx} className="mb-12 scroll-mt-20">
            {/* 日期卡片頭部 */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">{card.emoji}</div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <p className="text-xs tracking-[0.2em] text-[#B5A89D] font-semibold">{card.day}</p>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#D9CCC0] to-transparent"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-[#5E5A56] mt-2">
                  {card.title}
                </h2>
              </div>
            </div>
            
            {card.desc && (
              <p className="text-[#8B8680] text-sm md:text-base leading-relaxed mb-8 pl-20">
                {card.desc}
              </p>
            )}

            {/* 時間表 */}
            <div className="pl-20 relative">
              {/* 豎線 */}
              <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4C4B9] via-[#D9CCC0] to-transparent"></div>
              
              <div className="space-y-4">
                {card.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.map}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="flex gap-4 items-start hover:translate-x-1 transition-transform">
                      {/* 時間點 */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5F0EB] to-[#E8DFD7] border-2 border-[#D9CCC0] flex items-center justify-center mt-1 flex-shrink-0 group-hover:border-[#C7B8AE] group-hover:shadow-md transition">
                        <span className="text-lg">{getIcon(item.text)}</span>
                      </div>
                      
                      {/* 內容卡片 */}
                      <div className="flex-1 bg-white bg-opacity-50 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg hover:bg-opacity-70 transition group-hover:border-[#D9CCC0] border border-transparent">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <p className="text-sm text-[#B5A89D] font-semibold tracking-widest text-left">
                              {item.time}
                            </p>
                            <p className="text-[#5E5A56] font-medium text-base mt-1">
                              {item.text}
                            </p>
                          </div>
                          {item.map && (
                            <span className="text-sm text-[#D9CCC0] group-hover:text-[#9D9A95] transition whitespace-nowrap">
                              Map ↗
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 頁尾 */}
      <div className="mt-20 py-12 border-t border-[#D9CCC0] border-opacity-30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* <p className="text-[#A39A8F] text-sm tracking-widest mb-4">
            ✨ 探索香港，記錄美好 ✨
          </p> */}
          <div className="flex justify-center gap-4 text-4xl">
            <span>🎀</span>
            <span>🚊</span>
            <span>🥐</span>
            <span>🍖</span>
          </div>
        </div>
      </div>
    </div>
  );
}
