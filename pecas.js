var listadepecas = ["Motor", "Amortecedor", "Freio", "Cambio", "Disco de Freio", "Radiador"]

if (listadepecas.length < 10){
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não tem mais espaço na lista")
}


let peso = 50;
if (peso,100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça possui peso adequado")
}


let nomepeca = "Disco de Freio"
if (nomepeca.length > 3){
    console.log("Nome de peça está adequado para o cadastro!")
}else if (nomepeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
}else{
    console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado")
} 



switch (nomepeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio")

        break;

    case 1:
    case 2:
    case 3:
        console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado")        

    default:
        console.log("Nome de peça está adequado para o cadastro!")
        break;
}