/**
 * Test cases for the {@link PendingDeprecationWarning} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { PendingDeprecationWarningInit } from "../mod.ts";

export const exCode = 33;

export const exName = "PendingDeprecationWarning";

const featureName = "api.query";

const featureType = "function";

const aboutUrl = "https://example.com/deprecated/api-query";

const messages = ["The method exampleFeature is pending deprecation."];

export const initCases: [PendingDeprecationWarningInit, string][] = [
  [
    {featureName},
    `The feature "${featureName}" is pending deprecation.`
  ],
  [
    {featureName, featureType},
    `The ${featureType} "${featureName}" is pending deprecation.`
  ],
  [
    {featureName, aboutUrl},
    `The feature "${featureName}" is pending deprecation. Read more at ${aboutUrl}.`
  ],
  [
    {featureName, featureType, aboutUrl},
    `The ${featureType} "${featureName}" is pending deprecation. Read more at ${aboutUrl}.`
  ],
  [
    {featureType},
    `A ${featureType} is pending deprecation.`
  ],
  [
    {featureType, aboutUrl},
    `A ${featureType} is pending deprecation. Read more at ${aboutUrl}.`
  ],
  [
    {aboutUrl},
    `A feature is pending deprecation. Read more at ${aboutUrl}.`
  ]
];

export const messageCases = messages.map(m => [m]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [PendingDeprecationWarningInit, string][]);
