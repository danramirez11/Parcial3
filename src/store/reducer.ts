import { Screen, Tiles } from "../types/store";

export const reducer = (actualState: any, actualAction: any) => {
    const { action, payload } = actualAction;

    switch(action){
        case Tiles.clicktile:
            return {
                ...actualState,
                clickedtiles: payload
            }
            break;
        
        case Screen.CHANGESCREEN:
            return {
                ...actualState,
                screen: payload,
            }
            break;
    }
}