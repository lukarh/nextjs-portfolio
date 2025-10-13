export interface DiscordStatus {
  discordName: string;
  discordAvatar: string;
  status: string;
  listening_to_spotify: boolean;
  activities: SpotifyActivity | null;
}

export interface SpotifyActivity {
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  track_id: string;
}
