import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {SearchHistoryService} from './searchHistoryType';

const useSearchHistoryStore = create<SearchHistoryService>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userExist = get().userList.find(u => u.id === user.id);
        if (!userExist) {
          set(state => ({userList: [...state.userList, user]}));
        }
      },
      removeUser: userId =>
        set(state => ({
          userList: state.userList.filter(user => user.id !== userId),
        })),
      clear: () => set({userList: []}),
    }),
    {
      name: '@SearchHistory',
      storage: storage,
    },
  ),
);

export function useSearchHistory(): SearchHistoryService['userList'] {
  const userList = useSearchHistoryStore(state => state.userList);

  return userList;
}

export function useSearchHistoryService(): Omit<
  SearchHistoryService,
  'userList'
> {
  const addUser = useSearchHistoryStore(state => state.addUser);
  const removeUser = useSearchHistoryStore(state => state.removeUser);
  const clear = useSearchHistoryStore(state => state.clear);

  return {
    addUser,
    removeUser,
    clear,
  };
}
