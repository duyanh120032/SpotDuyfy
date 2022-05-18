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
    playing: false,
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
      // this.musics.forEach((item) => {
      //   music.key === item.key ? this.musics.splice(item, 1) : null;
      // })
    },
    nextMusic() {
      const index = this.musics.indexOf(this.currentMusic) ;
      this.currentMusic = this.musics[index + 1];
    },
  },
});
