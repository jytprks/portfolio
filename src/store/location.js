import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";
import { locations } from "#constraints";

const DEFAULT_LOCATION = locations.work;

const useLocation = create(immer((set)=>({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location = null) =>set((state) => {
        state.activeLocation = location;
    }),
    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
    })
})),
)

export default useLocation;