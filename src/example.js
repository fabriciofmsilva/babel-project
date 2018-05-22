const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);
const word = ' Calopsita do Agreste '

// com o pipeline operator
const words = word 
  |> trim 
  |> toUpperCase 
  |> split(' ');
  
console.log(words); // ['CALOPSITA', 'DO', 'AGRESTE']

const product = {
  name: 'Cangaceiro JavaScript', 
  price: 29.90,
  type: 'book',
  author: {
      name: 'Flávio Almeida'
  }
}

const name = product?.author.name;
console.log(name);
