// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Rolling hero word
const words = ['Embedded Systems', 'IoT', 'VLSI', 'Verilog'];
let wi = 0;
const rollEl = document.getElementById('rollWord');
if (rollEl) {
  setInterval(() => {
    wi = (wi + 1) % words.length;
    rollEl.style.opacity = 0;
    setTimeout(() => {
      rollEl.textContent = words[wi];
      rollEl.style.opacity = 1;
    }, 250);
  }, 2600);
  rollEl.style.transition = 'opacity .25s ease';
}

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.about-grid, .capability-card, .case-item, .journey-item, .contact-split'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => io.observe(el));

// Skill bar fill on view (kept for compatibility if skills section re-added)
document.querySelectorAll('.skill-chip').forEach(chip => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { chip.classList.add('in'); obs.unobserve(chip); } });
  }, { threshold: 0.3 });
  obs.observe(chip);
});

// Contact form -> mailto
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
});