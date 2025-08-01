"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "vi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",

    // Hero Section
    backendEngineer: "Backend Engineer",
    heroDescription:
      "With a solid foundation in backend development (Golang, PostgreSQL, Keycloak, GraphQL) and proactive learning in infrastructure (Docker, Kubernetes, CI/CD), I aspire to develop my career as a Backend Engineer combined with DevOps. My goal is to build service systems with clear architecture, efficient operation, and easy scalability in real production environments.",
    getInTouch: "Get in Touch",
    viewGithub: "View GitHub",

    // Education Section
    education: "Education",
    certificationsSkills: "Certifications & Skills",
    bachelorCS: "Bachelor of Computer Science",
    university: "University of Engineering and Technology - Vietnam National University",
    gpa: "GPA: 3.53/4.0",
    excellentStudent: "Excellent Student",
    labResearch: "• Participated in software technology lab research",
    codingCompetitions: "• Joined coding competitions and activities organized by the university",
    officeCert: "Office Computer Skills Certificate",
    softSkillsCert: "Soft Skills Completion Certificate",
    softSkillsTitle: "Soft Skills:",
    teamworkSkills: "• Teamwork and project planning skills",
    officeSkills: "• Office software proficiency: Word, Excel, PowerPoint",

    // Skills Section
    technicalSkills: "Technical Skills",
    skillsDescription: "Technologies and skills I use to build scalable backend systems",
    coreLanguages: "Core Programming Languages",
    backendDev: "Backend Development",
    databaseStorage: "Database & Storage",
    devopsDeployment: "DevOps & Deployment",
    frontendDev: "Frontend Development",
    mobileAI: "Mobile & AI",

    // Experience Section
    workExperience: "Work Experience",
    fullstackIntern: "Fullstack Developer Intern",
    mobifoneCompany: "Mobifone Digital Services Center - Mobifone Telecommunications Corporation",
    digitalSchoolProject: "Project: Digital School Platform",
    labResearchActivities: "Lab Research Activities",
    labResearchDesc: "Completed Frontend, Backend, and AI Fundamentals Courses",

    // Experience Details
    exp1: "• Developed backend systems using Golang with Clean Architecture to ensure scalability and maintainability",
    exp2: "• Designed and worked directly with PostgreSQL database, using SQLC to generate type-safe query code automatically",
    exp3: "• Implemented OAuth2 authentication and authorization system with Keycloak, integrated with Hasura GraphQL Engine through JWT custom claims",
    exp4: "• Designed and developed GraphQL APIs serving frontend and mobile applications",
    exp5: "• Wrote and managed database migrations, optimized queries and table structures to ensure system performance",
    exp6: "• Experimented with deployment, testing, and monitoring services on Kubernetes environment, using Docker for application containerization",
    exp7: "• Built Chatbox SDK for the learning platform (company's MOOCAI), separated as an independent Web Component that can be flexibly used across all frameworks (Vue, React, vanilla HTML...)",

    // Lab Research Details
    lab1: "• Reviewed fundamental web technologies: HTML, CSS, JavaScript",
    lab2: "• Studied backend development methodologies and best practices",
    lab3: "• Explored commonly used frontend and backend frameworks",
    lab4: "• Gained foundational knowledge in Machine Learning and Deep Learning",

    // Projects Section
    personalProjects: "Personal Projects",
    projectsDescription: "Projects I've developed during my academic journey showcasing my technical skills",
    qairlineTitle: "QAirline - Flight Booking System",
    qairlineDesc: "Web Development Course Project - 3 Team Members",
    listenVisionTitle: "ListenVision - Accessibility Web App",
    listenVisionDesc: "Web Development Course Project - 4 Team Members",
    cosmeaTitle: "Cosmea - Mobile Application",
    cosmeaDesc: "Mobile Development Course Project - 5 Team Members",

    // Project Details
    qairline1: "• Gathered requirements, designed functionality and user interface for the web application",
    qairline2: "• Developed logic and UI for customer and admin interfaces",
    qairline3: "• Participated in backend and database development: Built flight and ticket APIs",

    listenvision1: "• Developed logic and UI for user interface components",
    listenvision2: "• Researched and implemented AI system to convert voice commands into website interactions",
    listenvision3: "• Created accessible features for users with disabilities",

    cosmea1: "• Developed logic and UI for login, registration, and user profile features",
    cosmea2: "• Implemented image upload functionality with database integration",
    cosmea3: "• Created content moderation system with automatic image blurring for inappropriate content",

    // Project Roles
    coderDesigner: "CODER + DESIGNER",
    teamLeaderCoder: "TEAM LEADER + CODER",
    mobileDeveloper: "MOBILE DEVELOPER",

    // Contact Section
    letsConnect: "Let's Connect",
    contactDescription:
      "I'm always open to discussing new opportunities, exciting projects, or simply talking about backend engineering and system architecture. Feel free to reach out!",
    phone: "Phone",
    email: "Email",
    location: "Location",
    locationAddress: "Nguyen Trai Street, Thanh Xuan, Hanoi, Vietnam",
    emailMe: "Email Me",
    github: "GitHub",
    facebook: "Facebook",
    availabilityText:
      "3rd Year Computer Science Student • Available for internships and full-time opportunities • Open to remote work or relocation",

    // Footer
    footerText: "Backend Engineer • Computer Science Student at UET-VNU",
    allRightsReserved: "All rights reserved.",

    // Buttons
    liveDemo: "Live Demo",
    downloadCV: "Download CV",
  },
  vi: {
    // Navigation
    about: "Giới thiệu",
    skills: "Kỹ năng",
    experience: "Kinh nghiệm",
    projects: "Dự án",
    contact: "Liên hệ",
    resume: "Hồ sơ",

    // Hero Section
    backendEngineer: "Kỹ sư Backend",
    heroDescription:
      "Với nền tảng vững chắc về backend (Golang, PostgreSQL, Keycloak, GraphQL) và sự chủ động trong việc tìm hiểu hạ tầng (Docker, Kubernetes, CI/CD), tôi mong muốn phát triển sự nghiệp theo hướng Backend Engineer kết hợp DevOps. Mục tiêu của tôi là xây dựng các hệ thống dịch vụ có kiến trúc rõ ràng, vận hành hiệu quả và dễ mở rộng trong môi trường production thực tế.",
    getInTouch: "Liên hệ",
    viewGithub: "Xem GitHub",

    // Education Section
    education: "Học vấn",
    certificationsSkills: "Chứng chỉ & Kỹ năng",
    bachelorCS: "Cử nhân Khoa học Máy tính",
    university: "Trường Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    gpa: "GPA: 3.53/4.0",
    excellentStudent: "Sinh viên giỏi",
    labResearch: "• Tham gia nghiên cứu tại lab công nghệ phần mềm",
    codingCompetitions: "• Tham gia các hoạt động, cuộc thi Coding do trường tổ chức",
    officeCert: "Chứng chỉ tin học văn phòng",
    softSkillsCert: "Chứng chỉ hoàn thành kĩ năng mềm",
    softSkillsTitle: "Kĩ năng mềm:",
    teamworkSkills: "• Kĩ năng làm việc nhóm và lập kế hoạch cho một dự án",
    officeSkills: "• Kĩ năng sử dụng tin học văn phòng: Word, Excel, PowerPoint",

    // Skills Section
    technicalSkills: "Kỹ năng kỹ thuật",
    skillsDescription: "Công nghệ và kỹ năng tôi sử dụng để xây dựng hệ thống backend",
    coreLanguages: "Ngôn ngữ lập trình cơ bản",
    backendDev: "Phát triển Backend",
    databaseStorage: "Cơ sở dữ liệu & Lưu trữ",
    devopsDeployment: "DevOps & Triển khai",
    frontendDev: "Phát triển Frontend",
    mobileAI: "Mobile & AI",

    // Experience Section
    workExperience: "Kinh nghiệm làm việc",
    fullstackIntern: "Thực tập sinh Fullstack",
    mobifoneCompany: "Trung tâm Dịch vụ số Mobifone - Chi nhánh tổng công ty viễn thông Mobifone",
    digitalSchoolProject: "Dự án: Nền tảng Trường học số",
    labResearchActivities: "Hoạt động nghiên cứu tại Lab",
    labResearchDesc: "Hoàn thành các khóa học FE, BE và AI cơ bản",

    // Experience Details
    exp1: "• Phát triển hệ thống Backend sử dụng Golang, áp dụng Clean Architecture để đảm bảo khả năng mở rộng và dễ bảo trì",
    exp2: "• Thiết kế và làm việc trực tiếp với cơ sở dữ liệu PostgreSQL, sử dụng SQLC để sinh code truy vấn type-safe tự động",
    exp3: "• Triển khai hệ thống phân quyền và xác thực OAuth2 với Keycloak, tích hợp với Hasura GraphQL Engine thông qua JWT custom claims",
    exp4: "• Thiết kế và phát triển các API GraphQL phục vụ Frontend và mobile apps",
    exp5: "• Viết và quản lý các migration, tối ưu hóa truy vấn và cấu trúc bảng để đảm bảo hiệu suất hệ thống",
    exp6: "• Thử nghiệm triển khai, kiểm thử và theo dõi dịch vụ trên môi trường Kubernetes, sử dụng Docker để container hóa ứng dụng",
    exp7: "• Xây dựng SDK Chatbox cho nền tảng học tập (MOOCAI của công ty), tách riêng thành Web Component độc lập có thể sử dụng linh hoạt trên mọi framework (Vue, React, HTML thuần...)",

    // Lab Research Details
    lab1: "• Ôn tập lại các kiến thức nền tảng của web: HTML, CSS, Javascript",
    lab2: "• Tìm hiểu về cách thức xây dựng Backend",
    lab3: "• Tìm hiểu các framework Frontend và Backend thường được sử dụng",
    lab4: "• Các kiến thức nền tảng về Machine Learning và Deep Learning",

    // Projects Section
    personalProjects: "Dự án cá nhân",
    projectsDescription: "Các dự án tôi đã phát triển trong quá trình học tập thể hiện kỹ năng kỹ thuật",
    qairlineTitle: "QAirline - Hệ thống đặt vé máy bay",
    qairlineDesc: "Bài tập lớn Web - 3 thành viên",
    listenVisionTitle: "ListenVision - Ứng dụng hỗ trợ người khuyết tật",
    listenVisionDesc: "Bài tập lớn Web - 4 thành viên",
    cosmeaTitle: "Cosmea - Ứng dụng di động",
    cosmeaDesc: "Bài tập lớn Mobile - 5 thành viên",

    // Project Details
    qairline1: "• Thu thập yêu cầu, thiết kế chức năng và giao diện người dùng cho ứng dụng web",
    qairline2: "• Phát triển logic và UI cho giao diện khách hàng và quản trị viên",
    qairline3: "• Tham gia phát triển backend và cơ sở dữ liệu: Xây dựng API chuyến bay và vé",

    listenvision1: "• Phát triển logic và UI cho các thành phần giao diện người dùng",
    listenvision2: "• Nghiên cứu và triển khai hệ thống AI chuyển đổi lệnh giọng nói thành tương tác website",
    listenvision3: "• Tạo các tính năng hỗ trợ cho người khuyết tật",

    cosmea1: "• Phát triển logic và UI cho đăng nhập, đăng ký và tính năng hồ sơ người dùng",
    cosmea2: "• Triển khai chức năng tải ảnh lên với tích hợp cơ sở dữ liệu",
    cosmea3: "• Tạo hệ thống kiểm duyệt nội dung với làm mờ ảnh tự động cho nội dung không phù hợp",

    // Project Roles
    coderDesigner: "LẬP TRÌNH VIÊN + THIẾT KẾ",
    teamLeaderCoder: "TRƯỞNG NHÓM + LẬP TRÌNH VIÊN",
    mobileDeveloper: "PHÁT TRIỂN MOBILE",

    // Contact Section
    letsConnect: "Kết nối với tôi",
    contactDescription:
      "Tôi luôn sẵn sàng thảo luận về các cơ hội mới, dự án thú vị hoặc chỉ đơn giản là trò chuyện về kỹ thuật backend và kiến trúc hệ thống. Hãy liên hệ với tôi!",
    phone: "Điện thoại",
    email: "Email",
    location: "Địa chỉ",
    locationAddress: "Ngõ 470, P.Nguyễn Trãi, Thanh Xuân Trung, Thanh Xuân, Hà Nội",
    emailMe: "Gửi Email",
    github: "GitHub",
    facebook: "Facebook",
    availabilityText:
      "Sinh viên năm 3 Khoa học Máy tính • Sẵn sàng cho thực tập và cơ hội toàn thời gian • Có thể làm việc từ xa hoặc chuyển đổi địa điểm",

    // Footer
    footerText: "Kỹ sư Backend • Sinh viên Khoa học Máy tính tại UET-VNU",
    allRightsReserved: "Tất cả quyền được bảo lưu.",

    // Buttons
    liveDemo: "Demo trực tiếp",
    downloadCV: "Tải CV",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
