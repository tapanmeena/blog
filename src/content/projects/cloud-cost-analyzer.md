---
title: "Cloud Cost Analyzer"
description: "A command-line tool for managing Azure Privileged Identity Management (PIM) roles. Streamline the process of activating, deactivating, and listing PIM role assignments."
techStack:
  - Python
  - Azure SDK
  - Fast API
category: "Cloud tools"
startDate: 2024-06-10
endDate: 2024-12-20
status: "completed"
featured: false
draft: false
---

## Overview

AZPM CLI is a command-line interface tool designed to simplify Azure Privileged Identity Management operations.

## Features

- **Quick Role Activation**: Activate eligible PIM roles with a single command

## Challenges

Building this tool required deep understanding of Azure's PIM APIs and authentication flows. Key challenges included:

1. Handling token refresh for long-running operations
2. Managing complex permission hierarchies
3. Providing meaningful errr messages for common failure scenarios

## Outcomes

The CLI has significantly reduced the time needed to activate PIM roles from ~2 minutes (portal navigation) to ~5 seconds (single command).
