const prod = process.env.NODE_ENV === "production";

module.exports = {
  // "process.env.BACKEND_URL": prod ? "/next-blog" : "", // for gh-pages
  "process.env.BACKEND_URL": "",
};
