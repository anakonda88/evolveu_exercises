import unittest
import practice_01_102018

class TestPractice(unittest.TestCase):

    def test_add_2_num(self):
        self.assertEqual(158,practice_01_102018.add_2_num(153, 5))
        self.assertEqual(23,practice_01_102018.add_2_num(3, 20))
        self.assertEqual(5438,practice_01_102018.add_2_num(3123, 2315))

    def test_div_2_num(self):
        self.assertEqual(4, practice_01_102018.div_2_num(20, 5))
        self.assertEqual(204, practice_01_102018.div_2_num(1020, 5))
        self.assertNotEqual(38.88461538, practice_01_102018.div_2_num(2022, 52))

    def test_payment(self):
        self.assertEqual(200, practice_01_102018.payment(20, 10))
        self.assertEqual(3668.5, practice_01_102018.payment(253, 14.5))
        self.assertEqual(2706, practice_01_102018.payment(20.5, 132))

    def test_num_occurrencies(self):
        self.assertEqual({1:2, 2:2, 3:1, 4:1}, practice_01_102018.num_ocurrencies([1, 4, 2, 3, 2, 1])) 
        self.assertEqual({1:1, 2:2, 3:1, 10:2, 22:2}, practice_01_102018.num_ocurrencies([10, 2, 3, 2, 1, 10, 22, 22]))                
        self.assertEqual({"a":1, 2:2, 3:1, 10:2, 22:2}, practice_01_102018.num_ocurrencies([10, 2, 3, 2, "a", 10, 22, 22]))                

    def test_lookup_prov(self):
        self.assertEqual("Welcome from Alberta" ,
                        practice_01_102018.lookup_prov("ab"))
        self.assertEqual("Welcome from Manitoba" ,
                        practice_01_102018.lookup_prov("mb"))