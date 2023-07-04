export default function ehMaiorDeIdade (campo) {
    const dataDeAniversario = new Date(campo.value); //Puxa o campo de data de Nascimento e transforma em constante
 
    if (!validaIdade(dataDeAniversario)) {
        campo.setCustomValidity(' '); //habilita o erro para que a linha 68 do script.js atualize o valor. (Não faz diferença a mensagem dentro das '', pois a outra fórmula vai atualizar esse parametro.)
    }
    // validaIdade(dataDeAniversario); 
    // console.log(validaIdade(dataDeAniversario));
}

function validaIdade (data) { //cria uma constante com data atual e outra com a data de aniversário informada e adiciona 18 anos.
    const dataAtual = new Date();
    const dataMais18Anos = new Date(data.getUTCFullYear() + 18,data.getUTCMonth(),data.getUTCDate());

    return dataAtual >= dataMais18Anos; //Se a data atual for maior ou igual á data de aniversário +18 anos, então a pessoa é maior de idade.
}