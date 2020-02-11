// Import lit-html functions
import {html, render} from 'lit-html';

const myHeaderTemplate = (name, time) => {
  return html`
    Header
  `;
}

const myBodyTemplate = (name, time) => {
  
  return html`
    ${time >= 0 && time <12
        ? html`Buenos días`
        : html`Buenas tardes`
    }
  `;
}

const myFooterTemplate = (name, time) => {
  return html`
    Footer
  `;
}



render(myHeaderTemplate('lit-html','24'), document.body.querySelector('header'));
render(myBodyTemplate('lit-html','12'), document.body.querySelector('.first'));
render(myBodyTemplate('lit-html','9'), document.body.querySelector('.second'));
render(myFooterTemplate('lit-html','33'), document.querySelector('footer'));

