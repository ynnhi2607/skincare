import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import FeatureHighlights from "./components/FeatureHighlights";
import TeamShowcase from "./components/TeamShowcase";
import CallToAction from "./components/CallToAction";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>SkinCare Analyzer - Phân Tích Skincare Thông Minh Với AI</title>
        <meta
          name="description"
          content="Khám phá thành phần sản phẩm, đánh giá rủi ro và nhận gợi ý quy trình chăm sóc da cá nhân hóa từ chuyên gia AI hàng đầu"
        />
        <meta
          name="keywords"
          content="skincare, phân tích da, AI, chăm sóc da, beauty tech, dermatology"
        />
        <meta
          property="og:title"
          content="SkinCare Analyzer - Phân Tích Skincare Thông Minh"
        />
        <meta
          property="og:description"
          content="Ứng dụng AI phân tích thành phần skincare và gợi ý quy trình chăm sóc da cá nhân"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/landing-page" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header Navigation */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Feature Highlights */}
          <FeatureHighlights />

          {/* Team Showcase */}
          <TeamShowcase />

          {/* Call to Action */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-xl font-heading font-semibold">
                    SkinCare Analyzer
                  </span>
                </div>
                <p className="text-gray-300 font-caption text-sm leading-relaxed">
                  Nền tảng phân tích skincare thông minh hàng đầu Việt Nam, được
                  hỗ trợ bởi công nghệ AI tiên tiến.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold">
                  Liên Kết Nhanh
                </h3>
                <ul className="space-y-2 text-sm font-caption">
                  <li>
                    <a
                      href="/product-analysis"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Phân Tích Sản Phẩm
                    </a>
                  </li>
                  <li>
                    <a
                      href="/routine-recommendations"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Gợi Ý Quy Trình
                    </a>
                  </li>
                  <li>
                    <a
                      href="/skincare-chatbot"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Tư Vấn AI
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold">Hỗ Trợ</h3>
                <ul className="space-y-2 text-sm font-caption">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Trung Tâm Trợ Giúp
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Liên Hệ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Chính Sách Bảo Mật
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Điều Khoản Sử Dụng
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold">Liên Hệ</h3>
                <div className="space-y-2 text-sm font-caption text-gray-300">
                  <p>Email: support@skincareanalyzer.vn</p>
                  <p>Hotline: 1900 1234</p>
                  <p>Địa chỉ: 123 Nguyễn Huệ, Q1, TP.HCM</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm font-caption">
                © {new Date()?.getFullYear()} SkinCare Analyzer. Tất cả quyền
                được bảo lưu.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.807 1.366 1.958 1.366 3.255s-.49 2.448-1.297 3.323c-.876.876-2.027 1.366-3.324 1.366z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
