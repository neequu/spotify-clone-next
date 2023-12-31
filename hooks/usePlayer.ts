import { create } from 'zustand';

interface PlayerStore {
  ids: number[];
  activeId: number | undefined;
  setId: (id: number) => void;
  setIds: (ids: number[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id) => set({ activeId: id }),
  setIds: (ids) => set({ ids: ids }),
  reset: () => set({ ids: [], activeId: undefined }),
}));

export default usePlayer;
