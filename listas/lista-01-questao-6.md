# Lista de Exercícios 1 (2-1-1) - Questão 6 (Explicação)

## O que a questão está pedindo?

Ela está pedindo para você criar **uma função genérica** que funcione com qualquer objeto.

Pense assim:

Você vai construir uma ferramenta.

Essa ferramenta deve ser capaz de:

* Receber um objeto já existente
* Receber o nome de uma nova propriedade
* Receber o valor dessa propriedade
* Inserir essa nova informação dentro do objeto

E depois devolver o objeto atualizado.

## Vamos entender os conceitos envolvidos

### 1. Objetos em JavaScript

Um objeto é um conjunto de pares:

```
chave : valor
```

Exemplo (objeto pessoa):

```
nome : "João"
idade : 20
```

Isso significa que um objeto pode ganhar novas informações ao longo do tempo.
Objetos em JavaScript são **dinâmicos**.

### 2. O que significa "adicionar propriedade"?

Significa pegar um objeto que já existe e incluir uma nova chave dentro dele.

Se antes ele tinha:

```
nome
```

Depois pode passar a ter:

```
nome
idade
```

Ou qualquer outra coisa.

### 3. O papel da função

A função serve para automatizar esse processo.

Em vez de você escrever manualmente:

```
objeto.algumaCoisa = valor;
```

A ideia é criar uma função que faça isso para você, recebendo:

* qual objeto será alterado
* qual será o nome da nova propriedade
* qual será o valor

Ou seja, a função precisa usar esses dados que vêm como parâmetros.

### 4. Um ponto importante (e aqui está onde muitos se confundem)

A chave será recebida como texto (string).

Isso significa que você não sabe previamente qual será o nome da propriedade.

Ela pode ser:

```
"nota"
"altura"
"email"
"curso"
```

A função precisa funcionar para qualquer uma delas.

Então pense:

Como você acessa ou cria propriedades em um objeto quando o nome da propriedade vem de uma variável?

Essa é a parte central do exercício.

## O que você precisa refletir antes de tentar resolver

Pergunte a si mesmo:

* Como adiciono uma propriedade a um objeto?
* Qual a diferença entre usar ponto e usar colchetes?
* O que acontece quando o nome da propriedade está guardado em uma variável?
* A função precisa criar um novo objeto ou modificar o que recebeu?

Se você conseguir responder essas perguntas, o exercício praticamente se resolve sozinho.

Perfeito. Vou complementar exatamente nesse formato, mantendo o foco didático e sem entregar a implementação da função.

---

## Exemplo prático

Suponha que você já tenha um objeto:

```js
const pessoa = { 
    nome: "Ricardo"
};
```

Nesse momento, o objeto possui apenas uma propriedade:

```
nome → "Ricardo"
```

Agora imagine que você **já criou** a função chamada `adicionarPropriedade` (aquela pedida na questão 6).

Você quer acrescentar a propriedade `idade` com valor `40`.

Você poderia fazer assim:

```js
const pessoa = { 
    nome: "Ricardo"
};
let nomePropriedade = "idade";
let valorPropriedade = 40;

adicionarPropriedade(pessoa, nomePropriedade, valorPropriedade);
```

Observe o que está acontecendo:

* `nomePropriedade` guarda o nome da nova chave
* `valorPropriedade` guarda o valor que será associado
* A função recebe essas três informações

Depois da execução, espera-se que o objeto passe a ter:

```
nome → "Ricardo"
idade → 40
```

Se você fizer:

```js
console.log(pessoa);
```

O resultado esperado será algo como:

```js
{ nome: "Ricardo", idade: 40 }
```

---

Perceba o ponto mais importante aqui:

O nome da propriedade não foi escrito diretamente no objeto.
Ele veio de uma variável.

É exatamente isso que a questão quer que você compreenda.

Se você entender esse exemplo, o exercício deixa de ser sobre sintaxe e passa a ser apenas sobre aplicar corretamente o conceito.
