import { Translator } from "./index";
import { TranslateOptions } from "./types";
import fetch from "node-fetch";
import createHttpError from "http-errors";

export * from "./index";

export async function translate(inputText: string, options?: TranslateOptions) {
  return new Translator(inputText, {
    ...options,
    fetch: fetch as any,
    createHttpError,
  }).translate();
}
