import { useEffect, RefObject } from "react";
import { positionType, sizeType } from "../../../types/types";

export function useResize(
  resizeBlock: (size: sizeType, id: string) => void,
  setPosition: (position: positionType, id: string) => void,
  LeftTop: RefObject<HTMLElement>,
  RightTop: RefObject<HTMLElement>,
  LeftBottom: RefObject<HTMLElement>,
  RightBottom: RefObject<HTMLElement>,
  item: RefObject<HTMLElement>,
  modelPos: positionType,
  modelSize: sizeType,
  id: string,
): void {

  useEffect(() => {

    const currentBlock: HTMLElement | null = item.current;
    const pointLeftTop: HTMLElement | null = LeftTop.current;
    const pointRightTop: HTMLElement | null = RightTop.current;
    const pointLeftBottom: HTMLElement | null = LeftBottom.current;
    const pointRightBottom: HTMLElement | null = RightBottom.current;

    let startPos: positionType;
    const MIN_SIZE_BLOCK: number = 30;

    function handleMouseDown(e: MouseEvent): void {
      e.preventDefault();
      startPos = {
        x: e.pageX + (5 - e.offsetX),
        y: e.pageY + (5 - e.offsetY),
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    let newWidth: number = modelSize.width;
    let newHeight: number = modelSize.height;
    let currWidth: number = modelSize.width;
    let currHeight: number = modelSize.height;
    let currPos: positionType = modelPos;
    let newPos: positionType;

    // const checkBlockSizeForMinimum = (size: sizeType, minSize: number) => {
    //   return {
    //    
    // }

    function handleMouseMove(e: MouseEvent): void {
      e.preventDefault();
      const delta: positionType = {
        x: e.pageX - startPos.x,
        y: e.pageY - startPos.y,
      }
      switch (e.target) {
        case pointRightBottom:
          newWidth = currWidth + delta.x;
          newHeight = currHeight + delta.y;
          newPos = {
            x: currPos.x,
            y: currPos.y,
          }
          if (newWidth > MIN_SIZE_BLOCK) if (currentBlock != null) currentBlock.style.width = `${newWidth}px`;
          if (newHeight > MIN_SIZE_BLOCK) if (currentBlock != null) currentBlock.style.height = `${newHeight}px`;
          break;
        case pointLeftBottom:
          newWidth = currWidth - delta.x;
          newHeight = currHeight + delta.y;
          newPos = {
            x: currPos.x + delta.x,
            y: currPos.y,
          }
          if (newHeight > MIN_SIZE_BLOCK) if (currentBlock != null) currentBlock.style.height = `${newHeight}px`;
          if (newWidth > MIN_SIZE_BLOCK) {
            if (currentBlock != null) currentBlock.style.width = `${newWidth}px`;
            if (currentBlock != null) currentBlock.style.left = `${newPos.x}px`;
          }
          break;
        case pointRightTop:
          newWidth = currWidth + delta.x;
          newHeight = currHeight - delta.y;
          newPos = {
            x: currPos.x,
            y: currPos.y + delta.y,
          }
          if (newWidth > MIN_SIZE_BLOCK) if (currentBlock != null) currentBlock.style.width = `${newWidth}px`;
          if (newHeight > MIN_SIZE_BLOCK) {
            if (currentBlock != null) currentBlock.style.height = `${newHeight}px`;
            if (currentBlock != null) currentBlock.style.top = `${newPos.y}px`;
          }
          break;
        case pointLeftTop:
          newWidth = currWidth - delta.x;
          newHeight = currHeight - delta.y;
          newPos = {
            x: currPos.x + delta.x,
            y: currPos.y + delta.y,
          }
          if (newWidth > MIN_SIZE_BLOCK) {
            if (currentBlock != null) currentBlock.style.width = `${newWidth}px`;
            if (currentBlock != null) currentBlock.style.left = `${newPos.x}px`;
          }
          if (newHeight > MIN_SIZE_BLOCK) {
            if (currentBlock != null) currentBlock.style.height = `${newHeight}px`;
            if (currentBlock != null) currentBlock.style.top = `${newPos.y}px`;
          }
          break;
      }
    }

    function handleMouseUp(): void {
      const newSize: sizeType = { width: newWidth, height: newHeight }
      resizeBlock(newSize, id);
      setPosition(newPos, id);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    if (pointLeftTop != null) pointLeftTop.addEventListener("mousedown", handleMouseDown);
    if (pointRightTop != null) pointRightTop.addEventListener("mousedown", handleMouseDown);
    if (pointLeftBottom != null) pointLeftBottom.addEventListener("mousedown", handleMouseDown);
    if (pointRightBottom != null) pointRightBottom.addEventListener("mousedown", handleMouseDown);
    return () => {
      if (pointLeftTop) pointLeftTop.removeEventListener("mousedown", handleMouseDown);
      if (pointRightTop) pointRightTop.removeEventListener("mousedown", handleMouseDown);
      if (pointLeftBottom) pointLeftBottom.removeEventListener("mousedown", handleMouseDown);
      if (pointRightBottom) pointRightBottom.removeEventListener("mousedown", handleMouseDown);
    };
  }, [resizeBlock, setPosition, LeftTop, RightTop, LeftBottom, RightBottom, item, modelPos, modelSize]);
}