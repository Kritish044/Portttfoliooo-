import { useEffect, useRef, useState } from 'react';
import { Code2, GraduationCap, Rocket } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="mb-4 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Code2 size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">Full-Stack Developer</h3>
            <p className="text-gray-400 leading-relaxed">
              Experienced in building responsive, scalable web applications using modern frameworks and technologies.
              Specialized in creating seamless user experiences with clean, maintainable code.
            </p>
          </div>

          <div
            className={`group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-4 w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-400">CS Student</h3>
            <p className="text-gray-400 leading-relaxed">
              Currently pursuing a Bachelor's degree in Computer Science. Constantly learning and applying
              cutting-edge technologies while building a strong foundation in algorithms and software engineering.
            </p>
          </div>

          <div
            className={`group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="mb-4 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Rocket size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-400">Problem Solver</h3>
            <p className="text-gray-400 leading-relaxed">
              Driven by challenges and passionate about turning complex problems into elegant solutions.
              Always eager to learn new technologies and push the boundaries of what's possible.
            </p>
          </div>
        </div>

        <div
          className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-10 rounded-2xl border border-slate-700 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            As a dedicated web developer and computer science student, I combine academic knowledge with practical
            experience to create impactful digital solutions. My journey in software development began with a
            curiosity for how things work and evolved into a passion for building innovative applications.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in the MERN stack and modern web technologies, focusing on writing clean, efficient code
            that solves real-world problems. Whether it's designing intuitive user interfaces or architecting robust
            backend systems, I thrive on bringing ideas to life through code.
          </p>
        </div>
      </div>
    </section>
  );
}
