/**
 * Waits for an element satisfying selector to exist, then resolves promise with the element.
 * @param {HTMLElement} [parent=document.documentElement] The parent element to watch.
 * @param {String} selector The querySelector to watch for.
 * @returns {Promise} A promise resolved when the element exists.
 * @memberOf element
 * @function
 * @example
 * _$.elementReady("#text").then((e) => e.remove());//Wait for an element with an ID of "text" then removes it.
 */
export function elementReady(selector?: string, parent?: HTMLElement): Promise<any>;
/**
 * Create a DOM element from a querySelector with option to include content
 * @memberOf element
 * @function
 * @param {String} querySelector (optional) default to div
 * @param {...String|Number|DOMElement} [content] (optional)
 * @returns DOMElement
 *
 * @example
 * - _$.create(); // <div>
 * - _$.create('span#my-id.my-class.second-class'); // <span id="my-id" class="my-class second-class">
 * - _$.create('#my-id.my-class.second-class', 'text to insert', 12345); // <div id="my-id" class="my-class second-class">
 */
export function create(querySelector?: string, ...content?: (string | number | DOMElement)[]): HTMLElement;
export function count(arr?: any[]): any;
export function arrayDiff(a1?: any[] | string, a2?: any[] | string): any[] | string;
export function diff(text1?: string, text2?: string): Array<Array<number>>;
export function remove(array?: any[], item?: any): any;
export function spliceArrayBuffer(arr?: ArrayBuffer | Buffer, start?: number, end?: number, endian?: boolean): number;
export function flatten(array?: any[], level?: number): any[];
export function nFlatten(arr?: any[]): any[];
export function contains(array?: any[], item?: string): boolean;
export function shuffleArray(array?: any[]): any[];
export function splice(array: string | any[], index: number, remove?: number, item: any, ...args: any[]): string | any[];
export function unionArrays(x?: any[], y?: any[]): any[];
export function averageBy(arr?: Array<number>, fn?: averageByFn): number;
export function uniqueArray(array?: any[]): any[];
export function each(array?: any[] | string | number, callback?: eachCallback): any[];
export function rgbToHex(rgb?: string): string;
export function hexToRGB(hex?: string): string;
export function blendColors(color1?: string, color2?: string, percent?: number): string;
export function randomColor(): string;
export function lightenColor(col?: string, amt?: number): string;
export function lightOrDark(color?: string): any;
export function dayName(date?: Date, locale?: string): string;
export function formatMilliseconds(ms?: number | string): string;
export function addMinutesToDate(date?: Date | string, n?: number): Date;
export function isDateValid(...val: any[]): boolean;
export function addDaysToDate(date?: Date, n?: number): Date;
export function ripple(el: HTMLElement, { time, color, opacity, event }: {
    time?: number;
    color?: string;
    opacity?: number;
    event?: string;
}): HTMLElement;
export function elementContains(parent?: HTMLElement, child?: HTMLElement): boolean;
export function parents(el?: HTMLElement): Array<HTMLElement>;
export function getImages(el?: HTMLElement, includeDuplicates?: boolean): any[];
export function renderElement({ type, props }?: any, container?: HTMLElement): HTMLElement;
export function context(): Array<HTMLElement>;
export function inView(el?: Element): boolean;
export function inPartialView(el?: Element): boolean;
export function replaceText(el?: Element, callback?: replaceTextCallback): HTMLElement;
export function textNodes(el?: Element): any[];
export function querySelector(elem?: Element): string;
export function removeComments(el?: Element): HTMLElement;
export function parseHTML(string?: string, mimeType?: string): HTMLDocument;
export function drag(dragHandle?: Element, dragTarget?: Element): Element;
export function addEventListeners(element?: Element, events?: Array<string>, handler?: eventListenersCallback, useCapture?: boolean | any, args?: any[]): Element;
export function sortTable(element?: HTMLTableElement, cellVal?: sortTableCallback): HTMLTableElement;
export function sortTableBy(th?: HTMLTableElement, ascending?: boolean): HTMLTableElement;
export function addStyles(el?: Element, styles?: any): any;
export function createElement(str?: string): Element;
export function compStyle(el?: Element, prop?: string): string;
export function elementSiblings(n?: Element): Element[];
export function disableRightClick(el?: HTMLElement): HTMLElement;
export function inlineCSS(el?: Element): any;
export function attributes(el?: Element): Array<object>;
export function observeMutations(element?: Element, callback?: Function, options?: any): MutationObserver;
export function tilt(el?: Element, x?: number, y?: number, perspective?: number, amount?: number): string;
export function fullScreen(element?: Element): Promise<any>;
export function replaceSelection(replacementText?: string): Range;
export function waitUntil(condition?: Function, wait?: number): Promise<any>;
export function onOutsideClick(element?: Element, callback?: Function): Promise<any>;
export function onScrollStop(element?: HTMLElement, callback?: Function, time?: number): Promise<any>;
export function hub(): any;
export function dispatch(args?: any, type?: string, target?: EventTarget): Event;
export function juxt(...fns: Function[]): juxtCallback;
export function sleep(ms?: number): Promise<any>;
export function limitArgs(fn?: Function, n?: number): Function;
export function fastestFunction(fns: Array<Function>, iterations?: number): number;
export function spread(fn?: Function): spreadCallback;
export function memoize(fn?: Function): Function;
export function composeFunction(...functions: Function[]): Function;
export function curryFunction(fn?: Function, arity?: number, ...args: any[]): Function;
export function isAsync(val?: Function): boolean;
export function timeFunction(fn?: Function, name?: string): any;
export function throttle(func?: Function, wait?: number, options?: any): Function;
export function debounce(func?: Function, wait?: number, immediate?: boolean): Function;
export function runAsync(fn?: Function): Promise<any>;
export function flattenObj(o?: any): any;
export function clone(src: any | any[] | string, _visited: any, _copiesVisited: any): any;
export function listen(obj?: any, setCallback?: listenCallback, getCallback?: listenCallback): Proxy;
export function merge(obj1?: any, obj2?: any): any;
export function mapObjectKeys(obj?: any, fn?: mapObjKeysCallback): any;
export function mapObjectValues(obj?: any, fn?: mapObjValuesCallback): any;
export function formToObject(form?: HTMLFormElement): any;
export function sortObj(obj?: any): any;
export function gcd(...ary: any[]): number;
export function round(number?: number, amount?: number): number;
export function equals(a?: any, b?: any): any;
export function isPrime(num?: number): boolean;
export function factorial(n?: number): number;
export function luhnCheck(num?: number | string): boolean;
export function animate(start?: number, end?: number, duration?: number, callback?: animateCallback, interval?: number, num?: animateNumCallback): number;
export function range(start?: number, end?: number): Array<number>;
export function uuid(seed?: number | string): string;
export function primesTo(num?: number): Array<number>;
export function random(max?: number, min?: number, round?: boolean, seed?: number): number;
export function seedRandom(seed?: number): number;
export function formatNumber(n?: number): string;
export namespace ease {
    function linear(t?: number): number;
    function easeInSine(t?: number): number;
    function easeOutSine(t?: number): number;
    function easeInOutSine(t?: number): number;
    function easeInQuad(t?: number): number;
    function easeOutQuad(t?: number): number;
    function easeInOutQuad(t?: number): number;
    function easeInCubic(t?: number): number;
    function easeOutCubic(t?: number): number;
    function easeInOutCubic(t?: number): number;
    function easeInQuart(t?: number): number;
    function easeOutQuart(t?: number): number;
    function easeInOutQuart(t?: number): number;
    function easeInQuint(t?: number): number;
    function easeOutQuint(t?: number): number;
    function easeInOutQuint(t?: number): number;
    function easeInExpo(t?: number): number;
    function easeOutExpo(t?: number): number;
    function easeInOutExpo(t?: number): number;
    function easeInCirc(t?: number): number;
    function easeOutCirc(t?: number): number;
    function easeInOutCirc(t?: number): number;
    function easeInBack(t?: number): number;
    function easeOutBack(t?: number): number;
    function easeInOutBack(t: number): number;
    function easeInElastic(t?: number): number;
    function easeOutElastic(t?: number): number;
    function easeInOutElastic(t?: number): number;
    function easeInBounce(t?: number): number;
    function easeOutBounce(t?: number): number;
    function easeInOutBounce(t?: number): number;
}
export function jaroDistance(a: string, b: string): number;
export function prefixCSS(prop?: string): string;
export function parseCookie(str?: string): {};
export function hash(val?: string): Promise<any>;
export function forTemplateLiteral(arr?: any[], callback?: mapCallback): string;
export function mapString(str?: string, fn?: mapCallback): any;
export function deburr(str?: string): string;
export function removeTags(html?: string): string;
export function speak(text?: string, lang?: string, volume?: number, voice?: string | number, pitch?: number, rate?: number): SpeechSynthesisUtterance;
export function widows(text?: string): string;
export function unCamelCase(str?: string): string;
export function camelCase(str?: string): string;
export function scrambleString(str?: string): string;
export function hashString(str?: string, seed?: number): number;
export function editDistance(a?: string, b?: string): number;
export function byteSize(str?: string): number;
export function replaceMultiple(text?: string, replacer?: void): string;
export function urlQuery(query?: string, url?: string): string;
export function sanitize(html?: string, tags?: any[], attributes?: any[]): string;
export function markdownToHTML(src?: string): string;
export function syllables(word?: string): number;
export function titleCase(str?: string): string;
export function capitalize(str?: string): string;
export function replaceBetween(string?: string, start?: number, end?: number, what?: string): string;
export function escapeHTML(str?: string): string;
export function unescapeHTML(str?: string): string;
export function previousPage(): string;
export function createStream(...tracks: MediaStreamTrack[]): MediaStream;
export function manipulate(videoTrack: MediaStreamTrack, fn: manipulateVideoStreamFunction): Promise<MediaStreamTrack>;
export namespace preload {
    function init(): undefined;
    function load(page: string): Promise<any>;
    function show(page: string): undefined;
}
export function tag(k?: Function, o?: Function): Function;
export function resize(url?: string, width?: number, height?: number): Promise<string>;
export function htmlToImage(html?: string, { x, y, width, height }?: any): Promise<string>;
export function race(fn?: Function, timeout?: number, cancelCb?: any): Promise<any>;
export function typeOf(e?: any, lowerCase?: boolean): any;
export function injectCSS(css?: string): HTMLElement;
export function mobileOrDesktop(): string;
export function playSection(audioObj?: HTMLMediaElement, start?: number, stop?: number): new (src?: string) => HTMLAudioElement;
export function formatHTML(html?: string): string;
export function getJSON(url?: string, callback?: Function): Promise<any>;
export function getHTML(url?: string, callback?: Function): Promise<any>;
export function preloadImage(...urls: string[]): Array<new (width?: number, height?: number) => HTMLImageElement>;
export function saveBlob(blob?: Blob, fileName?: string): Blob;
export function requestInterval(fn?: Function, delay?: number): any;
export function loadScript(url?: string, callback?: Function, options?: {}, dupeCheck?: boolean): Promise<any>;
export function imageToData(url?: string, callback?: Function): Promise<any>;
export namespace cookies {
    function setItem(name?: string, value?: string, days?: number): string;
    function getItem(name?: string): string;
    function removeItem(name?: string): string;
}
export namespace regex {
    const phone: RegExp;
    const name: RegExp;
    const email: RegExp;
    const link: RegExp;
    const strongPassword: RegExp;
    const moderatePassword: RegExp;
    const ipv4: RegExp;
    const ipv6: RegExp;
    const ip: RegExp;
    const socialSecurity: RegExp;
    const hex: RegExp;
    const zipCode: RegExp;
    const simplePhone: RegExp;
    const visaCredit: RegExp;
    const expressCredit: RegExp;
    const mastercardCredit: RegExp;
    const discoverCredit: RegExp;
}
export function jsonToCsv(arr?: any[], columns?: any[], delimiter?: string): string;
export function arrayToCSV(arr?: any[], delimiter?: string): string;
export function notify(title?: string, body?: string, icon?: string): Promise<any>;
export function copy(str?: string): string;
export function browser(): string;
export function serializeForm(form?: HTMLFormElement): string;
export function request({ url, body, as, method, options, authorization, headers, type, corsFallback, corsDomain, detectCors, makeCorsUrl, timeout, }: {
    url: string;
    body: any | string | FormData;
    as?: string | Array<string>;
    method?: string;
    options?: any;
    headers?: any;
    type?: any | string;
    corsFallback?: boolean;
    corsDomain?: string;
    detectCors?: Function;
    makeCorsUrl?: Function;
    timeout?: number;
}): any | Response | string | (new (width?: number, height?: number) => HTMLImageElement);
export function soundex(s?: string): string;
export function prototype(options?: any): void;
export default _temp;
export const _$: any;
export type averageByFn = (number: number) => number;
export type eachCallback = (x: any, i: number, array: any[]) => any;
export type replaceTextCallback = (text: string) => string;
export type eventListenersCallback = (e: Event) => undefined;
export type sortTableCallback = (td: HTMLTableCellElement, tr: HTMLTableRowElement, cellIndex: number) => string;
export type scrollStopCallback = (event: UIEvent) => undefined;
export type juxtCallback = (...args: any[]) => Array<any[]>;
export type spreadCallback = (args: any[]) => any;
export type listenCallback = (key: string | Symbol, value: any) => undefined;
export type mapObjKeysCallback = (key: string) => string;
export type mapObjValuesCallback = (value: any) => any;
export type animateNumCallback = (num?: number) => number;
export type animateCallback = (num?: number, percent: number) => undefined;
export type mapCallback = (item: any, i: number, arr: any[]) => any;
export type manipulateVideoStreamFunction = (pixel: any, red: number, green: number, blue: number, alpha: number) => {
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
/**
 * Bijou.js source documentation. In the `Bijou` namespace you will find the documentation for all of the functions in Bijou.js, if you have any questions, suggestions or bug reports pleast make an issue (here)[https://github.com/bijou-js/bijou.js/issues/new/choose]. Best of luck! Thanks for using Bijou.js! --Explosion--
 * @type {Object}
 * @author Explosion-Scratch, GrahamSH-LLK, Bijou.js contributors
 */
declare let _temp: any;
