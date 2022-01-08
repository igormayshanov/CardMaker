import { CanvasAction, CanvasActionType} from "../actionCreators/editorActionCreator";
import { defaultEditor } from "../initState";

const defaultState = defaultEditor.canvas.backgroundColor;

export const backgroundColor = (backgroundColor: string = defaultState, action: CanvasAction): string => {
    switch (action.type) {
        case CanvasActionType.NEW_CARD:
            return '#ffffff';
        case 'SET_BACKGROUND_COLOR':
            return action.color;
        default:
            return backgroundColor;
    }
}

export default backgroundColor;