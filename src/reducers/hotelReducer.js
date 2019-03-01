import * as hotelActionTypes from '../constants/actionTypes';
import * as sortTypes from '../constants/sortTypes';

import data from '../data/hotels';

export const initialState = {
	hotels: data,
	facilities: [],
	sort: sortTypes.DESCENDING
};

export default (state = initialState, action) => {
	switch (action.type) {
		case hotelActionTypes.ADD_HOTEL: {
			const result = { ...state };
			result.hotels.push(action.payload);
			return result;
		}
		case hotelActionTypes.ADD_FACILITY_FILTER: {
			return { ...state, facilities: state.facilities.concat(action.payload) };
		}
		case hotelActionTypes.REMOVE_FACILITY_FILTER: {
			return { ...state, facilities: state.facilities.filter((facility) => facility !== action.payload) };
		}
		case hotelActionTypes.SORT_ASC: {
			let result = { ...state };
			result.sort = sortTypes.ASCDENDING;
			return result;
		}

		case hotelActionTypes.SORT_DESC: {
			let result = { ...state };
			result.sort = sortTypes.DESCENDING;
			return result;
		}
		default:
			return state;
	}
};
