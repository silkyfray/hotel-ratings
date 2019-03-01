import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import ResultsTable from './ResultsTable';

const mapStateToProps = (state) => {};
export default connect()(({}) => {
	return (
		<div>
			<ResultsTable />
		</div>
	);
});
