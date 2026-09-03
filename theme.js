(function () {
  var savedTheme = localStorage.getItem('theme');
  var theme = savedTheme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);

  function updateToggle(button) {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    button.setAttribute('aria-pressed', String(!isDark));
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    button.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    button.querySelector('.theme-icon').textContent = isDark ? '☾' : '☀';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;

    updateToggle(button);

    button.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggle(button);
    });
  });
})();
