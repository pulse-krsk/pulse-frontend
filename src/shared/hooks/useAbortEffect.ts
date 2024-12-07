import { abortController } from '../lib';
import { useUnmount } from 'ahooks';

export const useAbortEffect = () => {
  useUnmount(() => {
    abortController();
  });
};
