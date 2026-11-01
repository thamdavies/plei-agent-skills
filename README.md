# Plei agent skills

Install the bundled `plei-rails` and `plei-git` skills into your local Codex skills directory.

## Install from npm

```bash
npx --yes --package=plei-agent-skills plei-agent-skills install
```

The installer copies the skill to `$CODEX_HOME/skills/plei-rails`, or to `~/.codex/skills/plei-rails` when `CODEX_HOME` is unset. Restart Codex or start a new conversation if the skill does not appear immediately.

To install all bundled skills at once:

```bash
npx --yes --package=plei-agent-skills plei-agent-skills install --skill all
```

This installs both `plei-rails` and `plei-git`. If either is already installed, add `--force` to replace the existing copies.

To install `plei-git`, which includes Conventional Commits guidance and a reusable pull request description template:

```bash
npx --yes --package=plei-agent-skills plei-agent-skills install --skill plei-git
```

It installs to `$CODEX_HOME/skills/plei-git`, or to `~/.codex/skills/plei-git` when `CODEX_HOME` is unset. Use `--skill plei-rails` to select the Rails skill explicitly.

To install into a specific Codex home:

```bash
npx --yes --package=plei-agent-skills plei-agent-skills install --codex-home /path/to/.codex
```

To replace an existing copy of the selected skill:

```bash
npx --yes --package=plei-agent-skills plei-agent-skills install --force
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

The `plei-rails` skill consolidates 37signals Rails guidance from [ThibautBaissac/rails_ai_agents](https://github.com/ThibautBaissac/rails_ai_agents/tree/main/.claude_37signals). See `NOTICE.md` and `LICENSE` for attribution and license details. The `plei-git` skill follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
