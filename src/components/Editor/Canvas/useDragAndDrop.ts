import { RefObject, useEffect } from "react";
import { positionType } from "../../../types/types";

export function useDragAndDrop(
    block: RefObject<HTMLElement>,
    defPos: positionType,
    SetPositionBlock: (x: number, y: number) => void
): void {

    useEffect(() => {

        const currentBlock = block.current;

        let startPos: positionType;

        function handleMousedown(e: MouseEvent): void {
            startPos = {
                x: e.pageX,
                y: e.pageY,
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        let newPos: positionType;

        function handleMouseMove(e: MouseEvent): void {
            if (!e.defaultPrevented) {
                const delta = {
                    x: e.pageX - startPos.x,
                    y: e.pageY - startPos.y
                }
                newPos = {
                    x: defPos.x + delta.x,
                    y: defPos.y + delta.y
                }
                isNull(currentBlock).style.left = String(newPos.x) + 'px';
                isNull(currentBlock).style.top = String(newPos.y) + 'px';
            }
        }

        function handleMouseUp(): void {
            if (newPos) {
                SetPositionBlock(newPos.x, newPos.y);
            }
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }


        isNull(currentBlock).addEventListener("mousedown", handleMousedown);
        return () => {
            if (currentBlock) currentBlock.removeEventListener("mousedown", handleMousedown);
        };
    }, [block, defPos, SetPositionBlock]);
}

// проверка на !null значение
export function isNull<T>(value: T | null | undefined): T {
    if (!value) {
        throw new Error('${value} is Null!');
    }
    return value;
}