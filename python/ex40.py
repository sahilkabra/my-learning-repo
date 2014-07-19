# ex40 Classes

class MyClass(object):
	something = "This is class something"
	def __init__(self):
		self.something = "This is a variable"
	
	def apple(self):
		print "Apple"
	
	def baseApple(self):
		print "Base Apple"
	
class MySubClass(MyClass):
	def __init__(self):
		self.something = "This is my sub class"
	
	def apple(self):
		print "Apple is sub class"

	
object = MySubClass()
object.apple()
MyClass.apple(object)
object.baseApple()

print object.something
del object.something
print object.something

