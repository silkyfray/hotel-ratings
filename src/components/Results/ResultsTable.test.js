import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsTable from './ResultsTable';
import { initialState } from '../../reducers/hotelReducer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
	const props = {
		...initialState
	};

	const enzymeWrapper = shallow(<ResultsTable {...props} />);

	return {
		props,
		enzymeWrapper
	};
}

describe('ResultsTable', () => {
	it('should render number of rows', () => {
		const { enzymeWrapper } = setup();

		expect(enzymeWrapper.find('.results-row')).toHaveLength(initialState.hotels.length);
	});
});
