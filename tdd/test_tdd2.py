
import tdd2
import unittest
import datetime
import openpyxl as xl

class TestTdd2(unittest.TestCase):

    def test_add_five(self):
        self.assertEqual(8,tdd2.add_five(3)) 
        self.assertEqual(10,tdd2.add_five(5))
        self.assertEqual(-10,tdd2.add_five(-15))

    def test_my_max(self):
        self.assertEqual(5,tdd2.my_max([1,2,3,4,5]))
        self.assertNotEqual(7,tdd2.my_max([1,2,3,4,5]))
        self.assertEqual(5,tdd2.my_max([2,5,1,3,4]))

    def test_my_min(self):
        self.assertEqual(1,tdd2.my_min([1,2,3,4,5]))
        self.assertNotEqual(3,tdd2.my_min([1,2,3,4,5]))
        self.assertEqual(1,tdd2.my_min([2,5,1,3,4]))

    def test_has_string(self):
        test_list = test_list["Mary had", "a little lamb", "little lamb", "Whose fleece"]
        self.assertEqual(tdd2.has_string(test_list, "Mary"), ["Mary had"])
        self.assertTrue(tdd2.has_string(test_list, "Mary"), ["Mary had"])
        self.assertNotEqual(["Mary had"],tdd2.has_string(test_list, "Mary"))
        self.assertNotEqual(["Mary had"],tdd2.has_string(test_list, "little"))
        self.assertEqual(tdd2.has_string(test_list, "little"), ["a little lamb", "little lamb"])

    def test_to_date(self):
        dt = tdd2.to_date("2010-08-02")
        self.assertIsInstance(dt, datetime.date)
        self.assertEqual(2010, dt.year)
        self.assertEqual(8, dt.month)
        self.assertEqual(2, dt.day)

    def test_date_diff(self):
        self.assertEqual(1, tdd2.date_diff("2018-09-02", "2018-09-01"))
        self.assertEqual(2080, tdd2.date_diff("2018-09-01", "2012-12-21"))

    def test_contains(self):
        self.assertTrue(tdd2.contains(['a','b','d'],"a"))
        self.assertFalse(tdd2.contains(['a','b','d'],"z"))

    def test_add_contents(self):
        self.assertEqual(6, tdd2.add_contents([1,2,3]))
        self.assertEqual(3422, tdd2.add_contents([12,232,3178]))

    def test_lookup(self):
        self.assertEqual('one mine', 
          tdd2.lookup({1:'one', 2:'two', 3:'three'} , 1))
        self.assertEqual('three mine', 
          tdd2.lookup({1:'one', 2:'two', 3:'three'} , 3))

    def test_verify_client(self):
        test_clients = wb['Clients']
        self.assertTrue(tdd2.verify_client)
     