import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { editorType } from '../types/types';
import { defaultEditor as InitialState} from './initState';
import { editorReducer } from './reducers/editorReducer';
import { rootReducer } from './reducers/rootReducer';


export let store: Store<editorType> = createStore(editorReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>