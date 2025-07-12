// Плавное появление основного контента после загрузки
window.addEventListener('load', () => {
  const content = document.querySelector('.content');
  content.classList.remove('hidden');

  // Задержка для плавного появления
  setTimeout(() => {
    content.classList.add('show');
  }, 1000);

  // Определяем разрешение экрана
  const resText = `Ширина: ${window.innerWidth}px, Высота: ${window.innerHeight}px`;
  document.getElementById('resolution').textContent = resText;
});
