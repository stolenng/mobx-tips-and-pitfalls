import React, {FunctionComponent} from "react";
import {useStore} from "./connect-to-react";

const ComponentUsesStore: FunctionComponent = () => {
    const {dataStore: {chatStore}, uiStore: {chatView}} = useStore();

    return (
        <div>
            {chatStore.rooms.length}
        </div>
    )
}

export default ComponentUsesStore;
