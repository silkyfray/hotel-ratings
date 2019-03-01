import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const ResultsTable = ({ hotels, sort, facilities }) => {
	const getFilteredHotels = (hotels, facilities) => {
		return facilities && facilities.length
			? hotels.filter((hotel) =>
					facilities.every((facility) => hotel.facilities.find((facilityToTake) => facilityToTake === facility))
				)
			: hotels;
	};
	return (
		<Table responsive className="Results">
			<thead>
				<tr>
					<th>Name</th>
					<th>Stars</th>
					<th>Facilities</th>
				</tr>
			</thead>
			<tbody>
				{getFilteredHotels(hotels, facilities).map((hotel, index) => {
					return (
						<tr className="results-row" key={index}>
							<td>{hotel.name}</td>
							<td className="star">{hotel.starRating}</td>
							<td className="facility">
								{hotel.facilities.reduce((a, c) => (!a ? c : a + ', ' + c), '')}
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

ResultsTable.propTypes = {
	hotels: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			starRating: PropTypes.number,
			facilities: PropTypes.arrayOf(PropTypes.string)
		})
	),
	sort: PropTypes.string,
	facilities: PropTypes.arrayOf(PropTypes.string)
};

export default ResultsTable;
