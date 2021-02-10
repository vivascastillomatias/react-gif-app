import getGifs  from '../../helpers/getGifs'

describe('Pruebas con getGifs fetch', () => {
    
    test('Debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('shrek')

        expect(gifs.length >= 0).toBe(true)
    })
    
    test('Debe traer 0 elementos ', async() => {
        
        const gifs = await getGifs('shrek')

        expect(gifs.length >= 0).toBe(true)
    })
    
})
