## JavaScript & HTML DOM: Exercícios - Funções de Alta Ordem

**Desenvolvimento de Aplicações Web - COLTEC/MG**

**João Eduardo Montandon**

<ol>
  <li>
    Implemente um programa em JavaScript que converta uma tabela no formato
    <a href="http://en.wikipedia.org/wiki/Comma-separated_values">CSV</a>
    para uma tabela HTML.
  </li>
  <li>
    <p>
      Implemente sua própria versão da função <code>getElementsByTagName</code>.
      Sua função deverá receber a tag que será buscada como parâmetro e retornar
      uma lista de elementos que possuem esta tag.
    </p>
    <p>
      Faça o teste com o código HTML da matéria. Quantos <code>&lt;section&gt;</code>
      existem? Quantos links a apresentação possui? Quantas Imagens?
    </p>
    <p>
      <em>Dica: Você deverá navegar manualmente pelo DOM e verificar a propriedade
        <code>tagName</code> de cada elemento.</em>
    </p>
  </li>
  <li>
    Implemente um código JavaScript que, ao ser executado, substitua toda imagem
    de uma página HTML por seu respectivo texto de descrição.
  </li>
</ol>

<h3>Desafio: Crawler para Twitter</h3>
<p>
  Neste desafio, você deverá implementar um código JavaScript que extraia
  os tweets de um determinado perfil do Twitter. Caso exista algum link no
  tweet, o mesmo deverá ser removido.
</p>
<p>
  Após obter os tweets do perfil, você deverá exibi-los na própria página,
  por meio da função <code>document.write</code>.
</p>
<p>
  Para fim de testes, utilize o perfil da <a href="https://twitter.com/ufmgbr">UFMG</a>.
</p>
