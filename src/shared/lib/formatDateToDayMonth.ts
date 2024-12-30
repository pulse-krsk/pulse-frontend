// TODO: ИЛЮХА ПЕРЕДАЛ ССАНУЮ ДАТУ НЕ ПО ISO
export const formatDateToDayMonth = (dateStr: string) => {
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

  // Преобразуем строку "DD.MM.YYYYTHH:mm:ss" в "YYYY-MM-DDTHH:mm:ss"
  const [datePart, timePart] = dateStr.split('T');
  const [day, month, year] = datePart.split('.');
  const formattedDateStr = `${year}-${month}-${day}T${timePart}`;

  // Создаём объект Date из преобразованной строки
  const date = new Date(formattedDateStr);

  // Проверяем, что дата корректна
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateStr}`);
  }

  // Извлекаем день и название месяца
  const dayNumber = date.getDate();
  const monthName = months[date.getMonth()]; // Индекс месяца от 0 до 11

  // Возвращаем строку в формате "ДД месяц"
  return `${dayNumber} ${monthName}`;
};
