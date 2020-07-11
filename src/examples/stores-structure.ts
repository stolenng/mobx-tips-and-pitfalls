import {action, observable} from "mobx";
import * as faker from 'faker';

export class RootStore {
    dataStore: DataStore;
    uiStore: UiStore;

   init() {
       this.dataStore = new DataStore();
       this.uiStore = new UiStore();
   }
}

export class Room {
    @observable
    messages: Message[] = []
    @observable
    name: string;

    constructor() {
        this.name = faker.random.word();
        this.addMessage();
    }

    @action
    addMessage() {
        this.messages.push(new Message(faker.random.word()));
    }
}

export class ChatStore {
    @observable
    rooms: Room[] = []

    constructor() {
        for (let i=0;i<10;i++) {
            this.addRoom();
        }
    }

    @action
    addRoom() {
        this.rooms.push(new Room());
    }
}

export class Message {
    @observable
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}

export class DataStore {
    chatStore: ChatStore;

    constructor() {
        this.chatStore = new ChatStore();
    }
}

export class ChatView {
    selectedRoom: Room;
}

export class UiStore {
    chatView: ChatView;

    constructor() {
        this.chatView = new ChatView();
    }
}
