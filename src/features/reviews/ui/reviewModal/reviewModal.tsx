import { Modal, Rating, Textarea, Text, Button } from '@mantine/core';
import type { ReviewModalProps } from './reviewModal.props';

export const ReviewModal = ({ opened, onClose, title }: ReviewModalProps) => {
  return (
    <Modal opened={opened} onClose={onClose} title={title}>
      <Text fw={500} mb={8}>
        Оценка
      </Text>
      <Rating fractions={2} />
      <Textarea
        data-autofocus
        label="Ваши впечатления"
        placeholder="Напишите, что вам понравилось!"
        mt="md"
        mb="lg"
        minRows={2}
        labelProps={{ mb: 5, fw: 500 }}
      />
      <Button color="red">Оставить отзыв</Button>
    </Modal>
  );
};
