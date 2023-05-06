import{_ as e,o as a,c as o,a as l}from"./app.303cfecc.js";const L=JSON.parse('{"title":"11 | NoSQL\uFF1A\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u6570\u636E\u5E93\u548CNoSQL\u5982\u4F55\u505A\u5230\u4E92\u8865\uFF1F","description":"","frontmatter":{},"headers":[{"level":3,"title":"NoSQL\uFF0CNo SQL\uFF1F","slug":"nosql-no-sql","link":"#nosql-no-sql","children":[]},{"level":3,"title":"\u4F7F\u7528 NoSQL \u63D0\u5347\u5199\u5165\u6027\u80FD","slug":"\u4F7F\u7528-nosql-\u63D0\u5347\u5199\u5165\u6027\u80FD","link":"#\u4F7F\u7528-nosql-\u63D0\u5347\u5199\u5165\u6027\u80FD","children":[]},{"level":3,"title":"\u573A\u666F\u8865\u5145","slug":"\u573A\u666F\u8865\u5145","link":"#\u573A\u666F\u8865\u5145","children":[]},{"level":3,"title":"\u63D0\u5347\u6269\u5C55\u6027","slug":"\u63D0\u5347\u6269\u5C55\u6027","link":"#\u63D0\u5347\u6269\u5C55\u6027","children":[]},{"level":3,"title":"\u8BFE\u7A0B\u5C0F\u7ED3","slug":"\u8BFE\u7A0B\u5C0F\u7ED3","link":"#\u8BFE\u7A0B\u5C0F\u7ED3","children":[]},{"level":3,"title":"\u4E00\u8BFE\u4E00\u601D","slug":"\u4E00\u8BFE\u4E00\u601D","link":"#\u4E00\u8BFE\u4E00\u601D","children":[]}],"relativePath":"0002/02\u6F14\u8FDB-\u6570\u636E\u5E93/11-NoSQL\uFF1A\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u6570\u636E\u5E93\u548CNoSQL\u5982\u4F55\u505A\u5230\u4E92\u8865\uFF1F.md","lastUpdated":1680763907000}'),r={name:"0002/02\u6F14\u8FDB-\u6570\u636E\u5E93/11-NoSQL\uFF1A\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u6570\u636E\u5E93\u548CNoSQL\u5982\u4F55\u505A\u5230\u4E92\u8865\uFF1F.md"},i=l('<h1 id="_11-nosql-\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B-\u6570\u636E\u5E93\u548Cnosql\u5982\u4F55\u505A\u5230\u4E92\u8865" tabindex="-1">11 | NoSQL\uFF1A\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u6570\u636E\u5E93\u548CNoSQL\u5982\u4F55\u505A\u5230\u4E92\u8865\uFF1F <a class="header-anchor" href="#_11-nosql-\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B-\u6570\u636E\u5E93\u548Cnosql\u5982\u4F55\u505A\u5230\u4E92\u8865" aria-hidden="true">#</a></h1><p>\u524D\u51E0\u8282\u8BFE\uFF0C\u6211\u5E26\u4F60\u4E86\u89E3\u4E86\u5728\u4F60\u7684\u5782\u76F4\u7535\u5546\u9879\u76EE\u4E2D\uFF0C\u5982\u4F55\u5C06\u4F20\u7EDF\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6539\u9020\u6210\u5206\u5E03\u5F0F\u5B58\u50A8\u670D\u52A1\uFF0C\u4EE5\u62B5\u6297\u9AD8\u5E76\u53D1\u548C\u5927\u6D41\u91CF\u7684\u51B2\u51FB\u3002</p><p>\u5BF9\u4E8E\u5B58\u50A8\u670D\u52A1\u6765\u8BF4\uFF0C\u6211\u4EEC\u4E00\u822C\u4F1A\u4ECE\u4E24\u4E2A\u65B9\u9762\u5BF9\u5B83\u505A\u6539\u9020\uFF1A</p><ol><li>\u63D0\u5347\u5B83\u7684\u8BFB\u5199\u6027\u80FD\uFF0C\u5C24\u5176\u662F\u8BFB\u6027\u80FD\uFF0C\u56E0\u4E3A\u6211\u4EEC\u9762\u5BF9\u7684\u591A\u662F\u4E00\u4E9B\u8BFB\u591A\u5199\u5C11\u7684\u4EA7\u54C1\u3002\u6BD4\u65B9\u8BF4\uFF0C\u4F60\u79BB\u4E0D\u5F00\u7684\u5FAE\u4FE1\u670B\u53CB\u5708\u3001\u5FAE\u535A\u548C\u6DD8\u5B9D\uFF0C\u90FD\u662F\u67E5\u8BE2 QPS \u8FDC\u8FDC\u5927\u4E8E\u5199\u5165 QPS\u3002</li><li>\u589E\u5F3A\u5B83\u5728\u5B58\u50A8\u4E0A\u7684\u6269\u5C55\u80FD\u529B\uFF0C\u4ECE\u800C\u5E94\u5BF9\u5927\u6570\u636E\u91CF\u7684\u5B58\u50A8\u9700\u6C42\u3002</li></ol><p>\u6211\u4E4B\u524D\u5E26\u4F60\u5B66\u4E60\u7684\u8BFB\u5199\u5206\u79BB\u548C\u5206\u5E93\u5206\u8868\u5C31\u662F\u4ECE\u8FD9\u4E24\u65B9\u9762\u51FA\u53D1\uFF0C\u6539\u9020\u4F20\u7EDF\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\uFF0C\u4F46\u4ECD\u6709\u4E00\u4E9B\u95EE\u9898\u65E0\u6CD5\u89E3\u51B3\u3002</p><p>\u6BD4\u5982\uFF0C\u5728\u5FAE\u535A\u9879\u76EE\u4E2D\u5173\u7CFB\u7684\u6570\u636E\u91CF\u8FBE\u5230\u4E86\u5343\u4EBF\uFF0C\u90A3\u4E48\u5373\u4F7F\u5206\u9694\u6210 1024 \u4E2A\u5E93\u8868\uFF0C\u6BCF\u5F20\u8868\u7684\u6570\u636E\u91CF\u4E5F\u8FBE\u5230\u4E86\u4EBF\u7EA7\u522B\uFF0C\u5E76\u4E14\u5173\u7CFB\u7684\u6570\u636E\u91CF\u8FD8\u5728\u4EE5\u6781\u5FEB\u7684\u901F\u5EA6\u589E\u52A0\uFF0C\u5373\u4F7F\u4F60\u5206\u9694\u6210\u518D\u591A\u7684\u5E93\u8868\uFF0C\u6570\u636E\u91CF\u4E5F\u4F1A\u5F88\u5FEB\u589E\u52A0\u5230\u74F6\u9888\u3002\u8FD9\u4E2A\u95EE\u9898\u7528\u4F20\u7EDF\u6570\u636E\u5E93\u5F88\u96BE\u6839\u672C\u89E3\u51B3\uFF0C\u56E0\u4E3A\u5B83\u5728\u6269\u5C55\u6027\u65B9\u9762\u662F\u5F88\u5F31\u7684\uFF0C\u8FD9\u65F6\uFF0C\u5C31\u53EF\u4EE5\u5229\u7528 NoSQL\uFF0C\u56E0\u4E3A\u5B83\u6709\u7740\u5929\u751F\u5206\u5E03\u5F0F\u7684\u80FD\u529B\uFF0C\u80FD\u591F\u63D0\u4F9B\u4F18\u79C0\u7684\u8BFB\u5199\u6027\u80FD\uFF0C\u53EF\u4EE5\u5F88\u597D\u5730\u8865\u5145\u4F20\u7EDF\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u77ED\u677F\u3002\u90A3\u4E48\u5B83\u662F\u5982\u4F55\u505A\u5230\u7684\u5462\uFF1F</p><p>\u8FD9\u8282\u8BFE\uFF0C\u6211\u5C31\u8FD8\u662F\u4EE5\u4F60\u7684\u5782\u76F4\u7535\u5546\u7CFB\u7EDF\u4E3A\u4F8B\uFF0C\u5E26\u4F60\u638C\u63E1\u5982\u4F55\u7528 NoSQL \u6570\u636E\u5E93\u548C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E92\u8865\uFF0C\u5171\u540C\u627F\u62C5\u9AD8\u5E76\u53D1\u548C\u5927\u6D41\u91CF\u7684\u51B2\u51FB\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B NoSQL \u6570\u636E\u5E93\u3002</p><h3 id="nosql-no-sql" tabindex="-1">NoSQL\uFF0CNo SQL\uFF1F <a class="header-anchor" href="#nosql-no-sql" aria-hidden="true">#</a></h3><p>NoSQL \u60F3\u5FC5\u4F60\u5F88\u719F\u6089\uFF0C\u5B83\u6307\u7684\u662F\u4E0D\u540C\u4E8E\u4F20\u7EDF\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u5176\u4ED6\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u7EDF\u79F0\uFF0C\u5B83\u4E0D\u4F7F\u7528 SQL \u4F5C\u4E3A\u67E5\u8BE2\u8BED\u8A00\uFF0C\u63D0\u4F9B\u4F18\u79C0\u7684\u6A2A\u5411\u6269\u5C55\u80FD\u529B\u548C\u8BFB\u5199\u6027\u80FD\uFF0C\u975E\u5E38\u5951\u5408\u4E92\u8054\u7F51\u9879\u76EE\u9AD8\u5E76\u53D1\u5927\u6570\u636E\u7684\u7279\u70B9\u3002\u6240\u4EE5\u4E00\u4E9B\u5927\u5382\uFF0C\u6BD4\u5982\u5C0F\u7C73\u3001\u5FAE\u535A\u3001\u964C\u964C\u90FD\u5F88\u503E\u5411\u4F7F\u7528\u5B83\u6765\u4F5C\u4E3A\u9AD8\u5E76\u53D1\u5927\u5BB9\u91CF\u7684\u6570\u636E\u5B58\u50A8\u670D\u52A1\u3002</p><p>NoSQL \u6570\u636E\u5E93\u53D1\u5C55\u5230\u73B0\u5728\uFF0C\u5341\u51E0\u5E74\u95F4\uFF0C\u51FA\u73B0\u4E86\u591A\u79CD\u7C7B\u578B\uFF0C\u6211\u6765\u7ED9\u4F60\u4E3E\u51E0\u4E2A\u4F8B\u5B50\uFF1A</p><ul><li>Redis\u3001LevelDB \u8FD9\u6837\u7684 KV \u5B58\u50A8\u3002\u8FD9\u7C7B\u5B58\u50A8\u76F8\u6BD4\u4E8E\u4F20\u7EDF\u7684\u6570\u636E\u5E93\u7684\u4F18\u52BF\u662F\u6781\u9AD8\u7684\u8BFB\u5199\u6027\u80FD\uFF0C\u4E00\u822C\u5BF9\u6027\u80FD\u6709\u6BD4\u8F83\u9AD8\u7684\u8981\u6C42\u7684\u573A\u666F\u4F1A\u4F7F\u7528\u3002</li><li>Hbase\u3001Cassandra \u8FD9\u6837\u7684\u5217\u5F0F\u5B58\u50A8\u6570\u636E\u5E93\u3002\u8FD9\u79CD\u6570\u636E\u5E93\u7684\u7279\u70B9\u662F\u6570\u636E\u4E0D\u50CF\u4F20\u7EDF\u6570\u636E\u5E93\u4EE5\u884C\u4E3A\u5355\u4F4D\u6765\u5B58\u50A8\uFF0C\u800C\u662F\u4EE5\u5217\u6765\u5B58\u50A8\uFF0C\u9002\u7528\u4E8E\u4E00\u4E9B\u79BB\u7EBF\u6570\u636E\u7EDF\u8BA1\u7684\u573A\u666F\u3002</li><li>\u50CF MongoDB\u3001CouchDB \u8FD9\u6837\u7684\u6587\u6863\u578B\u6570\u636E\u5E93\u3002\u8FD9\u79CD\u6570\u636E\u5E93\u7684\u7279\u70B9\u662F Schema Free\uFF08\u6A21\u5F0F\u81EA\u7531\uFF09\uFF0C\u6570\u636E\u8868\u4E2D\u7684\u5B57\u6BB5\u53EF\u4EE5\u4EFB\u610F\u6269\u5C55\uFF0C\u6BD4\u5982\u8BF4\u7535\u5546\u7CFB\u7EDF\u4E2D\u7684\u5546\u54C1\u6709\u975E\u5E38\u591A\u7684\u5B57\u6BB5\uFF0C\u5E76\u4E14\u4E0D\u540C\u54C1\u7C7B\u7684\u5546\u54C1\u7684\u5B57\u6BB5\u4E5F\u90FD\u4E0D\u5C3D\u76F8\u540C\uFF0C\u4F7F\u7528\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5C31\u9700\u8981\u4E0D\u65AD\u589E\u52A0\u5B57\u6BB5\u652F\u6301\uFF0C\u800C\u7528\u6587\u6863\u578B\u6570\u636E\u5E93\u5C31\u7B80\u5355\u5F88\u591A\u4E86\u3002</li></ul><p>\u5728 NoSQL \u6570\u636E\u5E93\u521A\u521A\u88AB\u5E94\u7528\u65F6\uFF0C\u5B83\u88AB\u8BA4\u4E3A\u662F\u53EF\u4EE5\u66FF\u4EE3\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u94F6\u5F39\uFF0C\u5728\u6211\u770B\u6765\uFF0C\u4E5F\u8BB8\u56E0\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\u7684\u539F\u56E0\uFF1A</p><ul><li>\u5F25\u8865\u4E86\u4F20\u7EDF\u6570\u636E\u5E93\u5728\u6027\u80FD\u65B9\u9762\u7684\u4E0D\u8DB3\uFF1B</li><li>\u6570\u636E\u5E93\u53D8\u66F4\u65B9\u4FBF\uFF0C\u4E0D\u9700\u8981\u66F4\u6539\u539F\u5148\u7684\u6570\u636E\u7ED3\u6784\uFF1B</li><li>\u9002\u5408\u4E92\u8054\u7F51\u9879\u76EE\u5E38\u89C1\u7684\u5927\u6570\u636E\u91CF\u7684\u573A\u666F\uFF1B</li></ul><p>\u4E0D\u8FC7\uFF0C\u8FD9\u79CD\u770B\u6CD5\u662F\u4E2A\u8BEF\u533A\uFF0C\u56E0\u4E3A\u6162\u6162\u5730\u6211\u4EEC\u53D1\u73B0\u5728\u4E1A\u52A1\u5F00\u53D1\u7684\u573A\u666F\u4E0B\u8FD8\u662F\u9700\u8981\u5229\u7528 SQL \u8BED\u53E5\u7684\u5F3A\u5927\u7684\u67E5\u8BE2\u529F\u80FD\u4EE5\u53CA\u4F20\u7EDF\u6570\u636E\u5E93\u4E8B\u52A1\u548C\u7075\u6D3B\u7684\u7D22\u5F15\u7B49\u529F\u80FD\uFF0CNoSQL \u53EA\u80FD\u4F5C\u4E3A\u4E00\u4E9B\u573A\u666F\u7684\u8865\u5145\u3002</p><p>\u90A3\u4E48\u63A5\u4E0B\u6765\uFF0C\u6211\u5C31\u5E26\u4F60<strong>\u4E86\u89E3 NoSQL \u6570\u636E\u5E93\u662F\u5982\u4F55\u505A\u5230\u4E0E\u5173\u7CFB\u6570\u636E\u5E93\u4E92\u8865\u7684</strong>\u3002\u4E86\u89E3\u8FD9\u90E8\u5206\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u66F4\u597D\u5730\u4F7F\u7528 NoSQL \u6570\u636E\u5E93\u8865\u5145\u4F20\u7EDF\u6570\u636E\u5E93\u7684\u4E0D\u8DB3\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u6765\u5173\u6CE8\u4E00\u4E0B\u6570\u636E\u5E93\u7684\u5199\u5165\u6027\u80FD\u3002</p><h3 id="\u4F7F\u7528-nosql-\u63D0\u5347\u5199\u5165\u6027\u80FD" tabindex="-1">\u4F7F\u7528 NoSQL \u63D0\u5347\u5199\u5165\u6027\u80FD <a class="header-anchor" href="#\u4F7F\u7528-nosql-\u63D0\u5347\u5199\u5165\u6027\u80FD" aria-hidden="true">#</a></h3><p>\u6570\u636E\u5E93\u7CFB\u7EDF\u5927\u591A\u4F7F\u7528\u7684\u662F\u4F20\u7EDF\u7684\u673A\u68B0\u78C1\u76D8\uFF0C\u5BF9\u4E8E\u673A\u68B0\u78C1\u76D8\u7684\u8BBF\u95EE\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u4E00\u79CD\u662F\u968F\u673A IO\uFF1B\u53E6\u4E00\u79CD\u662F\u987A\u5E8F IO\u3002\u968F\u673A IO \u5C31\u9700\u8981\u82B1\u8D39\u65F6\u95F4\u505A\u6602\u8D35\u7684\u78C1\u76D8\u5BFB\u9053\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u5B83\u7684\u8BFB\u5199\u6548\u7387\u8981\u6BD4\u987A\u5E8F IO \u5C0F\u4E24\u5230\u4E09\u4E2A\u6570\u91CF\u7EA7\uFF0C\u6240\u4EE5\u6211\u4EEC\u60F3\u8981\u63D0\u5347\u5199\u5165\u7684\u6027\u80FD\u5C31\u8981\u5C3D\u91CF\u51CF\u5C11\u968F\u673A IO\u3002</p><p>\u4EE5 MySQL \u7684 InnoDB \u5B58\u50A8\u5F15\u64CE\u6765\u8BF4\uFF0C\u66F4\u65B0 binlog\u3001redolog\u3001undolog \u90FD\u662F\u5728\u505A\u987A\u5E8F IO\uFF0C\u800C\u66F4\u65B0 datafile \u548C\u7D22\u5F15\u6587\u4EF6\u5219\u662F\u5728\u505A\u968F\u673A IO\uFF0C\u800C\u4E3A\u4E86\u51CF\u5C11\u968F\u673A IO \u7684\u53D1\u751F\uFF0C\u5173\u7CFB\u6570\u636E\u5E93\u5DF2\u7ECF\u505A\u4E86\u5F88\u591A\u7684\u4F18\u5316\uFF0C\u6BD4\u5982\u8BF4\u5199\u5165\u65F6\u5148\u5199\u5165\u5185\u5B58\uFF0C\u7136\u540E\u6279\u91CF\u5237\u65B0\u5230\u78C1\u76D8\u4E0A\uFF0C\u4F46\u662F\u968F\u673A IO \u8FD8\u662F\u4F1A\u53D1\u751F\u3002</p><p>\u7D22\u5F15\u5728 InnoDB \u5F15\u64CE\u4E2D\u662F\u4EE5 B+ \u6811\uFF08\u4E0A\u4E00\u8282\u8BFE\u63D0\u5230\u4E86 B+ \u6811\uFF0C\u4F60\u53EF\u4EE5\u56DE\u987E\u4E00\u4E0B\uFF09\u65B9\u5F0F\u6765\u7EC4\u7EC7\u7684\uFF0C\u800C MySQL \u4E3B\u952E\u662F\u805A\u7C07\u7D22\u5F15\uFF08\u4E00\u79CD\u7D22\u5F15\u7C7B\u578B\uFF0C\u6570\u636E\u4E0E\u7D22\u5F15\u6570\u636E\u653E\u5728\u4E00\u8D77\uFF09\uFF0C\u65E2\u7136\u6570\u636E\u548C\u7D22\u5F15\u6570\u636E\u653E\u5728\u4E00\u8D77\uFF0C\u90A3\u4E48\u5728\u6570\u636E\u63D2\u5165\u6216\u8005\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u5230\u8981\u63D2\u5165\u7684\u4F4D\u7F6E\uFF0C\u518D\u628A\u6570\u636E\u5199\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E\u4E0A\uFF0C\u8FD9\u5C31\u4EA7\u751F\u4E86\u968F\u673A\u7684 IO\u3002\u800C\u4E14\u4E00\u65E6\u53D1\u751F\u4E86\u9875\u5206\u88C2\uFF0C\u5C31\u4E0D\u53EF\u907F\u514D\u4F1A\u505A\u6570\u636E\u7684\u79FB\u52A8\uFF0C\u4E5F\u4F1A\u6781\u5927\u5730\u635F\u8017\u5199\u5165\u6027\u80FD\u3002</p><p><strong>NoSQL \u6570\u636E\u5E93\u662F\u600E\u4E48\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u5462\uFF1F</strong></p><p>\u5B83\u4EEC\u6709\u591A\u79CD\u7684\u89E3\u51B3\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u6211\u7ED9\u4F60\u8BB2\u4E00\u79CD\u6700\u5E38\u89C1\u7684\u65B9\u6848\uFF0C\u5C31\u662F\u5F88\u591A NoSQL \u6570\u636E\u5E93\u90FD\u5728\u4F7F\u7528\u7684\u57FA\u4E8E LSM \u6811\u7684\u5B58\u50A8\u5F15\u64CE\uFF0C\u8FD9\u79CD\u7B97\u6CD5\u4F7F\u7528\u6700\u591A\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u7740\u91CD\u5256\u6790\u4E00\u4E0B\u3002</p><p>LSM \u6811\uFF08Log-Structured Merge Tree\uFF09\u727A\u7272\u4E86\u4E00\u5B9A\u7684\u8BFB\u6027\u80FD\u6765\u6362\u53D6\u5199\u5165\u6570\u636E\u7684\u9AD8\u6027\u80FD\uFF0CHbase\u3001Cassandra\u3001LevelDB \u90FD\u662F\u7528\u8FD9\u79CD\u7B97\u6CD5\u4F5C\u4E3A\u5B58\u50A8\u7684\u5F15\u64CE\u3002</p><p>\u5B83\u7684\u601D\u60F3\u5F88\u7B80\u5355\uFF0C\u6570\u636E\u9996\u5148\u4F1A\u5199\u5165\u5230\u4E00\u4E2A\u53EB\u505A MemTable \u7684\u5185\u5B58\u7ED3\u6784\u4E2D\uFF0C\u5728 MemTable \u4E2D\u6570\u636E\u662F\u6309\u7167\u5199\u5165\u7684 Key \u6765\u6392\u5E8F\u7684\u3002\u4E3A\u4E86\u9632\u6B62 MemTable \u91CC\u9762\u7684\u6570\u636E\u56E0\u4E3A\u673A\u5668\u6389\u7535\u6216\u8005\u91CD\u542F\u800C\u4E22\u5931\uFF0C\u4E00\u822C\u4F1A\u901A\u8FC7\u5199 Write Ahead Log \u7684\u65B9\u5F0F\u5C06\u6570\u636E\u5907\u4EFD\u5728\u78C1\u76D8\u4E0A\u3002</p><p>MemTable \u5728\u7D2F\u79EF\u5230\u4E00\u5B9A\u89C4\u6A21\u65F6\uFF0C\u5B83\u4F1A\u88AB\u5237\u65B0\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A\u6587\u4EF6\u53EB\u505A SSTable\uFF08Sorted String Table\uFF09\u3002\u5F53 SSTable \u8FBE\u5230\u4E00\u5B9A\u6570\u91CF\u65F6\uFF0C\u6211\u4EEC\u4F1A\u5C06\u8FD9\u4E9B SSTable \u5408\u5E76\uFF0C\u51CF\u5C11\u6587\u4EF6\u7684\u6570\u91CF\uFF0C\u56E0\u4E3A SSTable \u90FD\u662F\u6709\u5E8F\u7684\uFF0C\u6240\u4EE5\u5408\u5E76\u7684\u901F\u5EA6\u4E5F\u5F88\u5FEB\u3002</p><p>\u5F53\u4ECE LSM \u6811\u91CC\u9762\u8BFB\u6570\u636E\u65F6\uFF0C\u6211\u4EEC\u9996\u5148\u4ECE MemTable \u4E2D\u67E5\u627E\u6570\u636E\uFF0C\u5982\u679C\u6570\u636E\u6CA1\u6709\u627E\u5230\uFF0C\u518D\u4ECE SSTable \u4E2D\u67E5\u627E\u6570\u636E\u3002\u56E0\u4E3A\u5B58\u50A8\u7684\u6570\u636E\u90FD\u662F\u6709\u5E8F\u7684\uFF0C\u6240\u4EE5\u67E5\u627E\u7684\u6548\u7387\u662F\u5F88\u9AD8\u7684\uFF0C\u53EA\u662F\u56E0\u4E3A\u6570\u636E\u88AB\u62C6\u5206\u6210\u591A\u4E2A SSTable\uFF0C\u6240\u4EE5\u8BFB\u53D6\u7684\u6548\u7387\u4F1A\u4F4E\u4E8E B+ \u6811\u7D22\u5F15\u3002</p><p><img src="https://static001.geekbang.org/resource/image/b4/eb/b4c9c93f22edae091740fa1606d109eb.jpg?wh=1142*652" alt=""></p><p>\u548C LSM \u6811\u7C7B\u4F3C\u7684\u7B97\u6CD5\u6709\u5F88\u591A\uFF0C\u6BD4\u5982\u8BF4 TokuDB \u4F7F\u7528\u7684\u540D\u4E3A Fractal tree \u7684\u7D22\u5F15\u7ED3\u6784\uFF0C\u5B83\u4EEC\u7684\u6838\u5FC3\u601D\u60F3\u5C31\u662F\u5C06\u968F\u673A IO \u53D8\u6210\u987A\u5E8F\u7684 IO\uFF0C\u4ECE\u800C\u63D0\u5347\u5199\u5165\u7684\u6027\u80FD\u3002</p><p>\u5728\u540E\u9762\u7684\u7F13\u5B58\u7BC7\u4E2D\uFF0C\u6211\u4E5F\u5C06\u7ED9\u4F60\u7740\u91CD\u4ECB\u7ECD\u6211\u4EEC\u662F\u5982\u4F55\u4F7F\u7528 KV \u578B NoSQL \u5B58\u50A8\u6765\u63D0\u5347\u8BFB\u6027\u80FD\u7684\u3002\u6240\u4EE5\u4F60\u770B\uFF0CNoSQL \u6570\u636E\u5E93\u8865\u5145\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u7B2C\u4E00\u79CD\u65B9\u5F0F\u5C31\u662F\u63D0\u5347\u8BFB\u5199\u6027\u80FD\u3002</p><h3 id="\u573A\u666F\u8865\u5145" tabindex="-1">\u573A\u666F\u8865\u5145 <a class="header-anchor" href="#\u573A\u666F\u8865\u5145" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u53EF\u4EE5\u63D0\u5347\u6027\u80FD\u4E4B\u5916\uFF0CNoSQL \u6570\u636E\u5E93\u8FD8\u53EF\u4EE5\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u4F5C\u4E3A\u4F20\u7EDF\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u8865\u5145\uFF0C\u6765\u770B\u4E00\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\u3002</p><p>\u5047\u8BBE\u67D0\u4E00\u5929\uFF0CCEO \u627E\u5230\u4F60\u5E76\u4E14\u544A\u8BC9\u4F60\uFF0C\u4ED6\u6B63\u5728\u4E3A\u4F60\u7684\u5782\u76F4\u7535\u5546\u9879\u76EE\u89C4\u5212\u641C\u7D22\u7684\u529F\u80FD\uFF0C\u9700\u8981\u652F\u6301\u6309\u7167\u5546\u54C1\u7684\u540D\u79F0\u6A21\u7CCA\u641C\u7D22\u5230\u5BF9\u5E94\u7684\u5546\u54C1\uFF0C\u5E0C\u671B\u4F60\u5C3D\u5FEB\u8C03\u7814\u51FA\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u4E00\u5F00\u59CB\uFF0C\u4F60\u8BA4\u4E3A\u8FD9\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u4E0D\u5C31\u662F\u5728\u6570\u636E\u5E93\u91CC\u9762\u6267\u884C\u4E00\u6761\u7C7B\u4F3C\uFF1A\u201Cselect * from product where name like \u2018%***%\u2019\u201D\u7684\u8BED\u53E5\u5417\uFF1F\u53EF\u662F\u5728\u5B9E\u9645\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5374\u53D1\u73B0\u4E86\u95EE\u9898\u3002</p><p>\u4F60\u53D1\u73B0\u8FD9\u7C7B\u8BED\u53E5\u5E76\u4E0D\u662F\u90FD\u80FD\u4F7F\u7528\u5230\u7D22\u5F15\uFF0C\u53EA\u6709\u540E\u6A21\u7CCA\u5339\u914D\u7684\u8BED\u53E5\u624D\u80FD\u4F7F\u7528\u7D22\u5F15\u3002\u6BD4\u5982\u8BED\u53E5\u201Cselect * from product where name like \u2018% \u7535\u51B0\u7BB1\u2019\u201D\u5C31\u6CA1\u6709\u4F7F\u7528\u5230\u5B57\u6BB5\u201Cname\u201D\u4E0A\u7684\u7D22\u5F15\uFF0C\u800C\u201Cselect * from product where name like \u2018\u7D22\u5C3C %\u2019\u201D\u5C31\u4F7F\u7528\u4E86\u201Cname\u201D\u4E0A\u7684\u7D22\u5F15\u3002\u800C\u4E00\u65E6\u6CA1\u6709\u4F7F\u7528\u7D22\u5F15\u5C31\u4F1A\u626B\u63CF\u5168\u8868\u7684\u6570\u636E\uFF0C\u5728\u6027\u80FD\u4E0A\u662F\u65E0\u6CD5\u63A5\u53D7\u7684\u3002</p><p>\u4E8E\u662F\u4F60\u5728\u8C37\u6B4C\u4E0A\u641C\u7D22\u4E86\u4E00\u4E0B\u89E3\u51B3\u65B9\u6848\uFF0C\u53D1\u73B0\u5927\u5BB6\u90FD\u5728\u4F7F\u7528\u5F00\u6E90\u7EC4\u4EF6 Elasticsearch \u6765\u652F\u6301\u641C\u7D22\u7684\u8BF7\u6C42\uFF0C\u5B83\u672C\u8EAB\u662F\u57FA\u4E8E\u201C\u5012\u6392\u7D22\u5F15\u201D\u6765\u5B9E\u73B0\u7684\uFF0C\u90A3\u4E48\u4EC0\u4E48\u662F\u5012\u6392\u7D22\u5F15\u5462\uFF1F</p><p>\u5012\u6392\u7D22\u5F15\u662F\u6307\u5C06\u8BB0\u5F55\u4E2D\u7684\u67D0\u4E9B\u5217\u505A\u5206\u8BCD\uFF0C\u7136\u540E\u5F62\u6210\u7684\u5206\u8BCD\u4E0E\u8BB0\u5F55 ID \u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u3002\u6BD4\u5982\u8BF4\uFF0C\u4F60\u7684\u5782\u76F4\u7535\u5546\u9879\u76EE\u91CC\u9762\u6709\u4EE5\u4E0B\u8BB0\u5F55\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/20/57/201ffbb6da51e04894d8dee7eaeb5d57.jpg?wh=1142*311" alt=""></p><p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u5C06\u5546\u54C1\u540D\u79F0\u505A\u7B80\u5355\u7684\u5206\u8BCD\uFF0C\u7136\u540E\u5EFA\u7ACB\u8D77\u5206\u8BCD\u548C\u5546\u54C1 ID \u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C\u5C31\u50CF\u4E0B\u9762\u5C55\u793A\u7684\u8FD9\u6837\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/c9/2f/c919944bcdfd1f1ce576790fc496a62f.jpg?wh=1142*452" alt=""></p><p>\u8FD9\u6837\uFF0C\u5982\u679C\u7528\u6237\u641C\u7D22\u7535\u51B0\u7BB1\uFF0C\u5C31\u53EF\u4EE5\u7ED9\u4ED6\u5C55\u793A\u5546\u54C1 ID \u4E3A 1 \u548C 3 \u7684\u4E24\u4EF6\u5546\u54C1\u4E86\u3002</p><p>\u800C Elasticsearch \u4F5C\u4E3A\u4E00\u79CD\u5E38\u89C1\u7684 NoSQL \u6570\u636E\u5E93\uFF0C<strong>\u5C31\u4EE5\u5012\u6392\u7D22\u5F15\u4F5C\u4E3A\u6838\u5FC3\u6280\u672F\u539F\u7406\uFF0C\u4E3A\u4F60\u63D0\u4F9B\u4E86\u5206\u5E03\u5F0F\u7684\u5168\u6587\u641C\u7D22\u670D\u52A1\uFF0C\u8FD9\u5728\u4F20\u7EDF\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u4F7F\u7528 SQL \u8BED\u53E5\u662F\u5F88\u96BE\u5B9E\u73B0\u7684</strong>\u3002\u6240\u4EE5\u4F60\u770B\uFF0CNoSQL \u53EF\u4EE5\u5728\u67D0\u4E9B\u4E1A\u52A1\u573A\u666F\u4E0B\u4EE3\u66FF\u4F20\u7EDF\u6570\u636E\u5E93\u63D0\u4F9B\u6570\u636E\u5B58\u50A8\u670D\u52A1\u3002</p><h3 id="\u63D0\u5347\u6269\u5C55\u6027" tabindex="-1">\u63D0\u5347\u6269\u5C55\u6027 <a class="header-anchor" href="#\u63D0\u5347\u6269\u5C55\u6027" aria-hidden="true">#</a></h3><p>\u53E6\u5916\uFF0C\u5728\u6269\u5C55\u6027\u65B9\u9762\uFF0C\u5F88\u591A NoSQL \u6570\u636E\u5E93\u4E5F\u6709\u7740\u5148\u5929\u7684\u4F18\u52BF\u3002\u8FD8\u662F\u4EE5\u4F60\u7684\u5782\u76F4\u7535\u5546\u7CFB\u7EDF\u4E3A\u4F8B\uFF0C\u4F60\u5DF2\u7ECF\u4E3A\u4F60\u7684\u7535\u5546\u7CFB\u7EDF\u589E\u52A0\u4E86\u8BC4\u8BBA\u7CFB\u7EDF\uFF0C\u5F00\u59CB\u4F60\u7684\u8BC4\u4F30\u6BD4\u8F83\u4E50\u89C2\uFF0C\u89C9\u5F97\u7535\u5546\u7CFB\u7EDF\u7684\u8BC4\u8BBA\u91CF\u7EA7\u4E0D\u4F1A\u589E\u957F\u5F88\u5FEB\uFF0C\u6240\u4EE5\u5C31\u4E3A\u5B83\u5206\u4E86 8 \u4E2A\u5E93\uFF0C\u6BCF\u4E2A\u5E93\u62C6\u5206\u6210 16 \u5F20\u8868\u3002</p><p>\u4F46\u662F\u8BC4\u8BBA\u7CFB\u7EDF\u4E0A\u7EBF\u4E4B\u540E\uFF0C\u5B58\u50A8\u91CF\u7EA7\u589E\u957F\u7684\u5F02\u5E38\u8FC5\u731B\uFF0C\u4F60\u4E0D\u5F97\u4E0D\u5C06\u6570\u636E\u5E93\u62C6\u5206\u6210\u66F4\u591A\u7684\u5E93\u8868\uFF0C\u800C\u6570\u636E\u4E5F\u8981\u91CD\u65B0\u8FC1\u79FB\u5230\u65B0\u7684\u5E93\u8868\u4E2D\uFF0C\u8FC7\u7A0B\u975E\u5E38\u75DB\u82E6\uFF0C\u800C\u4E14\u6570\u636E\u8FC1\u79FB\u7684\u8FC7\u7A0B\u4E5F\u975E\u5E38\u5BB9\u6613\u51FA\u9519\u3002</p><p>\u8FD9\u65F6\uFF0C\u4F60\u8003\u8651\u662F\u5426\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 NoSQL \u6570\u636E\u5E93\u6765\u5F7B\u5E95\u89E3\u51B3\u6269\u5C55\u6027\u7684\u95EE\u9898\uFF0C\u7ECF\u8FC7\u8C03\u7814\u4F60\u53D1\u73B0\u5B83\u4EEC\u5728\u8BBE\u8BA1\u4E4B\u521D\u5C31\u8003\u8651\u5230\u4E86\u5206\u5E03\u5F0F\u548C\u5927\u6570\u636E\u5B58\u50A8\u7684\u573A\u666F\uFF0C<strong>\u6BD4\u5982\u50CF MongoDB \u5C31\u6709\u4E09\u4E2A\u6269\u5C55\u6027\u65B9\u9762\u7684\u7279\u6027</strong>\u3002</p><ul><li>\u5176\u4E00\u662F Replica\uFF0C\u4E5F\u53EB\u505A\u526F\u672C\u96C6\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E3B\u4ECE\u5206\u79BB\uFF0C\u4E5F\u5C31\u662F\u901A\u8FC7\u5C06\u6570\u636E\u62F7\u8D1D\u6210\u591A\u4EFD\u6765\u4FDD\u8BC1\u5F53\u4E3B\u6302\u6389\u540E\u6570\u636E\u4E0D\u4F1A\u4E22\u5931\u3002\u540C\u65F6\u5462\uFF0CReplica \u8FD8\u53EF\u4EE5\u5206\u62C5\u8BFB\u8BF7\u6C42\u3002Replica \u4E2D\u6709\u4E3B\u8282\u70B9\u6765\u627F\u62C5\u5199\u8BF7\u6C42\uFF0C\u5E76\u4E14\u628A\u6570\u636E\u53D8\u52A8\u8BB0\u5F55\u5230 oplog \u91CC\uFF08\u7C7B\u4F3C\u4E8E binlog\uFF09\uFF1B\u4ECE\u8282\u70B9\u63A5\u6536\u5230 oplog \u540E\u5C31\u4F1A\u4FEE\u6539\u81EA\u8EAB\u7684\u6570\u636E\u4EE5\u4FDD\u6301\u548C\u4E3B\u8282\u70B9\u7684\u4E00\u81F4\u3002\u4E00\u65E6\u4E3B\u8282\u70B9\u6302\u6389\uFF0CMongoDB \u4F1A\u4ECE\u4ECE\u8282\u70B9\u4E2D\u9009\u53D6\u4E00\u4E2A\u8282\u70B9\u6210\u4E3A\u4E3B\u8282\u70B9\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u63D0\u4F9B\u5199\u6570\u636E\u670D\u52A1\u3002</li><li>\u5176\u4E8C\u662F Shard\uFF0C\u4E5F\u53EB\u505A\u5206\u7247\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u5206\u5E93\u5206\u8868\uFF0C\u5373\u5C06\u6570\u636E\u6309\u7167\u67D0\u79CD\u89C4\u5219\u62C6\u5206\u6210\u591A\u4EFD\uFF0C\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u673A\u5668\u4E0A\u3002MongoDB \u7684 Sharding \u7279\u6027\u4E00\u822C\u9700\u8981\u4E09\u4E2A\u89D2\u8272\u6765\u652F\u6301\uFF0C\u4E00\u4E2A\u662F Shard Server\uFF0C\u5B83\u662F\u5B9E\u9645\u5B58\u50A8\u6570\u636E\u7684\u8282\u70B9\uFF0C\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684 Mongod \u8FDB\u7A0B\uFF1B\u4E8C\u662F Config Server\uFF0C\u4E5F\u662F\u4E00\u7EC4 Mongod \u8FDB\u7A0B\uFF0C\u4E3B\u8981\u5B58\u50A8\u4E00\u4E9B\u5143\u4FE1\u606F\uFF0C\u6BD4\u5982\u8BF4\u54EA\u4E9B\u5206\u7247\u5B58\u50A8\u4E86\u54EA\u4E9B\u6570\u636E\u7B49\uFF1B\u6700\u540E\u662F Route Server\uFF0C\u5B83\u4E0D\u5B9E\u9645\u5B58\u50A8\u6570\u636E\uFF0C\u4EC5\u4EC5\u4F5C\u4E3A\u8DEF\u7531\u4F7F\u7528\uFF0C\u5B83\u4ECE Config Server \u4E2D\u83B7\u53D6\u5143\u4FE1\u606F\u540E\uFF0C\u5C06\u8BF7\u6C42\u8DEF\u7531\u5230\u6B63\u786E\u7684 Shard Server \u4E2D\u3002</li></ul><p><img src="https://static001.geekbang.org/resource/image/e8/80/e8cb47c8cc556fce058f7c5cf06d4780.jpg?wh=1142*663" alt=""></p><ul><li>\u5176\u4E09\u662F\u8D1F\u8F7D\u5747\u8861\uFF0C\u5C31\u662F\u5F53 MongoDB \u53D1\u73B0 Shard \u4E4B\u95F4\u6570\u636E\u5206\u5E03\u4E0D\u5747\u5300\uFF0C\u4F1A\u542F\u52A8 Balancer \u8FDB\u7A0B\u5BF9\u6570\u636E\u505A\u91CD\u65B0\u7684\u5206\u914D\uFF0C\u6700\u7EC8\u8BA9\u4E0D\u540C Shard Server \u7684\u6570\u636E\u53EF\u4EE5\u5C3D\u91CF\u7684\u5747\u8861\u3002\u5F53\u6211\u4EEC\u7684 Shard Server \u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3\u9700\u8981\u6269\u5BB9\u65F6\uFF0C\u6570\u636E\u4F1A\u81EA\u52A8\u88AB\u79FB\u52A8\u5230\u65B0\u7684 Shard Server \u4E0A\uFF0C\u51CF\u5C11\u4E86\u6570\u636E\u8FC1\u79FB\u548C\u9A8C\u8BC1\u7684\u6210\u672C\u3002</li></ul><p>\u4F60\u53EF\u4EE5\u770B\u5230\uFF0CNoSQL \u6570\u636E\u5E93\u4E2D\u5185\u7F6E\u7684\u6269\u5C55\u6027\u65B9\u9762\u7684\u7279\u6027\u53EF\u4EE5\u8BA9\u6211\u4EEC\u4E0D\u518D\u9700\u8981\u5BF9\u6570\u636E\u5E93\u505A\u5206\u5E93\u5206\u8868\u548C\u4E3B\u4ECE\u5206\u79BB\uFF0C\u4E5F\u662F\u5BF9\u4F20\u7EDF\u6570\u636E\u5E93\u4E00\u4E2A\u826F\u597D\u7684\u8865\u5145\u3002</p><p>\u4F60\u53EF\u80FD\u4F1A\u89C9\u5F97\uFF0CNoSQL \u5DF2\u7ECF\u6210\u719F\u5230\u53EF\u4EE5\u4EE3\u66FF\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E86\uFF0C\u4F46\u662F\u5C31\u76EE\u524D\u6765\u770B\uFF0CNoSQL \u53EA\u80FD\u4F5C\u4E3A\u4F20\u7EDF\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u8865\u5145\u800C\u5B58\u5728\uFF0C\u5F25\u8865\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5728\u6027\u80FD\u3001\u6269\u5C55\u6027\u548C\u67D0\u4E9B\u573A\u666F\u4E0B\u7684\u4E0D\u8DB3\uFF0C\u6240\u4EE5\u4F60\u5728\u4F7F\u7528\u6216\u8005\u9009\u62E9\u65F6\u8981\u7ED3\u5408\u81EA\u8EAB\u7684\u573A\u666F\u7075\u6D3B\u5730\u8FD0\u7528\u3002</p><h3 id="\u8BFE\u7A0B\u5C0F\u7ED3" tabindex="-1">\u8BFE\u7A0B\u5C0F\u7ED3 <a class="header-anchor" href="#\u8BFE\u7A0B\u5C0F\u7ED3" aria-hidden="true">#</a></h3><p>\u672C\u8282\u8BFE\u6211\u5E26\u4F60\u4E86\u89E3\u4E86 NoSQL \u6570\u636E\u5E93\u5728\u6027\u80FD\u3001\u6269\u5C55\u6027\u4E0A\u7684\u4F18\u52BF\uFF0C\u4EE5\u53CA\u5B83\u7684\u4E00\u4E9B\u7279\u6B8A\u529F\u80FD\u7279\u6027\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ol><li>\u5728\u6027\u80FD\u65B9\u9762\uFF0CNoSQL \u6570\u636E\u5E93\u4F7F\u7528\u4E00\u4E9B\u7B97\u6CD5\u5C06\u5BF9\u78C1\u76D8\u7684\u968F\u673A\u5199\u8F6C\u6362\u6210\u987A\u5E8F\u5199\uFF0C\u63D0\u5347\u4E86\u5199\u7684\u6027\u80FD\uFF1B</li><li>\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u6BD4\u5982\u5168\u6587\u641C\u7D22\u529F\u80FD\uFF0C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5E76\u4E0D\u80FD\u9AD8\u6548\u5730\u652F\u6301\uFF0C\u9700\u8981 NoSQL \u6570\u636E\u5E93\u7684\u652F\u6301\uFF1B</li><li>\u5728\u6269\u5C55\u6027\u65B9\u9762\uFF0CNoSQL \u6570\u636E\u5E93\u5929\u751F\u652F\u6301\u5206\u5E03\u5F0F\uFF0C\u652F\u6301\u6570\u636E\u5197\u4F59\u548C\u6570\u636E\u5206\u7247\u7684\u7279\u6027\u3002</li></ol><p>\u8FD9\u4E9B\u90FD\u8BA9\u5B83\u6210\u4E3A\u4F20\u7EDF\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u826F\u597D\u7684\u8865\u5145\uFF0C\u4F60\u9700\u8981\u4E86\u89E3\u7684\u662F\uFF0C**NoSQL \u53EF\u4F9B\u9009\u578B\u7684\u79CD\u7C7B\u5F88\u591A\uFF0C\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u6709\u5404\u81EA\u7684\u7279\u70B9\u3002\u4F60\u5728\u505A\u9009\u578B\u7684\u65F6\u5019\u9700\u8981\u5BF9\u5B83\u7684\u5B9E\u73B0\u539F\u7406\u6709\u6BD4\u8F83\u6DF1\u5165\u7684\u4E86\u89E3\uFF0C\u6700\u597D\u5728\u8FD0\u7EF4\u65B9\u9762\u5BF9\u5B83\u6709\u4E00\u5B9A\u7684\u719F\u6089\uFF0C\u8FD9\u6837\u5728\u51FA\u73B0\u95EE\u9898\u65F6\u624D\u80FD\u53CA\u65F6\u627E\u5230\u89E3\u51B3\u65B9\u6848\u3002**\u5426\u5219\uFF0C\u76F2\u76EE\u8DDF\u4ECE\u5730\u4E0A\u4E86\u4E00\u4E2A\u65B0\u7684 NoSQL \u6570\u636E\u5E93\uFF0C\u6700\u7EC8\u53EF\u80FD\u5BFC\u81F4\u4F1A\u51FA\u4E86\u6545\u969C\u65E0\u6CD5\u89E3\u51B3\uFF0C\u53CD\u800C\u6210\u4E3A\u6574\u4F53\u7CFB\u7EDF\u7684\u62D6\u7D2F\u3002</p><p>\u6211\u5728\u4E4B\u524D\u7684\u9879\u76EE\u4E2D\u66FE\u7ECF\u4F7F\u7528 Elasticsearch \u4F5C\u4E3A\u6301\u4E45\u5B58\u50A8\uFF0C\u652F\u6491\u793E\u533A\u7684 feed \u6D41\u529F\u80FD\uFF0C\u521D\u671F\u5F00\u53D1\u7684\u65F6\u5019\u786E\u5B9E\u5F88\u723D\uFF0C\u4F60\u53EF\u4EE5\u9488\u5BF9 feed \u4E2D\u7684\u4EFB\u4F55\u5B57\u6BB5\u505A\u7075\u6D3B\u9AD8\u6548\u5730\u67E5\u8BE2\uFF0C\u4E1A\u52A1\u529F\u80FD\u8FED\u4EE3\u8FC5\u901F\uFF0C\u4EE3\u7801\u4E5F\u7B80\u5355\u6613\u61C2\u3002\u53EF\u662F\u5230\u4E86\u540E\u671F\u6D41\u91CF\u4E0A\u6765\u4E4B\u540E\uFF0C\u7531\u4E8E\u7F3A\u5C11\u5BF9\u4E8E Elasticsearch \u6210\u719F\u7684\u8FD0\u7EF4\u80FD\u529B\uFF0C\u9020\u6210\u6545\u969C\u9891\u51FA\uFF0C\u5C24\u5176\u5230\u4E86\u9AD8\u5CF0\u671F\u5C31\u4F1A\u51FA\u73B0\u8282\u70B9\u4E0D\u53EF\u7528\u7684\u95EE\u9898\uFF0C\u800C\u7531\u4E8E\u4E1A\u52A1\u4E0A\u7684\u5DE8\u5927\u538B\u529B\u53C8\u65E0\u6CD5\u5206\u51FA\u4EBA\u529B\u548C\u7CBE\u529B\u5BF9 Elasticsearch \u6DF1\u5165\u7684\u5B66\u4E60\u548C\u4E86\u89E3\uFF0C\u6700\u540E\u4E0D\u5F97\u4E0D\u505A\u5927\u7684\u6539\u9020\u5207\u56DE\u719F\u6089\u7684 MySQL\u3002<strong>\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u5F00\u6E90\u7EC4\u4EF6\u7684\u4F7F\u7528\uFF0C\u4E0D\u80FD\u53EA\u505C\u7559\u5728\u53EA\u4F1A\u201Chello world\u201D\u7684\u9636\u6BB5\uFF0C\u800C\u5E94\u8BE5\u5BF9\u5B83\u6709\u8DB3\u591F\u7684\u8FD0\u7EF4\u4E0A\u7684\u628A\u63A7\u80FD\u529B\u3002</strong></p><h3 id="\u4E00\u8BFE\u4E00\u601D" tabindex="-1">\u4E00\u8BFE\u4E00\u601D <a class="header-anchor" href="#\u4E00\u8BFE\u4E00\u601D" aria-hidden="true">#</a></h3><p>NoSQL \u6570\u636E\u5E93\u662F\u53EF\u4EE5\u4E0E\u4F20\u7EDF\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u914D\u5408\uFF0C\u4E00\u8D77\u89E3\u51B3\u6570\u636E\u5B58\u50A8\u95EE\u9898\u7684\uFF0C\u90A3\u4E48\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\uFF0C\u4F60\u7528\u5230\u4E86\u54EA\u4E9B NoSQL \u6570\u636E\u5E93\u5462\uFF1F\u5728\u9009\u578B\u7684\u65F6\u5019\u662F\u57FA\u4E8E\u4EC0\u4E48\u6837\u7684\u8003\u8651\u5462\uFF1F\u6B22\u8FCE\u5728\u7559\u8A00\u533A\u4E0E\u6211\u5206\u4EAB\u4F60\u7684\u7ECF\u9A8C\u3002</p>',58),p=[i];function t(n,s,S,c,d,h){return a(),o("div",null,p)}const Q=e(r,[["render",t]]);export{L as __pageData,Q as default};
