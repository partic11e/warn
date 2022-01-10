import { Warning, WarningInit } from "./Warning.ts";

const DEFAULT_MSG = "A feature is pending deprecation.";

const msgFromInit = (init: PendingDeprecationWarningInit): string => {
  const { featureName, featureType } = init;

  switch (true) {
    case (!!featureName && !!featureType):
      return `The ${featureType} "${featureName}" is pending deprecation.`;
    case (!!featureName):
      return `The feature "${featureName}" is pending deprecation.`;
    case (!!featureType):
      return `A ${featureType} is pending deprecation.`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link PendingDeprecationWarning} class.
 */
export interface PendingDeprecationWarningInit extends WarningInit {
  /**
   * The name of the feature that is deprecated.
   */

  featureName?: string;
  /**
   * The type of feature that is deprecated.
   */
  featureType?: string;

  /**
   * A URL pointing to a resource covering the deprecation.
   */
  aboutUrl?: string;
}

/**
 * A class representing warnings about features that are pending deprecation.
 */
export class PendingDeprecationWarning<
  T extends PendingDeprecationWarningInit = PendingDeprecationWarningInit,
> extends Warning<T> {
  //#region Constructors

  /**
   * Creates a new {@link PendingDeprecationWarning} with the default message,
   * "A feature has been deprecated.", and no warning init data.
   */
  constructor();
  /**
   * Creates a new {@link PendingDeprecationWarning} with a message created
   * based on {@link PendingDeprecationWarningInit} properties.
   *
   * @param init The {@link PendingDeprecationWarningInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link PendingDeprecationWarning} with the supplied
   * `message`, optionally with additional
   * {@link PendingDeprecationWarningInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the warning.
   * @param init The {@link PendingDeprecationWarningInit} properties.
   */
  constructor(message: string, init?: T);
  //  implementation
  constructor(msgOrInit: string | T = DEFAULT_MSG, maybeInit?: T) {
    //  (message: string, init?: T)
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    //  (init: T)
    if (typeof msgOrInit !== "string") {
      init = msgOrInit;
      message = msgFromInit(init);
    }

    super(message, init);
  }

  //#endregion
  //#region Public properties

  /**
   * The warning code for the {@link PendingDeprecationWarning} class.
   */
  public readonly code: number = 33;

  //#endregion
}
