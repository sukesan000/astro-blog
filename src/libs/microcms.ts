import { MicroCMSQueries, createClient } from "microcms-js-sdk";

declare const require: any;
require("dotenv").config();
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

// microCMSからブログを取得する関数
export const getBlogs = async (queries: MicroCMSQueries) => {
  return await client.get({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
  blogId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail({
    endpoint: "blogs",
    contentId: blogId,
    queries,
  });
};
