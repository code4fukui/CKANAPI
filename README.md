# CKANAPI

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A library for interacting with CKAN, an open-source data portal platform, using JavaScript and Deno.

## Features
- Provides methods to list, show, create, update, and delete CKAN datasets, groups, and organizations
- Supports file uploads and JSON data for creating and updating resources
- Can be used with both the CKAN API v3 and CKAN API v2

## Requirements
- Deno 1.8.0 or later

## Usage

To use the CKANAPI library, import the `CKAN` class from the `CKAN.js` file:

```javascript
import { CKAN } from "./CKAN.js";

const endpoint = "https://your-ckan-instance.com/api/3/";
const token = "your-api-key";

const ckan = new CKAN(endpoint, token);

// List datasets
const datasets = await ckan.listDataset();
console.log(datasets);

// Create a dataset
const newDataset = await ckan.createDataset({
  name: "my-dataset",
  title: "My Dataset",
  owner_org: "my-organization"
});
console.log(newDataset);
```

See the `test-use-token.js` file for more examples of how to use the CKANAPI library.

## Data / API
This library interacts with the CKAN API, which is an open-source data portal platform. CKAN provides a RESTful API for managing datasets, resources, organizations, and groups.

## License
MIT License — see [LICENSE](LICENSE).