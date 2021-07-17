// Ambient module declaration
declare module 'lodash' {
  // 1. interface declaration
  interface ILodash {
    camelCase(str?: string): string;
  }

  const _: ILodash;

  export = _;
}
