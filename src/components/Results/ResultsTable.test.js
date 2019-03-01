import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsTable from './ResultsTable';
import { initialState } from '../../reducers/hotelReducer';

Enzyme.configure({ adapter: new Adapter() });

function setup(props = initialState) {
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
	it('should display hotels with one filter applied', () => {
		const { enzymeWrapper } = setup({ ...initialState, facilities: [ 'car park' ] });

		const facilities = enzymeWrapper.find('.facility');
		facilities.forEach((facility) => {
			expect(facility.render().text()).toContain('car park');
		});
	});
	it('should display hotels with two filter applied', () => {
		const { enzymeWrapper } = setup({ ...initialState, facilities: [ 'car park', 'pool' ] });

		const facilities = enzymeWrapper.find('.facility');
		facilities.forEach((facility) => {
			const text = facility.render().text();
			expect(text).toContain('car park');
			expect(text).toContain('pool');
		});
	});
});
