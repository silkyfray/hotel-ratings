import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import hotelReducer from './reducers/hotelReducer';

import './App.scss';
import FiltersContainer from './components/Filters/FiltersContainer';
import ResultsContainer from './components/Results/ResultsContainer';

const store = createStore(hotelReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<FiltersContainer />
					{/* <ResultsContainer /> */}
				</div>
			</Provider>
		);
	}
}

export default App;
