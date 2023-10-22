export enum Commands {
  backspace = "[backspace]",
  delete = "[delete]",
  arrowUp = "[arrow-up]",
  arrowDown = "[arrow-down]",
  arrowLeft = "[arrow-left]",
  arrowRight = "[arrow-right]",
  shortDown = "[short-down]",
  control = "[control]",
  alt = "[alt]",
  escape = "[escape]",
}

export type Command = keyof typeof Commands;
