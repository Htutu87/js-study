// A função só está entrando na condição 'Inválido' quando recebe números negativos.
// A comparação do typeof não parece estar funcionando.

// Operador new cria uma instancia de objeto

function Verificar(){

    var textoCaixa = document.getElementById("ano_nasc") // Esse método retorna o elemento HTML inteiro, não seu valor
    var anoNascimento = Number(textoCaixa.value)
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoNascimento
    var faixaEtaria
    var radio = document.getElementById("male")
    var sexo = radio.checked ? "homem":"mulher"
    var img = document.createElement("img")
    
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
        faixaEtaria = "crianca"
        console.log('crianca')
    } else if (idade >= 16 && idade <= 30){
        faixaEtaria = "jovem"
        console.log('jovem')
    } else if (idade >= 31 && idade <= 59){
        faixaEtaria = "adulto"
        console.log('adulto')
    } else {
        faixaEtaria = "idoso"
        console.log('idoso')
    }

    if (sexo == "homem"){
        switch (faixaEtaria){
            case "crianca":
                img.src = "img/foto-bebe-m.png"
                break
            case "jovem":
                img.src = "img/foto-jovem-m.png"
                break
            case "adulto":
                img.src = "img/foto-adulto-m.png"
                break
            case "idoso":
                img.src = "img/foto-idoso-m.png"
                break
        }
    } else {
        switch (faixaEtaria){
            case "crianca":
                img.src = "img/foto-bebe-f.png"
                break
            case "jovem":
                img.src = "img/foto-jovem-f.png"
                break
            case "adulto":
                img.src = "img/foto-adulto-f.png"
                break
            case "idoso":
                img.src = "img/foto-idoso-f.png"
                break
        }
    }

    var resultado = document.getElementById("results")

    resultado.innerHTML = `Detectamos <strong>${sexo}</strong> de <strong>${idade}</strong> anos!<br>`
    resultado.appendChild(img)
    resultado.style.textAlign = 'center'
}