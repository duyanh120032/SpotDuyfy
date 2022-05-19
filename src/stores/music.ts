import { defineStore } from "pinia";
import {
  getHome,
  getSong,
  getPlaylists,
  //... and many other services
} from "nhaccuatui-api-full";
export interface music {
  title: string;
  duration: string;
  isMyPlaylist: boolean;
  key: string;
  streamUrls?: [{ streamUrl: string }];
  thumbnail: string;
  artists: [{ name: string }];
  type: string;
}
interface HomeType {
  newRealease: {};
  ranking: {};
  topicEvent: [];
  topic: [];
  song: [];
}

export const useMusicStore = defineStore({
  id: "music",
  state: () => ({
    home: {} as HomeType,
    musics: [] as music[],
    playlist: [] as music[],
    currentMusic: {} as music,
  }),
  getters: {
    getMusics: (state) => state.musics,
    getHomeSongs: (state) => state.home.song,
    getTopicEvents: (state) => state.home.topicEvent,
    topics: (state) => state.home.topic,
    getCurrentMusic: (state) => state.currentMusic,
    isPlaying: (state) => state.currentMusic.key,
  },
  actions: {
    setMusics(musics: music[]) {
      this.musics = musics;
    },
    async setHome(home: any) {
      const res = await getHome();
      this.home = res;
    },
    setPlaylist(arr: any[]) {
      if (arr) {
        this.musics = arr;
        this.currentMusic = arr[0];
      }
    },
    async setPlayMusic(key: string) {
      const music = await getSong(key);
      this.currentMusic = music.song;
      //  check musics length
      if (this.musics.length === 0) {
      }
      this.musics.push(music.song);
    },
    nextMusic() {
      const index = this.musics.findIndex((music) => music.key === this.currentMusic.key);
      // check index

      if (index === this.musics.length - 1) {
        this.currentMusic = this.musics[0];
      } else {
        this.currentMusic = this.musics[index + 1];
      }
    },
    prevMusic() {
      const index = this.musics.findIndex((music) => music.key === this.currentMusic.key);
      // check index in last of array
      if (index !== 0) {
        this.currentMusic = this.currentMusic = this.musics[index - 1];
      } else {
        return;
      }
    },
  },
});
