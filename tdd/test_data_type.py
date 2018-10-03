import unittest
import data_type

class TestSome(unittest.TestCase):
    def test_someNumbers(self):
        self.assertEqual(93,data_type.someNumbers([2, 57, 34]))

    def test_averageNum(self):
        self.assertEqual(31,data_type.averageNum([2, 57, 34]))
        self.assertAlmostEqual(29.6666667,data_type.averageNum([-2, 57, 34]))
    def test_addUnique(self):
        self.assertEqual(data_type.add_unique(["a", 2, 3, 2, 1]), 
                         {"a":1, 1:1, 2:2, 3:1})                    
        self.assertEqual(data_type.add_unique([1, 2, 3, 2, 1]), 
                         {1:2, 2:2, 3:1}) 