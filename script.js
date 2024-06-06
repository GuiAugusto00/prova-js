//nome na pagina 

document.getElementById("nome") .innerHTML = "augusto"

console.log("augusto")

//crie um programa para dizer "ola mundo "

let caixanome = document.getElementById("caixanome")

function responder()
{
    resposta.innerHTML = "ola, " + caixanome.value + "  tdbom?"
}

//metro para cm

let metro = document.getElementById("metros")
let cms = document.getElementById("cms")

function converter()
{
    cms.innerHTML = parseInt(metros.value) * 100
}

//menor numero anterior e sucessor

let menorvalor = document.getElementById("menorvalor")
let menornumero = document.getElementById("menornumero")
let menornumero2 = document.getElementById("menornumero2")

function consulte()
{
    menornumero.innerHTML = parseInt(menorvalor.value) + 1
    menornumero2.innerHTML = parseInt(menorvalor.value) - 1
}

//maior numero

let valor1 = document.getElementById("valor3")
let valor2 = document.getElementById("valor4")
let numeromaior = document.getElementById("numeromaior")

function maiornumero()
{
    if (valor1.value > valor2.value)
        {
            numeromaior.innerHTML = valor1.value
        }
    else 
    {
            numeromaior.innerHTML = valor2.value
    }
}

//numero 7

var f = 1
while (f <= 100)
    {
        console.log(f)
        f = f + 1 
    }

    //numero 8

    var g = 0;
    while (g <= 50)
        {
            console.log(g)
            g = g + 5
        }

        //numero 9 

        var k = 100
        while (k >= 0)
            {
                console.log(g)
                k = k - 10
            }

            //numero 6 

            let salario = document.getElementById("salario")
            let salariofinal = document.getElementById("salariofinal")

            function final()
            {

                if(salario.value > 1250)
                    {
                        salariofinal.innerHTML parseInt(salario.value) *100/
                    }
            }
                else
                {

                }