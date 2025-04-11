"use client"

import { useState, useEffect } from 'react';
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { JSX } from 'react/jsx-runtime';

// Define TypeScript interfaces for the project data
interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string | null;
  image: string;
  stars: number;
  language: string | null;
}

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
}

interface ReadmeResponse {
  content: string;
}

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const username: string = "defriansyah666"; // Replace with your GitHub username
  
  useEffect(() => {
    const fetchProjects = async (): Promise<void> => {
      try {
        setLoading(true);
        // Fetch repositories from GitHub
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const repos: GithubRepo[] = await response.json();
        
        // Process each repository to extract README image
        const projectsWithDetails = await Promise.all(repos.map(async (repo): Promise<Project> => {
          // Try to fetch the README content
          const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`);
          
          let imageUrl: string = "/api/placeholder/400/250"; // Default placeholder
          
          if (readmeResponse.ok) {
            const readmeData: ReadmeResponse = await readmeResponse.json();
            const readmeContent: string = atob(readmeData.content);
            
            // Simple regex to find the first image in the README
            const imageMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);
            if (imageMatch && imageMatch[1]) {
              // If image is relative path, convert to full GitHub raw content URL
              if (!imageMatch[1].startsWith('http')) {
                imageUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/${imageMatch[1].replace(/^\//, '')}`;
              } else {
                imageUrl = imageMatch[1];
              }
            }
          }
          
          return {
            title: repo.name,
            description: repo.description || 'No description available',
            link: repo.html_url,
            demoLink: repo.homepage,
            image: imageUrl,
            stars: repo.stargazers_count,
            language: repo.language
          };
        }));
        
        setProjects(projectsWithDetails);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400 transition-colors duration-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 transition-colors duration-300">Error Loading Projects</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">{error}</p>
      </div>
    );
  }

  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Projects</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed">
            Explore my latest GitHub repositories and open-source contributions
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">No projects found</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 transition-colors duration-300"
              >
                <div className="flex-shrink-0 h-48 w-full relative overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                  {project.language && (
                    <span className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white text-xs px-2 py-1 rounded-md transition-colors duration-300">
                      {project.language}
                    </span>
                  )}
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    {project.stars > 0 && (
                      <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        <svg className="w-4 h-4 mr-1 text-yellow-400 dark:text-yellow-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{project.stars} stars</span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 transform hover:-translate-y-0.5"
                    >
                      <GitHubLogoIcon className="mr-2 h-4 w-4" />
                      View Repo
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition duration-300 transform hover:-translate-y-0.5"
                      >
                        <ExternalLinkIcon className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 flex justify-center">
          <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
          >
            <GitHubLogoIcon className="inline-block mr-2 h-5 w-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}