import { CKAN } from "./CKAN.js";

const ckan = new CKAN("https://ckan.odp.jig.jp/api/3/");
const list = await ckan.api("action/group_list");
console.log(list);
