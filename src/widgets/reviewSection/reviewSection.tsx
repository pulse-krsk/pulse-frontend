import { ReviewCard } from '@/entities/review/ui/reviewCard';
import { faker } from '@faker-js/faker';
import { AppShell, Button, Flex, SimpleGrid, Title } from '@mantine/core';

export const ReviewSection = () => {
  const review = {
    id: faker.string.numeric(),
    rating: 4.3,
    body: faker.lorem.sentence(15),
    user: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
    },
  };

  const data = [review, review, review, review, review];

  const cards = data.map((review, index) => (
    <div key={index}>
      <ReviewCard review={review} />
    </div>
  ));

  return (
    <AppShell.Section>
      <Flex>
        <Title>отзывы</Title>
        <Button>Оставить свой отзыв</Button>
      </Flex>
      <SimpleGrid cols={3}>{cards}</SimpleGrid>
    </AppShell.Section>
  );
};
