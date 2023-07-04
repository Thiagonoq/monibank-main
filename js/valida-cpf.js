export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) ||validaSegundoDigito(cpf)) {
        campo.setCustomValidity(' ');//habilita o erro para que a linha 68 do script.js atualize o valor. (Não faz diferença a mensagem dentro das '', pois a outra fórmula vai atualizar esse parametro.)
    }
}

function validaNumerosRepetidos (cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    
    for(let tamanho = 0; tamanho < 9; tamanho++) { 
        soma += cpf[tamanho] * multiplicador; //cpf[tamanho] vai pegar cada caractere separado para realizar a operação
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    
    for(let tamanho = 0; tamanho < 10; tamanho++) { 
        soma += cpf[tamanho] * multiplicador; //cpf[tamanho] vai pegar cada caractere separado para realizar a operação
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}