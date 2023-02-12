
//FUNÇÃO MOSTRAR FRASE
function mostrarFrase (frase) {
    document.write = frase;
};

//PRIMEIRO ALUNO
const alunoH = {
    nome: "Henry",
    idade: 17,
    peso: 60,
    altura: 1.76,
    imc: undefined
}

//SEGUNDO ALUNO
const alunoM = {
    nome: "Modesto",
    idade: 18,
    peso: 65,
    altura: 1.80,
    imc: undefined
}

//TERCEIRO ALUNO
const alunoB = {
    nome: "Bruno",
    idade: 15,
    peso: 50,
    altura: 1.65,
    imc: undefined
}

//QUARTO ALUNO
const alunoK = {
    nome: "Kauan",
    idade: 18,
    peso: 50,
    altura: 1.50,
    imc: undefined
}

//QUINTO ALUNO
const alunoR = {
    nome: "Rosquinha",
    idade: 16,
    peso: 60,
    altura: 1.66,
    imc: undefined
}

//CALCULO IMC
function calculoImc(obj) {
    obj.imc = (obj.peso / (obj.altura * obj.altura)).toFixed(1)
};

calculoImc(alunoH)
calculoImc(alunoM)
calculoImc(alunoB)
calculoImc(alunoK)
calculoImc(alunoR)


//DESCONSTRUÇÃO

function escreveObj(obj) {
    var{nome, imc} = obj
    console.log(nome+"Imc: "+imc)
}

escreveObj(alunoH)
escreveObj(alunoM)
escreveObj(alunoB)
escreveObj(alunoK)
escreveObj(alunoR)




//OBJETOS
mostrarFrase(alunoH)
mostrarFrase(alunoM)
mostrarFrase(alunoB)
mostrarFrase(alunoK)
mostrarFrase(alunoR)