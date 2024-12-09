document.addEventListener('DOMContentLoaded', () => {
  // Создаем элемент подсказки
  const tooltip = document.createElement('div');
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = '#f5f5f5';
  tooltip.style.color = '#000';
  tooltip.style.padding = '5px';
  tooltip.style.border = '1px solid #111';
  tooltip.style.fontSize = '3rem';
  tooltip.style.whiteSpace = 'pre-wrap';
  tooltip.style.fontFamily = 'Verdana';
  tooltip.style.textAlign = 'left';
  tooltip.style.zIndex = '1000';
  tooltip.style.display = 'none';

  document.body.appendChild(tooltip);
  
  let activeElement = null;

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.hasAttribute('title')) {
      const title = target.getAttribute('title');
      target.removeAttribute('title');

      tooltip.textContent = title;
      tooltip.style.display = 'block';

	const x = event.pageX;
	const y = event.pageY +10;
	var a = x + "px";
	var b = y + "px";
      tooltip.style.left = a;
      tooltip.style.top = b;

      activeElement = target;
    } else {
      tooltip.style.display = 'none';

      if (activeElement) {
        activeElement.setAttribute('title', tooltip.textContent);
        activeElement = null;
      }
    }
  });
});
