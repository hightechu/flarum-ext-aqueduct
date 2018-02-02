<?php

namespace Flagrow\Aqueduct\Listeners;

use DirectoryIterator;
use Flarum\Event\ConfigureLocales;
use Flarum\Frontend\Event\Rendering;
use Illuminate\Contracts\Events\Dispatcher;

class AddAssets
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Rendering::class, [$this, 'addJs']);
        $events->listen(Rendering::class, [$this, 'addLess']);
        $events->listen(ConfigureLocales::class, [$this, 'addLocales']);
    }

    public function addJs(Rendering $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../js/forum/dist/extension.js'
            ]);
        }
        if ($event->isAdmin()) {
            $event->addAssets([
                __DIR__ . '/../../js/admin/dist/extension.js'
            ]);
        }

        $event->addBootstrapper('flagrow/aqueduct/main');
    }

    public function addLess(Rendering $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../resources/less/forum.less'
            ]);
        }
    }

    /**
     * Provides i18n files.
     *
     * @param ConfigureLocales $event
     */
    public function addLocales(ConfigureLocales $event)
    {
        foreach (new DirectoryIterator(__DIR__ . '/../../resources/locale') as $file) {
            if ($file->isFile() && in_array($file->getExtension(), ['yml', 'yaml'])) {
                $event->locales->addTranslations($file->getBasename('.' . $file->getExtension()), $file->getPathname());
            }
        }
    }
}
