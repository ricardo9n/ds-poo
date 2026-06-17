try {
    // Bloco de código onde uma exceção pode ocorrer
    console.log("Dentro do bloco try");
    // Lança uma exceção do tipo TypeError
    throw new TypeError('Erro de tipo');
} catch (erro) {
    // Bloco de código para lidar com outras exceções
    console.log('Outro erro:', erro.message);
} finally {
    // Bloco de código a ser executado independentemente de ocorrer uma exceção ou não
    console.log("Bloco finally sempre é executado");
}