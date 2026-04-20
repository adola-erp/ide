import { Problem } from '../types';

export const MOCK_PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topics: "Array, Hash Table",
    description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p><p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>",
    testcases: [{ input: "[2,7,11,15]\n9", expected: "[0,1]" }]
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topics: "Linked List, Math",
    description: "<p>You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>",
    testcases: [{ input: "[2,4,3]\n[5,6,4]", expected: "[7,0,8]" }]
  }
];
