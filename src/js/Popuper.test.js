/**
 * @jest-environment jsdom
 */

 import Widget from './Widget';
 import Popuper from './Popuper';

 test('whether class can actually show popup', () => {
   new Widget();
   new Popuper();
   
   setTimeout(()=>{
    let button = document.querySelector(`.widget-button`);
    let event = new Event("click");
    button.dispatchEvent(event);
    const hintContent = document.querySelector('.widget-hint-content');
    expect(hintContent.textContent).toBe("And here's some amazing content. It's very engaging. Right?");
    }, 1000);
 });
 