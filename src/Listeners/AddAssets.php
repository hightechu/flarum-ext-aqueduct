<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;

class AddAssets
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'addJs']);
        $events->listen(ConfigureWebApp::class, [$this, 'addLess']);
    }

    public function addJs(ConfigureWebApp $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../js/forum/dist/extension.js'
            ]);

            $event->addBootstrapper('flagrow/aqueduct/main');
        }
    }

    public function addLess(ConfigureWebApp $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../assets/less/forum.less'
            ]);
        }
    }
}
