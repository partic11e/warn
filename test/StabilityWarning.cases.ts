/**
 * Test cases for the {@link StabilityWarning} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { StabilityWarningInit } from "../mod.ts";

export const exCode = 35;

export const exName = "StabilityWarning";

const featureName = "api.query";

const featureType = "function";

const aboutUrl = "https://example.com/deprecated/api-query";

const messages = ["The method exampleFeature is unstable and should not be used in production environments."];

export const initCases: [StabilityWarningInit, string][] = [
  [
    {featureName},
    `The feature "${featureName}" is unstable and should not be used in production environments.`
  ],
  [
    {featureName, featureType},
    `The ${featureType} "${featureName}" is unstable and should not be used in production environments.`
  ],
  [
    {featureName, aboutUrl},
    `The feature "${featureName}" is unstable and should not be used in production environments. Read more at ${aboutUrl}.`
  ],
  [
    {featureName, featureType, aboutUrl},
    `The ${featureType} "${featureName}" is unstable and should not be used in production environments. Read more at ${aboutUrl}.`
  ],
  [
    {featureType},
    `A ${featureType} is unstable and should not be used in production environments.`
  ],
  [
    {featureType, aboutUrl},
    `A ${featureType} is unstable and should not be used in production environments. Read more at ${aboutUrl}.`
  ],
  [
    {aboutUrl},
    `A feature is unstable and should not be used in production environments. Read more at ${aboutUrl}.`
  ]
];

export const messageCases = messages.map(m => [m]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [StabilityWarningInit, string][]);
