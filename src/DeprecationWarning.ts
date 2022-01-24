/**
 * Contains the class and types for creating an {@link DeprecationWarning}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Warning, WarningInit } from "./Warning.ts";

/**
 * The default {@link DeprecationWarning} message.
 */
const DEFAULT_MSG = "A feature has been deprecated.";

/**
 * Creates and returns an {@link DeprecationWarning} message based on
 * {@link DeprecationWarningInit} properties.
 *
 * @param init The {@link DeprecationWarningInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: DeprecationWarningInit): string => {
  const { featureName, featureType, alternativeFeatureName } = init;

  switch (true) {
    case (!!featureName && !!featureType && !!alternativeFeatureName):
      return `The ${featureType} "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}".`;
    case (!!featureName && !!featureType):
      return `The ${featureType} "${featureName}" has been deprecated.`;
    case (!!featureType && !!alternativeFeatureName):
      return `A ${featureType} has been deprecated. Instead use "${alternativeFeatureName}".`;
    case (!!featureName && !!alternativeFeatureName):
      return `The feature "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}".`;
    case (!!featureName):
      return `The feature "${featureName}" has been deprecated.`;
    case (!!featureType):
      return `A ${featureType} has been deprecated.`;
    case (!!alternativeFeatureName):
      return `A feature has been deprecated. Instead use "${alternativeFeatureName}".`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link DeprecationWarning} class.
 */
export interface DeprecationWarningInit extends WarningInit {
  /**
   * A URL pointing to a resource covering the deprecation.
   */
  aboutUrl?: string;

  /**
   * An alternative feature to use in place of the deprecated feature.
   */
  alternativeFeatureName?: string;

  /**
   * The name of the feature that is deprecated.
   */

  featureName?: string;
  /**
   * The type of feature that is deprecated.
   */
  featureType?: string;
}

/**
 * A class representing warnings about features that have been deprecated.
 */
export class DeprecationWarning<
  T extends DeprecationWarningInit = DeprecationWarningInit,
> extends Warning<T> {
  /**
   * The warning code for the {@link DeprecationWarning} class.
   */
  public readonly code: number = 34;

  /**
   * Creates a new {@link DeprecationWarning} with the default message,
   * "A feature has been deprecated.", and no warning init data.
   */
  constructor();
  /**
   * Creates a new {@link DeprecationWarning} with a message created
   * based on {@link DeprecationWarningInit} properties.
   *
   * @param init The {@link DeprecationWarningInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link DeprecationWarning} with the supplied
   * `message`, optionally with additional
   * {@link DeprecationWarningInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the warning.
   * @param init The {@link DeprecationWarningInit} properties.
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
