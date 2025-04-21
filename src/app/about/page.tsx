import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            会社概要
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">会社情報</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-700">会社名</dt>
                    <dd className="text-gray-600">Ega-Denko株式会社</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">設立</dt>
                    <dd className="text-gray-600">2000年4月</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">資本金</dt>
                    <dd className="text-gray-600">1,000万円</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">代表取締役</dt>
                    <dd className="text-gray-600">江賀 太郎</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">従業員数</dt>
                    <dd className="text-gray-600">50名</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">事業内容</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>・電気工事全般</li>
                  <li>・設備管理・メンテナンス</li>
                  <li>・省エネ提案・施工</li>
                  <li>・太陽光発電システムの設計・施工</li>
                  <li>・防災設備の設計・施工</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">会社の特徴</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  当社は、電気工事の専門家として20年以上の実績を持ち、
                  お客様のニーズに合わせた最適なソリューションを提供しています。
                </p>
                <p>
                  最新の技術と豊富な経験を活かし、安全で効率的な工事を
                  心がけています。また、環境に配慮した省エネ提案にも
                  力を入れており、お客様のコスト削減と環境負荷の低減を
                  実現しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 