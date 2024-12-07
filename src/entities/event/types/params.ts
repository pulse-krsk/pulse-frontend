export type EventsSearchParams = Partial<{
  page: number;
  title: string;
  start_date: string;
  end_date: string;
  types: { type: string }[];
}>;

export type EventParams = {
  eventId: string;
};
