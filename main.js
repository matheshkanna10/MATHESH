document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 700);
  }

  const navToggles = document.querySelectorAll('.nav-toggle');
  navToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const header = toggle.closest('.site-header');
      if (!header) return;
      const nav = header.querySelector('.site-nav');
      nav?.classList.toggle('active');
    });
  });
});
