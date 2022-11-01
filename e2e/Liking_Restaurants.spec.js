/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#resto-list');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
  I.amOnPage('/');

  I.waitForElement('#resto-item', 5);
  I.seeElement('#resto-title a');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#resto-item');

  const favoritedRestoTitle = await I.grabTextFrom('#resto-title');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
  I.amOnPage('/');
  I.waitForElement('#resto-item', 5);
  I.seeElement('#resto-title a');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#resto-item a');

  const firstRestolike = locate('#resto-title a').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
  I.click(firstRestolike);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.wait(5);
  I.seeElement('#resto-item__not__found');
  const onFav = await I.grabTextFrom('#resto-item__not__found');
  assert.strictEqual(onFav, 'Tidak ada restaurant untuk ditampilkan');
});

Scenario('searching restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#resto-title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('#resto-title a').at(i));
    I.wait(3);
    I.seeElement('#likeButton');
    I.wait(3);
    I.click('#likeButton');
    I.wait(3);
    titles.push(await I.grabTextFrom('#resto-title'));
    I.amOnPage('/');
  }

  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurant = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleFavoritedRestaurants = await I.grabNumberOfVisibleElements('#resto-item');
  assert.strictEqual(matchingRestaurant.length, visibleFavoritedRestaurants);

  matchingRestaurant.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('#resto-title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
