import * as hotelActionTypes from '../constants/actionTypes';

import data from '../data/hotels';

export default (state = data, action) => {
	switch (action.type) {
		case hotelActionTypes.ADD_HOTEL:
			const result = [ ...state, action.payload ];
			return result;
		case hotelActionTypes.ADD_FACILITY_FILTER:
		case hotelActionTypes.REMOVE_FACILITY_FILTER:
		case hotelActionTypes.SORT_ASC:
		case hotelActionTypes.SORT_DESC:
		default:
			return state;
	}
};
