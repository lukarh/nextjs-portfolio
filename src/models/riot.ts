export interface RiotTFTQueueData {
  puuid: string,
  leagueId: string,
  queueType: string,
  tier: string,
  rank: string,
  leaguePoints: number,
  wins: number,
  losses: number,
  veteran: boolean,
  freshBlood: boolean,
  hotStreaK: boolean
}

export interface TFTRankInfo {
  tier: string,
  rank: string,
  wins: number,
  losses: number,
}