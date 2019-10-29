// @flow

import { observable, action } from 'mobx';
import { create } from "mobx-persist";
import { AsyncStorage } from 'react-native';

class MainStore {

  @observable isHydrated: boolean = false;

  @observable isLoading: boolean = false;

  @action setHydrated(isHydrated: boolean) {
    this.isHydrated = isHydrated;
  }

  @action setLoader(isLoading: boolean) {
    this.isLoading = isLoading;
  }

}

const mainStore = new MainStore();

const hydrate = create({ storage: AsyncStorage });

export default mainStore;

hydrate('mainStore', mainStore)
  .then(() => {
    mainStore.setHydrated(true);
  });
