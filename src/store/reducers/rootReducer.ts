import { combineReducers } from 'redux'
import { editorType } from '../../types/types';
import { defaultEditor } from '../initState';
import canvasReducer from './canvasReducer';
import { ImgContentReducer } from './imgReducer';
import { TextContentReducer } from './textReducer';

export const defaultState: editorType = defaultEditor;

export const rootReducer = combineReducers({
   canvasReducer,
   ImgContentReducer,
   TextContentReducer,
})
