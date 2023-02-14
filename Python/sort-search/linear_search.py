# As usual, this code at the top isn't relevant to the search
# algorithm. It's just like the code that loaded a list of numbers
# from a file in the previous stage, but this code calls a the above
# function, load_strings, to load a list of strings in.
import sys
from load import load_strings

names = load_strings(sys.argv[1])

# Here's a separate hard-coded list containing the 100 names we're
# going to search for. We'll loop through each name in the list, and
# pass it to our search function to get the index within the full
# list where it appears.
search_names = [
    "Francina Vigneault",
    "Lucie Hansman",
    "Nancie Rubalcaba",
    "Elida Sleight",
    "Guy Lashbaugh",
    "Ginger Schlossman",
    "Suellen Luaces",
    "Jamey Kirchgesler",
    "Amiee Elwer",
    "Lacresha Peet",
    "Leonia Goretti",
    "Carina Bunge",
    "Renee Brendeland",
    "Andrew Mcgibney",
    "Gina Degon",
    "Deandra Pihl",
    "Desmond Steindorf",
    "Magda Growney",
    "Tawana Srivastava",
    "Tammi Todman",
    "Harley Mussell",
    "Iola Bordenet",
    "Edwardo Khela",
    "Myles Deanne",
    "Elden Dohrman",
    "Ira Hooghkirk",
    "Eileen Stigers",
    "Mariann Melena",
    "Maryrose Badura",
    "Ardelia Koffler",
    "Lacresha Kempker",
    "Charlyn Singley",
    "Lekisha Tawney",
    "Christena Botras",
    "Mike Blanchet",
    "Cathryn Hinkson",
    "Errol Shinkle",
    "Mavis Bhardwaj",
    "Sung Filipi",
    "Keiko Dedeke",
    "Lorelei Morrical",
    "Jimmie Lessin",
    "Adrianne Hercules",
    "Latrisha Haen",
    "Denny Friedeck",
    "Emmett Whitesell",
    "Sina Sauby",
    "Melony Engwer",
    "Alina Reichel",
    "Rosamond Shawe",
    "Elinore Benyard",
    "Sang Bouy",
    "Ed Aparo",
    "Sheri Wedding",
    "Sang Snellgrove",
    "Shaquana Sones",
    "Elvia Motamed",
    "Candice Lucey",
    "Sibyl Froeschle",
    "Ray Spratling",
    "Cody Mandeville",
    "Donita Cheatham",
    "Darren Later",
    "Johnnie Stivanson",
    "Enola Kohli",
    "Leann Muccia",
    "Carey Philps",
    "Suellen Tohonnie",
    "Evelynn Delucia",
    "Luz Kliment",
    "Lettie Jirjis",
    "Francene Klebe",
    "Margart Scholz",
    "Sarah Growden",
    "Glennis Gines",
    "Rachael Ojima",
    "Teofila Stample",
    "Narcisa Shanley",
    "Gene Lesnick",
    "Malena Applebaum",
    "Norma Tingey",
    "Marianela Mcmullen",
    "Rosalva Dosreis",
    "Dallas Heinzmann",
    "Sade Streitnatter",
    "Lea Pelzel",
    "Judith Zwahlen",
    "Hope Vacarro",
    "Annette Ayudan",
    "Irvin Cyree",
    "Scottie Levenstein",
    "Agustina Kobel",
    "Kira Moala",
    "Fawn Englar",
    "Jamal Gillians",
    "Karen Lauterborn",
    "Kit Karratti",
    "Steven Deras",
    "Mary Rosenberger",
    "Alonso Viviano",
]


def index_of_item(collection, target):
    for i in range(0, len(collection)):
        if target == collection[i]:
            return i
    return None


for n in search_names:
    index = index_of_item(names, n)
    print(index)
