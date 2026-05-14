# CKANAPI

JavaScriptとDenoを使用して、オープンソースのデータポータルプラットフォームであるCKANと連携するためのライブラリです。

## 機能
- CKANのデータセット、グループ、組織の一覧取得、詳細取得、作成、更新、削除を行うメソッドを提供
- リソースを作成・更新するためのファイルアップロードとJSONデータをサポート
- CKAN API v3およびCKAN API v2の両方で利用可能

## 要件
- Deno 1.8.0以降

## 使い方

CKANAPIライブラリを使用するには、`CKAN.js`ファイルから`CKAN`クラスをインポートします:

```javascript
import { CKAN } from "./CKAN.js";

const endpoint = "https://your-ckan-instance.com/api/3/";
const token = "your-api-key";

const ckan = new CKAN(endpoint, token);

// データセットの一覧を取得
const datasets = await ckan.listDataset();
console.log(datasets);

// データセットを作成
const newDataset = await ckan.createDataset({
  name: "my-dataset",
  title: "My Dataset",
  owner_org: "my-organization"
});
console.log(newDataset);
```

CKANAPIライブラリのその他の使用例については、`test-use-token.js`ファイルを参照してください。

## データ / API
このライブラリは、オープンソースのデータポータルプラットフォームであるCKANのAPIと連携します。CKANは、データセット、リソース、組織、グループを管理するためのRESTful APIを提供しています。

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
