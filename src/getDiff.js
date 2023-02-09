import _ from 'lodash';

const getDiff = (data1, data2) => {
  // console.log(`начинаем сравнение данных`)
  //  Получаем список всех ключей в двух файлах
  // console.log(data1);
  // console.log(_.keys(data1))
  // console.log(_.union(_.keys(data1), _.keys(data2)))
  const sortedKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  // console.log(`Список ключей в двух файлах (sorted by name): ${sortedKeys}` )
  //  Обрабатываем каждый ключ
  const result = sortedKeys.map((key) => {
    //  если ключа нету в первом, значит он был добавлен, делаем новый объект
    // eslint-disable-next-line max-len
    // { type: 'added', key: 'verbose', value: true } с которым будем позже работать (вне этой функции)
    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    //  если нету во втором, значит удален
    if (!Object.hasOwn(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    //  если одинаковы - значит одинковы
    if (_.isEqual(data1[key], data2[key])) {
      return { type: 'equal', key, value: data1[key] };
    }
    //  если не обработали раньше, значит остается один вариант - модифицирован
    return {
      type: 'modified',
      key,
      value1: data1[key],
      value2: data2[key],
    };
  });
  // console.log(`Прошлись по всем ключам - получили вот что: ${JSON.stringify(result)}`)
  return result;
};

export default getDiff;
