import React from 'react';
import PropTypes from 'prop-types';

const ResultsTable = ({ hotels, sort, facilities }) => {
	return <div />;
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
