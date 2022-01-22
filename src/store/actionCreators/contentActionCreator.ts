import { positionType, sizeType } from "../../types/types";
import { store } from "../store";

export enum ContentActionType {
  SET_POSITION_BLOCK = "SET_POSITION_BLOCK",
  SET_SELECTED_BLOCK = 'SET_SELECTED_BLOCK',
  RESET_SELECTED_BLOCK = 'RESET_SELECTED_BLOCK',
  RESIZE_SELECTED_BLOCK = "RESIZE_SELECTED_BLOCK",
}

export interface ResizeBlock {
  type: ContentActionType.RESIZE_SELECTED_BLOCK,
  id: number,
  width: number,
  height: number,
}

export interface SetPositionBlock {
  type: ContentActionType.SET_POSITION_BLOCK,
  id: number,
  x: number,
  y: number,
}

interface SetSelectedBlock {
  type: ContentActionType.SET_SELECTED_BLOCK,
  id: string,
}

interface ResetSelectedBlock {
  type: ContentActionType.RESET_SELECTED_BLOCK,
}

export type ContentActions = SetPositionBlock | SetSelectedBlock | ResetSelectedBlock | ResizeBlock;

export function SetSelectedBlock(id: string) {
  return {
    type: 'SET_SELECTED_BLOCK',
    id: id,
  }
}

export function ResetSelectedBlock() {
  return {
    type: 'RESET_SELECTED_BLOCK',
  }
}

export function SetPositionBlock(position: positionType, id: number): SetPositionBlock {
  return {
    type: ContentActionType.SET_POSITION_BLOCK,
    id: id,
    x: position.x,
    y: position.y,
  }
}

export function ResizeBlock(newSize: sizeType, id: number): ResizeBlock {
  return {
    type: ContentActionType.RESIZE_SELECTED_BLOCK,
    id: id,
    width: newSize.width,
    height: newSize.height,
  }
}