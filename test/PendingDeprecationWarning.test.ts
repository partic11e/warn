/**
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 */
import { assertEquals } from "../dev_deps.ts";
import { ExceptionSerializationData as esd, I11N_EXC_KB } from "../dev_deps.ts";

import {
  PendingDeprecationWarning,
  PendingDeprecationWarningInit,
} from "../mod.ts";

//#region Test Data

const exCode = 33;
const exName = "PendingDeprecationWarning";
const featureName = "exampleFeature";
const featureType = "function";
const aboutUrl = "https://example.com/deprecation.";

//#endregion
//#region Test constructors

Deno.test("PendingDeprecationWarning()", () => {
  const exMsg = "A feature is pending deprecation.";
  const ex = new PendingDeprecationWarning();
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

Deno.test("PendingDeprecationWarning({featureName})", () => {
  const exMsg = `The feature "${featureName}" is pending deprecation.`;
  const data: PendingDeprecationWarningInit = { featureName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new PendingDeprecationWarning(data);
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

Deno.test("PendingDeprecationWarning({featureType})", () => {
  const exMsg = `A ${featureType} is pending deprecation.`;
  const data: PendingDeprecationWarningInit = { featureType };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new PendingDeprecationWarning(data);
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

Deno.test("PendingDeprecationWarning({featureName, featureType})", () => {
  const exMsg = `The ${featureType} "${featureName}" is pending deprecation.`;
  const data: PendingDeprecationWarningInit = { featureName, featureType };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new PendingDeprecationWarning(data);
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

Deno.test("PendingDeprecationWarning({featureName, featureType, aboutUrl})", () => {
  const exMsg = `The ${featureType} "${featureName}" is pending deprecation.`;
  const data: PendingDeprecationWarningInit = {
    featureName,
    featureType,
    aboutUrl,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new PendingDeprecationWarning(data);
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

Deno.test("PendingDeprecationWarning(message)", () => {
  const exMsg = "The method exampleFeature is pending deprecation.";
  const ex = new PendingDeprecationWarning(exMsg);
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

Deno.test("PendingDeprecationWarning(message, {featureName, featureType, aboutUrl})", () => {
  const exMsg = "The method exampleFeature is pending deprecation.";

  const data: PendingDeprecationWarningInit = {
    featureName,
    featureType,
    aboutUrl,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new PendingDeprecationWarning(exMsg, data);
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
