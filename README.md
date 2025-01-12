# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an improperly defined dependency array, leading to an infinite render loop.

## Bug Description

The `useEffect` hook, without a dependency array or with an incomplete one, re-runs after every render, creating a loop. This is because the `count` variable changes on every click, causing the `useEffect` to trigger repeatedly.

## Solution

The solution involves correctly specifying the dependency array to limit when the `useEffect` runs. In this case, we only need it to run when `count` changes.