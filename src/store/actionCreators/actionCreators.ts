export enum EditorActionTypes {
  SAVE_CARD = "SAVE_CARD",
  EXPORT_CARD = "EXPORT_CARD",
  OPEN_TEMPLATE = "OPEN_TEMPLATE",
  SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR",
  SET_CANVAS_WIDTH = "SET_CANVAS_WIDTH",
  SET_CANVAS_HEIGHT = "SET_CANVAS_HEIGHT",
  INSERT_IMG = 'INSERT_IMG',
  SET_POSITION_BLOCK = "SET_POSITION_BLOCK",
}

interface InsertImg {
  type: EditorActionTypes.INSERT_IMG,
  src: string,
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

interface SetPositionBlock {
  type: EditorActionTypes.SET_POSITION_BLOCK,
  x: number,
  y: number,
}

export type EditorAction = SetBackgroundColorAction | SetCanvasWidthAction | SetCanvasHeightAction | InsertImg | SetPositionBlock;

export function SetPositionBlock(x: number, y: number) {
  return {
    type: 'SET_POSITION_BLOCK',
    x: x,
    y: y,
  }
}

export function InsertImg(src: string): EditorAction {
  return {
    type: EditorActionTypes.INSERT_IMG,
    src: src,
  }
}

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

