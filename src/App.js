import "./App.css";
import MainRoute from "./Router";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import combineReducers from "./store/reducers";

const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </div>
  );
};

export default App;
