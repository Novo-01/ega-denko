import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const services = [
  {
    title: '電気工事',
    description: '新築・リフォームの電気工事から、各種設備の設置・メンテナンスまで、幅広い電気工事に対応しています。',
    features: [
      '新築電気工事',
      'リフォーム電気工事',
      '照明設備工事',
      'コンセント増設',
      '分電盤交換',
    ],
  },
  {
    title: '設備管理',
    description: 'ビルや工場などの電気設備の定期点検・メンテナンスを行い、安全で快適な環境を維持します。',
    features: [
      '定期点検',
      '予防保全',
      '緊急対応',
      '設備診断',
      '省エネ提案',
    ],
  },
  {
    title: '省エネ提案',
    description: '最新の省エネ技術を活用し、電気代の削減と環境負荷の低減を実現する提案を行います。',
    features: [
      'LED照明導入',
      '空調設備の最適化',
      '太陽光発電システム',
      '蓄電システム',
      'エネルギーマネジメント',
    ],
  },
];

export default function Services() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            サービス紹介
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 