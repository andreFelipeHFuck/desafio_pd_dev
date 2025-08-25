export interface Player {
  uid: string;
  name: string;
  photoSmall: string;
}

export interface Match {
  match_id: string;
  sport_id: string;
  status_id: string;
  matchType: string;
  competition?: {
    comp_id: string;
    edition_id: string;
    round_id: string;
    group?: number;
  };
  date: {
    expected: string;
    end?: string;
  };
  player_1: Player;
  player_2: Player;
  result: {
    winner: {
      uid: string;
    };
    player_1: {
      uid: string;
      set1: number;
      set2: number;
      set3: number;
      set4?: number;
      set5?: number;
    };
    player_2: {
      uid: string;
      set1: number;
      set2: number;
      set3: number;
      set4?: number;
      set5?: number;
    };
  };
}