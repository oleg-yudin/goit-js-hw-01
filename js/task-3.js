function getElementWidth(content, padding, border) {
    const contentNew = parseFloat(content);
    const paddingNew = parseFloat(padding);
    const borderNew = parseFloat(border);
    return contentNew + (2 * paddingNew) + (2 * borderNew);
}   




console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
