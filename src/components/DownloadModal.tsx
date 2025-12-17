import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { downloadJSON, downloadText, downloadCSV, generatePortfolioData } from '../utils/downloadUtils';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadJSON = async () => {
    setDownloading(true);
    const data = generatePortfolioData();
    downloadJSON(data, 'portfolio-data.json');
    setTimeout(() => setDownloading(false), 1000);
  };

  const handleDownloadCSV = async () => {
    setDownloading(true);
    const data = generatePortfolioData();
    downloadCSV(data.skills, 'skills.csv');
    setTimeout(() => setDownloading(false), 1000);
  };

  const handleDownloadMarkdown = async () => {
    setDownloading(true);
    const data = generatePortfolioData();
    const markdown = `# ${data.name}

## ${data.title}

**Email:** ${data.email}
**Phone:** ${data.phone}
**Location:** ${data.location}

### Skills

${data.skills.map(skill => `- **${skill.name}** (${skill.category}) - ${skill.level}%`).join('\n')}

### Projects

${data.projects.map(project => `
#### ${project.title}
${project.description}

**Tech Stack:** ${project.technologies.join(', ')}
`).join('\n')}

---
*Generated from Portfolio Website*
`;
    downloadText(markdown, 'resume.md');
    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Download Options</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleDownloadJSON}
            disabled={downloading}
            className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Download size={20} />
            {downloading ? 'Downloading...' : 'Portfolio Data (JSON)'}
          </button>

          <button
            onClick={handleDownloadCSV}
            disabled={downloading}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Download size={20} />
            {downloading ? 'Downloading...' : 'Skills (CSV)'}
          </button>

          <button
            onClick={handleDownloadMarkdown}
            disabled={downloading}
            className="w-full px-4 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Download size={20} />
            {downloading ? 'Downloading...' : 'Resume (Markdown)'}
          </button>

          <button
            onClick={onClose}
            className="w-full px-4 py-3 border-2 border-slate-600 text-gray-300 font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-700 transition-all duration-300"
          >
            Close
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Download your portfolio data in multiple formats for easy sharing and editing.
        </p>
      </div>
    </div>
  );
}
