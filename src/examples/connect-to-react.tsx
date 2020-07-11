import React from 'react';

import {useContext} from "react";
import {createContext} from "react";
import {RootStore} from "./stores-structure";

export const createStore = () => {
    const rootStore = new RootStore();

    rootStore.init();

    return rootStore;
}

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;

export const useStore = (): RootStore => {
    return useContext(StoreContext);
};
