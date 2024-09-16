let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let boton_limpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=;,.<>~áéíóúÁÉÍÓÚ';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres debe ser mayor o igual a seis (6)");
        return;
    }
    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    contrasena.value = password;
    evaluarContrasena(password);
}

function limpiar() {
    document.getElementById('cantidad').value = '';
    document.getElementById('contrasena').value = '';
    mensaje.textContent = '';
}

function evaluarContrasena(password) {
    let longitud = password.length;
    let existen_minusculas = /[a-z]/.test(password);
    let existen_mayusculas = /[A-Z]/.test(password);
    let existen_numeros = /[0-9]/.test(password);
    let existen_caracteres_especiales = /[!@#$%^&*()_+\-=;,.<>~áéíóúÁÉÍÓÚ]/.test(password);

    let advertencia = '';

    if (longitud < 7) {
        advertencia = 'Su contraseña es débil';
    } else if (longitud >= 7 && longitud <= 8) {
        if (existen_minusculas && existen_mayusculas && existen_numeros && existen_caracteres_especiales) {
            advertencia = 'Su contraseña es aceptable';
        } else {
            advertencia = 'Su contraseña es débil';
        }
    } else if (longitud >= 9 && existen_minusculas && existen_mayusculas && existen_numeros && existen_caracteres_especiales) {
        advertencia = 'Su contraseña es fuerte';
    } else {
        advertencia = 'Su contraseña es débil';
    }

    mensaje.textContent = advertencia; // Mostrar advertencia en el elemento correspondiente
}
