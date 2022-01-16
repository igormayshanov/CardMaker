import { combineReducers } from 'redux'
import { editorType } from '../../types/types';
import { defaultEditor } from '../initState';
import backgroundColor from './bgColorReducer';
import { heightReducer, widthReducer } from './canvasSizeReducer';
import { ImgContentReducer } from './imgReducer';
import { TextContentReducer } from './textReducer';




export const defaultState: editorType = defaultEditor;

export const rootReducer = combineReducers({
   backgroundColor,
   widthReducer,
   heightReducer,
   ImgContentReducer,
   TextContentReducer,
})
