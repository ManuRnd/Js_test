exports.addClass=(element, newClass) =>{
    // if class does not existante
    if(element.className.indexOf(newClass) === -1) {
        // append class to element
        element.className += newClass+' ';
    }
}
