import assert from 'assert';
import { translate } from '../src/node';

type Assert = typeof assert.strict;
type TranslateFn = typeof translate;

declare global {
  const assert: Assert;
  const translate: TranslateFn;
}

Object.assign(global, {
  assert: assert.strict,
  translate,
});
