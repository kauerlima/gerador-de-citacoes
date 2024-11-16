const citacoes = [
    {
      citacoes: "A persistência é o caminho do êxito.",
      autor: "Charles Chaplin",
    },
    {
      citacoes: "A única forma de fazer um grande trabalho é amar o que se faz.",
      autor: "Steve Jobs",
    },
    {
      citacoes: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      autor: "Robert Collier",
    },
    {
      citacoes:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      autor: "Henry Ford",
    },
    {
      citacoes: "Não espere por oportunidades, crie você mesmo as suas.",
      autor: "Autor desconhecido",
    },
    {
        citacoes:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      autor: "Zig Ziglar",
    },
    {
        citacoes:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      autor: "Winston Churchill",
    },
    {
        citacoes:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      autor: "Winston Churchill",
    },
    {
        citacoes: "Acredite em si próprio e todo o resto virá naturalmente.",
      autor: "Elon Musk",
    },
    {
        citacoes:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      autor: "Autor desconhecido",
    },
  ];

  const botaoCitacoes = document.querySelector('#gerar-citacao')
  const texto = document.querySelector('.texto')
  const autor = document.querySelector('.autor')

  function gerarCitacao(){
    const index = Math.floor(Math.random() * citacoes.length)
    
    texto.textContent = citacoes[index].citacoes
    autor.textContent = citacoes[index].autor
  }

  botaoCitacoes.addEventListener("click", gerarCitacao);