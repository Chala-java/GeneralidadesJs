let usuario = "admin";
let password = "1234";
let inputUsuario = prompt("Ingrese su Usuario");
if (usuario == inputUsuario) {
  inputContraseña = prompt("Ingrese su contraseña");
  if (password == inputContraseña) {
    console.log("Bienvenido:" + inputUsuario);
  } else console.log("Contraseña incorrecta");
} else {
  console.log("Usuario no existe en la base de datos ");
}

function consultarSaldo(){
    console.log("Su saldo es")
}
function retirarDinero(){
    console.log("Hizo un retiro por")
}
function transferirDinero(){
    console.log("Hizo una transferencia por")
}
function consignarDinero(){
    console.log("Hizo una consignación por")
}