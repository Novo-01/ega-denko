import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gray-900">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            信頼と実績の電気工事
          </h1>
          <p className="text-xl mb-8">
            電気工事・設備管理・省エネ提案など、
            電気に関するあらゆるサービスを提供しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-center font-semibold"
            >
              お問い合わせ
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-center font-semibold"
            >
              サービスを見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 