import unittest
import foundation

class TestFoundation(unittest.TestCase):  

    def test_foundation_add(self):
        self.assertEqual(4,foundation.foundation_add(3,1))
        self.assertEqual(None,foundation.foundation_add(-3,1))
        self.assertEqual(0,foundation.foundation_add(0,0))

    def test_foundation_op(self):
        self.assertEqual([5, 1, 6, 1.5, 1, 9, 1],foundation.foundation_op(3, 2))
        self.assertEqual([2, -2, 0, 0.0, 0, 0, 0],foundation.foundation_op(0, 2))
        self.assertEqual([0, -4, -4, -1.0, 0, 4, -1],foundation.foundation_op(-2, 2))
        self.assertEqual([-4, 0, 4, 1.0, 0, 0.25, 1],foundation.foundation_op(-2, -2))

    def test_foundation_if(self):
        self.assertEqual('go outside and enjoy the day',foundation.foundation_if(15))
        self.assertEqual('do something else',foundation.foundation_if(28))
        self.assertEqual('do something else',foundation.foundation_if(30))
        self.assertEqual('stay at home, it is too cold',foundation.foundation_if(-4))

    def test_foundation_while(self):
        self.assertEqual('counting up to 6',foundation.foundation_while(6))
        self.assertEqual('finito',foundation.foundation_while(-55))
        self.assertEqual('finito',foundation.foundation_while(15))
        self.assertEqual('finito',foundation.foundation_while(0))

    def test_foundation_range(self):
        self.assertEqual([6, 7, 8],foundation.foundation_range(5, 9))
        self.assertEqual([],foundation.foundation_range(0, 0))
        self.assertEqual([-8, -7, -6],foundation.foundation_range(-9, -5))
        self.assertEqual([],foundation.foundation_range(-5, -9))

   
    def test_foundation_dict(self):
        self.assertEqual('In spanish means, mamá!',foundation.foundation_dict('mom'))
        self.assertEqual('In spanish means, tío!',foundation.foundation_dict('Uncle'))
        self.assertEqual(None,foundation.foundation_dict(None))

    def test_foundation_longest_string(self):
        self.assertEqual('assets',foundation.foundation_longest_string(['dancer', 
                                                                     'salsa', 
                                                                     'sweet', 
                                                                     'assets']))
        self.assertEqual(None,foundation.foundation_longest_string([]))
        self.assertEqual('dancer',foundation.foundation_longest_string(['assets',
                                                                     'dancer', 
                                                                     'salsa', 
                                                                     'sweet'])) 

    #def test_foundation_while2(self):
        #self.assertEqual('come on in', foundation.foundation_while2())
