// A função só está entrando na condição 'Inválido' quando recebe números negativos.
// A comparação do typeof não parece estar funcionando.

// Operador new cria uma instancia de objeto

function Verificar(){

    var textoCaixa = document.getElementById("ano_nasc") // Esse método retorna o elemento HTML inteiro, não seu valor
    var anoNascimento = Number(textoCaixa.value)
    var 

    /*  
    console.log(`textoCaixa: ${textoCaixa} Tipo: ${typeof textoCaixa}`)
    console.log(`textoCaixa.value: ${textoCaixa.value} Tipo: ${typeof textoCaixa.value}`)
    console.log(`anoNascimento: ${anoNascimento} Tipo: ${typeof anoNascimento}`)
    
    console.log(textoCaixa.value == '')
    //console.log("textoCaixa.value: " + typeof textoCaixa.value)
*/

    if (anoNascimento < 0 || textoCaixa.value == ''){
        console.log('invalido') 
    } else if (anoNascimento >= 0 && anoNascimento <= 15){
        console.log('crianca')
    } else if (anoNascimento >= 16 && anoNascimento <= 30){
        console.log('jovem')
    } else if (anoNascimento >= 31 && anoNascimento <= 59){
        console.log('adulto')
    } else {
        console.log('idoso')
    }



}