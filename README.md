# Aplicación de imágenes creado con "Create React App"


_Curso de Udemy  de Fernando Herrera → [React: De cero a experto](https://www.udemy.com/course/react-cero-experto/)_

_Proyecto creado en el marco de formación como desarrollador front end en React secciones 06, 07 y 08 del curso_

Proyecto desplegado en Github Pages: [Aquí](https://vivascastillomatias.github.io/react-gif-app//)

## Contenido visto en la sección

- Custom Hooks
- Fetch hacia un API
- Comunicación entre componentes
- Clases de CSS
- Animaciones
- Enviar métodos como argumentos
- Creación de listados
- keys
- Giphy
- Uso de Github Pages
- Desplegar aplicación de React
- Generar build de producción de aplicación

## Utilización de Hooks

- Creación de hooks (CustomHooks)
- useState
- useCounter (Hook personalizado, Lógica de un contador)
- useEffect
- useFetch
- useRef (Hook personalizado)
- useLayoutEffect
- Memo
- useMemo
- useCallback


## INSTALACIÓN DE MÓDULOS NECESARIOS PARA REALIZAR PRUEBAS

- [enzyme](https://www.npmjs.com/package/enzyme)

- [@wojtekmaj/enzyme-adapter-react-17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17)

- [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json)

- [React Hooks Testing Library](https://react-hooks-testing-library.com/)


### Archivo setupTests.js:

```plain
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```