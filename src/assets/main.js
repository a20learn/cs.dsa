// Theme Toggle Logic
const btn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
btn.textContent = currentTheme === 'dark' ? 'use light theme' : 'use dark theme';

btn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  let newTheme = theme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  btn.textContent = newTheme === 'dark' ? 'use light theme' : 'use dark theme';
});

// Smart Category-Aware Filter Logic
const searchInput = document.getElementById('searchInput');
const sections = document.querySelectorAll('.category-section');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();

  sections.forEach(section => {
    const headingText = section.querySelector('h2').textContent.toLowerCase();
    const guideItems = section.querySelectorAll('.guide-item');
    let matchesInCategory = 0;

    guideItems.forEach(item => {
      const title = item.querySelector('.guide-title').textContent.toLowerCase();
      const desc = item.querySelector('.guide-desc').textContent.toLowerCase();

      if (headingText.includes(query) || title.includes(query) || desc.includes(query)) {
        item.style.display = 'block';
        matchesInCategory++;
      } else {
        item.style.display = 'none';
      }
    });

    if (matchesInCategory > 0) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});
