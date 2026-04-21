import { Problem } from '../types';

export const MOCK_PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topics: "Array, Hash Table",
    description: "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p><p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>",
    testcases: [
      { input: "2 7 11 15\n9", expected: "0 1" },
      { input: "3 2 4\n6", expected: "1 2" },
      { input: "3 3\n6", expected: "0 1" }
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"]
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>",
    testcases: [
      { input: "2 4 3\n5 6 4", expected: "7 0 8" },
      { input: "0\n0", expected: "0" },
      { input: "9 9 9 9 9 9 9\n9 9 9 9", expected: "8 9 9 9 0 0 0 1" }
    ],
    constraints: ["The number of nodes in each linked list is in the range [1, 100].", "0 <= Node.val <= 9"]
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topics: "String, Sliding Window",
    description: "<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>",
    testcases: [
      { input: "abcabcbb", expected: "3" },
      { input: "bbbbb", expected: "1" },
      { input: "pwwkew", expected: "3" }
    ],
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."]
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topics: "Array, Binary Search",
    description: "<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>",
    testcases: [
      { input: "1 3\n2", expected: "2.0" },
      { input: "1 2\n3 4", expected: "2.5" },
      { input: "0 0\n0 0", expected: "0.0" }
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m, n <= 1000"]
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    topics: "String, DP",
    description: "<p>Given a string <code>s</code>, return <em>the longest palindromic substring</em> in <code>s</code>.</p>",
    testcases: [
      { input: "babad", expected: "bab" },
      { input: "cbbd", expected: "bb" },
      { input: "a", expected: "a" }
    ],
    constraints: ["1 <= s.length <= 1000", "s consists of only digits and English letters."]
  },
  {
    id: 6,
    title: "Zigzag Conversion",
    difficulty: "Medium",
    topics: "String",
    description: "<p>The string <code>\"PAYPALISHIRING\"</code> is written in a zigzag pattern on a given number of rows like this.</p>",
    testcases: [
      { input: "PAYPALISHIRING\n3", expected: "PAHNAPLSIIGYIR" },
      { input: "PAYPALISHIRING\n4", expected: "PINALSIGYAHRPI" },
      { input: "A\n1", expected: "A" }
    ],
    constraints: ["1 <= s.length <= 1000", "1 <= numRows <= 1000"]
  },
  {
    id: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    topics: "Math",
    description: "<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the range, then return <code>0</code>.</p>",
    testcases: [
      { input: "123", expected: "321" },
      { input: "-123", expected: "-321" },
      { input: "120", expected: "21" }
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"]
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    topics: "String, Parsing",
    description: "<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer.</p>",
    testcases: [
      { input: "42", expected: "42" },
      { input: "   -42", expected: "-42" },
      { input: "4193 with words", expected: "4193" }
    ],
    constraints: ["0 <= s.length <= 200"]
  },
  {
    id: 9,
    title: "Palindrome Number",
    difficulty: "Easy",
    topics: "Math",
    description: "<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>",
    testcases: [
      { input: "121", expected: "true" },
      { input: "-121", expected: "false" },
      { input: "10", expected: "false" }
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"]
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    topics: "String, DP",
    description: "<p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code>.</p>",
    testcases: [
      { input: "aa\na", expected: "false" },
      { input: "aa\na*", expected: "true" },
      { input: "ab\n.*", expected: "true" }
    ],
    constraints: ["1 <= s.length <= 20", "1 <= p.length <= 20"]
  },
  {
    id: 11,
    title: "Container With Most Water",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>You are given an integer array <code>height</code> of length <code>n</code>. Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>",
    testcases: [
      { input: "1 8 6 2 5 4 8 3 7", expected: "49" },
      { input: "1 1", expected: "1" }
    ],
    constraints: ["2 <= n <= 10^5", "0 <= height[i] <= 10^4"]
  },
  {
    id: 12,
    title: "Integer to Roman",
    difficulty: "Medium",
    topics: "Math, String",
    description: "<p>Seven different symbols represent Roman numerals. Convert a given integer to a Roman numeral.</p>",
    testcases: [
      { input: "3", expected: "III" },
      { input: "58", expected: "LVIII" },
      { input: "1994", expected: "MCMXCIV" }
    ],
    constraints: ["1 <= num <= 3999"]
  },
  {
    id: 13,
    title: "Roman to Integer",
    difficulty: "Easy",
    topics: "Math, String",
    description: "<p>Convert a Roman numeral string to an integer.</p>",
    testcases: [
      { input: "III", expected: "3" },
      { input: "LVIII", expected: "58" },
      { input: "MCMXCIV", expected: "1994" }
    ],
    constraints: ["1 <= s.length <= 15"]
  },
  {
    id: 14,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Write a function to find the longest common prefix string amongst an array of strings.</p>",
    testcases: [
      { input: "flower flow flight", expected: "fl" },
      { input: "dog racecar car", expected: "" }
    ],
    constraints: ["1 <= strs.length <= 200"]
  },
  {
    id: 15,
    title: "3Sum",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Given an integer array nums, return all unique triplets that sum to zero.</p>",
    testcases: [
      { input: "-1 0 1 2 -1 -4", expected: "[[-1,-1,2],[-1,0,1]]" },
      { input: "0 1 1", expected: "[]" },
      { input: "0 0 0", expected: "[[0,0,0]]" }
    ],
    constraints: ["3 <= nums.length <= 3000"]
  },
  {
    id: 16,
    title: "3Sum Closest",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Find three integers in <code>nums</code> such that the sum is closest to <code>target</code>.</p>",
    testcases: [
      { input: "-1 2 1 -4\n1", expected: "2" },
      { input: "0 0 0\n1", expected: "0" }
    ],
    constraints: ["3 <= nums.length <= 500"]
  },
  {
    id: 17,
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Given a string containing digits from <code>2-9</code>, return all possible letter combinations that the number could represent.</p>",
    testcases: [
      { input: "23", expected: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" },
      { input: "", expected: "[]" },
      { input: "2", expected: "[\"a\",\"b\",\"c\"]" }
    ],
    constraints: ["0 <= digits.length <= 4"]
  },
  {
    id: 18,
    title: "4Sum",
    difficulty: "Medium",
    topics: "Array, Two Pointers",
    description: "<p>Return an array of all unique quadruplets that sum to <code>target</code>.</p>",
    testcases: [
      { input: "1 0 -1 0 -2 2\n0", expected: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" },
      { input: "2 2 2 2 2\n8", expected: "[[2,2,2,2]]" }
    ],
    constraints: ["1 <= nums.length <= 200"]
  },
  {
    id: 19,
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>",
    testcases: [
      { input: "1 2 3 4 5\n2", expected: "1 2 3 5" },
      { input: "1\n1", expected: "" },
      { input: "1 2\n1", expected: "1" }
    ],
    constraints: ["1 <= sz <= 30"]
  },
  {
    id: 20,
    title: "Valid Parentheses",
    difficulty: "Easy",
    topics: "Stack",
    description: "<p>Determine if an input string containing just parentheses is valid.</p>",
    testcases: [
      { input: "()", expected: "true" },
      { input: "()[]{}", expected: "true" },
      { input: "(]", expected: "false" }
    ],
    constraints: ["1 <= s.length <= 10^4"]
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topics: "Linked List",
    description: "<p>Merge two sorted linked lists into one sorted list.</p>",
    testcases: [
      { input: "1 2 4\n1 3 4", expected: "1 1 2 3 4 4" },
      { input: "", expected: "" }
    ],
    constraints: ["Both lists in range [0, 50]"]
  },
  {
    id: 22,
    title: "Generate Parentheses",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Generate all combinations of well-formed parentheses for <code>n</code> pairs.</p>",
    testcases: [
      { input: "3", expected: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]" },
      { input: "1", expected: "[\"()\"]" }
    ],
    constraints: ["1 <= n <= 8"]
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    topics: "Linked List, Heap",
    description: "<p>Merge <code>k</code> sorted linked-lists into one sorted linked-list.</p>",
    testcases: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", expected: "1 1 2 3 4 4 5 6" },
      { input: "[]", expected: "" }
    ],
    constraints: ["0 <= k <= 10^4"]
  },
  {
    id: 24,
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    topics: "Linked List",
    description: "<p>Swap every two adjacent nodes in a linked list and return its head.</p>",
    testcases: [
      { input: "1 2 3 4", expected: "2 1 4 3" },
      { input: "1", expected: "1" }
    ],
    constraints: ["[0, 100] nodes"]
  },
  {
    id: 25,
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    topics: "Linked List",
    description: "<p>Reverse nodes of the linked list <code>k</code> at a time.</p>",
    testcases: [
      { input: "1 2 3 4 5\n2", expected: "2 1 4 3 5" },
      { input: "1 2 3 4 5\n3", expected: "3 2 1 4 5" }
    ],
    constraints: ["1 <= k <= n <= 5000"]
  },
  {
    id: 26,
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    topics: "Array, Two Pointers",
    description: "<p>Remove duplicates in-place such that each unique element appears only once.</p>",
    testcases: [
      { input: "1 1 2", expected: "2" },
      { input: "0 0 1 1 1 2 2 3 3 4", expected: "5" }
    ],
    constraints: ["1 <= nums.length <= 3 * 10^4"]
  },
  {
    id: 27,
    title: "Remove Element",
    difficulty: "Easy",
    topics: "Array, Two Pointers",
    description: "<p>Remove all occurrences of <code>val</code> in <code>nums</code> in-place.</p>",
    testcases: [
      { input: "3 2 2 3\n3", expected: "2" },
      { input: "0 1 2 2 3 0 4 2\n2", expected: "5" }
    ],
    constraints: ["0 <= nums.length <= 100"]
  },
  {
    id: 28,
    title: "Find the Index of the First Occurrence in a String",
    difficulty: "Easy",
    topics: "String",
    description: "<p>Return the index of the first occurrence of <code>needle</code> in <code>haystack</code>.</p>",
    testcases: [
      { input: "sadbutsad\nsad", expected: "0" },
      { input: "leetcode\nleeto", expected: "-1" }
    ],
    constraints: ["1 <= haystack.length, needle.length <= 10^4"]
  },
  {
    id: 29,
    title: "Divide Two Integers",
    difficulty: "Medium",
    topics: "Math",
    description: "<p>Divide two integers without using multiplication, division, and mod operator.</p>",
    testcases: [
      { input: "10\n3", expected: "3" },
      { input: "7\n-3", expected: "-2" }
    ],
    constraints: ["32-bit signed integers"]
  },
  {
    id: 30,
    title: "Substring with Concatenation of All Words",
    difficulty: "Hard",
    topics: "String, Hash Table",
    description: "<p>Find all starting indices of substring(s) that is a concatenation of each word in <code>words</code> exactly once.</p>",
    testcases: [
      { input: "barfoothefoobarman\nfoo bar", expected: "[0,9]" },
      { input: "wordgoodgoodgoodword\nword good best word", expected: "[]" }
    ],
    constraints: ["1 <= s.length <= 10^4"]
  },
  {
    id: 31,
    title: "Next Permutation",
    difficulty: "Medium",
    topics: "Array",
    description: "<p>Rearrange numbers into the lexicographically next greater permutation.</p>",
    testcases: [
      { input: "1 2 3", expected: "1 3 2" },
      { input: "3 2 1", expected: "1 2 3" },
      { input: "1 1 5", expected: "1 5 1" }
    ],
    constraints: ["1 <= nums.length <= 100"]
  },
  {
    id: 32,
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    topics: "Stack, DP",
    description: "<p>Find the length of the longest well-formed parentheses substring.</p>",
    testcases: [
      { input: "(()", expected: "2" },
      { input: ")()())", expected: "4" },
      { input: "", expected: "0" }
    ],
    constraints: ["0 <= s.length <= 3 * 10^4"]
  },
  {
    id: 33,
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topics: "Array, Binary Search",
    description: "<p>Search for a target value in an array sorted in ascending order and rotated at some pivot.</p>",
    testcases: [
      { input: "4 5 6 7 0 1 2\n0", expected: "4" },
      { input: "4 5 6 7 0 1 2\n3", expected: "-1" }
    ],
    constraints: ["1 <= nums.length <= 5000"]
  },
  {
    id: 34,
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    topics: "Array, Binary Search",
    description: "<p>Find the starting and ending position of a given <code>target</code> value in a sorted array.</p>",
    testcases: [
      { input: "5 7 7 8 8 10\n8", expected: "[3,4]" },
      { input: "5 7 7 8 8 10\n6", expected: "[-1,-1]" }
    ],
    constraints: ["0 <= nums.length <= 10^5"]
  },
  {
    id: 35,
    title: "Search Insert Position",
    difficulty: "Easy",
    topics: "Array, Binary Search",
    description: "<p>Return the index if target is found, otherwise return the index where it would be if inserted in order.</p>",
    testcases: [
      { input: "1 3 5 6\n5", expected: "2" },
      { input: "1 3 5 6\n2", expected: "1" },
      { input: "1 3 5 6\n7", expected: "4" }
    ],
    constraints: ["1 <= nums.length <= 10^4"]
  },
  {
    id: 36,
    title: "Valid Sudoku",
    difficulty: "Medium",
    topics: "Hash Table",
    description: "<p>Determine if a <code>9 x 9</code> Sudoku board is valid.</p>",
    testcases: [
      { input: "board1", expected: "true" },
      { input: "board2", expected: "false" }
    ],
    constraints: ["board.length == 9"]
  },
  {
    id: 37,
    title: "Sudoku Solver",
    difficulty: "Hard",
    topics: "Backtracking",
    description: "<p>Solve a Sudoku puzzle by filling the empty cells.</p>",
    testcases: [
      { input: "board1", expected: "solved1" }
    ],
    constraints: ["board.length == 9"]
  },
  {
    id: 38,
    title: "Count and Say",
    difficulty: "Medium",
    topics: "String",
    description: "<p>The count-and-say sequence is a recursive digit string formula.</p>",
    testcases: [
      { input: "1", expected: "1" },
      { input: "4", expected: "1211" }
    ],
    constraints: ["1 <= n <= 30"]
  },
  {
    id: 39,
    title: "Combination Sum",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return a list of all unique combinations where the chosen numbers sum to <code>target</code>.</p>",
    testcases: [
      { input: "2 3 6 7\n7", expected: "[[2,2,3],[7]]" },
      { input: "2 3 5\n8", expected: "[[2,2,2,2],[2,3,3],[3,5]]" }
    ],
    constraints: ["1 <= candidates.length <= 30"]
  },
  {
    id: 40,
    title: "Combination Sum II",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Find all unique combinations in <code>candidates</code> where the numbers sum to <code>target</code>.</p>",
    testcases: [
      { input: "10 1 2 7 6 1 5\n8", expected: "[[1,1,6],[1,2,5],[1,7],[2,6]]" },
      { input: "2 5 2 1 2\n5", expected: "[[1,2,2],[5]]" }
    ],
    constraints: ["1 <= candidates.length <= 100"]
  },
  {
    id: 41,
    title: "First Missing Positive",
    difficulty: "Hard",
    topics: "Array",
    description: "<p>Return the smallest missing positive integer from an unsorted array.</p>",
    testcases: [
      { input: "1 2 0", expected: "3" },
      { input: "3 4 -1 1", expected: "2" },
      { input: "7 8 9 11 12", expected: "1" }
    ],
    constraints: ["1 <= nums.length <= 10^5"]
  },
  {
    id: 42,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topics: "Array, Two Pointers",
    description: "<p>Compute how much water it can trap after raining based on elevation map.</p>",
    testcases: [
      { input: "0 1 0 2 1 0 1 3 2 1 2 1", expected: "6" },
      { input: "4 2 0 3 2 5", expected: "9" }
    ],
    constraints: ["1 <= n <= 2 * 10^4"]
  },
  {
    id: 43,
    title: "Multiply Strings",
    difficulty: "Medium",
    topics: "String, Math",
    description: "<p>Return the product of two non-negative integers represented as strings.</p>",
    testcases: [
      { input: "2\n3", expected: "6" },
      { input: "123\n456", expected: "56088" }
    ],
    constraints: ["length <= 200"]
  },
  {
    id: 44,
    title: "Wildcard Matching",
    difficulty: "Hard",
    topics: "String, DP",
    description: "<p>Implement wildcard pattern matching with support for <code>'?'</code> and <code>'*'</code>.</p>",
    testcases: [
      { input: "aa\na", expected: "false" },
      { input: "aa\n*", expected: "true" },
      { input: "cb\n?a", expected: "false" }
    ],
    constraints: ["0 <= s.length, p.length <= 2000"]
  },
  {
    id: 45,
    title: "Jump Game II",
    difficulty: "Medium",
    topics: "Array, Greedy",
    description: "<p>Find the minimum number of jumps to reach the last index.</p>",
    testcases: [
      { input: "2 3 1 1 4", expected: "2" },
      { input: "2 3 0 1 4", expected: "2" }
    ],
    constraints: ["1 <= nums.length <= 10^4"]
  },
  {
    id: 46,
    title: "Permutations",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible permutations of an array of distinct integers.</p>",
    testcases: [
      { input: "1 2 3", expected: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
      { input: "0 1", expected: "[[0,1],[1,0]]" }
    ],
    constraints: ["1 <= nums.length <= 6"]
  },
  {
    id: 47,
    title: "Permutations II",
    difficulty: "Medium",
    topics: "Backtracking",
    description: "<p>Return all possible unique permutations of an array that might contain duplicates.</p>",
    testcases: [
      { input: "1 1 2", expected: "[[1,1,2],[1,2,1],[2,1,1]]" },
      { input: "1 2 3", expected: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }
    ],
    constraints: ["1 <= nums.length <= 8"]
  },
  {
    id: 48,
    title: "Rotate Image",
    difficulty: "Medium",
    topics: "Matrix",
    description: "<p>Rotate an <code>n x n</code> 2D matrix by 90 degrees clockwise.</p>",
    testcases: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", expected: "[[7,4,1],[8,5,2],[9,6,3]]" },
      { input: "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", expected: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" }
    ],
    constraints: ["n <= 20"]
  },
  {
    id: 49,
    title: "Group Anagrams",
    difficulty: "Medium",
    topics: "String, Hash Table",
    description: "<p>Group anagrams together from an array of strings.</p>",
    testcases: [
      { input: "eat tea tan ate nat bat", expected: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" },
      { input: "", expected: "[[\"\"]]" }
    ],
    constraints: ["strs.length <= 10^4"]
  },
  {
    id: 50,
    title: "Pow(x, n)",
    difficulty: "Medium",
    topics: "Math, Recursion",
    description: "<p>Calculate <code>x</code> raised to the power <code>n</code>.</p>",
    testcases: [
      { input: "2.00000\n10", expected: "1024.0" },
      { input: "2.10000\n3", expected: "9.261" },
      { input: "2.00000\n-2", expected: "0.25" }
    ],
    constraints: ["-100.0 < x < 100.0"]
  }
];
