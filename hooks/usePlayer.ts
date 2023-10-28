import { create } from 'zustand';

interface PlayerStore {
  ids: number[];
  activeId: number;
  setId: (id: number) => void;
  setIds: (ids: number[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: 0,
  setId: (id) => set({ activeId: id }),
  setIds: (ids) => set({ ids: ids }),
  reset: () => set({ ids: [], activeId: 0 }),
}));

export default usePlayer;
