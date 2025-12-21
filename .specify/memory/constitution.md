<!--
Sync Impact Report:
- Version change: Template → 1.0.0
- Modified principles:
    - [PRINCIPLE_1_NAME] → I. Code Quality & Standards
    - [PRINCIPLE_2_NAME] → II. Testing Standards
    - [PRINCIPLE_3_NAME] → III. User Experience Consistency
    - [PRINCIPLE_4_NAME] → IV. Performance Requirements
- Added sections: Technical Constraints & Stack, Development Workflow
- Templates requiring updates:
    - .specify/templates/tasks-template.md (✅ updated to include UX/Performance tasks)
-->
# ArtisanCloudWebsite Constitution

## Core Principles

### I. Code Quality & Standards
Code must be clean, idiomatic, and maintainable. TypeScript strict mode is mandatory; usage of `any` is prohibited unless explicitly justified. Prettier and ESLint configurations must be respected with zero warnings. Code should be self-documenting, with comments reserved for "why", not "what".

### II. Testing Standards
High test coverage is required for critical paths. Logic must be verified with unit tests; UI components must be verified with component tests. Tests must be deterministic and isolated. A "Red-Green-Refactor" workflow is strongly encouraged.

### III. User Experience Consistency
The user experience must be consistent across the application. Usage of the designated component library (Element Plus) is mandatory to ensure visual uniformity. Responsive design is non-negotiable—the application must function flawlessly on mobile, tablet, and desktop. Internationalization (i18n) support must be preserved and expanded for all user-facing text.

### IV. Performance Requirements
Performance is a feature. The application must optimize for Core Web Vitals (LCP, FID, CLS). Lazy loading should be used for routes and heavy components. Asset optimization is required. Regressions in load time or responsiveness must be treated as critical bugs.

## Technical Constraints & Stack

**Frontend Framework**: Vue 3 + TypeScript + Vite
**State Management**: Pinia
**UI Library**: Element Plus
**Routing**: Vue Router
**Internationalization**: Vue I18n
**Network**: Axios

## Development Workflow

1.  **Specification**: All features start with a specification (Spec).
2.  **Plan**: A technical plan is derived from the Spec.
3.  **Implementation**: Code is written following this Constitution.
4.  **Review**: Peer review enforces these principles.

## Governance

This Constitution supersedes all other project documentation or practices.
Amendments to this document require a Pull Request, explicitly adhering to the versioning policy below.

**Versioning Policy**:
- **MAJOR**: Backward incompatible governance or removal of core principles.
- **MINOR**: New principles added or material expansion of guidance.
- **PATCH**: Clarifications, wording fixes, non-semantic refinements.

**Version**: 1.0.0 | **Ratified**: 2025-12-21 | **Last Amended**: 2025-12-21