export const downloadJSON = (data: Record<string, any>, filename: string) => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  downloadBlob(blob, filename);
};

export const downloadText = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/plain' });
  downloadBlob(blob, filename);
};

export const downloadCSV = (data: any[], filename: string) => {
  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(','),
    ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
  ].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  downloadBlob(blob, filename);
};

export const downloadBlob = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const generatePortfolioData = () => {
  return {
    name: 'Kritish Raj Chalise',
    title: 'Full-Stack Web Developer & CS Student',
    socials: {
      github: 'https://github.com/Kritish04',
    },
    skills: [
      { name: 'React', level: 90, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 80, category: 'Frontend' },
      { name: 'JavaScript/TypeScript', level: 80, category: 'Language' },
      { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'MongoDB', level: 80, category: 'Database' },
      { name: 'PostgreSQL', level: 85, category: 'Database' },
      { name: 'Redis', level: 70, category: 'Database' },
      { name: 'Git', level: 85, category: 'Tools' },
    ],
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory',
        technologies: ['React', 'Node.js', 'MongoDB', 'Redis'],
      },
      {
        title: 'Real-Time Chat Application',
        description: 'Modern chat app with WebSocket integration',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      },
      {
        title: 'Task Management System',
        description: 'Collaborative project management tool',
        technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      },
    ],
  };
};
