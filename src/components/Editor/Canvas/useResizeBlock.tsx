import { useEffect, RefObject } from "react";
import { positionType, sizeType } from "../../../types/types";

export function useResize(
  resizeBlock: (size: sizeType, index: number) => void,
  setPosition: (position: positionType, index: number) => void,
  LeftTop: RefObject<HTMLElement>,
  RightTop: RefObject<HTMLElement>,
  LeftBottom: RefObject<HTMLElement>,
  RightBottom: RefObject<HTMLElement>,
  item: RefObject<HTMLElement>,
  modelPos: positionType,
  modelSize: sizeType,
  indexItem: number,
): void {

  useEffect(() => {

    const currentBlock: HTMLElement | null = item.current;
    const pointLT: HTMLElement | null = LeftTop.current;
    const pointRT: HTMLElement | null = RightTop.current;
    const pointLB: HTMLElement | null = LeftBottom.current;
    const pointRB: HTMLElement | null = RightBottom.current;

    let startPos: positionType;
    const MIN_SIZE_BLOCK: number = 30;

    function handleMousedown(e: MouseEvent): void {
      e.preventDefault();
      startPos = {
        x: e.pageX + (5 - e.offsetX),
        y: e.pageY + (5 - e.offsetY)
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

    function handleMouseMove(e: MouseEvent): void {
      e.preventDefault();
      const delta: positionType = {
        x: e.pageX - startPos.x,
        y: e.pageY - startPos.y,
      }

      switch (e.target) {
        case pointRB:
          newWidth = currWidth + delta.x;
          newHeight = currHeight + delta.y;
          newPos = {
            x: currPos.x,
            y: currPos.y,
          }
          if (newWidth > MIN_SIZE_BLOCK) if (currentBlock != null) currentBlock.style.width = `${newWidth}px`;
          if (newHeight > MIN_SIZE_BLOCK) if (currentBlock != null) currentBlock.style.height = `${newHeight}px`;
          break;
        case pointLB:
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
        case pointRT:
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
        case pointLT:
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
      resizeBlock(newSize, indexItem);
      if (newPos) setPosition(newPos, indexItem);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    if (pointLT != null) pointLT.addEventListener("mousedown", handleMousedown);
    if (pointRT != null) pointRT.addEventListener("mousedown", handleMousedown);
    if (pointLB != null) pointLB.addEventListener("mousedown", handleMousedown);
    if (pointRB != null) pointRB.addEventListener("mousedown", handleMousedown);
    return () => {
      if (pointLT) pointLT.removeEventListener("mousedown", handleMousedown);
      if (pointRT) pointRT.removeEventListener("mousedown", handleMousedown);
      if (pointLB) pointLB.removeEventListener("mousedown", handleMousedown);
      if (pointRB) pointRB.removeEventListener("mousedown", handleMousedown);
    };
  }, [resizeBlock, setPosition, LeftTop, RightTop, LeftBottom, RightBottom, item, modelPos, modelSize]);
}