/**
 *    UI Container: Form
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@autoinject()
@customElement('ui-form')
export class UIForm {
	@bindable id:string    = '';
	@bindable class:string = '';
	@bindable busy:boolean;

	private _form;
	private _classes:string = '';

	constructor(public element:Element) {
	}

	attached() {
		setTimeout(()=> {
			$(this._form).data('UIForm', this)
				.find('input,select,textarea').first().focus();
		}, 200);

		if (this.busy) setTimeout(()=>this.busyChanged(true), 200);
	}

	busyChanged(newValue:any) {
		$(this.element).find('ui-input,ui-phone,ui-textarea,ui-input-dual,ui-chosen,ui-markdown,ui-button,ui-date,ui-list,ui-option,ui-switch')
			.each((i, e)=> {
				try {
					e.au.controller.viewModel.makeBusy(newValue);
				} catch (e) {
				}
			});
	}

	private _keyup($event) {
		if (!$($event.target).is('textarea') && ($event.which || $event.keyCode) == 13) {
			UIEvent.fireEvent('submit', this.element, this, this._form);
		}

		return true;
	}
}