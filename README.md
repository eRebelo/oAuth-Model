Google App Engine
==================

A aplicação é um modelo de autenticação e autorização usando o protocolo OAuth 2.0 para controle de acesso à um sistema.   

## Produtos
- [OAuth Model][1]

## Linguagens
- Java
- JavaScript (jQuery)
- HTML
- CSS

## APIs
- [Google Cloud Endpoints][2]
- [Google App Engine Maven plugin][3]

## IDE
- [IntelliJ][4]

## Execução

- Localhost:
    - $ clean install appengine:devserver
        - http://localhost:8080/
        - http://localhost:8080/_ah/api/explorer
        - http://localhost:8080/_ah/admin
- Servidor:
    - $ clean install appengine:update
        - https://oauthmodel.appspot.com

[1]: https://oauthmodel.appspot.com
[2]: https://developers.google.com/appengine/docs/java/endpoints/
[3]: https://developers.google.com/appengine/docs/java/tools/maven
[4]: https://www.jetbrains.com/idea/