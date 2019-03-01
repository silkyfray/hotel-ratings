import reducer, { initialState } from './hotelReducer';
import * as types from '../constants/actionTypes';

describe('hotel reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});
	it(`should handle ${types.ADD_HOTEL}`, () => {
		let newHotel = {
			name: 'hotelfour',
			starRating: 5,
			facilities: []
		};
		expect(reducer(initialState, { type: types.ADD_HOTEL, payload: newHotel }).hotels).toContain(newHotel);
	});
	it(`should handle ${types.ADD_FACILITY_FILTER}`, () => {
		expect(reducer(initialState, { type: types.ADD_FACILITY_FILTER, payload: 'car park' }).facilities).toContain(
			'car park'
		);
	});
});
