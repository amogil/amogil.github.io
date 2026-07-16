---
title: "Spec Driven Development"
description: "Spec Driven Development"
date: "2026-07-16"
---

![A developer checks notes against the code](./hero-image.jpg)

As AI-assisted development evolves, developers' focus shifts from writing code to defining the task and checking the result. When a developer works on a task with an agent, they give the agent the context needed to define the task via chat. This context lasts only as long as the agent does, or until context compaction occurs. For simple development scenarios, where agents have little autonomy, this is a suitable option.

But as autonomy grows, it becomes clear that artifacts are needed: specs in which the task definition needs to be stored independently of agents and developers. Specs are stored in the repository alongside the code and are available to the agent on every run. For the initial implementation, the agent writes code from the spec. During later changes, the spec helps preserve existing behavior when the agent works on another task.

Specs also improve the quality of reviews by other agents. Reviewers have the task definition that the code was written against.

A typical spec consists of the following parts:

1. Requirements: how the system should behave.
2. Constraints.
3. Acceptance criteria.
4. An implementation plan and a list of tasks that the agent must complete during implementation.

There are two popular frameworks for working with specs:

1. [**GitHub Spec Kit**](https://github.com/github/spec-kit) focuses on the development pipeline: specify → plan → tasks → implement.
2. [**OpenSpec**](https://openspec.dev/) focuses on the lifecycle of changes to specs: explore → propose → apply → archive.

In my experience, a spec-driven development (SDD) pipeline looks like this:

1. A short description of the task, its goal, and acceptance criteria are recorded in the ticket.
2. The product owner, together with the agent, formulates the requirements in human language. I prefer [EARS](https://en.wikipedia.org/wiki/Easy_Approach_to_Requirements_Syntax), but the format can be different.
3. The developer, together with the agent, adds technical details: a breakdown into subsystems, constraints, and technical requirements.
4. The developer and the agent prepare the implementation plan and task list.
5. One or more agents, under the developer's supervision, implement the feature according to the plan and write tests.
6. The developer and the reviewer agent check the code against the goal, spec, and acceptance criteria. They identify and resolve discrepancies between specs and code.
7. The person responsible for acceptance checks the result against the spec and acceptance criteria, verifies that all automated checks have passed (tests, linters, agents), and then accepts it.

If a problem in the spec or plan is found during review or acceptance, the work returns to the corresponding stage of the pipeline.

An autonomous agent takes on more and more of the implementation. The developer is responsible for the spec and plan, then checks the result after implementation. The more autonomous the agent, the more heavily code quality depends on the quality of these artifacts.
