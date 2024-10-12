export function is_valid_phone(phone) {
  var isValid = false;
  var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i;

  try {
    isValid = re.test(phone);
  } catch (e) {
    console.log(e);
  } finally {
    return isValid;
  }
}

export function validateMessage(msg) {
  var obj = JSON.parse(msg);

  // Evita la inyección de script
  obj.mensaje = obj.mensaje.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Validación para ver si es URL de imagen o video
  var videoRegex = /\.(mp4)$/;
  var imageRegex = /\.(jpeg|jpg|gif|png)$/;

  if (imageRegex.test(obj.mensaje)) {
    obj.mensaje = `<img src="${obj.mensaje}" alt="Imagen no disponible">`;
  } else if (videoRegex.test(obj.mensaje)) {
    obj.mensaje = `<video controls><source src="${obj.mensaje}" type="video/mp4">Video no disponible</video>`;
  } else {
    if (is_valid_phone(obj.mensaje)) {
      console.log("Es un teléfono!");
    }
  }
  return JSON.stringify(obj);
}
