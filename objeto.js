var obj = {
    'carrinho': {
      'produtos': [{
        'id': 458,
        'nome': 'Produto 1'
      },{
        'id': 789,
        'nome': 'Produto 2'
      },{
        'id' : 550,
        'nome': 'Produto 3'
      },{
        'id': 980,
        'nome': 'Produto 4'
      },{
        'id': 150,
        'nome': 'Produto 5'
      }]
    }
  }


  const separacaoID = obj.carrinho.produtos.map(objeto => objeto.id);

  const stringID = separacaoID.join(',');

console.log('ID: ' + stringID);

// finalizado