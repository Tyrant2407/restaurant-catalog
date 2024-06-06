import {
  beforeEach, describe, expect, it, jest,
} from '@jest/globals';
import { spyOn } from 'jest-mock';
import FavRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-present';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-view';

jest.mock('idb', () => ({
  openDB: jest.fn(),
}));

jest.mock('../src/scripts/data/favorite-restaurant-idb');

describe('Searching Restaurant', () => {
  let presenter;
  let favoriteRestaurant;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurant = {
      getAllRestaurant: jest.fn(),
      searchRestaurant: jest.fn(),
    };
    presenter = new FavRestaurantSearchPresenter({
      favoriteRestaurant,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      favoriteRestaurant.searchRestaurant.mockImplementation(() => []);

      searchRestaurant('restaurant a');

      expect(presenter.latestQuery).toEqual('restaurant a');
    });

    it('should ask the model to search for liked Restaurant', () => {
      favoriteRestaurant.searchRestaurant.mockImplementation(() => []);
      searchRestaurant('restaurant a');

      expect(favoriteRestaurant.searchRestaurant).toHaveBeenCalledWith('restaurant a');
    });

    it('should show the found Restaurant', () => {
      presenter._showFoundRestaurant([{ id: 'rqdv5juczeskfw1e867' }]);
      expect(document.querySelectorAll('.restaurant-list-title').length).toEqual(1);

      presenter._showFoundRestaurant([
        {
          id: 'rqdv5juczeskfw1e867',
          title: 'Melting Pot',
        },
      ]);

      expect(document.querySelectorAll('.restaurant-list-title > li').length).toEqual(0);
    });

    // it('should show the restaurants found by Favorite Restaurants', (done) => {
    //   document
    //     .getElementById('query')
    //     .addEventListener('restaurants:searched:updated', () => {
    //       expect(document.querySelectorAll('.restaurant-list-title').length).toEqual(1);
    //       done();
    //     });

    //   FavoriteRestaurantIdb.searchRestaurant.mockImplementation((query) => {
    //     if (query === 'restaurant-list a') {
    //       return [
    //         { id: 'rqdv5juczeskfw1e867', title: 'Melting Pot' },
    //       ];
    //     }
    //     return [];
    //   });

    //   searchRestaurant('restaurant-list a');
    // });

    //   it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
    //     document
    //       .getElementById('query')
    //       .addEventListener('restaurants:searched:updated', () => {
    //         const restaurantTitles = document.querySelectorAll('.restaurant-list-title');

    //         expect(restaurantTitles.item(0).textContent).toEqual('Melting Pot');

    //         done();
    //       });

    //     FavoriteRestaurantIdb.searchRestaurant.mockImplementation((query) => {
    //       if (query === 'Melting Pot') {
    //         return [
    //           { id: 'rqdv5juczeskfw1e867', title: 'Melting Pot' },
    //         ];
    //       }
    //       return [];
    //     });

    //     searchRestaurant('restaurant a');
    //   });
    // });

    describe('When query is empty', () => {
      it('should capture the query as empty', () => {
        FavoriteRestaurantIdb.searchRestaurant.mockImplementation(() => []);

        searchRestaurant(' ');
        expect(presenter.latestQuery.length).toEqual(0);

        searchRestaurant('    ');
        expect(presenter.latestQuery.length).toEqual(0);
        searchRestaurant('');
        expect(presenter.latestQuery.length).toEqual(0);
        searchRestaurant('\t');
        expect(presenter.latestQuery.length).toEqual(0);
      });

      // it('should show all favorite restaurants', () => {
      //   // FavoriteRestaurantIdb.getAllRestaurant.mockImplementation(() => []);

    //   // searchRestaurant('    ');
    //   // expect(FavoriteRestaurantIdb.getAllRestaurant).toHaveBeenCalled();
    // });
    });

  // describe('When no favorite restaurants could be found', () => {
  //   it('should show the empty message', (done) => {
  //     document
  //       .getElementById('query')
  //       .addEventListener('restaurants:searched:updated', () => {
  //         expect(document.querySelectorAll('.restaurants__not__found').length).toEqual(1);
  //         done();
  //       });
  //     FavoriteRestaurantIdb.searchRestaurant.mockImplementation((query) => []);
  //     searchRestaurant('restaurant a');
  //   });
  // });
  });
});
