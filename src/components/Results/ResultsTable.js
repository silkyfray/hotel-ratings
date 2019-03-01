import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const ResultsTable = ({ hotels, sort, facilities }) => {
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
				{hotels.map((hotel, index) => {
					return (
						<tr className="results-row" key={index}>
							<td>{hotel.name}</td>
							<td>{hotel.starRating}</td>
							<td>{hotel.facilities}</td>
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
