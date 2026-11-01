---
name: plei-git
description: Write and review Git commit messages using Conventional Commits 1.0.0, or draft clear pull request descriptions for any project. Use when preparing commit messages or PR summaries; follow a repository's own conventions when they differ.
---

# Plei Git

Use [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) as the message format when the user or repository asks for this profile.

## Format

```text
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

- Use `feat` for a feature and `fix` for a bug fix. Other clear noun types are allowed; the specification does not prescribe a closed list or assign them release meaning.
- Add an optional noun scope in parentheses when it helps identify the affected area, such as `fix(parser): ...`.
- Keep the description a concise summary of the change. Use the repository's casing and wording conventions when present.
- Add a body after a blank line when context or rationale is useful.
- Put trailers after a blank line. Footer tokens use `Token: value` or `Token #value`; use hyphens instead of spaces in multiword tokens.
- Mark a breaking change with `!` immediately before the colon, a `BREAKING CHANGE: <description>` footer, or both. The footer spelling is uppercase and must explain the compatibility impact. `BREAKING-CHANGE` is also a valid footer token.

## Workflow

1. Inspect the relevant diff and repository guidance before choosing a type, scope, or level of detail. Base the message on the actual changes; do not infer unrelated intent.
2. Prefer one focused message for one cohesive change. If the changes represent distinct concerns and the user asks for multiple commits, help separate them rather than forcing multiple types into one subject.
3. When reviewing a proposed message, check its structure and whether the type, scope, summary, body, and any breaking-change notice accurately describe the diff. Explain specific corrections briefly.
4. Do not create a commit, rewrite history, or run Git commands that mutate repository state unless the user requested that action. When asked to commit, follow the requested scope and repository workflow.

Conventional Commits leaves revert-message behavior to tools and projects. Follow an existing repository convention; otherwise `revert: <summary>` with `Refs: <commit-sha>` is a reasonable convention, not a specification requirement.

## Pull request descriptions

When drafting or reviewing a PR description, read `references/pr-description-template.md`. Adapt it to the project and change: keep the sections that help reviewers understand the work, remove irrelevant prompts, and fill it with facts from the diff and user context. Don't invent test results, impacts, or rollout plans. Respect any template already required by the repository or hosting platform.
