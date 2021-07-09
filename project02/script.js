// A função só está entrando na condição 'Inválido' quando recebe números negativos.
// A comparação do typeof não parece estar funcionando.

// Operador new cria uma instancia de objeto

function Verificar(){

    var textoCaixa = document.getElementById("ano_nasc") // Esse método retorna o elemento HTML inteiro, não seu valor
    var anoNascimento = Number(textoCaixa.value)
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoNascimento
    var radio = document.getElementById("male")
    var sexo = radio.checked ? "homem":"mulher" 

    console.log(sexo)
    /*  
    console.log(`textoCaixa: ${textoCaixa} Tipo: ${typeof textoCaixa}`)
    console.log(`textoCaixa.value: ${textoCaixa.value} Tipo: ${typeof textoCaixa.value}`)
    console.log(`anoNascimento: ${anoNascimento} Tipo: ${typeof anoNascimento}`)
    */

    if (anoNascimento < 0 || textoCaixa.value == ''){
        console.log('invalido')
        window.alert('Entrada de dados inválida.')
        return false
    } else if (idade < 0) {
        console.log('ano futuro')
        document.getElementById("results").innerHTML = "Você <strong>não</strong> nasceu no futuro! Tente novamente."
        return false
    } else if (idade >= 0 && idade <= 15){
        console.log('crianca')
    } else if (idade >= 16 && idade <= 30){
        console.log('jovem')
    } else if (idade >= 31 && idade <= 59){
        console.log('adulto')
    } else {
        console.log('idoso')
    }

    document.getElementById("results").innerHTML = `Detectamos ${sexo} de ${idade} anos!`



}