function createElement (parentElement, tagName, contents='', attributeWithValue=['null']) {
    const attributeName = attributeWithValue[0] || ''
    const attributeValue = attributeWithValue[1] || ''

    const elementString = `<${ tagName } ${ attributeName }="${ attributeValue }">${ contents }</${ tagName }>`

    if (parentElement) {
        parentElement.innerHTML += elementString
    }

    return elementString
}
