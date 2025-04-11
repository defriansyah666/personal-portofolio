export default function Education() {
    const education = [
        {
            school: "Islamic University of Riau",
            degree: "Bachelor of Computer Engineering",
            period: "2020 - 2024",
            description: "Focused on software development, web technologies, and system analysis throughout the program. Developed several academic projects involving front-end and back-end integration. Graduated with a strong foundation in both theoretical and practical aspects of computer engineering.",
            courses: ["Web Development", "Software Engineering", "Database Systems", "Human-Computer Interaction", "Computer Networks"]
          },
          {
            school: "Google Developer Academy",
            degree: "Front-End Developer Certificate",
            period: "2023",
            description:
              "Completed a professional certificate program specializing in modern front-end development using HTML, CSS, and JavaScript. Gained hands-on experience with responsive design, accessibility, and interactive user interfaces through real-world projects and challenges.",
            courses: [
              "HTML & CSS",
              "Responsive Web Design",
              "JavaScript Essentials",
              "Web Accessibility",
              "UI/UX Principles",
            ],
          },
          {
            school: "Cisco Networking Academy",
            degree: "Certificate in IT Essentials",
            period: "2022",
            description:
              "Earned a Cisco certification focused on foundational IT knowledge, including computer hardware, software, networking concepts, and basic security.",
            courses: [
              "Computer Hardware Fundamentals",
              "Operating Systems",
              "Networking Basics",
              "Cybersecurity Essentials",
              "Troubleshooting Techniques",
            ],
          },
          {
            school: "Dicoding Indonesia",
            degree: "Expert Front-End Developer Certificate",
            period: "2024",
            description:
              "Completed the expert-level front-end development certification program, mastering advanced techniques in JavaScript, modern web architecture, performance optimization, and scalable UI development using best practices.",
            courses: [
              "Fundamental Front-End Web Development",
              "Advanced JavaScript Programming",
              "Web Performance Optimization",
              "PWA (Progressive Web App) Development",
              "Clean Code & Scalable UI Architecture",
            ],
          },     
    ];
  
    return (
      <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 inline-block mb-2">
              Education
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic background and qualifications
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-xl"></div>
                
                <div className="flex justify-between items-start mb-4 relative">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {edu.school}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full">
                    {edu.period}
                  </span>
                </div>
                
                <p className="mt-4 text-gray-600 dark:text-gray-300 mb-4 relative">
                  {edu.description}
                </p>
                
                {edu.courses && (
                  <div className="mt-5 relative">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-2">
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Decorative icon */}
                <div className="absolute bottom-4 right-4 opacity-10 dark:opacity-5">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm9.3 0A9.026 9.026 0 0115 14.128a1 1 0 01-.89.89 8.968 8.968 0 00-5.35-2.4V6.187l3.85 1.647a1 1 0 11-.787 1.838l-3.063-1.31v4.873z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }