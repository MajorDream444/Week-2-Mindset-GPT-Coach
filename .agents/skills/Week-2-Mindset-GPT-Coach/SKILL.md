```markdown
# Week-2-Mindset-GPT-Coach Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill documents the core development patterns, coding conventions, and workflows for the `Week-2-Mindset-GPT-Coach` repository. The codebase is written in TypeScript and focuses on agent or component-based development without a specific framework. It emphasizes production readiness, clear documentation, and consistent code style.

## Coding Conventions

### File Naming
- Use **snake_case** for all file names.
  - Example: `mindset_agent.ts`, `production_readiness.md`

### Import Style
- Use **relative imports** for modules within the project.
  - Example:
    ```typescript
    import { checkReadiness } from './readiness_utils';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    export function evaluateMindset() { ... }
    ```

### Commit Messages
- Follow **conventional commit** style.
- Use the `chore` prefix for maintenance and documentation updates.
  - Example: `chore: update production readiness checklist for Claude agent`

## Workflows

### Add Production Readiness Control Doc
**Trigger:** When someone wants to document or enforce production readiness requirements for a new agent, component, or the repository as a whole.  
**Command:** `/add-production-readiness-doc`

1. **Identify** the agent or component requiring production readiness documentation.
2. **Create or update** a corresponding markdown file with relevant controls or checklists. Common files include:
    - `AGENTS.md`
    - `CLAUDE.md`
    - `.github/PRODUCTION_READINESS.md`
    - `.github/pull_request_template.md`
3. **Document** the necessary standards, controls, or checklists for production readiness.
4. **Commit** the changes using a conventional commit message, e.g., `chore: add production readiness checklist for new agent`.
5. **Push** your changes and open a pull request for review.

**Example:**
```markdown
# CLAUDE.md

## Production Readiness Checklist
- [x] Unit tests passing
- [x] Documentation complete
- [x] Security review performed
```

## Testing Patterns

- **File Pattern:** Test files are named using the `*.test.*` convention (e.g., `agent.test.ts`).
- **Framework:** Testing framework is not explicitly defined; use standard TypeScript testing practices.
- **Example Test File:**
    ```typescript
    // mindset_agent.test.ts
    import { evaluateMindset } from './mindset_agent';

    describe('evaluateMindset', () => {
      it('should return positive for growth mindset', () => {
        expect(evaluateMindset('I can learn')).toBe('growth');
      });
    });
    ```

## Commands

| Command                        | Purpose                                                         |
|--------------------------------|-----------------------------------------------------------------|
| /add-production-readiness-doc  | Add or update production readiness documentation for components. |
```
