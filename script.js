const projects = [
  {
    name: 'Authentication Mobile App',
    desc: 'Developed Android app for user authentication.',
    tech: ['Java', 'Android', 'SQLite'],
    url: 'https://github.com/ayarih/authentification'
  },
  {
    name: 'AES-Encryption Tool',
    desc: 'AES-256 encryption tool with GUI & CLI for secure file handling.',
    tech: ['Python', 'GTK', 'PyCryptodome'],
    url: 'https://github.com/ayarih/aes-encryption'
  },
  {
    name: 'Mind-Connect',
    desc: 'Quiz-based psychologist matching web app.',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'https://github.com/ayarih/Mind-connect'
  },
  {
    name: 'Car Rental',
    desc: 'Full-stack car rental app.',
    tech: ['JS', 'Full-stack'],
    url: 'https://github.com/ayarih/Car-rental'
  },
  {
    name: 'Open SWE',
    desc: 'Fork of an open coding agent.',
    tech: ['TypeScript', 'AI'],
    url: 'https://github.com/ayarih/open-swe'
  }
];

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'C/C++', 'PHP', 'React', 'Node.js',
  'MongoDB', 'PostgreSQL', 'Django', 'Figma', 'Git', 'Docker', 'Vercel', 'Postman', 'Platform IO',
  'n8n', 'Supabase', 'DBeaver', 'Expo Go', 'IntelliJ IDEA', 'PyCharm', 'Quartz', 'Arduino IDE',
  'Arduino Uno', 'ESP32', 'ESP8266', 'PIC', 'LoRa'
];

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p>`;

  const tagBox = document.createElement('div');
  tagBox.style.marginTop = '10px';

  p.tech.forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = t;
    tagBox.appendChild(tag);
  });

  card.appendChild(tagBox);

  const link = document.createElement('a');
  link.href = p.url;
  link.target = '_blank';
  link.textContent = 'Repo ↗';
  link.style.display = 'block';
  link.style.marginTop = '12px';
  link.style.color = 'var(--accent)';

  card.appendChild(link);
  projectsGrid.appendChild(card);
});

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(s => {
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = s;
  skillsGrid.appendChild(tag);
});

document.getElementById('year').textContent = new Date().getFullYear();
