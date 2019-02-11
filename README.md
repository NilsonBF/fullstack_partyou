
# Desafio Admissional PartYou

## Linguagens | Frameworks | Bibliotecas | Banco de dados.
**[NodeJS](https://nodejs.org/en/)**
**[React](https://reactjs.org/)**
**[reactstrap](https://reactstrap.github.io/)**

**[Python](https://www.python.org/)** 
**[Flask](http://flask.pocoo.org/)** 

**[Redis](https://redis.io/)** 

**[Docker](https://www.docker.com/)** 

---

### Setup básico _container_
 - **`docker-compose up --build`**

---

### End Points

> ## _Listar todos os usuários_
> ### GET 
> #### /users
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>        data: []
> }
> ```

> ## _Listar todos os produtos_
> ### GET 
> #### /produtos
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>        data: []
> }
> ```

> ## _Inserir produto_
> ### POST
> #### /produtos
> __Parâmetros:__
> ```
> {
>   produto: "", #String | obrigatório
>   valor: "" #Numero| obrigatório
> }
> ```
> __Resposta:__
> ```
> {
>        data: {}
> }
> ```

> ## _Listar um produto_
> ### GET
> #### /produtos/<item_id>
> __Parâmetros:__
> ```
> {
> 
> }
> ```
> __Resposta:__
> ```
> {
>        data: {}
> }
> ```

> ## _Listar todos os pedidos_
> ### GET 
> #### /pedidos
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>        data: []
> }
> ```

> ## _Inserir pedido_
> ### POST
> #### /pedidos
> __Parâmetros:__
> ```
> {
>   idCliente: "", #Numero| obrigatório
>   valorTotal: "", #Numero| obrigatório
>   itens:[{}] #Array de objetos| obrigatório
> }
> ```
> __Resposta:__
> ```
> {
>        data: {}
> }
> ```

> ## _Listar um pedido_
> ### GET
> #### /pedidos/<item_id>
> __Parâmetros:__
> ```
> {
> 
> }
> ```
> __Resposta:__
> ```
> {
>        data: {}
> }
> ```

> ## _Listar um pedido_
> ### PUT | PATCH
> #### /pedidos/<item_id>
> __Parâmetros:__
> ```
> {
>  status: "" #String | obrigatório
> }
> ```
> __Resposta:__
> ```
> {
>        data: {}
> }
> ```
