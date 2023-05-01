function wrapAll(elements, wrapper) {
  // Obtener el primer elemento hijo
  var firstChild = elements[0];

  // Crear el nuevo elemento padre
  var newWrapper = wrapper.cloneNode();

  // Reemplazar el primer elemento hijo con el nuevo elemento padre
  firstChild.parentNode.replaceChild(newWrapper, firstChild);

  // Agregar todos los elementos como hijos del nuevo elemento padre
  elements.forEach(function(element) {
    newWrapper.appendChild(element);
  });

  return newWrapper;
}
