import type { User } from '@/entities/user/types';

export type LoginResponse = User;

export type RefreshResponse = LoginResponse;
