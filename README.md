# Aqueduct

[Aqueduct](https://flagrow.io/extensions/hyn/aqueduct) can make a KanBan board out of any primary tag.

By relying heavily on the tags extension you can create a board with todo, doing, done style columns inside any primary tag. Using secondary tags as the columns gives you complete control. You can drag columns and cards any way you like and it even offers sensible permissions.

> This is a [premium extension](https://flagrow.io/about/premium-extensions). Installation and updating requires an [active subscription](https://flagrow.io/extensions/hyn/aqueduct/subscription).

## Installation

Use flagrow/bazaar or check the FAQ on [flagrow.io](https://flagrow.io) on how to use a custom token, then run:

```bash
$ composer require hyn/aqueduct --no-dev --prefer-dist -o
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

## Links

- [Get support](https://forum.flagrow.io/t/hyn-aqueduct)
- [Extension information](https://flagrow.io/extensions/hyn/aqueduct)
