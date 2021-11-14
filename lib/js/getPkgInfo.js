'use strict';

const path = require("path");
const sh = require("shelljs");
const { getProperty } = require("js-cool");
const { isCacheExpired, updateCacheTime } = require("./cacheControl");
const { writeFile } = require("./index");
const cacheDir = path.join(__dirname, "../../cache");
async function getPkgInfo(name) {
  let packageInfo;
  if (!isCacheExpired("packageInfoTime") && sh.test("-f", cacheDir + "/packageInfo.json")) {
    packageInfo = require(cacheDir + "/packageInfo.json");
    return name ? getProperty(packageInfo, name) : packageInfo;
  }
  try {
    packageInfo = JSON.parse(sh.exec(`npm view gitmars --json`, {
      silent: true
    }).stdout);
  } catch (e) {
    throw "\u51FA\u9519\u4E86";
  }
  await updateCacheTime("packageInfoTime");
  await writeFile(cacheDir + "/packageInfo.json", JSON.stringify(packageInfo));
  return name ? getProperty(packageInfo, name) : packageInfo;
}
module.exports = getPkgInfo;