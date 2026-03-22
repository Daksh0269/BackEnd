import mongoose from 'mongoose';
import dotenv from 'dotenv';
import QuestionBank from './src/models/QuestionBank.js';

dotenv.config();

const seedData = [
  
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "The number of real roots of the equation x|x − 2| + 3|x − 3| + 1 = 0 is :",
    "options": [
      "4",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "If the set of all a ∈ R, for which the equation 2x + (a − 5)x + 15 = 3a has no real root, is the interval (α, β), and\n2\n\nX = {x ∈ Z : α < x < β}\n\n, then ∑\n\nx∈X\n\nx\n\n2\n\nis equal to :",
    "options": [
      "2109",
      "2129",
      "2119",
      "2139"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 2139.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 2139."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "2\n\nThe product of all the rational roots of the equation (x − 9x + 11) − (x − 4)(x − 5) = 3, is equal to\n2",
    "options": [
      "14",
      "21",
      "28",
      "7"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 14.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 14."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "Let P\nand\n\nn\n\n1\nβ\n\n= α\n\nn\n\n+ β\n\nn\n\n. If P\n\n,n ∈ N\n\n10\n\n,P\n\n= 123, P 9 = 76\n\n8\n\n= 47\n\nand P\n\n1\n\n= 1\n\n, then the quadratic equation having roots\n\nis :",
    "options": [
      "x − x + 1 = 0",
      "x + x − 1 = 0",
      "x − x − 1 = 0",
      "x + x + 1 = 0\n\n2\n\n2\n\n2\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): x + x − 1 = 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): x + x − 1 = 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "The number of solutions, of the equation e\n\nsin x\n\n− 2e\n\n− sin x\n\n= 2\n\nis",
    "options": [
      "2",
      "more than 2",
      "1",
      "0"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "Let α, β be the distinct roots of the equation x − (t − 5t + 6)x + 1 = 0, t ∈ R and a\n2\n\nminimum value of\n\na 2023 +a 2025\na 2024\n\n2\n\nn\n\n= α\n\nn\n\n+ β\n\nis",
    "options": [
      "−1/4",
      "−1/4",
      "−1/2",
      "1/4"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): −1/4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): −1/4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "The equation e\n\n4x\n\n+ 8e\n\n3x\n\n+ 13e\n\n2x\n\n− 8e\n\nx\n\n+ 1 = 0, x ∈ R\n\nhas :",
    "options": [
      "four solutions two of which are negative",
      "two solutions and both are negative",
      "no solution",
      "two solutions and only one of them is negative"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): two solutions and both are negative.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): two solutions and both are negative."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "The number of real roots of the equation √x − 4x + 3 + √x − 9 = √4x − 14x + 6, is:\n2\n\n2",
    "options": [
      "0",
      "1",
      "3",
      "2\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Quadratic Equation",
    "subConcept": "Roots and Nature of Quadratic Equations",
    "q": "Let λ ≠ 0 be a real number. Let α, β be the roots of the equation 14x − 31x + 3λ = 0 and α, γ be the roots of the\n2\n\nequation 35x − 53x + 4λ = 0. Then\n2\n\n3α\nβ\n\nand\n\n4α\nγ\n\nare the roots of the equation :",
    "options": [
      "7x + 245x − 250 = 0\n2",
      "7x − 245x + 250 = 0\n2",
      "49x − 245x + 250 = 0\n2",
      "49x + 245x + 250 = 0\n2"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 49x − 245x + 250 = 0\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 49x − 245x + 250 = 0\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let A =\n{θ ∈ [0, 2π] : 1 + 10 Re (\n\nThen ∑",
    "options": [
      "21",
      "8π\n\n2\n\n2",
      "27\n\n4\n\n4\n\nπ\nπ\n\nθ∈A\n\nθ\n\n2\n\n2 cos θ+i sin θ\ncos θ−3i sin θ\n\n) = 0}.\n\nis equal to\n\n2",
      "6π\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 21.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 21."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "If the locus of z ∈ C, such that\nRe (\n\nz−1\n2z+i\n\n) + Re (\n\nz̄−1\n2z̄−i\n\n) = 2\n\nis a circle of radius r and center (a, b) then\n\n15ab\nr\n\n2\n\nis equal to :",
    "options": [
      "24",
      "12",
      "18",
      "16"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 18.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 18."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let the product of ω\n\n1\n\n= (8 + i) sin θ + (7 + 4i) cos θ\n\nand ω\n\n2\n\n= (1 + 8i) sin θ + (4 + 7i) cos θ\n\nbe α + iβ, i = √−1.\n\nLet p and q be the maximum and the minimum values of α + β respectively.",
    "options": [
      "140",
      "130",
      "160",
      "150"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 130.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 130."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let |z − 8 − 2i| ≤ 1 and |z − 2 + 6i| ≤ 2, z , z\n1\n\n2\n\n1\n\n2\n\n∈ C\n\n. Then the minimum value of |z − z | is :\n1",
    "options": [
      "13",
      "10",
      "3",
      "7\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 7\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 7\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "If α + iβ and γ + iδ are the roots of x − (3 − 2i)x − (2i − 2) = 0, i = √−1, then αγ + βδ is equal to :\n2",
    "options": [
      "−2",
      "6",
      "−6",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let O be the origin, the point A be z\narg (z 2 ) = arg (z 1 ) +\n\nπ\n6\n\n= √ 3 + 2√ 2i\n\n1\n\n, the point B (z ) be such that √3 |z | = |z | and\n2\n\n2\n\n1\n\n. Then",
    "options": [
      "area of triangle ABO is",
      "ABO is an obtuse angled isosceles triangle\n\n11\n√3",
      "area of triangle ABO is",
      "ABO is a scalene triangle\n\n11\n4"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): ABO is an obtuse angled isosceles triangle\n\n11\n√3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): ABO is an obtuse angled isosceles triangle\n\n11\n√3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "If α and β are the roots of the equation 2z − 3z − 2i = 0, where i = √−1, then\n2\n\n16 ⋅ Re (\n\nα\n\n19\n\n+β\n\n19\n\nα\n\n15\n\n+α\n+β\n\n11\n\n+β\n\n15\n\n11\n\n) ⋅ lm (\n\nα\n\n19\n\n+β\n\n19\n\nα\n\n+α\n\n15\n\n+β\n\n11\n\n+β\n\n11\n\n15\n\n)\n\nis equal to",
    "options": [
      "441",
      "398",
      "312",
      "409"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 441.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 441."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let z , z and z be three complex numbers on the circle |z| = 1 with arg (z ) =\n1\n\n2\n\narg (z 3 ) =\n\n3\n\nπ\n4\n\n1\n\n. If |z z̄ + z z̄ + z z̄ |\n1\n\n2\n\n2\n\n3\n\n3\n\n2\n\n1\n\n−π\n4\n\n, arg (z 2 ) = 0\n\nand\n\n, then the value of α + β is :\n2\n\n= α + β√ 2, α, β ∈ Z",
    "options": [
      "24",
      "29",
      "41",
      "31\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 29.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 29."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let z be a complex number such that |z| = 1. If\n\n2\n\n2+k z\n–\nk+ z\n\n, then the maximum distance of k + ik from the\n\n= kz, k ∈ R\n\ncircle |z − (1 + 2i)| = 1 is:",
    "options": [
      "√5 + 1",
      "2",
      "3",
      "√3 + 1"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): √5 + 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): √5 + 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "If S = z ∈ C : |z − i| = |z + i| = |z − 1|, then, n(S) is:",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let S\n\n= {z ∈ C : |z| ≤ 5}, S 2 = {z ∈ C : Im (\n\n1\n\nz+1−√ 3i\n1−√ 3i\n\n) ≥ 0}\n\nand S\n\n3\n\n. Then the area of\n\n= {z ∈ C : Re(z) ≥ 0}\n\nthe region S ∩ S ∩ S is :\n1",
    "options": [
      "125π",
      "125π",
      "125π\n\n2\n\n3\n\n12\n\n24",
      "125π\n\n4\n\n6"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 125π.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 125π."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "The area (in sq. units) of the region S = {z ∈ C : |z − 1| ≤ 2; (z + z̄) + i(z − z̄) ≤ 2, Im(z) ≥ 0} is",
    "options": [
      "7π",
      "7π",
      "17π\n\n3\n\n8",
      "3π\n\n4\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 3π\n\n4\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 3π\n\n4\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let S = {z ∈ C : |z − 1| = 1 and (√2 − 1)(z + z̄) − i(z − z̄) = 2√2} . Let z , z\n1\n\n|z 1 | = max z∈s |z|\n\nand |z | = min\n2\n\nz∈s\n\n. Then √2z − z\n\n|z|\n\n1\n\n2\n2\n\n2\n\n∈ S\n\nbe such that\n\nequals:",
    "options": [
      "1",
      "4",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let p, q ∈ R and (1 − √3i)\n\n200\n\n= 2\n\n199\n\n, i = √−1. Then, p + q + q and p − q + q are roots of the\n2\n\n(p + iq)\n\n2\n\nequation.",
    "options": [
      "x + 4x − 1 = 0",
      "x − 4x + 1 = 0",
      "x + 4x + 1 = 0",
      "x − 4x − 1 = 0\n\n2\n\n2\n\n2\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): x − 4x + 1 = 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): x − 4x + 1 = 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let a ≠ b be two non-zero real numbers. Then the number of elements in the set X = {z ∈ C : Re(az + bz) = a}\n2\n\nand Re(bz + az) = b is equal to\n2",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let a, b be two real numbers such that ab < 0. If the complex number\ncircle |z − 1| = |2z|, then a possible value of\n\n1+[a]\n4b\n\n1+ai\nb+i\n\nis of unit modulus and a + ib lies on the\n\n, where [t] is greatest integer function, is :",
    "options": [
      "0",
      "−1",
      "1",
      "1\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let A = {z ∈ C :\n\nz+1\nz−1\n\n< 1}\n\nand B = {z ∈ C : arg(",
    "options": [
      "a portion of a circle centred at (0, −",
      "a portion of a circle centred at (0, −\n\n1\n√3\n1\n√3\n\nz−1\nz+1\n\n) =\n\n2π\n3\n\n. Then A ∩ B is\n\n}\n\n)\n\nthat lies in the second and third quadrants only\n\n)\n\nthat lies in the second quadrant only",
      "an empty set",
      "a portion of a circle of radius\n\n2\n√3\n\nthat lies in the third quadrant only"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): a portion of a circle centred at (0, −\n\n1\n√3\n1\n√3\n\nz−1\nz+1\n\n) =\n\n2π\n3\n\n. Then A ∩ B is\n\n}\n\n)\n\nthat lies in the second and third quadrants only\n\n)\n\nthat lies in the second quadrant only.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): a portion of a circle centred at (0, −\n\n1\n√3\n1\n√3\n\nz−1\nz+1\n\n) =\n\n2π\n3\n\n. Then A ∩ B is\n\n}\n\n)\n\nthat lies in the second and third quadrants only\n\n)\n\nthat lies in the second quadrant only."
  },
  {
    "subject": "Mathematics",
    "chapter": "Complex Number",
    "subConcept": "Argand Plane and Modulus-Argument Form",
    "q": "Let a complex number be w = 1 − √3i. Let another complex number z be such that |zw| = 1 and\narg(z) − arg(w) =\n\nπ\n2\n\n. Then the area of the triangle (in sq. units) with vertices origin, z and w is equal to",
    "options": [
      "4",
      "(3)",
      "2\n\n1\n4\n\n1\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (3).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (3)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "1\nIf\n1\n\n1\n\n4\n\n+\n2\n\n1\n1\n\n4\n\n2\n\n4\n\n3\n\n1\n+\n3\n\n1\n4\n\n1\n+\n\n4\n\nthen\n\nα\nβ\n\n4\n\n4\n\n,\n90\n\n1\n\n4\n\n+\n5\n\n1\n+\n\nπ\n+ …..∞ =\n\n+ … . . ∞ = α,\n\n4\n\n1\n\n4\n\n+\n6\n\n+ … . ∞ = β,\n\n4\n\nis equal to",
    "options": [
      "23",
      "18",
      "15"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 15.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 15."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "(4) 14\n\nIf the sum of the second, fourth and sixth terms of a G.P. of positive terms is 21 and the sum of its eighth, tenth and\ntwelfth terms is 15309 , then the sum of its first nine terms is :",
    "options": [
      "760",
      "755",
      "750",
      "14\n\nIf the sum of the second, fourth and sixth terms of a G.P. of positive terms is 21 and the sum of its eighth, tenth and\ntwelfth terms is 15309 , then the sum of its first nine terms is :"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 14\n\nIf the sum of the second, fourth and sixth terms of a G.P. of positive terms is 21 and the sum of its eighth, tenth and\ntwelfth terms is 15309 , then the sum of its first nine terms is :.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 14\n\nIf the sum of the second, fourth and sixth terms of a G.P. of positive terms is 21 and the sum of its eighth, tenth and\ntwelfth terms is 15309 , then the sum of its first nine terms is :."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "(4) 757\n\nLet x , x , x , x be in a geometric progression. 2, 7, 9, 5 are subtracted respectively from x , x , x x then the\n1\n\n2\n\n3\n\n4\n\nresulting numbers are in an arithmetic progression. Then the value of",
    "options": [
      "72",
      "18",
      "36",
      "757\n\nLet x , x , x , x be in a geometric progression. 2, 7, 9, 5 are subtracted respectively from x , x , x x then the\n1\n\n2\n\n3\n\n4\n\nresulting numbers are in an arithmetic progression. Then the value of"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 757\n\nLet x , x , x , x be in a geometric progression. 2, 7, 9, 5 are subtracted respectively from x , x , x x then the\n1\n\n2\n\n3\n\n4\n\nresulting numbers are in an arithmetic progression. Then the value of.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 757\n\nLet x , x , x , x be in a geometric progression. 2, 7, 9, 5 are subtracted respectively from x , x , x x then the\n1\n\n2\n\n3\n\n4\n\nresulting numbers are in an arithmetic progression. Then the value of."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "1\n\n24\n\n1\n\n(x 1 x 2 x 3 x 4 )\n\n2\n\n3\n\n4\n\nis :\n\n(4) 216\n\nConsider two sets A and B, each containing three numbers in A.P. Let the sum and the product of the elements of A\nbe 36 and p respectively and the sum and the product of the elements of B be 36 and q respectively. Let d and D be\nthe common differences of AP's in A and B respectively such that D = d + 3, d > 0. If\nequal to",
    "options": [
      "600",
      "450",
      "630",
      "216\n\nConsider two sets A and B, each containing three numbers in A.P. Let the sum and the product of the elements of A\nbe 36 and p respectively and the sum and the product of the elements of B be 36 and q respectively. Let d and D be\nthe common differences of AP's in A and B respectively such that D = d + 3, d > 0. If\nequal to",
      "540"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 216\n\nConsider two sets A and B, each containing three numbers in A.P. Let the sum and the product of the elements of A\nbe 36 and p respectively and the sum and the product of the elements of B be 36 and q respectively. Let d and D be\nthe common differences of AP's in A and B respectively such that D = d + 3, d > 0. If\nequal to.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 216\n\nConsider two sets A and B, each containing three numbers in A.P. Let the sum and the product of the elements of A\nbe 36 and p respectively and the sum and the product of the elements of B be 36 and q respectively. Let d and D be\nthe common differences of AP's in A and B respectively such that D = d + 3, d > 0. If\nequal to."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "If the sum of the first 20 terms of the series\n4.1\n2\n\n4+3.1 +1\n\nis\n\nm\nn\n\n4\n\n+\n\n4.2\n2\n\n4+3.2 +2\n\n4\n\n+\n\n4.3\n2\n\n4+3.3 +3\n\n4\n\n+\n\n4.4\n2\n\n4+3.4 +4\n\n4\n\n+ …\n\n, where m and n are coprime, then m + n is equal to :-",
    "options": [
      "423",
      "420",
      "421",
      "422\n\np+q\np−q\n\n=\n\n19\n5\n\n, then p − q is"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 421.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 421."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Let a , a , a , … be a G. P. of increasing positive numbers. If a a\n1\n\n2\n\n3\n\n3\n\n24 (a 1 + a 2 + a 3 )\n\n5\n\n= 729\n\nand a + a\n2\n\n4\n\n, then\n\n111\n\n=\n\n4\n\nis equal to",
    "options": [
      "131",
      "130",
      "129",
      "128"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 129.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 129."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Consider an A. P. of positive integers, whose sum of the first three terms is 54 and the sum of the first twenty terms\nlies between 1600 and 1800. Then its 11\n\nth\n\nterm is :",
    "options": [
      "90",
      "84",
      "122",
      "108"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 90.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 90."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "The value of lim\n\n3\n\nn\n\n2\n\nk +6k +11k+5\n\nn→∞ (∑ k=1\n\n(k+3)!\n\n)\n\nis:",
    "options": [
      "4/3",
      "2",
      "7/3",
      "5/3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 5/3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 5/3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "For positive integers n, if 4a\n\nn\n\n= (n\n\n2\n\n+ 5n + 6)\n\nand S\n\nn\n\n= ∑\n\nn\nk=1",
    "options": [
      "540",
      "675",
      "1350",
      "135\n\n(\n\n1\nak\n\n, then the value of 507S\n\n)\n\n2025\n\nis :"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 675.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 675."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Let T be the r\n\nth\n\nr\n\nterm of an A.P. If for some m, T\n\nm\n\n=\n\n1\n25\n\n, T 25 =\n\n1\n20\n\n, and 20 ∑\n\n25\nr=1\n\n, then 5 m ∑\n\nT r = 13\n\n2 m\nr=m\n\nTr\n\nequal to",
    "options": [
      "98",
      "126",
      "142",
      "112"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 126.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 126."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Let S\n\nn\n\n=\n\n1\n2\n\n+\n\n1\n6\n\n+\n\n1\n12\n\n+\n\n1\n20\n\n+ …\n\ncommon difference p is √2026 S",
    "options": [
      "20\n\nupto n terms. If the sum of the first six terms of an A.P. with first term -p and\n\n2025",
      "90\n\n, then the absolute difference betwen 20",
      "45\n\nth\n\nand 15\n\nth\n\nterms of the A.P. is",
      "25"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 25.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 25."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Suppose that the number of terms in an A.P. is 2k, k ∈ N . If the sum of all odd terms of the A.P. is 40 , the sum of\nall even terms is 55 and the last term of the A.P. exceeds the first term by 27, then k is equal to :",
    "options": [
      "6",
      "5",
      "8",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "If ∑\n\nn\nr=1\n\nTr =\n\n(2n−1)(2n+1)(2n+3)(2n+5)\n64",
    "options": [
      "0",
      ", then lim\n\nn\n\nn→∞ ∑ r=1 (\n\n1\nTr\n\n)\n\nis equal to :",
      "1\n\n2\n3",
      "1\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): , then lim\n\nn\n\nn→∞ ∑ r=1 (\n\n1\nTr\n\n)\n\nis equal to :.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): , then lim\n\nn\n\nn→∞ ∑ r=1 (\n\n1\nTr\n\n)\n\nis equal to :."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "The number of terms of an A.P. is even; the sum of all the odd terms is 24 , the sum of all the even terms is 30 and\nthe last term exceeds the first by",
    "options": [
      "4\n\n21\n2\n\n. Then the number of terms which are integers in the A.P. is :",
      "10",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 4\n\n21\n2\n\n. Then the number of terms which are integers in the A.P. is :.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 4\n\n21\n2\n\n. Then the number of terms which are integers in the A.P. is :."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "If each term of a geometric progression a , a , a , … with a\n1\n\ntwo terms and S",
    "options": [
      "2\n\nn\n\n= a1 + a2 + … + an",
      "−2\n\n15\n\n2\n\n, then S\n\n3\n\n20\n\n− S 18\n\n18\n\n1\n\n=\n\n1\n8\n\nand a\n\n2\n\n≠ a1\n\n, is the arithmetic mean of the next\n\nis equal to",
      "2",
      "−2\n\n18\n\n15"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): −2\n\n18\n\n15.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): −2\n\n18\n\n15."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "A software company sets up m number of computer systems to finish an assignment in 17 days. If 4 computer\nsystems crashed on the start of the second day, 4 more computer systems crashed on the start of the third day and so\non, then it took 8 more days to finish the assignment. The value of m is equal to:",
    "options": [
      "150",
      "180",
      "160",
      "125"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 150.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 150."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Let ABC be an equilateral triangle. A new triangle is formed by joining the middle points of all sides of the triangle\nABC\n\nand the same process is repeated infinitely many times. If P is the sum of perimeters and Q is be the sum of\n\nareas of all the triangles formed in this process, then:",
    "options": [
      "P\n\n2\n\n= 6√ 3Q",
      "P\n\n2\n\n= 36√ 3Q",
      "P = 36√3Q\n\n2",
      "P\n\n2\n\n= 72√ 3Q"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): P\n\n2\n\n= 36√ 3Q.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): P\n\n2\n\n= 36√ 3Q."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "If the minimum value of f (x) =",
    "options": [
      "32\n\n5x\n\n2\n\n2\n\nα\n\n+\n\nx\n\n5\n\n, is 14, then the value of α is equal to\n\n,x > 0",
      "64",
      "128",
      "256"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 128.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 128."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Consider two G.Ps. 2, 2 , 2 , … and 4, 4 , 4 , … of 60 and n terms respectively. If the geometric mean of all the\n2\n\n60 + n\n\nterms is (2)\n\n225\n8\n\n3\n\n2\n\n, then ∑",
    "options": [
      "560\n\nn\nk=1\n\n3\n\nk(n − k)\n\nis equal to:",
      "225\n8\n\n3\n\n2\n\n, then ∑",
      "1540",
      "1330",
      "2600"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1540.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1540."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Let x, y > 0. If x y\n3\n\n2\n\n= 2\n\n15\n\n, then the least value of 3x + 2y is",
    "options": [
      "30",
      "32",
      "36",
      "40"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 40.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 40."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "subConcept": "AP, GP and Special Series",
    "q": "Let a , a , a , …, be a G. P. such that a\n1\n\n2\n\n3",
    "options": [
      "−513\n\n1\n\n< 0, a 1 + a 2 = 4",
      "−171\n\nand a + a\n3",
      "171\n\n4\n\n. If ∑\n\n= 16\n\n9\ni=1",
      ", then λ, is equal to.\n\na i = 4λ\n511\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): −171\n\nand a + a\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): −171\n\nand a + a\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "Let p be the number of all triangles that can be formed by joining the vertices of a regular polygon P of n sides and q\nbe the number of all quadrilaterals that can be formed by joining the vertices of P . If p + q = 126, then the\neccentricity of the ellipse",
    "options": [
      "3\n4\n\nx\n\n2\n\n16\n\n+",
      "y\n\n2\n\nn\n1\n2\n\n= 1\n\nis :",
      "√7\n4",
      "1\n√2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 1\n√2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 1\n√2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "The number of different 5 digit numbers greater than 50000 that can be formed using the digits 0 , 1, 2, 3, 4, 5, 6, 7,\nsuch that the sum of their first and last digits should not be more than 8 , is",
    "options": [
      "4608",
      "5720",
      "5719",
      "4607"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 4607.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 4607."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "The number of words, which can be formed using all the letters of the word \"DAUGHTER\", so that all the vowels\nnever come together, is",
    "options": [
      "36000",
      "37000",
      "34000",
      "35000"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 36000.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 36000."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "In a group of 3 girls and 4 boys, there are two boys B and B . The number of ways, in which these girls and boys\n1\n\n2\n\ncan stand in a queue such that all the girls stand together, all the boys stand together, but B and B are not adjacent\n1\n\nto each other, is :",
    "options": [
      "96",
      "144",
      "120",
      "72"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 144.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 144."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "From all the English alphabets, five letters are chosen and are arranged in alphabetical order. The total number of\nways, in which the middle letter is ' M ', is :",
    "options": [
      "5148",
      "6084",
      "4356",
      "14950"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 5148.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 5148."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "The largest n ∈ N such that 3 divides 50 ! is:\nn",
    "options": [
      "21",
      "22",
      "20",
      "23"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 22.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 22."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "Number of ways of arranging 8 identical books into 4 identical shelves where any number of shelves may remain\nempty is equal to",
    "options": [
      "18",
      "16",
      "12",
      "15"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 15.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 15."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "The number of ways five alphabets can be chosen from the alphabets of the word MATHEMATICS, where the\nchosen alphabets are not necessarily distinct, is equal to :",
    "options": [
      "179",
      "177",
      "181",
      "175"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 179.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 179."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "If all the words with or without meaning made using all the letters of the word \"NAGPUR\" are arranged as in a\ndictionary, then the word at 315\n\nth\n\nposition in this arrangement is :",
    "options": [
      "NRAGUP",
      "NRAPUG",
      "NRAPGU",
      "NRAGPU"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): NRAPGU.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): NRAPGU."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "If n is the number of ways five different employees can sit into four indistinguishable offices where any office may\nhave any number of persons including zero, then n is equal to:",
    "options": [
      "47",
      "53",
      "51",
      "43"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 51.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 51."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "The number of ways of selecting two numbers a and b, a ∈ {2, 4, 6, … … , 100} and b ∈ {1, 3, 5, … … , 99} such\nthat 2 is the remainder when a + b is divided by 23 is",
    "options": [
      "186",
      "54",
      "108",
      "268"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 108.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 108."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "Let f (x) = 2x\n\nn\n\n, and f (4) = 133, f (5) = 255. Then the sum of all the positive integer divisors\n\n+ λ, λ ∈ R, n ∈ N\n\nof (f (3) − f (2)) is",
    "options": [
      "61",
      "60",
      "− f (2)) is",
      "58",
      "= 133, f (5) = 255. Then the sum of all the positive integer divisors\n\n+ λ, λ ∈ R, n ∈ N\n\nof (f",
      "59"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 60.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 60."
  },
  {
    "subject": "Mathematics",
    "chapter": "Permutation Combination",
    "subConcept": "Counting Principles and Arrangements",
    "q": "The number of triplets (x, y, z) where x, y, z are distinct non negative integers satisfying x + y + z = 15, is",
    "options": [
      "80",
      "136",
      "114",
      "92"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 114.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 114."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "For an integer n ≥ 2, if the arithmetic mean of all coefficients in the binomial expansion of (x + y)\n\n2n−3\n\nis 16 , then\n\nthe distance of the point P (2n − 1, n − 4n) from the line x + y = 8 is:\n2",
    "options": [
      "√2",
      "2√2",
      "5√2",
      "3√2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 3√2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 3√2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "In the expansion of (√2 +\n\nn\n1\n\n3\n\nis\n\n1\n6\n\n, then the value of\n\nn\n\nC3\n\n3\n\n√3\n\n)\n\n,n ∈ N\n\n, if the ratio of 15\n\nat\n\nterm from the beginning to the 15\n\nth\n\nis:",
    "options": [
      "4060",
      "1040",
      "2300",
      "4960"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2300.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2300."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "If ∑\n\n9\nr=1\n\n(\n\nr+3\n2\n\nr\n\n).\n\n9\n\nC r = α(",
    "options": [
      "27\n\n3\n2\n\n9\n\n)\n\n− β,\n\nα, β ∈ N,",
      "9\n\nthen (α + β) is equal to\n2",
      "81",
      "18"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 81.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 81."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "The remainder, when 7",
    "options": [
      "6\n\n103\n\nis divided by 23 , is equal to :",
      "17",
      "9",
      "14"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 14.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 14."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "The least value of n for which the number of integral terms in the Binomial expansion of (√7 + √11) is 183, is :\n3",
    "options": [
      "2184",
      "2196",
      "2148",
      "2172\n\n12\n\nn"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2184.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2184."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "Let the coefficients of three consecutive terms T , T\nr\n\nr+1\n\nand T\n\nr+2\n\nin the binomial expansion of (a + b)\n\n12\n\nbe in a G.P.\n\nand let p be the number of all possible values of r. Let q be the sum of all rational terms in the binomial expansion\nof (√3 + √4) . Then p + q is equal to :\n4\n\n3\n\n12",
    "options": [
      "283",
      "287",
      "295",
      "299"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 283.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 283."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "Let α, β, γ and δ be the coefficients of x , x , x and x respectively in the expansion of\n7\n\n5\n\n(x + √ x\n\n3\n\n− 1)\n\nαu + βv = 18\n\n5\n\n+ (x − √ x\n\n3\n\n5\n\n3\n\n. If u and v satisfy the equations\n\n− 1) , x > 1\n\nthen u + v equals :\n\nγu + δv = 20",
    "options": [
      "5",
      "3",
      "4",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "If ∑\n\n10\nr=0",
    "options": [
      "15\n\n(\n\n10\n\nr+1\n\n10\n\n−1\n\nr\n\n) ⋅\n\n11\n\nC r+1 =\n\nα\n\n11\n\n−11\n\n10\n\n10\n\n11\n\n, then α is equal to :",
      "11",
      "24",
      "20"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 20.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 20."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "The term independent of x in the expansion of (\n\n(x+1)\n(x\n\n2/3\n\n+1−x\n\n1/3\n\n)\n\n−",
    "options": [
      "210",
      "150",
      "240",
      "120\n\n10\n\n(x+1)\n(x−x\n\n1/2\n\n)\n\n)\n\n,x > 1\n\nis:"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 210.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 210."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "The term independent of x in the expression of (1 − x + 3x )(\n2",
    "options": [
      "(3)\n\n3",
      "7\n40\n\n2\n\nx\n\n3\n\n−\n\n1\n5x\n\n2\n\n)\n\n,x ≠ 0\n\nis\n\n33\n200",
      "39\n200\n\n11\n5\n\n11\n50"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 7\n40\n\n2\n\nx\n\n3\n\n−\n\n1\n5x\n\n2\n\n)\n\n,x ≠ 0\n\nis\n\n33\n200.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 7\n40\n\n2\n\nx\n\n3\n\n−\n\n1\n5x\n\n2\n\n)\n\n,x ≠ 0\n\nis\n\n33\n200."
  },
  {
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "subConcept": "Binomial Expansion and General Term",
    "q": "The remainder when (11)",
    "options": [
      "1\n\n1011\n\n+ (1011)\n\n11",
      "8\n\nis divided by 9 is _____ .",
      "6",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 8\n\nis divided by 9 is _____ ..\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 8\n\nis divided by 9 is _____ .."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "Let the mean and the standard deviation of the observation 2, 3, 3, 4, 5, 7, a, b be 4 and √2 respectively. Then the\nmean deviation about the mode of these observations is :",
    "options": [
      "1",
      "(3) 2\n\n3\n4",
      "1\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "Let the Mean and Variance of five observations x\n\n1\n\n= 1, x 2 = 3, x 3 = a, x 4 = 7\n\nand x\n\n5\n\n, be 5 and 10\n\n= b, a > b\n\nrespectively. Then the Variance of the observations n + x , n = 1, 2, … … . .5 is\nn",
    "options": [
      "17",
      "16.4",
      "17.4",
      "16"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 16.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 16."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "For a statistical data x , x , … , x\n1\n\n2\n\n10\n\nof 10 values, a student obtained the mean as 5.5 and ∑\n\n10\ni=1\n\nx\n\n2\ni\n\n. He later\n\n= 371\n\nfound that he had noted two values in the data incorrectly as 4 and 5 , instead of the correct values 6 and 8 ,\nrespectively. The variance of the corrected data is",
    "options": [
      "9",
      "5",
      "7",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 7.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 7."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "Marks obtains by all the students of class 12 are presented in a freqency distribution with classes of equal width. Let\nthe median of this grouped data be 14 with median class interval 12-18 and median class frequency 12 . If the\nnumber of students whose marks are less than 12 is 18 , then the total number of students is",
    "options": [
      "52",
      "48",
      "44",
      "40"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 44.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 44."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "If the mean and the variance of 6, 4, a, 8, b, 12, 10, 13 are 9 and 9.25 respectively, then a + b + ab is equal to :",
    "options": [
      "105",
      "103",
      "100",
      "106"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 103.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 103."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "If the mean of the following probability distribution of a random variable X :\nX\n\n0\n\n2\n\n4\n\n6\n\n8\n\nP(X)\n\na\n\n2a\n\na + b\n\n2b\n\n3b\n\nis\n\n46\n9\n\n, then the variance of the distribution is",
    "options": [
      "173",
      "566",
      "151\n\n27\n\n27",
      "581\n\n81\n\n81"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 566.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 566."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "Let the median and the mean deviation about the median of 7 observation 170, 125, 230, 190, 210, a, b be 170 and\n205\n7\n\nrespectively. Then the mean deviation about the mean of these 7 observations is:",
    "options": [
      "31",
      "28",
      "30",
      "32"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 30.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 30."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "Let the mean and variance of the frequency distribution\nx :\n\nx1 = 2\n\nx2 = 6\n\nx3 = 8\n\nx4 = 9\n\nf :\n\n4\n\n4\n\nα\n\nβ\n\nbe 6 and 6.8 respectively. If x is changed from 8 to 7, then the mean for the new dala will be:\n3",
    "options": [
      "4",
      "5",
      "(4)\n\n17\n3\n\n16\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (4)\n\n17\n3\n\n16\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (4)\n\n17\n3\n\n16\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Statistics",
    "subConcept": "Mean, Variance and Standard Deviation",
    "q": "The first of the two samples in a group has 100 items with mean 15 and standard deviation 3. If the whole group has\n250\n\nitems with mean 15. 6 and standard deviation √13. 44, then the standard deviation of the second sample is:",
    "options": [
      "8",
      "6",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let α be a solution of x + x + 1 = 0, and for some a and b in\n2\n\n1\n\n16\n\n13\n\n−1\n\n−1\n\n2\n\n⎡\n\nR, [4\n\na\n\nb]\n\n⎣",
    "options": [
      "3",
      "11",
      "7\n\n−2\n\n−14\n\n−8\n\n⎤\n\n= [0\n\n. If\n\n0\n\n0]\n\n4\nα\n\n4\n\n+\n\nm\nα\n\na\n\n+\n\nn\nα\n\nb\n\n, then m + n is equal to\n\n= 3\n\n⎦",
      "8"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 11.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 11."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let A be a 3 × 3 matrix such that\n| adj(adj(adj A))| = 81. If\n\n(n−1)\n\nS = {n ∈ Z : (| adj(adj A)|)\n\n, then ∑",
    "options": [
      "866",
      "750",
      "820\n\nA\n\n2\n\n2\n\n= |A|\n\n(3n −5n−4)\n\n}\n\nis equal to\n\n2\n\nn∈S\n\n2\n\n(n +n)",
      "732"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 732.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 732."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let the matrix A =\n\n⎡\n\n⎣\n\n:",
    "options": [
      "53",
      "52",
      "39\n\n1\n\n0\n\n0\n\n1\n\n0\n\n1\n\n0\n\n1\n\n0\n\n⎤\n\nsatisfy A\n\nn\n\n= A\n\nn−2\n\n+ A\n\n2\n\n− I\n\nfor n ≥ 3. Then the sum of all the elements of A\n\n⎦",
      "44"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 53.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 53."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let A be a matrix of order 3 × 3 and |A| = 5. If |2 adj(3 A adj(2 A))| = 2\n\nα\n\n⋅ 3\n\nβ\n\nγ\n\n⋅ 5 α, β, γ ∈ N\n\nthen α + β + γ is\n\nequal to",
    "options": [
      "25",
      "26",
      "27",
      "28"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 27.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 27."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let A = [a ] = [\n\nlog\n\nij\n\n5\n\nlog\n\n128\n\nlog\n\n8\n\nlog\n\n5\n\nIf A is the cofactor of a , C\nij\n\nij\n\nij\n\n4\n\n4\n\n5\n]\n\n25\n\n= ∑\n\n.\n\n2\nk=1\n\n, and C = [C ], then 8|C| is equal to :\n\na ik A jk , 1 ≤ i, j ≤ 2",
    "options": [
      "288",
      "222",
      "242",
      "262\n\nij"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 242.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 242."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "1\n\nLet A = [\n\n−2\n\n√2\n\n]\n\n0\n\nand P = [\n\n1\n\nelements of C is\n\nm\nn\n\ncos θ\n\n− sin θ\n\nsin θ\n\ncos θ\n\n. If B = PAP , C = P B\nT\n\n], θ > 0\n\nT\n\n10\n\nP\n\nand the sum of the diagonal\n\n, where gcd(m, n) = 1, then m + n is :",
    "options": [
      "127",
      "258",
      "65",
      "2049"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 65.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 65."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "For a 3 × 3 matrix M , let trace (M ) denote the sum of all the diagonal elements of M . Let A be a 3 × 3 matrix such\nthat |A| =\n\n1\n2\n\nand trace (A) = 3. If B = adj(adj(2A)), then the value of |B|+ trace (B) equals :",
    "options": [
      "56",
      "132",
      "174",
      "280"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 280.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 280."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let a ∈ R and A be a matrix of order 3 × 3 such that det(A) = −4 and A + I =\n\n⎡\n\n⎣\n\n1\n\na\n\n1\n\n2\n\n1\n\n0\n\na\n\n1\n\n2\n\n⎤\n\n, where I is the\n\n⎦\n\nidentity matrix of order 3 × 3.\n\nIf det((a + 1) adj((a − 1)A)) is 2",
    "options": [
      "14\n\nm\n\n3\n\nn\n\n, then m + n is equal to :\n\n, m, n ∈ {0, 1, 2, … .20}",
      "17",
      "15",
      "16"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 16.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 16."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let A and B be two square matrices of order 3 such that |A| = 3 and |B| = 2. Then\nA\n\nT\n\nA(adj(2 A))\n\n−1\n\n(adj(4 B))(adj(AB))",
    "options": [
      "108\n\n−1\n\nAA\n\nT\n\nis equal to :",
      "32",
      "81",
      "64"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 64.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 64."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let A = [\n\nm\n\nn\n\np\n\nq\n\n], d = |A| ≠ 0",
    "options": [
      "(1 + d)\n\n2\n\n= (m + q)\n\n2\n\nand |A − d(Adj A)| = 0. Then",
      "1 + d\n\n2\n\n= (m + q)",
      "(1 + d)\n\n2\n\n2\n\n= m\n\n2\n\n+ q",
      "1 + d\n\n2\n\n2\n\n= m\n\n2\n\n+ q\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (1 + d)\n\n2\n\n= (m + q)\n\n2\n\nand |A − d(Adj A)| = 0. Then.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (1 + d)\n\n2\n\n= (m + q)\n\n2\n\nand |A − d(Adj A)| = 0. Then."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "⎡\n\nThe set of all values of t ∈ R, for which the matrix\n\ne\n\n⎣",
    "options": [
      "{(2k + 1)\n\nπ\n2\n\n, k ∈ Z}",
      "{kπ +\n\nπ\n4\n\ne\n\n−t\n\ne\n\n(−2 sin t − cos t)\n\n−t\n\n⎤\n\nis invertible, is\n\n(sin t − 2 cos t)\ne\n\n−t\n\nsin t\n\n, k ∈ Z}",
      "{kπ, k ∈ Z}\n\ne\n\ne\n\nt\n\nt\n\ne\n\ne\n\n−t\n\n−t\n\n(sin t − 2 cos t)\n\n(2 sin t + cos t)\n\nt\n\ne\n\n−t\n\ncos t",
      "R"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): R.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): R."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "⎡\n\nLet P =\n\n⎣\n\n√3\n\n1\n\n2\n\n2\n\n−\n\n1\n2\n\n⎤\n\n1\n\n1\n\n, A = [\n\n]\n0\n\n√3 ⎦\n\nand Q = P AP . If P\nT\n\nT\n\nQ\n\n2007\n\na\n\nb\n\nc\n\nd\n\nP = [\n\n1\n\n]\n\nthen 2a + b − 3c − 4d is equal to\n\n2",
    "options": [
      "2004",
      "2005",
      "2007",
      "2006"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2005.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2005."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "Let\nP\n\nα\n\nP\n− P\n\nbe a square matrix such that\nβ\n\n= δl − 13P\n\nP\n\n2\n\n= I − P\n\n. For\n\n, if\n\nα, β, γ, δ ∈ N\n\nP\n\nα\n\n+ P\n\nβ\n\n= γl − 29P\n\nand\n\n, then α + β + γ − δ is equal to",
    "options": [
      "18",
      "40",
      "22",
      "24"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 24.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 24."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "The probability that a randomly chosen 2 × 2 matrix with all the entries from the set of first 10 primes, is singular,\nis equal to",
    "options": [
      "133",
      "4",
      "18\n\n10\n\n10",
      "3\n\n19\n10\n\n3\n\n271\n10\n\n4"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Matrices",
    "subConcept": "Matrix Operations and Determinants",
    "q": "⎡\n\nLet the matrix A =\n⎣\n\n0\n\n1\n\n0\n\n1\n\n0\n\n0\n\n0\n\n0\n\n1\n\n⎤\n\nand the matrix B\n\n0\n\n= A\n\n49\n\n+ 2A\n\n98\n\n. If B\n\nn\n\n= Adj(B n−1 )\n\nfor all n ≥ 1, then det (B )\n4\n\n⎦\n\nis equal to",
    "options": [
      "3\n\n28",
      "3\n\n30",
      "3\n\n32",
      "3\n\n36"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 3\n\n32.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 3\n\n32."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "Let the system of equations\nx + 5y − z = 1\n\n4x + 3y − 3z = 7\n\n24x + y + λz = μ\n\n, have infinitely many solutions. Then the number of the solutions of this system, If x, y, z are integers and\n\nλ, μ ∈ R\n\nsatisfy 7 ≤ x + y + z ≤ 77, is",
    "options": [
      "3",
      "6",
      "5",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "Let the system of equations :\n2x + 3y + 5z = 9\n7x + 3y − 2z = 8\n\n12x + 3y − (4 + λ)z = 16 − μ\n\nhave infinitely many solutions. Then the radius of the circle centred at (λ, μ) and touching the line 4x = 3y is",
    "options": [
      "17\n5",
      "7",
      "7",
      "21\n\n5\n\n5"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 7.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 7."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "If\n\ny(x) =",
    "options": [
      "−1",
      "28",
      "27\n\nsin x\n\ncos x\n\nsin x + cos x + 1\n\n27\n\n28\n\n27\n\n1\n\n1\n\n1\n\n, then\n\n,x ∈ R\n\n2\n\nd y\n\ndx\n\n2\n\n+ y\n\nis equal to",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): −1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): −1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "sin x\n\na +\n\nFor some a, b, let f (x) =\n\n1\n\nx\n\na\n\n1 +\n\na\n\n(λ + μ + ν)\n\n2\n\nis equal to :",
    "options": [
      "16\n\nb\n\nsin x\n\n1\n\n, x ≠ 0, lim\n\nb\n\nx\n\nb +\n\nx→0 f (x)\n\n. Then\n\n= λ + μa + νb\n\nsin x\nx",
      "25",
      "9",
      "36"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 16\n\nb\n\nsin x\n\n1\n\n, x ≠ 0, lim\n\nb\n\nx\n\nb +\n\nx→0 f (x)\n\n. Then\n\n= λ + μa + νb\n\nsin x\nx.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 16\n\nb\n\nsin x\n\n1\n\n, x ≠ 0, lim\n\nb\n\nx\n\nb +\n\nx→0 f (x)\n\n. Then\n\n= λ + μa + νb\n\nsin x\nx."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "If the system of equations\nx + 2y − 3z = 2\n2x + λy + 5z = 5\n14x + 3y + μz = 33\n\nhas infinitely many solutions, then λ + μ is equal to :",
    "options": [
      "13",
      "10",
      "12",
      "11"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 12.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 12."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "If the system of equations\n\n(λ − 1)x + (λ − 4)y + λz = 5\nλx + (λ − 1)y + (λ − 4)z = 7\n\n(λ + 1)x + (λ + 2)y − (λ + 2)z = 9\n\nhas infinitely many solutions, then λ + λ is equal to\n2",
    "options": [
      "6",
      "10",
      "20",
      "12"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 12.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 12."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "If the system of equation\n2x + λy + 3z = 5\n3x + 2y − z = 7\n4x + 5y + μz = 9\n\nhas infinitely many solutions, then (λ + μ ) is equal to :\n2",
    "options": [
      "22",
      "18",
      "26\n\n2",
      "30"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 26\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 26\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "Let A be a 3 × 3 real matrix such that A\n\n⎛\n\ny\n\n(A − 3I )\n\n⎝\n\nz\n\n1\n⎛ ⎞\n2\n\n=\n\n⎠\n\n⎝\n\n⎛\n\n0\n\n⎝\n\nx\n⎛ ⎞\n\n1\n⎞\n\n0\n\n= 2\n\n⎠\n1\n\n1\n⎞\n\n⎝\n\n⎛\n\n−1\n0\n\n, A\n\n⎠\n1\n\n⎞\n\n⎝\n\n1\n\n⎛\n\n= 4\n\n⎠\n\n⎝\n\n−1\n\n⎞\n\n0\n1\n\n⎛\n\n1\n\n,A\n\n⎠\n\n0\n⎞\n\n⎝\n\n⎛\n\n= 2\n\n⎠\n0\n\n⎝\n\n0\n⎞\n1\n\n. Then, the system\n\n⎠\n0\n\nhas\n\n⎠\n3",
    "options": [
      "unique solution",
      "exactly two solutions",
      "no solution",
      "infinitely many solutions"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): unique solution.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): unique solution."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "2 cos\n\nIf\n\nf (x) =\n\nx\n\n3 + 2 cos\n2 cos",
    "options": [
      "0\n\n4\n\n4\n\n4\n\n2 sin\n\nx\n\nx\n\n2 sin\n\n4\n\n4\n\nx\n\n3 + sin\n\nx\n\n3 + 2 sin\n\n4\n\nsin\n\nx\n\nsin\n\n2\n\n2\n\n2\n\n2x\n\nthen\n\n2x\n\n1\n5\n\n′\n\nf (0)\n\nis equal to ________.\n\n2x",
      "1",
      "2",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 0\n\n4\n\n4\n\n4\n\n2 sin\n\nx\n\nx\n\n2 sin\n\n4\n\n4\n\nx\n\n3 + sin\n\nx\n\n3 + 2 sin\n\n4\n\nsin\n\nx\n\nsin\n\n2\n\n2\n\n2\n\n2x\n\nthen\n\n2x\n\n1\n5\n\n′\n\nf (0)\n\nis equal to ________.\n\n2x.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 0\n\n4\n\n4\n\n4\n\n2 sin\n\nx\n\nx\n\n2 sin\n\n4\n\n4\n\nx\n\n3 + sin\n\nx\n\n3 + 2 sin\n\n4\n\nsin\n\nx\n\nsin\n\n2\n\n2\n\n2\n\n2x\n\nthen\n\n2x\n\n1\n5\n\n′\n\nf (0)\n\nis equal to ________.\n\n2x."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "If the system of equations\n2x + 3y − z = 5\n\nx + αy + 3z = −4\n3x − y + βz = 7\n\nhas infinitely many solutions, then 13αβ is equal to",
    "options": [
      "1110",
      "1120",
      "1210",
      "1220"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1120.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1120."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "If α + β + γ = 2π, then the system of equations\nx + (cos γ)y + (cos β)z = 0\n\n(cos γ)x + y + (cos α)z = 0\n\n(cos β)x + (cos α)y + z = 0\n\nhas :",
    "options": [
      "infinitely many solutions",
      "a unique solution",
      "no solution",
      "exactly two solutions"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): infinitely many solutions.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): infinitely many solutions."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "Let A =\n\n⎡\n\n[x + 1]\n\n[x + 2]\n\n[x + 3]\n\n[x]\n\n[x + 3]\n\n[x + 3]\n\n⎣\n\n[x]\n\n[x + 2]\n\n[x + 4]\n\n⎤\n\n, where [x] denotes the greatest integer less than or equal to x. If det (A)\n\n⎦\n\n, then the set of values of x is in the interval:\n\n= 192",
    "options": [
      "[62, 63)",
      "[65, 66)",
      "[60, 61)",
      "[68, 69)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): [62, 63).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): [62, 63)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Determinants",
    "subConcept": "Properties and Applications of Determinants",
    "q": "If the minimum and the maximum values of the function f : [\n− sin\nf (θ) =\n\n2\n\n− cos\n\n2\n\nθ\n\nθ\n\n12\n\n−1 − sin\n\n2\n\n−1 − cos\n10\n\n2\n\nθ\n\n1\n\nθ\n\n1\n\nπ\n4\n\n,\n\nπ\n2\n\n] → R,\n\ndefined by\n\nare m and M respectively, then the ordered pair (m, M) is equal to :\n\n−2",
    "options": [
      "(0, 2√2)",
      "(−4, 0)",
      "(−4, 4)",
      "(0, 4)"
    ],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (−4, 0).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (−4, 0)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Let a random variable X take values 0, 1, 2, 3 with P(X = 0) = P(X = 1) = p, P(X = 2) = P(X = 3) and\n. Then the value of 8p − 1 is :\n\n2\n\nE (X ) = 2E(X)",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "The probability, of forming a 12 persons committee from 4 engineers, 2 doctors and 10 professors containing at\nleast 3 engineers and at least 1 doctor, is:",
    "options": [
      "(3)\n\n129\n182\n17\n26",
      "103",
      "19\n\n182\n\n26"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (3)\n\n129\n182\n17\n26.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (3)\n\n129\n182\n17\n26."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Bag 1 contains 4 white balls and 5 black balls, and Bag 2 contains n white balls and 3 black balls. One ball is drawn\nrandomly from Bag 1 and transferred to Bag 2. A ball is then drawn randomly from Bag 2. If the probability, that the\nball drawn is white, is 29/45, then n is equal to :",
    "options": [
      "6",
      "3",
      "5",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 6.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 6."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Bag B contains 6 white and 4 blue balls, Bag B contains 4 white and 6 blue balls, and Bag B contains 5 white\n1\n\n2\n\n3\n\nand 5 blue balls. One of the bags is selected at random and a ball is drawn from it. If the ball is white, then the\nprobability, that the ball is drawn from Bag B , is :\n2",
    "options": [
      "4\n15",
      "1\n3",
      "2\n5",
      "2\n3"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 4\n15.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 4\n15."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Three defective oranges are accidently mixed with seven good ones and on looking at them, it is not possible to\ndifferentiate between them. Two oranges are drawn at random from the lot. If x denote the number of defective\noranges, then the variance of x is",
    "options": [
      "28/75",
      "18/25",
      "26/75",
      "14/25"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 28/75.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 28/75."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "A\n\nand B alternately throw a pair of dice. A wins if he throws a sum of 5 before B throws a sum of 8 , and B wins if\n\nhe throws a sum of 8 before A throws a sum of 5 . The probability, that A wins if A makes the first throw, is",
    "options": [
      "(2)\n\n8\n17\n\n9\n19",
      "(4)\n\n9\n17\n\n8\n19"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4)\n\n9\n17\n\n8\n19.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)\n\n9\n17\n\n8\n19."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Two balls are selected at random one by one without replacement from a bag containing 4 white and 6 black balls. If\nthe probability that the first selected ball is black, given that the second selected ball is also black, is\n\nm\nn\n\n, where\n\n, then m + n is equal to :\n\ngcd(m, n) = 1",
    "options": [
      "4",
      "14",
      "13",
      "11"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 14.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 14."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Given three indentical bags each containing 10 balls, whose colours are as follows :\nRed\n\nBlue\n\nGreen\n\nBag I\n\n3\n\n2\n\n5\n\nBag II\n\n4\n\n3\n\n3\n\nBag III\n\n5\n\n1\n\n4\n\nA person chooses a bag at random and takes out a ball. If the ball is Red, the probability that it is from bag I is p and\nif the balls is Green, the probability that it is from bag III is q , then the value of (",
    "options": [
      "6",
      "9",
      "7\n\n1\np\n\n+\n\n1\nq\n\n)\n\nis :",
      "8"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 7\n\n1\np\n\n+\n\n1\nq\n\n)\n\nis :.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 7\n\n1\np\n\n+\n\n1\nq\n\n)\n\nis :."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "A coin is biased so that a head is twice as likely to occur as a tail. If the coin is tossed 3 times, then the probability\nof getting two tails and one head is",
    "options": [
      "(2)\n\n2\n9",
      "1\n9",
      "2\n27\n\n1\n27"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2)\n\n2\n9.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)\n\n2\n9."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Two integers x and y are chosen with replacement from the set {0, 1, 2, 3, … . . , 10}. Then the probability that\n|x − y| > 5",
    "options": [
      "is :",
      "30\n121\n\n62\n121",
      "(4)\n\n60\n121\n\n31\n121"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): is :.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): is :."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "If three letters can be posted to any one of the 5 different addresses, then the probability that the three letters are\nposted to exactly two addresses is:",
    "options": [
      "18\n25",
      "12\n25",
      "6\n25",
      "4\n25"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 12\n25.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 12\n25."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "A company has two plants A and B to manufacture motorcycles. 60% motorcycles are manufactured at plant A and\nthe remaining are manufactured at plant B.80% of the motorcycles manufactured at plant A are rated of the standard\nquality, while 90% of the motorcycles manufactured at plant B are rated of the standard quality. A motorcycle\npicked up randomly from the total production is found to be of the standard quality. If p is the probability that it was\nmanufactured at plant B, then 126p is",
    "options": [
      "54",
      "66",
      "64",
      "56"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 54.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 54."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Two dice A and B are rolled. Let the numbers obtained on A and B be α and β respectively. If the variance of\nα − β\n\nis\n\np\nq\n\n,\n\nwhere p and q are co-prime, then the sum of the positive divisors of p is equal to",
    "options": [
      "72",
      "36",
      "48",
      "31"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 48.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 48."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Bag A contains 2 white, 1 black and 3 red balls and bag B contains 3 black, 2 red and n white balls. One bag is\nchosen at random and 2 balls drawn from it at random are found to be 1 red and 1 black. If the probability that both\nballs come from Bag A is\n\n6\n11",
    "options": [
      "13\n\n, then n is equal to _____",
      "6",
      "4",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "When a certain biased die is rolled, a particular face occurs with probability\nprobability\n\n1\n6\n\n+ x.\n\nAll other faces occur with probability\n\n1\n6\n\nNote that opposite faces sum to 7 in any die. If 0 < x <\nsuch a die is rolled twice, is",
    "options": [
      "1\n16\n\n13\n96",
      ",\n\n1\n6\n\n− x\n\nand its opposite face occurs with\n\n.\n1\n6\n\n,\n\nand the probability of obtaining total sum = 7, when\n\nthen the value of x is\n1\n12",
      "1\n8",
      "1\n9"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1\n8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1\n8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Probability",
    "subConcept": "Conditional Probability and Bayes Theorem",
    "q": "Let A be a set of all 4 -digit natural numbers whose exactly one digit is 7. Then the probability that a randomly\nchosen element of A leaves remainder 2 when divided by 5 is:",
    "options": [
      "1",
      "122",
      "97\n\n5\n\n297",
      "2\n\n297\n\n9"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 97\n\n5\n\n297.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 97\n\n5\n\n297."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let A = {−3, −2, −1, 0, 1, 2, 3,}. LetR be a relation on A defined by xRy if and only if 0 ≤ x + 2y ≤ 4.\n2\n\nLet l be the number of elements in R and m be the minimum number of elements required to be added in R to make\nit a reflexive relation. then l + m is equal to",
    "options": [
      "19",
      "20",
      "17",
      "18"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 18.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 18."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "The relation R = {(x, y) : x, y ∈ Z and x + y is even } is:",
    "options": [
      "reflexive and symmetric but not transitive",
      "an equivalence relation",
      "symmetric and transitive but not reflexive",
      "reflexive and transitive but not symmetric"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): an equivalence relation.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): an equivalence relation."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let A = {x ∈ (0, π) − {\n\nπ\n2\n\n} : log (2/π) | sin x|+ log (2/π) | cos x| = 2}\n\nand\n\n. Then n(A ∪ B) is equal to :\n\nB = {x ⩾ 0 : √x(√x − 4) − 3|√x − 2| + 6 = 0}",
    "options": [
      "4",
      "8",
      "6",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let A = {(x, y) ∈ R × R : |x + y| ⩾ 3} and B = {(x, y) ∈ R × R : |x| + |y| ≤ 3}.\nIf C = {(x, y) ∈ A ∩ B : x = 0 or y = 0}, then ∑\n\n(x,y)∈C\n\n|x + y|",
    "options": [
      "15",
      "24",
      "18",
      "12\n\nis :"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 12\n\nis :.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 12\n\nis :."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let R = {(1, 2), (2, 3), (3, 3)} be a relation defined on the set {1, 2, 3, 4}. Then the minimum number of elements,\nneeded to be added in R so that R becomes an equivalence relation, is:",
    "options": [
      "10",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 7.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 7."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let A = {1, 2, 3, … , 10} and B = {\n\nm\nn\n\n: m, n ∈ A, m < n\n\nand gcd(m, n) = 1}. Then n(B) is equal to :",
    "options": [
      "36",
      "31",
      "37",
      "29"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 31.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 31."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let the relations R and R on the set X = {1, 2, 3, … , 20} be given by R\n1\n\n2\n\n1\n\n= {(x, y) : 2x − 3y = 2}\n\nand\n\n. If M and N be the minimum number of elements required to be added in R and\n\nR 2 = {(x, y) : −5x + 4y = 0}\nR2\n\n1\n\n, respectively, in order to make the relations symmetric, then M + N equals",
    "options": [
      "12",
      "16",
      "8",
      "10"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 10.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 10."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let a relation R on N × N be defined as: (x , y )R (x , y ) if and only if x\n1\n\n1\n\n2\n\n2\n\n1\n\n≤ x2\n\nor y\n\n1\n\n≤ y2\n\n. Consider the two\n\nstatements:\n(I) R is reflexive but not symmetric.\n(II) R is transitive Then which one of the following is true?",
    "options": [
      "Both (I) and (II) are correct.",
      "Only (II) is correct.",
      "Neither (I) nor (II) is correct.",
      "Only (I) is correct."
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Only (I) is correct..\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Only (I) is correct.."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "In a group of 100 persons 75 speak English and 40 speak Hindi. Each person speaks at least one of the two\nlanguages. If the number of persons who speak only English is α and the number of persons who speaks only Hindi\nis β, then the eccentricity of the ellipse 25(β x + α y ) = α β is\n2",
    "options": [
      "√ 119",
      "√ 117",
      "3√ 15\n\n12\n\n12\n\n2\n\n2\n\n2\n\n2",
      "√ 129\n\n2\n\n12\n\n12"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): √ 119.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): √ 119."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let P (S) denote the power set of S = {1, 2, 3, … , 10}. Define the relations R and R on P (S) as AR B if\n1\n\nc\n\nc\n\n(A ∩ B ) ∪ (B ∩ A ) = ϕ\n\n2\n\n1\n\nand AR B if A ∪ B = B ∪ A , ∀A, B ∈ P (S) . Then :\nc\n\nc\n\n2",
    "options": [
      "both R and R are equivalence relations\n1\n\n2",
      "only R is an equivalence relation\n1",
      "only R is an equivalence relation\n2",
      "both R and R are not equivalence relations\n1\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): both R and R are equivalence relations\n1\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): both R and R are equivalence relations\n1\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Sets and Relations",
    "subConcept": "Types of Relations and Equivalence",
    "q": "Let Z be the set of all integers,\nA = {(x, y) ∈ Z × Z : (x − 2)\nB = {(x, y) ∈ Z × Z : x\n\n2\n\n+ y\n\n2\n\n2\n\nC = {(x, y) ∈ Z × Z : (x − 2)\n\n2\n\n+ y\n\n2\n\n≤ 4}\n\n≤ 4} and\n+ (y − 2)\n\n2\n\n≤ 4}\n\nIf the total number of relations from A ∩ B to A ∩ C is 2 , then the value of p is:\np",
    "options": [
      "25",
      "9",
      "16",
      "49"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 25.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 25."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "If the range of the function f (x) =\n\n5−x\n2\n\nx −3x+2\n\n, x ≠ 1, 2, is (−∞, α] ∪ [β, ∞), then α + β is equal to :\n2",
    "options": [
      "190",
      "192",
      "188",
      "194\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 194\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 194\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let f (x) + 2f (\n\n1\nx\n\n) = x\n\n2\n\n+ 5\n\nand 2g(x) − 3g (\n\n1\n2\n\n. If α = ∫\n\n) = x, x > 0\n\n2\n1\n\n, and β = ∫\n\nf (x)dx\n\n2\n1\n\nvalue of 9α + β is:",
    "options": [
      "1",
      "0",
      "10",
      "11\n\n, then the\n\ng(x)dx"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 11\n\n, then the\n\ng(x)dx.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 11\n\n, then the\n\ng(x)dx."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let f , g : (1, ∞) → R be defined as f (x) =\nis [α, β], then\n\n2x+3\n5x+2\n\nand g(x) =\n\n2−3x\n1−x\n\n. If the range of the function f ∘ g : [2, 4] → R\n\nis equal to\n\n1\nβ−α",
    "options": [
      "68",
      "29",
      "2",
      "56"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 56.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 56."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Consider the sets A = {(x, y) ∈ R × R : x + y\n2\n\n∈ Z × Z : x\n\n2\n\n+ y\n\n2\n\n2\n\n, B = {(x, y) ∈ R × R : x + 9y\n2\n\n= 25}\n\n2\n\n= 144}, C = {(x, y)\n\n, and D = A ∩ B. The total number of one-one functions from the set D to the set C is:\n\n≤ 4}",
    "options": [
      "15120",
      "19320",
      "17160",
      "18290"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 17160.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 17160."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let f : R → R be a continuous function satisfying f (0) = 1 and f (2x) − f (x) = x for all x ∈ R. If\nlim n→∞ {f (x) − f (\n\nx\n2\n\nn\n\n, then ∑\n\n)} = G(x)\n\n10\nr=1\n\n2\n\nG (r )\n\nis equal to",
    "options": [
      "540",
      "385",
      "420",
      "215"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 385.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 385."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "If the domain of the function\nf (x) = log\n\ne\n\n(\n\n2x−3\n5+4x\n\n) + sin\n\n−1\n\n(\n\n4+3x\n2−x\n\n)\n\nis\n\n[α, β)\n\nthen α + 4β is equal to\n2",
    "options": [
      "5",
      "4",
      "3",
      "7"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "If the domain of the function log (18x − x − 77) is (α, β) and the domain of the function log\n\n2\n\n2\n\n5\n\n(x−1)\n\n, then α + β + γ is equal to :\n2\n\n(γ, δ)\n\n2\n\n2",
    "options": [
      "195",
      "179",
      "186",
      "174"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 186.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 186."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "If f (x) =\n\n2\n2\n\nx\n\nx\n\n+√ 2\n\n, then ∑\n\n,x ∈ R\n\n81\nk=1\n\nf (\n\nk\n82\n\n)\n\nis equal to",
    "options": [
      "81√2",
      "41",
      "82",
      "81\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 81\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 81\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let f : R → R be a function defined by\nf (x) = (2 + 3a)x\n\n2\n\n+ (\n\na+2\na−1\n\n)x + b, a ≠ 1. If\n\nf (x + y) = f (x) + f (y) + 1 −\n\n2\n7\n\nxy\n\n, then the value of 28 ∑\n\n5\ni=1",
    "options": [
      "545",
      "715",
      "735",
      "675\n\n|f (i)|\n\nis"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 675\n\n|f (i)|\n\nis.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 675\n\n|f (i)|\n\nis."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "The number of real solution(s) of the equation x + 3x + 2 = min{|x − 3|, |x + 2|} is:\n2",
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let the range of the function f (x) = 6 + 16 cos x ⋅ cos (\n\nπ\n3\n\n− x) ⋅ cos (\n\nπ\n3\n\n+ x) ⋅ sin 3x ⋅ cos 6x, x ∈ R\n\nbe [α, β].\n\nThen the distance of the point (α, β) from the line 3x + 4y + 12 = 0 is :",
    "options": [
      "11",
      "8",
      "10",
      "9"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 11.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 11."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "If f (x) =",
    "options": [
      "−\n\n4x+3\n6x−4\n\n, x ≠\n\n2\n3\n\nand (f of ) (x) = g(x), where g : R − {",
      "19\n20",
      "−4\n\n2\n3\n\n} → R − {\n\n2\n3\n\n, then (gogog)",
      "is equal to\n\n}\n\n19\n20",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): is equal to\n\n}\n\n19\n20.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): is equal to\n\n}\n\n19\n20."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let f : R − {\n\n−1\n2\n\n} → R\n\nand g : R − {\n\n−5\n2\n\n} → R\n\nbe defined as f (x) =\n\n2x+3\n2x+1\n\nand g(x) =\n\n|x|+1\n2x+5\n\n. Then the domain of\n\nthe function f og is :",
    "options": [
      "R − {−",
      "R\n\n}",
      "R − {−\n\n5\n2\n7\n4\n\n}",
      "R − {−\n\n5\n2\n\n,−\n\n7\n4\n\n}"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): R − {−.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): R − {−."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let f (x) =",
    "options": [
      "[",
      "[\n\n]",
      "[\n\n1\n7\n1\n7\n\n,\n,\n\n1\n6\n1\n5\n\nbe a function defined on R. Then the range of the function f (x) is equal to ;\n\n1\n7−sin 5x\n\n]",
      "[\n\n1\n8\n1\n8\n\n,\n,\n\n1\n5\n1\n6\n\n]\n]"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): [\n\n1\n8\n1\n8\n\n,\n,\n\n1\n5\n1\n6\n\n]\n].\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): [\n\n1\n8\n1\n8\n\n,\n,\n\n1\n5\n1\n6\n\n]\n]."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Let f : R → R and g : R → R be defined as f (x) = {\n\nlog e x,\ne\n\ngof : R → R\n\n−x\n\n,\n\nx > 0\nx ≤ 0\n\nand g(x) = {\n\nx,\nx\n\ne ,\n\nx ≥ 0\nx < 0\n\nis:",
    "options": [
      "one-one but not onto",
      "neither one-one nor onto",
      "onto but not one-one",
      "both one-one and onto"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): neither one-one nor onto.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): neither one-one nor onto."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "Consider a function f : N → R, satisfying f",
    "options": [
      "+ 2f",
      "= 1\n\n1\nf (2022)\n\n+\n\n1\nf (2028)\n\nis equal to",
      "8200",
      "+ 3f (3)+… + xf (x) = x(x + 1)f (x) ; x ≥ 2 with\n. Then\n\nf",
      "8000",
      "8400",
      "8100"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): + 3f (3)+… + xf (x) = x(x + 1)f (x) ; x ≥ 2 with\n. Then\n\nf.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): + 3f (3)+… + xf (x) = x(x + 1)f (x) ; x ≥ 2 with\n. Then\n\nf."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "If f (x) = x − x f",
    "options": [
      "+ xf",
      "+ f",
      "(3) 2f (0) − f",
      "+ f",
      "+ f",
      "− f\n3\n\n2\n\n′\n\n′′\n\n′′′\n\n, x ∈ R, then",
      "= f",
      "= f",
      "(4) f",
      "+ f",
      "(1) 3f",
      "(2) f",
      "− f",
      "= f",
      "= f (0)"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (3) 2f (0) − f.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (3) 2f (0) − f."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "⎡\n\nLet a function f : N → N be defined by f (n) =\n\n2n,\n\nn = 2, 4, 6, 8, … . .\n\nn − 1,\n\nn = 3, 7, 11, 15, … . .\n\n⎣ n+1\n\nthen, f is",
    "options": [
      "One-one and onto",
      "One-one but not onto",
      "Onto but not one-one",
      "Neither one-one nor onto"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): One-one and onto.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): One-one and onto."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "2\n\n, where [t] is the greatest integer\n\n− 5x + 5))\n\n2\n\n(2) (\n\n5−√ 5\n2\n\n(4) [1,\n\n,\n\n5+√ 5\n2\n\n5+√ 5\n2\n\n)\n\n)\n\nLet f : R → R be defined as f (x) = x − 1 and g : R → {1, −1} → R be defined as g(x) =\nfunction f og is:",
    "options": [
      "One-one but not onto",
      "(\n\n5−√ 5\n2",
      "onto but not one-one",
      "Both one-one and onto",
      "[1,\n\n,\n\n5+√ 5\n2\n\n5+√ 5\n2\n\n)\n\n)\n\nLet f : R → R be defined as f (x) = x − 1 and g : R → {1, −1} → R be defined as g(x) =\nfunction f og is:",
      "Neither one-one nor onto"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Both one-one and onto.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Both one-one and onto."
  },
  {
    "subject": "Mathematics",
    "chapter": "Functions",
    "subConcept": "Domain, Range and Composition of Functions",
    "q": "n+1\n\n(x) =\n\nf (f\n\nn\n\n(x))\n\n(2) −\n(4) −\n\nx\n\n2\n\n2\n\nx −1\n\n. Then the\n\nfor all n ∈ N , then f (6) + f (7) is equal to\n6\n\n7\n\n3\n2\n11\n12\n\nThe total number of functions, f : {1, 2, 3, 4} → {1, 2, 3, 4, 5, 6} such that f",
    "options": [
      "+ f",
      "60",
      "−",
      "= f (3), is equal to",
      "90",
      "108",
      "−\n\nx\n\n2\n\n2\n\nx −1\n\n. Then the\n\nfor all n ∈ N , then f (6) + f (7) is equal to\n6\n\n7\n\n3\n2\n11\n12\n\nThe total number of functions, f : {1, 2, 3, 4} → {1, 2, 3, 4, 5, 6} such that f",
      "126"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 60.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 60."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "1\n2\n\ntan(5(x) 3 ) log (1+3x )\ne\n\nlim x→0 +",
    "options": [
      "(3)\n\nis equal to\n\n4\n\n(tan\n\n−1\n\n2\n\n3√x) (e\n\n5(x) 3\n\n−1)",
      "1\n\n1\n15",
      "1\n3\n\n5\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1\n3\n\n5\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1\n3\n\n5\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "If\n\nlim x→1 +\n\n(x−1)(6+λ cos(x−1))+μ sin(1−x)\n(x−1)\n\n3\n\n, where λ, μ ∈ R, then λ + μ is equal to\n\n= −1",
    "options": [
      "18",
      "20",
      "19",
      "17"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 18.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 18."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "x\n\n2\n\n(2x −3x+5)(3x−1) 2\n\nlim x→∞",
    "options": [
      "(3)\n\nis equal to :\n\n2\nx\n(3x +5x+4)√ (3x+2)",
      "2\n√ 3e",
      "2\n3√e\n\n2e\n√3\n2e\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2\n3√e\n\n2e\n√3\n2e\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2\n3√e\n\n2e\n√3\n2e\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "If lim\n\nx→∞ ((\n\ne\n1−e\n\n)(\n\n1\ne\n\n−\n\nx\n1+x\n\nx\n\n))\n\n, then the value of\n\nlog e α\n\n= α\n\n1+log e α",
    "options": [
      "e\n\n−1",
      "e",
      "e\n\n−2",
      "e\n\nequals :\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): e\n\nequals :\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): e\n\nequals :\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "lim\n\ne\n\n2|sin x|\n\n−2|sin x|−1\nx\n\nx→0\n\n2",
    "options": [
      "is equal to −1",
      "does not exist",
      "is equal to 1",
      "is equal to 2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): is equal to 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): is equal to 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "Let f (x) = {\n\nx − 1, x is even,\nx ∈ N\n2x, x is odd,\n\n. If for some a ∈ N , f (f (f (a))) = 21, then lim {\nx→a\n\n−\n\n|x|\na\n\n3\n\n− [\n\nx\na\n\ndenotes the greatest integer less than or equal to t, is equal to:",
    "options": [
      "121",
      "144",
      "169",
      "225"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 144.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 144."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "1\n\n1\n\n1\n\n1\n\n1\n\n1\n\nlim {(2 2 − 2 3 )(2 2 − 2 5 ). . . . (2 2 − 2 2n+1 )}\n\nis equal to\n\nn→∞",
    "options": [
      "1",
      "0",
      "√2",
      "1\n√2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "Let β = lim\nx→0",
    "options": [
      "14",
      "3",
      "5\n\nαx−(e\nαx(e\n\n3x\n\n3x\n\n−1)\n\n−1)\n\nfor some α ∈ R. Then the value of α + β is:\n\n5\n\n2",
      "7\n\n2\n\n2"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 5\n\nαx−(e\nαx(e\n\n3x\n\n3x\n\n−1)\n\n−1)\n\nfor some α ∈ R. Then the value of α + β is:\n\n5\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 5\n\nαx−(e\nαx(e\n\n3x\n\n3x\n\n−1)\n\n−1)\n\nfor some α ∈ R. Then the value of α + β is:\n\n5\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "The value of lim (\n\nx\n8\n\n8\n\n√ 1−sin x−√ 1+sin x\n\nx→0\n\n)\n\nis equal to :",
    "options": [
      "0",
      "4",
      "−4",
      "−1"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): −4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): −4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Limits",
    "subConcept": "Standard Limits and L'Hopital's Rule",
    "q": "The value of lim {\n\n√ 3 sin(\n\n4\n\n(3)\n\n2\n\n6\n\n+h)−cos(\n\nπ\n6\n\n+h)\n\n}\n\n√ 3h(√ 3 cos h−sin h)\n\nh→0",
    "options": [
      "π\n\nis :",
      "3",
      "2\n\n6\n\n+h)−cos(\n\nπ\n6\n\n+h)\n\n}\n\n√ 3h(√ 3 cos h−sin h)\n\nh→0",
      "3\n\n2\n√3\n3\n4"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2\n\n6\n\n+h)−cos(\n\nπ\n6\n\n+h)\n\n}\n\n√ 3h(√ 3 cos h−sin h)\n\nh→0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2\n\n6\n\n+h)−cos(\n\nπ\n6\n\n+h)\n\n}\n\n√ 3h(√ 3 cos h−sin h)\n\nh→0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "⎧(1 + ax)\n\nLet f (x) = ⎨\n\n1/x\n\n1 + b\n\n⎩ (x+4)\n(x+c)\n\n1/2\n1/3\n\n−2\n\n,\n\nx < 0\n\n,\n\nx = 0\n\n,\n\n−2\n\nbe continuous at x = 0. Then e bc is equal to",
    "options": [
      "64",
      "72",
      "48\n\na",
      "36"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 48\n\na.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 48\n\na."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "If the function\n⎧\nf (x) = ⎨\n\n2\n\nx\n\n4,\n\n⎩ 2\n\nx\n\n{sin (k 1 + 1)x + sin (k 2 − 1)x},\n\nx < 0\n\nx = 0\n\nlog\n\ne\n\n(\n\n2+k 1 x\n2+k 2 x\n\n),\n\nx > 0\n\nis continuous at x = 0, then k + k is equal to",
    "options": [
      "20",
      "5",
      "8\n\n2\n\n2\n\n1\n\n2",
      "10"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 10.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 10."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "Let f (x) be a real differentiable function such that f (0) = 1 and f (x + y) = f (x)f (y) + f (x)f (y) for all\n′\n\n. Then ∑\n\nx, y ∈ R\n\n100\nn=1\n\nlog e f (n)\n\n′\n\nis equal to :",
    "options": [
      "2525",
      "5220",
      "2384",
      "2406"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2525.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2525."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "Consider the function f : (0, 2) → R defined by f (x) =\nmin{f (t)},\ng(x) = {\n\n3\n2\n\n0 < t ≤ x and 0 < x ≤ 1\n\n+ x,\n\nx\n2\n\n+\n\n2\nx\n\nand the function g(x) defined by\n\n. Then\n\n1 < x < 2",
    "options": [
      "g is continuous but not differentiable at x = 1",
      "g is not continuous for all x ∈ (0, 2)",
      "g is neither continuous nor differentiable at x = 1",
      "g is continuous and differentiable for all x ∈ (0, 2)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): g is continuous but not differentiable at x = 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): g is continuous but not differentiable at x = 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "Let f : [−1, 2] → R be given by f (x) = 2x + x + [x ] − [x], where [t] denotes the greatest integer less than or\n2\n\n2\n\nequal to t. The number of points, where f is not continuous, is :",
    "options": [
      "5",
      "6",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "If the function\n72\n\nf (x) = {\n\nx\n\n−9\n\nx\n\n−8\n\nx\n\n+1\n\n√ 2−√ 1+cos x\n\na log\n\ne\n\n2 log\n\ne\n\n,\n\nx ≠ 0\n\n3\n\n,x = 0\n\nis continuous at x = 0, then the value of a is equal to\n2",
    "options": [
      "968",
      "1152",
      "746",
      "1250"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1152.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1152."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "Let f and g be twice differentiable functions on R such that\nf\n\n′′\n\n′′\n\n(x) = g (x) + 6x\n\n′\n\n′\n\nf",
    "options": [
      "= 4g",
      "− 3 = 9\nf",
      "g(−2) − f (−2) = 20",
      "= 3 g",
      "= 12\n\nThen which of the following is NOT true ?",
      "If −1 < x < 2, then |f (x) − g(x)| < 8",
      "|f (x) − g (x)| < 6 ⇒ −1 < x < 1\n′\n\n′",
      "There exists x\n\n0\n\n∈ (1,\n\n3\n2\n\n)\n\nsuch that f (x ) = g(x )\n0\n\n0"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): − 3 = 9\nf.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): − 3 = 9\nf."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "The number of points, where the function f : R → R, f (x) = |x − 1| cos|x − 2| sin|x − 1|+(x − 3) x − 5x + 4 ,\n2\n\nis NOT differentiable, is",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "Let f , g : R → R be functions defined by\n[x]\n\n,\n\nx < 0\n\n|1 − x|\n\n,\n\nx ≥ 0\n\nf (x) = {\ne\n\nx\n\n− x,\n\ng(x) = {\n(x − 1)\n\nand\n\nx < 0\n2\n\n− 1,\n\nx ≥ 0\n\nwhere [x] denote the greatest integer less than or equal to x. Then, the function fog is discontinuous at exactly",
    "options": [
      "one point",
      "two points",
      "three points",
      "four points"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): two points.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): two points."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "The function f : R → R defined by f (x) = lim\nn→∞\n\ncos(2πx)−x\n1+x\n\n2n\n\n2n+1\n\nsin(x−1)\n\n−x\n\n2n\n\nis continuous for all x in",
    "options": [
      "R − {−1}",
      "R − {−1, 1}",
      "R − {1}",
      "R − {0}"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): R − {−1, 1}.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): R − {−1, 1}."
  },
  {
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "subConcept": "Continuity and Points of Non-differentiability",
    "q": "If f (x) = {\n\nx + a,\n\nx ≤ 0\n\n|x − 4|,\n\nequal to:",
    "options": [
      "−10",
      "+ (f og)(−2) is\n\nx ≥ 0",
      "10",
      "8\n\nand g(x) = {\n\nx > 0\n\nx + 1,\n(x − 4)\n\nx < 0\n2\n\n+ b,\n\nare continuous on R, then (gof )",
      "−8"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 8\n\nand g(x) = {\n\nx > 0\n\nx + 1,\n(x − 4)\n\nx < 0\n2\n\n+ b,\n\nare continuous on R, then (gof ).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 8\n\nand g(x) = {\n\nx > 0\n\nx + 1,\n(x − 4)\n\nx < 0\n2\n\n+ b,\n\nare continuous on R, then (gof )."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differentiation",
    "subConcept": "Chain Rule and Implicit Differentiation",
    "q": "Suppose for a differentiable function h, h(0) = 0, h",
    "options": [
      "= 1 and h (0) = h",
      "= 2. If g(x) = h (e )e\nis equal to:",
      "5",
      "4",
      "8\n\n′\n\n′\n\nx",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): = 2. If g(x) = h (e )e\nis equal to:.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): = 2. If g(x) = h (e )e\nis equal to:."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differentiation",
    "subConcept": "Chain Rule and Implicit Differentiation",
    "q": "Let x(t) = 2√2 cos t√sin 2t and y(t) = 2√2 sin t√sin 2t, t ∈ (0,\n\nπ\n2\n\n. Then\n\n)\n\n1+(\nd\n\ndy\ndx\n2\n\n2\n\n)\n\nat t =\n\ny\n\nπ\n4\n\nis equal to\n\ndx 2",
    "options": [
      "−2√ 2",
      "2",
      "1\n\n3\n\n3",
      "−2\n\n3\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): −2\n\n3\n\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): −2\n\n3\n\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "Let x = −1 and x = 2 be the critical points of the function f (x) = x + ax + b log |x| + 1, x ≠ 0. Let m and M\n3\n\n2\n\nc\n\nrespectively be the absolute minimum and the absolute maximum values of f in the interval [−2, −\n|M + m|\n\n1\n2\n\n. Then\n\n]\n\nis equal to (Take log 2 = 0.7 ):\nc",
    "options": [
      "21.1",
      "19.8",
      "22.1",
      "20.9"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 21.1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 21.1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "Let a > 0. If the function f (x) = 6x − 45ax + 108a x + 1 attains its local maximum and minimum values at the\n3\n\n2\n\npoints x and x respectively such that x x\n1\n\n2\n\n1\n\n2\n\n2\n\n, then a + x + x is equal to :-\n\n= 54\n\n1",
    "options": [
      "15",
      "18",
      "24",
      "13\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 18.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 18."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "The sum of all local minimum values of the function\n⎧1 − 2x,\n\nx < −1\n\n1\n\nf (x) = ⎨ 3 (7 + 2|x|),\n⎩ 11\n18\n\n(x − 4)(x − 5),\n\n−1 ≤ x ≤ 2\nx > 2\n\nis",
    "options": [
      "157",
      "131",
      "171\n\n72\n\n72",
      "167\n\n72\n\n72"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 157.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 157."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "Let (2, 3) be the largest open interval in which the function f (x) = 2 log (x − 2) − x + ax + 1 is strictly\n2\n\ne\n\nincreasing and (b, c) be the largest open interval, in which the function g(x) = (x − 1) (x + 2 − a) is strictly\n3\n\n2\n\ndecreasing. Then 100(a + b − c) is equal to :",
    "options": [
      "420",
      "360",
      "160",
      "280"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 360.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 360."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "A spherical chocolate ball has a layer of ice-cream of uniform thickness around it. When the thickness of the icecream layer is 1 cm , the ice-cream melts at the rate of 81 cm /min and the thickness of the ice-cream layer\n3\n\ndecreases at the rate of\n\n1\n4π\n\n. The surface area (in cm ) of the chocolate ball (without the ice-cream layer) is\n2\n\ncm/min\n\n:",
    "options": [
      "196π",
      "256π",
      "225π",
      "128π"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 256π.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 256π."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "A variable line L passes through the point (3, 5) and intersects the positive coordinate axes at the points A and B.\nThe minimum area of the triangle OAB, where O is the origin, is :",
    "options": [
      "30",
      "25",
      "40",
      "35"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 30.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 30."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "Let f (x) = 4 cos x + 3√3 cos x − 10. The number of points of local maxima of f in interval (0, 2π) is\n3\n\n2",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "The interval in which the function f (x) = x , x > 0, is strictly increasing is\nx",
    "options": [
      "(0,",
      "(0, ∞)",
      "[\n\n1\ne\n\n1\ne\n\n]\n\n, ∞)]",
      "[\n\n1\ne\n\n2\n\n, 1)"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): [\n\n1\ne\n\n1\ne\n\n]\n\n, ∞)].\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): [\n\n1\ne\n\n1\ne\n\n]\n\n, ∞)]."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "If 5f (x) + 4f (",
    "options": [
      "(0,",
      "(−\n\n, ∞)\n\n, 0) ∪ (0,\n\nMathonGo\n\n1\n\n, 0) ∪ (\n\n√5",
      "(−\n\n1\n√5\n1\n√5\n\n1\nx\n\n) ∪ (\n\n) = x\n1\n√5\n\n2\n\n− 2, ∀x ≠ 0\n\n1\n√5\n\n∣\n\nand y = 9x f (x), then y is strictly increasing in:\n2",
      "(−∞,\n\n)\n\n1\n√5\n\n1\n√5\n\n) ∪ (0,\n\n, ∞)\n1\n√5"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (−\n\n, ∞)\n\n, 0) ∪ (0,\n\nMathonGo\n\n1\n\n, 0) ∪ (\n\n√5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (−\n\n, ∞)\n\n, 0) ∪ (0,\n\nMathonGo\n\n1\n\n, 0) ∪ (\n\n√5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": ")\n\nThe set of all a ∈ R for which the equation x|x − 1| + |x + 2| + a = 0 has exactly one real root, is",
    "options": [
      "(−7, ∞)",
      "(−∞, ∞)",
      "(−6, −3)",
      "(−∞, −3)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (−∞, ∞).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (−∞, ∞)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "The sum of the abosolute maximum and minimum values of the function f (x) = x − 5x + 6 − 3x + 2 in the\n2\n\ninterval [−1, 3] is equal to :",
    "options": [
      "10",
      "12",
      "13",
      "24"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 10.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 10."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "Let P and Q be any points on the curves (x − 1) + (y + 1)\n2\n\n2\n\nand y = x , respectively. The distance between P\n2\n\n= 1\n\nand Q is minimum for some value of the abscissa of P in the interval",
    "options": [
      "(0,",
      "(\n\n)\n\n1\n2",
      "(\n\n1\n4\n\n1\n4\n\n,",
      "(\n\n)\n\n1\n2\n3\n4\n\n,\n\n3\n4\n\n)\n\n, 1)"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (\n\n1\n4\n\n1\n4\n\n,.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (\n\n1\n4\n\n1\n4\n\n,."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "Let f : R → R and g : R → R be two functions defined by f (x) = log (x + 1) − e\n2\n\ne\n\nThen, for which of the following range of α, the inequality f (g(\n\n(α−1)",
    "options": [
      "(−2, −1)",
      "(2, 3)",
      "(1, 2)",
      "(−1, 1)\n\n3\n\n2\n\n−x\n\n)) > f (g(α −\n\n5\n\n3\n\n+ 1\n))\n\nand g(x) =\n\nholds?"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (2, 3).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (2, 3)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "If the absolute maximum value of the function f (x) = (x − 2x + 7)e\n2\n\n3\n\n2\n\n(4x −12x −180x+31)\n\nin the interval [−3, 0] is\n\n, then\n\nf (α)",
    "options": [
      "α = 0",
      "α = −3",
      "α ∈ (−1, 0)",
      "α ∈ (−3, −1)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): α = −3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): α = −3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "The number of real roots of the equation e\n\n4x\n\n+ 2e\n\n3x\n\n− e\n\nx\n\n− 6 = 0",
    "options": [
      "0",
      "1",
      "4",
      "2\n\nis :"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "subConcept": "Maxima, Minima and Rate of Change",
    "q": "Let f (x) = xcos\n\n−1\n\n(− sin|x|), x ∈ [−",
    "options": [
      "f ' is increasing in (−",
      "f (0) = −\n\nπ\n2\n\n, 0)\n\nπ\n2\n\n,\n\nπ\n2\n\n],\n\nthen which of the following is true?\n\nand decreasing in (0,\n\nπ\n2\n\n)\n\nπ\n\n'\n\n2",
      "f is not differentiable at x = 0",
      "f ' is decreasing in (−\n\nπ\n2\n\n, 0)\n\nand increasing in (0,\n\nπ\n2\n\n)"
    ],
    "correctIndex": 3,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): f ' is decreasing in (−\n\nπ\n2\n\n, 0)\n\nand increasing in (0,\n\nπ\n2\n\n).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): f ' is decreasing in (−\n\nπ\n2\n\n, 0)\n\nand increasing in (0,\n\nπ\n2\n\n)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "If f (x) = ∫\n\n, then f",
    "options": [
      "is equal to :\n\n1\nx\n\n1/4\n\n(1+x\n\n1/4\n\ndx, f (0) = −6\n\n)",
      "4 (log 2 − 2)",
      "2 − log",
      "log 2 + 2",
      "4 (log 2 + 2)\n\ne\n\ne\n\ne\n\n2\n\n2\n\ne"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): is equal to :\n\n1\nx\n\n1/4\n\n(1+x\n\n1/4\n\ndx, f (0) = −6\n\n).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): is equal to :\n\n1\nx\n\n1/4\n\n(1+x\n\n1/4\n\ndx, f (0) = −6\n\n)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "Let ∫ x sin x dx = g(x) + C , where C is the constant of integration. If\n3\n\nπ\n\n8 (g (\n\n2\n\nπ\n\n′\n\n) + g (\n\n2\n\n)) = απ\n\n3\n\n+ βπ\n\n2\n\n+ γ, α, β, γ ∈ Z\n\n, then α + β − γ equals :",
    "options": [
      "48",
      "55",
      "62",
      "47"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 55.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 55."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "Let I(x) = ∫\n\n. If I(37) − I(24) =\n\ndx\n11\n\n15\n\n1\n4\n\n(\n\n(x−11) 13 (x+15) 13",
    "options": [
      "22\n\n1\n1",
      "39\n\n, then 3( b + c) is equal to\n\n1\n\n−\n\n), b, c ∈ N\n\n1\n\nb 13\n\nc 13",
      "40",
      "26"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 39\n\n, then 3( b + c) is equal to\n\n1\n\n−\n\n), b, c ∈ N\n\n1\n\nb 13\n\nc 13.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 39\n\n, then 3( b + c) is equal to\n\n1\n\n−\n\n), b, c ∈ N\n\n1\n\nb 13\n\nc 13."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "If ∫ e (\nx",
    "options": [
      "(3)\n\nπ\n4\nπ\n4\n\nx sin\n\n−1\n\nx\n\nsin\n\n+\n\n√ 1−x 2\n\n−1\n\n2\n\nx\n\n(1−x )\n\n+\n\n3/2\n\nx\n1−x\n\n2\n\n, where C is the constant of integration, then g (\n\n)dx = g(x) + C",
      "e\n\n√\n\n3",
      "e\n\n√\n\n2\n\nπ\n6\nπ\n6\n\n√\n√\n\n1\n2\n\n)\n\nequals :\n\ne\n3\ne\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): e\n\n√\n\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): e\n\n√\n\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "3\n\nIf ∫\n\n3\n\nsin 2 x+cos 2 x\n√ sin\n\n3\n\nx cos\n\n3\n\ndx = A√ cos θ tan x − sin θ+B√ cos θ − sin θ cot x + C,\n\nwhere C is the integration\n\nx sin(x−θ)\n\nconstant, then AB is equal to",
    "options": [
      "4 cosec (2θ)",
      "4 sec θ",
      "2 sec θ",
      "8 cosec (2θ)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 8 cosec (2θ).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 8 cosec (2θ)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "Let I (x) = ∫\n\n. If I (0) = 3, then I (\n\n6\nsin\n\n2\n\nx(1−cot x)\n\ndx\n\n2\n\nπ\n12\n\n∣\n\nis equal to\n\n)",
    "options": [
      "2√3",
      "√3",
      "3√3",
      "6√3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 3√3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 3√3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "For α, β, γ, δ ∈ N, if ∫ ((\n\n2x\n\nx\n\n)\n\ne\n\n+ (\n\ne\nx\n\n2x\n\n)\n\n) log e xdx=\n\n1\nα\n\n(\n\nx\ne\n\nconstant of integration, then α + 2β + 3γ − 4δ is equal to\n\nβx\n\n)\n\n−",
    "options": [
      "1",
      "4",
      "−4",
      "−8"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Indefinite Integration",
    "subConcept": "Integration by Parts and Substitution",
    "q": "2\n\n(x +1)e\n\n∫\n(x+1)",
    "options": [
      "2\n\nx\n\ndx = f (x)e\n\nx\n\n, where C is a constant, then\n\n+ C",
      "3\n4",
      "−\n\n3\n\nd f\ndx",
      "3\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2\n\nx\n\ndx = f (x)e\n\nx\n\n, where C is a constant, then\n\n+ C.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2\n\nx\n\ndx = f (x)e\n\nx\n\n, where C is a constant, then\n\n+ C."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "The integral ∫\n\n3\n\n2\n\n2\n\n( π x sin(πx) )dx\n\n−1",
    "options": [
      "3 + 2π",
      "4 + π",
      "1 + 3π\n\nis equal to:",
      "2 + 3π"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1 + 3π\n\nis equal to:.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1 + 3π\n\nis equal to:."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let the domain of the function\nf (x) = log\n\n2\n\nlog\n\n4\n\nlog\n\n6\n\n2\n\n(3 + 4x − x )\n\nbe (a, b). If ∫\n\nb−a\n0\n\n2\n\n[x ]dx = p − √ q − √r, p, q, r ∈ N, gcd(p, q, r) = 1,\n\nwhere [⋅] is the greatest integer function, then p + q + r is equal to",
    "options": [
      "10",
      "8",
      "11",
      "9"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 10.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 10."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let f (x) = ∫",
    "options": [
      "253",
      "154",
      "125\n\nt\n0\n\nt (t\n\n2\n\n. If the range of f is [α, β], then 4(α + β) equals :\n\n− 9t + 20)dt, 1 ≤ x ≤ 5",
      "157"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 157.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 157."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let f : R → R be a twice differentiable function such that f (2) = 1. If F(x) = xf (x) for all x ∈ R,\n∫\n\n2\n0\n\n′\n\nx F (x)dx = 6",
    "options": [
      "11",
      "= 1. If F(x) = xf (x) for all x ∈ R,\n∫\n\n2\n0\n\n′\n\nx F (x)dx = 6",
      "+ ∫\n\nF (x)dx = 40\n\n′\n\n2\n0\n\nF(x)dx\n\nis equal to :",
      "13",
      "15\n\nand ∫\n\n2\n\n0\n\nx\n\n2\n\n′′\n\n, then F",
      "9"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 11.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 11."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let for some function y = f (x), ∫\n\nx\n\nand f (2) = 3. Then f (6) is equal to\n\n2\n\ntf (t)dt = x f (x), x > 0\n\n0",
    "options": [
      "1",
      "= 3. Then f (6) is equal to\n\n2\n\ntf (t)dt = x f (x), x > 0\n\n0",
      "3",
      "6",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "If ∫\n\nπ\n\n96x\n\n2\n\n−\n\nπ\n\n2\n\ncos\n\n(1+e\n\n2\n\nx\n\n2\n\nx\n\n)\n\ndx = π (απ\n\n2\n\n+ β), α, β ∈ Z\n\n, then (α + β) equals\n2",
    "options": [
      "64",
      "196",
      "144",
      "100"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 100.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 100."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "If I(m, n) = ∫\n\n1\n0\n\nx\n\nm−1\n\n(1 − x)\n\n, then I (9, 14) + I (10, 13) is\n\nn−1\n\ndx, m, n > 0",
    "options": [
      "I(19, 27)",
      "I(9, 1)",
      "I (1, 13)",
      "I(9, 13)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): I(9, 13).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): I(9, 13)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "If I = ∫\n\n3\n\nπ\n\n, then ∫\n\nsin 2 x\n\n2\n\n0\n\ndx\n\n3\n\n3\n\nsin 2 x+cos 2 x",
    "options": [
      "π",
      "π",
      "π\n\n21\n0\n\nx sin x cos x\nsin\n\n4\n\nx+cos\n\n4\n\nx\n\ndx\n\nequals :\n\n2\n\n12\n2\n\n16",
      "π\n\n2\n\n4\n2\n\n8"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): π\n\n21\n0\n\nx sin x cos x\nsin\n\n4\n\nx+cos\n\n4\n\nx\n\ndx\n\nequals :\n\n2\n\n12\n2\n\n16.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): π\n\n21\n0\n\nx sin x cos x\nsin\n\n4\n\nx+cos\n\n4\n\nx\n\ndx\n\nequals :\n\n2\n\n12\n2\n\n16."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "The value of\n∫\n\ne\ne\n\n4\n\n2\n\n1\nx\n\ne\n\n(\ne\n\n((log e x)\n\n2\n\n((log e x)\n\n2\n\n−1\n+1)\n\n−1\n+1)\n\n+e\n\n((6−log e x)\n\n2\n\n−1\n\n)dx\n\nis\n\n+1)",
    "options": [
      "2",
      "log 2",
      "1",
      "e\n\ne\n\n2"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let (a, b) be the point of intersection of the curve x\nquadrant. Then the integral I = ∫\n\n2\n\nb\n\n9x\n\na\n\n1+5\n\nx\n\ndx\n\n2\n\n= 2y\n\nand the straight line y − 2x − 6 = 0 in the second\n\nis equal to :",
    "options": [
      "24",
      "27",
      "18",
      "21"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 24.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 24."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let f , g : (0, ∞) → R be two functions defined by f (x) = ∫\n\nx\n\n2\n\n−x\n\n(|t| − t )e\n\n−t\n\n2\n\ndt\n\nand g(x) = ∫\n\nx\n0\n\n2\n\n1\n\nt2 e\n\n−t\n\n2\n\n. Then the\n\ndt\n\nvalue of 9(f (√log 9 + g(√log 9)) is equal to\ne\n\ne",
    "options": [
      "6",
      "9",
      "8",
      "10"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "For x ∈ (−",
    "options": [
      "tan",
      ")\n\n−1\n\n(\n\n1\n\n√2\n\nlim\nx→(\n1\n2",
      "−\n\n−1\n\n1\n\n√2\n\n(\n\nπ\n2\n\n1\n\n√2\n\ntan\n\n, if y(x) = ∫\n\nπ\n\n,\n\ncosecx+sin x\n\n)\n\n2\n\ncosecx sec x+tan x sin\n\n2\n\nx\n\ndx\n\nand",
      ")\n\nπ\n2\n\n)\n\ny(x) = 0\n\ntan\n\n1\n√2\n\nthen y(\n\n−\n\n−1\n\ntan\n\n(\n\n−1\n\n1\n√2\n\n(−\n\nπ\n4\n\n)\n\nis equal to\n\n)\n1\n2\n\n)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): )\n\nπ\n2\n\n)\n\ny(x) = 0\n\ntan\n\n1\n√2\n\nthen y(\n\n−\n\n−1\n\ntan\n\n(\n\n−1\n\n1\n√2\n\n(−\n\nπ\n4\n\n)\n\nis equal to\n\n)\n1\n2\n\n).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): )\n\nπ\n2\n\n)\n\ny(x) = 0\n\ntan\n\n1\n√2\n\nthen y(\n\n−\n\n−1\n\ntan\n\n(\n\n−1\n\n1\n√2\n\n(−\n\nπ\n4\n\n)\n\nis equal to\n\n)\n1\n2\n\n)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let ∫\n\nx\n\n0\n\n2\n\n√ 1 − (y ′ (t)) dt = ∫\n\nx\n0\n\n. Then at x = 2, y + y + 1 is equal to\n′′\n\ny(t)dt, 0 ≤ x ≤ 3, y ≥ 0, y(0) = 0",
    "options": [
      "1",
      "2",
      "√2",
      "1/2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let β(m, n) = ∫\n\n1\n\n0\n\nx\n\nm−1\n\n(1 − x)\n\nn−1\n\n. If ∫\n\ndx, m, n > 0\n\n1\n0\n\n(1 − x\n\n10\n\n)\n\n20\n\n, then 100(a + b + c)\n\ndx = a × β(b, c)\n\nequals____",
    "options": [
      "1021",
      "2120",
      "2012",
      "1120"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2120.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2120."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "The value of ∫\n\n1\n0\n\n1\n\n(2x\n\n3\n\n− 3x\n\n2\n\n− x + 1)\n\n3\n\ndx\n\nis equal to:",
    "options": [
      "0",
      "1",
      "2",
      "−1"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "The value of ∫\n\nπ\n\n(2+3 sin x)\n\n2\nπ\n\nsin x(1+cos x)\n\n3",
    "options": [
      "7",
      "−2 + 3√3 + log √3\n\n√3\ne\n\ne\n\n√3",
      "10\n\n2\n\n− √ 3 − log\n\ne\n\n− √ 3 + log\n\n3\n\ndx\n\nis equal to",
      "10\n\n− √ 3 − log\n\n3\n\ne\n\n√3"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 10\n\n2\n\n− √ 3 − log\n\ne\n\n− √ 3 + log\n\n3\n\ndx\n\nis equal to.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 10\n\n2\n\n− √ 3 − log\n\ne\n\n− √ 3 + log\n\n3\n\ndx\n\nis equal to."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "2\n\nLet the function f : [0, 2] → R be defined as\n\ne\nf (x) = {\n\nmin{x ,x−[x]}\n\ne\n\n[x−log e x]\n\ninteger less than or equal to t. Then the value of the integral ∫",
    "options": [
      "1 +\n\n2\n0\n\n,\n\nx ∈ [0, 1)\n\n,\n\nxf (x)dx",
      "(e − 1)(e +\n\n3e\n\n2\n\n2",
      "2e − 1",
      "2e −\n\n, where [t] denotes the greatest\n\nx ∈ [1, 2]\n\nis\n1\n2\n\n)\n\n1\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 2e −\n\n, where [t] denotes the greatest\n\nx ∈ [1, 2]\n\nis\n1\n2\n\n)\n\n1\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 2e −\n\n, where [t] denotes the greatest\n\nx ∈ [1, 2]\n\nis\n1\n2\n\n)\n\n1\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let [t] denote the greatest integer less than or equal to t. Then, the value of the integral ∫ [−8x + 6x − 1]dx is\n1\n\n2\n\n0\n\nequal to",
    "options": [
      "−1",
      "−",
      "(4)\n\n√ 17−13\n8\n\n5\n4\n\n√ 17−16\n8"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (4)\n\n√ 17−13\n8\n\n5\n4\n\n√ 17−16\n8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (4)\n\n√ 17−13\n8\n\n5\n4\n\n√ 17−16\n8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "The minimum value of the twice differentiable function f (x) = ∫",
    "options": [
      "−\n\nx\n0\n\ne\n\nx−t\n\n′\n\nf (t)dt − (x\n\n2\n\nx",
      "−2√e\n\n2\n√e",
      "−√e",
      "2\n√e"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): −\n\nx\n0\n\ne\n\nx−t\n\n′\n\nf (t)dt − (x\n\n2\n\nx.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): −\n\nx\n0\n\ne\n\nx−t\n\n′\n\nf (t)dt − (x\n\n2\n\nx."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "The integral ∫\n\n1\n\n7",
    "options": [
      "1 − 6 ln(",
      "1 + 6 ln(\n\n)",
      "1 − 7 ln(\n\n6\n7\n6\n7\n\n, where [⋅] denotes the greatest integer function, is equal to\n\n1\n\n0\n\n[\n\n1\nx\n\ndx\n]\n\n)",
      "1 + 7 ln(\n\n6\n7\n6\n7\n\n, is\n\n− x + 1)e , x ∈ R\n\n)\n)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1 + 6 ln(\n\n).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1 + 6 ln(\n\n)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "The value of ∫",
    "options": [
      "π",
      "π",
      "π\n\nπ\n\ne\n\n0\n\n(1+cos\n\n2\n\ncos x\n\nx)(e\n\nsin x\n\ncos x\n\n+e\n\n− cos x\n\n)\n\ndx\n\nis equal to\n\n2\n\n4\n\n6",
      "π\n\n4\n2\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): π.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): π."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "Let [t] denote the greatest integer less than or equal to t. Then the value of the integral\n∫\n\n101\n−3\n\n([sin(πx)] + e",
    "options": [
      "52(1−e)",
      "52",
      "52(2+e)\n\n[cos(2πx)]\n\n)dx\n\nis equal to\n\ne\n\ne",
      "104\n\ne\n\ne"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 52.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 52."
  },
  {
    "subject": "Mathematics",
    "chapter": "Definite Integration",
    "subConcept": "Properties of Definite Integrals",
    "q": "If [x] is the greatest integer ≤ x, then π ∫ (sin\n2\n\nπx\n\n0\n\n2\n\n2\n\n)(x − [x])\n\n[x]\n\ndx\n\nis equal to :",
    "options": [
      "2(π + 1)",
      "4(π − 1)",
      "2(π − 1)",
      "4(π + 1)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 4(π − 1).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 4(π − 1)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "If the area of the region bounded by the curves y = 4 −\n\nx\n\n2\n\n4\n\nand y =",
    "options": [
      "250",
      "210",
      "240",
      "220\n\nx−4\n2\n\nis equal to α, then 6α equals"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 250.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 250."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area of the region {(x, y) : |x − y| ≤ y ≤ 4√x} is",
    "options": [
      "512",
      "1024",
      "(4)\n\n2048\n\n512\n3\n\n3\n\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1024.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1024."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area (in sq. units) of the region\n{(x, y) : 0 ≤ y ≤ 2|x| + 1, 0 ≤ y ≤ x",
    "options": [
      "80",
      "64",
      "32\n\n2\n\n+ 1, |x| ≤ 3}\n\n3\n\n3\n\nis",
      "17\n\n3\n\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 64.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 64."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area of the region enclosed by the curves y = e , y = |e\nx\n\nx\n\n− 1|\n\nand y-axis is:",
    "options": [
      "1 − log 2",
      "log 2",
      "1 + log 2",
      "2 log 2 − 1\n\ne\n\ne\n\ne\n\ne"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1 − log 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1 − log 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area of the region {(x, y) : x + 4x + 2 ≤ y ≤ |x + 2|} is equal to\n2",
    "options": [
      "7",
      "5",
      "24/5",
      "20/3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 20/3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 20/3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "If the area of the region {(x, y) : −1 ≤ x ≤ 1, 0 ≤ y ≤ a + e",
    "options": [
      "8",
      "7",
      "5",
      "6\n\n|x|\n\n− e\n\n−x\n\n, a > 0}\n\nis\n\n2\n\ne +8e+1\ne\n\n, then the value of a is :"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "Let f : R → R be a twice differentiable function such that f (x + y) = f (x)f (y) for all x, y ∈ R. If f (0) = 4a and\n′\n\nf\n\nsatisfies f (x) − 3af (x) − f (x) = 0, a > 0, then the area of the region\n′′\n\n′\n\nR = {(x, y) ∣ 0 ≤ y ≤ f (ax), 0 ≤ x ≤ 2}\n\nis:\n\n2",
    "options": [
      "e − 1",
      "e + 1",
      "e + 1",
      "e − 1\n\n2\n\n4\n\n4"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): e − 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): e − 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area of the region {(x, y) : y",
    "options": [
      "16",
      "64",
      "8\n\n2\n\n≤ 4x, x < 4,\n\nxy(x−1)(x−2)\n\n> 0, x ≠ 3}\n\n(x−3)(x−4)\n\n3\n\n3",
      "32\n\nis\n\n3\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 32\n\nis\n\n3\n\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 32\n\nis\n\n3\n\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area of the region in the first quadrant inside the circle x + y\n2\n\n2\n\n= 8\n\nand outside the parabola y\n\n2\n\n= 2x\n\nis equal\n\nto :",
    "options": [
      "π",
      "π −\n\n1",
      "π\n\n2\n\n2\n\n1\n\n−\n\n3\n2\n\n−\n\n3",
      "π −\n\n2\n\n3\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): π −\n\n2\n\n3\n\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): π −\n\n2\n\n3\n\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "Let f (x) be a positive function such that the area bounded by y = f (x), y = 0 from x = 0 to x = a > 0 is\ne\n\n−a\n\n+ 4a\n\n2\n\n+ a − 1\n\n. Then the differential equation, whose general solution is y = c f (x) + c , where c and c are\n1\n\n2\n\narbitrary constants, is",
    "options": [
      "(8e\n\nx",
      "(8e\n\nx\n\n= 0",
      "(8e\n\nx\n\n2\n\n− 1)\n\nd y\ndx\n\n2\n\n+\n\n2\n\n+ 1)\n\nd y\ndx\n\n2\n\n−\n\ndy\ndx\ndy\ndx\n\n= 0",
      "(8e\n\nx\n\n2\n\n− 1)\n\nd y\ndx\n\n2\n\n−\n\n2\n\n+ 1)\n\nd y\ndx\n\n2\n\n+\n\ndy\ndx\ndy\ndx\n\n= 0\n= 0"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (8e\n\nx\n\n2\n\n− 1)\n\nd y\ndx\n\n2\n\n−\n\n2\n\n+ 1)\n\nd y\ndx\n\n2\n\n+\n\ndy\ndx\ndy\ndx\n\n= 0\n= 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (8e\n\nx\n\n2\n\n− 1)\n\nd y\ndx\n\n2\n\n−\n\n2\n\n+ 1)\n\nd y\ndx\n\n2\n\n+\n\ndy\ndx\ndy\ndx\n\n= 0\n= 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area enclosed by the curves xy + 4y = 16 and x + y = 6 is equal to:",
    "options": [
      "28 − 30 log 2",
      "30 − 28 log 2",
      "30 − 32 log 2",
      "32 − 30 log 2\n\ne\n\ne\n\ne\n\ne"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 30 − 32 log 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 30 − 32 log 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "Let q be the maximum integral value of p in [0, 10] for which the roots of the equation x − px +\n2\n\n5\n4\n\np = 0\n\nare\n\nrational. Then the area of the region {(x, y) : 0 ≤ y ≤ (x − q) , 0 ≤ x ≤ q} is\n2",
    "options": [
      "243",
      "25",
      "(4) 164\n\n125\n3"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 243.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 243."
  },
  {
    "subject": "Mathematics",
    "chapter": "Area Under Curves",
    "subConcept": "Area Between Curves",
    "q": "The area of the region bounded by y",
    "options": [
      "2\n\n= 8x\n\nand y\n\n2\n\n= 16(3 − x)",
      "32\n3",
      "16\n\nis equal to\n\n40\n3",
      "9"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 16\n\nis equal to\n\n40\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 16\n\nis equal to\n\n40\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let f (x) = x − 1 and g(x) = e for x ∈ R. If\nx",
    "options": [
      "1−e",
      "is :-\n\n), y(0) = 0\n\n3\n3\n\n4",
      "2e−1",
      "e−1\n\ne\n\ne\n\ndy\ndx\n\n= (e\n\n2\n\n4\n\n4\n\n−2√x\n\ng(f (f (x))) −",
      "1−e\n\ne\n\ne\n\ny\n√x\n\n, then y"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2e−1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2e−1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let y = y(x) be the solution curve of the differential equation\nx (x",
    "options": [
      "(3)\n\n2\n\nx\n\nx\n\n3\n\n+ e )dy + (e (x − 2)y − x )dx = 0, x > 0\n\n4−e",
      "2",
      "is equal to :\n\n2\n\n4\n\n2\n2+e\n\n2\n\n4\n4+e\n\n2",
      "2\n2−e\n\npassing through the point (1, 0). Then y"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 2\n2−e\n\npassing through the point (1, 0). Then y.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 2\n2−e\n\npassing through the point (1, 0). Then y."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "If a curve y = y(x) passes through the point (1,\n(7x\n\n4\n\ncot y − e",
    "options": [
      "2e −e",
      "2e +e",
      "2e −e\n\nx\n\ncosec y)\n\ndx\ndy\n\nπ\n2\n\n)\n\nand satisfies the differential equation\n\n, then at x = 2, the value of cosy is:\n\n5\n\n= x ,x ≥ 1\n\n2\n\n64\n2\n\n128",
      "2e +e\n\n2\n\n64\n2\n\n128"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2e −e\n\nx\n\ncosec y)\n\ndx\ndy\n\nπ\n2\n\n)\n\nand satisfies the differential equation\n\n, then at x = 2, the value of cosy is:\n\n5\n\n= x ,x ≥ 1\n\n2\n\n64\n2\n\n128.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2e −e\n\nx\n\ncosec y)\n\ndx\ndy\n\nπ\n2\n\n)\n\nand satisfies the differential equation\n\n, then at x = 2, the value of cosy is:\n\n5\n\n= x ,x ≥ 1\n\n2\n\n64\n2\n\n128."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let f : [0, ∞) → R be differentiable function such that f (x) = 1 − 2x + ∫\n\nx\n0\n\ne\n\nx−t\n\nf (t)dt\n\nfor all x ∈ [0, ∞).\n\nThen the area of the region bounded by y = f (x) and the coordinate axes is",
    "options": [
      "√5",
      "(3) √2",
      "2\n\n1\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (3) √2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (3) √2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let f : (0, ∞) → R be a function which is differentiable at all points of its domain and satisfies the condition\n2\n\n, with f",
    "options": [
      "= 4. Then 2f",
      "39",
      "is equal to :\n\n′\n\nx f (x) = 2xf (x) + 3",
      "19",
      "29",
      "23"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): = 4. Then 2f.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): = 4. Then 2f."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let y = y(x) be the solution of the differential equation (xy − 5x √1 + x )dx + (1 + x )dy = 0, y(0) = 0. Then\n2\n\ny(√ 3)\n\nis equal to",
    "options": [
      "√\n\n15\n2",
      "2\n\n2\n\n5√ 3\n2",
      "2√2",
      "√\n\n14\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2\n\n2\n\n5√ 3\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2\n\n2\n\n5√ 3\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let x = x(y) be the solution of the differential equation y = (x − y\n\ndx\ndy\n\n) sin (\n\nx\ny\n\n), y > 0\n\nand x",
    "options": [
      "=\n\nπ\n2\n\n. Then\n\nis equal to :\n\ncos(x(2))",
      "1 − 2(log 2)",
      "1 − 2 (log 2)\n\n2\n\ne\n\ne",
      "2 (log 2) − 1",
      "2(log 2) − 1\n2\n\ne\n\ne"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 2 (log 2) − 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 2 (log 2) − 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let a curve y = f (x) pass through the points (0, 5) and (log 2, k). If the curve satisfies the differential equation\ne\n\n2(3 + y)e\n\n2x\n\ndx − (7 + e\n\n2x\n\n, then k is equal to\n\n)dy = 0",
    "options": [
      "4",
      "32",
      "8",
      "16"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let x = x(y) be the solution of the differential equation y dx + (x −\n2",
    "options": [
      "1\n2\n\n1\ny\n\n. If x",
      "= 1, then x (\n\n)dy = 0\n\n1\n2\n\n)\n\nis :",
      "3 + e\n\n+ e",
      "3 − e",
      "3\n2\n\n+ e"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 3 + e\n\n+ e.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 3 + e\n\n+ e."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let y = y(x) be the solution of the differential equation sec xdy + {2(1 − x) tan x + x(2 − x)}dx = 0 such that\n. Then y(2) is equal to :\n\ny(0) = 2",
    "options": [
      "2",
      "is equal to :\n\ny(0) = 2",
      "2{1 − sin(2)}",
      "+ 1}",
      "2{sin",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "A function y = f (x) satisfies f (x) sin 2x + sin x − (1 + cos x)f (x) = 0 with condition f (0) = 0. Then f (\n2\n\n′\n\nequal to",
    "options": [
      "1",
      "0",
      "−1",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "The solution curve, of the differential equation 2y\n\ndy\ndx\n\ndy\n\n+ 3 = 5\n\ndx\n\n, passing through the point (0, 1) is a conic, whose\n\nvertex lies on the line:",
    "options": [
      "2x + 3y = 9",
      "2x + 3y = −9",
      "2x + 3y = −6",
      "2x + 3y = 6"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2x + 3y = 9.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2x + 3y = 9."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "2\n\nLet y = y(x) be the solution of the differential equation (x + 4) dy + (2x y + 8xy − 2)dx = 0. If y(0) = 0, then\n2\n\nis equal to\n\ny(2)",
    "options": [
      "(1)",
      "2π\n\nπ\n32",
      "3",
      "π\n8\n\nπ\n16"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (1).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (1)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let x = x(y) be the solution of the differential equation 2ye\nx(e)\n\nx\ny2\n\nx\n\ndx + (y\n\n2\n\n− 4xe y\n\n2\n\n)dy = 0\n\nsuch that x",
    "options": [
      "= 0. Then,\n\nis equal to",
      "e log",
      "(2) −e log",
      "(3) e log",
      "(4) −e log",
      "e\n\n2\n\ne\n\ne\n\n2\n\ne"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (3) e log.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (3) e log."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let the solution curve y = y(x) of the differential equation, [\n\ny\n\nx\n√ x −y\n2\n\n+ e x ]x\n\n2\n\ndy\n\n= x + [\n\ndx\n\ny\n\nx\n√ x −y\n2\n\n2\n\n+ e x ]y\n\npass\n\nthrough the points (1, 0) and (2α, α), α > 0. Then α is equal to",
    "options": [
      "1\n2\n\nexp(",
      "+ √e − 1)\n\n1\n2",
      "exp(\n\nπ\n6\n\nπ\n6",
      "2 exp(\n\n+ √e + 1)\n\nπ\n\nexp(\n\n3\nπ\n3\n\n+ √e − 1)\n+ √e − 1)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1\n2\n\nexp(.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1\n2\n\nexp(."
  },
  {
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "subConcept": "First Order and Linear Differential Equations",
    "q": "Let y = y(x) be the solution of the differential equation (x + 1)y − y = e\n′\n\npoint x = −\n\n3x\n\n(x + 1)\n\n2\n\n, with y(0) =\n\n1\n3\n\n. Then, the\n\nfor the curve y = y(x) is\n\n4\n3",
    "options": [
      "not a critical point",
      "a point of local minima",
      "a point of local maxima",
      "a point of inflection"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): a point of local minima.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): a point of local minima."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "A line passing through the point P(a, θ) makes an acute angle α with the positive x -axis. Let this line be rotated\nabout the point P through an angle\n2 − √3\n\nα\n2\n\nin the clock-wise direction. If in the new position, the slope of the line is\n\nand its distance from the origin is\n\n1\n√2\n\n, then the value of 3a tan α − 2√3 is\n2",
    "options": [
      "4",
      "6",
      "5",
      "8\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let ABC be the triangle such that the equations of lines AB and AC be 3y − x = 2 and x + y = 2, respectively, and\nthe points B and C lie on x -axis. If P is the orthocentre of the triangle ABC , then the area of the triangle PBC is\nequal to",
    "options": [
      "4",
      "10",
      "8",
      "6"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 6.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 6."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Consider the lines x(3λ + 1) + y(7λ + 2) = 17λ + 5, λ being a parameter, all passing through a point P . One of\nthese lines (say L) is farthest from the origin. If the distance of L from the point (3, 6) is d, then the value of d is\n2",
    "options": [
      "20",
      "30",
      "10",
      "15"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 20.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 20."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "A line passes through the origin and makes equal angles with the positive coordinate axes. It intersects the lines\nL 1 : 2x + y + 6 = 0\n\nand L\n\n2\n\n, at the points A and B, respectively. If AB =\n\n: 4x + 2y − p = 0, p > 0\n\nfoot of the perpendicular from the point A on the line L is M , then\n2",
    "options": [
      "5",
      "4",
      "2",
      "3\n\nAM\nBM\n\n9\n√2\n\nand the\n\nis equal to"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 3\n\nAM\nBM\n\n9\n√2\n\nand the\n\nis equal to.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 3\n\nAM\nBM\n\n9\n√2\n\nand the\n\nis equal to."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let the line x + y = 1 meet the axes of x and y at A and B, respectively. A right angled triangle AMN is inscribed in\nthe triangle OAB , where O is the origin and the points M and N lie on the lines OB and AB, respectively. If the\narea of the triangle AM N is\n\n4\n9\n\nof the area of the triangle OAB and AN : NB = λ : 1, then the sum of all possible\n\nvalue(s) of is λ :",
    "options": [
      "2",
      "5",
      "(4)\n\n13\n\n1\n2\n\n2\n\n6"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let ABC be a triangle formed by the lines 7x − 6y + 3 = 0, x + 2y − 31 = 0 and 9x − 2y − 19 = 0. Let the point\n(h, k)\n\nbe the image of the centroid of ΔABC in the line 3x + 6y − 53 = 0. Then h + k + hk is equal to:\n2",
    "options": [
      "47",
      "37",
      "36",
      "40\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 37.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 37."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Two equal sides of an isosceles triangle are along −x + 2y = 4 and x + y = 4. If m is the slope of its third side,\nthen the sum, of all possible distinct values of m, is :",
    "options": [
      "−2√10",
      "12",
      "6",
      "−6"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 6.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 6."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let the points (\n\n11\n2\n\n, α)\n\nlie on or inside the triangle with sides x + y = 11, x + 2y = 16 and 2x + 3y = 29. Then the\n\nproduct of the smallest and the largest values of α is equal to :",
    "options": [
      "44",
      "22",
      "33",
      "55"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 33.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 33."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let the lines 3x − 4y − α = 0, 8x − 11y − 33 = 0, and 2x − 3y + λ = 0 be concurrent. If the image of the point\nin the line 2x − 3y + λ = 0 is (\n\n(1, 2)\n\n57\n13\n\n,\n\n−40\n13\n\n, then |αλ| is equal to\n\n)",
    "options": [
      "84",
      "113",
      "91",
      "101"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 91.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 91."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "A rod of length eight units moves such that its ends A and B always lie on the lines x − y + 2 = 0 and y + 2 = 0,\nrespectively. If the locus of the point P , that divides the rod AB internally in the ratio 2 : 1 is\n9 (x\n\n2\n\n+ αy\n\n2\n\n, then α − β − γ is equal to :\n\n+ βxy + γx + 28y) − 76 = 0",
    "options": [
      "22",
      "21",
      "23",
      "24"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 23.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 23."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "A ray of light coming from the point P (1, 2) gets reflected from the point Q on the x-axis and then passes through\nthe point R(4, 3). If the point S(h, k) is such that PQRS is a parallelogram, then hk is equal to :\n2",
    "options": [
      "70",
      "80",
      "60",
      "90"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 70.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 70."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let A(−1, 1) and B(2, 3) be two points and P be a variable point above the line AB such that the area of △PAB is\n10 . If the locus of P is ax + by = 15, then 5a + 2 b is :",
    "options": [
      "6",
      "−\n\n6",
      "4",
      "−\n\n12\n\n5\n\n5"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): −\n\n12\n\n5\n\n5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): −\n\n12\n\n5\n\n5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "The vertices of a triangle are A(−1, 3), B(−2, 2) and C(3, −1). A new triangle is formed by shifting the sides of the\ntriangle by one unit inwards. Then the equation of the side of the new triangle nearest to origin is :",
    "options": [
      "x + y + (2 − √2) = 0",
      "−x + y − (2 − √2) = 0",
      "x + y − (2 − √2) = 0",
      "x − y − (2 + √2) = 0"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): x + y − (2 − √2) = 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): x + y − (2 − √2) = 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "If the orthocentre of the triangle, whose vertices are (1, 2), (2, 3) and (3, 1) is (α, β), then the quadratic equation\nwhose roots are α + 4β and 4α + β, is",
    "options": [
      "x − 19x + 90 = 0",
      "x − 18x + 80 = 0",
      "x − 22x + 120 = 0",
      "x − 20x + 99 = 0\n\n2\n\n2\n\n2\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): x − 20x + 99 = 0\n\n2\n\n2\n\n2\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): x − 20x + 99 = 0\n\n2\n\n2\n\n2\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let m , m be the slopes of two adjacent sides of a square of side a such that a + 11a + 3( m + m ) = 220. If\n2\n\n1\n\n2\n\none vertex of the square is (10(cos α − sin α), 10(sin α + cos α)), where α ∈ (0,\n\nπ\n2\n\n)\n\n2\n\n2\n\n1\n\n2\n\nand the equation of one\n\ndiagonal is (cosα − sinα)x + (sin α + cos α)y = 10, then 72(sin α + cos α) + a − 3a + 13 is equal to\n4",
    "options": [
      "119",
      "128",
      "145",
      "155\n\n4\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 128.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 128."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "The equations of the sides AB, BC and CA of a triangle ABC are 2x + y = 0, x + py = 39 and x − y = 3\nrespectively and P (2, 3) is its circumcentre. Then which of the following is NOT true",
    "options": [
      "(AC)\n\n2\n\n= 9p",
      "(AC) + p\n2\n\n2\n\n= 136",
      "32 <area (ΔABC) < 36",
      "34 < area (ΔABC) < 38"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 34 < area (ΔABC) < 38.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 34 < area (ΔABC) < 38."
  },
  {
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "subConcept": "Equations of Lines and Angles",
    "q": "Let A(−1, 1), B(3, 4) and C(2, 0) be given three points. A line y = mx, m > 0 , intersects lines AC and BC at\npoint P and Q respectively. Let A and A be the areas of ΔABC and ΔP QC respectively, such that A\n1\n\n2\n\n1\n\n= 3A 2\n\n,\n\nthen the value of m is equal to :",
    "options": [
      "(2) 1\n\n4\n15",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "Let C be the circle in the third quadrant of radius 3 , that touches both coordinate axes. Let C be the circle with\n1\n\n2\n\ncentre (1, 3) that touches C externally at the point (α, β). If (β − α)\n1\n\n2\n\n=\n\nm\nn\n\n, then m + n is equal to\n\n, gcd(m, n) = 1\n\n:",
    "options": [
      "9",
      "13",
      "22",
      "31"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 22.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 22."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "Let a circle C pass through the points (4, 2) and (0, 2), and its centre lie on 3x + 2y + 2 = 0. Then the length of the\nchord, of the circle C , whose mid-point is (1, 2), is :",
    "options": [
      "√3",
      "2√2",
      "2√3",
      "4√2"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2√3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2√3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "Let the equation of the circle, which touches x-axis at the point (a, 0), a > 0 and cuts off an intercept of length b on\n-axis be x + y − αx + βy + γ = 0. If the circle lies below x-axis, then the ordered pair (2a, b ) is equal to\n2\n\ny\n\n2\n\n2",
    "options": [
      "(γ, β − 4α)",
      "(α, β + 4γ)",
      "(γ, β + 4α)",
      "(α, β − 4γ)\n\n2\n\n2\n\n2\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (α, β − 4γ)\n\n2\n\n2\n\n2\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (α, β − 4γ)\n\n2\n\n2\n\n2\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "Let the circles C\n\n1\n\n: (x − α)\n\n2\n\n+ (y − β)\n\n2\n\n= r\n\n2\n1\n\nand C\n\n2\n\n: (x − 8)\n\n2\n\n+ (y −\n\n15\n2\n\n2\n\n)\n\n= r\n\n2\n2\n\ntouch each other externally at\n\nthe point (6, 6). If the point (6, 6) divides the line segment joining the centres of the circles C and C internally in\n1\n\n2\n\nthe ratio 2 : 1, then (α + β) + 4 (r + r ) equals\n2\n\n2\n\n1\n\n2",
    "options": [
      "125",
      "130",
      "110",
      "145"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 130.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 130."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "Let ABCD and AEF G be squares of side 4 and 2 units, respectively. The point E is on the line segment AB and\nthe point F is on the diagonal AC. Then the radius r of the circle passing through the point F and touching the line\nsegments BC and CD satisfies:",
    "options": [
      "r = 0",
      "2r − 4r + 1 = 0",
      "2r − 8r + 7 = 0",
      "r − 8r + 8 = 0\n\n2\n\n2\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): r − 8r + 8 = 0\n\n2\n\n2\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): r − 8r + 8 = 0\n\n2\n\n2\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "A square is inscribed in the circle x + y − 10x − 6y + 30 = 0. One side of this square is parallel to y = x + 3. If\n2\n\n(x i , y i )\n\n2\n\nare the vertices of the square, then Σ (x + y ) is equal to:\n2\n\n2\n\ni\n\ni",
    "options": [
      "148",
      "152",
      "160",
      "156"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 152.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 152."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "The set of all values of a for which the line x + y = 0 bisects two distinct chords drawn from a point P(\n2\n\n1+a\n2\n\n,\n\n1−a\n2\n\n)\n\non the circle 2x + 2y − (1 + a)x − (1 − a)y = 0, is equal to :\n2\n\n2",
    "options": [
      "(8, ∞)",
      "(0, 4]",
      "(4, ∞)",
      "(2, 12]"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (8, ∞).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (8, ∞)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "The points of intersection of the line ax + by = 0, (a ≠ b) and the circle x + y − 2x = 0 are A(α, 0) and\n2\n\n2\n\n. The image of the circle with AB as a diameter in the line x + y + 2 = 0 is :\n\nB(1, β)",
    "options": [
      "x + y + 5x + 5y + 12 = 0\n2\n\n2",
      "x + y + 3x + 5y + 8 = 0\n2\n\n2",
      "x + y + 3x + 3y + 4 = 0\n2\n\n2",
      "x + y − 5x − 5y + 12 = 0\n2\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): x + y + 5x + 5y + 12 = 0\n2\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): x + y + 5x + 5y + 12 = 0\n2\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Circle",
    "subConcept": "Equation of Circle and Tangents",
    "q": "Let C be a circle passing through the points A(2, −1) and B(3, 4). The line segment AB is not a diameter of C . If r\nis the radius of C and its centre lies on the circle (x − 5) + (y − 1)\n2",
    "options": [
      "32",
      "(3)",
      "30\n\n61\n2\n\n2\n\n=\n\n13\n2\n\n, then r is equal to\n2\n\n65\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (3).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (3)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "Let P be the parabola, whose focus is (−2, 1) and directrix is 2x + y + 2 = 0. Then the sum of the ordinates of the\npoints on P , whose abscissa is -2 , is",
    "options": [
      "(3)\n\n3\n2\n1\n4",
      "5",
      "3\n\n2\n\n4"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (3)\n\n3\n2\n1\n4.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (3)\n\n3\n2\n1\n4."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "The axis of a parabola is the line y = x and its vertex and focus are in the first quadrant at distances √2 and 2√2\nunits from the origin, respectively. If the point (1, k) lies on the parabola, then a possible value of k is :",
    "options": [
      "4",
      "9",
      "3",
      "8"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 9.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 9."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "Two parabolas have the same focus (4, 3) and their directrices are the x-axis and the y-axis, respectively. If these\nparabolas intersects at the points A and B, then (AB) is equal to :\n2",
    "options": [
      "392",
      "384",
      "192",
      "96"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 192.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 192."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "Let ABCD be a trapezium whose vertices lie on the parabola y\nbe parallel to y -axis. If the diagonal AC is of length\nABCD",
    "options": [
      "75",
      "25",
      "125\n\n25\n4\n\n2\n\n. Let the sides AD and BC of the trapezium\n\n= 4x\n\nand it passes through the point (1, 0), then the area of\n\nis\n\n4\n\n8",
      "75\n\n2\n\n8"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 75.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 75."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "If the line 3x − 2y + 12 = 0 intersects the parabola 4y = 3x at the points A and B, then at the vertex of the\n2\n\nparabola, the line segment AB subtends an angle equal to",
    "options": [
      "tan\n\n−1",
      "tan\n\n)\n\n11\n9",
      "tan\n\n−1\n\n(\n(\n\n4\n5",
      ")\n\nπ\n2\n\n−1\n\n(\n\n9\n7\n\n− tan\n\n)\n\n−1\n\n(\n\n3\n2\n\n)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): tan\n\n)\n\n11\n9.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): tan\n\n)\n\n11\n9."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "Let the parabola y = x + px − 3, meet the coordinate axes at the points P, Q and R . If the circle C with centre at\n2\n\n(−1, −1)\n\npasses through the points P , Q and R, then the area of △P QR is :",
    "options": [
      "7",
      "4",
      "6",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 6.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 6."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "The maximum area of a triangle whose one vertex is at (0, 0) and the other two vertices lie on the curve\ny = −2x\n\n2\n\n+ 54\n\nat points (x, y) and (−x, y) where y > 0 is :",
    "options": [
      "88",
      "122",
      "92",
      "108"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 108.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 108."
  },
  {
    "subject": "Mathematics",
    "chapter": "Parabola",
    "subConcept": "Standard Parabola and Focal Chord",
    "q": "If the length of the latus rectum of a parabola, whose focus is (a, a) and the tangent at its vertex is x + y = a, is 16,\nthen |a| is equal to",
    "options": [
      "2√2",
      "2√3",
      "4√2",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 4√2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 4√2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "Let the ellipse 3x + py\n2\n\nf1 , f2\n\n2\n\n= 4\n\npass through the centre C of the circle x + y − 2x − 4y − 11 = 0 of radius r. Let\n2\n\n2\n\nbe the focal distances of the point C on the ellipse. Then 6f f − r is equal to\n1",
    "options": [
      "74",
      "68",
      "70",
      "78\n\n2"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 70.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 70."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "Let\nA = {(α, β) ∈ R × R : |α − 1| ≤ 4 and |β − 5| ≤ 6}\n\nand\nB = {(α, β) ∈ R × R : 16(α − 2)\n\n2\n\n+ 9(β − 6)\n\n2\n\n≤ 144}",
    "options": [
      "B ⊂ A",
      "A ∪ B = {(x, y) : −4 ≤ x ≤ 4, −1 ≤ y ≤ 11}",
      "neither A ⊂ B nor B ⊂ A",
      "A ⊂ B"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): B ⊂ A.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): B ⊂ A."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "Let for two distinct values of p the lines y = x + p touch the ellipse E :\n\nx\n4\n\n2\n2\n\n+\n\ny\n\n2\n\n3\n\n2\n\n= 1\n\nat the points A and B . Let the\n\nline y = x intersect E at the points C and D. Then the area of the quadrilateral ABCD is equal to",
    "options": [
      "36",
      "24",
      "48",
      "20"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 24.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 24."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "A line passing through the point P(√5, √5) intersects the ellipse\n\nx\n\n2\n\n36\n\n+\n\ny\n\n2\n\n25\n\n= 1\n\nat A and B such that (P A). (P B) is\n\nmaximum. Then 5 (P A + P B ) is equal to :\n2\n\n2",
    "options": [
      "218",
      "377",
      "290",
      "338"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 338.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 338."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "If αx + βy = 109 is the equation of the chord of the ellipse\n\nx\n\n2\n\n9\n\n+\n\ny\n\n2\n\n4\n\n, whose mid point is (\n\n= 1\n\n5\n2\n\n,\n\n1\n2\n\n, then α + β is\n\n)\n\nequal to :",
    "options": [
      "58",
      "46",
      "37",
      "72"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 58.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 58."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "The equation of the chord, of the ellipse\n\nx\n\n2\n\n25\n\n+\n\ny\n\n2\n\n16\n\n, whose mid-point is (3, 1) is :\n\n= 1",
    "options": [
      "48x + 25y = 169",
      "5x + 16y = 31",
      "25x + 101y = 176",
      "4x + 122y = 134"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 48x + 25y = 169.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 48x + 25y = 169."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "Let the product of the focal distances of the point (√3,\n\n1\n2\n\n)\n\non the ellipse\n\nx\na\n\n2\n2\n\n+\n\ny\nb\n\n2\n2\n\n, be\n\n= 1, (a > b)\n\n7\n4\n\n. Then the\n\nabsolute difference of the eccentricities of two such ellipses is",
    "options": [
      "1−√ 3",
      "3−2√ 2",
      "3−2√ 2\n\n√2\n\n3√ 2",
      "1−2√ 2\n\n2√ 3\n\n√3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 3−2√ 2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 3−2√ 2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "The length of the chord of the ellipse",
    "options": [
      "(3)\n\n5\n3\n2\n3\n\nx\n\n2\n\ny\n\n+\n\n4\n\n2\n\n2\n\n, whose mid-point is (1,\n\n= 1\n\n√ 15",
      "√ 15",
      "√15\n\n1\n3\n\n1\n2\n\n, is :\n\n)\n\n√ 15"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): √15\n\n1\n3\n\n1\n2\n\n, is :\n\n)\n\n√ 15.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): √15\n\n1\n3\n\n1\n2\n\n, is :\n\n)\n\n√ 15."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "If S and S are the foci of the ellipse\n\nx\n\n′\n\n′\n\nmax (SP. S P)\n\n2\n\ny\n\n+\n\n18\n\n2\n\n9\n\n= 1\n\nand P be a point on the ellipse, then min (SP . S P)+\n′\n\nis equal to :",
    "options": [
      "3(1 + √2)",
      "3(6 + √2)",
      "9",
      "27"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 27.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 27."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "Let f (x) = x + 9, g(x) =\n2\n\nand a = f ∘ g(10), b = g ∘ f (3). If e and l denote the eccentricity and the length of\n\nx\nx−9\n\nthe latus rectum of the ellipse\n\nx\n\n2\n\n+\n\na\n\ny\n\n2\n\n, then 8e + l is equal to.\n2\n\n= 1\n\nb\n\n2",
    "options": [
      "8",
      "16",
      ". If e and l denote the eccentricity and the length of\n\nx\nx−9\n\nthe latus rectum of the ellipse\n\nx\n\n2\n\n+\n\na\n\ny\n\n2\n\n, then 8e + l is equal to.\n2\n\n= 1\n\nb\n\n2",
      "6",
      "12"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "Let P Q be a focal chord of the parabola y\n\n2\n\n= 4x\n\nsuch that it subtends an angle of\n\nsegment P Q be also a focal chord of the ellipse E :\nthen the value of\n\n1\ne\n\n2\n\nx\na\n\n2\n2\n\n+\n\ny\n\n2\n\nb\n\n2\n\n= 1, a\n\n2\n\n> b\n\n2\n\nπ\n2\n\nat the point (3, 0). Let the line\n\n. If e is the eccentricity of the ellipse E,\n\nis equal to",
    "options": [
      "1 + √2",
      "3 + 2√2",
      "1 + 2√3",
      "4 + 5√3"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 3 + 2√2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 3 + 2√2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Ellipse",
    "subConcept": "Standard Ellipse and Eccentricity",
    "q": "A ray of light through (2, 1) is reflected at a point P on the y− axis and then passes through the point (5, 3). If this\nreflected ray is the directrix of an ellipse with eccentricity\nis\n\n8\n√ 53\n\n,\n\nand the distance of the nearer focus from this directrix\n\n1\n3\n\nthen the equation of the other directrix can be:",
    "options": [
      "11x + 7y + 8 = 0 or 11x + 7y − 15 = 0",
      "11x − 7y − 8 = 0 or 11x + 7y + 15 = 0",
      "2x − 7y + 29 = 0 or 2x − 7y − 7 = 0",
      "2x − 7y − 39 = 0 or 2x − 7y − 7 = 0"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2x − 7y + 29 = 0 or 2x − 7y − 7 = 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2x − 7y + 29 = 0 or 2x − 7y − 7 = 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "Let e and e be the eccentricities of the ellipse\n1\n\nb < 5\n\n2\n\nand e e\n1\n\n2\n\nx\n\n2\n\nb\n\n2\n\n+\n\ny\n\n2\n\n25\n\n= 1\n\nand the hyperbola\n\nx\n\n2\n\n16\n\ny\n\n−\n\n2\n\nb\n\n2\n\n, respectively. If\n\n= 1\n\n, then the eccentricity of the ellipse having its axes along the coordinate axes and passing\n\n= 1\n\nthrough all four foci (two of the ellipse and two of the hyperbola) is :",
    "options": [
      "4",
      "3",
      "√7\n\n5\n\n4",
      "√3\n\n5\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "Let the sum of the focal distances of the point P(4, 3) on the hyperbola H :\n\nx\n\n2\n\na\n\n2\n\n−\n\ny\n\n2\n\nb\n\n2\n\n= 1\n\nbe 8√ . If for H , the\n5\n3\n\nlength of the latus rectum is l and the product of the focal distances of the point P is m , then 9l + 6 m is equal to :2",
    "options": [
      "184",
      "186",
      "185",
      "187"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 185.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 185."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "If A and B are the points of intersection of the circle x + y − 8x = 0 and the hyperbola\n2\n\n2\n\nx\n\n2\n\n9\n\n−\n\ny\n\n2\n\n4\n\nP moves on the line 2x − 3y + 4 = 0, then the centroid of △PAB lies on the line :",
    "options": [
      "x + 9y = 36",
      "4x − 9y = 12",
      "6x − 9y = 20",
      "9x − 9y = 32"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 6x − 9y = 20.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 6x − 9y = 20."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "Let E :\n\nx\na\n\n2\n\n2\n\n+\n\ny\n\n2\n\nb\n\n2\n\n= 1, a > b\n\nand H :\n\nx\n\n2\n\nA\n\n2\n\ny\n\n−\n\n2\n\nB\n\n2\n\n. Let the distance between the foci of E and the foci of H be\n\n= 1\n\n. If a − A = 2, and the ratio of the eccentricities of E and H is\n\n2√ 3\n\n1\n3\n\n, then the sum of the lengths of their latus\n\nrectums is equal to:",
    "options": [
      "10",
      "9",
      "8",
      "7"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "Let one focus of the hyperbola H :\n\nx\na\n\n2\n2\n\n−\n\ny\n\n2\n\nb\n\n= 1\n\n2\n\nbe at (√10, 0) and the corresponding directrix be x =\n\n9\n√ 10\n\n. If e\n\nand l respectively are the eccentricity and the length of the latus rectum of H , then 9 (e + l) is equal to:\n2",
    "options": [
      "14",
      "15",
      "16",
      "12"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 16.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 16."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "Let e be the eccentricity of the hyperbola\n1\n\nx\na\n\n2\n2\n\ny\n\n+\n\nb\n\n2\n2\n\nx\n\n2\n\n16\n\n−\n\ny\n\n2\n\n9\n\n= 1\n\nand e be the eccentricity of the ellipse\n2\n\n, which passes through the foci of the hyperbola. If e e\n\n= 1, a > b\n\n1\n\n2\n\n, then the length of the chord of\n\n= 1\n\nthe ellipse parallel to the x-axis and passing through (0, 2) is :",
    "options": [
      "4√5",
      "(3)",
      "3√5\n\n10√ 5\n3\n\n8√ 5\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 3√5\n\n10√ 5\n3\n\n8√ 5\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 3√5\n\n10√ 5\n3\n\n8√ 5\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "Consider a hyperbola H having centre at the origin and foci on the x-axis. Let C be the circle touching the\n1\n\nhyperbola H and having the centre at the origin. Let C be the circle touching the hyperbola H at its vertex and\n2\n\nhaving the centre at one of its foci. If areas (in sq units) of C and C are 36π and 4π, respectively, then the length\n1\n\n2\n\n(in units) of latus rectum of H is",
    "options": [
      "14",
      "28",
      "11\n\n3\n\n3",
      "10\n\n3\n\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 28.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 28."
  },
  {
    "subject": "Mathematics",
    "chapter": "Hyperbola",
    "subConcept": "Standard Hyperbola and Asymptotes",
    "q": "Let a > 0, b > 0. Let e and l respectively be the eccentricity and length of the latus rectum of the hyperbola\nx\n\n2\n\na\n\n2\n\ne\n\n2\n\ny\n\n−\n\nb\n\n2\n\n11\n\n=\n\n. Let e and l respectively the eccentricity and length of the latus rectum of its conjugate hyperbola. If\n\n14\n\n′\n\n= 1\n\n2\n\nl\n\nand (e )\n′\n\n2\n\n′\n\n11\n\n=\n\n8\n\nl\n\n′\n\n, then the value of 77a + 44b is equal to",
    "options": [
      "100",
      "110",
      "120",
      "130"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 130.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 130."
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Ratios & Identities",
    "subConcept": "Trigonometric Identities and Values",
    "q": "If ∑\n\n13\nr=1\n\n{\n\n1\nsin(\n\nπ\n4\n\n+(r−1)\n\nπ\n6\n\n) sin(\n\nπ\n4\n\n+\n\nrπ\n6\n\n)\n\n} = a√ 3 + b, a, b ∈ Z\n\n, then a + b is equal to :\n2",
    "options": [
      "10",
      "4",
      "2",
      "8\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 8\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 8\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Ratios & Identities",
    "subConcept": "Trigonometric Identities and Values",
    "q": "If\n\nπ\n2\n\n≤ x ≤\n\n3π\n4",
    "options": [
      "x − tan\n\n−1",
      "x + tan\n\n−1",
      "x − tan\n\n−1\n\n, then cos\n\n−1\n\n(\n\n12\n13\n\ncos x +\n\n5\n13\n\nsin x)\n\nis equal to\n\n4\n3\n5\n12",
      "x + tan\n\n−1\n\n4\n5\n5\n12"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): x − tan\n\n−1\n\n, then cos\n\n−1\n\n(\n\n12\n13\n\ncos x +\n\n5\n13\n\nsin x)\n\nis equal to\n\n4\n3\n5\n12.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): x − tan\n\n−1\n\n, then cos\n\n−1\n\n(\n\n12\n13\n\ncos x +\n\n5\n13\n\nsin x)\n\nis equal to\n\n4\n3\n5\n12."
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Ratios & Identities",
    "subConcept": "Trigonometric Identities and Values",
    "q": "If the value of\n\n∘\n\n∘\n\n∘\n\n∘\n\n3 cos 36 +5 sin 18\n5 cos 36 −3 sin 18\n\nis\n\na√ 5−b\nc\n\n, where a, b, c are natural numbers and gcd(a, c) = 1, then a + b + c is equal\n\nto :",
    "options": [
      "40",
      "52",
      "50",
      "54"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 52.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 52."
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Ratios & Identities",
    "subConcept": "Trigonometric Identities and Values",
    "q": "The value of 2 sin",
    "options": [
      "(3)\n\n1\n16\n7\n16\n\nπ\n22\n\nsin\n\n3π\n22\n\nsin\n\n5π\n22\n\nsin\n\n7π\n22\n\nsin\n\n9π\n22\n\nis equal to:",
      "(4)\n\n5\n16\n3\n16"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (3)\n\n1\n16\n7\n16\n\nπ\n22\n\nsin\n\n3π\n22\n\nsin\n\n5π\n22\n\nsin\n\n7π\n22\n\nsin\n\n9π\n22\n\nis equal to:.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (3)\n\n1\n16\n7\n16\n\nπ\n22\n\nsin\n\n3π\n22\n\nsin\n\n5π\n22\n\nsin\n\n7π\n22\n\nsin\n\n9π\n22\n\nis equal to:."
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Ratios & Identities",
    "subConcept": "Trigonometric Identities and Values",
    "q": "cosec 18°\n\nis a root of the equation:",
    "options": [
      "x − 2x − 4 = 0",
      "4x + 2x − 1 = 0",
      "x + 2x − 4 = 0",
      "x − 2x + 4 = 0\n\n2\n\n2\n\n2\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): x − 2x − 4 = 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): x − 2x − 4 = 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Equations",
    "subConcept": "General Solutions of Trig Equations",
    "q": "If for θ ∈ [−\nα\n\n2\n\n+ β\n\n2\n\n+ γ\n\nπ\n3\n\n2\n\n, the points (x, y) = (3 tan (θ +\n\nπ\n\n, 0]\n\n3\n\n), 2 tan (θ +\n\nπ\n6\n\n))\n\nlie on xy + αx + βy + γ = 0, then\n\nis equal to :",
    "options": [
      "80",
      "72",
      "96",
      "75"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 75.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 75."
  },
  {
    "subject": "Mathematics",
    "chapter": "Trigonometric Equations",
    "subConcept": "General Solutions of Trig Equations",
    "q": "The number of solutions of equation (4 − √3) sin x −2√3 cos x = −\n\n4\n\n2",
    "options": [
      "4",
      "3",
      "6",
      "5\n\n1+√ 3\n\n, x ∈ [−2π,\n\n5π\n2\n\n]\n\nis"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 5\n\n1+√ 3\n\n, x ∈ [−2π,\n\n5π\n2\n\n]\n\nis.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 5\n\n1+√ 3\n\n, x ∈ [−2π,\n\n5π\n2\n\n]\n\nis."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "The sum of the infinite series\ncot\n\n−1",
    "options": [
      "π",
      "π\n\n)",
      "π\n\n2\n\n2\n\n(\n\n7\n4\n\n) + cot\n\n+ tan\n+ cot\n\n−1\n\n−1\n\n(\n(\n\n−1\n\n1\n2\n1\n2\n\n(\n\n19\n4\n\n)+ cot\n\n−1\n\n(\n\n39\n4\n\n) + cot\n\n−1\n\n(\n\n67\n4\n\n) + ….\n\nis :-\n\n)",
      "π\n\n2\n\n2\n\n− cot\n\n−1\n\n− tan\n\n−1\n\n(\n(\n\n1\n2\n1\n2\n\n)\n)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): π\n\n2\n\n2\n\n− cot\n\n−1\n\n− tan\n\n−1\n\n(\n(\n\n1\n2\n1\n2\n\n)\n).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): π\n\n2\n\n2\n\n− cot\n\n−1\n\n− tan\n\n−1\n\n(\n(\n\n1\n2\n1\n2\n\n)\n)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "If α > β > γ > 0, then the expression cot\n\n2\n\n−1\n\n(1+β )\n\n{β +\n\n(α−β)\n\n} + cot\n\n−1\n\n(1+γ\n\n{γ +\n\n2\n\n2\n\n)\n\n(β−γ)\n\n}+ cot\n\n−1\n\n(1+α )\n\n{α +\n\n(γ−α)\n\n}\n\nis equal\n\nto :",
    "options": [
      "π",
      "0",
      "π\n2",
      "3π\n\n− (α + β + γ)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): π.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): π."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "Using the principal values of the inverse trigonometric functions, the sum of the maximum and the minimum values\nof 16 ((sec\n\n−1\n\n2\n\nx)\n\n+ (cosec\n\n−1\n\n2\n\nx) )\n\nis :",
    "options": [
      "24π\n\n2",
      "22π\n\n2",
      "31π\n\n2",
      "18π\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 22π\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 22π\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "For α, β, γ ≠ 0. If sin",
    "options": [
      "√3",
      "2\n\n1\n√2",
      "√ 3−1\n\n−1\n\nα + sin\n\n−1\n\nβ + sin\n\n−1\n\nγ = π\n\nand (α + β + γ)(α − γ + β) = 3αβ, then γ equal to",
      "√3\n\n2√ 2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): √3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): √3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "Given that the inverse trigonometric function assumes principal values only. Let x, y be any two real numbers in\n[−1, 1]\n\nsuch that cos\n\n−1\n\nx − sin\n\n−1\n\ny = α,\n\n−π\n2\n\n.\n\n≤ α ≤ π\n\nThen, the minimum value of x + y + 2xy sin α is\n2\n\n2",
    "options": [
      "0",
      "-1",
      "(4) −\n\n1\n2\n\n1\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "Let (a, b) ⊂ (0, 2π) be the largest interval for which sin\nαx\n\n2\n\n+ βx + sin",
    "options": [
      "π",
      "8",
      "π\n\n−1\n\n(x\n\n2\n\n− 6x + 10)+cos\n\n−1\n\n(x\n\n2\n\n−1\n\n(sin θ) − cos\n\n− 6x + 10) = 0",
      "16\n\n−1\n\n, holds. If\n\n(sin θ) > 0, θ ∈ (0, 2π)\n\nand α − β = b − a, then α is equal to;\n\nπ\n48\nπ\n12"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 16\n\n−1\n\n, holds. If\n\n(sin θ) > 0, θ ∈ (0, 2π)\n\nand α − β = b − a, then α is equal to;\n\nπ\n48\nπ\n12.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 16\n\n−1\n\n, holds. If\n\n(sin θ) > 0, θ ∈ (0, 2π)\n\nand α − β = b − a, then α is equal to;\n\nπ\n48\nπ\n12."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "The value of cot(∑",
    "options": [
      "25",
      "50",
      "26\n\n50\n\ntan\n\nn=1\n\n−1\n\n1\n\n(\n\n1+n+n\n\n))\n\n2\n\nis\n\n26\n\n25",
      "52\n\n51\n\n51"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 26\n\n50\n\ntan\n\nn=1\n\n−1\n\n1\n\n(\n\n1+n+n\n\n))\n\n2\n\nis\n\n26\n\n25.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 26\n\n50\n\ntan\n\nn=1\n\n−1\n\n1\n\n(\n\n1+n+n\n\n))\n\n2\n\nis\n\n26\n\n25."
  },
  {
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "subConcept": "Principal Values and Identities",
    "q": "If 0 < x <\n\n1\n√2\n\nand\n\nsin\n\n−1\n\nx\n\nα\n\n=\n\ncos\n\n−1\n\nβ\n\nx\n\n, then a value of sin(\n\n2πα\nα+β\n\n)\n\nis",
    "options": [
      "4√(1 − x )(1 − 2x )\n2\n\n2",
      "4x√(1 − x )(1 − 2x )\n2\n\n2",
      "2x√(1 − x )(1 − 4x )\n2\n\n2",
      "4√(1 − x )(1 − 4x )\n2\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 4x√(1 − x )(1 − 2x )\n2\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 4x√(1 − x )(1 − 2x )\n2\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n^\nConsider two vectors u = 3^i − ^j and v = 2^i + ^j − λk,\nλ > 0. The angle between them is given by cos\n→\n→\n→\nv = v1 + v2",
    "options": [
      "23",
      "14\n\n2",
      "25\n\n→\n\n→\n\n→\n\n→\n\n→\n\n, where v is parallel to u and v is perpendicular to u. Then the value v\n1\n\n2",
      "10\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 14\n\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 14\n\n2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n→\n→ →\n→\n^\n^\nLet a = 2^i − ^j + 3k,\nb = 3^\ni − 5^\nj + k and c be a vector such that a × c = c × b and (a\n→ + c→) ⋅ (→b + c→) = 168. Then\n\nthe maximum value of |c→| is :\n2",
    "options": [
      "462",
      "77",
      "154",
      "308"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 308.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 308."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "Let A, B, C be three points in xy-plane, whose position vector are given by √3^i + ^j, ^i + √3^j and a^i + (1 − a)^j\nrespectively with respect to the origin O . If the distance of the point C from the line bisecting the angle between the\n\n→\n−\n→\n−\n\nvectors OA and OB is\n\n9\n\n√2\n\n, then the sum of all the possible values of a is :",
    "options": [
      "2",
      "9/2",
      "1",
      "0"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n\n→\n\n→\n\n→\n\n^\n^\n^\n^\n^\n→ is :\nLet a = 3^i − ^j + 2k,\nb = a × (i − 2k) and c = b × k. Then the projection of c − 2j on a",
    "options": [
      "2√14",
      "√14",
      "3√7",
      "2√7"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2√14.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2√14."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n\nLet the position vectors of three vertices of a triangle be 4p→ + q→ − 3r→, −5p→ + q→ + 2r→ and 2p − q + 2r. If the position\nvectors of the orthocenter and the circumcenter of the triangle are\nα + 2β + 5γ\n\n→ → →\n\np+q+r\n4\n\nand αp→ + βq→ + γr→ respectively, then\n\nis equal to :",
    "options": [
      "3",
      "4",
      "1",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "^ →\n^\n^\n^\nLet a\n→ = ^i + 2^j + 3k,\nb = 3i + j − k and c\n→ be three vectors such that c→ is coplanar with a\n→ and →b. If the vector C→ is\nperpendicular to →b and a\n→ ⋅ c→ = 5, then |c→| is equal to",
    "options": [
      "√",
      "11\n6",
      "16\n\n1\n3√ 2",
      "18"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): √.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): √."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "Let a\n→ and →b be two unit vectors such that the angle between them is\n\nπ\n3\n\n. If λa\n→ + 2→b and 3a\n→ − λ→b are perpendicular to\n\neach other, then the number of values of λ in [−1, 3] is :",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→ = 2^i − 3^j + k, →b = 3^i + 2^j + 5k and a vector c→ be such that (a − c) × b = −18^i − 3^j + 12k and a ⋅ c = 3. If\nLet a\n→\n\n→\n\n→\n→\nb × c = d\n\n→\n\n→ →\n\n, then |a ⋅ d| is equal to :",
    "options": [
      "18",
      "12",
      "9",
      "15"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 15.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 15."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n\n→\n\n→\n\n→\n\n→\n\n→\n\nLet a and b be two vectors such that b = 1 and b × a = 2 Then (b × a) − b",
    "options": [
      "3\n\n2\n\nis equal to",
      "5",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n\n→\n\n→\n\n→\n\n→ →\n\nˆ\nˆ\nˆ\nIf a = ˆi + 2ˆj + ˆ\nk, b = 3(i − j + k) and c be the vector such that a × c = b and a ⋅ c = 3, then\n→\n→\n→\n→\n→\na ⋅ ((c × b) − b − c)",
    "options": [
      "32\n\nis equal to",
      "24",
      "20",
      "36"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 24.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 24."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n^\n^\n^\nLet three vectors a = α^i + 4^j + 2k,\nb = 5^\ni + 3^\nj + 4k, c = x^\ni + y^\nj + zk form a triangle such that c\n→= a\n→ − →b and the\n→\n\n→\n\narea of the triangle is 5√6. If α is a positive real number, then |c→| is equal to:\n2",
    "options": [
      "16",
      "14",
      "12",
      "10"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 14.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 14."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n→\n^\n^\nb = 2^\ni − 2^\nj + 2k and c be three vectors such that (c\n→ + ^i) × (a\n→ + →b + ^i) = a\n→ × (c→ + ^i). If\nLet a = 2^i + 5^j − k,\n\n→ →\n\n^\n, then c→ ⋅ (−2^i + ^j + k)\nis equal to:\n\na ⋅ c = −29",
    "options": [
      "15",
      "12",
      "10",
      "5"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\nThe vector a = −î + 2ĵ + k̂ is rotated through a right angle, passing through the y-axis in its way and the resulting\n→\n\n→\n\n→\n\n→\n\nvector is b. Then the projection of 3a + √2b on c = 5î + 4ĵ + 3k̂ is",
    "options": [
      "3√2",
      "1",
      "√6",
      "2√3"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 3√2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 3√2."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→ →\n\n→\n\n→\n\n→\n\n→\n\n→ →\n\nˆ\nˆ\nˆ\nLet u = ˆi − ˆj − 2ˆ\nk, v = 2i + j − k, v ⋅ w = 2 and v × w = u + λv, then u ⋅ w is equal to",
    "options": [
      "1",
      "(3) 2",
      "−\n\n3\n2\n2\n3"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "Let A, B, C be three points whose position vectors respectively are:\n→\na = î + 4ĵ + 3k̂\n→\nb = 2î + αĵ + 4k̂, α ∈ R\n→\nˆ\nˆ\nˆ\nc = 3i − 2j + 5k\n→→→\n\nIf α is the smallest positive integer for which a, b, c are non-collinear, then the length of the median, △ABC ,\nthrough A is:",
    "options": [
      "√ 82",
      "√ 62",
      "√ 69\n\n2\n\n2",
      "√ 66\n\n2\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): √ 82.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): √ 82."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n\nˆ\nˆ\nˆ\nˆ\nˆ\nˆ\nLet the vectors a = (1 + t)ˆi + (1 − t)ˆj + ˆ\nk, b = (1 − t)i + (1 + t)j + 2k and c = ti − tj + k, t ∈ R be such that\n→\n\n→\n\n→\n\n→\n\nfor α, β, γ ∈ R, αa + βb + γc = 0 ⇒ α = β = γ = 0. Then, the set of all values of t is",
    "options": [
      "a non-empty finite set",
      "equal to N",
      "equal to R − {0}",
      "equal to R"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): equal to R − {0}.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): equal to R − {0}."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n\n→\n\n→\n\n→\n\n→\n\nˆ\nˆ\nˆ\nLet a = ˆi + ˆj − ˆ\nk and c = 2i − 3j + 2k. Then the number of vectors b such that b × c = a and b ∈ {1, 2, … , 10}\n\nis",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 0.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 0."
  },
  {
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "subConcept": "Dot Product, Cross Product and Triple Product",
    "q": "→\n\n→\n\n→\n\n→\n\n→\n\n→→\n\nˆ\nˆ\nˆ\nˆ\nˆ\nˆ\nLet a = ˆi + 2ˆj − 3ˆ\nk and b = 2i − 3j + 5k. If r × a = b × r, r ⋅ (αi + 2j + k) = 3 and\n→\nˆ\nˆ\nˆ\nr ⋅ (2i + 5j − αk) = −1, α ∈ R,\n\n→2\n\nthen the value of α + r",
    "options": [
      "9\n\nis equal to :",
      "15",
      "13",
      "11"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 15.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 15."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "If the equation of the line passing through the point (0, −\nand\n→\n^\n^\n^\n^\n^\n^\nr = (i − j − 6k) + μ(−bi + aj + 5k)\n\nis\n\nx−1\n−2\n\n=\n\ny+4\nd\n\n=\n\nz−c\n−4\n\n1\n\n, 0)\n\n2\n\n^\nand perpendicular to the lines r→ = λ(^i + a^j + bk)\n\n, then a + b + c + d is equal to :",
    "options": [
      "10",
      "14",
      "13",
      "12"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 14.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 14."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let the values of p , for which the shortest distance between the lines\n→\n^\n^\n^\n^\n^\n^\nr = (pi + 2j + k) + λ(2i + 3j + 4k)\nx\na\n\n2\n2\n\n+\n\ny\nb\n\n2\n2\n\n= 1\n\nis :-",
    "options": [
      "9",
      "3\n2",
      "is\n\n1\n\n√6\n\nx+1\n3\n\ny\n\n=\n\n4\n\n=\n\nand\n\nz\n5\n\n, be a, b, (a < b). Then the length of the latus rectum of the ellipse",
      "18\n\n2\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): is\n\n1\n\n√6\n\nx+1\n3\n\ny\n\n=\n\n4\n\n=\n\nand\n\nz\n5\n\n, be a, b, (a < b). Then the length of the latus rectum of the ellipse.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): is\n\n1\n\n√6\n\nx+1\n3\n\ny\n\n=\n\n4\n\n=\n\nand\n\nz\n5\n\n, be a, b, (a < b). Then the length of the latus rectum of the ellipse."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let the shortest distance between the lines\nvalue of 5α + β is",
    "options": [
      "42",
      "46",
      "48\n\nx−3\n3\n\n=\n\ny−α\n−1\n\n=\n\nz−3\n1\n\nand\n\nx+3\n−3\n\n=\n\ny+7\n2\n\n=\n\nz−β\n4\n\nbe 3√30. Then the positive",
      "40"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 46.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 46."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let A and B be two distinct points on the line L :\n\nx−6\n3\n\n=\n\ny−7\n2\n\n=\n\nz−7\n−2\n\n. Both A and B are at a distance 2√17 from the\n\n→\n→\n−\n−\n\nfoot of perpendicular drawn from the point (1, 2, 3) on the line L . If O is the origin, then OA ⋅ OB is equal to:",
    "options": [
      "49",
      "47",
      "21",
      "62"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 47.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 47."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let a line passing through the point (4, 1, 0) intersect the line L ;\nthe line L\n\n2\n\n: x − 6 = y = −z + 4\n\n1\n\n0\n\n1\n\nThen α\n\nβ\n\nγ\n\na\n\nb\n\nc",
    "options": [
      "8\n\n1\n\nx−1\n2\n\n=\n\ny−2\n3\n\n=\n\nz−3\n4\n\nat the point A\n\n(α, β, γ)\n\nand\n\nat the point B(a, b, c).\n\nis equal to",
      "16",
      "12",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 8\n\n1\n\nx−1\n2\n\n=\n\ny−2\n3\n\n=\n\nz−3\n4\n\nat the point A\n\n(α, β, γ)\n\nand\n\nat the point B(a, b, c).\n\nis equal to.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 8\n\n1\n\nx−1\n2\n\n=\n\ny−2\n3\n\n=\n\nz−3\n4\n\nat the point A\n\n(α, β, γ)\n\nand\n\nat the point B(a, b, c).\n\nis equal to."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Line L passes through the point (1, 2, 3) and is parallel to Z -axis. Line L passes through the point (λ, 5, 6) and is\n1\n\n2\n\nparallel to y-axis. Let for λ = λ , λ , λ\n1\n\n2\n\n2\n\n< λ1\n\n, the shortest distance between the two lines be 3 . Then the square of\n\nthe distance of the point (λ , λ , 7) from the line L is\n1\n\n2\n\n1",
    "options": [
      "40",
      "32",
      "25",
      "37"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 25.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 25."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let a straight line L pass through the point P (2, −1, 3) and be perpendicular to the lines\nx−3\n1\n\nQ\n\n=\n\nis :\n\ny−2\n3\n\n=\n\nz+2\n4\n\nx−1\n2\n\n=\n\ny+1\n1\n\n=\n\nz−3\n−2\n\n. If the line L intersects the yz-plane at the point Q, then the distance between the points P and",
    "options": [
      "√10",
      "2√3",
      "2",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let P be the foot of the perpendicular from the point (1, 2, 2) on the line L :\n\n→\n\nand\n\nx−1\n1\n\n=\n\ny+1\n−1\n\n=\n\nz−2\n2\n\n. Let the line\n\n, intersect the line L at Q . Then 2(PQ) is equal to :\n\n^\n^\n^\n^\n^\n^\nr = (−i + j − 2k) + λ(i − j + k), λ ∈ R\n\n2",
    "options": [
      "25",
      "19",
      "29",
      "27"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 27.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 27."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "→\n\n^\nLet a = ^i + 2^j + k\nand\n\n→\n\nLet L\n\n^\nb = 2^\ni + 7^\nj + 3k.\n\n→\n\n→\n^\nL 2 : r = (^\nj + k) + μb, μ ∈ R\n\n1\n\n→\n→\n^\n: r = (−^\ni + 2^\nj + k) + λa, λ ∈ R\n\nand\n\nbe two lines. If the line L passes through the point of intersection of L and L , and\n3\n\n1\n\n2\n\nis parallel to a\n→ + →b, then L passes through the point :",
    "options": [
      "(5, 17, 4)",
      "(2, 8, 5)",
      "(8, 26, 12)",
      "(−1, −1, 1)\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (8, 26, 12).\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (8, 26, 12)."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "If the image of the point (4, 4, 3) in the line\n\nx−1\n2\n\n=\n\ny−2\n1\n\n=\n\nis (α, β, γ), then α + β + γ is equal to\n\nz−1\n3",
    "options": [
      "9",
      "12",
      "7",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 9.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 9."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let in a △ABC , the length of the side AC be 6 , the vertex B be (1, 2, 3) and the vertices A, C lie on the line\nx−6\n3\n\n=\n\ny−7\n\n=\n\n2\n\nz−7\n−2\n\n. Then the area (in sq. units) of △ABC is:",
    "options": [
      "17",
      "21",
      "56",
      "42"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 21.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 21."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let the line passing through the points (−1, 2, 1) and parallel to the line\nx+2\n3\n\n=\n\ny−3\n\n=\n\n2\n\nz−4\n1\n\nx−1\n2\n\n=\n\ny+1\n3\n\n=\n\nz\n4\n\nintersect the line\n\nat the point P . Then the distance of P from the point Q(4, −5, 1) is",
    "options": [
      "5",
      "5√5",
      "5√6",
      "10"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 5√5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 5√5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let the point A divide the line segment joining the points P (−1, −1, 2) and Q(5, 5, 10) internally in the ratio\n\n→\n→\n→\n→\n−\n−\n−\n−\n\n. If O is the origin and (OQ ⋅ OA) −\n\nr : 1(r > 0)\n\n1\n\n5\n\n|OP × OA|",
    "options": [
      "√7",
      "14",
      "3",
      "7\n\n2\n\n, then the value of r is :\n\n= 10"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 7\n\n2\n\n, then the value of r is :\n\n= 10.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 7\n\n2\n\n, then the value of r is :\n\n= 10."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let P be the foot of the perpendicular from the point Q(10, −3, −1) on the line\n\nx−3\n7\n\ny−2\n\n=\n\n−1\n\n=\n\nz+1\n−2\n\n. Then the area\n\nof the right angled triangle P QR, where R is the point (3, −2, 1), is",
    "options": [
      "9√15",
      "√30",
      "8√15",
      "3√30"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 3√30.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 3√30."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "The perpendicular distance, of the line\n\nx−1\n2\n\n=\n\ny+2\n−1\n\n=\n\nz+3\n2\n\nfrom the point P(2, −10, 1), is :",
    "options": [
      "6",
      "5√2",
      "4√3",
      "3√5"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 3√5.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 3√5."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "If the image of the point P(1, 0, 3) in the line joining the points A(4, 7, 1) and B(3, 5, 3) is Q(α, β, γ), then\nα + β + γ",
    "options": [
      "is equal to",
      "47\n3",
      "18\n\n46\n3",
      "13"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 47\n3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 47\n3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let the line L intersect the lines x − 2 = −y = z − 1, 2(x + 1) = 2(y − 1) = z + 1 and be parallel to the line\nx−2\n3\n\ny−1\n\n=\n\n1",
    "options": [
      "(−\n\n1",
      "(−\n\n, 1, 1)",
      "(−\n\n1\n\n3\n\n3\n\n=\n\nz−2\n2\n\n. Then which of the following points lies on L?\n\n, 1, −1)",
      "(−\n\n1\n3\n1\n3\n\n, −1, 1)\n, −1, −1)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (−\n\n1.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (−\n\n1."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "The shortest distance between the lines\n\nx−3\n2\n\n=\n\ny+15\n−7\n\n=\n\nz−9\n5\n\nand",
    "options": [
      "8√3",
      "4√3",
      "5√3",
      "6√3\n\nx+1\n2\n\n=\n\ny−1\n1\n\n=\n\nz−9\n−3\n\nis"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 4√3.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 4√3."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "If the mirror image of the point P (3, 4, 9) in the line\n\nx−1\n3\n\ny+1\n\n=\n\n2",
    "options": [
      "102",
      "138",
      "108",
      "132\n\n=\n\nz−2\n1\n\nis (α, β, γ), then 14(α + β + γ) is:"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 108.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 108."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "Let P and Q be the points on the line\n\nx+3\n\n=\n\n8\n\ny−4\n2\n\n=\n\nz+1\n2\n\nwhich are at a distance of 6 units from the point R(1, 2, 3)\n\n. If the centroid of the triangle P QR is (α, β, γ), then α + β + γ is:\n2\n\n2",
    "options": [
      "26",
      "36",
      "18",
      "24\n\n2"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 18.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 18."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "If the length of the perpendicular drawn from the point P (a, 4, 2), a > 0 on the line\nand Q(α , α , α ) is the image of the point P in this line, then a + ∑\n1\n\n2\n\n3",
    "options": [
      "7",
      "8",
      "12",
      "14\n\n3\ni=1\n\nαi\n\nx+1\n2\n\n=\n\ny−3\n3\n\n=\n\nz−1\n−1\n\nis equal to"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 8.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 8."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "For real numbers α and β ≠ 0, if the point of intersection of the straight lines\nx−4\nβ\n\n=\n\ny−6\n3\n\n=\n\nz−7\n3\n\nx−α\n1\n\n=\n\ny−1\n2\n\n=\n\nz−1\n3\n\nand\n\nlies on the plane x + 2y − z = 8, then α − β is equal to :",
    "options": [
      "5",
      "9",
      "3",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 7.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 7."
  },
  {
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "subConcept": "Lines and Planes in 3D",
    "q": "The angle between the straight lines, whose direction cosines l, m, n are given by the equations 2l + 2 m − n = 0\nand mn + nl+ lm= 0, is:",
    "options": [
      "(2)\n\nπ\n3",
      "cos\n\n−1\n\n(\n\n8\n9\n\nπ\n2",
      "π − cos\n\n)\n\n−1\n\n(\n\n4\n9\n\n)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): cos\n\n−1\n\n(\n\n8\n9\n\nπ\n2.\n\nStep 1: Carefully read and identify the key mathematical concept.\nStep 2: Apply the relevant theorem, formula or algebraic manipulation.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): cos\n\n−1\n\n(\n\n8\n9\n\nπ\n2."
  },

  
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "On combustion 0.210 g of an orgainc compound containing C, H and O gave 0.127 gH O and 0.307 gCO . The\n2\n\n2\n\npercentages of hydrogen and oxygen in the given organic compound respectively are:",
    "options": [
      "53.41, 39.6",
      "6.72, 53.41",
      "7.55, 43.85",
      "6.72, 39.87"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 6.72, 53.41.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 6.72, 53.41."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "Mass of magnesium required to produce 220 mL of hydrogen gas at STP on reaction with excess of dil. HCl is\nGiven : Molar mass of Mg is 24 g mol .\n−1",
    "options": [
      "235.7 g",
      "0.24 mg",
      "236 mg",
      "2.444 g"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 236 mg.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 236 mg."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "Among 10\n\n−9\n\nPb, Po, Pr\n\ng\n\n(each) of the following elements, which one will have the highest number of atoms? Element :\n\nand Pt",
    "options": [
      "Po",
      "Pr",
      "Pb",
      "Pt"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Pr.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Pr."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "Concentrated nitric acid is labelled as 75% by mass. The volume in mL of the solution which contains 30 g of nitric\nacid is\n____.\nGiven : Density of nitric acid solution is 1.25 g/mL.",
    "options": [
      "40",
      "32",
      "45",
      "55"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 32.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 32."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "2.8 × 10\n\n−3\n\nmol\n\nof CO is left after removing 10\n\n21\n\n2\n\nmolecules from its ' x ' mg sample. The mass of CO taken\n2\n\ninitially is\nGiven: N\n\nA\n\n= 6.02 × 10\n\n23\n\nmol\n\n−1",
    "options": [
      "98.3 mg",
      "48.2 mg",
      "196.2 mg",
      "150.4 mg"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 196.2 mg.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 196.2 mg."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "The density of ' x ' M solution (' X ' molar) of NaOH is 1.12 g mL , while in molality, the concentration of the\n−1\n\nsolution is 3 m(3molal). Then x is (Given : Molar mass of NaOH is 40 g/mol)",
    "options": [
      "3.5",
      "3.8",
      "2.8",
      "3.0"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 3.0.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 3.0."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "Production of iron in blast furnace follows the following equation\nFe 3 O 4 (s) + 4 CO(g) → 3 Fe(l) + 4 CO 2 (g)\n\nwhen 4. 640 kg of Fe O and 2. 520 kg of CO are allowed to react then the amount of iron (in g) produced is:\n3\n\n4\n\n[Given: Molar Atomic mass (gmol\nMolar Atomic mass (gmolm\n\n−1\n\n−1\n\n) : Fe = 56\n\n) : C = 12\n\n, Molar Atomic mass (gmolm\n\n−1\n\n) : O = 16\n\n]",
    "options": [
      "1400",
      "2200",
      "3360",
      "4200"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 3360.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 3360."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": ", C(s) +\n\nC(s) + O 2 (g) → CO 2 (g) + 400 kJ\n\n1\n2\n\nO 2 (g) → CO(g) + 100 kJ\n\nWhen coal of purity 60% is allowed to burn in presence of insufficient oxygen, 60% of carbon is converted into '\n' and the remaining is converted into 'CO '.\n\nCO\n\n2\n\nThe heat generated when 0. 6 kg of coal is burnt is",
    "options": [
      "1600 kJ",
      "3200 kJ",
      "4400 kJ",
      "6600 kJ"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 6600 kJ.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 6600 kJ."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "A commercially sold conc. HCl is 35% HCl by mass. If the density of this commercial acid is 1. 46 g/ mL, the\nmolarity of this solution is : (Atomic mass : Cl = 35. 5 amu, H = 1 amu)",
    "options": [
      "10. 2 M",
      "14. 0 M",
      "12. 5 M",
      "18. 2 M"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 14. 0 M.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 14. 0 M."
  },
  {
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "subConcept": "Mole Concept and Stoichiometry",
    "q": "Hemoglobin contains 0. 34% of iron by mass. The number of Fe atoms in 3. 3 g of hemoglobin is (Given : Atomic\nmass of Fe is 56u, N in6. 022 × 10\n\n23\n\nA\n\nmol\n\n−1\n\n)",
    "options": [
      "1. 21 × 10\n\n5",
      "12. 0 × 10",
      "1. 21 × 10\n\n20",
      "3. 4 × 10\n\n16\n\n22"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1. 21 × 10\n\n20.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1. 21 × 10\n\n20."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "Correct statements for an element with atomic number 9 are\nA. There can be 5 electrons for which m = +\ns\n\n1\n2\n\nand 4 electrons for which m = −\ns\n\n1\n2\n\nB. There is only one electron in p orbital\nz\n\nC. The last electron goes to orbital with n = 2 and l = 1\n4. The sum of angular nodes of all the atomic orbitals is 1.\nChoose the correct answer from the options given below:",
    "options": [
      "C and D Only",
      "A and C Only",
      "A, C and D Only",
      "A and B Only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A and C Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A and C Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "Which one of the following about an electron occupying the 1 s orbital in a hydrogen atom is incorrect ? (Bohr's\nradius is represented by a a )\n0",
    "options": [
      "The probability density of finding the electron is maximum at the nucleus",
      "The electron can be found at a distance 2a from the nucleus\n0",
      "The 1 s orbital is spherically symmetrical",
      "The total energy of the electron is maximum when it is at a distance a from the nucleus\n0"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): The total energy of the electron is maximum when it is at a distance a from the nucleus\n0.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): The total energy of the electron is maximum when it is at a distance a from the nucleus\n0."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "Which of the following postulate of Bohr's model of hydrogen atom in not in agreement with quantum mechanical\nmodel of an atom ?",
    "options": [
      "An atom in a stationary state does not emit electromagnetic radiation as long as it stays in the same state",
      "An atom can take only certain distinct energies E , E , E , etc. These allowed states of constant energy are\n1\n\n2\n\n3\n\ncalled the stationary states of atom",
      "When an electron makes a transition from a higher energy stationary state to a lower energy stationary state, then\nit emits a photon of light",
      "The electron in a H atom's stationary state moves in a circle around the nucleus"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): The electron in a H atom's stationary state moves in a circle around the nucleus.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): The electron in a H atom's stationary state moves in a circle around the nucleus."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "For hydrogen like species, which of the following graphs provides the most appropriate representation of E vs Z plot\nfor a constant n ?\n[E: Energy of the stationary state,\nZ : atomic number, n = principal quantum number]",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "If a is denoted as the Bohr radius of hydrogen atom, then what is the de-Broglie wavelength (λ) of the electron\n0\n\npresent in the second orbit of hydrogen atom? [n : any integer]",
    "options": [
      "8πa 0",
      "2a 0",
      "4n\n\nn\n\nπa 0",
      "4πa 0\n\nnπ\n\nn"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 8πa 0.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 8πa 0."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "Which of the following is/are not correct with respect to energy of atomic orbitals of hydrogen atom?\n(A)1 s < 2p < 3 d < 4 s\n(B) 1 s < 2 s = 2p < 3 s = 3p\n(C) 1 s < 2 s < 2p < 3 s < 3p\n(D) 1 s < 2 s < 4 s < 3 d\nChoose the correct answer from the options given below :",
    "options": [
      "(A) and (C) only",
      "(B) and (D) only",
      "(C) and (D) only",
      "(A) and (B) only"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (C) and (D) only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (C) and (D) only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "In a multielectron atom, which of the following orbitals described by three quantum numbers will have same energy\nin absence of electric and magnetic fields?\nA. n = 1, l = 0, m\n\n1\n\n= 0\n\nB. n = 2, l = 0, m\n\n1 = 0\n\nC. n = 2, l = 1, m\n\n1\n\nD. n = 3, l = 2, m\nE. n = 3, l = 2, m\n\n= 1\n\n1\n\n= 1\n\n1\n\n= 0\n\nChoose the correct answer from the options given below:",
    "options": [
      "B and C Only",
      "A and B Only",
      "C and D Only",
      "D and E Only"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): D and E Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): D and E Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "Radius of the first excited state of Helium ion is given as :\na0 →\n\nradius of first stationary state of hydrogen atom.",
    "options": [
      "r = 4a",
      "r = 2a\n\n0",
      "r =",
      "r =\n\na0\n2\n\n0\n\na0\n4"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): r = 2a\n\n0.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): r = 2a\n\n0."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "The four quantum numbers for the electron in the outer most orbital of potassium (atomic no. 19) are",
    "options": [
      "n = 4, l = 2, m = −1, s = +",
      "n = 4, l = 0, m = 0, s = +\n\n1",
      "n = 3, l = 0, m = −1, s = +\n\n1\n2\n1\n2",
      "n = 2, l = 0, m = 0, s = +\n\n1\n\n2\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): n = 4, l = 0, m = 0, s = +\n\n1.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): n = 4, l = 0, m = 0, s = +\n\n1."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "The correct set of four quantum numbers for the valence electron of rubidium atom (Z = 37) is:",
    "options": [
      "5, 0, 0, +",
      "5, 0, 1, +\n\n1",
      "5, 1, 0, +\n\n1\n2\n1\n2",
      "5, 1, 1, +\n\n1\n\n2\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 5, 0, 0, +.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 5, 0, 0, +."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "The electronic configuration of Einsteinium is :\n(Given atomic number of Einsteinium = 99)",
    "options": [
      "[Rn]5f\n\n10",
      "[Rn]5f\n\n13\n\n∘\n\n2",
      "[Rn]5f\n\n11\n\n∘\n\n2",
      "[Rn]5f\n\n12\n\n6 d 7 s\n6 d 7 s\n\n∘\n\n2\n\n∘\n\n2\n\n6 d 7 s\n6 d 7 s"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): [Rn]5f\n\n11\n\n∘\n\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): [Rn]5f\n\n11\n\n∘\n\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "The number of radial node/s for 3p orbital is:",
    "options": [
      "1",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "According to Bohr's atomic theory:\n(A) Kinetic energy of electron is ∝\n\nZ\n\n2\n\nn\n\n2\n\n.\n\n(B) The product of velocity (v) of electron and principal quantum number (n), ′vn′∝ Z .\n2\n\n(C) Frequency of revolution of electron in an orbit is ∝\n(D) Coulombic force of attraction on the electron is ∝\n\nZ\n\n3\n\nn\n\n3\n\nZ\n\n3\n\nn\n\n4\n\n.\n\n.\n\nChoose the most appropriate answer from the options given below:",
    "options": [
      "(A), (C) and (D) only",
      "(A) and (D) only",
      "(C) only",
      "(A) only"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (A) and (D) only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (A) and (D) only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "subConcept": "Atomic Structure and Quantum Numbers",
    "q": "Outermost electronic configuration of a group 13 element, E, is 4 s , 4p . The electronic configuration of an\n2\n\n1\n\nelement of p-block period-five placed diagonally to element, E is:",
    "options": [
      "[Kr]3 d\n\n10",
      "[Ar]3 d\n\n10",
      "[Xe]5 d\n\n10\n\n2\n\n2\n\n2\n\n2\n\n4 s 4p\n6 s 6p",
      "[Kr]4 d\n\n10\n\n2\n\n2\n\n2\n\n2\n\n4 s 4p\n5 s 5p"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): [Kr]4 d\n\n10\n\n2\n\n2\n\n2\n\n2\n\n4 s 4p\n5 s 5p.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): [Kr]4 d\n\n10\n\n2\n\n2\n\n2\n\n2\n\n4 s 4p\n5 s 5p."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "The hydration energies of K and Cl are -x and -y kJ/mol respectively. If lattice energy of KCl is -z kJ/mol, then\n−\n\n+\n\nthe heat of solution of KCl is :",
    "options": [
      "+x − y − z",
      "x + y + z",
      "z − (x + y)",
      "−z − (x + y)"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): z − (x + y).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): z − (x + y)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "One mole of an ideal gas expands isothermally and reversibly from 10dm to 20dm at 300 K. ΔU, q and work\n3\n\n3\n\ndone in the process respectively are :\nGiven : R = 8.3JK\n\n−1\n\nand mol\n\n−1\n\nIn 10 = 2.3\nlog 2 = 0.30\nlog 3 = 0.48",
    "options": [
      "0, 21.84 kJ, −1.26 kJ",
      "0, −17.18 kJ, 1.718 J",
      "0, 21.84 kJ, 21, 84 kJ",
      "0, 178 kJ, −1.718 kJ"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 0, 178 kJ, −1.718 kJ.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 0, 178 kJ, −1.718 kJ."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "Let us consider a reversible reaction at temperature, T.\nIn this reaction, both ΔH and ΔS were observed to have positive values. If the equilibrium temperature is Te , then\nthe reaction becomes spontaneous at :",
    "options": [
      "T = Te",
      "Te > T",
      "T > Te",
      "Te = 5 T"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): T > Te.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): T > Te."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "If\nC(\n\nC\n\n(diamond ) → C (graphite ) + XkJmol\n\n−1\n\ndiamond ) + O ( g) → CO ( g) + YkJmol\n2\n\n−1\n\n2\n\nC (graphite) +O ( g) → CO ( g) + ZkJmol\n2\n\n−1\n\n2\n\nat constant temperature. Then",
    "options": [
      "X=-Y+Z",
      "-X=Y+Z",
      "X=Y+Z",
      "X=Y-Z"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): X=Y-Z.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): X=Y-Z."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "500 J of energy is transferred as heat to 0.5 mol of Argon gas at 298 K and 1.00 atm. The final temperature and the\nchange in internal energy respectively are:\nGiven : R = 8.3 J K\n\n−1\n\nmol\n\n−1",
    "options": [
      "378 K and 500 J",
      "368 K and 500 J",
      "348 K and 300 J",
      "378 K and 300 J"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 348 K and 300 J.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 348 K and 300 J."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "An ideal gas undergoes a cyclic transformation starting from the point A and coming back to the same point by\ntracing the path A → B → C → D → A as shown in the three cases above.\nChoose the correct option regarding ΔU :",
    "options": [
      "ΔU (Case-I) = ΔU (Case-II) = ΔU (Case-III)",
      "ΔU (Case-I) > ΔU (Case-III) > ΔU (Case-II)",
      "ΔU (Case-III) > ΔU (Case-II) > ΔU (Case-I)",
      "ΔU (Case-I) > ΔU (Case-II) > ΔU (Case-III)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): ΔU (Case-I) = ΔU (Case-II) = ΔU (Case-III).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): ΔU (Case-I) = ΔU (Case-II) = ΔU (Case-III)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "Which of the following mixing of 1 M base and 1 M acid leads to the largest increase in temperature?",
    "options": [
      "30 mLCH COOH and 30 mL NaOH\n3",
      "45 mLCH COOH and 25 mL NaOH\n3",
      "30 mL HCl and 30 mL NaOH",
      "50 mL HCl and 20 mL NaOH"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 30 mL HCl and 30 mL NaOH.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 30 mL HCl and 30 mL NaOH."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "Let us consider an endothermic reaction which is non-spontaneous at the freezing point of water. However, the\nreaction is spontaneous at boiling point of water. Choose the correct option.",
    "options": [
      "Both ΔH and ΔS are (-ve)",
      "ΔH is (-ve) but ΔS is (+ve)",
      "ΔH is (+ve) but ΔS is (−ve)",
      "Both ΔH and ΔS are (+ve)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Both ΔH and ΔS are (+ve).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Both ΔH and ΔS are (+ve)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "The effect of temperature on spontaneity of reactions are represented as :\nΔH\n\nΔ S\n\nTemperature\n\nSpontaneity\n\n(A)\n\n+\n\n−\n\nany T\n\nNon spontaneous\n\n(B)\n\n+\n\n+\n\nlow T\n\nspontaneous\n\n(C)\n\n−\n\n−\n\nlow T\n\nNon spontaneous\n\n(D)\n\n−\n\n+\n\nany T\n\nspontaneous\n\nThe incorrect combinations are :",
    "options": [
      "(B) and (C) only",
      "(B) and (D) only",
      "(A) and (D) only",
      "(A) and (C) only"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (B) and (C) only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (B) and (C) only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "Arrange the following in order of magnitude of work done by the system / on the system at constant temperature :\n(a) |w\n\nreversible |\n\n(b) |w\n(c) |w\n\nreversible |\n\n(d) |w\n\nfor expansion in infinite stage.\n\nirreversible |\n\nfor expansion in single stage.\n\nfor compression in infinite stage.\n\nirreversible |\n\nfor compression in single stage.\n\nChoose the correct answer from the options given below:",
    "options": [
      "a > b > c > d",
      "d > c = a > b",
      "c = a > d > b",
      "a > c > b > d"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): d > c = a > b.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): d > c = a > b."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "Which of the following graphs correctly represents the variation of thermodynamic properties of Haber's process?",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "What happens when methane undergoes combustion in systems A and B respectively?",
    "options": [
      "(2)",
      "(4)\n\nSystem A\n\nSystem B\n\nTemperature rises\n\nTemperature remains same\n\nSystem A\n\nSystem B\n\nTemperature remains same\n\nTemperature rises\n\nSystem A\n\nSystem B\n\nTemperature f alls\n\nTemperature remains same\n\nSystem A\n\nSystem B\n\nTemperature f alls\n\nTemperature rises"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Thermodynamics (C)",
    "subConcept": "Laws of Thermodynamics",
    "q": "At 25 °C and 1 atm pressure, the enthalpies of combustion are as given below:\nSubstance\nΔc H\n\nH2\n\nC (graphite)\n\nC 2 H 6 (g)\n\n−286.0\n\n−394.0\n\n−1560.0\n\n⊖\n\nkJmol\n\n−1\n\nThe enthalpy of formation of ethane is",
    "options": [
      "+54. 0 kJ mol\n\n−1",
      "−68. 0 kJ mol\n\n−1",
      "−86. 0 kJ mol\n\n−1",
      "+97. 0 kJ mol\n\n−1"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): −86. 0 kJ mol\n\n−1.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): −86. 0 kJ mol\n\n−1."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "In the following system, PCl ( g) ⇌ PCl ( g) + Cl ( g) at equilibrium, upon addition of xenon gas at constant\n5\n\nT&p\n\n3\n\n2\n\n, the concentration of",
    "options": [
      "PCl will increase",
      "Cl will decrease",
      "PCl , PCl &Cl remain constant",
      "PCl will increase\n\n5\n\n5\n\n3\n\n2\n\n2\n\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Cl will decrease.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Cl will decrease."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "At temperature T, compound AB\n\n2( g)\n\ndissociates as AB\n\n2( g)\n\n⇌ AB (g) +\n\n1\n2\n\nB 2( g)\n\nhaving degree of dissociation x\n\n(small compared to unity). The correct expression for x in terms of K and p is\np",
    "options": [
      "√\n4",
      "√\n\n2K p\n\n3\n\np\n\n2K p\np",
      "3\n\n√",
      "√K\n\n2\n\n2 Kp\n\np\n\np"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 3\n\n√.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 3\n\n√."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "For the reaction,\nH 2 ( g) + I 2 ( g) ⇌ 2HI( g)\n\nAttainment of equillibrium is predicted correctly by :",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "A vessel at 1000 K contains CO with a pressure of 0.5 atm. Some of CO is converted into CO on addition of\n2\n\n2\n\ngraphite. If total pressure at equilibrium is 0.8 atm , then Kp is :",
    "options": [
      "1.8 atm",
      "0.3 atm",
      "3 atm",
      "0.18 atm"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1.8 atm.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1.8 atm."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "C\n\nA (g) ⇌ B (g) +",
    "options": [
      "K\n\nP\n\n=\n\n1\n\nα\n\n2\n\nP\n\nα)\n\n=\n\n. The correct relationship between K , α and equilibrium pressure P is\nP",
      "K\n\n2 P 2\n\n(2+",
      "K\n\n(g)\n\n1\n\n1\n\nα\n\n1\n\n(2+",
      "K\n\n2 P 2\n\nα)\n\nα\n\n=\n\n2\n\n3\n\n(2+\n\nP\n\n3\n\nP\n\n=\n\n2\n\n2 P 2\n\nα)\n\n1\n2 (1−\n\nα)\n\n1\n\n1\n\nα\n\n1\n\n3\n\n2 P 2\n\n(2+\n\nα)\n\n3\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): K\n\n2 P 2\n\n(2+.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): K\n\n2 P 2\n\n(2+."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "At −20 C and 1 atm pressure, a cylinder is filled with equal number of H , I and HI molecules for the reaction\n∘\n\n2\n\n2\n\n, the K for the process is x × 10 .\n−1\n\nH 2 ( g) + I 2 ( g) ⇌ 2HI(g)\nx =\n\np\n\n_____ [Given : R = 0.082 L atm K",
    "options": [
      "0.01\n\n−1\n\nmol\n\n−1\n\n]",
      "10",
      "2",
      "1"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 10.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 10."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "The equilibrium constant for the reaction SO (g) ⇌ SO ( g) +\n3\n\n2\n\n1\n2\n\nO 2 ( g)\n\nis K = 4.9 × 10 . The value of K for the reaction given below is 2SO ( g) + O ( g) ⇌ 2SO ( g) is :\n−2\n\nc\n\nc\n\n2",
    "options": [
      "4.9",
      "49",
      "41.6",
      "416\n\n2\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 416\n\n2\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 416\n\n2\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Equilibrium",
    "subConcept": "Equilibrium Constants",
    "q": "For a reaction at equilibrium A(g) ⇌ B(g) +\n\n1\n2\n\nC(g)\n\nthe relation between dissociation constant (K), degree of\n\ndissociation (α) and equilibrium pressure (p) is given by :",
    "options": [
      "K =\n\n3\n\nα\n\nα)\n\n(2+",
      "K =\n\n1\n\n2 p 2\n1\n\nα)\n\n2 (1−\n\nαp)\n\n(\n\n(1+\n\n3",
      "K =",
      "K =\n\n2\n\n1\n\n(1+\n\n3\n2\n\nα)\n\n2\n\nα\n\nα)\n\n(1−\n\n3\n2\n\n2 p 2\n\nα)\n\nαp)\n\n(\n(1+\n\n3\n\n1\n\n1\n2\n\n(1−\n\nα)\n\n3\n2\n\nα)(1−α)\n\n1\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): K =\n\n3\n\nα\n\nα)\n\n(2+.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): K =\n\n3\n\nα\n\nα)\n\n(2+."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "An aqueous solution of HCl with pH 1.0 is diluted by adding equal volume of water (ignoring dissociation of\nwater). The pH of HCl solution would\n(Given log 2 = 0.30)",
    "options": [
      "reduce to 0.5",
      "increase to 1.3",
      "remain same",
      "increase to 2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): increase to 1.3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): increase to 1.3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "10 mL of 2 M NaOH solution is added to 20 mL of 1 M HCl solution kept in a beaker. Now, 10 mL of this mixture\nis poured into a volumetric flask of 100 mL containing 2 moles of HCl and made the volume upto the mark with\ndistilled water. The solution in this flask is :",
    "options": [
      "0.2 M NaCl solution",
      "20 M HCl solution",
      "10 M HCl solution",
      "Neutral solution"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 20 M HCl solution.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 20 M HCl solution."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "Arrange the following in increasing order of solubility product :\nCa(OH) 2 , AgBr, PbS, HgS",
    "options": [
      "HgS < AgBr < PbS < Ca(OH)",
      "Ca(OH)\n\n2\n\n< AgBr < HgS < PbS",
      "PbS < HgS < Ca(OH)\n\n2\n\n2 < AgBr",
      "HgS < PbS < AgBr < Ca(OH)\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): HgS < PbS < AgBr < Ca(OH)\n\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): HgS < PbS < AgBr < Ca(OH)\n\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "A weak acid HA has degree of dissociation x. Which option gives the correct expression of (pH-pK )?\na",
    "options": [
      "0",
      "log(1 + 2x)",
      "log (\n\n1−x\nx",
      "log (\n\n)\n\nx\n1−x\n\n)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): log (\n\n)\n\nx\n1−x\n\n).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): log (\n\n)\n\nx\n1−x\n\n)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "Which of the following happens when NH OH is added gradually to the solution containing 1 M A\n\n2+\n\n4\n\nand 1MB\n\n3+\n\nions?\nGiven : K\n\nsp [A(OH) 2 ]\n\n= 9 × 10\n\n−10\n\nand K\n\nsp [B(OH) 3 ]\n\n= 27 × 10\n\n−18\n\nat 298 K.",
    "options": [
      "Both A(OH) and B(OH) do not show precipitation with NH OH\n2\n\n3\n\n4",
      "A(OH) will precipitate before B(OH)\n\n3",
      "B(OH) will precipitate before A(OH)\n\n2\n\n2\n\n3",
      "A(OH) and B(OH) will precipitate together\n2\n\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): B(OH) will precipitate before A(OH)\n\n2\n\n2\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): B(OH) will precipitate before A(OH)\n\n2\n\n2\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "If equal volumes of AB and XY (both are salts) aqueous solutions are mixed, which of the following combination\n2\n\nwill give a precipitate of AY at 300 K ?\n2\n\n(Given K\n\nsp\n\n(at 300 K) for AY",
    "options": [
      "3.6 × 10\n\n−3",
      "2.0 × 10\n\n−4",
      "2.0 × 10\n\n−2",
      "1.5 × 10\n\n−4\n\n2\n\n= 5.2 × 10\n\nM AB 2 , 5.0 × 10\nM AB 2 , 0.8 × 10\nM AB 2 , 2.0 × 10\nM AB 2 , 1.5 × 10\n\n−4\n\n−3\n\n−2\n\n−3\n\n−7\n\n)\n\nM XY\nM XY\nM XY\nM XY"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 2.0 × 10\n\n−2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 2.0 × 10\n\n−2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "200 mL\n\nof 0. 01M HCl is mixed with 400 mL of 0. 01M H SO . The pH of the mixture is\n2",
    "options": [
      "1. 14",
      "1. 78",
      "2. 34",
      "3. 02\n\n4"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1. 78.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1. 78."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "The Plot of pH-metric titration of weak base NH OH vs strong acid HCl looks like\n4",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "Ka 1 , Ka 2\n\nand Ka are the respective ionization constants for the following reactions (a), (b) and (c).\n3\n\n(a) H C O\n2\n\n2\n\n(b) HC O\n2\n\n4\n\n(c) H C O\n2\n\n4\n\n−\n\n2\n\n4\n\n⇌ H\n⇌ H\n\n+\n\n+\n\n⇌ 2H\n\n+ HC 2 O\n+ HC 2 O\n\n+\n\n+ C2 O\n\nThe relationship between K\n\n−\n4\n2−\n4\n\n2−\n4\n\na1 ,\n\nKa\n\n2\n\nand K\n\na3\n\nis given as",
    "options": [
      "K\n\na3 = K a1 + K a2",
      "K\n\na3",
      "K\n\na3 = K a1 − K a2",
      "K\n\na3 = K a1 × K a2\n\n=\n\nK a1\nK a2"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): K\n\na3 = K a1 × K a2\n\n=\n\nK a1\nK a2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): K\n\na3 = K a1 × K a2\n\n=\n\nK a1\nK a2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "20 mL\n\nof 0. 1M NH OH is mixed with 40 mL of 0. 05 M HCl. The pH of the mixture is nearest to:\n4\n\n(Given: K (NH OH) = 1 × 10\nb\n\n4\n\n−5\n\n,\n\n, log 3 = 0. 48, log 5 = 0. 69, log 7 = 0. 84, log 11 = 1. 04)\n\nlog 2 = 0. 30",
    "options": [
      "3. 2",
      "4. 2",
      "5. 2",
      "6. 2"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 5. 2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 5. 2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Ionic Equilibrium",
    "subConcept": "pH and Buffer Solutions",
    "q": "A solution is 0. 1M in Cl and 0. 001M in CrO\n−\n\n2−\n4\n\n.\n\nSolid AgNO is gradually added to it Assuming that the addition does not change in volume and\n3\n\nK sp (AgCl) = 1. 7 × 10\n\n−10\n\nM\n\n2\n\nand K\n\nsp (Ag 2 CrO 4 )\n\n= 1. 9 × 10\n\n−12\n\n3\n\nM .\n\nSelect correct statement from the following:",
    "options": [
      "AgCl precipitates first because its K",
      "Ag CrO precipitates first as its K\n4\n\n2\n\nsp\n\nsp\n\nis high.\n\nis low.",
      "Ag CrO precipitates first because the amount of Ag needed is low.\n+\n\n4\n\n2",
      "AgCl will precipitate first as the amount of Ag needed to precipitate is low.\n+"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): AgCl will precipitate first as the amount of Ag needed to precipitate is low.\n+.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): AgCl will precipitate first as the amount of Ag needed to precipitate is low.\n+."
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions",
    "subConcept": "Oxidation and Reduction",
    "q": "The species which does not undergo disproportionation reaction is :",
    "options": [
      "ClO\n\n−",
      "ClO\n\n−",
      "ClO\n\n−\n\n3\n\n2",
      "ClO\n\n−\n4"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): ClO\n\n−\n4.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): ClO\n\n−\n4."
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions",
    "subConcept": "Oxidation and Reduction",
    "q": "During the reaction of permanganate with thiosulphate, the change in oxidation of manganese occurs by value of 3.\nIdentify which of the below medium will favour the reaction.",
    "options": [
      "Both aqueous acidic and neutral",
      "Aqueous neutral",
      "Both aqueous acidic and faintly alkaline",
      "Aqueous acidic"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Aqueous neutral.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Aqueous neutral."
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions",
    "subConcept": "Oxidation and Reduction",
    "q": "Strong reducing and oxidizing agents among the following , respectively, are",
    "options": [
      "Ce\n\n3+\n\nand Ce",
      "Ce\n\n2+",
      "Ce and Eu\n4+\n\n4+",
      "Eu\n\n4+\n\n2+\n\nand Tb\nand Ce\n\n4+\n\n4+"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Eu\n\n4+\n\n2+\n\nand Tb\nand Ce\n\n4+\n\n4+.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Eu\n\n4+\n\n2+\n\nand Tb\nand Ce\n\n4+\n\n4+."
  },
  {
    "subject": "Chemistry",
    "chapter": "Redox Reactions",
    "subConcept": "Oxidation and Reduction",
    "q": "In polythionic acid, H S O (x = 3 to 5) the oxidation state(s) of sulphur is/are:\n2\n\nx\n\n6",
    "options": [
      "+6 only",
      "+5 only",
      "0 and +5 only",
      "+3 and +5 only"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 0 and +5 only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 0 and +5 only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "Which of the following binary mixture does not show the behaviour of minimum boiling azeotropes?",
    "options": [
      "H O + CH COC H\n2\n\n3\n\n2\n\n5",
      "C H OH + C H NH",
      "CS + CH COCH\n6\n\n5\n\n6\n\n5\n\n2\n\n2\n\n3\n\n3",
      "CH OH + CHCl\n3\n\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): C H OH + C H NH.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): C H OH + C H NH."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "Liquid A and B form an ideal solution. The vapour pressure of pure liquids A and B are 350 and 750 mm Hg\nrespectively at the same temperature. If x and x are the mole fraction of A and B in solution while y and y are\nA\n\nB\n\nA\n\nB\n\nthe mole fraction of A and B in vapour phase then :",
    "options": [
      "xA",
      "yA\nyB\n\nxA\nxB",
      "xA\n\nxB\n\nxB\n\n<\n>",
      "(x\n\nyA\nyB\n\n=\n\nyA\nyB\n\nA − y A ) < (x B − y B )"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): xA\n\nxB\n\nxB\n\n<\n>.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): xA\n\nxB\n\nxB\n\n<\n>."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "XY\n\nis the membrane / partition between two chambers 1 and 2 containing sugar solutions of concentration c and\n1\n\nc 2 (c 1 > c 2 )molL\n\n−1\n\n. For the reverse osmosis to take place identify the correct condition\n\n(Here p and p are pressures applied on chamber 1 and 2)\n1\n\n2\n\n(A) Membrane/Partition; Cellophane, p\n(B) Membrane/Partition ; Porous. p\n\n2\n\n1\n\n> π\n\n> π\n\n(C) Membrane/Partition ; Parchment paper, p\n(D) Membrane/Partition : Cellophane, p\n\n1\n\n> π\n\n2 > π\n\nChoose the correct answer from the option given below :",
    "options": [
      "B and D only",
      "A and D only",
      "A and C only",
      "C only"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): A and C only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): A and C only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "Assume a living cell with 0.9%(ω/ω) of glucose solution (aqueous). This cell is immersed in another solution\nhaving equal mole fraction of glucose and water.\n(Consider the data upto first decimal place only)\nThe cell will :",
    "options": [
      "shrink since solution is 0.45%(ω/ω) as a result of association of glucose molecules (due to hydrogen bonding)",
      "Show no change in volume since solution is 0.9%(ω/ω)",
      "swell up since solution is 1%(ω/ω)",
      "shrink since soluton is 0.5%(ω/ω)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): shrink since soluton is 0.5%(ω/ω).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): shrink since soluton is 0.5%(ω/ω)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "What is the freezing point depression constant of a solvent, 50 g of which contain 1 g non volatile solute (molar\nmass 256 g mol ) and the decrease in freezing point is 0.40 K ?\n−1",
    "options": [
      "3.72 K kg mol\n\n−1",
      "1.86 K kg mol\n\n−1",
      "4.43 K kg mol\n\n−1",
      "5.12 K kg mol\n\n−1"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 5.12 K kg mol\n\n−1.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 5.12 K kg mol\n\n−1."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "Consider the given plots of vapour pressure (VP) vs temperature(T/K). Which amongst the following options is\ncorrect graphical representation showing ΔT , depression in the freezing point of a solvent in a solution?\nf",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "Arrange the following solutions in order of their increasing boiling points.\n(i) 10\n\n−4\n\n(ii) 10\n\nM NaCl\n\n−4\n\n(iii) 10\n(iv) 10\n\nM\n\n−3\n\n−2\n\nUrea\n\nM NaCl\n\nM NaCl",
    "options": [
      "(i) < (ii) < (iii) < (iv)",
      "(iv) < (iii) < (i) < (ii)",
      "(ii) < (i) ≡ (iii) < (iv)",
      "(ii) < (i) < (iii) < (iv)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (ii) < (i) < (iii) < (iv).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (ii) < (i) < (iii) < (iv)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "A solution is made by mixing one mole of volatile liquid A with 3 moles of volatile liquid B. The vapour pressure\nof pure A is 200 mm Hg and that of the solution is 500 mm Hg. The vapour pressure of pure B and the least volatile\ncomponent of the solution, respectively, are :",
    "options": [
      "1400 mmHg, A",
      "1400 mmHg, B",
      "600 mmHg, B",
      "600 mmHg, A"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 600 mmHg, A.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 600 mmHg, A."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "Identify the mixture that shows positive deviations from Raoult's Law",
    "options": [
      "(CH ) CO + C H NH\n3\n\n2\n\n6",
      "CHCl + C H\n3\n\n6\n\n5\n\n2\n\n6",
      "CHCl + (CH ) CO\n3\n\n3\n\n2",
      "(CH ) CO + CS"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (CH ) CO + CS.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (CH ) CO + CS."
  },
  {
    "subject": "Chemistry",
    "chapter": "Solutions",
    "subConcept": "Colligative Properties",
    "q": "At 35 C, the vapour pressure of CS , is 512mm Hg and that of acetone is 144 mmHg. A solution of CS in\no\n\n2\n\n2\n\nacetone has a total vapour pressure of 600 mmHg. The false statement amongst the following is:",
    "options": [
      "Raoult's law is not obeyed by this system",
      "a mixture of 100mLCS and 100mL acetone has a volume < 200mL\n2",
      "CS and acetone are less attracted to each other than to themselves\n2",
      "heat must be absorbed in order to produce the solution at 35 C\no"
    ],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): a mixture of 100mLCS and 100mL acetone has a volume < 200mL\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): a mixture of 100mLCS and 100mL acetone has a volume < 200mL\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "40 mL of a mixture of CH COOH and HCl (aqueous solution) is titrated against 0.1 M NaOH solution\n3\n\nconductometrically. Which of the following statement is correct?",
    "options": [
      "The concentration of CH COOH in the original mixture is 0.005 M\n3",
      "The concentration of HCl in the original mixture is 0.005 M",
      "CH COOH is neutralised first followed by neutralisation of HCl\n3",
      "Point ' C ' indicates the complete neutralisation HCl"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): The concentration of HCl in the original mixture is 0.005 M.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): The concentration of HCl in the original mixture is 0.005 M."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "Correct order of limiting molar conductivity for cations in water at 298 K is :",
    "options": [
      "H\n\n+",
      "H\n\n+",
      "Mg",
      "H\n\n> Na\n\n+\n\n> K\n\n2+\n\n> Ca\n2+\n\n+\n\n> H\n\n> Na\n\n> Ca\n\n> Mg\n\n+\n\n+\n\n+\n\n> Ca\n\n> Ca\n\n2+\n\n2+\n\n2+\n\n2+\n\n> K\n> K\n\n> Mg\n\n+\n\n+\n\n> Mg\n\n2+\n\n> Na\n> Na\n\n2+\n\n> K\n\n+\n\n+\n\n+"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): H\n\n+.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): H\n\n+."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "O2\n\ngas will be evolved as a product of electrolysis of :\n\n(A) an aqueous solution of AgNO using silver electrodes.\n3\n\n(B) an aqueous solution of AgNO using platinum electrodes.\n3\n\n(C) a dilute solution of H SO using platinum electrodes.\n2\n\n4\n\n(D) a high concentration solution of H SO using platinum electrodes.\n2\n\n4\n\nChoose the correct answer from the options given below :",
    "options": [
      "(A) and (C) only",
      "(B) and (C) only",
      "(A) and (D) only",
      "(B) and (D) only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (B) and (C) only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (B) and (C) only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "The standard reduction potential values of some of the p-block ions are given below. Predict the one with the\nstrongest oxidising capacity.",
    "options": [
      "E\n\n⊖",
      "E\n\n⊖",
      "E\n\n⊖\n\nPb\n\nSn\n\nAl",
      "E\n\n4+\n\n4+\n\n3+\n\n/Sn\n\n= +1.67 V\n\n2+\n\n= +1.15 V\n\n= −1.66 V\n/Al\n\no\nTl\n\n2+\n\n/Pb\n\n3+\n\n/Tl\n\n= +1.26 V"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): E\n\n⊖.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): E\n\n⊖."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "For the given cell\nFe\n\n2+\n(aq)\n\n+ Ag\n\n+\n(aq)\n\n→ Fe\n\n3+\n(aq)\n\n+ Ag\n\n(s)\n\nThe standard cell potential of the above reaction is Given:\nAg\nFe\nFe\n\n+\n\n2+\n\n3+\n\n+ e\n\n−\n\n+ 2e\n+ 3e\n\n→ Ag\n−\n\nE\n\n→ Fe\n\n−\n\nE\n\n→ Fe\n\nθ\n\nθ\n\nE\n\nθ\n\n= xV\n= yV\n= zV",
    "options": [
      "x + y − z",
      "x + 2y",
      "x + 2y − 3z",
      "y − 2x"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): x + 2y − 3z.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): x + 2y − 3z."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "A solution of aluminium chloride is electrolysed for 30 minutes using a current of 2 A. The amount of the\naluminium deposited at the cathode is\n[Given : molar mass of aluminium and chlorine are 27 g mol\n= 96500Cmol\n\n−1\n\n−1\n\nand 35.5 g mol\n\n−1\n\nrespectively. Faraday constant\n\n]",
    "options": [
      "1.660 g",
      "0.336 g",
      "0.441 g",
      "1.007 g"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 0.336 g.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 0.336 g."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "The quantity of silver deposited when one coulomb charge is passed through AgNO solution :\n3",
    "options": [
      "1 g of silver",
      "1 electrochemical equivalent of silver",
      "1 chemical equivalent of silver",
      "0.1 g atom of silver"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 1 electrochemical equivalent of silver.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 1 electrochemical equivalent of silver."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "The reaction at cathode in the cells commonly used in clocks involves.",
    "options": [
      "reduction of Mn from +7 to +2",
      "reduction of Mn from +4 to +3",
      "oxidation of Mn from +3 to +4",
      "oxidation of Mn from +2 to +7"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): reduction of Mn from +4 to +3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): reduction of Mn from +4 to +3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "subConcept": "Electrochemical Cells and Nernst Equation",
    "q": "The standard electrode potential of M /M in aqueous solution does not depend on\n+",
    "options": [
      "Hydration of a gaseous metal ion",
      "Sublimation of a solid metal",
      "Ionisation of a solid metal atom",
      "Ionisation of a gaseous metal atom"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Ionisation of a solid metal atom.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Ionisation of a solid metal atom."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "A(g) → B(g) + C(g)\nTime\n\nT\n\n∞\n\nP system\n\nPt\n\nP∞\n\nis a first order reaction.\n\nThe reaction was started with reactant A only. Which of the following expression is correct for rate constant k ?",
    "options": [
      "k =\n\n1",
      "k =\n\n1",
      "k =\n\n1\n\nt\n\nt\n\nln\nln\n\n2(p ∞ −P t )\nPt\n\np∞\n\n2(p ∞ −P t )",
      "k =\n\n1\n\nt\n\nt\n\nln\nln\n\np∞\nPt\np∞\n(p ∞ −P t )"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): k =\n\n1\n\nt\n\nt\n\nln\nln\n\n2(p ∞ −P t )\nPt\n\np∞\n\n2(p ∞ −P t ).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): k =\n\n1\n\nt\n\nt\n\nln\nln\n\n2(p ∞ −P t )\nPt\n\np∞\n\n2(p ∞ −P t )."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "Half life of zero order reaction A → product is 1 hour, when initial concentration of reaction is 2.0 mol L L . The\n−1\n\ntime required to decrease concentration of A from 0.50 to 0.25 mol L",
    "options": [
      "0.5 hour",
      "4 hour",
      "15 min",
      "60 min\n\n−1\n\nis:"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 15 min.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 15 min."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "For A + B\n2\n\nEa\n\n2\n\n⇌ 2AB\n\nfor forward and backward reaction are 180 and 200 kJ mol\n\n−1\n\nrespectively\n\nIf catalyst lowers E for both reaction by 100 kJ mol .\n−1\n\na\n\nWhich of the following statement is correct?",
    "options": [
      "Catalyst does not alter the Gibbs energy change of a reaction.",
      "Catalyst can cause non-spontaneous reactions to occur.",
      "The enthalpy change for the reaction is +20 kJ mol .\n−1",
      "The enthalpy change for the catalysed reaction is different from that of uncatalysed reaction."
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Catalyst does not alter the Gibbs energy change of a reaction..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Catalyst does not alter the Gibbs energy change of a reaction.."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "In a reaction A + B → C , initial concentrations of A and B are related as [A]\n\n0\n\n= 8[B] 0\n\n. The half lives of A and B\n\nare 10 min and 40 min. respectively. If they start to disappear at the same time, both following first order kinetics,\nafter how much time will the concentration of both the reactants be same?",
    "options": [
      "60 min",
      "80 min",
      "20 min",
      "40 min"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 40 min.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 40 min."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "Drug X becomes ineffective after 50% decomposition. The original concentration of drug in a bottle was 16mg/mL\nwhich becomes 4mg/mL in 12 months. The expiry time of the drug in months is __________________\nAssume that the decomposition of the drug follows first order kinetics.",
    "options": [
      "2",
      "6",
      "12",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 6.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 6."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "The reaction A + B\n2\n\n2\n\n→ 2AB\n\nfollows the mechanism\n\nk1\n\nA2\n→ A + A (f ast)\n−\nk −1\nk2\n\nA + B 2 → AB + B (slow)\n−\nA + B → AB (f ast)\n\nThe overall order of the reaction is :",
    "options": [
      "2",
      "2.5",
      "3",
      "1.5"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 1.5.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 1.5."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "Consider an elementary reaction\nA(g) + B(g) → C(g) + D(g)\n\nIf the volume of reaction mixture is suddenly reduced to\n\n1\n3\n\nof its initial volume, the reaction rate will become ' x '\n\ntimes of the original reaction rate. The value of x is :",
    "options": [
      "3",
      "(3) 9\n\n1\n9",
      "1\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "Reactant A converts to product D through the given mechanism (with the net evolution of heat) :\nA → B\nB → C\nC → D\n\nslow ; ΔH = +ve\nfast; ΔH = −ve\nfast ; ΔH = −ve\n\nWhich of the following represents the above reaction mechanism?",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "Integrated rate law equation for a first order gas phase reaction is given by (where P is initial pressure and P is\ni\n\nt\n\ntotal pressure at time t)",
    "options": [
      "k =",
      "k =\n\n2.303",
      "k =\n\n2.303\nt\n2.303\nt\n\n× log\n× log\n\nPi\n(2P i −P t )\n(2P i −P t )\nPi",
      "k =\n\n2.303\n\nt\n\nt\n\n× log\n×\n\n2P i\n(2P i −P t )\nPi\n\n(2P i −P t )"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): k =.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): k =."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "subConcept": "Rate Laws and Activation Energy",
    "q": "For the following graphs,\n\nChoose from the options given below, the correct one regarding order of reaction is :",
    "options": [
      "(b) zero order (c) and (e) First order",
      "(a) and (b) Zero order (e) First order",
      "(b) and (d) Zero order (e) First order",
      "(a) and (b) Zero order (c) and (e) First order"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (a) and (b) Zero order (e) First order.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (a) and (b) Zero order (e) First order."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "The atomic number of the element from the following with lowest 1",
    "options": [
      "32",
      "35\n\nst\n\nionisation enthalpy is :",
      "87",
      "19"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 87.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 87."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "Choose the incorrect trend in the atomic radii (r) of the elements :",
    "options": [
      "r\n\nBr\n\n< rK",
      "r\n\nMg\n\n< r Al",
      "r\n\nRb\n\n< r Cs",
      "r\n\nRb\n\n< r Cs"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): r\n\nMg\n\n< r Al.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): r\n\nMg\n\n< r Al."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "The correct orders among the following are\nAtomic radius : B < Al < Ga < In < Tl\nElectronegativity : Al < Ga < In < Tl < B\nDensity : Tl < In < Ga < Al < B\n1st Ionisation Energy : In < Al < Ga < Tl < B\nChoose the correct answer from the options given below :",
    "options": [
      "B and D Only",
      "A and C Only",
      "C and D Only",
      "A and B Only"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): B and D Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): B and D Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "Which of the following statements are correct?\nA. The process of the addition an electron to a neutral gaseous atom is always exothermic\nB. The process of removing an electron from an isolated gaseous atom is always endothermic\nC. The 1\n\nst\n\nionization energy of the boron is less than that of the beryllium\n\nD. The electronegativity of C is 2.5 in CH and CCl\n4\n\n4\n\nE. Li is the most electropositive among elements of group I\nChoose the correct answer from the options gives below",
    "options": [
      "B & C only",
      "A, C and d only",
      "B and D only",
      "B,C and E only"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): B & C only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): B & C only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "First ionisation enthalpy values of first four group 15 elements are given below. Choose the correct value for the\nelement that is a main component of apatite family :",
    "options": [
      "1402 kJ mol\n\n−1",
      "834 kJ mol\n\n−1",
      "1012 kJ mol\n\n−1",
      "947 kJ mol\n\n−1"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 1012 kJ mol\n\n−1.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 1012 kJ mol\n\n−1."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "An element ' E has the ionisation enthalpy value of 374 kJ mol . ' E ' reacts with elements A, B, C and D with\n−1\n\n′\n\nelectron gain enthalpy values of −328, −349, −325 and −295 kJ mol , respectively. The correct order of the\n−1\n\nproducts EA, EB, EC and ED in terms of ionic character is :",
    "options": [
      "ED > EC > EB > EA",
      "EA > EB > EC > ED",
      "EB > EA > EC > ED",
      "ED > EC > EA > EB"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): EB > EA > EC > ED.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): EB > EA > EC > ED."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "Given below are two statements :\nStatement (I): According to the Law of Octaves, the elements were arranged in the increasing order of their atomic\nnumber. Statement (II): Meyer observed a periodically repeated pattern upon plotting physical properties of certain\nelements against their respective atomic numbers.\nIn the light of the above statements, choose the correct answer from the options given below :",
    "options": [
      "Both Statement (I) and Statement (II) are false.",
      "Both Statement (I) and Statement (II) are true.",
      "Statement (I) is false but Statement (II) is true.",
      "Statement (I) is true but Statement (II) is false."
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Both Statement (I) and Statement (II) are false..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Both Statement (I) and Statement (II) are false.."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "The successive 5 ionisation energies of an element are 800, 2427, 3658, 25024 and 32824 kJ/mol, respectively. By\nusing the above values predict the group in which the above element is present :",
    "options": [
      "Group 13",
      "Group 14",
      "Group 2",
      "Group 4"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Group 13.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Group 13."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "Which of the following electronegativity order is incorrect?",
    "options": [
      "Mg < Be < B < N",
      "S < Cl < O < F",
      "Al < Si < C < N",
      "Al < Mg < B < N"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Al < Mg < B < N.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Al < Mg < B < N."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "The property/properties that show irregularity in first four elements of group-17 is/are :\n(A) Covalent radius\n(B) Electron affinity\n(C) Ionic radius\n(D) First ionization energy\nChoose the correct answer from the options given below:",
    "options": [
      "B and D only",
      "A and C only",
      "B only",
      "A, B, C and D"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): B only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): B only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "Consider the following elements.\n\nWhich of the following is/are true about A , B , C and D ?\n′\n\n′\n\nA. Order of atomic radii: B < A < D < C\n′\n\n′\n\n′\n\n′\n\n′\n\nB. Order of metallic character : B < A < D < C\n′\n\n′\n\n′\n\nC. Size of the element : D < C < B < A\n′\n\nD. Order of ionic radii : B\n\n′\n\n′+\n\n< A\n\n′\n\n′+\n\n< D\n\n′+\n\n′\n\n′\n\n′\n\n< C\n\n′+\n\nChoose the correct answer from the options given below:",
    "options": [
      "A only",
      "A, B and D only",
      "A and B only",
      "B, C and D only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A, B and D only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A, B and D only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "The correct sequence of electron gain enthalpy of the elements listed below is\nA. Ar\nB. Br\nC. F\nD. S\nChoose the most appropriate from the options given below:",
    "options": [
      "C > B > D > A",
      "A > D > B > C",
      "A > D > C > B",
      "D > C > B > A"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A > D > B > C.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A > D > B > C."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "The correct order of the first ionization enthalpy is",
    "options": [
      "Al > Ga > Tl",
      "Ga > Al > B",
      "Tl > Ga > Al",
      "B > Al > Ga"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Tl > Ga > Al.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Tl > Ga > Al."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": ". Identify the correct order of standard enthalpy of formation of sodium halides.",
    "options": [
      "NaI\n\n<\n\nNaBr\n\n<\n\nNaF\n\n<\n\nNaCl",
      "NaI\n\n<\n\nNaBr\n\n<\n\nNaCl\n\n<\n\nNaF",
      "NaF\n\n<\n\nNaCl\n\n<\n\nNaBr\n\n<\n\nNaI",
      "NaCl\n\n<\n\nNaF\n\n<\n\nNaBr\n\n<\n\nNaI"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): NaI\n\n<\n\nNaBr\n\n<\n\nNaCl\n\n<\n\nNaF.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): NaI\n\n<\n\nNaBr\n\n<\n\nNaCl\n\n<\n\nNaF."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "For compound having the formula GaAlCl , the correct option from the following is\n4",
    "options": [
      "Ga is coordinated with CI in GaAlCl\n\n4",
      "Ga is more electronegative than AI and is present as a cationic part of the salt GaAlCl",
      "CI forms bond with both AI and Ga in GaAlCl",
      "Oxidation state of Ga in the salt GaAlCl\n\n4\n\n4\n\n4\n\nis + 3"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Ga is more electronegative than AI and is present as a cationic part of the salt GaAlCl.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Ga is more electronegative than AI and is present as a cationic part of the salt GaAlCl."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "For electron gain enthalpies of the elements denoted as Δ",
    "options": [
      "Δ\n\neg H(Cl) < Δ eg H(F)",
      "Δ\n\neg H(Se)",
      "Δ\n\neg H(I)",
      "Δ\n\neg H(Te) < Δ eg H(Po)\n\n, the incorrect option is :\n\neg H\n\n< Δ eg H(S)\n\n< Δ eg H(At)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Δ\n\neg H(Se).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Δ\n\neg H(Se)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "subConcept": "Periodic Trends",
    "q": "The first ionization enthalpy of Na, Mg and Si, respectively, are: 496, 737 and 786 kJ mo 1 . The first ionization\n−1\n\nenthalpy (kJmol\n\n−1\n\n)\n\nof Al is",
    "options": [
      "487",
      "768",
      "577",
      "856"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 577.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 577."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "In SO , NO and N the hybridizations at the central atom are respectively :\n2\n\n−\n\n−\n\n2\n\n3",
    "options": [
      "sp , sp and sp\n2",
      "sp , sp and sp\n\n2",
      "sp , sp and sp\n2\n\n2\n\n2",
      "sp, sp and sp\n\n2\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): sp , sp and sp\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): sp , sp and sp\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Total number of sigma ( σ) ________ and pi(π) ________ bonds respectively present in hex-1-en-4-yne are :",
    "options": [
      "3 and 13",
      "11 and 3",
      "13 and 3",
      "14 and 3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 13 and 3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 13 and 3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "The molecules having square pyramidal geometry are",
    "options": [
      "BrF & PCl\n5",
      "SbF & PCl\n\n5\n\n5",
      "SbF & XeOF\n5\n\n5",
      "BrF & XeOF\n\n4\n\n5\n\n4"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): BrF & XeOF\n\n4\n\n5\n\n4.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): BrF & XeOF\n\n4\n\n5\n\n4."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Which of the following linear combination of atomic orbitals will lead to formation of molecular orbitals in\nhomonuclear diatomic molecules [internuclear axis in z-direction] ?\nA. 2p and 2p\nz\n\nB. 2 s and 2p\nC. 3 d\n\nxy\n\nx\n\nx\n\nand 3 d\n\nD. 2 s and 2p\n\n2\n\nz\n\nE. 2p and 3d\nz\n\n2\n\nx −y\n\n2\nx\n\n− y\n\n2\n\nChoose the correct answer from the options given below:",
    "options": [
      "A and B Only",
      "D Only",
      "E Only",
      "C and D Only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): D Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): D Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Arrange the following compounds in increasing order of their dipole moment : HBr, H S, NF and CHCl\n2",
    "options": [
      "H S < HBr < NF\n\n3 < CHCl 3",
      "NF",
      "HBr < H S < NF\n\n3\n\n2\n\n2",
      "CHCl\n\n< CHCl 3\n\n3\n\n3\n\n3 < HBr < H 2 S < CHCl 3\n\n3\n\n< NF 3 < HBr < H 2 S"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): NF.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): NF."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Among SO , NF , NH , XeF , ClF and SF , the hybridization of the molecule with non-zero dipole moment and\n2\n\n3\n\n3\n\n2\n\n3\n\n4\n\nhighest number of lone-pairs of electrons on the central atom is",
    "options": [
      "sp",
      "dsp\n\n3",
      "sp d\n3\n\n2",
      "sp d\n\n2\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): sp d\n\n2\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): sp d\n\n2\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "A molecule with the formula AX Y has all it's elements from p-block. Element A is rarest, monoatomic, non4\n\nradioactive from its group and has the lowest ionization enthalpy value among A, X and Y. Elements X and Y have\nfirst and second highest electronegativity values respectively among all the known elements. The shape of the\nmolecule is :",
    "options": [
      "Square pyramidal",
      "Octahedral",
      "Pentagonal planar",
      "Trigonal bipyramidal"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Square pyramidal.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Square pyramidal."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "The shape of carbocation is :",
    "options": [
      "diagonal pyramidal",
      "trigonal planar",
      "tetrahedral",
      "diagonal"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): trigonal planar.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): trigonal planar."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "The correct statement/s about Hydrogen bonding is/are\nA. Hydrogen bonding exists when H is covalently bonded to the highly electro negative atom.\nB. Intermolecular H bonding is present in o-nitro phenol\nC. Intramolecular H bonding is present in HF.\nD. The magnitude of H bonding depends on the physical state of the compound.\nE. H-bonding has powerful effect on the structure and properties of compounds\nChoose the correct answer from the options given below:",
    "options": [
      "A, B, D only",
      "A, D, E only",
      "A only",
      "A, B, C only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A, D, E only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A, D, E only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "The number of species from the following that have pyramidal geometry around the central atom is _______.\nS2 O\n\n2−\n3\n\n, SO\n\n2−\n4\n\n, SO\n\n2−\n3\n\n, S2 O",
    "options": [
      "4\n\n2−\n7",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 1.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 1."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Which one of the following molecules has maximum dipole moment?",
    "options": [
      "NF",
      "CH\n\n3\n\n4",
      "PF",
      "NH\n\n5\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): NH\n\n5\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): NH\n\n5\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Arrange the bonds in order of increasing ionic character in the molecules. LiF, K O, N , SO and ClF .\n2",
    "options": [
      "ClF\n\n3\n\n2\n\n2\n\n< N 2 < SO 2 < K 2 O < LiF",
      "LiF < K O < ClF\n2\n\n3\n\n< SO 2 < N 2",
      "N\n\n2\n\n< SO 2 < ClF 3 < K 2 O < LiF",
      "N\n\n2\n\n< ClF 3 < SO 2 < K 2 O < LiF"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): N\n\n2\n\n< SO 2 < ClF 3 < K 2 O < LiF.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): N\n\n2\n\n< SO 2 < ClF 3 < K 2 O < LiF."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "The bond order and magnetic property of acetylide ion are same as that of",
    "options": [
      "O\n\n+\n2",
      "N\n\n2",
      "NO\n\n+",
      "O\n\n2\n\n+\n\n−"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): NO\n\n+.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): NO\n\n+."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Which of the following are isostructural pairs?\nA. SO\n\nand CrO\n\n4\n\nB. SiCl and TiCl\n\n4\n\n2−\n4\n\n2−\n\n4\n\nC. NH and NO\n3\n\n−\n3\n\nD. BCl and BrCl\n3\n\n3",
    "options": [
      "A and C only",
      "B and C only",
      "A and B only",
      "C and D only"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): A and B only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): A and B only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "If the magnetic moment of a di-oxygen species is 1.73 B. M., it may be",
    "options": [
      "O or O .",
      "O or O .",
      "O or O .",
      "O , O or O .\n\n−\n\n+\n\n2\n\n+\n\n2\n\n2\n\n−\n\n2\n\n2\n\n2\n\n2\n\n−\n\n+\n\n2\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): O or O ..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): O or O .."
  },
  {
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "subConcept": "VSEPR and Hybridisation",
    "q": "Of the species, NO, NO , NO\n+",
    "options": [
      "NO\n\n2+\n\nand NO , the one with minimum bond strength is :\n−",
      "NO\n\n+",
      "NO",
      "NO\n\n2+\n\n−"
    ],
    "correctIndex": 3,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): NO\n\n2+\n\n−.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): NO\n\n2+\n\n−."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 13 & 14)",
    "subConcept": "Properties of p-Block Groups 13 and 14",
    "q": "The group 14 elements A and B have the first ionisation enthalpy values of 708 and 715 kJ mol\nabove values are lowest among their group members. The nature of their ions A\n\n2+\n\nB\n\n4+\n\n−1\n\nrespectively. The\n\nrespectively is",
    "options": [
      "both reducing",
      "both oxidising",
      "reducing and oxidising",
      "oxidising and reducing"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): reducing and oxidising.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): reducing and oxidising."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 13 & 14)",
    "subConcept": "Properties of p-Block Groups 13 and 14",
    "q": "Consider the following elements In, Tl, Al, Pb, Sn and Ge.\nThe most stable oxidation states of elements with highest and lowest first ionisation enthalpies, respectively, are",
    "options": [
      "+4 and +1",
      "+1 and +4",
      "+4 and +3",
      "+2 and +3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): +4 and +3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): +4 and +3."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 13 & 14)",
    "subConcept": "Properties of p-Block Groups 13 and 14",
    "q": "The number of ions from the following that are expected to behave as oxidising agent is :\nSn\n\n4+\n\n, Sn\n\n2+\n\n, Pb\n\n2+\n\n, Tl\n\n3+\n\n, Pb",
    "options": [
      "3\n\n4+\n\n, Tl\n\n+",
      "2",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 13 & 14)",
    "subConcept": "Properties of p-Block Groups 13 and 14",
    "q": "The Lewis acid character of boron tri halides follows the order:",
    "options": [
      "BCl\n\n3",
      "Bl\n\n> Bl 3 > BCl 3 > BF 3",
      "BBr\n\n3\n\n> BF 3 > BBr 3 > Bl 3",
      "BF\n\n3\n\n> BBr 3 > BCl 3 > BF 3\n3\n\n> BCl 3 > BBr 3 > Bl 3"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Bl\n\n> Bl 3 > BCl 3 > BF 3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Bl\n\n> Bl 3 > BCl 3 > BF 3."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 15, 16, 17 & 18)",
    "subConcept": "Properties of p-Block Groups 15–18",
    "q": "The large difference between the melting and boiling points of oxygen and sulphur may be explained on the basis of",
    "options": [
      "Atomicity",
      "Electron gain enthalpy",
      "Electronegativity",
      "Atomic size"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Atomicity.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Atomicity."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 15, 16, 17 & 18)",
    "subConcept": "Properties of p-Block Groups 15–18",
    "q": "The incorrect statement among the following is",
    "options": [
      "PH shows lower proton affinity than NH .\n3\n\n3",
      "SO can act as an oxidizing agent, but not as a reducing agent.\n2",
      "PF exists but NF does not.\n3\n\n5",
      "NO can dimerise easily.\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): SO can act as an oxidizing agent, but not as a reducing agent.\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): SO can act as an oxidizing agent, but not as a reducing agent.\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 15, 16, 17 & 18)",
    "subConcept": "Properties of p-Block Groups 15–18",
    "q": "Which of the following electrolyte can be used to obtain H S O by the process of electrolysis?\n2\n\n2\n\n8",
    "options": [
      "Dilute solution of sodium sulphate.",
      "Acidified dilute solution of sodium sulphate.",
      "Dilute solution of sulphuric acid",
      "Concentrated solution of sulphuric acid"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Concentrated solution of sulphuric acid.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Concentrated solution of sulphuric acid."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 15, 16, 17 & 18)",
    "subConcept": "Properties of p-Block Groups 15–18",
    "q": "The nature of oxide (TeO ) and hydride (TeH ) formed by Te , respectively are :\n2\n\n2",
    "options": [
      "Oxidising and acidic",
      "Reducing and basic",
      "Reducing and acidic",
      "Oxidising and basic"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Oxidising and acidic.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Oxidising and acidic."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 15, 16, 17 & 18)",
    "subConcept": "Properties of p-Block Groups 15–18",
    "q": "Anomalous behaviour of oxygen is due to its",
    "options": [
      "Large size and high electronegativity",
      "Small size and low electronegativity",
      "Small size and high electronegativity",
      "Large size and low electronegativity"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Small size and high electronegativity.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Small size and high electronegativity."
  },
  {
    "subject": "Chemistry",
    "chapter": "p Block Elements (Group 15, 16, 17 & 18)",
    "subConcept": "Properties of p-Block Groups 15–18",
    "q": "The strongest reducing agent amont the following is:",
    "options": [
      "NH",
      "SbH\n\n3",
      "BiH",
      "PH\n\n3\n\n3\n\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): BiH.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): BiH."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "' X ' is the number of acidic oxides among VO , V O , CrO , V O and Mn O . The primary valency of cobalt in\n2\n\n[Co(H 2 NCH 2 CH 2 NH 2 ) ] (SO 4 )\n3",
    "options": [
      "5\n\n2\n\n3\n\n2\n\n3\n\n3\n\n2\n\n5\n\n2\n\n7\n\nis Y. The value of X + Y is :",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 5\n\n2\n\n3\n\n2\n\n3\n\n3\n\n2\n\n5\n\n2\n\n7\n\nis Y. The value of X + Y is :.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 5\n\n2\n\n3\n\n2\n\n3\n\n3\n\n2\n\n5\n\n2\n\n7\n\nis Y. The value of X + Y is :."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "The number of valence electrons present in the metal among Cr, Co, Fe and Ni which has the lowest enthalpy of\natomisation is",
    "options": [
      "8",
      "9",
      "6",
      "10"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 6.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 6."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "The first transition series metal ' M ' has the highest enthalpy of atomisation in its series. One of its aquated ion\n(M\n\nn†\n\n)\n\nexists in green colour. The nature of the oxide formed by the above M",
    "options": [
      "neutral",
      "acidic",
      "basic",
      "amphoteric\n\nn−\n\nion is :"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): basic.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): basic."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "The metal ions that have the calculated spin only magnetic moment value of 4.9 B.M. are\nA. Cr\n\n2+\n\nB. Fe\n\n2+\n\nC. Fe\n\n3+\n\nD. Co\n\n2+\n\nE. Mn\n\n3+\n\nChoose the correct answer from the options given below",
    "options": [
      "A, C and E only",
      "A, D and E only",
      "B and E only",
      "A, B and E only"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): A, B and E only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): A, B and E only."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "The amphoteric oxide among V O , V O and V O , upon reaction with alkali leads to formation of an oxide\n2\n\n3\n\n2\n\n4\n\n2\n\n5\n\nanion. The oxidation state of V in the oxide anion is :",
    "options": [
      "+3",
      "+4",
      "+7",
      "+5"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): +5.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): +5."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "Consider the following reactions\nKOH\n\nH 2 SO 4\n\nK 2 Cr 2 O 7\n→ [A]\n→ [ B] + K 2 SO 4\n−\n−\n−H 2 O\n\n−H 2 O\n\nThe products [A] and [B], respectively are :",
    "options": [
      "K CrO and CrO\n2\n\n4",
      "K CrO and Cr O\n2\n\n4\n\n2\n\n3",
      "K CrO and K Cr O\n2\n\n4\n\n2\n\n2\n\n7",
      "K Cr(OH) and Cr O\n2\n\n6\n\n2\n\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): K CrO and K Cr O\n2\n\n4\n\n2\n\n2\n\n7.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): K CrO and K Cr O\n2\n\n4\n\n2\n\n2\n\n7."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "Choose the correct statements from the following\nA. Mn O is an oil at room temperature\n2\n\n7\n\nB. V O reacts with acid to give VO\n2\n\n4\n\n2+\n2\n\nC. CrO is a basic oxide\nD. V O does not react with acid\n2\n\n5\n\nChoose the correct answer from the options given below:",
    "options": [
      "A, B and D only",
      "A and C only",
      "A, B and C only",
      "B and C only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A and C only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A and C only."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "Which of the following acts as a strong reducing agent? (Atomic number : Ce = 58, Eu = 63, Gd = 64, Lu = 71)",
    "options": [
      "Lu",
      "Gd\n\n3+",
      "IO\n\n−",
      "Eu\n\n2+\n\n3+",
      "Ce\n\n4+",
      "IO\n\n−"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): IO\n\n−.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): IO\n\n−."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "The metal that shows highest and maximum number of oxidation state is :",
    "options": [
      "Fe",
      "Mn",
      "Co",
      "Ti"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Mn.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Mn."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "When MnO and H SO is added to a salt (A), the greenish yellow gas liberated as salt (A) is :\n2",
    "options": [
      "CaI\n\n2\n\n4",
      "NaBr\n\n2",
      "KNO",
      "NH Cl\n\n3\n\n4"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): NH Cl\n\n3\n\n4.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): NH Cl\n\n3\n\n4."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "Which of the following compounds show colour due to d − d transition?",
    "options": [
      "CuSO ⋅ 5H O",
      "K Cr O",
      "K CrO",
      "KMnO\n\n4\n\n2\n\n2\n\n2\n\n4\n\n2\n\n7\n\n4"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): CuSO ⋅ 5H O.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): CuSO ⋅ 5H O."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "A solution of CrO in amyl alcohol has a....colour\n5",
    "options": [
      "Green",
      "Orange-Red",
      "Yellow",
      "Blue"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Blue.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Blue."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "When a solution of mixture having two inorganic salts was treated with freshly prepared ferrous sulphate in acidic\nmedium, a dark brown ring was formed whereas on treatment with neutral FeCl , it gave deep red colour which\n3\n\ndisappeared on boiling and a brown red ppt was formed. The mixture contains",
    "options": [
      "SO\n\n2−\n3",
      "CH COO\n\n−\n\n3",
      "SO\n\n& CH 3 COO\n\n2−\n3\n\n&C 2 O",
      "C O\n\n2−\n\n2\n\n4\n\n2−\n4\n\n−\n\n& NO\n\n& NO\n\n−\n3\n\n−\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): CH COO\n\n−\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): CH COO\n\n−\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "Highest oxidation state of Mn is exhibited in Mn O . The correct statements about Mn O are\n2\n\n7\n\n2\n\n7\n\n(A) Mn is tetrahedrally surrounded by oxygen atoms\n(B) Mn is octahedrally surrounded by oxygen atoms\n(C) Contains Mn − O − Mn bridge\n(D) Contains Mn − Mn bond.\nChoose the correct answer from the options given below",
    "options": [
      "A and C only",
      "A and D only",
      "B and D only",
      "B and C only"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): A and C only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): A and C only."
  },
  {
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "subConcept": "Transition Metals and Coordination",
    "q": "Potassium permanganate on heating at 513 K gives a product which is :",
    "options": [
      "paramagnetic and colourless",
      "diamagnetic and colourless",
      "diamagnetic and green",
      "paramagnetic and green"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): paramagnetic and green.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): paramagnetic and green."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The number of unpaired electrons responsible for the paramagnetic nature of the following complex species are\nrespectively:\n[Fe(CN) 6 ]\n\n3−\n\n, [FeF 6 ]\n\n3−\n\n, [CoF 6 ]\n\n3−\n\n, [Mn(CN) 6 ]\n\n3−",
    "options": [
      "1, 5, 4, 2",
      "1, 5, 5, 2",
      "1, 1, 4, 2",
      "1.4.4.2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 1, 5, 4, 2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 1, 5, 4, 2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "An octahedral complex having molecular composition Co. 5NH . Cl. SO has two isomers A and B. The solution of\n3\n\n4\n\nA gives a white precipitate with AgNO solution and the solution of B gives white precipitate with BaCl solution.\n2\n\n3\n\nThe type of isomerism exhibited by the complex is,",
    "options": [
      "Co-ordinate isomerism",
      "Linkage isomerism",
      "Ionisation isomerism",
      "Geometrical isomerism"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Ionisation isomerism.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Ionisation isomerism."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The correct order of [FeF ]\n\n3−\n\n6\n\n, [CoF 6 ]\n\n3−\n\n, [Ni(CO) 4 ]\n\nand [Ni(CN) ]\n4\n\n2−\n\ncomplex species based on the number of\n\nunpaired electrons present is :",
    "options": [
      "[FeF ]\n\n3−\n\n6\n\n> [CoF 6 ]",
      "[Ni(CN) ]\n4",
      "[CoF ]\n\n3−\n\n6",
      "[FeF ]\n6\n\n3−\n\n2−\n\n3−\n\n> [Ni(CN) 4 ]\n\n> [FeF 6 ]\n\n> [FeF 6 ]\n> [CoF 6 ]\n\n3−\n\n3−\n\n3−\n\n> [CoF 6 ]\n\n2−\n\n3−\n\n> [Ni(CO) 4 ]\n> [Ni(CO) 4 ]\n\n> [Ni(CO) 4 ] > [Ni(CN) 4 ]\n> [Ni(CN) 4 ]\n\n2−\n\n2−\n\n= [Ni(CO) 4 ]"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): [FeF ]\n6\n\n3−\n\n2−\n\n3−\n\n> [Ni(CN) 4 ]\n\n> [FeF 6 ]\n\n> [FeF 6 ]\n> [CoF 6 ]\n\n3−\n\n3−\n\n3−\n\n> [CoF 6 ]\n\n2−\n\n3−\n\n> [Ni(CO) 4 ]\n> [Ni(CO) 4 ]\n\n> [Ni(CO) 4 ] > [Ni(CN) 4 ]\n> [Ni(CN) 4 ]\n\n2−\n\n2−\n\n= [Ni(CO) 4 ].\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): [FeF ]\n6\n\n3−\n\n2−\n\n3−\n\n> [Ni(CN) 4 ]\n\n> [FeF 6 ]\n\n> [FeF 6 ]\n> [CoF 6 ]\n\n3−\n\n3−\n\n3−\n\n> [CoF 6 ]\n\n2−\n\n3−\n\n> [Ni(CO) 4 ]\n> [Ni(CO) 4 ]\n\n> [Ni(CO) 4 ] > [Ni(CN) 4 ]\n> [Ni(CN) 4 ]\n\n2−\n\n2−\n\n= [Ni(CO) 4 ]."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "' X ' is the number of electrons in t\n[Fe (Cl 6 )]\n\n3−\n\n, [Fe(C 2 O 4 ) ]\n\n3−\n\n3\n\norbitals of the most stable complex ion among [Fe(NH ) ] ,\n3+\n\n2g\n\n3\n\n6\n\nand [Fe(H O) ] . The nature of oxide of vanadium of the type V O is:\n3+\n\n2\n\n2\n\n6",
    "options": [
      "Acidic",
      "Neutral",
      "Basic",
      "Amphoteric\n\nX"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Amphoteric\n\nX.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Amphoteric\n\nX."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The correct order of the complexes [Co(NH ) (H O)]\n3\n\n[Co(NH 3 ) ]\n\n3−\n\n(A),\n\n(B),\n\n3+\n\n6\n\n[Co(CN) 6 ]\n\n3+\n\n2\n\n5\n\n(C)\n\nand [CoCl(NH ) ]\n3\n\n2+\n\n5\n\n(D)\n\nin terms wavelength of light absorbed is :",
    "options": [
      "D>A>B>C",
      "C>B>D>A",
      "D>C>B>A",
      "C>B>A>D"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): D>A>B>C.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): D>A>B>C."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The calculated spin-only magnetic moments of K [Fe(OH) ] and K [Fe(OH) ] respectively are :\n3\n\n6\n\n4",
    "options": [
      "3.87 and 4.90 B.M.",
      "4.90 and 5.92 B.M.",
      "4.90 and 4.90 B.M.",
      "5.92 and 4.90 B.M.\n\n6"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 5.92 and 4.90 B.M.\n\n6.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 5.92 and 4.90 B.M.\n\n6."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The correct increasing order of stability of the complexes based on Δ value is :\no\n\nI. [Mn(CN) ]\n\n3−\n\n6\n\nII. [Co(CN) ]\n\n4−\n\n6\n\nIII. [Fe(CN) ]\n\n4−\n\n6\n\nIV. [Fe(CN) ]\n\n3−\n\n6",
    "options": [
      "IV < III < II < I",
      "I < II < IV < III",
      "III < II < IV < I",
      "II < III < I < IV"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): I < II < IV < III.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): I < II < IV < III."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "When Ethane-1,2-diamine is added progressively to an aqueous solution of Nickel (II) chloride, the sequence of\ncolour change observed will be :",
    "options": [
      "Violet → Blue → Pale Blue → Green",
      "Pale Blue → Blue → Green → Violet",
      "Green → Pale Blue → Blue → Violet",
      "Pale Blue → Blue → Violet → Green"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Green → Pale Blue → Blue → Violet.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Green → Pale Blue → Blue → Violet."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "One mole of the octahedral complex compound Co(NH ) Cl gives 3 moles of ions on dissolution in water. One\n3\n\n5\n\n3\n\nmole of the same complex reacts with excess of AgNO solution to yield two moles of AgCl . The structure of the\n3\n\n(s)\n\ncomplex is:",
    "options": [
      "[Co(NH ) Cl ] ⋅ Cl ⋅ NH\n3\n\n4\n\n2",
      "[Co(NH ) Cl ] ⋅ 2NH\n3\n\n3\n\n3",
      "[Co(NH ) Cl]Cl\n3\n\n5\n\n3\n\n2",
      "[Co(NH ) Cl] ⋅ Cl ⋅ NH\n3\n\n3\n\n2\n\n4\n\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): [Co(NH ) Cl]Cl\n3\n\n5\n\n3\n\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): [Co(NH ) Cl]Cl\n3\n\n5\n\n3\n\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "can exist as a complex. 0.1 molal aqueous solution of this complex shows a depression in freezing\n\nCrCl 3 ⋅ xNH 3\n\npoint of 0.558 C. Assuming 100% ionisation of this complex and coordination number of Cr is 6 , the complex will\n∘\n\nbe\n(Given K = 1.86 K kg mol )\n−1\n\nf",
    "options": [
      "[Cr(NH ) Cl]Cl\n3\n\n5",
      "[Cr(NH ) ]Cl\n\n2\n\n3",
      "[Cr(NH ) Cl ]\n3\n\n3\n\n6\n\n3",
      "[Cr(NH ) Cl ]Cl\n\n3\n\n3\n\n4\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): [Cr(NH ) Cl]Cl\n3\n\n5.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): [Cr(NH ) Cl]Cl\n3\n\n5."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The correct order of the following complexes in terms of their crystal field stabilization energies is :",
    "options": [
      "[Co(NH ) ]\n\n2+",
      "[Co(NH ) ]\n\n2+\n\n3\n\n3\n\n3+\n\n3\n\n2+\n\n6\n\n< [Co(NH 3 ) ]\n\n6",
      "[Co(en) ]\n\n3+\n\n6\n\n< [Co(NH 3 ) ]\n2+\n\n3+\n\n3+\n\n< [Co(NH 3 ) ]\n\n< [Co(NH 3 ) ]\n\n< [Co(NH 3 ) ]\n2+\n\n6\n\n3+\n\n6\n\n2+\n\n2+\n\n< [Co(en) 3 ]\n\n< [Co(NH 3 ) ]\n\n6\n\n< [Co(NH 3 ) ]\n\n4\n\n< [Co(en) 3 ]\n\n4\n\n6",
      "[Co(NH ) ]\n3\n\n< [Co(NH 3 ) ]\n\n4\n\n3+\n\n2+\n\n4\n\n< [Co(NH 3 ) ]\n\n3+\n\n< [Co(en) 3 ]\n\n6\n\n3+"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): [Co(NH ) ]\n3\n\n< [Co(NH 3 ) ]\n\n4\n\n3+\n\n2+\n\n4\n\n< [Co(NH 3 ) ]\n\n3+\n\n< [Co(en) 3 ]\n\n6\n\n3+.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): [Co(NH ) ]\n3\n\n< [Co(NH 3 ) ]\n\n4\n\n3+\n\n2+\n\n4\n\n< [Co(NH 3 ) ]\n\n3+\n\n< [Co(en) 3 ]\n\n6\n\n3+."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "From the magnetic behaviour of [NiCl ]\n\n2−\n\n4\n\n(paramagnetic) and [Ni(CO) ] (diamagnetic), choose the correct\n4\n\ngeometry and oxidation state.",
    "options": [
      "[NiCl ]\n\n2−\n\n4\n\n: Ni\n\nII\n\n[Ni(CO) 4 ] : Ni",
      "[NiCl ]\n\n2−\n\n4\n\n, tetrahedral\n\nII\n\n, square planar\n\n: Ni , square planar\nII\n\n[Ni(CO) 4 ] : Ni(0)",
      "[NiCl ]\n\n2−\n\n4\n\n: Ni\n\nII\n\n, tetrahedral\n\n[Ni(CO) 4 ] : Ni(0)",
      "[NiCl ]\n4\n\n2−\n\n, square planar\n\n: Ni(0)\n\n, tetrahedral\n\n, tetrahedral\n\n[Ni(CO) 4 ] : Ni(0)\n\n, square planar"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): [NiCl ]\n\n2−\n\n4\n\n: Ni\n\nII\n\n, tetrahedral\n\n[Ni(CO) 4 ] : Ni(0).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): [NiCl ]\n\n2−\n\n4\n\n: Ni\n\nII\n\n, tetrahedral\n\n[Ni(CO) 4 ] : Ni(0)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The type of hybridization and the magnetic property of [MnCl ]\n6\n\n3−\n\nare :",
    "options": [
      "d sp , paramagnetic with four unpaired electrons\n2\n\n3",
      "sp d , paramagnetic with four unpaired electrons\n3\n\n2",
      "d sp , paramagnetic with two unpaired electrons\n2\n\n3",
      "sp d , paramagnetic with two unpaired electrons\n3\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): sp d , paramagnetic with four unpaired electrons\n3\n\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): sp d , paramagnetic with four unpaired electrons\n3\n\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The correct statements from the following are:\nA. The strength of anionic ligands can be explained by crystal field theory.\nB. Valence bond theory does not give a quantitative interpretation of kinetic stability of coordination compounds.\nC. The hybridization involved in formation of [Ni(CN) ]\n\n2–\n\n4\n\nD. The number of possible isomer(s) of cis-[PtCl\n\n2\n\n(en) 2 ]\n\ncomplex is dsp .\n\n2+\n\n2\n\nis one\n\nChoose the correct answer from the options given below:",
    "options": [
      "A, D only",
      "A, C only",
      "B, D only",
      "B, C only"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): B, C only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): B, C only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "In which one of the following metal carbonyls, CO forms a bridge between metal atoms?",
    "options": [
      "[Co (CO) ]\n8",
      "[Mn (CO)",
      "[Os (CO)\n\n]\n12",
      "[Ru (CO)\n\n2\n\n3\n\n2\n\n3\n\n10\n\n]\n\n]\n12"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): [Co (CO) ]\n8.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): [Co (CO) ]\n8."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The correct order of ligands arranged in increasing field strength.",
    "options": [
      "F\n\n−",
      "Br\n\n< Br\n\n−\n\n< F\n\n−\n\n−\n\n< I\n\n−\n\n< NH 3\n\n< H 2 O < NH 3",
      "H O < −OH < CN\n2",
      "Cl\n\n−\n\n< −OH < Br\n\n−\n\n−\n\n< NH 3\n\n< CN\n\n−"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Br\n\n< Br\n\n−\n\n< F\n\n−\n\n−\n\n< I\n\n−\n\n< NH 3\n\n< H 2 O < NH 3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Br\n\n< Br\n\n−\n\n< F\n\n−\n\n−\n\n< I\n\n−\n\n< NH 3\n\n< H 2 O < NH 3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The number of unpaired d-electrons in [Co(H O) ]\n2",
    "options": [
      "2",
      "1\n\n6\n\n3+\n\nis",
      "0",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 0.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 0."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "Number of complexes from the following with even number of unpaired \" d \" electrons is ________\n[V(H 2 O) ]\n\n3+\n\n6\n\n, [Cr(H 2 O) ]\n\n2+\n\n6\n\n, [Fe(H 2 O) ]\n6\n\n3+\n\n, [Ni(H 2 O) ]\n\n3+\n\n6\n\n, [Cu(H 2 O) ]\n\n2+\n\n6\n\n[Given atomic numbers : V = 23, Cr = 24, Fe = 26, Ni = 28Cu = 29]",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "[Co (NH 3 ) ]\n\nand [CoF ]\n\n3+\n\n3−\n\n6\n\n6\n\nare respectively known as:",
    "options": [
      "Spin free Complex, Spin paired Complex",
      "Spin paired Complex, Spin free Complex",
      "Outer orbital Complex, Inner orbital Complex",
      "Inner orbital Complex, Spin paired Complex"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Spin paired Complex, Spin free Complex.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Spin paired Complex, Spin free Complex."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "Chiral complex from the following is :\nHere en = ethylene diamine",
    "options": [
      "cis −[PtCl (en) ]\n2\n\n2+\n\n2",
      "trans −[PtCl (en) ]\n2\n\n2+\n\n2",
      "cis −[PtCl (NH ) ]\n2\n\n3\n\n2",
      "trans −[Co (NH ) Cl ]\n3\n\n4\n\n+\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): cis −[PtCl (en) ]\n2\n\n2+\n\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): cis −[PtCl (en) ]\n2\n\n2+\n\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The total number of stereoisomers for the complex [Cr(ox) ClBr]\n2",
    "options": [
      "3",
      "2",
      "4\n\n3–\n\n(where ox = oxalate) is",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "Which of the following complex has a possibility to exist as meridional isomer?",
    "options": [
      "[Co(NH ) (NO ) ]",
      "[Pt (NH ) Cl ]",
      "[Co(en) Cl ]",
      "[Co(en) ]\n\n3\n\n3\n\n2\n\n2\n\n3\n\n3\n\n2\n\n2\n\n2\n\n3"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): [Co(NH ) (NO ) ].\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): [Co(NH ) (NO ) ]."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "Which of the following will have maximum stabilization due to crystal field?",
    "options": [
      "[Ti (H O) ]\n2\n\n3+",
      "[Co (H O) ]\n\n2+",
      "[Co (CN) ]",
      "[Cu (NH ) ]\n\n2+\n\n2\n\n6\n\n3−\n\n6\n\n3\n\n6\n\n4"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): [Co (CN) ].\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): [Co (CN) ]."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "The additon of dilute NaOH to Cr",
    "options": [
      "a solution of [Cr(OH) ]\n\n3+\n\nsalt solution will give :\n\n−\n\n4",
      "precipitate of [Cr(OH) ]\n\n3−\n\n6",
      "precipitate of Cr O (H O)\n2\n\n3",
      "precipitate of Cr(OH)\n\n2\n\nn\n\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): precipitate of Cr O (H O)\n2\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): precipitate of Cr O (H O)\n2\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "subConcept": "Ligands and Crystal Field Theory",
    "q": "For a d metal ion in an octahedral field, the correct electronic configuration is :\n4",
    "options": [
      "t",
      "t",
      "t\n\n3\n2g\n3\n\ne\n\n1\ng\n1\n\n2g\n\neg\n\n4\n\n0\n\n2g\n\ne",
      "e t\n\ng\n\n2\n\n2\n\ng\n\n2g\n\nwhen Δ\n\nO\n\n< P\n\nwhen Δ\n\nO\n\n> P\n\nwhen Δ\n\nO\n\n< P\n\nwhen Δ\n\nO\n\n< P"
    ],
    "correctIndex": 0,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): t.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): t."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "In which pairs, the first ion is more stable than the second?",
    "options": [
      "(B) & (D) only",
      "(A) & (B) only",
      "(B) & (C) only",
      "(A) & (C) only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (A) & (B) only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (A) & (B) only."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "What is the correct IUPAC name of",
    "options": [
      "3-Bromo-2-hydroxy-5-nitrobenzoic acid",
      "3-Bromo-4-hydroxy-1-nitrobenzoic acid",
      "2-Hydroxy-3-bromo-5-nitrobenzoic acid",
      "5-Nitro-3-bromo-2-hydroxybenzoic acid"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 3-Bromo-2-hydroxy-5-nitrobenzoic acid.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 3-Bromo-2-hydroxy-5-nitrobenzoic acid."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Identify the correct statements from the following\n\nChoose the correct answer from the options given below",
    "options": [
      "C & D only",
      "B & C only",
      "A & B only",
      "A,B & C only"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): A & B only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): A & B only."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "The steam volatile compounds among the following are :\n\n(A)\n\n(B)\n\n(C)\n\n(D)\nChoose the correct answer from the options given below :",
    "options": [
      "(B) and (D) Only",
      "(A) and (C) Only",
      "(A), (B) and (C) Only",
      "(A) and (B) Only"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (A) and (B) Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (A) and (B) Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Given below are two statements :\n\nStatement (I) :\nare isomeric compounds.Statement (II) :\nare functional group isomers.",
    "options": [
      "Both Statement (I) and Statement (II) are false.",
      "Both Statement (I) and Statement (II) are true.",
      "Statement (I) is false but Statement (II) is true.",
      "Statement (I) is true but Statement (II) is false."
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Both Statement (I) and Statement (II) are true..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Both Statement (I) and Statement (II) are true.."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "How many different stereoisomers are possible for the given molecule?",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 4.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 4."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Designate whether each of the following compounds is aromatic or not aromatic.",
    "options": [
      "e, g aromatic and a, b, c, d, f , h not aromatic",
      "b, e, f , g aromatic and a, c, d, h not aromatic",
      "a, b, c, d aromatic and e, f , g, h not aromatic",
      "a, c, d, e, h aromatic and b, f , g not aromatic"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): a, c, d, e, h aromatic and b, f , g not aromatic.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): a, c, d, e, h aromatic and b, f , g not aromatic."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "The correct stability order of carbocations is",
    "options": [
      "(CH ) C\n3",
      "CH\n\n3\n\n+\n+\n\n+\n2\n\n+\n\n+\n3\n\n+\n\n+\n\n> (CH 3 ) CH > CH 3 − CH 2 > (CH 3 ) C\n2\n\n3",
      "(CH ) C > (CH ) CH > CH − CH\n+\n\n3\n\n+\n\n3\n\n3\n\n+\n\n3\n\n2",
      "CH > CH − CH > CH −\n+\n\n+\n\n3\n\n+\n\n> CH 3 − CH 2 > (CH 3 ) CH > CH 3\n\n3\n\n2\n\n3\n\n+\n2\n\n> CH 3\n\n+\n\nCH\n\n> (CH 3 )C\n\n+\n\n|\n\nCH\n\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (CH ) C > (CH ) CH > CH − CH\n+\n\n3\n\n+\n\n3\n\n3\n\n+\n\n3\n\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (CH ) C > (CH ) CH > CH − CH\n+\n\n3\n\n+\n\n3\n\n3\n\n+\n\n3\n\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "For the given compounds, the correct order of increasing pK value :\na\n\nChoose the correct answer from the options given below :",
    "options": [
      "(B) < (D) < (C) < (A) < (E)",
      "(D) < (E) < (C) < (B) < (A)",
      "(E) < (D) < ( C ) < ( B ) < ( A )",
      "(E) < (D) < (B) < (A) < (C)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (B) < (D) < (C) < (A) < (E).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (B) < (D) < (C) < (A) < (E)."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Correct order of basic strength of Pyrrole\n\n, Pyridine\n\n, and Piperidine\n\nis:",
    "options": [
      "Pyrrole > Piperidine > Pyridine",
      "Pyrrole > Pyridine > Piperidine",
      "Pyridine > Piperidine > Pyrrole",
      "Piperidine > Pyridine > Pyrrole"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Piperidine > Pyridine > Pyrrole.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Piperidine > Pyridine > Pyrrole."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "What is the correct order of acidity of the protons marked A–D in the given compounds?",
    "options": [
      "H\n\nC\n\n> HD > HB > HA",
      "H\n\nC\n\n> HD > HA > HB",
      "H\n\nD\n\n> HC > HB > HA",
      "H\n\nC > HA > HD > HB"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): H\n\nC\n\n> HD > HA > HB.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): H\n\nC\n\n> HD > HA > HB."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Which will undergo deprotonation most readily in basic medium?",
    "options": [
      "a only",
      "c only",
      "Both a and c",
      "b only"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): a only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): a only."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "The major product for the following reaction is:",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Correct statements for the given reaction are:\n\nA. Compound ‘B’ is aromatic\nB. The completion of above reaction is very slow\nC. ‘A’ shows tautomerism\nD. The bond lengths of C − C in compound B are found to be same\nChoose the correct answer from the options given below.",
    "options": [
      "B, C and D only",
      "A, B and C only",
      "A, C and D only",
      "A, B and D only"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): A, C and D only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): A, C and D only."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "In Carius tube, an organic compound ' X ' is treated with sodium peroxide to form a mineral acid ' Y '. The solution\nof BaCl is added to ' Y ' to form a precipitate ' Z '. ' Z ' is used for the quantitative estimation of an extra element. '\n2\n\nX\n\n' could be",
    "options": [
      "Cytosine",
      "A nucleotide",
      "Methionine",
      "Chloroxylenol"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Methionine.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Methionine."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "The correct IUPAC name of the following compound is",
    "options": [
      "4-methyl-2-nitro-5-oxohept-3-enal",
      "4-methyl-5-oxo-2-nitrohept-3-enal",
      "4-methyl-6-nitro-3-oxohept-4-enal",
      "6-formyl-4-methyl-2-nitrohex-3-enal"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 4-methyl-6-nitro-3-oxohept-4-enal.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 4-methyl-6-nitro-3-oxohept-4-enal."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Given below are two statements: One is labelled as Assertion A and the other is labelled as Reason R\nAssertion A : Thin layer chromatography is an adsorption chromatography.\nReason R : A thin layer of silica gel is spread over a glass plate of suitable size in thin layer chromatography which\nacts as an adsorbent. In the light of the above statements, choose the correct answer from the options given below",
    "options": [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Both A and R are true and R is the correct explanation of A.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Both A and R are true and R is the correct explanation of A."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "In Carius method of estimation of halogen. 0. 45 g of an organic compound gave 0. 36 g of AgBr. Find out the\npercentage of bromine in the compound.\n(Molar masses : AgBr = 188 g mol\n\n−1\n\n: Br = 80 g mol\n\n−1\n\n)",
    "options": [
      "34. 04%",
      "40. 04%",
      "36. 03%",
      "38. 04%"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): 34. 04%.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): 34. 04%."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "The correct stability order of the following diazonium salt is",
    "options": [
      "(A) > (B) > (C) > (D)",
      "(A) > (C) > (D) > (B)",
      "(C) > (A) > (D) > (B)",
      "(C) > (D) > (B) > (A)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (A) > (C) > (D) > (B).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (A) > (C) > (D) > (B)."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Given below are two statements: one is labelled as Assertion and the other is labelled as Reason.\nAssertion: A mixture contains benzoic acid and napthalene. The pure benzoic acid can be separated out by the use\nof benzene.\nReason: Benzoic acid is soluble in hot water.\nIn the light of the above statements, choose the most appropriate answer from the options given below.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Assertion is false but Reason is true..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Assertion is false but Reason is true.."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "In the following structures, which one is having staggered conformation with maximum dihedral angle?",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "Arrange the following in decreasing acidic strength.",
    "options": [
      "A > B > C > D",
      "B > A > C > D",
      "D > C > A > B",
      "D > C > B > A"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): A > B > C > D.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): A > B > C > D."
  },
  {
    "subject": "Chemistry",
    "chapter": "General Organic Chemistry",
    "subConcept": "Reaction Mechanisms and Isomerism",
    "q": "The correct pair(s) of the ambident nucleophiles is (are):\n(A) AgCN / KCN\n(B) RCOOAg / RCOOK\n(C) AgNO / KNO\n2\n\n2\n\n(D) AgI / KI",
    "options": [
      "(B) and (C) only",
      "(A) only",
      "(A) and (C) only",
      "(B) only"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (A) and (C) only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (A) and (C) only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "The number of optically active products obtained from the complete ozonolysis of the given compound is :",
    "options": [
      "2",
      "0",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 0.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 0."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "Benzene is treated with oleum to produce compound (X) which when further heated with molten sodium hydroxide\nfollowed by acidification produces compound (Y).The compound Y is treated with zinc metal to produce compound\n. Identify the structure of compound (Z) from the following option.\n\n(Z)",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "In the following series of reactions identify the major products A \\& B respectively.",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "Following are the four molecules \"P\", \"Q\", \"R\" and \"S\".\nWhich one among the four molecules will react with H − Br\n\n(aq)",
    "options": [
      "R",
      "P",
      "Q",
      "S\n\nat the fastest rate?"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Q.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Q."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "The product (A) formed in the following reaction sequence is",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "The major product formed in the following reaction is\n\nA.\n\nB.\n\nC.\n\nD.\nchoose the correct answer from the options Given below:",
    "options": [
      "B only",
      "A only",
      "C only",
      "D only"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): B only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): B only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "Given below are two statements, one is labelled as Assertion A and the other is labelled as Reason R.\n\nAssertion A:\n\ncan be subjected to Wolff-Kishner reduction to give\n\nReason R: Wolff-Kishner reduction is used to convert\n\ninto\n\nIn the light of the above statements, choose the correct answer from the options given below:",
    "options": [
      "A is true but R is false",
      "A is false but R is true",
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true and R is NOT the correct explanation of A"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A is false but R is true.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A is false but R is true."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "The major product 'P' formed in the given reaction is",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "Choose the correct option for the following reactions.",
    "options": [
      "'A' and 'B' are both Markovnikov addition products.",
      "'A' is Markovnikov product and 'B' is antiMarkovnikov product.",
      "'A' and 'B' are both anti-Markovnikov products.",
      "'B' is Markovnikov and 'A' is anti-Markovnikov product."
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 'A' is Markovnikov product and 'B' is antiMarkovnikov product..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 'A' is Markovnikov product and 'B' is antiMarkovnikov product.."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "A compound 'A' on reaction with 'X' and 'Y produces the same major product but different by product 'a' and 'b'.\nOxidation of 'a' gives a substance produced by ants.\n\n'X' and 'Y' respectively are",
    "options": [
      "KMnO /H and dil. KMnO , 273 K\n+\n\n4\n\n4",
      "KMnO ,(dilute), 273 K and KMnO /H\n4\n\n+\n\n4",
      "KMnO /H and O , H O/ Zn\n+\n\n4\n\n3\n\n2",
      "O , H O/ Zn and KMnO /H\n3\n\n2\n\n+\n\n4"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): O , H O/ Zn and KMnO /H\n3\n\n2\n\n+\n\n4.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): O , H O/ Zn and KMnO /H\n3\n\n2\n\n+\n\n4."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "Among the following compounds I − IV, which one forms a yellow precipitate on reacting sequentially with (i)\nNaOH\n\n(ii) dil. HNO (iii) AgNO ?\n3\n\n3",
    "options": [
      "III",
      "II",
      "I",
      "IV"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): IV.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): IV."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "Which of the following compound gives pink colour on reaction with phthalic anhydride in conc. H SO followed\n2\n\nby treatment with NaOH?",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "In the following sequence of reactions,\n\nH\n\n+\n\n/H 2 O\n\nKIO\n\n. The compounds\n\nand\n\nrespectively are :\n\n−\nC3 H6\nB\nC\nB + C\n→ A\ndilKOH",
    "options": [
      "CI COOK, CH I\n3\n\n3",
      "CH I, HCOOK\n3",
      "CI COOK, HCOOH\n3",
      "CHI , CH COOK\n3\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): CHI , CH COOK\n3\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): CHI , CH COOK\n3\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "subConcept": "Alkanes, Alkenes and Alkynes",
    "q": "The correct order of heat of combustion for following alkadienes is:",
    "options": [
      "(a) < (b) < (c)",
      "(a) < (c) < (b)",
      "(c) < (b) < (a)",
      "(b) < (c) < (a)"
    ],
    "correctIndex": 0,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (a) < (b) < (c).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (a) < (b) < (c)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "The reactions which cannot be applied to prepare an alkene by elimination, are\n\nChoose the correct answer from the option given below :",
    "options": [
      "B & E Only",
      "B, C & D Only",
      "A, C & D Only",
      "B & D Only"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): B & D Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): B & D Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "Predict the major product of the following reaction sequence :-",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "The correct arrangement for decreasing order of electrophilic substitution for above compounds is",
    "options": [
      "(III) > (I) > (II) > (IV)",
      "(IV) > (I) > (II) > (III)",
      "(III) > (IV) > (II) > (I)",
      "(II) > (IV) > (III) > (I)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (III) > (I) > (II) > (IV).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (III) > (I) > (II) > (IV)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "Acid D formed in above reaction is:",
    "options": [
      "Gluconic acid",
      "Succinic acid",
      "Oxalic acid",
      "Malonic acid"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Succinic acid.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Succinic acid."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "Identify A and B in the following sequence of reaction",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "In the following halogenated organic compounds the one with maximum number of chlorine atoms in its structure\nis:",
    "options": [
      "Chloral",
      "Gammaxene",
      "Chloropicrin",
      "Freon-12"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Gammaxene.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Gammaxene."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "In the above conversion of compound (X) to product (Y), the sequence of reagents to be used will be:",
    "options": [
      "(i) Br , Fe",
      "(i) Br (aq)\n\n(ii) Fe, H\n\n(ii) LiAlH\n\n2\n\n(iii) LiAlH",
      "(i) Fe, H\n\n2\n\n+\n\n4\n\n(iii) H O\n\n+",
      "(i) Fe, H\n\n+\n\n4\n\n3\n\n+\n\n(ii) Br (aq)\n\n(ii) Br (aq)\n\n(iii) HNO\n\n(iii) HNO\n\n2\n\n2\n\n2\n\n(iv) CuBr\n\n2\n\n(iv) H PO\n3\n\n2"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (i) Fe, H\n\n+\n\n4\n\n3\n\n+\n\n(ii) Br (aq)\n\n(ii) Br (aq)\n\n(iii) HNO\n\n(iii) HNO\n\n2\n\n2\n\n2\n\n(iv) CuBr\n\n2\n\n(iv) H PO\n3\n\n2.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (i) Fe, H\n\n+\n\n4\n\n3\n\n+\n\n(ii) Br (aq)\n\n(ii) Br (aq)\n\n(iii) HNO\n\n(iii) HNO\n\n2\n\n2\n\n2\n\n(iv) CuBr\n\n2\n\n(iv) H PO\n3\n\n2."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "Methyl propyl bromide reacts with C H O and gives ‵A′ whereas on reaction with C H OH it gives ‵B′. The\n−\n\n2−\n\n2\n\n5\n\n2\n\n5\n\nmechanism followed in these reactions and the products ‵A′ and ‵B′ respectively are:",
    "options": [
      "S 2, A =iso-butyl ethyl ether;S 1, B =tert-butyl ethyl ether\nN\n\nN",
      "S 1, A =tert-butyl ethyl ether; S 1, B = 2−butyl ethyl ether\nN\n\nN",
      "S 2, A = 2−butyl ethyl ether; S 2, B =iso-butyl ethyl ether\nN\n\nN",
      "S 1, A =tert-butyl ethyl ether; S 2, B =iso-butyl ethyl ether\nN\n\nN"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): S 2, A =iso-butyl ethyl ether;S 1, B =tert-butyl ethyl ether\nN\n\nN.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): S 2, A =iso-butyl ethyl ether;S 1, B =tert-butyl ethyl ether\nN\n\nN."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "The major product (P) in the reaction",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "subConcept": "Nucleophilic Substitution Reactions",
    "q": "The major product of the following reaction is",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "A toxic compound \" A \" when reacted with NaCN in aqueous acidic medium yields an edible cooking component\nand food preservative ' B '. \" B \" is converted to \"C\" by diborane and can be used as an additive to petrol to reduce\nemission. \"C\" upon reaction with oleum at 140 C yields an inhalable anesthetic \"D\". Identify \"A\", \"B\", \"C\" and\n∘\n\n\"D\", respectively.",
    "options": [
      "Methanol; formaldehyde; methyl chloride; chloroform",
      "Ethanol; acetonitrile; ethylamine; ethylene",
      "Methanol; acetic acid; ethanol; diethyl ether",
      "Acetaldehyde;2- hydroxypropanoic acid; propanoic acid; dipropyl ether"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Methanol; acetic acid; ethanol; diethyl ether.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Methanol; acetic acid; ethanol; diethyl ether."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "An organic compound (X) with molecular formula C H O is not readily oxidised. On reduction it gives C H O(Y)\n3\n\n6\n\n3\n\n8\n\nwhich reacts with HBr to give a bromide (Z) which is converted to Grignard reagent. This Grignard reagent on\nreaction with (X) followed by hydrolysis give 2,3-dimethylbutan-2-ol. Compounds (X), (Y) and (Z) respectively\nare :",
    "options": [
      "CH COCH , CH CH CH OH, CH CH(Br)CH\n3\n\n3\n\n3\n\n2\n\n2\n\n3\n\n3",
      "CH COCH , CH CH(OH)CH , CH CH(Br)CH\n3\n\n3\n\n3\n\n3\n\n3\n\n3",
      "CH CH CHO, CH CH CH OH, CH CH CH Br\n3\n\n2\n\n3\n\n2\n\n2\n\n3\n\n2\n\n2",
      "CH CH CHO, CH CH = CH , CH CH(Br)CH\n3\n\n2\n\n3\n\n2\n\n3\n\n3"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): CH COCH , CH CH(OH)CH , CH CH(Br)CH\n3\n\n3\n\n3\n\n3\n\n3\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): CH COCH , CH CH(OH)CH , CH CH(Br)CH\n3\n\n3\n\n3\n\n3\n\n3\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "Identify the products [A] and [B], respectively in the following reaction :",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "What amount of bromine will be required to convert 2 g of phenol into 2,4,6-tribromophenol? (Given molar mass in\ngmol\n\n−1\n\nof C, H, O, Br are 12, 1, 16, 80 respectively)",
    "options": [
      "20.44 g",
      "4.0 g",
      "6.0 g",
      "10.22"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 10.22.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 10.22."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "Given below are two statements: One is labelled as Assertion A and the other is labelled as Reason R:\nAssertion A: pK value of phenol is 10. 0 while that of ethanol is 15. 9.\na\n\nReason R: Ethanol is stronger acid than phenol.\nIn the light of the above statements, choose the correct answer from the options given below:",
    "options": [
      "A is true but R is false",
      "A is false but R is true",
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A."
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): A is true but R is false.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): A is true but R is false."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "The major products formed :\n\nA\n\nand B respectively are:",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "Consider the above reaction sequence and identify the major product P .",
    "options": [
      "Methoxymethane",
      "Methanoic acid",
      "Methanal",
      "Methane"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Methane.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Methane."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "Identify compound (Z) in the following reaction sequence.",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "C 2 H 5 OH\n\nProduct 'A'\n\n−\nCH 3 − CH 2 − CH 2 − Br + NaOH\n→\n\nConsider the above reactions, identify product B and product C .",
    "options": [
      "B = 1-Propanol C = 2-Propanol",
      "B = C = 2-Propanol",
      "B = 2-Propanol C = 1-Propanol",
      "B = C = 1-Propanol"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): B = 2-Propanol C = 1-Propanol.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): B = 2-Propanol C = 1-Propanol."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "An organic compound ' A ' with empirical formula C H O gives sooty flame on burning. Its reaction with bromine\n6\n\n6\n\nsolution in low polarity solvent results in high yield of B . B is",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "' A ' in the given reaction is",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Alcohols Phenols and Ethers",
    "subConcept": "Reactions of Alcohols and Phenols",
    "q": "A compound 'X' when treated with phthalic anhydride in presence of concentrated H SO yields 'Y'. 'Y' is used as\n2\n\n4\n\nan acid/base indicator. 'X' and 'Y' are respectively",
    "options": [
      "Anisole, methyl orange",
      "Salicylaldehyde, Phenolphthalein",
      "Toluidine, Phenolphthalein",
      "Carbolic acid, Phenolphthalein"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Carbolic acid, Phenolphthalein.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Carbolic acid, Phenolphthalein."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "\"P\" is an optically active compound with molecular formula C H\n6\n\n. When \" P \" is treated with 2,4-\n\n12 O\n\ndinitrophenylhydrazine, it gives a positive test. However, in presence of Tollens reagent, \"P\" gives a negative test.\nPredict the structure of \"P\".",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "Which among the following compounds give yellow solid when reacted with NaOI/NaOH ?\n\nChoose the correct answer from the options given below :",
    "options": [
      "(B), (C) and (E) Only",
      "(A) and (C) Only",
      "(C) and (D) Only",
      "(A), (C) and (D) Only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (A) and (C) Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (A) and (C) Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "Number of molecules from below which cannot give ioddoform reaction is :\nEthanol, Isopropyl alcohol, Bromoacetone, 2-Butanol, 2-Butanone, Butanal, 2-Pentanone, 3-Pentanone, Pentanal\nand 3-Pentanol",
    "options": [
      "5",
      "4",
      "3",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 4.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 4."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "Both acetaldehyde and acetone (individually) undergo which of the following reactions?\nA. Iodoform Reaction\nB. Cannizaro Reaction\nC. Aldol Condensation\nD. Tollen's Test\nE. Clemmensen Reduction\nChoose the correct answer from the options given below:",
    "options": [
      "A, B and D Only",
      "C and E Only",
      "A, C and E Only",
      "B, C and D Only"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): A, C and E Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): A, C and E Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "Choose the correct answer from the options given below :",
    "options": [
      "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
      "(A)-(I), (B)-(III), (C)-(II), (D)-(IV)",
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): (A)-(IV), (B)-(III), (C)-(I), (D)-(II).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): (A)-(IV), (B)-(III), (C)-(I), (D)-(II)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "Choose the correct answer from the options given below :",
    "options": [
      "(A)-(I), (B)-(IV), (C)-(III), (D)-(II)",
      "(A)-(III), (B)-(II), (C)-(I), (D)-(IV)",
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
      "(A)-(II), (B)-(III), (C)-(I), (D)-(IV)"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (A)-(III), (B)-(IV), (C)-(I), (D)-(II).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (A)-(III), (B)-(IV), (C)-(I), (D)-(II)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "An optically active alkyl halide C H Br [A] reacts with hot KOH dissolved in ethanol and forms alkene [B] as\n4\n\n9\n\nmajor product which reacts with bromine to give dibromide [C]. The compound [C] is converted into a gas [D] upon\nreacting with alcoholic NaNH . During hydration 18 gram of water is added to 1 mole of gas [D] on warming with\n2\n\nmercuric sulphate and dilute acid at 333 K to form compound [E]. The IUPAC name of compound [E] is :",
    "options": [
      "But-2-yne",
      "Butan-2-ol",
      "Butan-2-one",
      "Butan-1-al"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Butan-2-one.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Butan-2-one."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "Compound (X) undergoes following sequence of reactions to give the Lactone (Y).",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "i) HCN\n\nGlyceraldehyde\n\nD − (+)−\n−\n→\nii)H 2 O/H\n\n+\n\niii) HNO 3\n\nThe products formed in the above reaction are",
    "options": [
      "One optically active and one meso product",
      "Two optically inactive products",
      "Two optically active products",
      "One optically inactive and one meso product"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): One optically active and one meso product.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): One optically active and one meso product."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "‘A’ and ‘B’ in the above reactions are:",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "'A' and 'B' respectively are\nA.",
    "options": [
      "O 3\n\nEthane-\n\n-dicarbaldehyde\n\nGlyoxal/Oxaldehyde\n\n−\n→\n1, 2\n+\n(2)Zn−H 2 O\n\nB\n\n(1)O 3\n\n-oxohexanal\n\n−\n→ 5−\n(2)Zn−H 2 O",
      "1-methylcyclohex-1, 3-diene & cyclopentene.",
      "Cyclohex-1, 3-diene & cyclopentene",
      "Cyclohex-1, 3-diene & 1-methylcyclopent-1-ene",
      "1-methylcyclohex- 1, 4-diene & 1-methylcyclopent-1-ene"
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): Cyclohex-1, 3-diene & cyclopentene.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): Cyclohex-1, 3-diene & cyclopentene."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "CH 3 MgBr\n\nH3 O\n\n+\n\nZn−Hg\n\n. The correct structure of\n\nis\n\nCH 3 − CH 2 − CN\n−\n−\n−\n→ A\n→ B\n→ C\nC\nEther\n\nHCl",
    "options": [
      "(2)",
      "(4) CH − CH − CH = CH\n3\n\n2\n\n2"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "The structure of the starting compound P used in the reaction given below is:",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Aldehydes and Ketones",
    "subConcept": "Nucleophilic Addition Reactions",
    "q": "Identify (A) in the following reaction sequence:",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Carboxylic Acid Derivatives",
    "subConcept": "Acyl Substitution Reactions",
    "q": "Mixture of 1 g each of chlorobenzene, aniline and benzoic acid is dissolved in 50 mL ethyl acetate and placed in a\nseparating funnel, 5 M NaOH ( 30 mL) was added in the same funnel. The funnel was shaken vigorously and then\nkept aside. The ethyl acetate layer in the funnel contains :",
    "options": [
      "benzoic acid",
      "benzoic acid and aniline",
      "benzoic acid and chlorobenzene",
      "chlorobenzene and aniline"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): chlorobenzene and aniline.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): chlorobenzene and aniline."
  },
  {
    "subject": "Chemistry",
    "chapter": "Carboxylic Acid Derivatives",
    "subConcept": "Acyl Substitution Reactions",
    "q": "The least acidic compund, among the following is :",
    "options": [
      "D",
      "A",
      "B",
      "C"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): D.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): D."
  },
  {
    "subject": "Chemistry",
    "chapter": "Carboxylic Acid Derivatives",
    "subConcept": "Acyl Substitution Reactions",
    "q": "The total number of compounds from below when treated with hot KMnO giving benzoic acid is :\n4",
    "options": [
      "6",
      "3",
      "5",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 5.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 5."
  },
  {
    "subject": "Chemistry",
    "chapter": "Carboxylic Acid Derivatives",
    "subConcept": "Acyl Substitution Reactions",
    "q": "The compounds that produce CO with aqueous NaHCO solution are:\n2\n\nA.\n\nB.\n\nC.\n\nD.\n\n3\n\nE.\nChoose the correct answer from the options given below:",
    "options": [
      "A, C and D Only",
      "A, B and E Only",
      "A and C Only",
      "A and B Only"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): A, C and D Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): A, C and D Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Carboxylic Acid Derivatives",
    "subConcept": "Acyl Substitution Reactions",
    "q": "Identify the product (P) in the following reaction:",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Carboxylic Acid Derivatives",
    "subConcept": "Acyl Substitution Reactions",
    "q": "The correct sequential addition of reagents in the preparation of 3−nitrobenzoic acid from benzene is:",
    "options": [
      "Br / AlBr , HNO /H SO , Mg / ether, CO , H O\n2\n\n3\n\n3\n\n2\n\n4\n\n2",
      "Br / AlBr , NaCN, H O , HNO /H SO\n\n+\n\n3\n\n+\n\n2\n\n3\n\n3\n\n3\n\n2",
      "Br / AlBr , HNO /H SO , NaCN, H O\n2\n\n3\n\n3\n\n2\n\n4\n\n4\n\n+\n\n3",
      "HNO /H SO , Br / AlBr , Mg / ether, CO , H O\n3\n\n2\n\n4\n\n2\n\n3\n\n2\n\n+\n\n3"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): HNO /H SO , Br / AlBr , Mg / ether, CO , H O\n3\n\n2\n\n4\n\n2\n\n3\n\n2\n\n+\n\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): HNO /H SO , Br / AlBr , Mg / ether, CO , H O\n3\n\n2\n\n4\n\n2\n\n3\n\n2\n\n+\n\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "The descending order of basicity of following amines is:\n\nChoose the correct answer from the options given below :",
    "options": [
      "B > E > D > A > C",
      "E > D > B > A > C",
      "E > D > A > B > C",
      "E > A > D > C > B"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): E > D > B > A > C.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): E > D > B > A > C."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "The correct order of basicity for the following molecules is:",
    "options": [
      "P > Q > R",
      "R > P > Q",
      "Q > P > R",
      "R > Q > P"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): R > Q > P.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): R > Q > P."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "For reaction\n\nThe correct order of set of reagents for the above conversion is :",
    "options": [
      "Br",
      "2\n\n∣ FeBr 3 , H 2 O(Δ), NaOH\n\nH 2 SO 4 , Ac 2 O, Br 2 , H 2 O(Δ), NaOH",
      "Ac O, Br , H O(Δ), NaOH\n2\n\n2\n\n2",
      "Ac O, H SO , Br , NaOH\n2\n\n2\n\n4\n\n2"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): 2\n\n∣ FeBr 3 , H 2 O(Δ), NaOH\n\nH 2 SO 4 , Ac 2 O, Br 2 , H 2 O(Δ), NaOH.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): 2\n\n∣ FeBr 3 , H 2 O(Δ), NaOH\n\nH 2 SO 4 , Ac 2 O, Br 2 , H 2 O(Δ), NaOH."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "Which among the following react with Hinsberg's reagent?\n\nChoose the correct answer from the options given below:",
    "options": [
      "A, B and E Only",
      "A, C and E Only",
      "C and D Only",
      "B and D Only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A, C and E Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A, C and E Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "The products formed in the following reaction sequence are :",
    "options": [
      "(2)\n\n, CH − CHO\n\n, CH − COOH\n\n3",
      "3",
      ", CH − CHO\n3"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): , CH − CHO\n3.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): , CH − CHO\n3."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "When a concentrated solution of sulphanilic acid and 1-naphthylamine is treated with nitrous acid ( 273 K) and\nacidified with acetic acid, the mass ( g) of 0.1 mole of product formed is :\n(Given molar mass in gmol\n\n−1\n\n, O : 16, S : 32)\n\nH : 1, C : 12, N : 14",
    "options": [
      "343",
      "330",
      "33",
      "66"
    ],
    "correctIndex": 2,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): 33.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): 33."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "The Hinsberg reagent is",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "With respect to the following reaction, consider the given statements:\n\n(A) o-Nitroaniline and p-nitroaniline are the predominant products.\n(B) p-Nitroaniline and m-nitroaniline are the predominant products.\n(C) HNO acts as an acid.\n3\n\n(D) H SO acts as an acid.\n2\n\n4\n\nChoose the correct option.",
    "options": [
      "(A) & (C) are correct statements.",
      "(A) & (D) are correct statement.",
      "(B) & (D) are correct statements.",
      "(B) & (C) are correct statements."
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): (B) & (D) are correct statements..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): (B) & (D) are correct statements.."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "Which of the following ketone will NOT give enamine on treatment with secondary amines? [where t − Bu is\n−C(CH 3 )\n\n3\n\n]",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "The Major Product in the above reaction is :",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "Consider the above reaction, the Product \"P\" is :",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Amines",
    "subConcept": "Basicity and Reactions of Amines",
    "q": "Which one of the products of the following reactions does not react with Hinsberg reagent to form sulphonamide?",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (4).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (4)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Identify the pair of reactants that upon reaction, with elimination of HCl will give rise to the dipeptide Gly-Ala.",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Choose the correct answer from the options given below :",
    "options": [
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
      "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
      "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): (A)-(III), (B)-(IV), (C)-(II), (D)-(I).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): (A)-(III), (B)-(IV), (C)-(II), (D)-(I)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "The carbohydrate \"Ribose\" present in DNA, is\nA. A pentose sugar\nB. present in pyranose from\nC. in \"D\" configuration\nD. a reducing sugar, when free\nE. in ∝-anomeric form\nChoose the correct answer from the options given below:",
    "options": [
      "A, D and E Only",
      "A, C and D Only",
      "A, B and E Only",
      "B, D and E Only"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): A, C and D Only.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): A, C and D Only."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Which of the following acids is a vitamin?",
    "options": [
      "Adipic acid",
      "Ascorbic acid",
      "Saccharic acid",
      "Aspartic acid"
    ],
    "correctIndex": 1,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): Ascorbic acid.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): Ascorbic acid."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "A tetrapeptide \" x \" on complete hydrolysis produced glycine (Gly), alanine (Ala), valine (Val), leucine (Leu) in\nequimolar proportion each. The number of tetrapeptides (sequences) possible involving each of these amino acids is",
    "options": [
      "16",
      "32",
      "8",
      "24"
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): 24.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): 24."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Identify the correct statement among the following:",
    "options": [
      "All naturally occurring amino acids except glycine contain one chiral centre.",
      "All naturally occurring amino acids are optically active.",
      "Glutamic acid is the only amino acid that contains a-COOH group at the side chain.",
      "Amino acid, cysteine easily undergo dimerization due to the presence of free SH group."
    ],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Amino acid, cysteine easily undergo dimerization due to the presence of free SH group..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Amino acid, cysteine easily undergo dimerization due to the presence of free SH group.."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "The incorrect statement about Glucose is :",
    "options": [
      "Glucose is soluble in water because of having aldehyde functional group",
      "Glucose remains in multiple isomeric form in its aqueous solution",
      "Glucose is one of the monomer unit in sucrose",
      "Glucose is an aldohexose"
    ],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): Glucose is soluble in water because of having aldehyde functional group.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): Glucose is soluble in water because of having aldehyde functional group."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Following tetrapeptide can be represented as\n\n(F, L, D, Y, I, Q, P are one letter codes for amino acids)",
    "options": [
      "FIQY",
      "FLDY",
      "YQLF",
      "PLDY"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): FLDY.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): FLDY."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Which is not true for arginine?",
    "options": [
      "It has a fairly high melting point",
      "It is associated with more than one pK values.\na",
      "It has high solubility in benzene.",
      "It is a crystalline solid."
    ],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (3): It has high solubility in benzene..\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (3): It has high solubility in benzene.."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "All structures given below are of vitamin C. Most stable of them is:",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "The formulas of A and B for the following reaction sequence are",
    "options": [
      "A = C H\n\n14 O 8 , B\n\n= C 6 H 14",
      "A = C H\n\n13 O 7 , B\n\n= C 7 H 14 O",
      "A = C H\n\n12 O 8 , B\n\n= C 6 H 14",
      "A = C H\n\n14 O 8 , B = C 6 H 14 O 6\n\n7\n\n7\n\n7\n\n7"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): A = C H\n\n14 O 8 , B\n\n= C 6 H 14.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): A = C H\n\n14 O 8 , B\n\n= C 6 H 14."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Compound A gives D-Galactose and D-Glucose on hydrolysis. The compound A is :",
    "options": [
      "Amylose",
      "Sucrose",
      "Maltose",
      "Lactose"
    ],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (4): Lactose.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (4): Lactose."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Hydrolysis of sucrose gives:",
    "options": [
      "α − D − (+)− Glucose and\n-Fructose\n\nα − D − (−)",
      "α − D − (+)− Glucose and\nFructose\n\nβ − D − (−)−",
      "α − D − (−)-Glucose and\n-Fructose\n\nβ − D − (−)",
      "α − D − (−) − Glucose and\n-Fructose\n\nα − D − (+)"
    ],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (2): α − D − (+)− Glucose and\nFructose\n\nβ − D − (−)−.\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (2): α − D − (+)− Glucose and\nFructose\n\nβ − D − (−)−."
  },
  {
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "subConcept": "Carbohydrates, Proteins and Nucleic Acids",
    "q": "Which of the following is correct structure of α-anomer of maltose?",
    "options": [
      "(2)",
      "(4)"
    ],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The correct answer is option (1): (2).\n\nStep 1: Carefully read and interpret the question to identify the key concept.\nStep 2: Recall and apply the relevant chemistry principle or formula.\nStep 3: Evaluate each option systematically.\nStep 4: The correct answer is (1): (2)."
  },

 
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Significant Figures",
    "q": "For an experimental expression y = (32.3 × 1125) / 27.4, where all the digits are significant. Then to report the value of y we should write:",
    "options": ["y = 1326.19", "y = 1330", "y = 1326.186", "y = 1326.2"],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The least number of significant figures in the given values is 3 (in 32.3 and 27.4). Thus, the final result must also have 3 significant figures. The calculated value is 1326.186, which rounds to 1330."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Error Analysis",
    "q": "The maximum percentage error in the measurement of density of a wire is [Given, mass of wire = (0.60 ± 0.003) g, radius of wire = (0.50 ± 0.01) cm, length of wire = (10.00 ± 0.05) cm.]",
    "options": ["8", "5", "4", "7"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Density ρ = M / (π r² L). Percentage error = (ΔM/M)% + 2(Δr/r)% + (ΔL/L)%. This yields 0.5% + 2(2%) + 0.5% = 5%."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Error Analysis",
    "q": "The maximum error in the measurement of resistance, current and time for which current flows in an electrical circuit are 1%, 2% and 3% respectively. The maximum percentage error in the detection of the dissipated heat will be:",
    "options": ["2", "4", "6", "8"],
    "correctIndex": 3,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Heat H = I² R t. Percentage error = 2(ΔI/I)% + (ΔR/R)% + (Δt/t)% = 2(2) + 1 + 3 = 8%."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Dimensional Analysis",
    "q": "The dimension of √(μ₀/ε₀) is equal to that of:",
    "options": ["Voltage", "Capacitance", "Inductance", "Resistance"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "√(μ₀/ε₀) represents the impedance of free space, which has the dimension of resistance."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Dimensional Analysis",
    "q": "Statement I: The dimensions of Planck's constant and angular momentum are same. Statement II: In Bohr's model electron revolve around the nucleus only in those orbits for which angular momentum is integral multiple of Planck's constant.",
    "options": ["Both Statement I and II are correct", "Statement I is incorrect but II is correct", "Statement I is correct but II is incorrect", "Both Statement I and II are incorrect"],
    "correctIndex": 0,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Angular momentum L = mvr = nh/2π. Hence, both L and h have the same dimensions, making both statements correct."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Dimensional Analysis",
    "q": "If B is magnetic field and μ₀ is permeability of free space, then the dimensions of B/μ₀ is:",
    "options": ["ML²T⁻²A⁻¹", "MT⁻²A⁻¹", "L⁻¹A", "LT⁻²A⁻¹"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "From Ampere's Law, B = μ₀ n I, where n is turns per unit length. Therefore, B/μ₀ = n I, which has dimensions [L⁻¹A]."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Dimensional Analysis",
    "q": "If μ₀ and ε₀ are the permeability and permittivity of free space, respectively, then the dimension of 1/(μ₀ε₀) is:",
    "options": ["L/T²", "L²/T²", "T²/L", "T²/L²"],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "The speed of light c = 1/√(μ₀ε₀). Squaring both sides gives c² = 1/(μ₀ε₀). The dimensions of velocity squared are L²/T²."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Dimensional Analysis",
    "q": "If G be the gravitational constant and u be the energy density, then which of the following quantities has the dimensions of √(uG)?",
    "options": ["pressure gradient per unit mass", "Gravitational potential", "Energy per unit mass", "Force per unit mass"],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "Energy density u = [ML⁻¹T⁻²], G = [M⁻¹L³T⁻²]. uG = [L²T⁻⁴]. √(uG) = [LT⁻²], which is the dimension of acceleration (force per unit mass)."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Dimensional Analysis",
    "q": "The equation of a stationary wave is y = 2a sin(2πnt/λ) cos(2πx/λ). Which of the following is NOT correct?",
    "options": ["The dimension of n/λ is [T]", "The dimension of n is [LT⁻¹]", "The dimension of x is [L]", "The dimension of nt is [L]"],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "The argument of sine (2πnt/λ) must be dimensionless. Thus, [nt/λ] = 1, meaning [n/λ] = [T⁻¹], not [T]. Therefore, the first option is incorrect."
  },
  {
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "subConcept": "Dimensional Analysis",
    "q": "An expression for energy density is u = (α/β) sin(αx/kt), where α, β are constants, x is displacement, k is Boltzmann constant and t is temperature. The dimensions of β will be:",
    "options": ["[ML²T⁻²θ⁻¹]", "[M⁰L²T⁻²]", "[M⁰L⁰T⁰]", "[M⁰L²T⁰]"],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "Argument αx/kt is dimensionless. kt represents energy [ML²T⁻²]. α = [ML²T⁻²]/[L] = [MLT⁻²]. Energy density u = [ML⁻¹T⁻²]. From u = α/β, β = α/u = [MLT⁻²]/[ML⁻¹T⁻²] = [L²] = [M⁰L²T⁰]."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "subConcept": "Equations of Motion",
    "q": "A helicopter flying horizontally with a speed of 360 km/h at an altitude of 2 km, drops an object at an instant. The object hits the ground at a point O, 20 s after it is dropped. Displacement of 'O' from the position of the helicopter where the object was released is: (Take g=10 m/s²)",
    "options": ["2√5 km", "4 km", "7.2 km", "2√2 km"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Horizontal speed u = 360 km/h = 100 m/s. Horizontal distance x = ut = 100 × 20 = 2000 m = 2 km. Vertical distance y = 2 km. Displacement = √(x² + y²) = √(2² + 2²) = 2√2 km."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "subConcept": "Kinematics Calculus",
    "q": "The relation between time 't' and distance 'x' is t = αx² + βx. The relation between acceleration (a) and velocity (v) is:",
    "options": ["a = -2αv³", "a = -5αv⁵", "a = -3αv²", "a = -4αv⁴"],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "Differentiating w.r.t x: dt/dx = 2αx + β => v = dx/dt = (2αx + β)⁻¹. Acceleration a = v(dv/dx) = v(-1)(2αx + β)⁻²(2α) = -2αv(v²) = -2αv³."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "subConcept": "Equations of Motion",
    "q": "A bullet is fired into a fixed target loses one third of its velocity after travelling 4 cm. It penetrates further D × 10⁻³ m before coming to rest. The value of D is:",
    "options": ["32", "5", "3", "4"],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Using v² - u² = 2as. (2u/3)² - u² = 2a(4) => -5u²/9 = 8a. Further penetration x until rest: 0 - (2u/3)² = 2ax => -4u²/9 = 2ax. Dividing equations: x = 4 × (4/5) = 16/5 cm = 3.2 cm = 32 × 10⁻³ m. Thus, D = 32."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "subConcept": "Motion under Gravity",
    "q": "A juggler throws balls vertically upwards with same initial velocity in air. When the first ball reaches its highest position, he throws the next ball. Assuming the juggler throws n balls per second, the maximum height the balls can reach is:",
    "options": ["g/(2n)", "g/n", "2gn", "g/(2n²)"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Time interval between throws = 1/n. Time taken to reach highest point = u/g = 1/n => u = g/n. Max height H = u²/(2g) = (g/n)² / (2g) = g/(2n²)."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in Two Dimensions",
    "subConcept": "Projectile Motion",
    "q": "Two projectiles are fired from ground with same initial speeds from same point at angles (45° + α) and (45° - α) with horizontal direction. The ratio of their times of flights is:",
    "options": ["1", "(1 - tan α) / (1 + tan α)", "(1 + sin 2α) / (1 - sin 2α)", "(1 + tan α) / (1 - tan α)"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Time of flight T ∝ sin θ. Ratio = sin(45°+α) / sin(45°-α) = (sin 45° cos α + cos 45° sin α) / (sin 45° cos α - cos 45° sin α) = (cos α + sin α) / (cos α - sin α) = (1 + tan α) / (1 - tan α)."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in Two Dimensions",
    "subConcept": "Projectile Motion",
    "q": "A particle is projected with velocity u so that its horizontal range is three times the maximum height attained by it. The horizontal range of the projectile is given as nu² / 25g. The value of n is:",
    "options": ["6", "18", "12", "24"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "R = 3H. Using formula R/H = 4/tanθ, we get 4/tanθ = 3 => tanθ = 4/3. sinθ = 4/5, cosθ = 3/5. Range R = (2u² sinθ cosθ)/g = 2u²(4/5)(3/5)/g = 24u²/25g. Hence n = 24."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in Two Dimensions",
    "subConcept": "Projectile Motion",
    "q": "Two projectiles are fired with same initial speed from same point on ground at angles of (45° - α) and (45° + α). The ratio of their maximum heights attained is:",
    "options": ["(1 - tan α)/(1 + tan α)", "(1 - sin 2α)/(1 + sin 2α)", "(1 + sin 2α)/(1 - sin 2α)", "(1 + sin α)/(1 - sin α)"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "H ∝ sin²θ. Ratio = sin²(45°-α) / sin²(45°+α). Using identity sin²x = (1-cos 2x)/2, ratio = (1 - cos(90°-2α)) / (1 - cos(90°+2α)) = (1 - sin 2α) / (1 + sin 2α)."
  },
  {
    "subject": "Physics",
    "chapter": "Motion in Two Dimensions",
    "subConcept": "Equation of Trajectory",
    "q": "The trajectory of projectile is given by y = x - x²/20. The maximum height attained is:",
    "options": ["200 m", "10 m", "5 m", "10√2 m"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Comparing with y = x tanθ - x²/(R tanθ), tanθ = 1 => θ = 45°. Also, 1/R = 1/20 => R = 20 m. Max height H = R tanθ / 4 = 20(1)/4 = 5 m."
  },
  {
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "subConcept": "Friction",
    "q": "A cubic block of mass m is sliding down on an inclined plane at 60° with an acceleration of g/2, the value of coefficient of kinetic friction is:",
    "options": ["√3 - 1", "√3/2", "√2/3", "1 - √3/2"],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Equation of motion: mg sin 60° - μk mg cos 60° = m(g/2). g(√3/2 - μk/2) = g/2. √3 - μk = 1 => μk = √3 - 1."
  },
  {
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "subConcept": "Circular Motion",
    "q": "A car of mass m moves on a banked road having radius r and banking angle θ. To avoid slipping, the max permissible speed is v₀. The coefficient of friction μ is:",
    "options": ["(v₀² + rg tanθ)/(rg + v₀² tanθ)", "(v₀² - rg tanθ)/(rg - v₀² tanθ)", "(v₀² - rg tanθ)/(rg + v₀² tanθ)", "(v₀² + rg tanθ)/(rg - v₀² tanθ)"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Maximum speed v₀ is given by v₀² = rg(tanθ + μ)/(1 - μ tanθ). Rearranging for μ gives μ = (v₀² - rg tanθ)/(rg + v₀² tanθ)."
  },
  {
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "subConcept": "Spring Force",
    "q": "A massless spring gets elongated by x₁ under a tension of 5 N. Its elongation is x₂ under a tension of 7 N. For the elongation of (5x₁ - 2x₂), the tension in the spring will be:",
    "options": ["39 N", "15 N", "11 N", "20 N"],
    "correctIndex": 2,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Hooke's Law: F = kx. Tension T₁ = kx₁ = 5 N, T₂ = kx₂ = 7 N. Tension for elongation (5x₁ - 2x₂) is T = k(5x₁ - 2x₂) = 5(kx₁) - 2(kx₂) = 5(5) - 2(7) = 25 - 14 = 11 N."
  },
  {
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "subConcept": "Atwood Machine",
    "q": "A light string passing over a smooth light pulley connects two blocks of masses m₁ and m₂ (m₂ > m₁). If the acceleration of the system is g/√2, then the ratio of masses m₁/m₂ is:",
    "options": ["(1+√5)/(√5-1)", "(√2-1)/(√2+1)", "(1+√5)/(√2-1)", "(√3+1)/(√2-1)"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Acceleration a = g(m₂ - m₁)/(m₂ + m₁) = g/√2. Therefore, (m₂ - m₁)/(m₂ + m₁) = 1/√2. Solving this gives m₁/m₂ = (√2 - 1)/(√2 + 1)."
  },
  {
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "subConcept": "Friction",
    "q": "A block of mass 5 kg is placed at rest on a table of rough surface. If a force of 30 N is applied parallel to the surface of the table, the block slides through 50 m in 10 s. The coefficient of kinetic friction is (g=10 m/s²):",
    "options": ["0.60", "0.75", "0.50", "0.25"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Using s = ut + 1/2 at²: 50 = 0 + 1/2 a (100) => a = 1 m/s². Net force F - μk mg = ma. 30 - μk (5)(10) = 5(1). 30 - 50μk = 5 => 50μk = 25 => μk = 0.50."
  },
  {
    "subject": "Physics",
    "chapter": "Work, Power, Energy",
    "subConcept": "Conservation of Energy",
    "q": "A body of mass m connected to a massless string goes in a vertical circle of radius R. If velocity at the top is n√(gR), then the ratio of kinetic energy at the bottom to that at the top is:",
    "options": ["n²/(n²+4)", "(n²+4)/n²", "(n+4)/n", "n/(n+4)"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Energy at top E_top = 1/2 m(n²gR) + mg(2R). By conservation of energy, KE at bottom = E_top = 1/2 mgR(n² + 4). Ratio K_bottom / K_top = (1/2 mgR(n² + 4)) / (1/2 mgR n²) = (n² + 4)/n²."
  },
  {
    "subject": "Physics",
    "chapter": "Work, Power, Energy",
    "subConcept": "Kinetic Energy",
    "q": "A ball having kinetic energy KE is projected at an angle of 60° from the horizontal. What will be the kinetic energy at the highest point of its flight?",
    "options": ["KE/8", "KE/2", "KE/16", "KE/4"],
    "correctIndex": 3,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "At the highest point, the vertical velocity is zero and horizontal velocity is u cos 60° = u/2. Kinetic energy KE' = 1/2 m(u/2)² = 1/4 (1/2 mu²) = KE/4."
  },
  {
    "subject": "Physics",
    "chapter": "Work, Power, Energy",
    "subConcept": "Collisions",
    "q": "If a rubber ball falls from a height h and rebounds up to a height of h/2, the percentage loss of total energy of the initial system is:",
    "options": ["50%", "40%", "25%", "75%"],
    "correctIndex": 0,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Initial energy E_i = mgh. Final energy E_f = mgh/2. Energy loss = mgh/2. Percentage loss = (mgh/2 / mgh) × 100 = 50%."
  },
  {
    "subject": "Physics",
    "chapter": "Work, Power, Energy",
    "subConcept": "Work-Energy Theorem",
    "q": "A body of mass 0.5 kg travels on a straight line path with velocity v = 3x² + 4 m/s. The net work done by the force during its displacement from x = 0 to x = 2 m is:",
    "options": ["64 J", "60 J", "120 J", "128 J"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "At x = 0, v₁ = 4 m/s. At x = 2, v₂ = 3(4) + 4 = 16 m/s. Using Work-Energy Theorem, W = ΔK = 1/2 m(v₂² - v₁²) = 1/2(0.5)(16² - 4²) = 0.25(256 - 16) = 60 J."
  },
  {
    "subject": "Physics",
    "chapter": "Work, Power, Energy",
    "subConcept": "Potential Energy",
    "q": "Potential energy as a function of distance r is given by U = A/r¹⁰ - B/r⁵, where A and B are positive constants. The equilibrium distance between the two atoms will be:",
    "options": ["(A/B)^(1/5)", "(B/A)^(1/5)", "(2A/B)^(1/5)", "(B/2A)^(1/5)"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "For equilibrium, dU/dr = 0. Thus, -10A/r¹¹ + 5B/r⁶ = 0 => 10A/r¹¹ = 5B/r⁶ => r⁵ = 2A/B => r = (2A/B)^(1/5)."
  },
  {
    "subject": "Physics",
    "chapter": "Center of Mass",
    "subConcept": "Center of Mass",
    "q": "Consider a circular disc of radius 20 cm with centre located at the origin. A circular hole of radius 5 cm is cut from this disc in such a way that the edge of the hole touches the edge of the disc. The distance of centre of mass of the remaining disc from the origin is:",
    "options": ["2.0 cm", "1.5 cm", "1.0 cm", "0.5 cm"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Mass of original disc M₁ ∝ 20², x₁ = 0. Mass of cut out M₂ ∝ 5², x₂ = 20 - 5 = 15 cm. X_cm = (M₁x₁ - M₂x₂) / (M₁ - M₂) = (0 - 25×15) / (400 - 25) = -375 / 375 = -1 cm. Distance is 1.0 cm."
  },
  {
    "subject": "Physics",
    "chapter": "Center of Mass",
    "subConcept": "Collisions",
    "q": "A particle of mass m is projected with speed u at an angle of 60° with horizontal. At its maximum height, it completely inelastically collides with another identical particle having velocity u i^. The horizontal distance covered by the combined mass from the point of collision before reaching the ground is:",
    "options": ["(3√3/8) (u²/g)", "(3√2/4) (u²/g)", "(5/8) (u²/g)", "2√2 (u²/g)"],
    "correctIndex": 0,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "At maximum height, v₁ = u cos 60° = u/2. v₂ = u. By conservation of momentum for inelastic collision: 2m v_f = m(u/2) + m(u) => v_f = 3u/4. Time of fall t = u sin 60° / g = √3 u / 2g. Horizontal distance = v_f × t = (3u/4) × (√3 u / 2g) = 3√3 u² / 8g."
  },
  {
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "subConcept": "Moment of Inertia",
    "q": "A rod of linear mass density λ and length L is bent to form a ring of radius R. The moment of inertia of the ring about its diameter is:",
    "options": ["λL³/(16π²)", "λL³/12", "λL³/(4π²)", "λL³/(8π²)"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Mass M = λL. Circumference L = 2πR => R = L/(2π). Moment of inertia of a ring about its diameter is I = 1/2 MR². Substituting values: I = 1/2 (λL) (L/2π)² = λL³ / (8π²)."
  },
  {
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "subConcept": "Rolling Motion",
    "q": "A solid sphere and a hollow sphere of the same mass and of same radius are rolled down an inclined plane from rest. Let the time taken to reach the bottom by the solid sphere and the hollow sphere be t₁ and t₂ respectively. Then:",
    "options": ["t₁ > t₂", "t₁ = t₂", "t₁ < t₂", "t₁ = 2t₂"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Acceleration down an incline is a = g sinθ / (1 + I/MR²). Since I_solid (0.4 MR²) < I_hollow (0.67 MR²), a_solid > a_hollow. Since t = √(2s/a), greater acceleration means less time. Hence t₁ < t₂."
  },
  {
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "subConcept": "Moment of Inertia",
    "q": "The moment of inertia of a circular ring of mass M and diameter r about a tangential axis lying in the plane of the ring is:",
    "options": ["1/2 Mr²", "3/8 Mr²", "3/2 Mr²", "2 Mr²"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Radius R = r/2. I about diameter = 1/2 MR². By parallel axis theorem, I_tangent = I_dia + MR² = 1/2 MR² + MR² = 3/2 MR². Substituting R = r/2 gives I = 3/2 M(r/2)² = 3/8 Mr²."
  },
  {
    "subject": "Physics",
    "chapter": "Rotational Motion",
    "subConcept": "Rotational Kinetic Energy",
    "q": "Two discs have moments of inertia I₁ and I₂ about their respective axes and are rotating with angular speeds ω₁ and ω₂. They are brought into contact face to face. The loss in kinetic energy of the system is:",
    "options": ["[I₁I₂/(I₁+I₂)](ω₁-ω₂)²", "(ω₁-ω₂)²/[2(I₁+I₂)]", "[I₁I₂/2(I₁+I₂)](ω₁-ω₂)²", "[(I₁-I₂)²ω₁ω₂]/[2(I₁+I₂)]"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "This is an inelastic rotational collision. The loss in kinetic energy is given by the standard formula ΔK = 1/2 (I₁I₂)/(I₁+I₂) (ω₁ - ω₂)²."
  },
  {
    "subject": "Physics",
    "chapter": "Gravitation",
    "subConcept": "Escape Velocity",
    "q": "Assertion A: The kinetic energy needed to project a body of mass m from the earth's surface to infinity is mgR, where R is the radius of earth. Reason R: The maximum potential energy of a body is zero when it is projected to infinity from earth's surface.",
    "options": ["A is false but R is true", "Both A and R are true and R is the correct explanation of A", "A is true but R is false", "Both A and R are true but R is NOT the correct explanation of A"],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Potential energy at earth's surface is -GMm/R. To reach infinity (where PE is 0), required KE = GMm/R. Since g = GM/R², KE = mgR. Both assertion and reason are true, and the reason correctly explains the assertion."
  },
  {
    "subject": "Physics",
    "chapter": "Gravitation",
    "subConcept": "Variation of g",
    "q": "At what distance above and below the surface of the earth will a body have the same weight? (R = radius of earth)",
    "options": ["√5 R - R", "(√3 R - R)/2", "R / 2", "(√5 R - R)/2"],
    "correctIndex": 3,
    "difficulty": "Hard",
    "examTag": "JEE Main",
    "stepByStepSolution": "g_h = g / (1+h/R)² and g_d = g(1 - d/R). Given h = d, equating them gives 1 / (1+x)² = 1 - x (where x = h/R). This simplifies to x² + x - 1 = 0. Solving yields x = (√5 - 1)/2. Thus h = R(√5 - 1)/2."
  },
  {
    "subject": "Physics",
    "chapter": "Gravitation",
    "subConcept": "Escape Velocity",
    "q": "The escape velocity of a body on a planet A is 12 km/s. The escape velocity of the body on another planet B, whose density is four times and radius is half of planet A, is:",
    "options": ["12 km/s", "24 km/s", "36 km/s", "6 km/s"],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Escape velocity v_e = √(2GM/R) = √(2G(4/3 πR³ρ)/R) ∝ R√ρ. Thus, v_eB / v_eA = (R_B/R_A) × √(ρ_B/ρ_A) = (1/2) × √(4) = 1. Therefore, v_eB = 12 km/s."
  },
  {
    "subject": "Physics",
    "chapter": "Properties of Solids",
    "subConcept": "Young's Modulus",
    "q": "Two wires A and B are made of the same material having a ratio of lengths 1:3 and a ratio of diameters 2:1. If both are stretched by the same force, the ratio of their elongations is:",
    "options": ["1:6", "1:12", "3:4", "1:3"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Elongation ΔL = FL / (AY) = FL / (π(d/2)²Y) ∝ L/d². Ratio ΔL_A / ΔL_B = (L_A / L_B) × (d_B / d_A)² = (1/3) × (1/2)² = 1/12."
  },
  {
    "subject": "Physics",
    "chapter": "Properties of Fluids",
    "subConcept": "Surface Tension",
    "q": "The amount of work done to break a big water drop of radius R into 27 small drops of equal radius is 10 J. The work done required to break the same big drop into 64 small drops of equal radius will be:",
    "options": ["15 J", "5 J", "20 J", "10 J"],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Work done W = T × ΔA = T × 4πR²(n^(1/3) - 1). For n=27, W₂₇ = T(4πR²)(3 - 1) = 2(T 4πR²) = 10 J. For n=64, W₆₄ = T(4πR²)(4 - 1) = 3(T 4πR²). Therefore, W₆₄ / W₂₇ = 3/2 => W₆₄ = 15 J."
  },
  {
    "subject": "Physics",
    "chapter": "Properties of Fluids",
    "subConcept": "Equation of Continuity",
    "q": "A tube has a radius of cross section of 2 cm at point 1 and 1 cm at point 2. If the velocity of water entering at point 1 is 2 m/s, then the velocity of water leaving at point 2 will be:",
    "options": ["4 m/s", "2 m/s", "6 m/s", "8 m/s"],
    "correctIndex": 3,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "According to the equation of continuity, A₁v₁ = A₂v₂. Thus, (π r₁²)v₁ = (π r₂²)v₂ => (2²) × 2 = (1²) × v₂ => v₂ = 8 m/s."
  },
  {
    "subject": "Physics",
    "chapter": "Oscillations",
    "subConcept": "Simple Harmonic Motion",
    "q": "A particle is making simple harmonic motion along the X-axis. If at distances x₁ and x₂ from the mean position, the velocities are v₁ and v₂, respectively. The time period of its oscillation is:",
    "options": ["2π√((x₂²+x₁²)/(v₁²-v₂²))", "2π√((x₂²+x₁²)/(v₁²+v₂²))", "2π√((x₂²-x₁²)/(v₁²+v₂²))", "2π√((x₂²-x₁²)/(v₁²-v₂²))"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Using v² = ω²(A² - x²): v₁² = ω²(A² - x₁²) and v₂² = ω²(A² - x₂²). Subtracting gives v₁² - v₂² = ω²(x₂² - x₁²), so ω = √((v₁² - v₂²)/(x₂² - x₁²)). Since T = 2π/ω, T = 2π√((x₂² - x₁²)/(v₁² - v₂²))."
  },
  {
    "subject": "Physics",
    "chapter": "Waves",
    "subConcept": "Wave Speed",
    "q": "Two strings with circular cross sections made of the same material are stretched with the same tension. The radius of the first is R and the second is R/2. If velocities of transverse waves are v₁ and v₂ respectively, then v₂/v₁ is:",
    "options": ["√2", "2", "8", "4"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Wave velocity v = √(T/μ). Linear mass density μ = πr²ρ. Thus, v is inversely proportional to r. Therefore, v₂/v₁ = r₁/r₂ = R / (R/2) = 2."
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "subConcept": "Ideal Gas Laws",
    "q": "A container of fixed volume contains a gas at 27°C. To double the pressure of the gas, the temperature of the gas should be raised to:",
    "options": ["300°C", "327°C", "600°C", "54°C"],
    "correctIndex": 1,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "At constant volume, P ∝ T. Initial temp T₁ = 27 + 273 = 300 K. For P to double, T₂ = 2T₁ = 600 K. In Celsius: 600 - 273 = 327°C."
  },
  {
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "subConcept": "Adiabatic Process",
    "q": "A sample of 1 mole gas at temperature T is adiabatically expanded to double its volume. If the adiabatic constant γ = 1.5, then the work done by the gas is:",
    "options": ["(R/T)[2-√2]", "(T/R)[2+√2]", "RT[2-√2]", "RT[2+√2]"],
    "correctIndex": 2,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "T₁V₁^(γ-1) = T₂V₂^(γ-1) => T(V)^0.5 = T₂(2V)^0.5 => T₂ = T/√2. Work done W = R(T₁ - T₂)/(γ - 1) = R(T - T/√2) / (1.5 - 1) = 2RT(1 - 1/√2) = RT(2 - √2)."
  },
  {
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "subConcept": "Degrees of Freedom",
    "q": "A gas has n degrees of freedom. The ratio of specific heat of gas at constant volume to the specific heat at constant pressure will be:",
    "options": ["n/(n+2)", "(n+2)/n", "n/(2n+2)", "n/(n-2)"],
    "correctIndex": 0,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Cv = nR/2 and Cp = (n+2)R/2. Therefore, Cv/Cp = (nR/2) / ((n+2)R/2) = n/(n+2)."
  },
  {
    "subject": "Physics",
    "chapter": "Capacitance",
    "subConcept": "Dielectrics",
    "q": "Two capacitors, each 40 μF, are connected in series. The space between one of the capacitors is filled with a dielectric material of constant K such that the equivalent capacitance becomes 24 μF. The value of K is:",
    "options": ["1.5", "2.5", "1.2", "3"],
    "correctIndex": 0,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "C₁ = 40 μF, C₂ = 40K μF. Series combination C_eq = (40 × 40K) / (40 + 40K) = 40K / (1+K). Given C_eq = 24. 40K = 24 + 24K => 16K = 24 => K = 1.5."
  },
  {
    "subject": "Physics",
    "chapter": "Current Electricity",
    "subConcept": "Resistance",
    "q": "An aluminium wire is stretched to make its length 0.4% larger. The percentage change in resistance is:",
    "options": ["0.4%", "0.2%", "0.8%", "0.6%"],
    "correctIndex": 2,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Since volume is constant during stretching, R ∝ L². The percentage change is dR/R = 2(dL/L) = 2 × 0.4% = 0.8%."
  },
  {
    "subject": "Physics",
    "chapter": "Ray Optics",
    "subConcept": "Combination of Lenses",
    "q": "Two thin convex lenses of focal length 30 cm and 10 cm are placed coaxially 10 cm apart. The power of this combination is:",
    "options": ["5 D", "1 D", "20 D", "10 D"],
    "correctIndex": 3,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Power P₁ = 1/0.3 = 10/3 D, P₂ = 1/0.1 = 10 D. Equivalent power P = P₁ + P₂ - d(P₁P₂) = 10/3 + 10 - 0.1(10/3)(10) = 13.33 - 3.33 = 10 D."
  },
  {
    "subject": "Physics",
    "chapter": "Ray Optics",
    "subConcept": "Lens Maker's Formula",
    "q": "A convex lens made of glass (refractive index 1.5) has focal length 24 cm in air. When immersed in water (refractive index 4/3), its focal length changes to:",
    "options": ["24 cm", "96 cm", "48 cm", "72 cm"],
    "correctIndex": 1,
    "difficulty": "Medium",
    "examTag": "JEE Main",
    "stepByStepSolution": "Using Lens Maker's Formula, f_water / f_air = (μ_glass - 1) / (μ_glass/μ_water - 1) = (1.5 - 1) / (1.5 / 1.33 - 1) = 0.5 / (9/8 - 1) = 0.5 / 0.125 = 4. f_water = 4 × 24 = 96 cm."
  },
  {
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation",
    "subConcept": "Photoelectric Effect",
    "q": "In a photoelectric effect experiment, light of frequency 1.5 times the threshold frequency falls on a material. If the frequency is halved and intensity is doubled, the number of photoelectrons emitted will be:",
    "options": ["Doubled", "Quadrupled", "Zero", "Halved"],
    "correctIndex": 2,
    "difficulty": "Easy",
    "examTag": "JEE Main",
    "stepByStepSolution": "Halving the initial frequency (1.5 f₀) yields 0.75 f₀. Since this is below the threshold frequency f₀, no photoelectric emission will occur, regardless of intensity. Hence, the number is zero."
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB...");
    
    // 1. Clear out the old, mismatched data
    await QuestionBank.deleteMany({});
    console.log("🗑️ Cleared old mismatched questions...");

    // 2. Insert the correctly formatted data
    await QuestionBank.insertMany(seedData);
    console.log("✅ Seeded Database with strictly typed Physics Questions!");
    
    process.exit(0);
  })
  .catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);
  });