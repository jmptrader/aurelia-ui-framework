import {Router} from "aurelia-router";

export class Home {
	router:Router;
	private title = "Framework Elements";

	private configureRouter(config, router:Router) {
		this.router = router;
		config.map([{
			route: 'welcome',
			moduleId: './welcome',
			settings: {
				navIcon: 'fi-elegant-house3'
			},
			title: 'Welcome',
			nav: true,
			name: 'welcome'
		}, {
			route: 'buttons',
			moduleId: './buttons',
			settings: {
				sectionStart: true,
				sectionTitle: 'Components',
				navIcon: 'fi-elegant-selected'
			},
			title: 'Buttons',
			nav: true,
			name: 'buttons'
		}, {
			route: 'form',
			moduleId: './form',
			settings: {
				navIcon: 'fi-elegant-interface19 ui-flip'
			},
			title: 'Inputs',
			nav: true,
			name: 'form'
		}, {
			route: 'tree',
			moduleId: './tree',
			settings: {
				navIcon: 'fi-elegant-list14'
			},
			title: 'Tree',
			nav: true,
			name: 'tree'
		}, {
			route: 'grid',
			moduleId: './grid',
			settings: {
				sectionTitle: 'Containers',
				navIcon: 'fi-elegant-3x3'
			},
			title: 'Grid',
			nav: true,
			name: 'grid'
		}, {
			route: 'dialogs',
			moduleId: './dialogs',
			settings: {
				navIcon: 'fi-essential-square83'
			},
			title: 'Dialogs',
			nav: true,
			name: 'dialogs'
		}, {
			route: 'tabs',
			moduleId: './tabs',
			settings: {
				navIcon: 'fi-elegant-folder22 ui-flip'
			},
			title: 'Tab Panel',
			nav: true,
			name: 'tabs'
		}, {
			route: 'panels',
			moduleId: './panels',
			settings: {
				navIcon: 'fi-elegant-mini12 ui-flip'
			},
			title: 'Card Panel',
			nav: true,
			name: 'panels'
		}, {
			route: 'page',
			moduleId: './page',
			settings: {
				navIcon: 'fi-elegant-document9'
			},
			title: 'Page Elements',
			nav: true,
			name: 'page'
		}, {
			route: 'datagrid',
			moduleId: './datagrid',
			settings: {
				sectionTitle: 'Data Components',
				navIcon: 'fi-elegant-little14'
			},
			title: 'Data Grid',
			nav: true,
			name: 'datagrid'
		}, {
			route: 'guide',
			moduleId: './guide',
			settings: {
				sectionStart: true,
				navIcon: 'fi-elegant-question3'
			},
			title: 'Cheat Sheet',
			nav: true,
			name: 'guide'
		}, {
			route: 'styles',
			moduleId: './styles',
			settings: {
				navIcon: 'fi-ext-programming-language2'
			},
			title: 'CSS Helper Classes',
			nav: true,
			name: 'styles'
		}, {
			route: '', redirect: 'welcome'
		}]);
	}
}