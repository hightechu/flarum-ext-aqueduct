# Aqueduct by ![Flagrow logo](https://avatars0.githubusercontent.com/u/16413865?v=3&s=20) [Flagrow](https://discuss.flarum.org/d/1832)

Flagrow [aqueduct](https://flagrow.io/extensions/flagrow/aqueduct) can make a KanBan board out of any primary tag.

By relying heavily on the tags extension you can create a board with todo, doing, done style columns inside any primary tag. Using secondary tags as the columns gives you complete control. You can drag columns and cards any way you like and it even offers sensible permissions.

> This is a [premium extension](https://flagrow.io/about/premium-extensions). Installation and updating requires an [active subscription](https://flagrow.io/extensions/flagrow/aqueduct/subscription).

## Installation

Use flagrow/bazaar or check the FAQ on [flagrow.io](https://flagrow.io) on how to use a custom token, then run:

```bash
$ composer require flagrow/aqueduct --no-dev --prefer-dist -o
```

Go into your admin area, extensions and enable the extension.

## Configuration

The configuration of Aqueduct depends on a few factors:

- Each primary tag can be a board per default.
- Boards can be configured to use secondary tags as columns, these columns can be reordered.

The following permissions are available:

- View boards; allows access to the board.
- Use boards; allows dragging cards between columns.
- Manage boards; allows creating and reordering columns.

## Security

If you discover a security vulnerability within Upload, please send an email to the Flagrow team at security@flagrow.io. All security vulnerabilities will be promptly addressed.

Please include as many details as possible. You can use `php flarum info` to get the PHP, Flarum and extension versions installed.

## Links

- [Get support](https://forum.flagrow.io/t/flagrow-aqueduct)
- [Extension information](https://flagrow.io/extensions/flagrow/aqueduct)

A [premium extension](https://flagrow.io/about/premium-extensions) by [Flagrow](https://flagrow.io/).
