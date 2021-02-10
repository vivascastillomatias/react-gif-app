import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    
    test('Construcción correcta del componente', () => {
        
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Homero', 'Bad Bunny']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
})
