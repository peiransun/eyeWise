# WebApi - Sample

## 前言:
**Api為一個路由控制器，將你使用的方法導入你要的資料，整個前後端運作如下**

```
    前端          後端       
WebApp   <=/=>   WebApi   =>   Model   =>   Database
                /XX/路由        方程式()          資料
```

**以Sample舉例，get方法大多是用在取得(查詢)，put方法是用在取得而且修改，post方法是用在新增，delete方法是用在刪除**

```
    查   [GET]       /webapi/serviceName/getXXX/:id       多參數req.params ( /:xxCode/:xxNo )
    修   [PUT]       /webapi/serviceName/setXXX/params    ex:req.body {Body:departNo:XX, startDate:XX, endDate:XX}
    新   [POST]      /webapi/serviceName/addXXX/
    刪   [DELETE]    /webapi/serviceName/removeXXX/:id
```

**Controller管理著你使用的方法，並將方法傳給Model，由Model裡面的function來DB抓取資料**
**基本上Api有四種方法，以Sample為例，Api的四種方法分別對上了Model的四種方程式，也就是新刪修查**

```
    Api             Model
    get     ==>>    getSample()
    put     ==>>    setSample()
    post    ==>>    addSample()
    delete  ==>>    removeSample()
```    

**簡單來說Api只是個路由，你只要寫好你路由的方法及帶入的參數(params)**
* req Request:你所要給的需求參數
* res Response:你所取得的回報(資料)
* res.json(result):而我們都會強制以Json的格式讀取回報的資料

**Api之撰寫簡說**
* 依正規化規則，撰寫你的Api方法及參數，改掉所有的Sample字眼
* 根據你要連接的SQL Sever設定你的api.config.json
* 下指令```npm run start```，Api會根據你給的方法跟params路由到Model
* 你可以在Postman查看你測試的結果:```http://你的IP:你設的Port/webapi/專案的名稱/方法/參數值```
* 舉例```http://10.21.11.229:3000/webapi/drugCheckManager/getXXX/1P14```


