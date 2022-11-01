/* eslint-disable eol-last */
/* eslint-disable indent */
class RestoReview extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
      <h2>Reviews</h2>
      <div id="resto-review"></div>
      `;
    }
  }

  customElements.define('restaurant-review', RestoReview);