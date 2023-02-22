function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre('Fabricio') === '',
      'Validar nombre fallo con un nombre valido'
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
    )
}

function probarValidarRegalo(){
    console.assert(
        validarRegalo('') === 'Este campo no puede estar vacio',
        'Validar regalo no validó que el campo regalo no este vacío'
    );

    console.assert(
        validarRegalo(
            '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 100 caracteres',
        'Validar Regalo no validó que el Regalo sea menor a 100 caracteres',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarRegalo();
