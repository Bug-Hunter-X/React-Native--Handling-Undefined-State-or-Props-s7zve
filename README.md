# React Native: Handling Undefined State or Props

This repository demonstrates a common error in React Native development: accessing state or props before they are initialized. The `Bug.js` file shows the problematic code, while `BugSolution.js` provides a corrected version.

## Problem

The problem arises when you attempt to use a state variable or prop before it has been assigned a value, often due to asynchronous operations or improper lifecycle method usage. This typically results in a runtime error or unexpected behavior.

## Solution

The solution involves proper handling of asynchronous operations and conditional rendering.  Use the optional chaining operator (`?.`) and the nullish coalescing operator (`??`) to safely access properties and provide default values if necessary.  Make sure data is available before rendering elements that depend on that data using the loading state.