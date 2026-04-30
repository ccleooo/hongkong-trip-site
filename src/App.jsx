export default function HongKongTripSite() {
  const dayCards = [
    {
      day: 'DAY 1 · 05.01',
      title: '尖沙嘴＋維港夜景',
      // desc: '抵達後先入住，傍晚去黃大仙祈福，晚上回尖沙嘴看維港夜景。',
      items: [
        { time: '16:30', text: '入住 Hygge House', map: 'https://maps.app.goo.gl/wW9UfDbovLJLhBFH6' },
        { time: '17:00', text: '一點心', map: 'https://maps.app.goo.gl/KKUmA5cEQQBmHtYQ6' },
        { time: '20:00', text: 'K11 購物', map: 'https://maps.app.goo.gl/KXBgeMGYcqUEgyQ36' },
        { time: '21:00', text: '維港', map: 'https://maps.app.goo.gl/b9sBy9GGStqmMERCA' }
      ]
    },
    {
      day: 'DAY 2 · 05.02',
      title: '黃大仙＋中環＋上環',
      // desc: '經典港島一日遊，文青街區與最美夜景一次收集。',
      items: [
        { time: '10:00', text: '黃大仙祠', map: 'https://maps.app.goo.gl/aNwUhWRpc1ptRAh98' },
        { time: '11:00', text: '', map: '' },
        { time: '14:00', text: '', map: '' },
        { time: '17:00', text: '', map: '' }
      ]
    },
    {
      day: 'DAY 3 · 05.03',
      title: '早餐＋伴手禮＋返程',
      // desc: '輕鬆收尾，早上吃早餐後採買伴手禮前往機場。',
      items: [
        { time: '8:00', text: '港式早餐', map: 'https://maps.google.com/?q=Tsim+Sha+Tsui+Breakfast+Hong+Kong' },
        { time: '10:00', text: '香港機場', map: 'https://maps.google.com/?q=Hong+Kong+International+Airport' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#EEE8E1] text-[#5E5A56]">
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526481280695-3c4691d9e82a?auto=format&fit=crop&w=1600&q=80"
          alt="Hong Kong"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 text-white">
          <p className="tracking-[0.3em] text-sm mb-3">HONG KONG TRAVEL DIARY</p>
          <h1 className="text-5xl md:text-7xl font-light mb-4">香港三天兩夜</h1>
          {/* <p className="text-lg md:text-xl opacity-90">小紅書風 · 莫蘭蒂旅行部落格</p> */}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {dayCards.map((card, idx) => (
          <div key={idx} className="bg-[#F7F3EE] rounded-[2rem] shadow-lg overflow-hidden grid md:grid-cols-2">
            {/* <img src={card.image} alt={card.title} className="w-full h-80 md:h-full object-cover" /> */}
            <div className="p-8">
              <p className="text-xs tracking-[0.25em] opacity-60 mb-2">{card.day}</p>
              <h2 className="text-3xl font-semibold mb-3">{card.title}</h2>
              <p className="text-sm leading-7 mb-6 opacity-80">{card.desc}</p>
              <div className="space-y-4">
                {card.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.map}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl bg-[#E7DED5] p-4 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.time} · {item.text}</span>
                      <span className="text-sm opacity-70">Google Map ↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
