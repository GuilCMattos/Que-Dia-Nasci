function media() {
    let data = document.getElementById("date")
var d = new Date(date.value)
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
console.log(dias[d.getDay()]) 

let res = document.getElementById("res")
res.innerHTML = `Você nasceu no dia da semana: ${dias[d.getDay()]}.`

}