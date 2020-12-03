import Header from './components/Header/Header';
import DataInsert from './components/DataInsert/DataInsert';
import DataDisplay from './components/DataDisplay/DataDisplay';
import { useTheme } from './hooks/useTheme';

import { generalTheme } from './constants/theme';
import { Wrapper } from './App.styles';

const App = () => {
	useTheme(generalTheme);

	return (
		<Wrapper className='App'>
			<Header />
			<DataInsert />
			<DataDisplay />
		</Wrapper>
	);
};

export default App;
