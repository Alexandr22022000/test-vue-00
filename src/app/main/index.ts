import Vue from 'vue';
import { State, Action } from 'vuex-class';
import * as TYPES from '../store/constants';
import Component from 'vue-class-component';

@Component({
    template: require('./template.pug')
})

export default class MainComponent extends Vue {
    @Action(TYPES.CHANGE_TEXT) changeText;

    @State(state => state.store.text) text: string;

    onInputText (text: string) {
        this.changeText(text);
    }
}