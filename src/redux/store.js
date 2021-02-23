import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CapitalsReducer from "./reducers/CapitalsReducer";
import GeneralFactsReducer from "./reducers/GeneralFactsReducer";
import PoliticsReducer from "./reducers/PoliticsReducer";
import SportsTeamsReducer from "./reducers/SportsTeamsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	capitals: CapitalsReducer,
	generalFacts: GeneralFactsReducer,
	politics: PoliticsReducer,
	sportsTeams: SportsTeamsReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
