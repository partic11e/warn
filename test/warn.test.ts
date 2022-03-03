/**
 * Tests the features of the warn.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals, assertExists, Testing } from "../dev_deps.ts";
import './_util.ts';

import {
  DeprecationWarning,
  getWarnings,
  groupWarnings,
  StabilityWarning,
  warn,
  Warning,
} from "../mod.ts";

const { TestSuite, Test } = Testing.decorators;

@TestSuite("warn()")
class TestSuiteClass {
  //  TODO: Move to TestSuiteStart when it is fixed.
  @Test("setup")
  public setUp() {
    warn(new Warning("1. Please stop doing this."));
    warn(new Warning("2. Please stop doing this."));
    warn(new Warning("3. Please stop doing this."));
    warn(new DeprecationWarning({ featureName: "fancyFetch" }));
    warn(new DeprecationWarning({ featureName: "fancyPut" }));
    warn(
      new StabilityWarning({
        featureName: "fancyPatch",
        featureType: "function",
      }),
    );
    warn(
      new StabilityWarning({
        featureName: "fancyDelete",
        featureType: "function",
      }),
    );
  }

  @Test("getWarnings()")
  public testGetWarnings() {
    const warnings = getWarnings();
  
    assertEquals(warnings.size, 7);
  }

  @Test("getWarnings(ctor)")
  public testGetWarningsByCtor() {
    const warnings = getWarnings(DeprecationWarning);
  
    assertEquals(warnings.size, 2);
  }

  @Test("getWarnings(message)")
  public testGetWarningsByMessage() {
    const warnings = getWarnings("fancy");
  
    assertEquals(warnings.size, 4);
  }

  @Test("groupWarnings()")
  public testGroupwarnings() {
    const warnings = groupWarnings();
  
    assertEquals(warnings.size, 3);
    assertExists(warnings.get(Warning.name));
    assertEquals(warnings.get(Warning.name)!.size, 3);
    assertExists(warnings.get(DeprecationWarning.name));
    assertEquals(warnings.get(DeprecationWarning.name)!.size, 2);
    assertExists(warnings.get(StabilityWarning.name));
    assertEquals(warnings.get(StabilityWarning.name)!.size, 2);
  }  
}

Testing(TestSuiteClass);
