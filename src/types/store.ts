export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  something: {};
};

export enum Tiles {
  "clicktile" = "clicktile",
}

export enum Screen {
  "CHANGESCREEN" = "CHANGESCREEN"
}

export interface Clicktile {
  action: Tiles.clicktile,
  payload: Pick<AppState, "something">;
}

export interface ChangeScreen {
  action: Screen.CHANGESCREEN;
  payload: Pick<AppState, "something">;
}

export type Actions = Clicktile | ChangeScreen;
