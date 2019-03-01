import reducer, { initialState } from './hotelReducer';
import * as types from '../constants/actionTypes';
import * as sortTypes from '../constants/sortTypes';

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
	it(`should handle ${types.REMOVE_FACILITY_FILTER}`, () => {
		expect(
			reducer(
				{ initialState, facilities: [ 'car park' ] },
				{ type: types.REMOVE_FACILITY_FILTER, payload: 'car park' }
			).facilities
		).toBeFalsy();
	});
	it(`should handle ${types.SORT_ASC}`, () => {
		expect(reducer({ initialState, sort: sortTypes.DESCENDING }, { type: types.SORT_ASC }).sort).toEqual(
			sortTypes.ASCDENDING
		);
	});
});
