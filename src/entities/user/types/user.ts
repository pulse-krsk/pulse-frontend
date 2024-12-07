export type User = {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

export type ShortUser = Omit<User, 'birthDate'>;
