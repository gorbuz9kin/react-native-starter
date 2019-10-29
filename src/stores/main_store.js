// @flow

import { observable, action } from 'mobx';
import { create } from "mobx-persist";
import { AsyncStorage } from 'react-native';

class MainStore {

  @observable isHydrated: boolean = false;

  @observable isLoading: boolean = false;

  // $FlowFixMe
  @action setHydrated(isHydrated) {
    this.isHydrated = isHydrated;
  }

  // $FlowFixMe
  @action setLoader(isLoading) {
    this.isLoading = isLoading;
  }

}

const hydrate = create({
  storage: AsyncStorage
});

const mainStore = new MainStore();

export default mainStore;

hydrate('mainStore', mainStore)
  .then(() => {
    mainStore.setHydrated(true);
  });
