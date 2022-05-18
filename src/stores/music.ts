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
  },
  actions: {
    setMusics(musics: music[]) {
      this.musics = musics;
    },
    async setHome(home: any) {
      const res = await getHome();
      this.home = res;
    },
    async setPlaylist() {
      const res = await getPlaylists();
      this.playlist = res;
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
      const index = this.musics.indexOf(this.currentMusic);
      // check index
      if (index === this.musics.length - 1) {
        this.currentMusic = this.musics[0];
      } else {
        this.currentMusic = this.musics[index + 1];
      }
    },
    prevMusic() {
      const index = this.musics.indexOf(this.currentMusic);
      // check index in last of array
      if (index !== 0) {
        this.currentMusic = this.musics[this.musics.length - 1];
      } else {
        return;
      }
    },
  },
});
