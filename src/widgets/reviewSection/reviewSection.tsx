import { useGetReviewsQuery } from '@/entities/review/api';
import { ReviewCard } from '@/entities/review/ui/reviewCard';
import { ReviewModal } from '@/features/reviews';
import { AppShell, Button, Flex, SimpleGrid, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const ReviewSection = ({ eventId }: { eventId: string }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data: reviews, isSuccess } = useGetReviewsQuery(eventId);

  return (
    <AppShell.Section>
      <ReviewModal opened={opened} onClose={close} title="Оставить свой отзыв"></ReviewModal>
      <Flex direction={'column'} gap={48}>
        <Flex justify={'space-between'} align={'center'}>
          <Title>Отзывы</Title>
          <Button onClick={open} variant="outline" c="red" color={'red'}>
            Оставить свой отзыв
          </Button>
        </Flex>
        {isSuccess && (
          <SimpleGrid cols={3}>
            {reviews.map((review, index) => (
              <div key={index}>
                <ReviewCard review={review} />
              </div>
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </AppShell.Section>
  );
};
