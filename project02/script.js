function Verificar(){

    var textoCaixa = document.getElementById("ano_nasc") // Esse método retorna o elemento HTML inteiro, não seu valor
    var anoNascimento = Number(textoCaixa.value) 
    var anoAtual = new Date().getFullYear()
    
    if (anoNascimento < 0 || textoCaixa.value == ''){
        alert('Entrada de dados inválida.')
        return false
    }
    
    var idade = anoAtual - anoNascimento

    if (idade < 0) {
        document.getElementById("results").innerHTML = "Você <strong>não</strong> nasceu no futuro! Tente novamente."
        return false
    }

    var radio = document.getElementById("male")
    var sexo = radio.checked ? "homem":"mulher"
    var img = document.createElement("img")

    if (sexo == 'homem'){

        if (idade >= 0 && idade <= 15){
            img.src = "img/foto-bebe-m.png"
        } else if (idade >= 16 && idade <= 30){
            img.src = "img/foto-jovem-m.png"
        } else if (idade >= 31 && idade <= 59){
            img.src = "img/foto-adulto-m.png"
        } else {
            img.src = "img/foto-idoso-m.png"
        }

    } else {

        if (idade >= 0 && idade <= 15){
            img.src = "img/foto-bebe-f.png"
        } else if (idade >= 16 && idade <= 30){
            img.src = "img/foto-jovem-f.png"
        } else if (idade >= 31 && idade <= 59){
            img.src = "img/foto-adulto-f.png"
        } else {
            img.src = "img/foto-idoso-f.png"
        }
    }       

    var resultado = document.getElementById("results")

    resultado.innerHTML = `Detectamos <strong>${sexo}</strong> de <strong>${idade}</strong> anos!<br>`
    resultado.appendChild(img)
    resultado.style.textAlign = 'center'
}