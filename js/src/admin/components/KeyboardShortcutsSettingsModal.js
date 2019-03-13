import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

const settingsPrefix = 'kvothe-keys.';
const translationPrefix = 'kvothe-keyboard-shortcuts.admin.settings.';
const categoryPrefix  = 'kvothe-keyboard-shortcuts.admin.categories.';
const keyDescriptionPrefix = 'kvothe-keyboard-shortcuts.admin.key-descriptions.'

export default class KeyboardShortcutsSettingsModal extends SettingsModal {
    constructor()
    {
        super();
    }
    className()
    {
        return 'KeyboardShortcutsSettingsModal Modal--medium';
    }
	title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    form() {
        return [
            m('p', app.translator.trans(translationPrefix + 'modifiers')),
            m('p', app.translator.trans(translationPrefix + 'substitute')),
            m('p', app.translator.trans(translationPrefix + 'special')),
            m('p', app.translator.trans(translationPrefix + 'other')),
            m('.Form-group.kvothe-keys-settings', [
                m('.kvothe-keys-left', [
                    m('h3', app.translator.trans(categoryPrefix + 'global')),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'search')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'search', 's'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'help')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'help', 'q'),
                    }),
                    m('h3', app.translator.trans(categoryPrefix + 'logged-out')),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'signup')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'signup', 'strg+s'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'login')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'login', 'strg+l'),
                    }),
                    m('h3', app.translator.trans(categoryPrefix + 'logged-in')),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'new-disc')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'new-disc', 'd'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'clear')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'clear', 'c'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'mark-read')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'mark-read', 'shift+c'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'user-menu')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'user-menu', 'u'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'notifications')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'notifications', 'n'),
                    }),
                ]),
                m('.kvothe-keys-center', [
                    m('h3', app.translator.trans(categoryPrefix + 'disc-page')),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'reply')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'reply', 'r'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'follow')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'follow', 'f'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'back')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'back', 'backspace'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'pin-sidebar')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'pin-sidebar', 'p'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'sidebar')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'sidebar', 'shift+s'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'last-post')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'last-post', 'l'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'first-post')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'first-post', 'h'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'next-post')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'next-post', 'k'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'prev-post')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'prev-post', 'j'),
                    }),
                ]),
                m('.kvothe-keys-right', [
                    m('h3', app.translator.trans(categoryPrefix + 'disc-list')),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'sort-oldest')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'sort-oldest', 'shift+o'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'sort-newest')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'sort-newest', 'shift+o'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'sort-latest')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'sort-latest', 'shift+l'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'sort-top')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'sort-top', 'shift+t'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'refresh')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'refresh', 'r'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'next-disc')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'next-disc', 'k'),
                    }),
                    m('label', app.translator.trans(keyDescriptionPrefix + 'prev-disc')),
                    m('input[type=text].FormControl', {
                        bidi: this.setting(settingsPrefix + 'prev-disc', 'j'),
                    }),
                ]),
            ]),
        ];
    }
}