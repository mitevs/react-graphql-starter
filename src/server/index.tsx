import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import { join } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import client from './graphql/client';
import App from './App';

const app = new Koa();
const router = new Router();

router.get('*', async ctx => {
   ctx.body = `
    <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <title>React SSR</title>
       </head>
       <body>
          <div id="app">${renderToString(<App ctx={ctx}></App>)}</div>
          <script>window.__APP_STATE__=${JSON.stringify(client.extract())}</script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/16.9.0/umd/react.production.min.js"></script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js"></script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.1/react-router-dom.min.js"></script>
          <script type="text/javascript" src="/public/client.js"></script>
       </body>
    </html>
    `;
});

app.use(mount('/public', serve(join(__dirname, '/public'))));
app.use(router.routes());
app.listen(3000, '0.0.0.0', () => console.log('running on port 3000'));
