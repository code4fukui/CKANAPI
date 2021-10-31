import { CKAN } from "./CKAN.js";

const endpoint = "";
const token = "";

const ckan = new CKAN(endpoint, token);

const createGroup = async (name, title) => {
  return await ckan.api("action/group_create", { name, title } );
};
const createOrg = async (name, title) => {
  return await ckan.api("action/organization_create", { name, title } );
};
const createDataset = async (name, title, owner_org) => {
  return await ckan.api("action/package_create", { name, title, owner_org });
};
const createResourceCSV = async (package_id, fn) => {
  const bin = await Deno.readFile(fn);
  const upload = new File([bin], fn, { type: "text/csv" });
  const data = await ckan.api("action/resource_create", {
    package_id,
    upload, // or url
    name: fn,
    format: "CSV",
    mimetype: "text/csv",
  }, true);
  return data;
};
const updateResource = async (id, fn) => {
  const bin = await Deno.readFile(fn);
  const upload = new File([bin], 'test.csv', { type: "text/csv" });
  return await ckan.api("action/resource_patch", { id, upload });
};

//await createOrg();
//await createGroup();
//await createDataset();
//await createResource();
//await updateResource();
