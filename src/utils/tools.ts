import Vue from 'vue';

export function makeConstCreator(prefix: string) {
  const constantList: string[] = [];
  return (constant: string) => {
    const s = `zm/${prefix}/${constant}`;
    if (constantList.indexOf(s) !== -1) {
      throw new Error(`Duplicated store constants:${s}`);
    } else {
      constantList.push(s);
      return s;
    }
  };
}

export function assignStoreState(state: any, payload: any) {
  Object.keys(payload).forEach((key) => {
    if (typeof payload[key] !== 'undefined') {
      if (state[key] !== payload[key]) {
        Vue.set(
          state,
          key,
          payload[key],
        );
      }
    }
  });
}