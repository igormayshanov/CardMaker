export function addRectangle() {
    const canvas = document.getElementsByTagName('Canvas');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttributeNS(null, 'onload', "makeDraggable(e)");
    svg.setAttributeNS(null, 'width', '800');
    svg.setAttributeNS(null, 'height', '500');
    //canvas.appendChild(svg);

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttributeNS(null, 'x', '100');
    rect.setAttributeNS(null, 'y', '100');
    rect.setAttributeNS(null, 'width', '100');
    rect.setAttributeNS(null, 'height', '50');
    svg.appendChild(rect);
}