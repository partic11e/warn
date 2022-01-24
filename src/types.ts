/**
 * Contains the shared types for warn module in the particle11 core
 * library.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { TExceptionInit } from "../deps.ts";

import { Warning } from "./Warning.ts";

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
