import { TypedSymbolState } from "../types/TypedSymbolState";

export function calculateAccuracy(typedText: TypedSymbolState[]): number {
  let correctCharacters = 0;
  let index = 0;

  for (; index < typedText.length; index++) {
    const typedSymbol = typedText[index];

    if (typedSymbol === "correct") {
      correctCharacters++;
    }

    if (typedSymbol === "pending") {
      break;
    }
  }

  return ((correctCharacters / index) * 100) | 0;
}
