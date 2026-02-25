# Resource and Signal Implementation Documentation

This document describes the implementation of the two-column user detail view in the `resource-app` using Angular Signals and the `resource` API.

## Overview

The application features a responsive two-column layout:
- **Left Column:** Displays a list of users fetched from an external API.
- **Right Column:** Displays detailed information for a selected user.

The implementation leverages Angular's modern reactivity primitives (`signal` and `resource`) to manage state and asynchronous data fetching efficiently.

## Application Structure

### 1. State Management with Signals

Two primary signals manage the application's interactive state:
- `reloadTrigger`: A numeric signal used to force a refresh of the user list.
- `selectedUserId`: A signal that stores the ID of the currently selected user (or `null` if none is selected).

### 2. Data Fetching with `resource()`

The app uses the `resource()` API to handle asynchronous operations:

- **`users` Resource:** 
  - Fetches the full list of users from `https://jsonplaceholder.typicode.com/users`.
  - Automatically re-runs when `reloadTrigger` is updated.
- **`userDetail` Resource:**
  - Fetches specific user data from `https://jsonplaceholder.typicode.com/users/{id}`.
  - Reactive to the `selectedUserId` signal. If no user is selected, it returns `null` immediately.

### 3. User Interface

The UI is built with a Flexbox layout in `app.html` and styled in `app.css`.

- **User List (Left):**
  - Displays user names and emails.
  - Highlighting indicates the currently selected user via the `[class.selected]` binding.
  - Clicking a user updates the `selectedUserId` signal.
- **Detail View (Right):**
  - Shows a placeholder message if no user is selected.
  - Displays detailed user information (username, phone, website, company) once data is fetched.
  - Handles loading and error states locally for a better user experience.

## How to Use

1.  **View Users:** Upon loading, the application automatically fetches and displays the user list in the left column.
2.  **Select a User:** Click on any user in the list. The right column will update to show "Loading..." and then display that user's specific details.
3.  **Reload List:** Click the "Reload Users" button to trigger a fresh fetch of the user list.
4.  **Switch Selection:** Clicking a different user will immediately update the details view with the new user's information.

## Technical Details

- **Angular Version:** ^21.1.0
- **API Endpoint:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- **Key Files:**
  - `src/app/app.ts`: Component logic and resource definitions.
  - `src/app/app.html`: Two-column structure and control flow templates (`@if`, `@for`).
  - `src/app/app.css`: Layout and component styling.
