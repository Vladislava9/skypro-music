let store = {
    _state: {
        cardImage: [
            {id: 1, src: "img/playlist01.png"},
            {id: 2, src: "img/playlist02.png"},
            {id: 3, src: "img/playlist03.png"}
        ]
    },
    getState() {
        return this._state;
    }
}

export default store;