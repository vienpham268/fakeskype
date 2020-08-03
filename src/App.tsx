import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createHistory";
import { routerMiddleware } from "react-router-redux";
import { LocalizeProvider } from "react-localize-redux";
import AppContainer from "./containers/AppContainer/AppContainer";
const App = () => {
  const store = createStore();
  const history = createHistory();
  return (
    <Provider store={store}>
      <LocalizeProvider store={store}>
        <AppContainer history={history}></AppContainer>
      </LocalizeProvider>
    </Provider>
  );
};

export default App;
