import { helper } from '@ember/component/helper';

export function corporationImage(params) {
  let id = parseInt(params[0]),
      link = `https://imageserver.eveonline.com/Corporation/${id}_256.png`;

  return link;
}

export default helper(corporationImage);
