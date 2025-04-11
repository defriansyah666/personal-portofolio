export default function Experience() {
    const experiences = [
      {
        company: "Central Statistics Agency of Riau Province",
        role: "Frontend Developer",
        period: "2022 - 2023",
        description: "Led the development of the company's flagship web application, improving performance metrics by 40%. Implemented modern React patterns and mentored junior developers.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        company: "Population and Civil Registration Service of Siak Regency",
        role: "UI Designer",
        period: "2021 - 2022",
        description: "Designed and implemented user-friendly web interfaces to support public service accessibility. Contributed to the modernization of internal administrative systems by creating intuitive layouts and ensuring consistency with government design standards. Worked closely with the development team to translate user needs into effective digital experiences.",
        skills: ["UI Design", "Figma", "Adobe XD", "Design System", "Responsive Design", "HTML", "CSS", "Basic JavaScript"]
      },
    ];
  
    return (
      <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 inline-block mb-2">
              Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and contributions
            </p>
          </div>
  
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500"></div>
  
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-lg border-4 border-white dark:border-gray-800"></div>
                  
                  {/* Experience card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full inline-flex items-center">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      {exp.skills && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }