'use strict';

const bodyparser = require("body-parser");
const cors = require('cors');
const fetch = require('node-fetch');
const express = require('express');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('13e53703faca41e19cab7e7f46366014');
const {
    Translate
} = require('@google-cloud/translate').v2;
const translate = new Translate();
const {
    HostedModel
} = require('@runwayml/hosted-models');


const fs = require('fs');

const model = new HostedModel({
    url: 'https://gpt-2-9a3f8ee1.hosted-models.runwayml.cloud/v1/    ',
});

const app = express();
const port = process.env.PORT || 80;

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
console.log('yes');
app.use(cors());

app.get('/news', function(req, res) {
    res.send({ testerr: "aaaa" });
    /*   console.log('yes2');
      newsapi.v2.everything({
          q: 'covid OR corona',
          sortBy: 'publishedAt',
          pageSize: '2',
          language: 'en'
      }).then(response => {
          console.log('yes3');

          let counter = 0;

          let url = "";
          let concepts = {};

          async function query() {
              console.log('yes4');

              for (const article of response.articles) {
                  console.log('yes5');
                  counter++;

                  const inputs = {
                      prompt: article.description,
                      max_characters: 1024,
                      top_p: 0.9,
                      seed: 1000
                  };


                  inputs.prompt = inputs.prompt.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{​​​​\}​​​​\[\]\\\/]/gi, '');

                  console.log(inputs.prompt);

                  //   url = encodeURI(`https://api.textgain.com/concepts?q=${article.title}&key=602ce3a2bf16c230ee31911d`);

                  await model.query(
                      inputs
                  ).then(result => {
                      console.log("he")
                      if (result.encountered_end) {
                          console.log("the end");
                      }


                      console.log(counter);


                      article.newContent = result.generated_text;
                      if (counter === response.articles.length) {
                          console.log("here");
                          res.send(response);
                      }
                  });

              }
          }
          query();
      }); */
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});