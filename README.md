# Innova Connect Job Assessment

## Requirements

### Requisitos de negócio

* <ins>Deve ser possível se cadastrar (Nome, E-mail e Senha); ✅<ins>
* <ins>Deve ser possível se autenticar (E-mail e Senha);✅<ins>
* <ins>Deve ser possível cadastrar uma academia (Nome, Descrição, Telefone, Latitude e longitude); ✅<ins>
* <ins>Deve ser possível o usuário realizar check-in em uma academia; ✅<ins>
* Deve ser possível obter o perfil de um usuário logado;
* <ins>Deve ser possível o usuário obter o seu histórico de check-ins; ✅<ins>
* Deve ser possível o usuário buscar academias pelo nome;

### RNs (Regras de negócio)

* <ins>O usuário não deve poder se cadastrar com um e-mail duplicado; ✅<ins>
* <ins>O usuário não pode fazer 2 check-ins no mesmo dia; ✅<ins>
* <ins>A academia só pode ser cadastrada por administradores; ✅<ins>

### RNFs (Requisitos não-funcionais)

* <ins>A senha do usuário precisa estar criptografada;✅<ins>
* Todas listas de dados precisam estar paginadas com 20 itens por página;
* <ins>O usuário deve ser identificado por um JWT (JSON Web Token);✅<ins>


## API architecture
Clean/MVC with a service layer between the model and the controller

## API data validation and sanitization
[en] To avoid the intentional storage of potentially harmful data and incorrect
data input, the methods of the express-validate package were employed for
validations and sanitizations.

[pt-br] Para evitar requisições com conteúdo potencialmente maliciosos sejam 
enviados pela API foi utilizado os métodos do pacote express-validate.

## Testing the API
[pt-br] Follow the instructions in [Docs](./docs/API-TESTING.md)