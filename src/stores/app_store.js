// @flow

import { observable, action } from 'mobx';
import { create, persist } from "mobx-persist";
import AsyncStorage from '@react-native-community/async-storage';

class AppStore {

  @observable isHydrated = false;

  @observable isLoading = false;

  @persist @observable isFistLaunch = true;

  @action setHydrated(isHydrated: boolean) {
    this.isHydrated = isHydrated;
  }

  @action setLoader(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @action setFirstLaunch() {
    this.isFistLaunch = false;
  }

}

const hydrate = create({
  storage: AsyncStorage
});

const appStore = new AppStore();

export default appStore;

hydrate('appStore', appStore)
  .then(() => {
    appStore.setHydrated(true);
  });
