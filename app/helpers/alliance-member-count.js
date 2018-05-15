import { helper } from '@ember/component/helper';

export function allianceMemberCount(params/*, hash*/) {
  let corporations = params[0];
  let total = 0;

  corporations.map((corp) => {
    total = total + corp.memberCount;
  });

  return total;
}

export default helper(allianceMemberCount);
