import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend', icon: '🎨' },
    { name: 'JavaScript/TypeScript', level: 88, category: 'Language', icon: '📜' },
    { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢' },
    { name: 'MongoDB', level: 80, category: 'Database', icon: '🍃' },
    { name: 'PostgreSQL', level: 82, category: 'Database', icon: '🐘' },
    { name: 'Redis', level: 75, category: 'Database', icon: '🔴' },
    { name: 'Git', level: 87, category: 'Tools', icon: '📦' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          skills.forEach((skill, index) => {
            setTimeout(() => {
              let current = 0;
              const increment = skill.level / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= skill.level) {
                  setAnimatedLevels(prev => ({ ...prev, [skill.name]: skill.level }));
                  clearInterval(timer);
                } else {
                  setAnimatedLevels(prev => ({ ...prev, [skill.name]: Math.floor(current) }));
                }
              }, 20);
            }, index * 100);
          });
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-cyan-400">{skill.category}</span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-cyan-400">
                  {animatedLevels[skill.name] || 0}%
                </span>
              </div>

              <div className="relative w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-gray-400 text-lg">
            Always learning and expanding my toolkit with the latest technologies
          </p>
        </div>
      </div>
    </section>
  );
}
