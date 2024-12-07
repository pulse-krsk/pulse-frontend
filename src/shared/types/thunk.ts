export type ThunkError = {
  message: string;
};

export type ThunkStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';
