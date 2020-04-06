import { NavigationStackOptions } from "react-navigation-stack";

export interface Action<Payload = any> {
  type: string;
  payload?: Payload;
}
export type WithStackNavigationOptions<Type> = Type & {
  navigationOptions?: NavigationStackOptions;
};
export type JSObject<Value = any> = Record<string, Value>;
export type TypedFunction<Args extends any[] = any[], Return = void> = (
  ...args: Args
) => Return;
export type TypedAsyncFunction<
  Args extends any[] = any[],
  Return = Promise<void>
> = (...args: Args) => Return;
export type Unpack<Arg extends any[]> = Arg extends (infer Element)[]
  ? Element
  : never;
export type Writeable<T> = { -readonly [P in keyof T]-?: T[P] };
export function defined<T>(
  input: T
): input is Exclude<T, undefined | null | false> {
  return !!input;
}
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? DeepPartial<U>[]
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};
export type Diff<T, U> = T extends U ? never : T;
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export type Value =
  | string
  | boolean
  | null
  | undefined
  | JSObject
  | Value[]
  | object
  | number;
