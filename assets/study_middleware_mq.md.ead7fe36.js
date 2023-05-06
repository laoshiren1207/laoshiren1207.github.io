import{_ as i,o as a,c as e,a as t}from"./app.303cfecc.js";const o=JSON.parse('{"title":"\u6D88\u606F\u4E2D\u95F4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 \u4E3A\u4EC0\u4E48\u8981\u7528MQ","slug":"_1-1-\u4E3A\u4EC0\u4E48\u8981\u7528mq","link":"#_1-1-\u4E3A\u4EC0\u4E48\u8981\u7528mq","children":[]},{"level":2,"title":"1.2 MQ\u7684\u4F18\u70B9\u548C\u7F3A\u70B9","slug":"_1-2-mq\u7684\u4F18\u70B9\u548C\u7F3A\u70B9","link":"#_1-2-mq\u7684\u4F18\u70B9\u548C\u7F3A\u70B9","children":[]},{"level":2,"title":"1.3 \u5404\u79CDMQ\u4EA7\u54C1\u7684\u6BD4\u8F83","slug":"_1-3-\u5404\u79CDmq\u4EA7\u54C1\u7684\u6BD4\u8F83","link":"#_1-3-\u5404\u79CDmq\u4EA7\u54C1\u7684\u6BD4\u8F83","children":[]},{"level":2,"title":"Rabbitmq","slug":"rabbitmq","link":"#rabbitmq","children":[]},{"level":2,"title":"RocketMq","slug":"rocketmq","link":"#rocketmq","children":[]}],"relativePath":"study/middleware/mq.md","lastUpdated":1680763907000}'),p={name:"study/middleware/mq.md"},l=t('<h1 id="\u6D88\u606F\u4E2D\u95F4\u4EF6" tabindex="-1">\u6D88\u606F\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u6D88\u606F\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#_1-1-\u4E3A\u4EC0\u4E48\u8981\u7528mq">1.1 \u4E3A\u4EC0\u4E48\u8981\u7528MQ</a></li><li><a href="#_1-2-mq\u7684\u4F18\u70B9\u548C\u7F3A\u70B9">1.2 MQ\u7684\u4F18\u70B9\u548C\u7F3A\u70B9</a></li><li><a href="#_1-3-\u5404\u79CDmq\u4EA7\u54C1\u7684\u6BD4\u8F83">1.3 \u5404\u79CDMQ\u4EA7\u54C1\u7684\u6BD4\u8F83</a></li><li><a href="#rabbitmq">Rabbitmq</a></li><li><a href="#rocketmq">RocketMq</a></li></ul></nav><h2 id="_1-1-\u4E3A\u4EC0\u4E48\u8981\u7528mq" tabindex="-1">1.1 \u4E3A\u4EC0\u4E48\u8981\u7528MQ <a class="header-anchor" href="#_1-1-\u4E3A\u4EC0\u4E48\u8981\u7528mq" aria-hidden="true">#</a></h2><p>\u6D88\u606F\u961F\u5217\u662F\u4E00\u79CD\u201C\u5148\u8FDB\u5148\u51FA\u201D\u7684\u6570\u636E\u7ED3\u6784</p><p><img src="https://pic.img.ski/1666167319.png" alt="queue1.png"></p><p>\u5176\u5E94\u7528\u573A\u666F\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B3\u4E2A\u65B9\u9762</p><ul><li>\u5E94\u7528\u89E3\u8026</li></ul><p>\u7CFB\u7EDF\u7684\u8026\u5408\u6027\u8D8A\u9AD8\uFF0C\u5BB9\u9519\u6027\u5C31\u8D8A\u4F4E\u3002\u4EE5\u7535\u5546\u5E94\u7528\u4E3A\u4F8B\uFF0C\u7528\u6237\u521B\u5EFA\u8BA2\u5355\u540E\uFF0C\u5982\u679C\u8026\u5408\u8C03\u7528\u5E93\u5B58\u7CFB\u7EDF\u3001\u7269\u6D41\u7CFB\u7EDF\u3001\u652F\u4ED8\u7CFB\u7EDF\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u5B50\u7CFB\u7EDF\u51FA\u4E86\u6545\u969C\u6216\u8005\u56E0\u4E3A\u5347\u7EA7\u7B49\u539F\u56E0\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u90FD\u4F1A\u9020\u6210\u4E0B\u5355\u64CD\u4F5C\u5F02\u5E38\uFF0C\u5F71\u54CD\u7528\u6237\u4F7F\u7528\u4F53\u9A8C\u3002</p><p><img src="https://pic.img.ski/1666167355.png" alt="\u89E3\u80261.png"></p><p>\u4F7F\u7528\u6D88\u606F\u961F\u5217\u89E3\u8026\u5408\uFF0C\u7CFB\u7EDF\u7684\u8026\u5408\u6027\u5C31\u4F1A\u63D0\u9AD8\u4E86\u3002\u6BD4\u5982\u7269\u6D41\u7CFB\u7EDF\u53D1\u751F\u6545\u969C\uFF0C\u9700\u8981\u51E0\u5206\u949F\u624D\u80FD\u6765\u4FEE\u590D\uFF0C\u5728\u8FD9\u6BB5\u65F6\u95F4\u5185\uFF0C\u7269\u6D41\u7CFB\u7EDF\u8981\u5904\u7406\u7684\u6570\u636E\u88AB\u7F13\u5B58\u5230\u6D88\u606F\u961F\u5217\u4E2D\uFF0C\u7528\u6237\u7684\u4E0B\u5355\u64CD\u4F5C\u6B63\u5E38\u5B8C\u6210\u3002\u5F53\u7269\u6D41\u7CFB\u7EDF\u56DE\u590D\u540E\uFF0C\u8865\u5145\u5904\u7406\u5B58\u5728\u6D88\u606F\u961F\u5217\u4E2D\u7684\u8BA2\u5355\u6D88\u606F\u5373\u53EF\uFF0C\u7EC8\u7AEF\u7CFB\u7EDF\u611F\u77E5\u4E0D\u5230\u7269\u6D41\u7CFB\u7EDF\u53D1\u751F\u8FC7\u51E0\u5206\u949F\u6545\u969C\u3002</p><p><img src="https://pic.img.ski/1666167384.png" alt="\u89E3\u80262.png"></p><ul><li>\u6D41\u91CF\u524A\u5CF0</li></ul><p><img src="https://pic.img.ski/1666167405.png" alt="mq-5.png"></p><p>\u5E94\u7528\u7CFB\u7EDF\u5982\u679C\u9047\u5230\u7CFB\u7EDF\u8BF7\u6C42\u6D41\u91CF\u7684\u77AC\u95F4\u731B\u589E\uFF0C\u6709\u53EF\u80FD\u4F1A\u5C06\u7CFB\u7EDF\u538B\u57AE\u3002\u6709\u4E86\u6D88\u606F\u961F\u5217\u53EF\u4EE5\u5C06\u5927\u91CF\u8BF7\u6C42\u7F13\u5B58\u8D77\u6765\uFF0C\u5206\u6563\u5230\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\u5904\u7406\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5927\u5927\u63D0\u5230\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002</p><p><img src="https://pic.img.ski/1666167429.png" alt="mq-6.png"></p><p>\u4E00\u822C\u60C5\u51B5\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\uFF0C\u5982\u679C\u7CFB\u7EDF\u8D1F\u8F7D\u8D85\u8FC7\u9608\u503C\uFF0C\u5C31\u4F1A\u963B\u6B62\u7528\u6237\u8BF7\u6C42\uFF0C\u8FD9\u4F1A\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\uFF0C\u800C\u5982\u679C\u4F7F\u7528\u6D88\u606F\u961F\u5217\u5C06\u8BF7\u6C42\u7F13\u5B58\u8D77\u6765\uFF0C\u7B49\u5F85\u7CFB\u7EDF\u5904\u7406\u5B8C\u6BD5\u540E\u901A\u77E5\u7528\u6237\u4E0B\u5355\u5B8C\u6BD5\uFF0C\u8FD9\u6837\u603B\u4E0D\u80FD\u4E0B\u5355\u4F53\u9A8C\u8981\u597D\u3002</p><p><u>\u5904\u4E8E\u7ECF\u6D4E\u8003\u91CF\u76EE\u7684\uFF1A</u></p><p>\u4E1A\u52A1\u7CFB\u7EDF\u6B63\u5E38\u65F6\u6BB5\u7684QPS\u5982\u679C\u662F1000\uFF0C\u6D41\u91CF\u6700\u9AD8\u5CF0\u662F10000\uFF0C\u4E3A\u4E86\u5E94\u5BF9\u6D41\u91CF\u9AD8\u5CF0\u914D\u7F6E\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u5668\u663E\u7136\u4E0D\u5212\u7B97\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528\u6D88\u606F\u961F\u5217\u5BF9\u5CF0\u503C\u6D41\u91CF\u524A\u5CF0</p><ul><li>\u6570\u636E\u5206\u53D1</li></ul><p><img src="https://pic.img.ski/1666167452.png" alt="mq-1.png"></p><p>\u901A\u8FC7\u6D88\u606F\u961F\u5217\u53EF\u4EE5\u8BA9\u6570\u636E\u5728\u591A\u4E2A\u7CFB\u7EDF\u66F4\u52A0\u4E4B\u95F4\u8FDB\u884C\u6D41\u901A\u3002\u6570\u636E\u7684\u4EA7\u751F\u65B9\u4E0D\u9700\u8981\u5173\u5FC3\u8C01\u6765\u4F7F\u7528\u6570\u636E\uFF0C\u53EA\u9700\u8981\u5C06\u6570\u636E\u53D1\u9001\u5230\u6D88\u606F\u961F\u5217\uFF0C\u6570\u636E\u4F7F\u7528\u65B9\u76F4\u63A5\u5728\u6D88\u606F\u961F\u5217\u4E2D\u76F4\u63A5\u83B7\u53D6\u6570\u636E\u5373\u53EF</p><p><img src="https://pic.img.ski/1666167473.png" alt="mq-2.png"></p><h2 id="_1-2-mq\u7684\u4F18\u70B9\u548C\u7F3A\u70B9" tabindex="-1">1.2 MQ\u7684\u4F18\u70B9\u548C\u7F3A\u70B9 <a class="header-anchor" href="#_1-2-mq\u7684\u4F18\u70B9\u548C\u7F3A\u70B9" aria-hidden="true">#</a></h2><p>\u4F18\u70B9\uFF1A\u89E3\u8026\u3001\u524A\u5CF0\u3001\u6570\u636E\u5206\u53D1</p><p>\u7F3A\u70B9\u5305\u542B\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ul><li><p>\u7CFB\u7EDF\u53EF\u7528\u6027\u964D\u4F4E</p><p>\u7CFB\u7EDF\u5F15\u5165\u7684\u5916\u90E8\u4F9D\u8D56\u8D8A\u591A\uFF0C\u7CFB\u7EDF\u7A33\u5B9A\u6027\u8D8A\u5DEE\u3002\u4E00\u65E6MQ\u5B95\u673A\uFF0C\u5C31\u4F1A\u5BF9\u4E1A\u52A1\u9020\u6210\u5F71\u54CD\u3002</p><p>\u5982\u4F55\u4FDD\u8BC1MQ\u7684\u9AD8\u53EF\u7528\uFF1F</p></li><li><p>\u7CFB\u7EDF\u590D\u6742\u5EA6\u63D0\u9AD8</p><p>MQ\u7684\u52A0\u5165\u5927\u5927\u589E\u52A0\u4E86\u7CFB\u7EDF\u7684\u590D\u6742\u5EA6\uFF0C\u4EE5\u524D\u7CFB\u7EDF\u95F4\u662F\u540C\u6B65\u7684\u8FDC\u7A0B\u8C03\u7528\uFF0C\u73B0\u5728\u662F\u901A\u8FC7MQ\u8FDB\u884C\u5F02\u6B65\u8C03\u7528\u3002</p><p>\u5982\u4F55\u4FDD\u8BC1\u6D88\u606F\u6CA1\u6709\u88AB\u91CD\u590D\u6D88\u8D39\uFF1F\u600E\u4E48\u5904\u7406\u6D88\u606F\u4E22\u5931\u60C5\u51B5\uFF1F\u90A3\u4E48\u4FDD\u8BC1\u6D88\u606F\u4F20\u9012\u7684\u987A\u5E8F\u6027\uFF1F</p></li><li><p>\u4E00\u81F4\u6027\u95EE\u9898</p><p>A\u7CFB\u7EDF\u5904\u7406\u5B8C\u4E1A\u52A1\uFF0C\u901A\u8FC7MQ\u7ED9B\u3001C\u3001D\u4E09\u4E2A\u7CFB\u7EDF\u53D1\u6D88\u606F\u6570\u636E\uFF0C\u5982\u679CB\u7CFB\u7EDF\u3001C\u7CFB\u7EDF\u5904\u7406\u6210\u529F\uFF0CD\u7CFB\u7EDF\u5904\u7406\u5931\u8D25\u3002</p><p>\u5982\u4F55\u4FDD\u8BC1\u6D88\u606F\u6570\u636E\u5904\u7406\u7684\u4E00\u81F4\u6027\uFF1F</p></li></ul><h2 id="_1-3-\u5404\u79CDmq\u4EA7\u54C1\u7684\u6BD4\u8F83" tabindex="-1">1.3 \u5404\u79CDMQ\u4EA7\u54C1\u7684\u6BD4\u8F83 <a class="header-anchor" href="#_1-3-\u5404\u79CDmq\u4EA7\u54C1\u7684\u6BD4\u8F83" aria-hidden="true">#</a></h2><p>\u5E38\u89C1\u7684MQ\u4EA7\u54C1\u5305\u62ECKafka\u3001ActiveMQ\u3001RabbitMQ\u3001RocketMQ\u3002</p><p><img src="https://pic.img.ski/1666167501.png" alt="MQ\u6BD4\u8F83.png"></p><h2 id="rabbitmq" tabindex="-1">Rabbitmq <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h2><p><a href="./../../mq/rabbit/rabbitmq.html">\u5F00\u59CB\u5B66\u4E60</a></p><h2 id="rocketmq" tabindex="-1">RocketMq <a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a></h2><p><a href="./../../mq/rocket/rocketmq.html">\u5F00\u59CB\u5B66\u4E60</a></p>',33),r=[l];function s(m,c,n,h,d,q){return a(),e("div",null,r)}const g=i(p,[["render",s]]);export{o as __pageData,g as default};
