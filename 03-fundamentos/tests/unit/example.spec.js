describe('Example Component', () => {

  test('Debe ser mayor a 10', () => {

    // Arreglar
    let value = 10;

    // Estimulo
    value = value + 2;

    // Observar el resultado (Asercion)
    expect( value ).toBeGreaterThan( 10 );
  })

})