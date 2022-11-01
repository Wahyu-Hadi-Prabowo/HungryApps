/* eslint-disable indent */
class RestoDetail extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
      <h2>About Restaurant</h2>
      <div id="resto-detail" class="row"></div>
      <div id="likeButtonContainer"></div>
      `;
    }
  }

  customElements.define('restaurant-detail', RestoDetail);
