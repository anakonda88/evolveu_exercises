#6.- A test is the  way to write a code that works properly
#  in all the considered cases. 

#   To begin writing tests in Python:
#   First: Create the stub file, which only contains a "description"
#       of the module without any implementions.

#       * A stub is a routine that doesn't actually do 
#       anything other than declaring itself and the parameters 
#       it accepts and returning something that is usually the values expected 
#       in one of the "happy scenarios" for the caller.
#   
#   Second: Create a method test_ with self.assert statements 
#       to test your function. Ex: self.assertEqual or self.assertTrue

#   If you want only to test your function write the name of the file 
#   followed by the name of the function that you want to run
#   Ex: t_logic.list_of_numbers()

#7.- The pytest framework makes it easy to write small tests, 
#   yet scales to support complex functional testing for applications and libraries.
#   Pytest expects our tests to be located in files 
#   whose names begin with test_ or end with _test.py. 



import unittest
import t_logic

class TestTlogic(unittest.TestCase):                                  

    def test_t_logic(self):
       print(t_logic.t_logic2(5, 2))


    def test_largest_num(self):
        self.assertEqual(5,t_logic.largest_num([1,4,5]))
        self.assertEqual(50,t_logic.largest_num([10,20,50]))
        self.assertEqual(None,t_logic.largest_num([]))
        self.assertEqual(-1000,t_logic.largest_num([-1000,-2000,-4000]))

    def test_some_range(self):
        self. assertEqual([6, 7, 8], t_logic.some_range(5, 9))

    def test_some_range2(self):
        self. assertEqual([6, 7, 8], t_logic.some_range2(5, 9))

    def test_odd_num(self):
        self. assertEqual([5, 7, 9, 11], t_logic.odd_num(5, 12))

    def comp_op(self):
        t_logic.comp_op(3, 8)