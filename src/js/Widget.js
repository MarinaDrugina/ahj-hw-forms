export default class Widget {
  constructor() {
    this.createWindow();
  }

  createWindow() {
    const body = document.querySelector('body');
    const widgetWindow = document.createElement('div');
    widgetWindow.className = 'widget-window';
    body.append(widgetWindow);

    const widgetCardInputButton = document.createElement('button');
    widgetCardInputButton.className = 'widget-button';
    widgetCardInputButton.textContent = 'Click to toggle popOver';
    widgetWindow.append(widgetCardInputButton);
  }
}
