# Pull request description template

Copy this template, then remove the guidance and any section that does not help explain the change. Keep answers specific enough that a reviewer can understand the reason for the PR, inspect the important parts, and see what evidence supports it.

```markdown
## Summary

<!-- In a few sentences, say what changed and why. Lead with the result or problem, not a file-by-file list. -->

## Changes

<!-- Describe the important behavior, decisions, or deliverables. Mention areas a reviewer should focus on. -->

## Validation

<!-- Say what you checked and what happened. This may include tests, builds, manual checks, data comparisons, document review, or other evidence. If you did not validate something relevant, say so. -->

## Impact and follow-up

<!-- Include only when relevant: user or system impact, compatibility changes, migration or rollout steps, operational needs, known limitations, or follow-up work. -->

## References

<!-- Link related issues, designs, specifications, decisions, or prior work when useful. -->

## Visuals

<!-- For changes best understood visually, add screenshots, recordings, diagrams, or before/after examples. Add a short caption or alt text. Remove this section when it does not apply. -->
```

## Adaptation notes

- Keep the summary understandable to someone who has not followed the implementation discussion. Explain project-specific terms on first use when needed.
- Tailor validation to the work. A documentation change may need a rendered preview or link check; a data change may need counts or sample comparisons; a UI change may need screenshots and interaction checks. Report only what was actually done.
- Include compatibility, security, privacy, performance, data, or operational impact only when the change meaningfully touches it. State "none" only when that assessment was made and the information helps reviewers.
- Break large changes into named areas or a review order when that will make the diff easier to inspect. Avoid repeating the diff in prose.
- Preserve required project or hosting-platform fields, and do not discard repository-specific checklists.
