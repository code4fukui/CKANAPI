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
        console.log(res.status, res.statusText);
        return await res.json();
      } else {
        const headers = { "Authorization": this.token, "Content-Type": "application/json" };
        const method = "POST";
        const body = JSON.stringify(param);
        console.log("json", body);
        const res = await fetch(url, { method, headers, body });
        console.log(res.status, res.statusText);
        return await res.json();
  
      }
    } else {
      const method = "GET";
      const opts = { method };
      if (this.token) {
        opts.Authorization = this.token;
      }
      const res = await fetch(url, opts);
      //console.log(res.status, res.statusText);
      return await res.json();
    }
  };
}

export { CKAN };
