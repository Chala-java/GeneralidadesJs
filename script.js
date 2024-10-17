let usuario = "admin";
let password = "1234";
let inputContraseña = prompt("Ingrese su Contraseña");

let inputUsuario = prompt("Ingrese su Usuario");
if (usuario == inputUsuario) {
  inputContraseña = prompt("Ingrese su contraseña");
  if (password == inputContraseña) {
    console.log("Bienvenido:" + inputUsuario);
  } else console.log("Contraseña incorrecta");
} else {
  console.log("Usuario no existe en la base de datos ");
}