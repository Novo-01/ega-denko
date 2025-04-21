import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const works = [
  {
    title: '〇〇ビル 電気設備工事',
    description: '新築ビルの電気設備工事を担当。省エネ設計を採用し、環境に配慮した施工を行いました。',
    image: '/images/works/work1.jpg',
    date: '2023年4月',
    location: '東京都中央区',
    features: ['LED照明導入', '太陽光発電システム', '省エネ空調'],
  },
  {
    title: '△△工場 設備更新工事',
    description: '老朽化した電気設備の更新工事を実施。最新の省エネ機器を導入し、ランニングコストを削減しました。',
    image: '/images/works/work2.jpg',
    date: '2023年8月',
    location: '神奈川県横浜市',
    features: ['分電盤更新', '照明設備更新', '防災設備強化'],
  },
  {
    title: '□□マンション リフォーム工事',
    description: '築20年のマンションの電気設備リフォームを実施。居住者の快適性と安全性を向上させました。',
    image: '/images/works/work3.jpg',
    date: '2023年12月',
    location: '東京都世田谷区',
    features: ['コンセント増設', '照明設備更新', 'インターホン更新'],
  },
];

export default function Works() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            施工実績
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* 画像は後で追加 */}
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">画像準備中</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{work.title}</h2>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>{work.date}</span>
                    <span className="mx-2">|</span>
                    <span>{work.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 