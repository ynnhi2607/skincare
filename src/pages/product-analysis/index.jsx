import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import ImageUploadZone from "./components/ImageUploadZone";
import OverviewCard from "./components/OverviewCard";
import RiskAssessmentCard from "./components/RiskAssessmentCard";
import IngredientsCard from "./components/IngredientsCard";
import AnalysisProgress from "./components/AnalysisProgress";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const ProductAnalysis = () => {
  const [uploadedImages, setUploadedImages] = useState({
    front: null,
    back: null,
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("upload");
  const [analysisResults, setAnalysisResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Mock analysis data
  const mockAnalysisData = {
    product: {
      name: "Serum Vitamin C Advanced Brightening",
      brand: "GlowSkin Pro",
      image: "https://images.unsplash.com/photo-1669200141274-38ae8632a86a",
      rating: 4.6,
      reviewCount: 1247,
      category: "Serum dưỡng sáng da",
      benefits: [
        "Làm sáng da tự nhiên",
        "Chống oxy hóa mạnh mẽ",
        "Giảm thâm nám hiệu quả",
        "Kích thích tái tạo collagen",
        "Cải thiện độ đàn hồi da",
        "Bảo vệ khỏi tác hại môi trường",
      ],

      skinCompatibility: [
        { skinType: "Da khô", rating: 4.8 },
        { skinType: "Da dầu", rating: 4.3 },
        { skinType: "Da hỗn hợp", rating: 4.7 },
        { skinType: "Da nhạy cảm", rating: 3.9 },
        { skinType: "Da thường", rating: 4.9 },
      ],
    },
    risk: {
      overallRisk: "low-risk",
      categories: {
        "no-risk": [
          {
            name: "Vitamin C (L-Ascorbic Acid)",
            concentration: "15%",
            reason:
              "Thành phần an toàn, được FDA chấp thuận cho sử dụng trong mỹ phẩm",
          },
          {
            name: "Hyaluronic Acid",
            concentration: "2%",
            reason: "Chất dưỡng ẩm tự nhiên, không gây kích ứng",
          },
          {
            name: "Glycerin",
            concentration: "5%",
            reason: "Chất làm mềm da an toàn, phù hợp mọi loại da",
          },
        ],

        "low-risk": [
          {
            name: "Phenoxyethanol",
            concentration: "0.5%",
            reason: "Chất bảo quản có thể gây kích ứng nhẹ ở da nhạy cảm",
          },
          {
            name: "Fragrance",
            concentration: "0.2%",
            reason: "Có thể gây phản ứng dị ứng ở một số người",
          },
        ],

        "moderate-risk": [
          {
            name: "Alpha Hydroxy Acids (AHA)",
            concentration: "3%",
            reason:
              "Có thể tăng độ nhạy cảm với ánh nắng, cần sử dụng kem chống nắng",
          },
        ],
      },
    },
    ingredients: [
      {
        name: "Vitamin C (L-Ascorbic Acid)",
        concentration: "15",
        description:
          "Chất chống oxy hóa mạnh mẽ, giúp làm sáng da và kích thích sản sinh collagen",
        benefits: [
          "Làm sáng da tự nhiên",
          "Chống oxy hóa mạnh mẽ",
          "Kích thích tái tạo collagen",
          "Giảm thâm nám và tàn nhang",
        ],

        usageNotes: "Nên sử dụng vào buổi sáng và kết hợp với kem chống nắng",
        safetyInfo: null,
      },
      {
        name: "Hyaluronic Acid",
        concentration: "2",
        description:
          "Chất dưỡng ẩm tự nhiên có khả năng giữ nước gấp 1000 lần trọng lượng của nó",
        benefits: [
          "Dưỡng ẩm sâu",
          "Làm đầy nếp nhăn",
          "Tăng độ đàn hồi da",
          "Phục hồi hàng rào bảo vệ da",
        ],

        usageNotes: "Có thể sử dụng cả sáng và tối, thích hợp mọi loại da",
        safetyInfo: null,
      },
      {
        name: "Niacinamide (Vitamin B3)",
        concentration: "5",
        description:
          "Vitamin B3 giúp kiểm soát dầu thừa và thu nhỏ lỗ chân lông",
        benefits: [
          "Kiểm soát dầu thừa",
          "Thu nhỏ lỗ chân lông",
          "Làm đều màu da",
          "Chống viêm nhẹ",
        ],

        usageNotes:
          "An toàn sử dụng hàng ngày, có thể kết hợp với các thành phần khác",
        safetyInfo: null,
      },
      {
        name: "Alpha Hydroxy Acids (AHA)",
        concentration: "3",
        description: "Axit tự nhiên giúp tẩy tế bào chết và làm mịn da",
        benefits: [
          "Tẩy tế bào chết nhẹ nhàng",
          "Làm mịn bề mặt da",
          "Cải thiện kết cấu da",
          "Tăng khả năng hấp thụ sản phẩm",
        ],

        usageNotes: "Nên bắt đầu với tần suất thấp, tăng dần theo thời gian",
        safetyInfo:
          "Có thể tăng độ nhạy cảm với ánh nắng. Luôn sử dụng kem chống nắng khi dùng sản phẩm chứa AHA.",
      },
      {
        name: "Phenoxyethanol",
        concentration: "0.5",
        description:
          "Chất bảo quản giúp ngăn chặn vi khuẩn và nấm mốc phát triển",
        benefits: [
          "Bảo quản sản phẩm",
          "Ngăn chặn vi khuẩn",
          "Kéo dài thời hạn sử dụng",
        ],

        usageNotes: "Nồng độ thấp, an toàn cho hầu hết mọi người",
        safetyInfo:
          "Có thể gây kích ứng nhẹ ở da rất nhạy cảm. Nên thử nghiệm trên vùng da nhỏ trước khi sử dụng.",
      },
      {
        name: "Glycerin",
        concentration: "5",
        description: "Chất làm mềm da tự nhiên, giúp giữ ẩm và làm mềm da",
        benefits: [
          "Dưỡng ẩm tự nhiên",
          "Làm mềm da",
          "Tăng độ mịn màng",
          "Không gây bít tắc lỗ chân lông",
        ],

        usageNotes: "Thích hợp mọi loại da, có thể sử dụng hàng ngày",
        safetyInfo: null,
      },
    ],
  };

  const handleImageUpload = (type, imageData, file) => {
    setUploadedImages((prev) => ({
      ...prev,
      [type]: imageData,
    }));
  };

  const simulateAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setCurrentStep("upload");

    const steps = [
      { step: "upload", duration: 1000, progress: 20 },
      { step: "ocr", duration: 1500, progress: 40 },
      { step: "analysis", duration: 2000, progress: 70 },
      { step: "risk", duration: 1500, progress: 90 },
      { step: "complete", duration: 500, progress: 100 },
    ];

    for (const { step, duration, progress } of steps) {
      setCurrentStep(step);

      // Animate progress
      const startProgress = analysisProgress;
      const progressDiff = progress - startProgress;
      const stepDuration = duration / 10;

      for (let i = 0; i <= 10; i++) {
        await new Promise((resolve) => setTimeout(resolve, stepDuration));
        setAnalysisProgress(startProgress + (progressDiff * i) / 10);
      }
    }

    setIsAnalyzing(false);
    setAnalysisResults(mockAnalysisData);
    setShowResults(true);
  };

  const handleAnalyzeProduct = () => {
    if (uploadedImages?.front || uploadedImages?.back) {
      simulateAnalysis();
    }
  };

  const handleReset = () => {
    setUploadedImages({ front: null, back: null });
    setAnalysisResults(null);
    setShowResults(false);
    setAnalysisProgress(0);
  };

  const canAnalyze = uploadedImages?.front || uploadedImages?.back;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glass">
              <Icon name="Camera" size={24} color="white" />
            </div>
            <h1 className="text-3xl font-heading font-bold gradient-text">
              Phân tích sản phẩm
            </h1>
          </div>
          <p className="text-lg text-muted-foreground font-caption max-w-2xl mx-auto">
            Tải ảnh sản phẩm skincare để nhận được phân tích chi tiết về thành
            phần, lợi ích và đánh giá rủi ro từ AI chuyên nghiệp
          </p>
        </div>

        {!showResults ? (
          <>
            {/* Image Upload Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <ImageUploadZone
                type="front"
                onImageUpload={handleImageUpload}
                uploadedImage={uploadedImages?.front}
              />

              <ImageUploadZone
                type="back"
                onImageUpload={handleImageUpload}
                uploadedImage={uploadedImages?.back}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={handleAnalyzeProduct}
                disabled={!canAnalyze}
                iconName="Sparkles"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Phân tích sản phẩm
              </Button>

              {canAnalyze && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleReset}
                  iconName="RotateCcw"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Tải ảnh khác
                </Button>
              )}
            </div>

            {/* Instructions */}
            <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Hướng dẫn sử dụng
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Chụp ảnh rõ nét
                      </h4>
                      <p className="text-sm text-muted-foreground font-caption">
                        Đảm bảo ảnh có ánh sáng tốt và nhãn sản phẩm rõ ràng
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Tải cả hai mặt
                      </h4>
                      <p className="text-sm text-muted-foreground font-caption">
                        Mặt trước cho thông tin cơ bản, mặt sau cho danh sách
                        thành phần
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Nhận kết quả
                      </h4>
                      <p className="text-sm text-muted-foreground font-caption">
                        AI sẽ phân tích và đưa ra đánh giá chi tiết trong vài
                        giây
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Tham khảo gợi ý
                      </h4>
                      <p className="text-sm text-muted-foreground font-caption">
                        Xem gợi ý sử dụng và quy trình chăm sóc phù hợp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Analysis Results */}
            <div className="space-y-8">
              {/* Results Header */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Icon name="CheckCircle" size={32} className="text-success" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Phân tích hoàn thành
                  </h2>
                </div>
                <p className="text-muted-foreground font-caption">
                  Dưới đây là kết quả phân tích chi tiết sản phẩm của bạn
                </p>
              </div>

              {/* Analysis Cards */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <OverviewCard productData={analysisResults?.product} />
                  <RiskAssessmentCard riskData={analysisResults?.risk} />
                </div>
                <div>
                  <IngredientsCard
                    ingredientsData={analysisResults?.ingredients}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() =>
                    (window.location.href = "/routine-recommendations")
                  }
                  iconName="Calendar"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Xem gợi ý quy trình
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = "/skincare-chatbot")}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Tư vấn thêm
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleReset}
                  iconName="RotateCcw"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Phân tích sản phẩm khác
                </Button>
              </div>
            </div>
          </>
        )}
      </main>
      {/* Analysis Progress Modal */}
      <AnalysisProgress
        isAnalyzing={isAnalyzing}
        progress={analysisProgress}
        currentStep={currentStep}
      />
    </div>
  );
};

export default ProductAnalysis;
