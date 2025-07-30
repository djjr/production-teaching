   window.stopThinkQuestions = [
      { "number": -1, "question": "What is problem?", 
        "answer": "Someone forgot to specify qnum parameter in the URL that ran this script!" 
      },
      { "number": 0, "question": "What is the division of labor between the robot's \"brain\" and the coder's? Where are decisions being made?", 
        "answer": "The robot only follows orders/instructions. The coders are doing the thinking and the deciding (if any)." 
      },
      { "number": 1, "question": "What missing information or robot capacity prevents you from being able to complete this task successfully?", 
        "answer": "We don't seem to have any way to recognize when the job is done except for us keeping track of the task in our heads." 
      },
      { "number": 2, "question": "What elements of this work are especially tedious?", 
        "answer": "It is very easy to make a mistake or lose track of where we are in the process." },
      { "number": 3, "question": "Suppose the robot points at each of the cards a in succession. What are the values of FLAG after each compare?", 
        "answer": "1 -1 1 -2 (GT, LT, GT, no next card)" },
      { "number": 4, "question":"Write a sequence of commands that causes the hand to hover successively over each card moving left to right.",
        "answer": "E E E E. But we expect the last command to fail."
      },
      { "number": 5, "question":"Describe what this set of commands does<br><pre>1 E<br>2 C<br>3 IFN2 5<br>4 GOTO 1<br>5 HALT.</pre>",
        "answer": "It moves the hand left to right and then stops on the last card."
      },
      { "number": 6, "question":"Tweak the commands above so that each time they encounter a card that is greater than its neighbor, they slide that larger card up.",
        "answer": "<pre>1 C2 IF1 5<br>3 IFN2 11<br>4 GOTO 9<br>5 D<br>6 N<br>7 U<br>8 S<br>9 E<br>10 GOTO 1<br>11 HALT</pre>"
      },
      { "number": 7, "question":"This gets very confusing very fast, doesn't it? Suppose you can write a short comment on each line after a #. Do this for each line in the code above, explaining what's going on in each line.",
        "answer": "<pre>1 C         # compare card to R neighbor<br>2 IF1 5     # l>r -> goto swap<br>3 IFN2 11   # halt if end of row<br>4 GOTO 9    # skip to move without slide<br>5 D         # SWAP: finger down<br>6 N         # SWAP: slide north<br>7 U         # SWAP: finger up<br>8 S         # SWAP: return to row 1<br>9 E         # move to next card<br>10 GOTO 1   # loop back to beginning<br>11 HALT     # end</pre>"
      },
      { "number": 8, "question":"Write a sequence of instructions that swaps the first two cards if the first card is larger than its neighbor but otherwise it just moves the hand to the next card and does a comparison.",
        "answer": "<pre>1 C        # compare cards<br>2 IF1 4    # if GT<br>3 IFN2 <br>4 E<br>5 GOTO 1   # jump to shift right<br>6 D        # swap<br>7 N        # slide card 1 N<br>8 U<br>9 E        # go to card 2<br>10 S <br>11 D <br>12 W       # slide card 2 W<br>13 U<br>14 N       # go to card 1<br>15 D<br>16 E       # slide card 1 E<br>17 S       # and S<br>18 U<br>19 GOTO 1<br>20 HALT</pre>"
      },
      { "number": 9, "question":"What do these instructions cause the robot to do?<pre>1 C<br>2 IF0 5<br>3 IFN2 21<br>4 GOTO 19<br>5 D<br>6 N<br>7 U<br>8 E<br>9 S<br>10 D<br>11 W<br>12 U<br>13 N<br>14 D<br>15 E<br>16 S<br>17 U<br>18 GOTO 1<br>19 E<br>20 GOTO 1<br>21 HALT</pre>",
        "answer": "These instructions make the hand move left to right and pointlessly swap two cards if they are equal in value."
      },
      { "number": 10, "question":"What are the fundamental differences between the robot in part 1 and the robot in part 2?",
        "answer": "The first robot responds to individual instructions. All of the logic of completing a task is in the mind of the user who presses the buttons. For the second robot we can think of a fixed sequence of commands as a PROGRAM. A really useful feature of a program is that we can \re-use\" steps by looping based on a decision about some condition."
      },
      { "number": 11, "question":"Describe how the sorting process that we've been experimenting with works. How does it accomplish the card sorting?",
        "answer": "We have been scanning the cards left to right and comparing each card with its neighbor. If the first card is bigger we swap the two cards. In effect this moves larger cards to the right until they meet an equal or larger card. At the end of one pass the highest card should be on the left. If we go back to the beginning and repeat the process we sweep the next highest to the last but one position. It gets compared to the last but since the last is highest, no swapping happens."
      },
      { "number": 12, "question": "Can you think of a capability that you would like the robot to have in order to be able to deal with these issues?  How would you describe the conditions under which we can stop sorting?",
        "answer": "Currently we stop scanning to the right when we reach the last card (there is no card to the right so C sets the flag to -2.  If we could count the number of cards and keep track of the number, use it to stop the scanning. Then, after each scan we could reduce this number by 1 and only scan that many cards on the next pass. When this number goes below 2 we have no more comparisons to make and so we can halt."
      },
      { "number": 13, "question": "What temporal (time related) aspects of one's work day does the simple flowchart fail to represent?",
        "answer": "This flow chart does not convey how long any of these activities take, only that one follows another.",
        "tags": []
      },
      {
        "number": 14, "question": "How would you read this flow chart?<br></br><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://docs.google.com/drawings/d/e/2PACX-1vR0sUMogKogdsdQggjfBmn0QruLx4pC6YHsKbWVKebh-g8CIJECVTSVpgbzBK6sqv1n4TAwBNwlT59v/pub?w=960&amp;h=720\">",
        "answer": "First, do action A. Then, if condition B is true, do action C, otherwise do D.&nbsp; And then, in either case, do action E."
      },
      {
        "number": 15, "question": "Consider this flow chart which violates the single entry, single exit rule. How would you redraw it?<br><img src=\"https://docs.google.com/drawings/d/e/2PACX-1vSEL5UwEKOpogaLzIk20z6Dt06cMXvvhCYYuCPs8G-yz7naKC7FZA_humZrWG802Cq2PPtJdGFkuFZ-/pub?w=640&amp;h=480\">",
        "answer": "We will redraw it like this. NOTE: We repeat the action \"Print C\" because it shows up in two different branches of the logic. Now we have single entry/single exit preserved. DO NOT be allergic to repeating an action in a flow chart if it makes the logic clearer.<br><img src=\"https://docs.google.com/drawings/d/e/2PACX-1vS3CgYJc7fAEFp-wYspHkb5qyCTuorTfnt3HQJ25wE1c5UprOCPyPaKBrLLvZyoni3H_Dq3acH98OU6/pub?w=640&amp;h=480\">",
        "tags": []
      },
      {
        "number": 16, "question": "In a few short sentences, explain how the centrifugal governor can keep a steam engine at a constant speed.<br><img src=\"https://innoeduvation.org/313/images/automation/centrifugalGovernor01.gif\">",
        "answer": "The engine is connected to the horizontal axis which turns the gear that turns the vertical rod. If the engine goes fast, the rod spins fast, and the balls rise. As the balls rise the pull up the sleeve. The sleeve going on pulls on the linkage which closes the valve that feeds the steam to the engine, slowing it down. As it slows, the reverse process happens.",
        "tags": []
      },
      {
        "number": 17, "question": "Sketch a sequence of instructions that sets A to 3, sets B to 0, moves east, reduces A by 1, compares A and B, if A is greater, go back to the move east step.",
        "answer": "<pre>1 ASET 3<br>2 BSET 0<br>3 E<br>4 AMIN<br>5 CMEM<br>6 IF1 3</pre>",
        "tags": ["slow","robot"]
      },
      {
        "number": 18, "question": "Can you think of a capability that you would like the robot to have in order to be able to deal with these issues? How would you describe the conditions under which we can stop sorting?",
        "answer": "Currently we stop scanning to the right when we reach the last card (there is no card to the right so C sets the flag to -2. If we could count the number of cards and keep track of the number, use it to stop the scanning. Then, after each scan we could reduce this number by 1 and only scan that many cards on the next pass. When this number goes below 2 we have no more comparisons to make and so we can halt.",
        "tags": ["slow","robot"]
      },
      {
        "number": 19, "question": "What is the division of labor between the robot\'s \"brain\" and the coder\'s? Where are decisions being made?",
        "answer": "The robot only follows orders/instructions. The \"coders\" are doing the thinking and the deciding (if any).",
        "tags": ["slow","robot"]
      },
      {
        "number": 20, "question": "What missing information or robot capacity prevents you from being able to complete this task successfully?",
        "answer": "We don't seem to have any way to recognize when the job is done except for us keeping track of the task in our heads.",
        "tags": ["slow","robot"]
      },
      {
        "number": 21, "question": "What elements of this work are especially tedious?",
        "answer": "It is very easy to make a mistake or lose track of where we are in the process.",
        "tags": ["slow","robot"]
      },
      {
        "number": 22, "question": "Suppose the robot points at each of the cards a in succession. What are the values of FLAG after each compare?",
        "answer": "1 -1 1 -2 (GT, LT, GT, no next card)",
        "tags": ["slow","robot"]
      },
      {
        "number": 23, "question": "Write a sequence of commands that causes the hand to hover successively over each card moving left to right.",
        "answer": "E E E E. But we expect the last command to fail.",
        "tags": []
      },
      {
        "number": 24, "question": "Describe what this sequence of commands does:<br><pre>1 E<br>2 C<br>3 IFN2 5<br>4 GOTO 1<br>5 HALT</pre>",
        "answer": "It moves the hand left to right and then stops on the last card.",
        "tags": []
      },
      {
        "number": 25, "question": "Tweak the commands above so that each time they encounter a card that is greater than its neighbor, they slide that larger card up.",
        "answer": "<br><pre>1 C<br>2 IF1 5<br>3 IFN2 11<br>4 GOTO 9<br>5 D<br>6 N<br>7 U<br>8 S<br>9 E<br>10 GOTO 1<br>11 HALT</pre>",
        "tags": []
      },
      {
        "number": 26, "question": "This gets very confusing very fast, doesn't it? Suppose you can write a short comment on each line after a #. Do this for each line in the code above, explaining what's going on in each line.",
        "answer": "<br><pre>1 C         # compare card to R neighbor<br>2 IF1 5     # l>r -> goto swap<br>3 IFN2 11   # halt if end of row<br>4 GOTO 9    # skip to move without slide<br>5 D         # SWAP: finger down<br>6 N         # SWAP: slide north<br>7 U         # SWAP: finger up<br>8 S         # SWAP: return to row 1<br>9 E         # move to next card<br>10 GOTO 1   # loop back to beginning<br>11 HALT     # end</pre>",
        "tags": []
      },
      {
        "number": 27, "question": "Write a sequence of instructions that swaps the first two cards if the first card is larger than its neighbor but otherwise it just moves the hand to the next card and does a comparison.",
        "answer": "<pre>1 C        # compare cards<br>2 IF1 4    # if GT<br>3 IFN2 <br>4 E<br>5 GOTO 1   # jump to shift right<br>6 D        # swap<br>7 N        # slide card 1 N<br>8 U<br>9 E        # go to card 2<br>10 S <br>11 D <br>12 W       # slide card 2 W<br>13 U<br>14 N       # go to card 1<br>15 D<br>16 E       # slide card 1 E<br>17 S       # and S<br>18 U<br>19 GOTO 1<br>20 HALT</pre>",
        "tags": []
      },
      {
        "number": 28, "question": "<p>CONSIDER the instructions below.</p><pre>1 C<br>2 IF0 5<br>3 IFN2 21<br>4 GOTO 19<br>5 D<br>6 N<br>7 U<br>8 E<br>9 S<br>10 D<br>11 W<br>12 U<br>13 N<br>14 D<br>15 E<br>16 S<br>17 U<br>18 GOTO 1<br>19 E<br>20 GOTO 1<br>21 HALT</pre><p>What do these instructions make the robot do?</p>",
        "answer": "These instructions make the hand move left to right and pointlessly swap two cards if they are equal in value.",
        "tags": []
      },
      {
        "number": 29, "question": "What are the fundamental differences between the robot in part 1 and the robot in part 2?",
        "answer": "The first robot responds to individual instructions. All of the logic of completing a task is in the mind of the user who presses the buttons. For the second robot we can think of a fixed sequence of commands as a PROGRAM. A really useful feature of a program is that we can \"re-use\" steps by looping based on a decision about some condition.",
        "tags": []
      },
      {
        "number": 30, "question": "Describe how the sorting process that we've been experimenting with works. How does it accomplish the card sorting?",
        "answer": "We have been scanning the cards left to right and comparing each card with its neighbor. If the first card is bigger we swap the two cards. In effect this moves larger cards to the right until they meet an equal or larger card. At the end of one pass the highest card should be on the left. If we go back to the beginning and repeat the process we sweep the next highest to the last but one position. It gets compared to the last but since the last is highest, no swapping happens.",
        "tags": []
      },
      {
        "number": 31, "question": "Can you think of a capability that you would like the robot to have in order to be able to deal with these issues? How would you describe the conditions under which we can stop sorting?",
        "answer": "Currently we stop scanning to the right when we reach the last card (there is no card to the right so C sets the flag to -2. If we could count the number of cards and keep track of the number, use it to stop the scanning. Then, after each scan we could reduce this number by 1 and only scan that many cards on the next pass. When this number goes below 2 we have no more comparisons to make and so we can halt.",
        "tags": []
      },
      {
        "number": 32, "question": "Sketch a sequence of instructions that sets A to 3, sets B to 0, moves east, reduces A by 1, compares A and B, if A is greater, go back to the move east step.",
        "answer": "<PRE>1 ASET 3<br>2 BSET 0<br>3 E<br>4 AMIN<br>5 CMEM<br>6 IF1 3</PRE>",
        "tags": []
      },
      {
        "number": 33, "question": "What is the main difference between artificial intelligence (AI) and machine learning (ML), as described <a href=\"https://youtu.be/6mSx_KJxcHI\">in the video</a>?",
        "answer": "AI refers to techniques that enable machines to perform tasks requiring human intelligence, while ML is a subset of AI that uses algorithms to learn from data and make decisions.",
        "tags": []
      },
      {
        "number": 34, "question": "JEOPARDY! Answer: This 1950s figure helped lay the foundation of machine intelligence by proposing a test to determine if a machine could imitate human responses.",
        "answer": "Who is Alan Turing?",
        "tags": ["AI bootcamp","jeopardy"]
      },
      {
        "number": 35, "question": "JEOPARDY! Answer: This term was coined at a 1956 conference at Dartmouth College and marked the official start of a new research field.",
        "answer": "What is artificial intelligence",
        "tags": ["AI bootcamp","jeopardy"]
      },
      {
        "number": 36, "question": "JEOPARDY! Answer: This was the name given to the period in the 1970s when AI funding and enthusiasm dried up due to lack of data, compute power, and overblown promises.",
        "answer": "What is the AI winter?",
        "tags": ["AI bootcamp","jeopardy"]
      },
      {
        "number": 37, "question": "JEOPARDY! Answer: These rule-based systems saw a rise in the 1980s but eventually failed to deliver true intelligence and were outpaced by personal computing.",
        "answer": "What are expert systems?",
        "tags": ["AI bootcamp","jeopardy"]
      },
      {
        "number": 38, "question": "JEOPARDY! Answer: These two technological advancements in the 2000s dramatically increased the volume of data available for training machine learning models.",
        "answer": "What are the internet and smart phones?",
        "tags": ["AI bootcamp","jeopardy"]
      },
      {
        "number": 39, "question": "Why is it hard to write a program to recognize rock, paper, and scissors by hand?",
        "answer": "Because hand shapes vary greatly - skin tone, lighting, finger positions - so writing enough rules to cover all possibilities would take thousands of lines of code.",
        "tags": ["ML Zero to Hero"]
      },
      {
        "number": 40, "question": "What makes machine learning a different approach from traditional programming?",
        "answer": "In ML, instead of writing rules yourself, you give the computer examples and correct answers, and it learns the rules from those patterns.",
        "tags": ["ML Zero to Hero"]
      },
      {
        "number": 41, "question": "In the example Y = 2X - 1, what role does the loss function play?",
        "answer": "The loss function tells the model how wrong its current guess is - it's used to guide improvement by showing how far off the prediction is from the actual value.",
        "tags": ["ML Zero to Hero", "loss function"]
      },
      {
        "number": 42, "question": "Why doesn't the model predict exactly 19 for X = 10?",
        "answer": "Because it was only trained on 6 data points. The model can estimate the pattern, but it doesn't “know” the exact rule, so its prediction is very close but not perfect - this reflects the uncertainty outside the training data.",
        "tags": ["ML Zero to Hero"]
      },
      {
        "number": 43, "question": "What's the purpose of the optimizer during training?",
        "answer": "The optimizer adjusts the model's internal parameters to reduce the error calculated by the loss function, helping the model improve with each training cycle.",
        "tags": ["ML", "ML Zero to Hero", "optimizization"]
      },
      {
        "number": 44, "question": "What does a large language model (LLM) actually do when generating responses in a chatbot interaction?",
        "answer": "A large language model predicts the next word in a sequence of text based on the words that came before it. It doesn't pick just one word deterministically but assigns probabilities to all possible next words and samples from that distribution, allowing for varied outputs even when the same prompt is given multiple times.",
        "tags": ["LLMs explained briefly 3B1B", "LLM","3B1B"]
      },
      {
        "number": 45, "question": "How is a language model trained, and what role does backpropagation play in this process?",
        "answer": "Training involves feeding the model massive amounts of text and adjusting its parameters so that it becomes better at predicting the next word in a sequence. Backpropagation is the algorithm used to adjust these parameters: it compares the model's prediction to the actual next word and tweaks the weights to reduce the error, gradually improving performance across billions or trillions of examples.",
        "tags": ["LLMs explained briefly 3B1B", "LLM","3B1B"]
      },
      {
        "number": 46, "question": "Why are transformers more efficient than earlier models, and what is the role of the \"attention\" mechanism?",
        "answer": "Transformers are more efficient because they process all words in a sequence in parallel rather than one at a time. The attention mechanism allows each word to consider other words in the input simultaneously, refining its representation based on context. This is crucial for capturing the meaning of words that depend on their surroundings (e.g., distinguishing \"bank\" as a financial institution vs. a riverbank).",
        "tags": ["transformers", "LLMs explained briefly 3B1B", "LLM","3B1B"]
      },
      {
        "number": 47, "question": "Without looking back at the reading, try to reconstruct Collins' overall argument in 4-6 bullet points. Imagine you had to explain it to a friend who hasn't read it. How does Collins build the case that rationality depends on non-rational foundations? What are the key ideas and examples he uses along the way?",
        "answer": "Use hints below if needed",
        "tags": ["Collins"]
      },
      {
        "number": 48,
        "question": "What makes an analogy powerful, and when does that power become dangerous? Use examples from the talk to illustrate both sides.",
        "answer": "Analogies are powerful because they simplify complex ideas by drawing connections to familiar concepts. For example, the analogy comparing pigs on meat hooks to cars on an assembly line helped revolutionize manufacturing. However, this same simplifying power can be dangerous when an analogy's emotional appeal masks key differences. The 'three strikes and you're out' policy drew on the fairness of baseball but misled voters by ignoring the complexity of criminal justice, leading to mass incarceration and disproportionate sentencing.",
        "tags": ["analogy", "reasoning", "policy"]
      },
      {
        "number": 49,
        "question": "How do analogies help align understanding between people with different knowledge or perspectives? What role do they play in communication and persuasion?",
        "answer": "Analogies help align understanding by translating unfamiliar or abstract ideas into concrete terms people already understand. In the talk, the speaker convinces a skeptical White House interviewer that building a cork boat and writing a speech are structurally similar—both involve assembling small, inert pieces into a vehicle that takes you somewhere. Likewise, Steve Jobs’ use of the desktop metaphor made computing accessible by leveraging people's familiarity with office tools. These analogies make expert knowledge relatable and help democratize complex systems.",
        "tags": ["analogy", "communication", "alignment"]
      },
      {
        "number": 50,
        "question": "Why should we treat analogies as models rather than truths? What strategies does the speaker suggest for evaluating analogies effectively?",
        "answer": "Analogies, like models, are simplifications—they highlight certain similarities while omitting or distorting others. Because of this, no analogy is ever perfect. The speaker cites the statistician George Box: 'All models are wrong, but some are useful.' He offers three strategies for critical evaluation: 1) notice analogies in daily life, 2) challenge their assumptions and limits, and 3) compare multiple analogies to gain a fuller perspective. This prevents overreliance on a single framing and supports more responsible reasoning.",
        "tags": ["analogy", "critical thinking", "model reasoning"]
      },
      {
        "number": 51,
        "question": "How does analogical reasoning differ from deduction and trial-and-error in strategy making? In what kinds of situations is each type of reasoning most useful?",
        "answer": "Analogical reasoning allows managers to apply lessons from one context to another based on perceived similarity. It's especially useful in novel, complex situations where full data (needed for deduction) is lacking and trial-and-error would be costly or slow. Deduction is strongest in stable, data-rich settings where causal relationships are known. Trial-and-error works best when uncertainty is so high that pre-analysis is unreliable. Analogical reasoning sits in the middle: efficient and insightful, but also prone to misuse.",
        "tags": ["analogy", "strategy", "reasoning"]
      },
      {
        "number": 52,
        "question": "What are the main risks of using analogies in strategic decision-making? Give an example from the article that illustrates one of these risks.",
        "answer": "The main risks are relying on superficial similarities instead of deep causal ones, anchoring too early to a favorite analogy, and confirmation bias (seeking only supporting evidence). Enron’s use of the analogy between energy trading and broadband trading illustrates these dangers. Despite surface similarities (complex markets, rapid change), Enron failed to notice critical differences—like the lack of standard contracts or last-mile delivery issues—which made the analogy fatally flawed.",
        "tags": ["analogy", "strategy", "bias"]
      },
      {
        "number": 53,
        "question": "What four steps do Gavetti and Rivkin propose to help managers avoid superficial analogies? Why is each step important?",
        "answer": "The four steps are: (1) Recognize the analogy and its purpose - being aware you're using an analogy is the first step toward using it wisely; (2) Understand the source — analyzing why the original strategy worked; (3) Assess similarity — checking whether the new context shares the deep causal structure of the old one; and (4) Translate, decide, and adapt — adjusting the analogy for known differences and refining it with market feedback. Each step protects against overgeneralization and misplaced confidence.",
        "tags": ["analogy", "decision making", "strategy"]
      },
      {
        "number": 54,
        "question": "How do the three major branches of ethics—normative, meta-ethics, and applied ethics—map onto the problem of aligning AI systems with human values?",
        "answer": "Normative ethics helps define what AI should aim to do (e.g., utilitarian goals that maximize overall well-being, deontological goals that follow moral rules or duties, or virtue-oriented goals that promote good character traits like honesty or courage). Meta-ethics challenges whether those goals are objectively meaningful or culturally constructed. Applied ethics tackles specific dilemmas like autonomous weapons or algorithmic bias. Each branch offers tools for shaping, critiquing, and operationalizing alignment strategies.",
        "tags": ["ethics", "AI alignment", "meta-ethics"]
      },
      {
        "number": 55,
        "question": "Name and briefly explain the four major branches of ethics.",
        "answer": "Normative ethics concerns what actions are right or wrong and why (e.g., utilitarianism or deontology). Meta-ethics asks what morality itself is—whether it's objective or subjective. Applied ethics applies ethical principles to specific real-world issues, like medical or environmental ethics. Descriptive ethics describes the moral codes in different societies.",
        "tags": ["ethics", "foundations"]
      },
      {
        "number": 56,
        "question": "Ethics often involves resolving conflicts between equally valid principles. What's an example of that?",
        "answer": "One example is medical ethics: a doctor may need to balance patient autonomy (the right to choose) with beneficence (doing what's best for the patient). Another example is free speech versus harm prevention in public discourse.",
        "tags": ["ethics", "conflict"]
      },
      {
        "number": 57,
        "question": "The Wikipedia article mentions moral relativism and moral universalism. Explain how they differ.",
        "answer": "Moral relativism holds that right and wrong depend on cultural or individual beliefs. Moral universalism claims that some ethical principles are valid for all people, regardless of context.",
        "tags": ["ethics", "meta-ethics"]
      },
      {
        "number": 58,
        "question": "Professional ethics often grant experts both special authority and special obligations. Explain with an example.",
        "answer": "Doctors can prescribe medication (special authority), but they're also bound by the obligation to 'do no harm.' Lawyers must zealously represent clients but also uphold the law and avoid deception.",
        "tags": ["professional ethics", "authority"]
      },
      {
        "number": 59,
        "question": "Professions often define themselves through codes of ethics. What might the public be skeptical of that approach?",
        "answer": "People may worry that self-regulated codes are vague, unenforced, or serve professional interests more than public good. They may also distrust whether the profession truly holds its members accountable.",
        "tags": ["professional ethics", "public trust"]
      },
      {
        "number": 60,
        "question": "The article lists key concerns in AI ethics, such as bias, transparency, and accountability. Say briefly what each of these is.",
        "answer": "Bias refers to unfair or discriminatory outputs. Transparency is how understandable the system's workings are. Accountability is about who is responsible for the system’s actions and outcomes.",
        "tags": ["AI ethics", "AI", "ethics"]
      },
      {
        "number": 61,
        "question": "Some AI ethicists argue for human-in-the-loop oversight, while others emphasize formal constraints or values built into systems. What do these terms mean?",
        "answer": "Human-in-the-loop means people stay involved in decision-making, especially in high-stakes cases. Formal constraints are hardcoded rules or limits. Value alignment means designing the system to reflect human values directly.",
        "tags": ["AI ethics", "oversight", "alignment"]
      },
      {
        "number": 62,
        "question": "Ethics often involves resolving conflicts between equally valid principles (e.g., freedom vs. safety). How might such ethical dilemmas show up in the design of professional codes or AI systems?",
        "answer": "Professionals like doctors or engineers face tensions between honesty and beneficence, or confidentiality and public safety. Similarly, AI systems may have to balance privacy with transparency, or fairness with efficiency. Recognizing these as ethical dilemmas (not bugs) helps designers foreground values in decision-making rather than hide them in optimization criteria.",
        "tags": ["ethics", "professional ethics", "AI"]
      },
      {
        "number": 63,
        "question": "The Wikipedia article mentions moral relativism and moral universalism. Why might this distinction matter for aligning diverse human communities—or machines trained on their data?",
        "answer": "If ethics is relative, then alignment means accommodating plural moral systems. If ethics is universal, then alignment should target shared foundational principles. AI trained on global data may absorb conflicting norms. Strategists must decide whether to harmonize, prioritize, or localize these norms—and on what grounds.",
        "tags": ["ethics", "relativism", "AI", "alignment"]
      },

      {
        "number": 64,
        "question": "Professional ethics often grant experts both special authority and special obligations. Why might this dual structure be important for aligning expert intelligence with the public good?",
        "answer": "Experts are trusted to act in domains where laypeople lack knowledge, but this asymmetry creates risks. Professional codes (like 'do no harm' or fiduciary duty) serve as alignment technologies—they create constraints that make expert power acceptable and beneficial. The authority to act is balanced by moral and institutional safeguards.",
        "tags": ["professional ethics", "expert alignment", "trust"]
      },
      {
        "number": 65,
        "question": "Professions often define themselves through codes of ethics. What alignment problems might arise if these codes are vague, unenforced, or in conflict with institutional incentives?",
        "answer": "If codes are vague, professionals may self-justify harmful actions. If unenforced, bad actors may go unchecked, undermining trust. If misaligned with real incentives (e.g. billing targets for doctors), even well-intentioned professionals may act unethically. These failures resemble reward hacking in AI: the agent optimizes the wrong thing.",
        "tags": ["professional ethics", "experts", "alignment", "incentives"]
      },
      {
        "number": 66,
        "question": "The article lists key concerns in AI ethics, such as bias, transparency, and accountability. Which of these concern alignment failures, and which concern the limits of our ability to assess alignment?",
        "answer": "Bias and fairness are direct alignment failures—systems produce outputs that violate social or moral expectations. Transparency and accountability concern how we assess alignment: without legibility or recourse, we can't know whether the system is aligned or intervene when it isn’t. Both are essential to trustworthy AI.",
        "tags": ["AI", "ethics", "alignment", "transparency"]
      },
      {
        "number": 67,
        "question": "Some AI ethicists argue for human-in-the-loop oversight, while others emphasize formal constraints or values built into systems. What are the trade-offs between these approaches as alignment strategies?",
        "answer": "Human oversight can add context and moral judgment, but may be too slow or inconsistent. Formal constraints (like hardcoded rules or optimization limits) are scalable but risk being brittle or misaligned with intent. Ideally, the two work in tandem: rules prevent disasters, humans handle ambiguity.",
        "tags": ["AI", "ethics", "alignment strategies", "governance"]
      },
      {
        "number": 68,
        "question": "According to Perrow, why is bureaucracy often misunderstood or unfairly blamed for organizational failures?",
        "answer": "Perrow argues that bureaucracy is frequently scapegoated for failures that actually stem from political or managerial decisions. Rather than being inherently dysfunctional, bureaucracy provides necessary structure and predictability for complex organizations.",
        "tags": ["Perrow", "bureaucracy", "organizations"]
      },
      {
        "number": 69,
        "question": "How does Perrow's understanding of bureaucracy relate to the problem of aligning individual behavior with collective goals?",
        "answer": "Perrow sees bureaucracy as a mechanism that aligns individual behavior through rules, hierarchy, and formal roles, making it possible for large organizations to function coherently and predictably.",
        "tags": ["Perrow", "alignment", "bureaucracy", "individual behavior", "collective goals"]
      },
      {
        "number": 70,
        "question": "What are the key risks or dysfunctions of bureaucracy that Perrow highlights, and how do they represent alignment failures?",
        "answer": "Perrow highlights issues like rigidity, goal displacement, and overemphasis on rules. These occur when formal mechanisms meant to ensure alignment instead inhibit responsiveness or shift focus away from true organizational goals.",
        "tags": ["Perrow", "alignment", "bureaucracy", "goal displacement"]
      },
      {
        "number": 71,
        "question": "Why does Perrow argue that some form of bureaucracy is unavoidable in complex organizations, despite its flaws?",
        "answer": "He contends that complexity and scale necessitate formal structures for coordination and accountability. Alternatives like markets or networks often rely on the same underlying principles or fail to provide comparable alignment mechanisms.",
        "tags": ["Perrow", "bureaucracy", "organizations", "alignment"]
      },
      {
        "number": 72,
        "question": "Why is trust considered a potential alternative to detailed contracts and constant monitoring in principal-agent relationships?",
        "answer": "Because trust can reduce transaction costs and make cooperation smoother. When agents are trusted, principals can rely on informal norms and mutual expectations instead of costly surveillance or rigid rules.",
        "tags": ["principal-agent", "trust", "organizations"]
      },
      {
        "number": 73,
        "question": "How do organizations try to manage principal-agent problems when trust is limited or uncertain?",
        "answer": "They use mechanisms like performance incentives, monitoring systems, and formal contracts to align the agent’s interests with the principal’s goals, attempting to substitute for or reinforce trust.",
        "tags": ["principal-agent", "incentives", "monitoring", "trust"]
      },
      {
        "number": 74,
        "question": "What is the basic setup of the public goods game described by Fehr and Gintis, and why does it present a dilemma for cooperation?",
        "answer": "Each participant receives an endowment and can contribute any portion to a group project. Contributions are multiplied and redistributed equally. The dilemma arises because individuals can benefit most by keeping their own endowment while still reaping the benefits of others' contributions—this creates a temptation to free-ride.",
        "tags": ["Fehr & Gintis", "public goods", "cooperation", "game theory"]
      },
      {
        "number": 75,
        "question": "How do punishment options change the behavior of participants in the public goods game?",
        "answer": "When participants are given the option to punish others after seeing their contribution decisions, cooperation increases significantly. Even though punishing is costly, many choose to do so to penalize free riders, thus stabilizing cooperative behavior.",
        "tags": ["Fehr & Gintis", "punishment", "norms", "incentives"]
      },
      {
        "number": 76,
        "question": "Why do Fehr and Gintis argue that human cooperation cannot be fully explained by self-interest alone?",
        "answer": "They show that many individuals willingly incur personal costs to punish norm violators, indicating a preference for fairness and norm enforcement rather than mere self-interest. This behavior suggests the presence of strong reciprocity or prosocial preferences.",
        "tags": ["Fehr & Gintis", "reciprocity", "human nature", "norms"]
      },
      {
        "number": 77,
        "question": "What implications do the experimental findings have for real-world institutions and mechanisms of social order?",
        "answer": "The findings imply that effective social order may depend on individuals' willingness to enforce norms, even at a personal cost. Institutions that enable or formalize this kind of decentralized enforcement—like legal systems or peer monitoring—may help sustain cooperation in larger groups.",
        "tags": ["Fehr & Gintis", "institutions", "social order", "cooperation"]
      },
      {
        "number": 78,
        "question": "According to Engels, why did the state emerge historically, and what problem was it meant to solve?",
        "answer": "The state emerged as a response to internal social contradictions—specifically, the rise of private property and class conflict. It was meant to manage these irreconcilable interests and preserve order when kin-based systems of cooperation could no longer do so.",
        "tags": ["Engels", "state", "social order"]
      },
      {
        "number": 79,
        "question": "How does Engels explain the persistence of the state even in the face of popular discontent or inequality?",
        "answer": "Engels argues that the ruling class maintains the state by granting subordinate groups limited rights and protections, which defuses unrest and creates the illusion of fairness, even as the underlying structure of domination remains intact.",
        "tags": ["Engels", "state"]
      },
      {
        "number": 80,
        "question": "How does Engels' account challenge the common liberal idea of the state as a neutral and benevolent force?",
        "answer": "Engels sees the state not as neutral but as an instrument of class domination. Rather than emerging to serve the common good, the state exists to manage class conflict and protect the interests of the powerful by standing 'above' society.",
        "tags": ["Engels", "state"]
      },
      {
        "number": 81,
        "question": "What role does the shift from kinship to territory play in Engels’ theory of social control?",
        "answer": "The shift marks a move from shared identity and obligations to impersonal rule, enabling the development of centralized authority that can exert control over people regardless of their social ties. It reflects the breakdown of organic order and the rise of state coercion.",
        "tags": ["Engels", "state", "social control"]
      },
      {
        "number": 82,
        "question": "How does Engels' theory of the state relate to the alignment problem in AI and organizations?",
        "answer": "Engels' account shows that alignment mechanisms like the state emerge when shared values no longer suffice to maintain cooperation. In both AI and organizations, when agents' goals diverge, alignment often shifts from trust-based to coercive strategies.",
        "tags": ["Engels", "alignment", "AI", "organization"]
      },
      {
        "number": 83,
        "question": "What does Engels' analysis reveal about the relationship between alignment and power?",
        "answer": "Engels highlights that alignment is never neutral: it reflects the goals of those in power. Control systems like the state often enforce alignment *to* a dominant class's interests, not to a shared or collective good.",
        "tags": ["Engels", "alignment", "power", "hierarchy"]
      },
      {
        "number": 84,
        "question": "What are the two types of order?",
        "answer": "A 'made' order (taxis) is deliberately designed and organized to achieve a specific purpose, while a 'grown' order (kosmos) arises spontaneously from the interactions of many individuals following rules, without centralized direction or foresight.",
        "tags": ["Hayek", "taxis", "cosmos"]
      },
      {
        "number": 85,
        "question": "Why does Hayek argue that complex social order cannot be centrally designed?",
        "answer": "Because the knowledge needed to coordinate complex social systems is dispersed among individuals and cannot be fully known or processed by any single mind. Only a spontaneous order can utilize this dispersed knowledge effectively.",
        "tags": ["Hayek","planning"]
      },
      {
        "number": 86,
        "question": "How does Hayek explain that rules can guide behavior even if individuals are not consciously aware of them?",
        "answer": "Hayek notes that individuals often follow rules they cannot articulate; these rules emerge through cultural evolution and habitual behavior, and structure society even without explicit formulation.",
        "tags": ["Hayek", "rules",]
      },
      {
        "number": 87,
        "question": "In what way does government differ from other organizations within society, according to Hayek?",
        "answer": "While government is an organization like others, it plays a unique role in maintaining the rules that support the spontaneous order of society—akin to a maintenance crew ensuring a system functions properly.",
        "tags": ["Hayek","spontaneous order"]
      },
      {
        "number": 88,
        "question": "Why does Hayek caution against supplementing spontaneous order with specific commands or interventions?",
        "answer": "Such commands interfere with the decentralized coordination process by imposing decisions based on limited knowledge, thereby disrupting the adaptive balance that spontaneous orders rely on.",
        "tags": ["Hayek","market"]
      },
      {
        "number": 89,
        "question": "What misunderstanding leads some reformers to believe spontaneous orders are chaotic?",
        "answer": "Many cannot conceive of order without central design, so they interpret decentralized systems like markets as chaotic simply because the order they produce is abstract and not immediately visible.",
        "tags": ["Hayek", "market"]
      },

      {
        "number": 90,
        "question": "According to the updated interpretation of Hayek, how do spontaneous orders achieve alignment without central control?",
        "answer": "Spontaneous orders achieve alignment through shared rules of conduct that guide individual actions based on local knowledge. These decentralized behaviors collectively produce global coherence, even though no single actor controls the whole system.",
        "tags": ["Hayek", "alignment"]
      },
      {
        "number": 91,
        "question": "What design principle from Hayek's theory is especially relevant to AI and machine alignment today?",
        "answer": "Hayek's idea that complex behavior should be guided by abstract rules rather than direct commands parallels the way AI systems are trained through reward structures and incentives. It highlights the importance of designing the conditions for learning rather than specifying every behavior directly.",
        "tags": ["Hayek", "AI alignment"]
      },

      {
        "number": 92,
        "question": "What is Friedrich A. Hayek's most famous book? When did he live?",
        "answer": "The Road to Serfdom (1940-43). Hayek lived from 1899 to 1992.",
        "tags": ["Hayek"]
      },
      {
        "number": 93,
        "question": "What is Hayek's preliminary definition of order?",
        "answer": "A state of affairs in which a multiplicity of elements are so related that we may form correct expectations about the rest based on knowledge of a part.",
        "tags": ["Hayek"]
      },
      {
        "number": 94,
        "question": "Explain the contrast between exogenously produced order and endogenously produced order.",
        "answer": "Exogenous order is created by forces outside the system; endogenous order is equilibrium that emerges from within.",
        "tags": ["Hayek"]
      },
      {
        "number": 95,
        "question": "What other fields study 'spontaneous order'?",
        "answer": "Fields such as economics, biology, thermodynamics, chaos theory, non-linear dynamics, and emergence study spontaneous order.",
        "tags": ["Hayek"]
      },
      {
        "number": 96,
        "question": "Arrange the terms under the headings taxis and cosmos: made, grown,endogenous, exogenous, directed, emergent, decentralized, centralized, an organization, spontaneous order.",
        "answer": "Taxis: made, exogenous, directed, centralized, (an) organization. Cosmos: grown, endogenous, emergent, decentralized, spontaneous order.",
        "tags": ["Hayek", "cosmos", "taxis"]
      },
      {
        "number": 97,
        "question": "What is the relationship between spontaneous orders and 'purpose'?",
        "answer": "Purpose, in the sense of intention, is absent from spontaneous order. It is not someone's plan or idea.",
        "tags": ["Hayek",]
      },

      {
        "number": 98,
        "question": "How can individual preferences that seem tolerant lead to extreme segregation in Schelling’s model?",
        "answer": "Even when individuals only prefer a small proportion of similar neighbors (e.g., one-third), the cumulative effect of many such preferences causes chain reactions of movement. These micro-motives compound into a macro-level pattern of high segregation, even if no one desires that outcome.",
        "tags": ["Schelling", "segregation"]
      },
      {
        "number": 99,
        "question": "Why does Schelling use a checkerboard model to explore segregation, and what does it reveal?",
        "answer": "The checkerboard model simplifies the city into a grid of agents with local preferences. By moving when unhappy, agents demonstrate how simple decision rules, repeated over time, can generate large-scale segregation. It reveals how individual actions under local constraints can produce unintended collective outcomes.",
        "tags": ["Schelling", "segregation"]
      },
      {
        "number": 100,
        "question": "What does Schelling mean by a tipping point in neighborhood composition?",
        "answer": "A tipping point occurs when a small demographic change triggers further departures, accelerating segregation. Once the threshold of dissimilarity is crossed for enough residents, even those previously content may leave, causing cascading effects that drastically change the neighborhood’s composition.",
        "tags": ["Schelling", "segregation", "tipping point"]
      },
      {
        "number": 101,
        "question": "What does Marx mean when he says his premises \"can only be verified in a purely empirical way\"?",
        "answer": "He means that his theory begins from observable facts about real people—their activities and material conditions—not abstract ideas. These starting points can be confirmed through direct observation and experience. This is what we mean when we say Marx's ideas are \"materialist\" (as opposed to \"idealist\").",
        "tags": ["Marx", "materialism", "empiricism"]
      },
      {
        "number": 102,
        "question": "According to Marx, how is a person's identity shaped by their production?",
        "answer": "Marx argues that people's identities are shaped by both what they produce and how they produce it. Their mode of life—their work and interactions with material conditions—forms the basis of who they are.",
        "tags": ["Marx", "production", "identity"]
      },
      {
        "number": 103,
        "question": "Why does Marx insist on avoiding 'mystification and speculation' when studying social and political structures?",
        "answer": "Because Marx believes that social structures emerge from real human activity and material conditions—not from abstract ideas. Therefore, they must be studied through empirical observation, not speculative theory.",
        "tags": ["Marx", "ideology", "materialist method"]
      },
      {
        "number": 104,
        "question": "What does Marx mean when he compares ideology to a 'camera obscura'?",
        "answer": "He means that ideology inverts reality: people think that ideas shape life, but in fact, material life shapes ideas. Just as a camera obscura flips an image upside down, ideology distorts our understanding of real conditions.",
        "tags": ["Marx", "ideology", "metaphor"]
      },
      {
        "number": 105,
        "question": "According to Marx, what happens to philosophy when we begin from real life instead of abstract thought?",
        "answer": "Philosophy loses its independent role as a source of truth. When we study history through the material activity of real people, abstract speculation becomes irrelevant, and only empirical, practical analysis remains useful.",
        "tags": ["Marx", "philosophy", "real life"]
      },
      {
          "number": 106,
          "question": "How important is the kind of work compared to the kinds of interaction among people who do the same kind of work for Marx? Think about Uber drivers and fast food workers. Would Marx expect a different kind of shared consciousness?",
          "answer": "Marx argues that both the type of work and the social relations it creates shape consciousness. While the kind of work matters, he emphasizes how people interact in that work context. For example, fast food workers often work in a shared, physical space, which may foster shared experiences and solidarity. Uber drivers, by contrast, are more isolated and may find it harder to form a collective consciousness. Marx would likely expect different forms or levels of shared meaning to arise in each case.",
          "tags": ["Marx", "consciousness", "labor", "social interaction"]
        },
        {
          "number": 107,
          "question": "Explain what Marx means by 'It is not consciousness that determines life, but life that determines consciousness' (47.7).",
          "answer": "Marx means that the material conditions of life—how people work, interact, and meet their needs—shape what people think, believe, and value. Ideas are not the starting point; they emerge from lived, practical experience. Consciousness is a reflection of life, not the other way around.",
          "tags": ["Marx", "consciousness", "materialism", "determinism"]
        },
        {
          "number": 108,
          "question": "Demonstrate your understanding of the Karl Marx excerpt and its connection to ideas about how the nature of the social individual is a 'source' of social order by explaining this diagram. Use examples to illustrate your ideas.<br><img src=\"https://innoeduvation.org/danryan/images/qbank/sharedmeaningToOrderMarx.png\">",
          "answer": "Marx grounds everything in the material conditions of life. In this context, people working together develop common ways of thinking and relating to the world. Social relations shape shared consciousness or ideology. That's what we \"use\" to coordinate and cooperate.  Marx's point is that social order comes not from ideas imposed from above, but from the patterns of life and production shared by individuals. For instance, working together in a factory structures both how people work and how they understand their roles, rights, and relations to others.",
          "tags": ["Marx", "social order", "shared meaning", "diagram"]
        },
      {
        "number": 109,
        "question": "Thinkers like Marx, Durkheim, and Mead who suggest that shared meaning can be a source of alignment and social order all claim that the shared meaning \"happens\" through actual social interaction. Explain why the picture below is NOT how it happens<br><img src=\"https://innoeduvation.org/danryan/images/qbank/shared-meaning-painted-by-culture.png\"",
        "answer": "We don't just magically have a bunch of social/cultural content in our heads; it gets there through a process, it is learned through socialization and interaction.",
        "tags":["shared meaning","culture"]
      },
      {
        "number": 109,
        "question": "<img src=\"https://innoeduvation.org/danryan/images/qbank/sharedmeaningToOrderDurkheim.png\"",
        "answer": "",
        "tags":["shared meaning", "Durkheim"]
      },
      {
        "number": 109,
        "question": "<img src=\"https://innoeduvation.org/danryan/images/qbank/sharedmeaningToOrderMead.png\"",
        "answer": "",
        "tags":["shared meaning", "Mead"]
      },
      {
        "number": 110, "question": "According to Mead, what are the two stages in the development of the self, and how do they differ in terms of social experience?",
        "answer": "In the first stage, the self develops by organizing the attitudes of specific others (e.g., parents, playmates) during individual social acts—this is seen in play.\n\nIn the second stage, the self incorporates the attitudes of the generalized other, or the larger social group, which emerges through games where roles are organized and coordinated toward shared goals.",
        "tags": ["shared meaning", "Mead"]
      },
      {
        "number": 111, "question": "What is the role of the \"generalized other\" in the formation of the self, and how does it influence behavior and thinking?",
        "answer": "The generalized other represents the organized attitudes of the wider community or social group.\n\nTaking its perspective allows individuals to regulate their behavior, develop a sense of morality, and think through shared symbols and meanings—it enables self-consciousness and participation in organized social life.",
        "tags": ["shared meaning", "Mead"]
      },
      {
        "number": 112, "question": "Mead describes the game as requiring a child to coordinate multiple social roles toward a common goal. How might this process be analogous to how humans align with one another in complex institutions like governments, companies, or hospitals?",
        "answer": "In institutions, individuals take on specialized roles, but must also understand and anticipate the roles of others to act cohesively—just like in a game.\n\nAlignment comes from everyone orienting themselves toward shared rules, goals, and expectations, enabling complex cooperation and functional identity within the institution.",
        "tags": ["shared meaning", "Mead"]
      },
      {
        "number": 113, "question": "If we think about artificial intelligence as needing to \"take the role of the other\" to align with human values, how might Mead's idea of the “generalized other” help us imagine ways to structure that alignment?",
        "answer": "AI systems could be designed to model or simulate the perspectives of diverse human groups -- the “generalized other”—to predict social responses and make aligned decisions.\n\nThis suggests that alignment might require AI to internalize social norms, not just individual preferences, and behave as if it were part of a human community with shared meanings.",
        "tags": ["shared meaning", "Mead"]
      },

      {
        "number": 114,
        "question": "What does Russell mean by 'maximize a utility function'?",
        "answer": "He means making decisions that are expected to produce the greatest overall benefit or satisfaction, based on some measure of value. In AI, this involves choosing actions that lead to the highest expected outcome over time, according to whatever goals or preferences have been encoded.",
        "tags": ["Stuart Russell", "alignment"]
      },
      {
        "number": 115,
        "question": "What do we think 'inverse reinforcement learning' is based on this talk?",
        "answer": "It's a way for machines to figure out what people value by observing their behavior. Instead of being told directly what to optimize, the machine watches what people do (like making coffee) and tries to infer the underlying goals or preferences that explain those actions.",
        "tags": ["Stuart Russell", "alignment", "inverse reinforcement learning"]
      },
      {
        "number": 116,
        "question": "What's the point of the Leo Szilard example that Russell mentions?",
        "answer": "Russell uses it to show that even experts can be wrong about what’s possible, and that big breakthroughs can happen suddenly. He’s warning that we shouldn’t dismiss the idea of superintelligent AI just because it seems far off or unlikely.",
        "tags": ["Stuart Russell", "alignment"]
      },
      {
        "number": 117,
        "question": "What does Russell think people misunderstand about 'value alignment'?",
        "answer": "He thinks people mistakenly believe that AI should adopt or internalize human values like a person might — for example, 'becoming' a vegetarian in a vegetarian household. But instead, the goal is for the AI to learn and adapt to human preferences without having its own fixed values, and to remain uncertain enough about those preferences that it defers to humans — especially when they intervene or try to switch it off.",
        "tags": ["Stuart Russell", "alignment"]
      },

      {
        "number": 117,
        "question": "According to Brian Christian, what is 'the alignment problem' in machine learning?",
        "answer": "It's the challenge of ensuring that machine learning systems — which learn from examples rather than explicit rules — actually do what we want them to do, especially when deployed in real-world settings where goals and values are complex and hard to define.",
        "tags": ["Brian Christian", "alignment"]
      },
      {
        "number": 118,
        "question": "How does Christian expand or update Stuart Russell's version of the alignment problem?",
        "answer": "While Russell focused on aligning powerful future AI with human values, Christian expands the problem to include current machine learning systems — emphasizing that problems already arise from biased training data and badly defined objective functions, even without superintelligence.",
        "tags": ["Brian Christian", "alignment"]
      },
      {
        "number": 119,
        "question": "What's the issue with defining a simple numerical reward for a learning system?",
        "answer": "If the reward function is too simple or poorly designed, the system can exploit it in unintended ways — doing what it was rewarded for rather than what we actually wanted. This misalignment can lead to outcomes that are silly, harmful, or dangerous.",
        "tags": ["Brian Christian", "alignment"]
      },
      {
        "number": 120,
        "question": "What does the backflip example show about one possible solution to the alignment problem?",
        "answer": "It shows that instead of manually defining a goal (like 'do a backflip'), we can let a system learn the goal from human preferences — even from vague judgments like 'this looks better.' This kind of reward modeling might help systems align more closely with what we actually want.",
        "tags": ["Brian Christian", "alignment"]
      },
  {
    "number": 121,
    "question": "How does consequentialism differ from deontology?",
    "answer": "Read the article...",
    "tags": ["ethics", "theories"]
  },
  {
    "number": 122,
    "question": "What is the categorical imperative?",
    "answer": "TRead the article...",
    "tags": ["ethics", "Kant", "deontology"]
  },
  {
    "number": 123,
    "question": "What's the difference between relativism and universalism?",
    "answer": "Read the article...",
    "tags": ["ethics", "metaethics"]
  },
  {
    "number": 124,
    "question": "What determines whether something is right in utilitarianism?",
    "answer": "Read the article...",
    "tags": ["ethics", "utilitarianism"]
  },
  {
    "number": 125,
    "question": "How does consequentialism differ from deontology?",
    "answer": "Consequentialism judges actions by their outcomes—what matters is producing the best result. Deontology focuses on duties and rules—some actions are right or wrong regardless of consequences.",
    "tags": ["ethics", "theories"]
  },
  {
    "number": 126,
    "question": "What is the categorical imperative?",
    "answer": "The categorical imperative is Kant's principle that we should act only according to maxims we can will to become universal laws—rules that everyone could follow.",
    "tags": ["ethics", "Kant", "deontology"]
  },
  {
    "number": 127,
    "question": "What's the difference between relativism and universalism?",
    "answer": "Relativism holds that moral truth depends on cultural or individual perspectives. Universalism claims that some moral principles apply to everyone, everywhere.",
    "tags": ["ethics", "metaethics"]
  },
  {
    "number": 128,
    "question": "What determines whether something is right in utilitarianism?",
    "answer": "In utilitarianism, an action is right if it maximizes overall happiness or minimizes suffering for the greatest number of people.",
    "tags": ["ethics", "utilitarianism"]
  },
  {
    "number": 129,
    "question": "What's distinct about professional ethics?",
    "answer": "Read the article.",
    "tags": ["ethics", "professional"]
  },
  {
    "number": 130,
    "question": "What's distinct about professional ethics?",
    "answer": "Professional ethics involves standards and duties specific to a role or occupation, like medical confidentiality or legal advocacy—often requiring higher obligations than general morality.",
    "tags": ["ethics", "professional"]
  },
  {
    "number": 131,
    "question": "What is algorithmic bias?",
    "answer": "Read the article.",
    "tags": ["ethics", "AI", "bias"]
  },
  {
    "number": 132,
    "question": "What does alignment mean in the context of AI?",
    "answer": "Read the article.",
    "tags": ["ethics", "AI", "alignment"]
  },
  {
    "number": 133,
    "question": "What is beneficence?",
    "answer": "Read the article.",
    "tags": ["ethics", "principles"]
  },
  {
    "number": 134,
    "question": "What is non-maleficence?",
    "answer": "Read the article.",
    "tags": ["ethics", "principles"]
  },
  {
    "number": 135,
    "question": "What is explicability in AI ethics?",
    "answer": "Read the article.",
    "tags": ["ethics", "AI", "principles"]
  },
  {
    "number": 136,
    "question": "What is algorithmic bias?",
    "answer": "Algorithmic bias occurs when a system systematically produces unfair outcomes, often by reflecting or amplifying existing human or data-driven biases.",
    "tags": ["ethics", "AI", "bias"]
  },
  {
    "number": 137,
    "question": "What does alignment mean in the context of AI?",
    "answer": "Alignment refers to ensuring that an AI system’s goals and behavior match human intentions, values, or interests—especially in uncertain or high-stakes settings.",
    "tags": ["ethics", "AI", "alignment"]
  },
  {
    "number": 138,
    "question": "What is beneficence?",
    "answer": "Beneficence is the ethical principle of doing good—promoting well-being, helping others, and acting for the benefit of those affected.",
    "tags": ["ethics", "principles"]
  },
  {
    "number": 139,
    "question": "What is non-maleficence?",
    "answer": "Non-maleficence means 'do no harm'—an ethical principle that prioritizes avoiding actions that cause unnecessary harm or suffering.",
    "tags": ["ethics", "principles"]
  },
  {
    "number": 140,
    "question": "What is explicability in AI ethics?",
    "answer": "Explicability is the principle that AI decisions should be understandable and traceable—so people can know how and why a system made a decision.",
    "tags": ["ethics", "AI", "principles"]
  },
  {
    "number": 141,
    "question": "Explain what Christian means by \"Rewarding A while hoping for B\" is a core alignment failure.",
    "answer": "Christian recounts Dario Amodei's reinforcement learning experiment in which an AI agent learned to rack up points by spinning in circles rather than winning a boat race. This perfectly illustrates a central alignment problem: when proxies (like score) are mistaken for goals (like winning), systems optimize the wrong things—efficiently and disastrously.",
    "tags": ["The Alignment Problem"]
  },
  {
    "number": 142,
    "question": "Explain what Christian means when he describes how bias is embedded and amplified in machine learning systems like word2vec.",
    "answer": "Word2vec, trained on massive text corpora, learned gender stereotypes—returning \"nurse\" for doctor - man + woman. This shows how models absorb human biases from data and propagate them in ways that can invisibly shape decision-making in real applications.",
    "tags": ["The Alignment Problem"]
  },
  {
    "number": 143,
    "question": "What example does Christian use to make the point that opaque risk assessment algorithms can have real-world harms?",
    "answer": "Christian discusses COMPAS, a proprietary criminal risk scoring system used in the U.S. legal system. The system's scores—used to make decisions about bail and parole—were found to be racially biased, yet were unexplainable due to their closed-source nature.",
    "tags": ["The Alignment Problem"]
  },
  {
    "number": 144,
    "question": "Explain what Christian is saying when he suggests that the alignment problem is not just technical—it's moral and societal.",
    "answer": "The deployment of machine learning systems in areas like criminal justice, hiring, and healthcare forces us to confront what we actually mean by fairness, justice, and human values—and how we encode these into algorithms that are taking on increasingly consequential decisions.",
    "tags": ["The Alignment Problem"]
  },
  {
    "number": 145,
    "question": "Christian claims: Alignment spans both present-day challenges and future existential risks. Explain.",
    "answer": "Christian distinguishes between two communities of concern: one focused on current harms from biased or opaque systems, and another focused on the long-term risks of powerful, misaligned AI. Both are united by the problem of making systems “do what we want”—even when that is hard to define",
    "tags": ["The Alignment Problem"]
  },
      {
        "number": 202, "question": "",
        "answer": "",
        "tags": []
      },
      {
        "number": 204, "question": "",
        "answer": "",
        "tags": []
      }
    ];