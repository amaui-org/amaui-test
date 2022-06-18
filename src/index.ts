import { TMethod } from '@amaui/models';

export * from './amaui-test';
export { default as AmauiTest } from './amaui-test';
export { default as AmauiTo } from './amaui-to';
export { default as AmauiGroup } from './amaui-group';
export { default as AmauiMiddleware } from './amaui-middleware';
export { default as assert } from './assert';
export * from './assert';
export { default as assertRequest } from './request';
export * from './request';

declare global {
  function group(name: string, method: TMethod): void;
  function to(name: string, method: (resolve?: <T>(arg?: T) => T, reject?: (arg?: Error) => Error) => any | Promise<any>): void;

  function preAll(method: TMethod): void;
  function preEveryGroup(method: TMethod): void;
  function preEveryTo(method: TMethod): void;
  function pre(method: TMethod): void;
  function preEveryGroupGroup(method: TMethod): void;
  function preTo(method: TMethod): void;
  function preEveryGroupTo(method: TMethod): void;

  function postAll(method: TMethod): void;
  function postEveryGroup(method: TMethod): void;
  function postEveryTo(method: TMethod): void;
  function post(method: TMethod): void;
  function postEveryGroupGroup(method: TMethod): void;
  function postTo(method: TMethod): void;
  function postEveryGroupTo(method: TMethod): void;
}
