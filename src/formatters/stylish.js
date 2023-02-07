const formatStylish = (diff) => {
  //тут нужно напистать следующую логику:
  // получаем объект diff (в нем весь список различий в файлах)
  // проходимся по каждому различию и печатаем в формате как от нас требуется для stlylish

  const format = (node) =>
    node.map((data) => {
      //switch проверяем что случилось со строчкой
      switch (data.type) {
        // если добавлена - рисуем плюсик и что-то там пишем
        case "added":
          return `+ ${data.key}: ${data.value}`;
        // если удален - рисуем минус и что-то там пишем
        case "deleted":
          return `- ${data.key}: ${data.value}`;
        case "equal":
          return `  ${data.key}: ${data.value}`;
        case "modified":
          return `- ${data.key}: ${data.value1}\n+ ${data.key}: ${data.value2}`;
      }
    });

  return `${format(diff).join("\n")}`;
};

export default formatStylish;
