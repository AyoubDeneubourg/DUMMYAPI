'use strict';

const bodyparser = require("body-parser");
const cors = require('cors');
const fetch = require('node-fetch');
const express = require('express');



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
    res.send({
        status: "ok",
        totalResults: 255191,
        articles: [{
                source: {
                    id: null,
                    name: "Business Insider South Africa"
                },
                author: null,
                title: "Businessinsider.co.za | SA is the first country to roll out Johnson & Johnson vaccine - what you need to know about the jab",
                description: "The vaccine has so far proved to be 100% effective in preventing death and hospitalisation due to Covid-19 - also in its South African trial.",
                keywords: ["test1", "test2", "test3", "test4", "test5", "test6", ],
                url: "https://www.businessinsider.co.za/covid-19-vaccine-johnson-johnson-what-we-know-2020-12",
                urlToImage: "http://cdn.24.co.za/files/Cms/General/d/7842/183c945bd6ad47ccbc27faece6708676.jpg",
                publishedAt: "2021-02-17T10:08:12Z",
                content: "<ul><li>On Wednesday, South Africa became the first country in the world to roll out the Johnson &amp; Johnson vaccine.</li><li>The vaccine has so far proved to be 100% effective in preventing death … [+4839 chars]",
                newContent: "The vaccine has so far proved to be 100. ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum  ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum "
            },
            {
                source: {
                    id: null,
                    name: "The Japan Times"
                },
                author: "Kaz Nagatsuka",
                title: "Japan, B. League in tough spot after cancellation of FIBA Asia Cup qualifying window",
                description: "Skipping the qualifiers — when they resume — altogether is not an option.",
                url: "https://www.japantimes.co.jp/sports/2021/02/17/basketball/japan-bleague-fiba-asia-cup/",
                urlToImage: "https://cdn-japantimes.com/wp-content/uploads/2021/02/np_file_70089-870x489.jpeg",
                publishedAt: "2021-02-17T10:07:48Z",
                content: "B. League Chairman Shinji Shimada says calling up players to the national team for the FIBA Asia Cup qualifiers during the B. League season has created a difficult situation for both his league and t… [+3914 chars]",
                newContent: "The vaccine has so far proved to be 100fgdpjgfdoigjdfoigijgiodt   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, doloremque. Accusamus dignissimos quaerat, at, corrupti consequuntur maxime minus itaque praesentium alias porro tempore sint. Amet, quos. Eum, dolore aut libero nulla deleniti repellat laudantium, unde rem, quisquam recusandae itaque iste dolores ea blanditiis reprehenderit pariatur distinctio? Esse delectus suscipit mollitia distinctio vel quam, quibusdam sit, quos perferendis doloribus voluptatum ex atque, cumque quasi incidunt. Ab laborum porro non corporis, nihil, ex reiciendis perferendis id aliquid dolore esse ullam odit molestias veniam neque impedit. Magnam, fuga? Nesciunt iste iusto voluptatem iure nam corporis enim provident minus odio at officia explicabo, deserunt rerum laudantium perspiciatis magnam, commodi repudiandae, ducimus eius a hic numquam natus. Ea sint incidunt eum cupiditate laboriosam temporibus excepturi eius nostrum eligendi magni delectus consequuntur veritatis, minima praesentium repellat ex blanditiis placeat, quas necessitatibus, labore pariatur omnis. Sapiente officia, inventore recusandae consectetur molestias aut, dolorem explicabo libero fugit odit quas, aspernatur accusamus quaerat facere vitae repellat. Repellat eveniet explicabo facilis alias, hic in dolores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum  ores reiciendis ipsam repudiandae harum et ad accusamus vel saepe optio atque natus iure dolorem laboriosam ab corrupti? Accusantium laboriosam, aspernatur architecto aliquam illo quaerat, nisi praesentium similique suscipit minima vel assumenda, consequuntur quod repellendus debitis error eligendi ducimus iste. Laboriosam, temporibus, aperiam quasi voluptatibus consequatur cupiditate corporis delectus voluptatem rerum praesentium ducimus quaerat provident pariatur rem corrupti molestiae? Repudiandae incidunt commodi quia fugiat eligendi similique aliquid. Voluptates sint libero consequuntur dolorum, omnis eius neque expedita mollitia fugiat nostrum ipsa nihil ullam ab facilis atque illo sunt ipsam illum accusantium modi perspiciatis corrupti porro enim! Eius minus quidem sit doloribus tempora amet, pariatur reiciendis! Ab, alias! Eveniet iusto, vitae possimus autem molestiae mollitia enim officiis, harum maxime aliquam sapiente eaque obcaecati fugiat velit! Nesciunt repellat aliquam cumque voluptate obcaecati distinctio dolorem iusto quas mollitia. Quasi corporis tempora repellendus porro, sint harum. Eos ratione consequuntur et repellat velit odit, ab aliquid molestias minima adipisci necessitatibus mollitia corrupti tenetur, blanditiis, voluptate ea perferendis nostrum quas quasi accusantium libero placeat est? Itaque enim molestiae maxime facere laborum blanditiis architecto pariatur fugit sunt non in fuga, at, reprehenderit ullam sit obcaecati distinctio ut cum maiores modi. Repellendus facere veniam nam quisquam, qui sed illum iure saepe odit labore consequatur quia quis pariatur molestiae, ipsam adipisci minus error. Dolorem beatae labore at laboriosam harum molestiae nulla commodi voluptatibus! Enim fugiat, deserunt nulla voluptatem expedita optio sint dolor libero atque molestiae ea velit ab pariatur similique quos illo dicta aut hic id omnis eius? Dolorum dolorem, nostrum, architecto temporibus asperiores aliquid ullam perferendis facere in ducimus vel! Incidunt, quia voluptates!"
            }
        ]
    });
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