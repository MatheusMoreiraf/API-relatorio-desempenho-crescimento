# API-relatorio-desempenho-crescimento utilizada no curso - Implementando APIs com Apigee + Node.js + Docker + Heroku

## API relatório de desempenho de crescimento da criança

### Link dos curso na plataforma udemy com um cupom de desconto
- link curso - \[ [https://www.udemy.com/implementando-apis-com-apigee-nodejs-docker-heroku/?couponCode=5P3C_0P3NAPI_5WAGG3](https://www.udemy.com/implementando-apis-com-apigee-nodejs-docker-heroku/?couponCode=5P3C_0P3NAPI_5WAGG3) \] com cupom de desconto

## Para executar o projeto
- Modo desenvolvimento - `npm run dev`
- Gerar build para fazer deploy no heroku - `npm run build`
- Definir os valores para as variáveis de ambiente usadas pela API  
    - `export PORT={PORTA_SERVIDOR}`
    - `export MONGODB_URI="mongodb://{URL_PORTA_BANCO_MONGODB}"`
    - `export DEBUG="API-relatorio-desempenho-crescimento"`
    - `export SECRET="{CHAVE_SECRETA_JWT}"`