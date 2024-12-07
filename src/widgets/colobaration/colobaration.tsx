import { Anchor, AppShell, Button, Image, Text, Title } from '@mantine/core';
import classes from './coloboration.module.scss';

export const Colobaration = () => {
  return (
    <AppShell.Section className={classes.wrapper}>
      <div className={classes.body}>
        <Title fz={48} className={classes.title}>
          Есть предложение?
        </Title>
        <Text fw={500} fz="lg" mb={5}>
          Напишите нам!
        </Text>
        <Text fz="sm" c="dimmed">
          Мы всегда открыты к новым предложениям! Если у вас есть идея для проведения события, мы с
          радостью рассмотрим ваше предложение.
        </Text>

        <div className={classes.controls}>
          <Anchor href="https://forms.yandex.ru/u/6754606984227c4dc164e016/" target="_blank">
            <Button color="red" className={classes.control}>
              Связаться с нами
            </Button>
          </Anchor>
        </div>
      </div>
      <Image src="/images/email_image.png" className={classes.image} />
    </AppShell.Section>
  );
};
