# Forever Toolkit

A static, browser-based toolkit for planning characters and groups in **World of Warcraft: Forever**.

**Open the site:** [jvmes-wow.github.io/forever-toolkit](https://jvmes-wow.github.io/forever-toolkit/)

> This is a community project, not an official Blizzard Entertainment or WoW Forever product. Game data can change as the server evolves.

## Tools

The [home page](https://jvmes-wow.github.io/forever-toolkit/) brings together the public tools and community research.

### Talent calculators

[Open the talent calculator](https://jvmes-wow.github.io/forever-toolkit/talents.html). Previously shared root-URL builds still open their original talents.

- Current calculators for all nine classes: Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, and Warrior.
- 27 talent trees and 467 talents with ranks, prerequisites, row requirements, and point limits.
- Per-class local saves, undo, reset, portable build codes, and shareable links.
- Drag one talent point, then tap its destination to repeat; every move validates the complete build and has its own Undo step.
- Share links preserve talent identities across layout changes. Older builds remain importable; points in removed talents or branches with unmet requirements are refunded with a notice.
- Locally hosted game icons with no third-party requests during normal use.

### Spellbook

- All nine Forever classes, grouped by specialization with name and spell-ID search.
- Compact spell families, direct rank buttons, previous/next controls, and shareable selection URLs.
- Pinned Wowhead Forever spellbook and active-talent tooltips, with local icons and optional source notes.
- Database references are separate from live-server verification; no simulator mechanics are changed by these tooltips.

### Raid composition planner

- 5-, 10-, 20-, and 40-player rosters organized into five-player groups.
- Character naming, movement, swapping, inspection, and removal.
- Party effects, raid buffs, boss debuffs, equivalent effects, and provider conflicts.
- Suggestions for specializations that fill current coverage gaps.
- Per-player Blessing priorities, selectable Air Totems, and manual debuff-provider overrides.
- Profession camp buffs for five-player groups, with party-wide effects and redundancy warnings.
- Shareable links that preserve the complete plan.

## Community research

The [Feral community analysis](https://jvmes-wow.github.io/forever-toolkit/analysis/) restores the September 20–21, 2026 survey report: 767 self-selected responses, charts, methodology, and public aggregate downloads. It is a historical snapshot, not a representative poll or an assessment of later design updates. Raw survey responses and private research are not published.

## Privacy and storage

The site has no account system, analytics, or backend. Local drafts use browser storage. Shared builds are encoded in the URL fragment, which browsers do not send to the web server.

This repository contains the sanitized static site used by GitHub Pages. Private source captures, research notes, and authoring tools are excluded from publication.

## Data and artwork

### Shared theme

`site-brand.css` defines the shared design tokens, header, navigation, controls, and tool surfaces. Load it after the page's layout stylesheet. New tools use `toolkit-page`; report pages use the light `toolkit-research` variation. Keep the same Home / Talents / Spellbook / Raid / Analysis navigation, and put tool-specific actions below the header.

Midnight blue surfaces, moonlit controls, and restrained amber highlights complement the emblem. Semantic class colors, item quality, damage charts, and success/error colors stay distinct. Homepage previews are local screenshots, not recreated interfaces. Research pages retain their separate, unchanged presentation.

### Sources

The toolkit emblem is a generated amber-gem variation of the Hearthstone Legend / Wild artwork supplied by JVMES, with vines and no rank number. It is bundled locally.

- Current Forever talent data: [Sixty Upgrades](https://sixtyupgrades.com/forever/)
- Spell data and Druid tooltips: [Forever Warcraft Database](https://forever.warcraftdb.com/)
- Blizzard game artwork and cross-references: [Wowhead](https://www.wowhead.com/)
- Background: official [World of Warcraft: Forever](https://worldofwarcraft.blizzard.com/en-us/forever) masthead artwork, © Blizzard Entertainment. Bundled locally; used only on non-research tools.
- Homepage symbols: a matching set of code-drawn gold outlines for talents, spells, groups, combat, and research. Other game-menu and spell icons remain in their tools.
- Tool icons: original WoW menu textures from the [Classic interface-art mirror](https://github.com/Gethe/wow-ui-textures/tree/312a6e61bab69370c65ccc0a08f1075d62196294/Buttons). Spellbook, Talents, and Raid use their corresponding game buttons; Analysis uses Quest Log. The simulator uses the Cat Form spell icon. Artwork © Blizzard Entertainment, bundled locally with menu texture padding trimmed.

The social preview layouts use real site data. The toolkit emblem is AI-generated from the supplied game-art references; the simulator preview is a direct screenshot of a completed run.

Warcraft, World of Warcraft, and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. This repository is an unaffiliated fan project.
