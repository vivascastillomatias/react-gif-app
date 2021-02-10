import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper =  shallow(<AddCategory setCategories={setCategories}/>)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper =  shallow(<AddCategory setCategories={setCategories}/>) 
    })
    
    test('Construcción correcta del componente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe cambiar el valor de la caja de texto | handleInputChange', () => {

        const input = wrapper.find('input')
        const value = "1111111"
        input.simulate('change', {target: {value}})
        const change = wrapper.find('p').text();

        expect(change).toBe(value)
    })

    test('No debe de postear la informacion en el onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled() // Saber si una funcion fue llamada una vez o más
    })
    
    test('Debe llamar a setCategories y limpiar la caja de texto', () => {
        const value = "Shrek"
        wrapper.find('input').simulate('change', {target: {value}})
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(k) // Saber si la funcion fue llamada k veces
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function) ); // Saber si la funcion fue llamada con una funcion
        

        expect(wrapper.find('input').prop('value')).toBe('')
    })
    

})
