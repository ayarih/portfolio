// ---------------- Projects ----------------
const projects = [
  {name:'Authentication Mobile App',desc:'Developed Android app for user authentication.',tech:['Java','Android','SQLite'],url:'https://github.com/ayarih/authentification'},
  {name:'AES-Encryption Tool',desc:'AES-256 encryption tool with GUI & CLI for secure file handling.',tech:['Python','GTK','PyCryptodome'],url:'https://github.com/ayarih/aes-encryption'},
  {name:'Mind-Connect',desc:'Quiz-based psychologist matching web app.',tech:['HTML','CSS','JS'],url:'https://github.com/ayarih/Mind-connect'},
  {name:'Car Rental',desc:'Full-stack car rental app.',tech:['JS','Full-stack'],url:'https://github.com/ayarih/Car-rental'},
  {name:'Open SWE',desc:'Fork of an open coding agent.',tech:['TypeScript','AI'],url:'https://github.com/ayarih/open-swe'}
];

const skills = [
  'JavaScript','TypeScript','Python','Java','SQL','C/C++','PHP','React',
  'Node.js','MongoDB','PostgreSQL','Django','Figma','Git','Docker','Vercel',
  'Postman','Platform IO','n8n','Supabase','DBeaver','Expo Go','IntelliJ IDEA','PyCharm',
  'Quartz','Arduino IDE','Arduino Uno','ESP32','ESP8266','PIC','LoRa'
];

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((p,i)=>{
  const card = document.createElement('article');
  card.className='project';
  card.innerHTML=`<h3>${p.name}</h3><p>${p.desc}</p>`;
  const tags = document.createElement('div'); tags.className='tags';
  p.tech.forEach(t=>{const s=document.createElement('span');s.className='tag';s.textContent=t;tags.appendChild(s)});
  card.appendChild(tags);
  const a=document.createElement('a');a.href=p.url;a.target='_blank';a.textContent='Repo ↗';
  card.appendChild(a);
  card.style.transitionDelay=(i*80)+'ms';
  projectsGrid.appendChild(card);
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)-r.width/2;
    const y=(e.clientY-r.top)-r.height/2;
    card.style.transform=`perspective(800px) rotateX(${-y/20}deg) rotateY(${x/20}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave',()=>{card.style.transform='translateY(0)'});
});

// ---------------- Skills ----------------
const skillsGrid=document.getElementById('skillsGrid');
skills.forEach(s=>{const el=document.createElement('div');el.className='skill';el.textContent=s;skillsGrid.appendChild(el)});

// ---------------- Reveal on scroll ----------------
const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:0.12}});
reveals.forEach(r=>io.observe(r));

// ---------------- Current year ----------------
document.getElementById('year').textContent=new Date().getFullYear();

// ---------------- Floating orbs ----------------
const orbOne=document.querySelector('.orb.one');
const orbTwo=document.querySelector('.orb.two');
let t=0;
function floatOrbs(){
  t+=0.01;
  orbOne.style.transform=`translate(${Math.sin(t)*8}px, ${Math.cos(t/1.3)*6}px)`;
  orbTwo.style.transform=`translate(${Math.cos(t/1.7)*6}px, ${Math.sin(t/1.1)*10}px)`;
  requestAnimationFrame(floatOrbs);
}
floatOrbs();
