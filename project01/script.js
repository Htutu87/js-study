var image = document.getElementById("image")
var text = document.getElementById("text")
var hours = new Date().getHours()
var minutes = new Date().getMinutes()
var control = 0

function Load(){

    if (hours >= 6 && hours <= 12){
        LoadDay()
    } else if (hours >= 13 && hours <= 18){
        LoadEvening()
    } else {
        LoadNight()
    }
}

function LoadDay(){
    image.src="img/sunshine.jpg"
    text.innerHTML = `<strong>Bom dia!</strong><br>Agora são ${hours} horas e ${minutes} minutos.`
    document.body.style.backgroundColor = 'wheat'
}
function LoadEvening(){
    image.src="img/evening.jpg"
    text.innerHTML = `<strong>Boa tarde!</strong><br>Agora são ${hours} horas e ${minutes} minutos.`
    document.body.style.backgroundColor = 'sandybrown'
}
function LoadNight(){
    image.src="img/night.jpg"
    text.innerHTML = `<strong>Boa noite!</strong><br>Agora são ${hours} horas e ${minutes} minutos.`
    document.body.style.backgroundColor = '#22142b'
    document.getElementById('dev').style.color = 'white'
}

function Test(loaded){
    control++
    control = control > 3 ? 1: control
    switch(control){
        case 1:
            LoadDay()
            break
        case 2:
            LoadEvening()
            break
        case 3: 
            LoadNight()
            break
    }
}
