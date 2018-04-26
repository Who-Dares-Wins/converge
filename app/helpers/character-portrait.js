import { helper } from '@ember/component/helper';

export function characterPortrait(params, hash) {
  let { id, size } = hash;

  return `https://imageserver.eveonline.com/Character/${id}_${size}.jpg`;
}

export default helper(characterPortrait);
