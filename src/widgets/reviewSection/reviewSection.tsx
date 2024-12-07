import { useGetReviewsQuery } from '@/entities/review/api';
import { ReviewCard } from '@/entities/review/ui/reviewCard';
import { AppShell, Button, Flex, SimpleGrid, Title } from '@mantine/core';

export const ReviewSection = ({ eventId }: { eventId: string }) => {
  const { data: reviews, isSuccess } = useGetReviewsQuery(eventId);

  return (
    <AppShell.Section>
      <Flex direction={'column'} gap={48}>
        <Flex justify={'space-between'} align={'center'}>
          <Title>Отзывы</Title>
          <Button variant="outline" c="red" color={'red'}>
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
