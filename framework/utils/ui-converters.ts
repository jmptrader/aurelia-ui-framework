/**
 *    UI Utils      Value Converters
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {UIFormat} from "./ui-formatters";

export class MarkdownValueConverter {
	toView(value:string) {
		return UIFormat.toHTML(value || '');
	}
}

// Dates
export class DateValueConverter {
	toView(value:string, format?:string) {
		return UIFormat.date(value, format);
	}
}
export class FromNowValueConverter {
	toView(value:string) {
		return UIFormat.fromNow(value);
	}
}

// Numbers
export class NumberValueConverter {
	toView(value:string, format?:string) {
		return UIFormat.number(value, format);
	}
}
export class CurrencyValueConverter {
	toView(value:string, symbol?:string, format?:string) {
		return UIFormat.currency(value, symbol, format);
	}
}
export class PercentValueConverter {
	toView(value:string) {
		return UIFormat.percent(value);
	}
}

// Objects/Arrays
export class KeysValueConverter {
	toView(object:any) {
		return Object.keys(object);
	}
}
export class GroupValueConverter {
	toView(object:any, property:any) {
		return _.groupBy(object, property);
	}
}

export class SortValueConverter {
	toView(value:any, property:any) {
		return _.sortBy(value, property);
	}
}

export class JsonValueConverter {
	toView(value:any) {
		return JSON.stringify(value, null, 4);
	}
}
export class IsStringValueConverter {
	toView(value:any) {
		return _.isString(value);
	}
}
export class IsArrayValueConverter {
	toView(value:any) {
		return _.isArray(value);
	}
}
export class IsObjectValueConverter {
	toView(value:any) {
		return _.isObject(value);
	}
}
