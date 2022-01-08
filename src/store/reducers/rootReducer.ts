import { combineReducers } from 'redux'
import { editorType } from '../../types/types';
import { defaultEditor } from '../initState';
import { editorReducer } from './editorReducer';



export const defaultState: editorType = defaultEditor;

export const rootReducer = combineReducers({
    editor: editorReducer,
})
