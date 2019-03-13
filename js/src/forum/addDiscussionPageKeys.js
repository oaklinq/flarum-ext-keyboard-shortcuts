import app from 'flarum/app';
import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

export default function() {
  extend(DiscussionPage.prototype, 'config', function(isInitialized) {
    let index;
    let near;
    const settingsPrefix = 'kvothe-keys.';

    //previous
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'prev-post'), function(){
      near = m.route.param('near') || 0;
      index = (near == 0) ? 0 : near - 1;
      app.current.stream.goToIndex(index);
    });
    //next
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'next-post'), function(){
      near = m.route.param('near') || 1;
      index =parseInt(near) + 1;
      app.current.stream.goToIndex(index);
    });
    //first
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'first-post'), function(){
      app.current.stream.goToFirst();
    });
    //last
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'last-post'), function(){
      app.current.stream.goToLast();
    });
    //show/hide sidebar
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'sidebar'), function(){
      if(app.pane.showing == false){
        app.pane.show();
      }
      else{
        app.pane.hide();
      }
    });
    //pin sidebar
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'pin-sidebar'), function(){
      app.pane.togglePinned.bind(app.pane)();
      app.pane.hide();
    });
    //back to discussionList
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'back'), function(){
      app.history.back();
    });
    //follow/unfollow
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'follow'), function(){
        $('.SubscriptionMenu-button').click();
    });
    //reply
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'reply'), function(){
        $('.SplitDropdown-button[title=Reply]').click();
    });

  });
}
