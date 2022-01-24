import { positionType, sizeType } from "../../types/types";

export enum ContentActionType {
  SET_POSITION_BLOCK = "SET_POSITION_BLOCK",
  SET_SELECTED_BLOCK = 'SET_SELECTED_BLOCK',
  RESET_SELECTED_BLOCK = 'RESET_SELECTED_BLOCK',
  RESIZE_SELECTED_BLOCK = "RESIZE_SELECTED_BLOCK",
}

export interface ResizeBlock {
  type: ContentActionType.RESIZE_SELECTED_BLOCK,
  id: string,
  width: number,
  height: number,
}

export interface SetPositionBlock {
  type: ContentActionType.SET_POSITION_BLOCK,
  id: string,
  x: number,
  y: number,
}

export interface SetSelectedBlock {
  type: ContentActionType.SET_SELECTED_BLOCK,
  id: string,
  selected: boolean,
}

interface ResetSelectedBlock {
  type: ContentActionType.RESET_SELECTED_BLOCK,
}

export type ContentActions = SetPositionBlock | SetSelectedBlock | ResetSelectedBlock | ResizeBlock;

export function SetSelectedBlock(isSelected: boolean, id: string) {
  return {
    type: 'SET_SELECTED_BLOCK',
    id: id,
    selected: isSelected,
  }
}

export function ResetSelectedBlock() {
  return {
    type: 'RESET_SELECTED_BLOCK',
  }
}

export function SetPositionBlock(position: positionType, id: string): SetPositionBlock {
  return {
    type: ContentActionType.SET_POSITION_BLOCK,
    id: id,
    x: position.x,
    y: position.y,
  }
}

export function ResizeBlock(newSize: sizeType, id: string): ResizeBlock {
  return {
    type: ContentActionType.RESIZE_SELECTED_BLOCK,
    id: id,
    width: newSize.width,
    height: newSize.height,
  }
}