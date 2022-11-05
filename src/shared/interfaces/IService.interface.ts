export interface IService<T> {
  send: (...args: T[]) => Promise<any>;
}
