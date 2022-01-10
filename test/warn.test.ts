import { assertEquals, assertExists } from "../dev_deps.ts";
import {
  DeprecationWarning,
  getWarnings,
  groupWarnings,
  StabilityWarning,
  warn,
  Warning,
} from "../mod.ts";

//#region warn

Deno.test("warn()", () => {
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
});

//#endregion
//#region getWarnings

Deno.test("getWarnings()", () => {
  const warnings = getWarnings();
  assertEquals(warnings.size, 7);
});

Deno.test("getWarnings(ctor)", () => {
  const warnings = getWarnings(DeprecationWarning);
  assertEquals(warnings.size, 2);
});

Deno.test("getWarnings(ctor)", () => {
  const warnings = getWarnings("fancy");
  assertEquals(warnings.size, 4);
});

//#endregion
//#region groupWarnings

Deno.test("groupWarnings()", () => {
  const warnings = groupWarnings();
  assertEquals(warnings.size, 3);
  assertExists(warnings.get(Warning.name));
  assertEquals(warnings.get(Warning.name)!.size, 3);
  assertExists(warnings.get(DeprecationWarning.name));
  assertEquals(warnings.get(DeprecationWarning.name)!.size, 2);
  assertExists(warnings.get(StabilityWarning.name));
  assertEquals(warnings.get(StabilityWarning.name)!.size, 2);
});

//#endregion
