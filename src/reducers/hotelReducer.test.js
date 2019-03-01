import reducer from './hotelReducer';
import * as types from '../constants/actionTypes';
import * as data from '../data/hotels.json';

describe('hotel reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(data);
	});
	it(`should handle ${types.ADD_HOTEL}`, () => {
		let newHotel = {
			name: 'hotelfour',
			starRating: 5,
			facilities: []
		};
		expect(reducer(data, { type: types.ADD_HOTEL, ...newHotel })).toContain(newHotel);
	});
});
