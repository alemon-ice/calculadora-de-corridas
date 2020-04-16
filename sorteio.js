function sortear() {
    const numeroSorteado = Math.round(Math.random() * 1000)
    var numeroDaSorte = prompt(`
            Informe seu número da sorte!
            OBS: apenas números inteiros entre 1 e 1000
        `)

    if (numeroDaSorte < 1 || numeroDaSorte > 1000) {
        alert(`DIGITE APENAS NÚMEROS INTEIROS ENTRE 1 E 1000!!!`)
    } else {
        if (numeroDaSorte == numeroSorteado) {
            paragrafoResult.innerHTML = `
                    Parabéns! Você ganhou um cupom de uma viagem
                    gratuita válido para viagens de no máximo R$ 20,00
                `
        } else {
            paragrafoResult.innerHTML = `
                    Sinto muito, você perdeu.
                    Tente novamente no sorteio de amanhã...
                `
        }
    }
}