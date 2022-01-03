import { combineReducers } from 'redux'
import { editorReducer } from './editorReducer'
import { editorType } from '../../types/types';
import { defaultEditor } from '../initState';

export const defaultState: editorType = defaultEditor;

export const rootReducer = combineReducers({editor: editorReducer})
