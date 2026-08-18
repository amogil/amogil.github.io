---
title: "How to Edit a Document with an Agent"
description: "How to Edit a Document with an Agent"
date: "2026-08-18"
---

<video controls playsinline preload="metadata" style="width: 100%; height: auto;">
  <source src="/blog/edit-document-with-agent/ai-buddy-editor.mp4" type="video/mp4">
</video>

If you regularly edit documents with an agent, you have probably run into three problems:

1. Constantly switching between the editor and the agent chat.
2. It is not clear exactly what the agent changed or which parts you need to check.
3. It is hard to point the agent to the exact passage: you have to copy it into the chat or refer to a line and explain which part of the document to work on.

This process worked for me:

1. Open the built-in browser in ChatGPT / Codex, or set up browser integration in Claude. Go to [https://docs.google.com](https://docs.google.com) and sign in. You need the browser specifically: programmatic Google Docs integrations do not work with suggestions.
2. Switch the chat to `/goal` mode and give the agent these instructions:
   - Work on the document at the link in the built-in browser.
   - Make changes only as suggestions.
   - Treat comments as commands.
   - Keep working until you write "stop" in the chat or stop the goal.
3. Give the agent time to open the browser and figure out what is going on.
4. Keep writing, leave comments for the agent, and accept or reject its changes.

The agent then works directly in the document: it follows commands, and you can accept or reject every change. It works more slowly than a person, but you can leave the task running in the background and keep writing.

With automatic action approval, you may still need to manually allow the document to be changed once: permission from the prompt does not always take effect.

The prompt I use: <a href="https://gist.github.com/amogil/ac2cb3ec44874e2070bc2cffe2e38bd6">https:<wbr>&#47;&#47;<wbr>gist.github.com<wbr>&#47;amogil<wbr>&#47;ac2cb3ec44874e2070bc2cffe2e38bd6</a>
