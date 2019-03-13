import app from 'flarum/app';
import { extend } from 'flarum/extend';
import DiscussionList from 'flarum/components/DiscussionList';
import LogInModal from 'flarum/components/LogInModal';

export default function() {
  extend(DiscussionList.prototype, 'config', function() {
    let postCounter = 999;
    const settingsPrefix = 'kvothe-keys.';

    //TODO: Make the View scroll to the highlighted discussion; Keep "Load More" in mind
    //previous
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'prev-disc') , function(){
      postCounter = (postCounter == 999 || postCounter == 0) ? 0 : postCounter - 1;
      $('.DiscussionListItem').eq(postCounter + 1).removeClass('Kvothe-DiscussionListItem--hover');
      $('.DiscussionListItem').eq(postCounter).addClass('Kvothe-DiscussionListItem--hover');
      Mousetrap.bind('enter', function(){
        $('.DiscussionListItem-main')[postCounter].click();
      })
    });
    //next
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'next-disc'), function(){
      postCounter = (postCounter == 999) ? 0 : postCounter + 1;
      $('.DiscussionListItem').eq(postCounter - 1).removeClass('Kvothe-DiscussionListItem--hover');
      $('.DiscussionListItem').eq(postCounter).addClass('Kvothe-DiscussionListItem--hover');
      Mousetrap.bind('enter', function(){
        $('.DiscussionListItem-main')[postCounter].click();
      })
    });

    //refresh
    //TODO: Add pusher compatibility
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'refresh'), function(){
      $('.item-refresh Button').click();
    });

    //sort by...
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'sort-top'), function(){
      $('button[title="Top"]').click();
    });
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'sort-latest'), function(){
      $('button[title="Latest"]').click();
    });
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'sort-newest'), function(){
      $('button[title="Newest"]').click();
    });
    Mousetrap.bind(app.forum.attribute(settingsPrefix + 'sort-oldest'), function(){
      $('button[title="Oldest"]').click();
    });


    //TODO: goto: tags, following etc

  });
}