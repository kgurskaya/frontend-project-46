import * as fs from "fs";
import getDiff from "./getDiff.js";
import formatDiff from "./formatters/index.js";

const getFileContent = (file) => {
  const fileContent = fs.readFileSync(file, "utf8");
  return fileContent;
};

const parse = (file) => {
  const result = JSON.parse(file);
  return result;
};

export default (file1, file2, formatter = "stylish") => {
  const fileContent1 = getFileContent(file1);
  const fileContent2 = getFileContent(file2);
  const parsedObject1 = parse(fileContent1);
  const parsedObject2 = parse(fileContent2);
  // получаем объект с различиями в файле
  const data = getDiff(parsedObject1, parsedObject2);
  // console.log(data);
  // приводим эти различия к формату, который нам пришел в аргументах при запуске утилиты
  const result = formatDiff(data, formatter);
  console.log(result);
};
