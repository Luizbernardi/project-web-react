# Project Web React

Este é um projeto React configurado para ser executado em um contêiner Docker.

## Pré-requisitos

- Docker instalado na sua máquina

## Como iniciar o projeto

### Passo 1: Construir a imagem Docker

Navegue até o diretório raiz do projeto e execute o seguinte comando para construir a imagem Docker:

docker build -t react-web-atividade .

### Passo 2: run na imagem

docker run -p 8080:80 react-web-atividade

### Passo 3: acesso 

http://localhost:8080