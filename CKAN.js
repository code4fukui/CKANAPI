class CKAN {
  constructor(endpoint, token) {
    this.endpoint = endpoint;
    this.token = token;
  }
  async api(path, param) {
    const url = this.endpoint + path;
    if (param) {
      const uploadflg = Object.values(param).find(d => d instanceof File) != null;
      if (uploadflg) {
        const body = new FormData();
        for (const name in param) {
          body.set(name, param[name]);
        }
        const headers = { "Authorization": this.token };
        const method = "POST";
        const res = await fetch(url, { method, headers, body });
        //console.log(res.status, res.statusText);
        return await res.json();
      } else {
        const headers = { "Authorization": this.token, "Content-Type": "application/json" };
        const method = "POST";
        const body = JSON.stringify(param);
        const res = await fetch(url, { method, headers, body });
        return await res.json();
  
      }
    } else {
      const method = "GET";
      const opts = { method };
      if (this.token) {
        opts.Authorization = this.token;
      }
      const res = await fetch(url, opts);
      //console.log(res.status, res.statusText, res.headers);
      return await res.json();
    }
  }
  async listDataset() {
    return await this.api("action/package_list");
  }
  async showDataset(id) {
    return await this.api("action/package_show?id=" + id);
  }
  async createDataset(req) {
    return await this.api("action/package_create", req);
  }
  async updateDataset(req) {
    return await this.api("action/package_update", req);
  }
  async deleteDataset(id) {
    return await this.api("action/package_delete", { id });
  }
  async clearDataset() {
    const list = await this.listDataset();
    for (const dset of list.result) {
      await this.deleteDataset(dset);
    }
  }
  async listGroup() {
    return await this.api("action/group_list");
  }
  async createGroup(name, title) {
    return await this.api("action/group_create", { name, title } );
  }
  async showGroup(gname) {
    return await this.api("action/group_show?id=" + gname);
  }
  async deleteGroup(gname) {
    return await this.api("action/group_delete", { id: gname });
  }
  async clearGroup() {
    const list = await this.listGroup();
    //console.log(list);
    for (const grp of list.result) {
      const g = await this.showGroup(grp);
      await this.deleteGroup(g.result.id);
    }
  }
  async listOrg() {
    return await this.api("action/organization_list");
  }
  async createOrg(name, title) {
    const data = await this.api("action/organization_create", { name, title } );
    return data;
  }
  async showOrg(oname) {
    return await this.api("action/organization_show?id=" + oname);
  }
  async deleteOrg(oname) {
    return await this.api("action/organization_delete", { id: oname });
  }
  async clearOrg() {
    const list = await this.listOrg();
    //console.log(list);
    for (const org of list.result) {
      await this.deleteOrg(org);
    }
  }
}

export { CKAN };
