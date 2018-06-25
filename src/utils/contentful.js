import { get, flatten } from "lodash";

import * as contentful from "contentful";

export default class Contentful {
  constructor() {
    this.client = contentful.createClient({
      space: "YOUR SPACE ID",
      accessToken:
        "YOUR ACCESS TOKEN"
    });

    this.content = {
      entries: null,
      series: []
    };

    this.loading = 0;
  }

  load = force => {
    if (force || !this.content.entries) {
      this.loading++;
      return this.client.getEntries().then(value => {
        this.content.entries = value;
        this.loading--;
        return value;
      });
    }

    if (this.content.entries) {
      return new Promise(resolve => {
        resolve(this.content.entries);
      });
    }
  };

  getAllIds = entries => get(entries, "items", []).map(item => item.sys.id);

  getEntries = entries => {
    const entryObject = {};
    get(entries, "items", []).map(item => {
      entryObject[item.sys.id] = {
        id: item.sys.id,
        ...item.fields
      };
    });
    return entryObject;
  };

  getSeries = entries => {
    const series = get(entries, "items", []).map(item => item.fields.series);
    return flatten(series);
    //.filter((v, i, a) => a.indexOf(v) === i);
  };
}
