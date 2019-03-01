import * as hotelActionTypes from '../constants/actionTypes';

import data from '../data/hotels';

export const initialState = {
	hotels: data,
	facilities: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case hotelActionTypes.ADD_HOTEL: {
			const result = { ...state };
			result.hotels.push(action.payload);
			return result;
		}
		case hotelActionTypes.ADD_FACILITY_FILTER: {
			const result = { ...state };
			result.facilities.push(action.payload);
			return result;
		}
		case hotelActionTypes.REMOVE_FACILITY_FILTER:
		case hotelActionTypes.SORT_ASC:
		case hotelActionTypes.SORT_DESC:
		default:
			return state;
	}
};
