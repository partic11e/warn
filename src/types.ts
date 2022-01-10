import { Warning } from "./Warning.ts";
import { TExceptionInit } from "../deps.ts";

/**
 * A generic interface describing additional `init` properties available to a
 * specific derived {@link Warning} unified with the common properties
 * available to all {@link Warning} classes.
 */
export type TWarningInit<
  T extends Record<string, unknown> = Record<string, unknown>,
> = TExceptionInit<T>;

/**
 * An interface describing a {@link Warning} class contructor.
 */
export interface IWarningCtor<T extends Warning = Warning> {
  new (message?: string): T;
}
