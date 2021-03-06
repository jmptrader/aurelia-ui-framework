declare module "aurelia-ui-framework" {
	import * as ld from "lodash";
	import * as mm from "moment";
	import * as nm from "numeral";

	export var _: ld.LoDashStatic;
	export var moment: mm.MomentStatic;
	export var numeral: nm.Numeral;
}

declare interface UIBarOptions {
	chartTitle?: string;
	valueAxisTitle?: string;
	valueAxisUnit?: string;
	categoryAxisTitle?: string;
	categoryField: string;
	theme?: string;
	series: Array<AmCharts.AmGraph>;
}

/** CORE **/
declare module "aurelia-ui-framework" {
	// import {ValidationGroup} from "aurelia-validation";
	import {Logger} from "aurelia-logging";

	export function validatemap(targetOrConfig?: any, key?: any, descriptor?: any): any;
	export function validatephone(targetOrConfig?: any, key?: any, descriptor?: any): any;

	export class UIDialog {
		close();
		focus();
		toast(config);
	}

	export class UIModel {
		logger: Logger;
		httpClient: UIHttpService;
		//validation: ValidationGroup;
		observers: any;

		get(...rest);

		post(...rest);

		put(...rest);

		delete(...rest);

		deserialize(json: any);

		serialize(): any;

		saveChanges();

		discardChanges();

		isDirty(): boolean;

		dispose();
	}
	export class UITreeOptions {
		maxLevels: number;

		// show checkboxes
		showCheckbox: boolean;
		// show checkbox only at ? level, -1/null all levels
		checkboxLevel: number;

		showRoot: boolean;
		rootLabel: string;

		selectionLevel: number;

		constructor(obj?);
	}
	export class UIDialogService {
		show<UIDialog>(viewModel: UIDialog, model?: any);
	}

	export class UIForm {
		getForm(): HTMLFormElement;
	}

	export class UILanguage {
		static LANGUAGES;
	}
}

/** UTILS **/
declare module "aurelia-ui-framework" {
	import {Container, PropertyObserver} from "aurelia-framework";
	import {Subscription} from "aurelia-event-aggregator";

	// Application State Class
	export class UIApplication {

		static defaults;

		IsHttpInUse: boolean;
		IsAuthenticated: boolean;
		SendAuthHeader: boolean;

		AppConfig: AppConfig;
		HttpConfig: HttpConfig;

		Username: string;
		UserGroup: string;
		UserGroupLabel: string;

		AuthUser: string;
		AuthToken: string;

		navigate(hash): void;

		navigateTo(route, params?): void;

		session(key, value?): any;

		clearSession(): void;

		persist(key, value?): any;

		info(tag: string, msg: string, ...rest);

		warn(tag: string, msg: string, ...rest);

		debug(tag: string, msg: string, ...rest);

		error(tag: string, msg: string, ...rest);

		toast(config: any);

		toastError(config: any);

		toastSuccess(config: any);

		alert(config: string | any);
		confirm(config: string | any): Promise<any>;
	}

	export class AuthInterceptor {
	}

	export interface AppConfig {
		// App Key - Relative Path | URL
		Key: string;
		// App Title
		Title: string;
		// App Version
		Version: string;
	}
	export interface HttpConfig {
		BaseUrl: string;
		Headers: Map<string, string>;
		AuthorizationHeader: boolean;
	}

	export class UIHttpService {
		get(slug: string): Promise<any | string | void>;

		text(slug: string): Promise<any | string | void>;

		post(slug: string, body: any): Promise<any | string | void>;

		put(slug: string, body: any): Promise<any | string | void>;

		delete(slug: string): Promise<any | string | void>;

		upload(slug: string, form: HTMLFormElement): Promise<any | string | void>;

		reupload(slug: string, form: HTMLFormElement): Promise<any | string | void>;
	}
	// ChartStatic
	export module UIChartStatic {
		export var CHART_RED;
		export var CHART_PINK;
		export var CHART_BLUE;
		export var CHART_GREEN;
		export var CHART_ORANGE;
		export var CHART_VIOLET;
		export var CHART_SPECTRUM;
		export var CHART_DEFAULT;
		export var CHART_PIE;

		export function init();
	}
	// Utilities
	export module UIUtils {
		export function container(container: Container);

		export function lazy(T: any): any;
		export function newInstance(T: any): any;

		export function compileView(markup: string, container: Element, vm?);

		export function showToast(container, config);

		export function getAscii(str): string;
	}
	// Event Utility
	export module UIEvent {
		export function fireEvent(event: string,
			element: EventTarget,
			data?: any): any;

		export function observe(object, property);

		export function broadcast(event, data?): PropertyObserver;

		export function subscribe(event, callback): Subscription;
	}
	// Formatter
	export module UIFormat {
		export function toHTML(md): string;

		// Dates
		export function date(dt: any, ft?: string): string;

		export function dateToISO(dt): string;

		export function dateToGMT(dt): string;

		export function fromNow(dt): string;

		// Numbers
		export function number(nm: any, fm?: string): string;

		export function currency(nm: any, sy?: string, fm?: string): string;

		export function percent(nm: any): string;
	}

	export class UIChart {
		static CHART_RED;
		static CHART_PINK;
		static CHART_BLUE;
		static CHART_GREEN;
		static CHART_ORANGE;
		static CHART_VIOLET;
		static CHART_SPECTRUM;
		static CHART_DEFAULT;
		static CHART_PIE;
	}
}


// Global methods
declare var __seed;
declare var Constants;

declare function isTrue(b: any): boolean;
declare function isEmpty(a: any): boolean;
declare function isFunction(a: any): boolean;
declare function getParentByTag(element: Element, selector: string): HTMLElement;
declare function getParentByClass(element: Element, selector: string, lastElement?: string): HTMLElement;

declare function escape(v: string): string;
declare function unescape(v: string): string;

declare function TextComplete(el, strategies, options);

interface ICountry {
	continent: string;
	iso3: string;
	iso2: string;
	name: string;
	tld: string;
	currency: string;
	phone: number;
}

interface Window {
	isTrue;
	isEmpty;
	isFunction;
	getParentByTag;
	getParentByClass;

	__seed: number;
	Constants: any;
	FormData: any;

	countries: Array<ICountry>;
	currencies: Map<string, string>;
	filetypes: Map<string, string>;

	escape;
	unescape;
}
interface Element {
	au: any;
}

declare class Chart {
	constructor(el: any, opt: any);
}

declare module 'validate.js' {
	export var validate: any;
}
