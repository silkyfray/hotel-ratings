import React from 'react';
import { connect } from 'react-redux';
import ResultsTable from './ResultsTable';

const mapStateToProps = (state) => {
	return { ...state.hotels };
};

export default connect(mapStateToProps)((props) => {
	return (
		<div>
			<ResultsTable {...props} />
		</div>
	);
});
