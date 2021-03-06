import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

import './FiltersContainer.scss';
import { ADD_FACILITY_FILTER, REMOVE_FACILITY_FILTER, SORT_ASC, SORT_DESC } from '../../constants/actionTypes';
import { ASCDENDING } from '../../constants/sortTypes';

const mapStateToProps = (state) => ({
	...state.hotels
});

const mapDispatchToProps = (dispatch) => {
	return {
		toggleFacility: (facility) => (e) => {
			dispatch({
				type: e.target.checked ? ADD_FACILITY_FILTER : REMOVE_FACILITY_FILTER,
				payload: facility
			});
		},
		toggleSort: (e) => {
			dispatch({ type: e.target.checked ? SORT_ASC : SORT_DESC });
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(({ hotels, facilities, sort, toggleFacility, toggleSort }) => {
	const gatherPossibleFacilities = (hotels) => {
		return [ ...new Set(hotels.map((hotel) => hotel.facilities).flat()) ];
	};

	return (
		<div>
			<Form>
				{gatherPossibleFacilities(hotels).map((facility, index) => (
					<div key={index}>
						<Form.Check.Input
							type="checkbox"
							isValid={facilities.includes(facility)}
							onChange={toggleFacility(facility)}
						/>
						<Form.Label>{facility}</Form.Label>
					</div>
				))}
				<Form.Check.Input type="checkbox" isValid={sort === ASCDENDING} onChange={toggleSort} />
				<Form.Label>Ascending</Form.Label>
			</Form>
		</div>
	);
});
