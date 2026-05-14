const fs = require('fs');
const path = require('path');
const config = require('./src/data/config.json');

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const colors = ['#d4af37', '#1b263b', '#25D366', '#e0e1dd', '#9ca3af'];
let cIdx = 0;

function createSvg(name, domain) {
  const initial = name.charAt(0).toUpperCase();
  const bg = colors[cIdx % colors.length];
  cIdx++;
  const color = bg === '#e0e1dd' ? '#000' : '#fff';
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="${bg}" rx="20" ry="20" />
    <text x="50" y="65" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="${color}" text-anchor="middle">${initial}</text>
  </svg>`;
  
  fs.writeFileSync(path.join(dir, domain + '.svg'), svg);
}

config.companies.itAndConsulting.forEach(c => createSvg(c.name, c.domain));
config.companies.healthcareAndPharma.forEach(c => createSvg(c.name, c.domain));

console.log("Logos generated successfully.");
