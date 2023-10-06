const SET_STATE = "SET_STATE";

let initialState = {
    cards: [
        { id: "1", src: "/img/playlist01.png", ref: "/collections/1", altData: "day's playlist", title: "Плейлист Дня" },
        { id: "2", src: "/img/playlist02.png", ref: "/collections/2", altData: "100 dance", title: "Танцевальные 100" },
        { id: "3", src: "/img/playlist03.png", ref: "/collections/3", altData: "Indi power", title: "Инди Заряд" },
    ]
}

const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export const setStateSaidBarCardsAC = () => {
    return {
        type: SET_STATE
    }
}

export default sideBarReducer;