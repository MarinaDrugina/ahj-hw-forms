export default class Popuper {
  constructor() {
    this.chargePopUp();
  }

  chargePopUp() {
    const button = document.querySelector('.widget-button');
    button.addEventListener('click', () => {
      const hint = document.createElement('div');
      hint.className = 'widget-hint';

      const hintHeader = document.createElement('header');
      hintHeader.className = 'widget-hint-header';
      hintHeader.textContent = 'Popover title';
      hint.append(hintHeader);

      const hintContent = document.createElement('p');
      hintContent.className = 'widget-hint-content';
      hintContent.textContent = "And here's some amazing content. It's very engaging. Right?";
      hint.append(hintContent);

      document.body.appendChild(hint);
      const { top, left } = button.getBoundingClientRect();
      hint.style.top = `${window.scrollY + top - hint.clientHeight}px`;
      hint.style.left = `${window.scrollX + left - (hint.clientWidth - button.clientWidth) / 2}px`;
      setTimeout(() => {
        hint.remove();
      }, 1500);
    });
  }
}
