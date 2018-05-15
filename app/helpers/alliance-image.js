import { helper } from '@ember/component/helper';

export function allianceImage(params) {
  let id = parseInt(params[0]),
      link = `https://imageserver.eveonline.com/Alliance/${id}_128.png`;

  return link;
}

export default helper(allianceImage);
