import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';
import LogInModal from 'flarum/components/LogInModal';
import SignUpModal from 'flarum/components/SignUpModal';
import KeyModal from './components/KeyModal';

export default function() {
  extend(Page.prototype, 'config', function() {
    const settingsPrefix = 'kvothe-keys.';
    const keymodal = new KeyModal();
      //search
     Mousetrap.bind(app.forum.attribute(settingsPrefix + 'search'), function(){
      $('.Search-input input').focus();
     }, 'keyup');

     //help modal
     Mousetrap.bind(app.forum.attribute(settingsPrefix + 'help'), function(){
        app.modal.show(keymodal);
     }, 'keydown');
     Mousetrap.bind(app.forum.attribute(settingsPrefix + 'help'), function(){
      app.modal.close(keymodal);
      //fixes a bug, where the site was greyed out, when the key was pressed too fast:
      $('.modal-backdrop.fade.in').remove();
     }, 'keyup');

    if(app.session.user){
      //notifications
      Mousetrap.bind(app.forum.attribute(settingsPrefix + 'notifications'), function(){
        $('.NotificationsDropdown .Dropdown-toggle').click();
      });
      //usermenu
      Mousetrap.bind(app.forum.attribute(settingsPrefix + 'user-menu'), function(){
        $('.SessionDropdown .Dropdown-toggle').click();
      });
      //mark all posts as read
      Mousetrap.bind(app.forum.attribute(settingsPrefix + 'mark-read'), function(){
        $('.item-markAllAsRead Button').click();
      });
      //clear notifications
      Mousetrap.bind(app.forum.attribute(settingsPrefix + 'clear'), function(){
        $('.NotificationList-header .Button').click();
      });
      // new discussion
      Mousetrap.bind(app.forum.attribute(settingsPrefix + 'new-disc'), function(){
        $('.item-newDiscussion .Button').click();
      });
    }
    else{
      //open login
      Mousetrap.bind(app.forum.attribute(settingsPrefix + 'login'), function(){
        app.modal.show(new LogInModal());
      });
      //open sign up
      Mousetrap.bind(app.forum.attribute(settingsPrefix + 'signup'), function(){
        app.modal.show(new SignUpModal());
      });
    }
  });
}