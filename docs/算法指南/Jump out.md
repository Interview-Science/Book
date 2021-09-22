---
sidebar_position: 3
---

# Jump out

When I first came to Leetcode, I often fell into self-doubt while brushing the questions, usually for several reasons: 1) I couldn't think of the optimal solution: I didn't think I could figure out the optimal solution for some simple questions, and I couldn't quite understand it. 2) I couldn't understand the solution: The solutions that were praised the most in the forum often ignored readability in order to pursue the brevity of the code, and it took a lot of time to understand the solution in the early stage of brushing the questions. 3) The gap is too big: there are many live videos of competitions on the Internet, and they can answer four questions in 20 minutes, so I am ashamed of myself.

The self-doubt caused by these reasons not only dampened my enthusiasm and time, but also affected my judgment of my true algorithm level. Now, after brushing some questions, I started to understand some deeper reasons, and I hope this can help you who are confused in brushing questions.

Simple questions are not simple
I guess the difficulty of Leetcode questions is not based on the difficulty of the optimal solution, that is to say, a question marked as simple may have a very intuitive suboptimal solution, but the optimal solution is very difficult to figure out. This was especially fatal for me, who was a novice at first, because after being blown away by the beauty of the optimal solution, I forced myself to understand and prove it, but if I did not succeed within a certain period of time, I fell into deep self-doubt, for example, a few questions.

Maximum subordinate sum (simple)

The official solution gives lightly the partitioning solution as well as the dynamic programming solution. Are these two solutions easy to come up with? Chapter 8 of Programming Pearls discusses this question.

"... In 1977, he presented the problem to Michael Shamos, and Shamos spent an all-nighter designing Algorithm 3 (note: the partitioning solution). Not long afterwards, Shamos presented the problem to me, and we agreed that it was probably the best algorithm available, since researchers had just proved that several similar problems required a time proportional to O(nlogn). A few days later, Shamos presented the problem and its history at a Carnegie Mellon University seminar, only to have Jay Kadane, a statistician in attendance, outline Algorithm 4 (note: the dynamic programming solution) in less than a minute. The good thing is that we know there will be no faster algorithm: any correct algorithm must take at least O(n) time"
Michael Shamos, a mathematician, spent an all-nighter to devise the partitioning solution. And he and computer scientist Jon Bentley didn't come up with an optimal solution for dynamic programming, so why should I ask myself to do so in two hours.

Cyclic chained tables (simple)

The optimal solution uses the Floyd discriminant loop algorithm, and in general, algorithms with human names are not something mere mortals can come up with.

Most elements (simple)

The optimal solution uses the Boyer-Moore voting algorithm, which in its general form was published in a paper, the details of which can be viewed here

Finding the number of repetitions (moderate)

The optimal solution is a fast and slow pointer solution of O(N), which I found incredible when I first saw it and made me look for information about it, and eventually found this paper

"This problem (reportedly) took CS legend Don Knuth twenty-four hours to solve and I have only met one person (Keith Amling) who could solve it in less time than this."
Don Knuth, an algorithmic legend whose books include The Art of Computer Programming, took 24 hours to come up with a solution for the fast and slow pointer.

There are many more examples like this, and I don't mean to make you self-satisfied or satisfied with suboptimal solutions. Rather, I am saying that the optimal solution to certain problems is very difficult to come up with, and it is important to understand these facts so that you can assess your level more accurately and not feel sorry for yourself because it took you an hour to come up with the optimal solution. In addition, if you are influenced by the difficulty label of a question, overestimating or underestimating your true level will not help you in the interview, so I now use the Leetcode invisible plugin that I developed to hide the difficulty of the question. I suggest that Leetcode should be graded according to Google Kickstart, so that a question can be divided into two difficulty labels and two test sets, for example, the maximum suborder and the label of this question is Easy | Hard, which means that the suboptimal solution is easier, but the optimal solution requires some ingenuity to solve.

Practice makes perfect
I have done about 900 questions in Leetcode, and once I am familiar with the pattern of the questions, I can deduce the solution just from the name of the question. For example, "Stone Game" is a minmax strategy, "XXX Subsequence" is dynamic programming, and "XXX Max Min" is a dichotomous or sliding window. But this does not mean that I am a good algorithm, I would never be able to think of a solution from the name of the problem if I were to do it on another platform. Likewise, contestants have the advantage that after doing a lot of problems and participating in a lot of contests, they can quickly find the solution by looking at the name or description of a problem they have done before.

Even the gods get stuck on problems
Lee215 is the user with the highest reputation score in Leetcode US, and he is also the top of the competition. cuiaoxiang is the top of the Leetcode national competition, and he can often answer four questions in 20 minutes. But even if they are good, they can occasionally get stuck, so I recommend this Lee215 first-person commentary video of the competition, which shows cuiaoxiang using a rare 30-minute answer to a medium question. As you can see, there are many things involved in algorithms, and we are all familiar with different fields, so even if I answered that question in 30 minutes, it in no way means that I am better than cuiaoxiang.

Competition is not an interview
William is a very strong contestant, having won several first places in the Leetcode contest, and he has posted a video of 12 hours of solving 120 algorithm problems, which directly made me look dumb. He had a mock interview with a Google engineer and his communication was not much better than others. Likewise, interviewers are not necessarily good at competitions. In a competition, all the constraints are given and you only need to write the code and submit it without explaining your thinking to others. But the interview needs to let the interviewer understand their own ideas and code, and also let the interviewer provide some help, for communication requirements to be higher.

Summary
I often had a breakdown at the beginning of the process. Now I look back, it is really unnecessary, and finally share a sentence to everyone, to encourage.

"If you are not enjoying it, you are doing it wrong."
