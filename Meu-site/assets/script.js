function menu() {

    //Associando as tags do HTML ao javascript
    var but = window.document.getElementById('burguer')
    var menu = window.document.getElementById('menu')


    //Operador ternário

    //condição ? valor1 : valor2.
    //ondição ? valor1 : valor2.

    //A condição é avaliada. Se a condição for verdadeira, o valor de valor1 é retornado. Se a condição for falsa, o valor de valor2 é retornado.

    //A expressão menu.style.display acessa a propriedade "display" do estilo do elemento "menu"

    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

