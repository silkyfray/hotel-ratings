import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

import './FiltersContainer.scss';

const mapStateToProps = (state) => {};
export default connect()(({}) => {
	return (
		<div>
			<Form>
				<Form.Label>Facilities:</Form.Label>
				<Form.Control type="text" className="textInput" />
				<Form.Label>Ascending:</Form.Label>
				<Form.Check.Input type="checkbox" isValid />
			</Form>
		</div>
	);
});
