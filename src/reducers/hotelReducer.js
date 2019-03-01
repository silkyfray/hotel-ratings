import * as hotelActionTypes from '../constants/actionTypes';

import * as initialState from '../data/hotels.json';

export default (state = initialState, action) => {
	switch (action.type) {
		case hotelActionTypes.ADD_HOTEL:
		case hotelActionTypes.ADD_FACILITY_FILTER:
		case hotelActionTypes.REMOVE_FACILITY_FILTER:
		case hotelActionTypes.SORT_ASC:
		case hotelActionTypes.SORT_DESC:
		default:
			return state;
	}
};
