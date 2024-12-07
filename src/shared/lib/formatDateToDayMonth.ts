export const formatDateToDayMonth = (date: Date) => {
  // Массив с названиями месяцев
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  // Извлекаем день и месяц
  const day = date.getDate();
  const month = months[date.getMonth()]; // Получаем название месяца

  // Возвращаем строку в формате "ДД месяц"
  return `${day} ${month}`;
};
