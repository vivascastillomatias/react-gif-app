import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
    const category = 'Rap'
    
    test('Construcción correcta del componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        }) //Simula el resultado que devolverá el hook que será almacenado en el componente probado

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imágenes', () => {
        const gifs = [{
            id: 'id1',
            title: 'image1',
            url: 'urlImage1'
        },{ 
            id: 'id2',
            title: 'image2',
            url: 'urlImage2'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists() ).toBe(false)
        expect(wrapper.find('GifGridItem').length ).toBe(gifs.length)
    })
    
})
