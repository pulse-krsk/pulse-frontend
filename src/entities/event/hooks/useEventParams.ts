import { useParams } from 'react-router-dom';
import type { EventParams } from '../types';

export const useEventParams = () => useParams<EventParams>();
