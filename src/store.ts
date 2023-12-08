import { create } from "zustand";
import { ParentPlatform } from "./components/PlatformList";

interface GameQuery {
    genreId?: number;
    platform?: ParentPlatform | null;
    order?: string;
    searchText?: string;
  }

interface GameQueryStore{
    gameQuery: GameQuery;
    setInitialState: ()=> void;
    setSearchText:(searchText: string)=> void;
    setGenre: (genreId: number)=> void;
    setPlatform: (platform: ParentPlatform)=>void;
    setOrder: (order: string)=> void;
}

const useGameQueryStore= create<GameQueryStore>(set=>({
    gameQuery:{},
    setInitialState: ()=> set(()=> ({gameQuery: {} })),
    setSearchText:(searchText)=> set(()=>({gameQuery:{searchText}})),
    setPlatform:(platform)=> set((store)=> ({gameQuery: {...store.gameQuery, platform}})),
    setGenre: (genreId)=> set((store)=> ({gameQuery: {...store.gameQuery,genreId}})),
    setOrder: (order)=>set((store)=>({gameQuery:{...store.gameQuery,order}}))
}))

export default useGameQueryStore;