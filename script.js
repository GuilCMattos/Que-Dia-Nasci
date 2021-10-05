function media() { 
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let nota3 = document.getElementById('nota3')
    let nota4 = document.getElementById('nota4')
    let res = document.getElementById('res')

    


    function calc(n1,n2,n3,n4) { 
        return (n1+n2+n3+n4) /4 
    }

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let n4 = Number(nota4.value)

    var m = Number(calc(n1,n2,n3,n4))

    res.innerHTML = `Sua média é ${m}`

    
}