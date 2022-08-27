import getpass, sys

def question_and_answer(prompt):
    print("Question: " + prompt)
    msg = input()
    print("Answer: " + msg)
    
def question_with_response(prompt):
    print("Question: " + prompt)
    msg = input()
    return msg

questions = 3
correct = 0

print('Hello, ' + getpass.getuser() + " running " + sys.executable)
print("You will be asked " + str(questions) + " questions.")
question_and_answer("Are you ready to take the soccer quiz?")

rsp = question_with_response("How many players can play on the field in a soccer game for 1 team?")
if rsp == "11":
    print(rsp + " is correct!")
    correct += 1
else:
    print(rsp + " is incorrect!")

rsp = question_with_response("If you play in the premier league what place to you have to get to the champions league?")
if rsp == "Top 4":
    print(rsp + " is correct!")
    correct += 1
else:
    print(rsp + " is incorrect!")

rsp = question_with_response("What is the highest division of US mens soccer called?")
if rsp == "MLS":
    print(rsp + " is correct!")
    correct += 1
else:
    print(rsp + " is incorrect!")

print(getpass.getuser() + " you scored " + str(correct) +"/" + str(questions))