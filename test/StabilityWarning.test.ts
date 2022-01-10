/**
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 */
import { assertEquals } from "../dev_deps.ts";
import { ExceptionSerializationData as esd, I11N_EXC_KB } from "../dev_deps.ts";

import { StabilityWarning, StabilityWarningInit } from "../mod.ts";

//#region Test Data

const exCode = 35;
const exName = "StabilityWarning";
const featureName = "exampleFeature";
const featureType = "function";
const aboutUrl = "https://example.com/stability.";

//#endregion
//#region Test constructors

Deno.test("StabilityWarning()", () => {
  const exMsg =
    "A feature is unstable and should not be used in production environments.";
  const ex = new StabilityWarning();
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

Deno.test("StabilityWarning({featureName})", () => {
  const exMsg =
    `The feature "${featureName}" is unstable and should not be used in production environments.`;
  const data: StabilityWarningInit = { featureName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new StabilityWarning(data);
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

Deno.test("StabilityWarning({featureType})", () => {
  const exMsg =
    `A ${featureType} is unstable and should not be used in production environments.`;
  const data: StabilityWarningInit = { featureType };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new StabilityWarning(data);
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

Deno.test("StabilityWarning({featureName, featureType})", () => {
  const exMsg =
    `The ${featureType} "${featureName}" is unstable and should not be used in production environments.`;
  const data: StabilityWarningInit = { featureName, featureType };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new StabilityWarning(data);
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

Deno.test("StabilityWarning({featureName, featureType, aboutUrl})", () => {
  const exMsg =
    `The ${featureType} "${featureName}" is unstable and should not be used in production environments.`;
  const data: StabilityWarningInit = { featureName, featureType, aboutUrl };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new StabilityWarning(data);
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

Deno.test("StabilityWarning(message)", () => {
  const exMsg = "The method exampleFeature should not be used in production.";
  const ex = new StabilityWarning(exMsg);
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

Deno.test("StabilityWarning(message, {featureName, featureType, aboutUrl})", () => {
  const exMsg = "The method exampleFeature should not be used in production.";

  const data: StabilityWarningInit = { featureName, featureType, aboutUrl };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new StabilityWarning(exMsg, data);
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

//#endregion
