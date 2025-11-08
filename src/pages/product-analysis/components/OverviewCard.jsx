import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const OverviewCard = ({ productData }) => {
  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "text-success";
    if (rating >= 3.5) return "text-warning";
    return "text-error";
  };

  const getRatingBg = (rating) => {
    if (rating >= 4.5) return "bg-success/10 border-success/20";
    if (rating >= 3.5) return "bg-warning/10 border-warning/20";
    return "bg-error/10 border-error/20";
  };

  return (
    <div className="glass-card rounded-xl p-6 animate-glass-float">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glass">
          <Icon name="Package" size={20} color="white" />
        </div>
        <h3 className="text-xl font-heading font-semibold gradient-text">
          Tổng quan sản phẩm
        </h3>
      </div>
      <div className="space-y-6">
        {/* Product Basic Info */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-lg overflow-hidden shadow-glass">
              <Image
                src={productData?.image}
                alt={`Hình ảnh sản phẩm ${productData?.name} từ thương hiệu ${productData?.brand}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <h4 className="text-lg font-heading font-semibold text-foreground">
                {productData?.name}
              </h4>
              <p className="text-sm text-primary font-medium">
                {productData?.brand}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon
                  name="Star"
                  size={16}
                  className="text-warning fill-current"
                />
                <span className="text-sm font-medium text-foreground">
                  {productData?.rating}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {productData?.reviewCount} đánh giá
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div>
          <h5 className="text-sm font-heading font-semibold text-foreground mb-3">
            Lợi ích chính
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {productData?.benefits?.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                <span className="text-sm text-foreground font-caption">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skin Compatibility Ratings */}
        <div>
          <h5 className="text-sm font-heading font-semibold text-foreground mb-4">
            Độ phù hợp với da
          </h5>
          <div className="space-y-3">
            {productData?.skinCompatibility?.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-foreground font-caption">
                  {item?.skinType}
                </span>
                <div className="flex items-center space-x-2">
                  <div
                    className={`
                    px-3 py-1 rounded-full text-xs font-medium border
                    ${getRatingBg(item?.rating)} ${getRatingColor(item?.rating)}
                  `}
                  >
                    {item?.rating}/5.0
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={`
                          ${
                            i < Math.floor(item?.rating)
                              ? "text-warning fill-current"
                              : "text-gray-300"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Category */}
        <div className="pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-caption">
              Loại sản phẩm
            </span>
            <span className="text-sm font-medium text-foreground">
              {productData?.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
