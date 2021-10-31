import { CKAN } from "./CKAN.js";

const ckan = new CKAN("https://www.data.go.jp/data/api/3/");
const list = await ckan.api("action/group_list"); //  // TLS error
console.log(list);
