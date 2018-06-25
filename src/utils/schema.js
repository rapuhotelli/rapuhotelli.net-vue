

/*
import { normalize, schema, arrayOf } from "normalizr";

const fields = new schema.Entity("fields");
const item = new schema.Entity("item", {
  fields: fields
});
const entries = new schema.Entity(
  "entries",
  {
    items: [item]
  },
  {},
  {}
);

const testData = {
  sys: {
    type: "Array"
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "fv33kashfg2k"
          }
        },
        id: "3P1gYn6HD26oIwYKOKaq0W",
        type: "Entry",
        createdAt: "2018-06-23T17:34:42.778Z",
        updatedAt: "2018-06-24T09:09:19.207Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment"
          }
        },
        revision: 2,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "blogPost"
          }
        },
        locale: "en-US"
      },
      fields: {
        created: "2018-06-23",
        title: "Trying out Contentful",
        body:
          "# Hello\n\nThis is my test of contentful\n\nHere should be an image asset\n\n![Kelloplanssi](//images.ctfassets.net/fv33kashfg2k/1nDY1xeWgQSkOqGOgYc2eI/c8f11c82699b0097f772f048387dad17/world-cup-kello.png)\n\nAwesome",
        series: ["web"]
      }
    }
  ]
};

export const normalizedData = normalize(testData, entries);
*/