export enum EditorActionTypes {
  SAVE_CARD = "SAVE_CARD",
  EXPORT_CARD = "EXPORT_CARD",
  OPEN_TEMPLATE = "OPEN_TEMPLATE",
  SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR",
  SET_CANVAS_WIDTH = "SET_CANVAS_WIDTH",
  SET_CANVAS_HEIGHT = "SET_CANVAS_HEIGHT",
}

interface SetBackgroundColorAction {
  type: EditorActionTypes.SET_BACKGROUND_COLOR,
  color: string,
}

interface SetCanvasWidthAction {
  type: EditorActionTypes.SET_CANVAS_WIDTH,
  width: number,
}

interface SetCanvasHeightAction {
  type: EditorActionTypes.SET_CANVAS_HEIGHT,
  height: number,
}

export type EditorAction = SetBackgroundColorAction | SetCanvasWidthAction | SetCanvasHeightAction;

export function SetCanvasWidthAction(newWidth: number): EditorAction {
  return {
    type: EditorActionTypes.SET_CANVAS_WIDTH,
    width: newWidth,
  }
}

export function SetCanvasHeightAction(newHeight: number): EditorAction {
  return {
    type: EditorActionTypes.SET_CANVAS_HEIGHT,
    height: newHeight,
  }
}

export function setFilter(color: string, opacity: number) {
  return {
    type: 'SET_FILTER',
    color: color,
    opacity: opacity,
  }
}

export function setSelectedBlock(id: string) {
  return {
    type: 'SET_SELECTED_BLOCK',
    id: id,
  }
}

export function resetSelectedBlock() {
  return {
    type: 'RESET_SELECTED_BLOCK',
  }
}

export function setBackgroundColor(newColor: string): EditorAction {
  return {
    type: EditorActionTypes.SET_BACKGROUND_COLOR,
    color: newColor,
  }
}

export function setBackgroundImg(src: string) {
  return {
    type: 'SET_BACKGROUND_IMG',
    src: src,
  }
}

export function resetBackground() {
  return {
    type: 'RESET_BACKGROUND',
  }
}

export function createTextBlock() {
  return {
    type: 'CREATE_TEXT_BLOCK',
  }
}

