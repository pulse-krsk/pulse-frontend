import { Modal, Rating, Textarea, Text, Button } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import type { ReviewModalProps } from './reviewModal.props';

type ReviewFormValues = {
  rating: number;
  body?: string;
};

export const ReviewModal = ({ opened, onClose, title }: ReviewModalProps) => {
  // Инициализация формы с react-hook-form
  const { handleSubmit, control, reset } = useForm<ReviewFormValues>({
    defaultValues: {
      rating: 0, // Начальное значение рейтинга
    },
  });

  // Обработчик отправки формы
  const onSubmit = () => {
    reset(); // Сброс формы после отправки
    onClose(); // Закрытие модального окна
  };

  return (
    <Modal opened={opened} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fw={500} mb={8}>
          Оценка
        </Text>

        {/* Управляемый компонент для Rating */}
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <Rating
              fractions={2}
              value={field.value}
              onChange={field.onChange} // Обновление значения в react-hook-form
            />
          )}
        />

        {/* Управляемый компонент для Textarea */}
        <Controller
          name="body"
          control={control}
          render={({ field }) => (
            <Textarea
              label="Ваши впечатления"
              placeholder="Напишите, что вам понравилось!"
              mt="md"
              mb="lg"
              minRows={2}
              value={field.value}
              onChange={field.onChange} // Обновление значения в react-hook-form
              labelProps={{ mb: 5, fw: 500 }}
            />
          )}
        />

        <Button color="red" type="submit" mt="md">
          Оставить отзыв
        </Button>
      </form>
    </Modal>
  );
};
