/**
 * Contains the class and types for creating an {@link Warning}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Exception } from "../deps.ts";

import { TWarningInit } from "./types.ts";

/**
 * An interface describing the `init` properties for the
 * {@link Warning} class.
 */
export type WarningInit = TWarningInit;

/**
 * A class representing warnings that occur during the execution of an
 * application.
 *
 * All particle11 warning classes derive from this class.
 */
export class Warning<
  T extends WarningInit = WarningInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link Warning} class.
   */
  public readonly code: number = 32;

  /**
   * Creates a new {@link Warning} with the supplied `message`,
   * optionally with additional {@link WarningInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the warning.
   * @param init The {@link WarningInit} properties.
   */
  constructor(message: string, init?: T) {
    super(message, init);
  }
}
