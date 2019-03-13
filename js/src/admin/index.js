import app from 'flarum/app';
import KeyboardShortcutsSettingsModal from './components/KeyboardShortcutsSettingsModal';

app.initializers.add('kvothe-keyboard-shortcuts', () => {
	app.extensionSettings['kvothe-keyboard-shortcuts'] = () => app.modal.show(new KeyboardShortcutsSettingsModal());
});
