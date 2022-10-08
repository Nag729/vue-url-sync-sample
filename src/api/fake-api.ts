import { ALL_CLUB_DATA_LIST, ClubData } from "./club-data";

export type FetchClubQuery = {
  name?: string;
  prefecture?: string;
  capacity?: number;
};

export const fetchJ1ClubData = async (
  query?: FetchClubQuery
): Promise<ClubData[]> => {
  // simulate network delay
  const waitingSeconds = Math.random() * 1.5;
  await new Promise((resolve) => setTimeout(resolve, waitingSeconds * 1000));

  // TODO: filter を書く
  return ALL_CLUB_DATA_LIST;
};
