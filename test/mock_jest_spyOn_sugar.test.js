import * as app from "../src/app";
import * as math from "../src/math";

test("calls math.add", () => {
    /*
    en este test lo que verificamos es la llamada al metodo 
    add de la dependencia math para el componente app,
    realizamos una implementacion del metodo add "mock" y comprobamos
    que sea igual al metodo solicitado por el componente app cuando se 
    le pasan los parametros 1,2
    */
  // store the original implementation
  const originalAdd = math.add;
  // mock add with the original implementation
  math.add = jest.fn(originalAdd);
  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // override the implementation
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});