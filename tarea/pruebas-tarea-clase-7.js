function probarValidarCiudad() {
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad fallo con un nombre valido'
    );

    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacio',
        'Validar ciudad no validó que el campo ciudad no este vacío'
    );
}

probarValidarCiudad();