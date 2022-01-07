import {createStore,combineReducers} from 'redux'
import Datareducer from './Datareducer'
import {devToolsEnhancer} from 'redux-devtools-extension'
const roots = combineReducers({Datareducer})

const store = createStore(roots , devToolsEnhancer())
export default store;