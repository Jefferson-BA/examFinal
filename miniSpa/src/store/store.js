

import { create } from 'zustand';
import { serviceapi } from '../services/serviceapi';


export const useAppStore = create((set) => ({
  characters: [],


  fetchCharacters: async () => {
    set({ isLoading: true, error: null });


    try {
      const data = await serviceapi.getCharacters();
      set({
        characters: data,
      });
    } catch (err) {
      set({
        error: err.message || 'Error al cargar personajes',
        isLoading: false,
      });
    }
  },
}));
