function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
     this.depositar = function(valor){
      this.saldo += valor
    }
   }
   const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)