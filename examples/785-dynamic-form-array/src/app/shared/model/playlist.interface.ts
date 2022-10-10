export interface Playlist {
  title: string;
  date: Date;
  songs: Song[];
  description?: string;
}

export interface Song {
  artist: Artist;
  title: string;
  duration: string;
}

export interface Artist {
  name: string;
}
