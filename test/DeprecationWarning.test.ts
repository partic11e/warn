/**
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 */
import { assertEquals } from "../dev_deps.ts";
import { ExceptionSerializationData as esd, I11N_EXC_KB } from "../dev_deps.ts";

import { DeprecationWarning, DeprecationWarningInit } from "../mod.ts";

//#region Test Data

const exCode = 34;
const exName = "DeprecationWarning";
const featureName = "exampleFeature";
const featureType = "function";
const alternativeFeatureName = "alternativeFeature";
const aboutUrl = "https://example.com/deprecation.";

//#endregion
//#region Test constructors

Deno.test("DeprecationWarning()", () => {
  const exMsg = "A feature has been deprecated.";
  const ex = new DeprecationWarning();
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, undefined);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({featureName})", () => {
  const exMsg = `The feature "${featureName}" has been deprecated.`;
  const data: DeprecationWarningInit = { featureName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({featureType})", () => {
  const exMsg = `A ${featureType} has been deprecated.`;
  const data: DeprecationWarningInit = { featureType };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({alternativeFeature})", () => {
  const exMsg =
    `A feature has been deprecated. Instead use "${alternativeFeatureName}".`;
  const data: DeprecationWarningInit = { alternativeFeatureName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({featureName, featureType})", () => {
  const exMsg = `The ${featureType} "${featureName}" has been deprecated.`;
  const data: DeprecationWarningInit = { featureName, featureType };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({featureName, alternativeFeature})", () => {
  const exMsg =
    `The feature "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}".`;
  const data: DeprecationWarningInit = { featureName, alternativeFeatureName };
  // const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  // const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
  //   encodeURIComponent(exMsg)
  // }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  // assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({featureType, alternativeFeature})", () => {
  const exMsg =
    `A ${featureType} has been deprecated. Instead use "${alternativeFeatureName}".`;
  const data: DeprecationWarningInit = { featureType, alternativeFeatureName };
  // const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  // const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
  //   encodeURIComponent(exMsg)
  // }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  // assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({featureType, featureName, alternativeFeature})", () => {
  const exMsg =
    `The ${featureType} "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}".`;
  const data: DeprecationWarningInit = {
    featureType,
    featureName,
    alternativeFeatureName,
  };
  // const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  // const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
  //   encodeURIComponent(exMsg)
  // }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  // assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning({featureName, featureType, alternativeFeature, aboutUrl})", () => {
  const exMsg =
    `The ${featureType} "${featureName}" has been deprecated. Instead use "${alternativeFeatureName}".`;
  const data: DeprecationWarningInit = {
    featureName,
    featureType,
    alternativeFeatureName,
    aboutUrl,
  };
  // const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new DeprecationWarning(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  // const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
  //   encodeURIComponent(exMsg)
  // }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  // assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning(message)", () => {
  const exMsg = "The method exampleFeature has been deprecated.";
  const ex = new DeprecationWarning(exMsg);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  // const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
  //   encodeURIComponent(exMsg)
  // }`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, undefined);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  // assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("DeprecationWarning(message, {featureName, featureType, alternativeFeatureName, aboutUrl})", () => {
  const exMsg = "The method exampleFeature has been deprecated.";

  const data: DeprecationWarningInit = {
    featureName,
    featureType,
    alternativeFeatureName,
    aboutUrl,
  };
  // const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new DeprecationWarning(exMsg, data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  // const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
  //   encodeURIComponent(exMsg)
  // }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  // assertEquals(ex.helpUrl, exHelpUrl);
});

//#endregion
