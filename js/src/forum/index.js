import app from 'flarum/app';
import Mousetrap from 'mousetrap';
import addGlobalKeys from './addGlobalKeys';
import addDiscussionListKeys from './addDiscussionListKeys';
import addDiscussionPageKeys from './addDiscussionPageKeys';

app.initializers.add('kvothe-keyboard-shortcuts', () => {
	const settingsPrefix = 'kvothe-keys.';

	addGlobalKeys();
	addDiscussionListKeys();
	addDiscussionPageKeys();

});
