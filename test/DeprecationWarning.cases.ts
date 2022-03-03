/**
 * Test cases for the {@link DeprecationWarning} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { DeprecationWarningInit } from "../mod.ts";

export const exCode = 34;

export const exName = "DeprecationWarning";

const featureName = "api.query";

const featureType = "function";

const alternativeFeatureName = "api.search";

const aboutUrl = "https://example.com/deprecated/api-query";

const messages = ["The method exampleFeature has been deprecated."];

export const initCases: [DeprecationWarningInit, string][] = [
  [
    {featureName},
    `The feature "${featureName}" has been deprecated.`
  ],
  [
    {featureName, featureType},
    `The ${featureType} "${featureName}" has been deprecated.`
  ],
  [
    {featureName, alternativeFeatureName},
    `The feature "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}".`
  ],
  [
    {featureName, aboutUrl},
    `The feature "${featureName}" has been deprecated. Read more at ${aboutUrl}.`
  ],
  [
    {featureName, featureType, alternativeFeatureName},
    `The ${featureType} "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}".`
  ],
  [
    {featureName, featureType, aboutUrl},
    `The ${featureType} "${featureName}" has been deprecated. Read more at ${aboutUrl}.`
  ],
  [
    {featureName, featureType, alternativeFeatureName, aboutUrl},
    `The ${featureType} "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}". Read more at ${aboutUrl}.`
  ],
  [
    {featureType},
    `A ${featureType} has been deprecated.`
  ],
  [
    {featureType, alternativeFeatureName},
    `A ${featureType} has been deprecated. Instead use "${alternativeFeatureName}".`
  ],
  [
    {featureType, aboutUrl},
    `A ${featureType} has been deprecated. Read more at ${aboutUrl}.`
  ],
  [
    {featureType, alternativeFeatureName, aboutUrl},
    `A ${featureType} has been deprecated. Instead use "${alternativeFeatureName}". Read more at ${aboutUrl}.`
  ],
  [
    {alternativeFeatureName},
    `A feature has been deprecated. Instead use "${alternativeFeatureName}".`
  ],
  [
    {alternativeFeatureName, aboutUrl},
    `A feature has been deprecated. Instead use "${alternativeFeatureName}". Read more at ${aboutUrl}.`
  ],
  [
    {aboutUrl},
    `A feature has been deprecated. Read more at ${aboutUrl}.`
  ]
];

export const messageCases = messages.map(m => [m]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [DeprecationWarningInit, string][]);
