function table (texto){

  var matring  = matringfy(texto);

  var table = document.createElement("table");
  var linha = document.createElement("tr");
  var d = document.getElementById("div1");
  var c = document.createAttribute("class");

  for (var i = 0 ; i < matring.length ; i++){
    var coluna = document.createElement("td");
    var text = document.createTextNode(texto[i]);
    coluna.appendChild(text);
    linha.appendChild(coluna);
  }
  c.value = "table";
  table.appendChild(linha);
  table.setAttributeNode(c);
  d.appendChild(table);
}

function matringfy(entrada){
  return entrada;
}

var str = ["augusto","joao","estagio","concidencia??"];

table(str);
