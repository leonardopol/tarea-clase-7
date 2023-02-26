function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );

  console.assert(
      validarNombre('Fabricio') === '',
      'Validar nombre fallo con un nombre valido'
  );

  console.assert(
    validarNombre('123123123') === 'El campo nombre solo acepta letras',
    'validar nombre no valido que el nombre solo tenga letras'
  )
}

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

    console.assert(
        validarDescripcionRegalo('.,.,.,.,') === 'El campo descripcion solo puede tener numeros y letras',
        'La funcion validar descripcion regalo no valido que fuera solo numeros y letras'
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarRegalo();


