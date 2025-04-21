import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            サービス紹介
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">電気工事</h3>
              <p className="text-gray-600">
                新築・リフォームの電気工事から、各種設備の設置・メンテナンスまで、
                幅広い電気工事に対応しています。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">設備管理</h3>
              <p className="text-gray-600">
                ビルや工場などの電気設備の定期点検・メンテナンスを行い、
                安全で快適な環境を維持します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">省エネ提案</h3>
              <p className="text-gray-600">
                最新の省エネ技術を活用し、電気代の削減と環境負荷の低減を
                実現する提案を行います。
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
