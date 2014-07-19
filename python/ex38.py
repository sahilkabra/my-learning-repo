# ex 38

tenThings = "Apples Oranges Cows Eggs Milk Sugar"
moreStuff = ["1", "2", "3", "4", "5"]
stuff = tenThings.split(" ")

while len(stuff) != 10:
	newStuff = moreStuff.pop()
	print "Adding %s" % newStuff
	stuff.append(newStuff)
	
print "Now stuff is: ",	stuff

print "stuff[1]: ", stuff[1]
print "stuff[-1]: ", stuff [-1]
print "stuff[0]: ", stuff [0]
print "''.join(stuff)", ' '.join(stuff)
print "stuff.pop(): ", stuff.pop()
print "''.join(stuff): ", ' '.join(stuff)
print "'#'.join(stuff[3:5])", '#'.join(stuff[3:5])
print "stuff[3:5]: ", stuff[3:5]
	