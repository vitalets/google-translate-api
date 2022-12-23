import { Translator } from "./index";
import { TranslateOptions } from "./types";

export * from "./index";

class HttpError extends Error {
  constructor(public readonly code: number, msg: string) {
    super(msg);
  }
}

export async function translate(inputText: string, options?: TranslateOptions) {
  return new Translator(inputText, {
    ...options,
    fetch,
    createHttpError: (code: number, msg: string) => new HttpError(code, msg),
  }).translate();
}
