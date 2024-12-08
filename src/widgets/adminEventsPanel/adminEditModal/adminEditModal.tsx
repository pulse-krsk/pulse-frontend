import { Modal, TextInput, Textarea, Select, NumberInput, FileInput, Button } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import type { AdminEditModalProps } from './adminEditModal.props';
import { DatePickerInput } from '@mantine/dates';

type AdminEditValues = {
  title: string;
  description?: string;
  category: string;
  price: number;
  dateRange: [Date | null, Date | null]; // Состояние для диапазона дат
  cover: File | null; // Предполагаем, что вы хотите разрешить замену файла
};

export const AdminEditModal = ({ opened, onClose, title, event }: AdminEditModalProps) => {
  const { handleSubmit, control, reset } = useForm<AdminEditValues>({
    defaultValues: {
      title: event.title,
      description: event.description,
      category: event.types[0].type,
      price: event.price,
      dateRange: [event.start_time, event.end_time],
      cover: null,
    },
  });

  const onSubmit = () => {
    reset();
    onClose();
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
          Обновить мероприятие
        </Button>
      </form>
    </Modal>
  );
};
