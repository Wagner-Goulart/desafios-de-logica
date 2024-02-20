const diferencaEmSegundos = (horario1, horario2) => {
    const [hora1, minutos1, segundos1] = horario1.split(':').map(Number)
    const [hora2, minutos2, segundos2] = horario2.split(':').map(Number)

    const diferencaTotal = (hora1 - hora2) *3600 - (minutos1 - minutos2) - (segundos1 - segundos2)

    return diferencaTotal

}

const hora1 = '21:16:00'
const hora2 = '21:16:11'

console.log(diferencaEmSegundos(hora1, hora2))