

const heavyProcess = ( it ) => {
    for (let i = 0; i < it; i++) {
        console.log('Ahi vamos perro!!')
    }
    return (`${it} iteraciones realizadas!`)
}

export default heavyProcess