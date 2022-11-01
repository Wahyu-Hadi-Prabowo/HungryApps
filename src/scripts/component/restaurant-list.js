/* eslint-disable indent */
class RestoList extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
      <h2>Value to Visit</h2>
      <div id="resto-list" class="row"></div>
      `;
    }
  }

  customElements.define('restaurant-list', RestoList);
