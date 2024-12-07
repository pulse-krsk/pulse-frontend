import { Card, Flex, Group, Rating, Text, Image } from '@mantine/core';
import type { ReviewCardProps } from './reviewCard.props';

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { rating, body, user } = review;
  return (
    <Card withBorder h={180}>
      <Flex direction={'column'} gap={24}>
        <Flex justify={'space-between'} align={'center'}>
          <Group gap={17}>
            <Image src={user.avatar} width={36} height={36} alt="Аватар пользователя" />
            <Text fw={500}>{user.firstName + ' ' + user.lastName}</Text>
          </Group>
          <Rating fractions={3} value={rating} />
        </Flex>
        <Text style={{ textOverflow: 'ellipsis', overflow: 'hidden' }} c="dimmed">
          {body}
        </Text>
      </Flex>
    </Card>
  );
};
