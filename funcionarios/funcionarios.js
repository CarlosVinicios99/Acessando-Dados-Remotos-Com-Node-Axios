const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')


let obterFuncionariosChineses = func => func.pais === "China"

let obterFuncionarias = func => func.genero === 'F'

let obterMenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionariaMenorSalario = funcionarios.filter(obterFuncionariosChineses)
    .filter(obterFuncionarias).reduce(obterMenorSalario)

    console.log(funcionariaMenorSalario)
})