import { createAction, handleActions } from "redux-actions";
import { applyPenders } from "redux-pender";

// actions types

const CHANGE_LANG = "CHANGE_LANG";
const CHANGE_LOG = "CHANGE_LOG";

// action creators

export const changeLang = createAction(CHANGE_LANG);
export const changeLog = createAction(CHANGE_LOG);

// initial state

const initialState = {
    lang: "en",
    isLogged: false,
};

// reducer

const reducer = handleActions({
        [CHANGE_LANG] : (state, action) => {
                const { lang } = action.payload;
        return {
            ...state,
            lang
        }
    },
        [CHANGE_LOG] : (state, action) => {
            const { isLogged } = action.payload;
        return {
            ...state,
            isLogged
        }
    },

},initialState);

export default applyPenders(reducer,[]);
