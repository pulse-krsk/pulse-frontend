import { Checkbox, Flex, Text } from '@mantine/core';
import { YaAuthLink } from '@/entities/auth/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { actions, selectors } from '@/entities/auth/model';
import { type ChangeEvent, useCallback } from 'react';

export const AuthPanel = () => {
  const enterAsAdmin = useAppSelector(selectors.getEnterAsAdmin);
  const dispatch = useAppDispatch();

  const handleEnterAsAdmin = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.setEnterAsAdmin(target.checked));
    },
    [dispatch],
  );

  return (
    <Flex
      p="xl"
      justify={'center'}
      gap={'xl'}
      direction={'column'}
      style={{
        // Панель с эффектом стекла
        background: 'rgba(255, 255, 255, 0.1)', // Полупрозрачный белый фон
        backdropFilter: 'blur(10px)', // Эффект размытия
        borderRadius: '16px', // Округлые углы
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Легкая тень
        border: '1px solid rgba(255, 255, 255, 0.2)', // Белая полупрозрачная рамка
      }}>
      <Text style={{ alignSelf: 'center' }} fw={'bold'} size="xl">
        Авторизация
      </Text>
      <Flex justify={'center'} gap={'sm'} direction={'column'}>
        <Text>Войти через:</Text>
        <Flex align={'center'} gap={'sm'}>
          <YaAuthLink />
        </Flex>
      </Flex>
      <Checkbox
        label="Войти как администратор"
        checked={enterAsAdmin}
        onChange={handleEnterAsAdmin}
      />
    </Flex>
  );
};
