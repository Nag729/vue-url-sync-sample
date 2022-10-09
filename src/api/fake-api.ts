import { ALL_CLUB_DATA_LIST, ClubData } from "./club-data";

export type FetchClubProps = {
  name: string;
  prefecture: string;
  capacity: {
    min: number;
    max: number;
  };
};

export const fetchClubDataApi = async (
  props?: FetchClubProps
): Promise<ClubData[]> => {
  // simulate network delay
  const waitingSeconds = Math.random() * 1.5;
  await new Promise((resolve) => setTimeout(resolve, waitingSeconds * 1000));

  if (!props) {
    return ALL_CLUB_DATA_LIST;
  }

  const { name, prefecture, capacity } = props;
  return ALL_CLUB_DATA_LIST.filter((club) => {
    const isNameMatched = !name || club.name === name;
    const isPrefectureMatched = !prefecture || club.prefecture === prefecture;
    const isCapacityMatched =
      capacity.min <= club.capacity && club.capacity <= capacity.max;

    return isNameMatched && isPrefectureMatched && isCapacityMatched;
  });
};
