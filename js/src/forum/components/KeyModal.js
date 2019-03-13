import Modal from "flarum/components/Modal";
import icon from "flarum/helpers/icon";
import LoadingIndicator from "flarum/components/LoadingIndicator";

export default class KeysModal extends Modal {
	init() {
	    super.init();
	}
	className() {
        return 'KeysModal Modal--medium';
    }
    title() {
        return app.translator.trans('kvothe-keyboard-shortcuts.forum.modal-title');
    }
	content() {
		// TODO: add flarum standard keys: close composer: esc, send reply: strg+enter
		const settingsPrefix = 'kvothe-keys.';
		const categoryPrefix  = 'kvothe-keyboard-shortcuts.forum.categories.';
		const keyDescriptionPrefix = 'kvothe-keyboard-shortcuts.forum.key-descriptions.'
		return [
            m('table.Kvothe-KeyModalContent', [
				m('tr',[
					m('th[colspan=2]', app.translator.trans(categoryPrefix + 'global')),
					m('th[colspan=2]', app.translator.trans(categoryPrefix + 'disc-page')),
					m('th[colspan=2]', app.translator.trans(categoryPrefix + 'disc-list')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'search'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'search')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'reply'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'reply')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'sort-oldest'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'sort-oldest')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'help'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'help')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'follow'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'follow')),              
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'sort-newest'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'sort-newest')),
				]),
				m('tr',[
					m('th[colspan=2]', app.translator.trans(categoryPrefix + 'logged-out')),    
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'back'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'back')),                    
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'sort-latest'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'sort-latest')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'login'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'login')),              
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'pin-sidebar'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'pin-sidebar')),           
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'sort-top'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'sort-top')),
				]),
				m('tr',[
					
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'signup'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'signup')),  
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'sidebar'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'sidebar')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'refresh'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'refresh')),
				]),
				m('tr',[
					m('th[colspan=2]', app.translator.trans(categoryPrefix + 'logged-in')),		
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'last-post'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'last-post')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'next-disc'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'next-disc')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'clear'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'clear')),                 
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'first-post'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'first-post')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'prev-disc'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'prev-disc')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'mark-read'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'mark-read')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'next-post'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'next-post')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'user-menu'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'user-menu')),
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'prev-post'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'prev-post')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'notifications'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'notifications')),
				]),
				m('tr',[
					m('td', [m('span.Kvothe-Key', app.forum.attribute(settingsPrefix + 'new-disc'))]),
					m('td', app.translator.trans(keyDescriptionPrefix + 'new-disc')),
				]),
			]),
        ];
	}

}