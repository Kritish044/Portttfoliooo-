import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard. Features include user authentication, product search, and order tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with WebSocket integration, featuring group chats, file sharing, typing indicators, and message encryption for secure communications.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with drag-and-drop interface, real-time updates, team collaboration features, and advanced analytics dashboard.',
      technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-cyan-400 rounded-full border border-slate-600 group-hover:border-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
