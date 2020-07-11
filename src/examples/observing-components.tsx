import React, {FunctionComponent} from "react";
import {observer, useObserver} from "mobx-react-lite";
import {useStore} from "./connect-to-react";

export const AllComponentObserved: FunctionComponent = observer(() => {
    const {dataStore: {chatStore}} = useStore();

    return (
        <div>
            <div style={{marginBottom: '15px'}}>AllComponentObserved</div>
            {chatStore.rooms.reverse().map((room, index) => {
                return (
                    <div key={index} style={{marginBottom: '15px'}}>
                        <div>Room Name: {room.name}</div>
                        <div>Messages: {room.messages.map(message => <div
                            key={`${message.message}-${index}`}>{message.message}</div>)}</div>
                    </div>
                )
            })}
        </div>
    )
})

export const PartialComponentObserved: FunctionComponent = () => {
    const {dataStore: {chatStore}} = useStore();

    return useObserver(() => {
        return (
            <div>
                <div style={{marginBottom: '15px'}}>PartialComponentObserved</div>
                {chatStore.rooms.reverse().map((room, index) => {
                    return (
                        <div key={index} style={{marginBottom: '15px'}}>
                            <div>Room Name: {room.name}</div>
                            <div>Messages: {room.messages.map(message => <div
                                key={`${message.message}-${index}`}>{message.message}</div>)}</div>
                        </div>
                    )
                })}
            </div>
        )
    });
};

export const NonObservedComponent: FunctionComponent = () => {
    const {dataStore: {chatStore}} = useStore();

    return (
        <div>
            <div style={{marginBottom: '15px'}}>NonObservedComponent</div>
            {chatStore.rooms.reverse().map((room, index) => {
                return (
                    <div key={index} style={{marginBottom: '15px'}}>
                        <div>Room Name: {room.name}</div>
                        <div>Messages: {room.messages.map(message => <div
                            key={`${message.message}-${index}`}>{message.message}</div>)}</div>
                    </div>
                )
            })}
        </div>
    )
};
