function getElementWidth(content, padding, border) {
    const Content = parseFloat(content);
    const Padding = parseFloat(padding);
    const Border = parseFloat(border);
    return Content + (2 * Padding) + (2 * Border);
}




console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
