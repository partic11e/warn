/**
 * Contains the class and types for creating an {@link StabilityWarning}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Warning, WarningInit } from "./Warning.ts";

/**
 * The default {@link StabilityWarning} message.
 */
const DEFAULT_MSG =
  "A feature is unstable and should not be used in production environments.";

/**
 * Creates and returns an {@link StabilityWarning} message based on
 * {@link StabilityWarningInit} properties.
 *
 * @param init The {@link StabilityWarningInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: StabilityWarningInit): string => {
  const { featureName, featureType } = init;

  switch (true) {
    case (!!featureName && !!featureType):
      return `The ${featureType} "${featureName}" is unstable and should not be used in production environments.`;
    case (!!featureName):
      return `The feature "${featureName}" is unstable and should not be used in production environments.`;
    case (!!featureType):
      return `A ${featureType} is unstable and should not be used in production environments.`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link StabilityWarning} class.
 */
export interface StabilityWarningInit extends WarningInit {
  /**
   * A URL pointing to a resource covering the unstable feature.
   */
  aboutUrl?: string;

  /**
   * The name of the feature that is unstable.
   */

  featureName?: string;
  /**
   * The type of feature that is unstable.
   */
  featureType?: string;
}

/**
 * A class representing warnings about features that are unstable and should
 * not be used in production.
 */
export class StabilityWarning<
  T extends StabilityWarningInit = StabilityWarningInit,
> extends Warning<T> {
  /**
   * The warning code for the {@link StabilityWarning} class.
   */
  public readonly code: number = 35;

  /**
   * Creates a new {@link StabilityWarning} with the default message,
   * "A feature is unstable and should not be used in production environments."
   * , and no warning init data.
   */
  constructor();
  /**
   * Creates a new {@link StabilityWarning} with a message created
   * based on {@link StabilityWarningInit} properties.
   *
   * @param init The {@link StabilityWarningInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link StabilityWarning} with the supplied
   * `message`, optionally with additional
   * {@link StabilityWarningInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the warning.
   * @param init The {@link StabilityWarningInit} properties.
   */
  constructor(message: string, init?: T);
  constructor(msgOrInit: string | T = DEFAULT_MSG, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== "string") {
      init = msgOrInit;
      message = msgFromInit(init);
    }

    super(message, init);
  }
}
