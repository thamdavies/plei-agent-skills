---
name: plei-rails
description: Use the user-provided 37signals Rails conventions for Ruby on Rails implementation, architecture, review, testing, and Hotwire work. Do not apply to non-Rails projects or Rails projects that choose a different architecture.
---

# Plei Rails

A consolidated Codex skill containing the 37signals Rails guidance the user provided. The shared Rails profile is adapted for Codex in `references/upstream/AGENTS.md`; the original rules, skill guides, agent playbooks, and settings remain supporting references.

## Scope and precedence

- Activate for Rails work when the repository or user asks for this 37signals profile. Do not apply Rails/Hotwire conventions to Vue, React, or other non-Rails applications.
- Treat this profile as project guidance, not as permission to change the stack, introduce dependencies, run commands with side effects, or override the user's explicit choices and higher-priority instructions.
- First inspect the Rails app's existing architecture and instructions. Follow its established choices when they differ from this profile unless the user explicitly asks for the profile.
- The upstream documents describe a particular Rails/Ruby stack. Verify version-sensitive APIs and commands against the target project's versions before using them.
- The imported Claude `settings.json` is preserved as reference only. Do not execute its hooks or install them as Codex settings.

## How to use the material

1. Read `references/upstream/AGENTS.md` for the shared architecture and conventions when the profile applies.
2. For the task at hand, read only the matching `references/upstream/rules/*.md` and one or more relevant `skills/<name>/SKILL.md` files. Their `references/` subfolders retain the supporting detail.
3. Use `agents/*.md` as role-specific checklists when implementing, refactoring, or reviewing. They are playbooks, not an instruction to spawn subagents; delegate only when the user and active environment authorize it.
4. Reconcile any “Always”, “Ask first”, or “Never” guidance with the actual repository, user direction, and active safety constraints before acting.

## Skill index

| Task | Source skill |
| --- | --- |
| REST/JSON APIs and Jbuilder | `references/upstream/skills/api-patterns/` |
| Passwordless auth, passkeys, magic links | `references/upstream/skills/auth-setup/` |
| HTTP and fragment caching | `references/upstream/skills/caching-patterns/` |
| Shared model/controller concerns | `references/upstream/skills/concern-patterns/` |
| RESTful CRUD and state-changing resources | `references/upstream/skills/crud-patterns/` |
| Activity feeds, events, and webhooks | `references/upstream/skills/event-tracking/` |
| Background jobs and Solid Queue | `references/upstream/skills/job-patterns/` |
| Action Mailer and bundled notifications | `references/upstream/skills/mailer-patterns/` |
| Schema and data migrations | `references/upstream/skills/migration-patterns/` |
| Rich domain models and associations | `references/upstream/skills/model-patterns/` |
| Account scoping and multi-tenancy | `references/upstream/skills/multi-tenant-setup/` |
| State represented by records | `references/upstream/skills/state-records/` |
| Progressive enhancement with Stimulus | `references/upstream/skills/stimulus-patterns/` |
| Minitest and fixtures | `references/upstream/skills/testing-patterns/` |
| Turbo Frames, Streams, and broadcasts | `references/upstream/skills/turbo-patterns/` |

## Rules and agent playbooks

- Shared Ruby style: `references/upstream/rules/style.md`
- Rails controllers, models, mailers, jobs, migrations, views, tests, and tenant isolation: read the matching file under `references/upstream/rules/`.
- Implementation, refactoring, and review checklists: `references/upstream/agents/implement-agent.md`, `references/upstream/agents/refactoring-agent.md`, and `references/upstream/agents/review-agent.md`. Their supporting notes are in `references/upstream/agents/references/`.

All source files are retained under `references/upstream/`; use those files for complete examples and exact conventions rather than duplicating them here.
