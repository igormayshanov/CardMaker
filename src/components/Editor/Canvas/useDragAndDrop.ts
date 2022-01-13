import { RefObject, useEffect } from "react";
import { positionType } from "../../../types/types";

export function useDragAndDrop(
    item: RefObject<HTMLElement>,
    modelPos: positionType,
    setPosition: (x: number, y: number) => void
): void {
    useEffect(() => {

        const currentItem = item.current;

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
                    x: modelPos.x + delta.x,
                    y: modelPos.y + delta.y
                }
                isNotNull(currentItem).style.left = String(newPos.x) + 'px';
                isNotNull(currentItem).style.top = String(newPos.y) + 'px';
            }
        }

        function handleMouseUp(): void {
            if (newPos) {
                setPosition(newPos.x, newPos.y);
            }
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        isNotNull(currentItem).addEventListener("mousedown", handleMousedown);
        return () => {
            if (currentItem) currentItem.removeEventListener("mousedown", handleMousedown);
        };
    }, [item, modelPos, setPosition]);
}

export function isNotNull<T>(value: T | null | undefined): T {
    if (!value) {
        throw new Error(`${value} is Null!`);
    }
    return value;
}