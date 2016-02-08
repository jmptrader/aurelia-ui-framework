import {autoinject, ViewSlot} from "aurelia-framework";
import {UIApplicationState,UIDialogService} from "aurelia-ui-framework";
import {MyDialog} from "./my-dialog";

@autoinject()
export class HomeDialogs {
	constructor(public appState:UIApplicationState, public dialogService:UIDialogService) {
	}

	open() {
		this.dialogService.show(MyDialog);
	}

	modal() {
		this.dialogService.show(MyDialog, {modal: true});
	}

	confirm() {
		this.appState.notifyConfirm("Are you sure?")
		.then(()=>{
			this.appState.notifyInfo("YES!!!");
		})
		.catch(()=>{
			this.appState.notifyError("NO!!!");
		});
	}
}