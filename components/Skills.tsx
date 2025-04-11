"use client"

import { useState, useEffect, useRef } from 'react';
import { 
  Code2Icon, 
  LayoutIcon, 
  ServerIcon, 
  WrenchIcon,
  GithubIcon, 
  TypeIcon,
  FramerIcon,
  BoxIcon,
  LayoutDashboardIcon,
  BrushIcon,
  GitBranchIcon,
  PaintbrushIcon,
  DatabaseIcon,
  ServerCogIcon,
  FileCodeIcon,
  TestTubeIcon
} from 'lucide-react';

// Define interfaces for our data types
interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

interface ParticleProps {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
}

export default function Skills() {
  // Animation state for continuous animations
  const [animateIndex, setAnimateIndex] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  
  // Pre-defined particle positions to avoid hydration mismatch
  const particles: ParticleProps[] = [
    { top: "20%", left: "10%", animationDuration: "5s", animationDelay: "0s" },
    { top: "30%", left: "70%", animationDuration: "6s", animationDelay: "0.5s" },
    { top: "65%", left: "30%", animationDuration: "7s", animationDelay: "1s" },
    { top: "50%", left: "80%", animationDuration: "8s", animationDelay: "1.5s" },
    { top: "80%", left: "15%", animationDuration: "9s", animationDelay: "2s" },
    { top: "40%", left: "50%", animationDuration: "10s", animationDelay: "2.5s" },
  ];
  
  // Define your skills with icons
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <LayoutIcon className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "JavaScript", icon: <FileCodeIcon className="w-4 h-4" /> },
        { name: "TypeScript", icon: <TypeIcon className="w-4 h-4" /> },
        { name: "React", icon: <FramerIcon className="w-4 h-4" /> },
        { name: "Next.js", icon: <BoxIcon className="w-4 h-4" /> },
        { name: "HTML5", icon: <Code2Icon className="w-4 h-4" /> },
        { name: "CSS3", icon: <PaintbrushIcon className="w-4 h-4" /> }
      ]
    },
    {
      name: "Styling",
      icon: <BrushIcon className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Tailwind CSS", icon: <LayoutDashboardIcon className="w-4 h-4" /> },
        { name: "Styled Components", icon: <PaintbrushIcon className="w-4 h-4" /> },
        { name: "SASS/SCSS", icon: <BrushIcon className="w-4 h-4" /> },
        { name: "Material UI", icon: <LayoutIcon className="w-4 h-4" /> }
      ]
    },
    {
      name: "Backend",
      icon: <ServerIcon className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Node.js", icon: <ServerIcon className="w-4 h-4" /> },
        { name: "Express", icon: <ServerCogIcon className="w-4 h-4" /> },
        { name: "GraphQL", icon: <DatabaseIcon className="w-4 h-4" /> },
        { name: "REST API", icon: <ServerCogIcon className="w-4 h-4" /> },
        { name: "MongoDB", icon: <DatabaseIcon className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <DatabaseIcon className="w-4 h-4" /> }
      ]
    },
    {
      name: "Tools",
      icon: <WrenchIcon className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: <GitBranchIcon className="w-4 h-4" /> },
        { name: "GitHub", icon: <GithubIcon className="w-4 h-4" /> },
        { name: "VS Code", icon: <Code2Icon className="w-4 h-4" /> },
        { name: "Webpack", icon: <BoxIcon className="w-4 h-4" /> },
      ]
    }
  ];

  // Use useEffect to set up client-side state
  useEffect(() => {
    // Set isClient to true once component mounts on the client
    setIsClient(true);
    
    // Set up animation interval only on the client
    const interval = setInterval(() => {
      setAnimateIndex(prevIndex => (prevIndex + 1) % 12);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Function to determine if a skill should be animated
  const shouldAnimate = (categoryIndex: number, skillIndex: number): boolean => {
    if (!isClient) return false; // Don't animate during SSR
    return (categoryIndex * 10 + skillIndex) % 12 === animateIndex;
  };

  return (
    <section 
      id="skills" 
      className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-16 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-40 h-40 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Skills</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl p-6 border border-gray-100 dark:border-gray-700 overflow-hidden relative group"
            >
              {/* Category heading with gradient */}
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 
                    text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 
                    flex items-center space-x-2 transition-all duration-500 ${shouldAnimate(categoryIndex, skillIndex) ? 'scale-110 shadow-md' : ''}`}
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r opacity-5 dark:opacity-10 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-20 pointer-events-none">
              </div>
            </div>
          ))}
        </div>

        {/* Animated skill highlight section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-1 shadow-lg overflow-hidden">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white relative z-10 mb-4">Ready to collaborate?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">Let's create something amazing together</p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 
              text-white rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 
              transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium relative z-10"
            >
              Get in Touch
            </a>
            
            {/* Animated particles with predefined positions */}
            {isClient && (
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {particles.map((particle, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-blue-500/20 dark:bg-blue-400/20"
                    style={{
                      top: particle.top,
                      left: particle.left,
                      animation: `float ${particle.animationDuration} ease-in-out infinite`,
                      animationDelay: particle.animationDelay
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}