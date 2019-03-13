<?php

namespace Kvothe\KeyboardShortcuts\Listeners;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class InjectSettings
{
    protected $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareSettings']);
    }
    public function prepareSettings(Serializing $event)
    {
        if ($event->serializer instanceof ForumSerializer) {
            $event->attributes['kvothe-keys.prev-disc'] = $this->settings->get('kvothe-keys.prev-disc');
            $event->attributes['kvothe-keys.next-disc'] = $this->settings->get('kvothe-keys.next-disc');
            $event->attributes['kvothe-keys.refresh'] = $this->settings->get('kvothe-keys.refresh');
            $event->attributes['kvothe-keys.sort-top'] = $this->settings->get('kvothe-keys.sort-top');
            $event->attributes['kvothe-keys.sort-latest'] = $this->settings->get('kvothe-keys.sort-latest');
            $event->attributes['kvothe-keys.sort-newest'] = $this->settings->get('kvothe-keys.sort-newest');
            $event->attributes['kvothe-keys.sort-oldest'] = $this->settings->get('kvothe-keys.sort-oldest');
            $event->attributes['kvothe-keys.prev-post'] = $this->settings->get('kvothe-keys.prev-post');
            $event->attributes['kvothe-keys.next-post'] = $this->settings->get('kvothe-keys.next-post');
            $event->attributes['kvothe-keys.first-post'] = $this->settings->get('kvothe-keys.first-post');
            $event->attributes['kvothe-keys.last-post'] = $this->settings->get('kvothe-keys.last-post');
            $event->attributes['kvothe-keys.sidebar'] = $this->settings->get('kvothe-keys.sidebar');
            $event->attributes['kvothe-keys.pin-sidebar'] = $this->settings->get('kvothe-keys.pin-sidebar');
            $event->attributes['kvothe-keys.back'] = $this->settings->get('kvothe-keys.back');
            $event->attributes['kvothe-keys.follow'] = $this->settings->get('kvothe-keys.follow');
            $event->attributes['kvothe-keys.reply'] = $this->settings->get('kvothe-keys.reply');
            $event->attributes['kvothe-keys.notifications'] = $this->settings->get('kvothe-keys.notifications');
            $event->attributes['kvothe-keys.user-menu'] = $this->settings->get('kvothe-keys.user-menu');
            $event->attributes['kvothe-keys.mark-read'] = $this->settings->get('kvothe-keys.mark-read');
            $event->attributes['kvothe-keys.clear'] = $this->settings->get('kvothe-keys.clear');
            $event->attributes['kvothe-keys.new-disc'] = $this->settings->get('kvothe-keys.new-disc');
            $event->attributes['kvothe-keys.login'] = $this->settings->get('kvothe-keys.login');
            $event->attributes['kvothe-keys.signup'] = $this->settings->get('kvothe-keys.signup');
            $event->attributes['kvothe-keys.search'] = $this->settings->get('kvothe-keys.search');
            $event->attributes['kvothe-keys.help'] = $this->settings->get('kvothe-keys.help');
        }
    }
}