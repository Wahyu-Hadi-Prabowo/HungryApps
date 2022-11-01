/* eslint-disable indent */
/* eslint-disable eol-last */
class RestoFavorite extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
      <h2>Liked Restaurant</h2>
      <div id="resto-list" class="row resto-list"></div>
      `;
    }
  }

  customElements.define('restaurant-favorite', RestoFavorite);