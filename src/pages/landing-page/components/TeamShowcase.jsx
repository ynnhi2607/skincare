import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const TeamShowcase = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Minh Anh",
      role: "AI Research Lead",
      description:
        "Chuyên gia về machine learning và computer vision với 8 năm kinh nghiệm trong lĩnh vực phân tích hình ảnh",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_19dc77a7e-1762274545448.png",
      avatarAlt:
        "Professional headshot of Asian woman with long black hair in white blazer smiling at camera",
      expertise: ["Machine Learning", "Computer Vision", "Deep Learning"],
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Trần Đức Huy",
      role: "Dermatology Consultant",
      description:
        "Bác sĩ da liễu với 12 năm kinh nghiệm, chuyên về skincare và tư vấn điều trị các vấn đề về da",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_116b22d4e-1762273809021.png",
      avatarAlt:
        "Professional headshot of Asian man with short black hair in navy suit and tie",
      expertise: ["Dermatology", "Skincare", "Clinical Research"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      role: "Product Manager",
      description:
        "Chuyên gia quản lý sản phẩm với kinh nghiệm phát triển các ứng dụng healthcare và beauty tech",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1b2720bf6-1762273579122.png",
      avatarAlt:
        "Professional headshot of Asian woman with shoulder-length brown hair in light blue shirt",
      expertise: ["Product Strategy", "UX Research", "Healthcare Tech"],
      social: {
        linkedin: "#",
        behance: "#",
      },
    },
    {
      id: 4,
      name: "Phạm Văn Nam",
      role: "Full-Stack Developer",
      description:
        "Developer với chuyên môn về React, Node.js và cloud infrastructure, đam mê xây dựng ứng dụng AI",
      avatar:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1f13fdd87-1762273386987.png",
      avatarAlt:
        "Professional headshot of Asian man with short black hair in gray sweater smiling",
      expertise: ["React", "Node.js", "Cloud Architecture"],
      social: {
        github: "#",
        linkedin: "#",
      },
    },
  ];

  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: "Linkedin",
      github: "Github",
      twitter: "Twitter",
      behance: "Palette",
    };
    return icons?.[platform] || "Link";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            <span className="gradient-text">Đội Ngũ Phát Triển</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-caption">
            Gặp gỡ những chuyên gia đứng sau công nghệ phân tích skincare thông
            minh
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member, index) => (
            <div
              key={member?.id}
              className="group glass-card p-6 rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-300 animate-glass-float text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src={member?.avatar}
                    alt={member?.avatarAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} color="white" />
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-primary font-medium font-caption">
                    {member?.role}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground font-caption leading-relaxed">
                  {member?.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member?.expertise?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/50 text-xs text-muted-foreground rounded-full border border-white/20 font-caption"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-2">
                  {Object.entries(member?.social)?.map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-8 h-8 bg-white/20 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group/social"
                      aria-label={`${member?.name} ${platform} profile`}
                    >
                      <Icon
                        name={getSocialIcon(platform)}
                        size={16}
                        className="group-hover/social:scale-110 transition-transform duration-200"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Năm kinh nghiệm", value: "25+", icon: "Award" },
            { label: "Dự án hoàn thành", value: "50+", icon: "CheckCircle" },
            { label: "Người dùng hài lòng", value: "10K+", icon: "Users" },
            { label: "Độ chính xác AI", value: "98%", icon: "Target" },
          ]?.map((stat, index) => (
            <div key={index} className="text-center glass-card p-4 rounded-xl">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={20} color="white" />
              </div>
              <div className="text-2xl font-heading font-bold text-foreground mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground font-caption">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
