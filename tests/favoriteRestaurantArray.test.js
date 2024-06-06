import { itActAsFavRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini tidak terdaftar dalam list favorite Restaurants
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    const index = favoriteRestaurant.findIndex((restaurant) => restaurant.id === id);
    if (index !== -1) {
      favoriteRestaurant.splice(index, 1);
    }
  },
};

describe('FavRestaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });

  itActAsFavRestaurantModel(FavoriteRestaurantArray);
});
