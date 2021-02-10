import React from 'react';
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe('Pruebas en componente <GifGridItem />', () => {
    const id = 'idComponent';
    const title = 'titleComponent'
    const url = 'urlComponent'

    const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />)

    test('Obtención correcta del componente en condiciones normales', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');

        expect(p.text().trim() ).toBe(title)

    })

    test('Debe tener una imagen con el src con el alt', () => {
        
        const img = wrapper.find('img');

        // console.log(img.prop('src')) - Acceso a una propiedad del componente indicando el nombre
        // console.log(img.props()) - Acceso a todas las propiedades del componente en un objeto
        //En caso de tener hijos, se alojarán debajo de la propiedad children

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

    })

    test('Debe de tener la clase animate__fadeIn', () => {
        const img = wrapper.find('div');

        expect( img.prop('className').includes('animate__fadeIn') ).toBe(true)
    })

})
