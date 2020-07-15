import flatten from 'flat';
import * as trans from './_trans';

const data: Record<string, string> = {};
Object.keys(trans).forEach((key) => {
  // @ts-ignore
  const locale = trans[key];
  data[key] = flatten(locale);
});
export default data;
