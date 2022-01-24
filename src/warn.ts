/**
 * Contains functions and a registry for managing warning.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { IWarningCtor } from "./types.ts";

import { Warning } from "./Warning.ts";

/**
 * Returns a copy of the {@link Warning} registry.
 */
export function getWarnings(): Set<Warning>;
/**
 * Returns a copy of the {@link Warning} registry, optionally returning only
 * those in the registry that match a specific instance type.
 *
 * @param ctor The {@link Warning} instance constructor to return instances of.
 */
export function getWarnings(ctor?: IWarningCtor): Set<Warning>;
/**
 * Returns a copy of the {@link Warning} registry, optionally returning only
 * those in the registry with `messages` including a sub-string.
 *
 * @param msg The sub-string that must be included in the `message` property.
 */
export function getWarnings(msg?: string): Set<Warning>;
export function getWarnings(msgOrCtor?: string | IWarningCtor): Set<Warning> {
  const newWarningSet = new Set<Warning>();

  WARNINGS.forEach((warning) => {
    if (!filterWarnings(warning, msgOrCtor)) {
      newWarningSet.add(warning);
    }
  });

  return newWarningSet;
}

/**
 * Returns a list of the {@link Warning} instances in the {@link Warning}
 * registry, grouped by type.
 *
 * @returns The grouped list of {@link Warning} instances.
 */
export const groupWarnings = (): Map<string, Set<Warning>> => {
  const warningMap = new Map<string, Set<Warning>>();

  WARNINGS.forEach((warning) => {
    const ctor = warning.constructor;
    const name = ctor.name;

    if (!warningMap.has(name)) {
      warningMap.set(name, new Set<Warning>());
    }

    warningMap.get(name)!.add(warning);
  });

  return warningMap;
};

/**
 * Accepts a {@link Warning} instance and adds it to the warning registry.
 *
 * @param warning The {@link Warning} instance to add to the warning registry.
 */
export function warn<T extends Warning>(warning: T): void {
  if (!WARNINGS.has(warning)) {
    WARNINGS.add(warning);
  }
}

/**
 * The list of {@link Warning} instances added during application execution.
 */
const WARNINGS: Set<Warning> = new Set<Warning>();

/**
 * Accepts a {@link Warning} instance, and tests whether to filter it.
 * Filtering is checked against an instance, or asserting the {@link Warning}
 * `message` includes a sub-string.
 *
 * @param warning The {@link Warning} instance to test.
 * @param msgOrCtor The {@link Warning} constructor to match or the sub-string to match.
 * @returns
 */
const filterWarnings = (
  warning: Warning,
  msgOrCtor?: string | IWarningCtor,
): boolean => {
  if (!msgOrCtor) return false;
  if (typeof msgOrCtor === "string") {
    return !warning.message.includes(msgOrCtor);
  }

  return !(warning instanceof msgOrCtor);
};
