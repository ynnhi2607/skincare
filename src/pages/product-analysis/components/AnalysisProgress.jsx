import React from "react";
import Icon from "../../../components/AppIcon";

const AnalysisProgress = ({ isAnalyzing, progress, currentStep }) => {
  const analysisSteps = [
    {
      id: "upload",
      label: "Tải ảnh lên",
      icon: "Upload",
      description: "Đang xử lý hình ảnh sản phẩm",
    },
    {
      id: "ocr",
      label: "Nhận diện văn bản",
      icon: "ScanText",
      description: "Đọc thông tin từ nhãn sản phẩm",
    },
    {
      id: "analysis",
      label: "Phân tích thành phần",
      icon: "Beaker",
      description: "Đánh giá từng thành phần",
    },
    {
      id: "risk",
      label: "Đánh giá rủi ro",
      icon: "Shield",
      description: "Tính toán mức độ an toàn",
    },
    {
      id: "complete",
      label: "Hoàn thành",
      icon: "CheckCircle",
      description: "Tạo báo cáo phân tích",
    },
  ];

  if (!isAnalyzing) return null;

  const currentStepIndex = analysisSteps?.findIndex(
    (step) => step?.id === currentStep
  );
  const currentStepData =
    analysisSteps?.[currentStepIndex] || analysisSteps?.[0];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-xl p-8 max-w-md w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glass animate-pulse">
            <Icon name="Sparkles" size={32} color="white" />
          </div>
          <h3 className="text-xl font-heading font-semibold gradient-text mb-2">
            Đang phân tích sản phẩm
          </h3>
          <p className="text-sm text-muted-foreground font-caption">
            AI đang xử lý và phân tích thông tin sản phẩm của bạn
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Tiến độ</span>
            <span className="text-sm text-muted-foreground font-data">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Current Step */}
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon
                name={currentStepData?.icon}
                size={16}
                className="text-primary"
              />
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold text-foreground">
                {currentStepData?.label}
              </h4>
              <p className="text-xs text-muted-foreground font-caption">
                {currentStepData?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-3">
          {analysisSteps?.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const isPending = index > currentStepIndex;

            return (
              <div key={step?.id} className="flex items-center space-x-3">
                <div
                  className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-xs
                  ${
                    isCompleted
                      ? "bg-success text-white"
                      : isCurrent
                      ? "bg-primary text-white animate-pulse"
                      : "bg-muted text-muted-foreground"
                  }
                `}
                >
                  {isCompleted ? (
                    <Icon name="Check" size={12} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={`
                  text-sm font-caption
                  ${
                    isCompleted
                      ? "text-success"
                      : isCurrent
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }
                `}
                >
                  {step?.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Loading Animation */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(3)]?.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisProgress;
