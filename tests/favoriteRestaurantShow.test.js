/* eslint-disable no-new */
/* eslint-disable no-undef */
import FavoriteRestaurantShowView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-present';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantShowView();
    document.body.innerHTML = view.getTemplate();
  };
  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should render the information that no restaurants have been liked', () => {
      const favoriteRestaurant = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });

      expect(favoriteRestaurant.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurant = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });

      expect(favoriteRestaurant.getAllRestaurant).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite restaurants exist', () => {
    // it('should show the restaurants', (done) => {
    //   document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
    //     expect(document.querySelectorAll('.restaurant-list').length).toEqual(2);

    //     done();
    //   });

    //   const favoriteRestaurant = {
    //     getAllRestaurant: jest.fn().mockImplementation(() => [
    //       {
    //         id: 11,
    //         name: 'A',
    //         rating: 3,
    //         description: 'Sebuah restaurant A',
    //       },
    //       {
    //         id: 22,
    //         name: 'B',
    //         rating: 4,
    //         description: 'Sebuah restaurant B',
    //       },
    //     ]),
    //   };

    //   new FavoriteRestaurantShowPresenter({
    //     view,
    //     favoriteRestaurant,
    //   })._displayRestaurants();
    // });
  });
});
