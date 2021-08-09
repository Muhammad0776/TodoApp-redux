import TodoRedux from '../../Components/Todo';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import AppWrapper from './AppWrapper';


function App() {
    return (
        <Provider store={store}>
            <AppWrapper>
                <TodoRedux />
            </AppWrapper>
        </Provider>

    );
}

export default App;