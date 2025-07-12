// Определение разрешения устройства
function showResolution() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById('resolution').textContent =
    `Разрешение экрана: ${width} x ${height}px`;
}

// Авторасширение textarea
function autoGrowTextarea() {
  const textarea = document.querySelector('.editor-body');
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });
}

// Плавное появление контента
window.addEventListener('load', () => {
  showResolution();
  autoGrowTextarea();

  const content = document.querySelector('.content');
  setTimeout(() => {
    content.classList.add('show');
  }, 1000);
});
