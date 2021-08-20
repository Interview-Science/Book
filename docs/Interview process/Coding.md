---
sidebar_position: 5
---

# Coding

Interview stage
No matter how impressive your resume is, you should not take the interview lightly. Like I said at the beginning, the interview process is different depending on the company as well as the department, here I will take the most common process as an example.

HR telephone confirmation
Telephone interview
Homework
On-site interview
Non-technical questions
Questions from job seekers
1. HR phone call to confirm

HR will chat with you to make sure you understand the basic information of the position. Ask a few questions about your resume, this round is only to assess whether your basic information is correct, whether the talk is normal, whether you understand their own resume (believe me, many job seekers if you do not look at their own resume, even self-introduction can not do) this round relax, according to the resume truth is good. After passing HR will agree with you by email about the time of the technical interview, the way and the tools used.

2. Remote interview

This is the first round of technical interviews, Google will use Google hangouts or Bluejeans for video interviews, Microsoft will use iTeams for phone interviews, depending on the situation will also use different online code writing platforms. Making sure you know how to use these tools and testing the stability of the network before the interview is an important step. The interviewer may ask technical questions over the phone or video, or may post algorithm questions in an online document and ask you to solve them. If you encounter a difficult can't do also don't need to worry too much, try to provide the solution to the idea, to say what you know. Even if you can't bug free in the end, at least you can prove your strength to the interviewer.

3. homework

This round is not common, some companies will let you implement a small module or a small tool. The main assessment is your ability to develop in real situations. This depends on the usual accumulation, how to design the API, what design patterns to use, all have a point. Maintain good documentation of commit messages, simple test cases are also very important. You can usually see more open source projects source code, Python, I recommend reading Requests source code, commonly used and easy to understand.

4. on-site interview

Because each applicant's project experience are different, can not give a consistent answer. So in this position, I use an algorithm question as an example of how to answer the question.

Ask a question
test cases
think about
elaborate
Pseudo-code
Code
Check
A classic question Two Sum.

Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given an array of integers and a target number, return indices of the two numbers such that they add up to a specific target.
Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
4.1 Asking Questions

It is very important to ask questions at this stage because you need to understand 100% of the topic in order to solve it. Don't feel silly to ask more questions, ask more questions means you are thinking, no questions I will worry about whether the applicant has done this problem before, or simply no ideas.

Is this an ordered array? Answer: No (note that there is a small trap here, although given in the Example is an ordered array, but the actual topic does not say that this is an ordered array, so consider the boundary conditions such as unordered and empty)
Can arrays contain negative numbers? Answer: No
If the array is empty or contains only one number, is there no answer? Answer: Yes
The question then becomes

An unordered array containing only positive integers is required to return two different array index values whose corresponding sum of the array elements is exactly equal to the target number, if the array is empty or contains only one number there is no answer, otherwise there is one and only one answer.
This way some boundary cases can be excluded. Then write test cases

4.2 Test cases

target = 9
# Test cases
[], returns []
[1], returns []
[2, 7], returns [0,1]
[2, 5, 7], returns [0, 2]
[5, 4, 2], returns [0, 1]
Empty, only one element, positive order, reverse order, normal case are written down, the interviewer will give you extra points for considering so many cases.

4.3 Thinking

First think about what data structure will be used, chain table, hash table, heap, stack, binary tree, which structure can solve the problem? If you really have no idea, you can also ask the interviewer to give some hints.

4.4 Explain

Tell the interviewer your thoughts as you think, although your thoughts may be confusing at first. But that's okay. To say their ideas loudly and affirmatively, and at the same time can ask the interviewer questions, so it is much better than looking at the topic for 10 minutes and not say anything. I've interviewed a few candidates who didn't finish the algorithm question successfully, but I was impressed by their ability to keep talking about their thoughts. As I said before, there are some difficult problems, the interviewer does not expect you to get it all right, but just want to know how you think when you encounter a difficult problem, so it is very important to explain your ideas.

4.5 Pseudocode

Return False if the array length is less than 2
Create a hash table
Iterate over each element of the array.
    If the target value minus the element value is in the hash table
        return the index with the current index
    Otherwise add the current index and value to the hash table
You can elaborate or write pseudo-code and analyze the time complexity and space complexity of the solution, which in this case is O(n), where n is the length of the array.

4.6 Code

Python code.

class Solution(object):
    def twoSum(self, nums, target):
        # If the array is less than 2, there is no solution
        if len(nums) <= 1:
            return False
        tem_dict = {}
        for i in range(len(nums)):
            # Check if this element has ever appeared before
            if nums[i] in tem_dict:
                return [tem_dict[nums[i]], i]
            else:
                tem_dict[target - nums[i]] = i
4.7 Checking

I usually use comments, and you can see that I write down the value of the current variable on almost every line when I check it manually, which seems tedious but extremely effective and makes it easy to find problems with the code.

class Solution(object):
    # nums = [2, 7], target = 9
    def twoSum(self, nums, target):
        # len(nums) == 2 > 1
        if len(nums) <= 1:
            return False
        tem_dict = {}
        # for i in range(2)
        for i in range(len(nums)):
            # when i = 0, nums[i] = 2 not in tem_dict
            if nums[i] in tem_dict:
                return [tem_dict[nums[i]], i]
            else:
                # tem_dict[7] = 0
                tem_dict[target - nums[i]] = i
