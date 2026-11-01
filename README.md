# plei-rails Codex skill installer

Install the bundled `plei-rails` skill into your local Codex skills directory.

## Install from npm

```bash
npx plei-rails-codex install
```

The installer copies the skill to `$CODEX_HOME/skills/plei-rails`, or to `~/.codex/skills/plei-rails` when `CODEX_HOME` is unset. Restart Codex or start a new conversation if the skill does not appear immediately.

To install into a specific Codex home:

```bash
npx plei-rails-codex install --codex-home /path/to/.codex
```

To replace an existing copy:

```bash
npx plei-rails-codex install --force
```

The installer only copies the bundled skill files. It does not execute the imported Claude Code hooks or shell commands preserved in the references.

## Publish a release

After choosing an available npm package name and creating a public GitHub repository for this package:

```bash
npm login
npm publish --access public
```

Use semantic version tags and publish a new npm version whenever the bundled skill changes.

## Source and attribution

The skill consolidates the 37signals Rails guidance from [ThibautBaissac/rails_ai_agents](https://github.com/ThibautBaissac/rails_ai_agents/tree/main/.claude_37signals). See `NOTICE.md` and `LICENSE` for attribution and license details.
