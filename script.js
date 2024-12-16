document.addEventListener('DOMContentLoaded', () => {
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

  document.addEventListener('click', (event) => {
    const el = event.target;
    if (el.hasAttribute('title')) {
      const v = el.getAttribute('title');
      el.setAttribute('data-title', v);
      el.removeAttribute('title');
    }

    if (el.hasAttribute('data-title')) {
      const t = el.getAttribute('data-title');
      const x = event.pageX;
      const y = event.pageY + 10;
      var a = x + 'px';
      var b = y + 'px';
      tooltip.style.left = a;
      tooltip.style.top = b;
      tooltip.innerHTML = t;
      tooltip.style.display = 'block';
    }

    else {
      tooltip.style.display = 'none';
    }
  });
});
