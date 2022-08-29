/** 任意对象类型 */
export interface AnyObj<T> {
    [property: string]: T;
}

/** 任意参数类型 */
export type AnyParamFn<T> = (Params?: AnyObj<any>) => T;

/** 任意函数类型 */
export type Callback = AnyParamFn<void>;

/** 生命周期钩子 */
export type LifeHook = (fn: Callback) => void;
