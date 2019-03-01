import hotelReducer from '../reducers/hoteReducer';
import * as data from '../data/hotels.json';

describe('hotel reducer', () => {
	it('should return the initial state', () => {
		expect(hotelReducer(undefined, {})).toEqual(data);
	});
});
