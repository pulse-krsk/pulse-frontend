import { Ghost } from '@gravity-ui/icons';
import type { ItemsNotFoundProps } from './itemsNotFound.props';
import { cn } from '@/shared/lib';
import styles from './ItemsNotFound.module.scss';
import { Text, Icon } from '@gravity-ui/uikit';

export const ItemsNotFound = ({
  className,
  label = 'По вашему запросу ничего не найдено...',
}: ItemsNotFoundProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <Icon data={Ghost} size={60} />
      <Text variant="subheader-3">{label}</Text>
    </div>
  );
};
