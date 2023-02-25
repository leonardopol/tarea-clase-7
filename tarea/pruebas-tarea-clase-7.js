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

function probarValidarRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'El campo no puede estar vacio',
        'Validar regalo no validó que el campo descripcion regalo no este vacío'
    );

    console.assert(
        validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 'El campo debe tener menos de 100 caracteres',
        'El campo debe tener menos de 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('regalo') === '',
        'La funcion validar regalo no funciono con una descripcion valida'
    );
}

probarValidarCiudad();
probarValidarRegalo();