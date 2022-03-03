/**
 * Tests the features of the {@link StabilityWarning}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

 import { assertEquals, Testing } from "../dev_deps.ts";

 import { StabilityWarning, StabilityWarningInit } from "../mod.ts";
 
 import { ExceptionSerializationData as esd, P11_EXC_KB } from "../dev_deps.ts";
 
 import {
   allCases,
   exCode,
   exName,
   initCases,
   messageCases,
 } from "./StabilityWarning.cases.ts";
 
 import { TrackFailedCase } from "./_util.ts";
 
 const { TestSuite, TestCase, Test } = Testing.decorators;
 
 const ClassCtor = StabilityWarning;
 
 @TestSuite("StabilityWarning")
 class TestSuiteClass<I extends StabilityWarningInit = StabilityWarningInit> {
   @Test("()")
   public testWithNoArgs() {
     const exMsg = "A feature is unstable and should not be used in production environments.";
     const ex = new ClassCtor();
     const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
     const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
       encodeURIComponent(exMsg)
     }`;
 
     assertEquals(ex.name, exName);
     assertEquals(ex.code, exCode);
     assertEquals(ex.data, undefined);
     assertEquals(ex.message, exMsg);
     assertEquals(ex.toString(), ex2String);
     assertEquals(ex.helpUrl, exHelpUrl);
   }
 
   @Test("(init)")
   @TestCase(...initCases)
   @TrackFailedCase
   public testWithInit([data, exMsg]: [I, string]) {
     const dataEncoded = encodeURIComponent(JSON.stringify(data));
     const ex = new ClassCtor(data);
     const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
     const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
       encodeURIComponent(exMsg)
     }&${esd.data}=${dataEncoded}`;
 
     assertEquals(ex.name, exName);
     assertEquals(ex.code, exCode);
     assertEquals(ex.data, data);
     assertEquals(ex.message, exMsg);
     assertEquals(ex.toString(), ex2String);
     assertEquals(ex.helpUrl, exHelpUrl);
   }
 
   @Test("(message)")
   @TestCase(...messageCases)
   @TrackFailedCase
   public testWithMessage([exMsg]: [string]) {
     const ex = new ClassCtor(exMsg);
     const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
     const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
       encodeURIComponent(exMsg)
     }`;
 
     assertEquals(ex.name, exName);
     assertEquals(ex.code, exCode);
     assertEquals(ex.data, undefined);
     assertEquals(ex.message, exMsg);
     assertEquals(ex.toString(), ex2String);
     assertEquals(ex.helpUrl, exHelpUrl);
   }
 
   @Test("(message, init)")
   @TestCase(...allCases)
   @TrackFailedCase
   public testAll([data, exMsg]: [I, string]) {
     const dataEncoded = encodeURIComponent(JSON.stringify(data));
     const ex = new ClassCtor(exMsg, data);
     const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
     const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
       encodeURIComponent(exMsg)
     }&${esd.data}=${dataEncoded}`;
 
     assertEquals(ex.name, exName);
     assertEquals(ex.code, exCode);
     assertEquals(ex.data, data);
     assertEquals(ex.message, exMsg);
     assertEquals(ex.toString(), ex2String);
     assertEquals(ex.helpUrl, exHelpUrl);
   }
 }
 
 Testing(TestSuiteClass);
 