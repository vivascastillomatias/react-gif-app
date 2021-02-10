import { useFetchGifs } from "../../hooks/useFetchGifs"
import '@testing-library/react-hooks'
import { renderHook } from "@testing-library/react-hooks"
describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Bad bunny'))
        const {data, loading} = result.current; //Toma el valor
        await waitForNextUpdate(); //Espera hasta que se realice el setState

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('Debe retornar un arreglo de imagenes y el loading en false', async () => {
        
        const {result, waitForNextUpdate}= renderHook( () => useFetchGifs('Bad bunny'))
        await waitForNextUpdate(); //Espera hasta que se realice el setState
        const {data, loading} = result.current; //Toma el valor
        expect(data.length).toBe(10)
        expect(loading).toBe(false)

    })
    
    
})
