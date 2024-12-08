import { Modal, TextInput, Textarea, Select, NumberInput, FileInput, Button } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import type { AdminAddModalProps } from './adminAddModal.props';
import { DatePickerInput } from '@mantine/dates';

type AdminAddValues = {
  title: string;
  description?: string;
  category: string;
  price: number;
  dateRange: [Date | null, Date | null]; // Состояние для диапазона дат
  cover: File | null;
};

export const AdminAddModal = ({ opened, onClose, title }: AdminAddModalProps) => {
  const { handleSubmit, control, reset } = useForm<AdminAddValues>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      price: 0,
      dateRange: [null, null], // Изначально оба значения равны null
      cover: null,
    },
  });

  const onSubmit = () => {
    reset(); // Сброс формы после отправки
    onClose(); // Закрытие модального окна
  };

  return (
    <Modal opened={opened} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Наименование"
              placeholder="Введите наименование"
              {...field}
              mb="md"
              required
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              label="Описание"
              placeholder="Введите описание"
              {...field}
              mt="md"
              mb="md"
              minRows={2}
            />
          )}
        />

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              label="Категория"
              data={['Категория 1', 'Категория 2', 'Категория 3']} // Замените на ваши категории
              placeholder="Выберите категорию"
              {...field}
              mt="md"
              mb="md"
              required
            />
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <NumberInput
              label="Стоимость"
              placeholder="Введите стоимость"
              {...field}
              min={0}
              mt="md"
              mb="md"
              required
            />
          )}
        />

        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <DatePickerInput
              type="range"
              label="Диапазон дат"
              placeholder="Выберите диапазон дат"
              {...field}
              mt="md"
              mb="md"
            />
          )}
        />

        <Controller
          name="cover"
          control={control}
          render={({ field: { onChange } }) => (
            <FileInput
              label="Обложка"
              placeholder="Загрузите файл"
              onChange={onChange}
              mt="md"
              required
            />
          )}
        />

        <Button color="blue" type="submit" mt="md">
          Создать мероприятие
        </Button>
      </form>
    </Modal>
  );
};
