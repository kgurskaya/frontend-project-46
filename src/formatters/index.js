// eslint-disable-next-line import/extensions
import formatStylish from './stylish.js';

const formatDiff = (diff, formatter) => {
  // функция для обработки списка отличий в файле и отображение в нужном виде
  // пока тут указан только стиль stylish, остальные нужно тоже добавить
  if (formatter === 'stylish') {
    return formatStylish(diff);
  }

  // если придет стиль про который мы не знаем - отправляем ошибку
  throw new Error(`Unsupported format - ${formatter}`);
};

export default formatDiff;
