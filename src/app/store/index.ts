import {action, module, mutation} from 'vuex-ts-decorators';
import {Store} from 'vuex';
import * as TYPES from './constants';

type mainActions = {
    CHANGE_TEXT: string;
  };
  
type mainMutations = {
    SET_TEXT: string;
};

type TypedDispatch = <T extends keyof mainActions>(type: T, value?: mainActions[T] ) => Promise<any[]>;
type TypedCommit = <T extends keyof mainMutations>(type: T, value?: mainMutations[T] ) => void;

class TypedStore extends Store<any> {
    constructor() {
      super({}); // Make Vuex.Store happy
    }
    commit: TypedCommit;
    dispatch: TypedDispatch;
}

@module
class MyStore extends TypedStore {
    text: string = 'none';

    @action 
    [TYPES.CHANGE_TEXT] (text: string) {
        this.commit(TYPES.SET_TEXT, text);
    }

    @mutation
    [TYPES.SET_TEXT] (text: string) {
        this.text = text;
    }
}

@module({
    store: true,
    modules: {
        store: new MyStore()
    }
})
class MainStore extends TypedStore {
    private store: MyStore;
}

export default MainStore;