import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddle from "redux-saga";
import createHistory from "history/createHashHistory";
import { routerMiddleware } from "react-router-redux";
import { LocalizeProvider } from "react-localize-redux";
import AppContainer from "./containers/App/AppContainer";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
export const App = () => {
  const history = createHistory();
  const sagaMiddleware = createSagaMiddle();
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = applyMiddleware(sagaMiddleware, reactRouterMiddleware);
  const store = createStore(rootReducer, middlewares);

  // run root saga
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <LocalizeProvider store={store}>
        <AppContainer history={history}></AppContainer>
      </LocalizeProvider>
    </Provider>
  );
};

export default App;
