const envs = {
  producao: {
    email: 'email do pagseguro',
    token: 'token do pagseguro',
    notificationURL: 'url de notificação',
    providers: {
      inicia_sessao: 'https://ws.pagseguro.uol.com.br/sessions',
      metodo_de_pagamento: 'https://pagseguro.uol.com.br/payment-methods',
      bandeira_do_cartao: 'https://df.uol.com.br/df-fe/mvc/creditcard/v1/getBin',
      token_do_cartao: 'https://df.uol.com.br/v2/cards',
      condicoes_de_pagamento: 'https://pagseguro.uol.com.br/checkout/v2/installments.json',
      cria_checkout_transacao: 'https://ws.pagseguro.uol.com.br/v2/transactions',
      cancela_transacao: 'https://ws.pagseguro.uol.com.br/v2/transactions/cancels',
      estorna_transacao: 'https://ws.pagseguro.uol.com.br/v2/transactions/refunds',
      consulta_transacao: 'https://ws.pagseguro.uol.com.br/v2/transactions'
    }
  },
  sandbox: {
<<<<<<< HEAD
    email: 'financeiro@archshop.com.br',
    token: '914C9DB3D10F4395B55EDDE7FECA3A79',
    notificationURL: 'https://www.archshop.com.br/compra/finalizado.html',
=======
    email: 'financeiro@.com.br',
    token: '',
    notificationURL: 'url de notificação',
>>>>>>> 43bab60fd111164c053f50917c3f29c81843b6e7
    providers: {
      inicia_sessao: 'https://ws.sandbox.pagseguro.uol.com.br/sessions',
      metodo_de_pagamento: 'https://ws.sandbox.pagseguro.uol.com.br/payment-methods',
      bandeira_do_cartao: 'https://df.uol.com.br/df-fe/mvc/creditcard/v1/getBin',
      token_do_cartao: 'https://df.uol.com.br/v2/cards',
      condicoes_de_pagamento: 'https://ws.sandbox.pagseguro.uol.com.br/v2/installments.json',
      cria_checkout_transacao: 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions',
      cancela_transacao: 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/cancels',
      estorna_transacao: 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/refunds',
      consulta_transacao: 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions'
    }
  }
};
module.exports = envs;
