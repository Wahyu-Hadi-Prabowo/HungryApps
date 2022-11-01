/* eslint-disable eol-last */
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="item" id="resto-item">
      <div class="card">
          <div class="card-img">
              <img class="lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}">
          </div>
          <div class="card-body">
              <h3 class="card-title" id="resto-title">
                  <a href="./#/detail/${resto.id}" title="Link ke halaman detail makanan">${resto.name}</a>
              </h3>
              <p class="card-text">${resto.description}</p>
          </div>
      </div>
  </div>
`;

const createSkeletonRestoTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="item">
        <div class="card">
          <img class="card-img" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">
        </div>
        <div class="card-title">
          <h3 class="skeleton">Lorem ipsum dolor sit.</a></h3>
          <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </div>
    `;
  }
  return template;
};

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
    <h1 class="title" id="resto-title">
      ${resto.name}
    </h1>
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>City</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Address</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
        </li>
        <li>
          <h3>Drinks Menu</h3>
            <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${resto.description}</p>
    </div>

  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="header-review">
    <p class="name-review">${reviews.name}</p>
    <p class="date-review">${reviews.date}</p>
  </div>
  <div class="body-review">
${reviews.review}
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonRestoTemplate,
};