import unittest
import foundation

class TestFoundation(unittest.TestCase):  

    def test_foundation(self):
        self.assertEqual(4,foundation.foundation_add(3,1))
        self.assertEqual(5,foundation.foundation_add(-3,1))
        self.assertEqual(4,foundation.foundation_add(3,1))

    def test_foundation(self):
        self.assertEqual('go outside and enjoy the day',foundation.foundation_if(15))
        self.assertEqual('do something else',foundation.foundation_if(28))
        self.assertEqual('do something else',foundation.foundation_if(30))
        self.assertEqual('stay at home, it is too cold',foundation.foundation_if(-4))

    def test_foundation(self):
        self.assertEqual('counting up to 6',foundation.foundation_while(6))
        self.assertEqual('finito',foundation.foundation_while(-55))
        self.assertEqual('finito',foundation.foundation_while(15))
        self.assertEqual('finito',foundation.foundation_while(0))
    
    def test_foundation(self):
        self.assertTrue('come on in', foundation.foundation_while2('home'))
        #self.assertTrue('get out',foundation.foundation_while2('house'))
    
    def test_foundation(self):
        self.assertEqual([6, 7, 8],foundation.foundation_range(5, 9))
        self.assertEqual([],foundation.foundation_range(0, 0))
        self.assertEqual([-8, -7, -6],foundation.foundation_range(-9, -5))
        self.assertEqual([],foundation.foundation_range(-5, -9))

    def test_foundation(self):
        self.assertEqual([16, 18, 20, 22, 24, 26, 28],
                        foundation.foundation_range2(16, 29))
        self.assertEqual([0],foundation.foundation_range2(0, 1))
        self.assertEqual([ ],foundation.foundation_range2(-16, -24))
        self.assertEqual([-20, -18],foundation.foundation_range2(-20, -16))

    def test_foundation(self):
        self.assertEqual('In spanish means, mamá!',foundation.foundation_dict('mom'))
        self.assertEqual('In spanish means, tío!',foundation.foundation_dict('Uncle'))
        self.assertEqual(None,foundation.foundation_dict(None))
        pass

    def test_foundation(self):
        self.assertEqual('dancer',foundation.foundation_long_string(['dancer', 
                                                                     'salsa', 
                                                                     'sweet', 
                                                                     'assets']))
        self.assertEqual(None,foundation.foundation_long_string([]))
        self.assertEqual('dancer',foundation.foundation_long_string(['assets',
                                                                     'dancer', 
                                                                     'salsa', 
                                                                     'sweet'])) 
                                                             