import {
  lt as _lt,
  lte as _lte,
  gt as _gt,
  gte as _gte,
  eq as _eq,
  betweenRightClosed
} from "./utils";

function buildDefinition(label, comparisonFunction) {
  return {
    label,
    comparison: comparisonFunction
  };
}

export function lt(definedValue, label) {
  return buildDefinition(label, value => _lt(value, definedValue));
}

export function lte(definedValue, label) {
  return buildDefinition(label, value => _lte(value, definedValue));
}

export function gt(definedValue, label) {
  return buildDefinition(label, value => _gt(value, definedValue));
}

export function gte(definedValue, label) {
  return buildDefinition(label, value => _gte(value, definedValue));
}

export function eq(definedValue, label) {
  return buildDefinition(label, value => _eq(value, definedValue));
}

export function between(firstDefined, secondDefined, label) {
  return buildDefinition(label, value =>
    betweenRightClosed(value, firstDefined, secondDefined)
  );
}

export function definitionsMap(currentValue, definitions) {
  return definitions
    .reduce((map, {label, comparison}) => {
      return {
        ...map,
        [label]: comparison(currentValue)
      }
    }, {});
}