import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter, Download } from 'lucide-react';
import DownloadModal from './DownloadModal';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Web Developer & CS Student';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kritish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPortfolio = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 inline-block animate-fade-in">
          <span className="text-cyan-400 text-lg font-mono">Hello I'm </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Kritish
          </span>
        </h1>

        <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-12 font-mono">
          {displayText}
          <span className={`inline-block w-0.5 h-8 bg-cyan-400 ml-1 ${isTypingComplete ? 'animate-blink' : ''}`}></span>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
          Crafting elegant solutions with modern technologies. Passionate about building scalable web applications
          and exploring the endless possibilities of full-stack development.
        </p>

        <div className="flex justify-center gap-4 mb-12 animate-fade-in-delay">
          <button
            onClick={downloadResume}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download Resume
          </button>
          <button
            onClick={downloadPortfolio}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download Files
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-12 animate-fade-in-delay-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-cyan-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-cyan-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-cyan-400"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-cyan-400"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce-slow"
        >
          <ChevronDown size={40} className="text-cyan-400 hover:text-cyan-300 transition-colors" />
        </button>
      </div>
    </section>
    </>
  );
}
