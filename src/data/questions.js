// STAAR Math Practice Questions for 5th Grade
// Categories: numbers, fractions, algebra, geometry, measurement, data

export const questions = [
  // NUMBERS AND OPERATIONS (10 questions)
  {
    id: "n001",
    category: "numbers",
    difficulty: "easy",
    question: "A school library has 456 books on the first shelf and 789 books on the second shelf. How many books are on both shelves combined?",
    choices: [
      { id: "a", text: "1,145 books", correct: false },
      { id: "b", text: "1,245 books", correct: true },
      { id: "c", text: "1,345 books", correct: false },
      { id: "d", text: "1,235 books", correct: false }
    ],
    explanation: "To find the total, add the books from both shelves: 456 + 789 = 1,245 books",
    hints: ["Line up the digits by place value", "Start adding from the ones place"]
  },
  {
    id: "n002",
    category: "numbers",
    difficulty: "medium",
    question: "A stadium has 3,502 seats. If 1,678 seats are already filled, how many seats are still empty?",
    choices: [
      { id: "a", text: "1,824 seats", correct: true },
      { id: "b", text: "1,924 seats", correct: false },
      { id: "c", text: "1,814 seats", correct: false },
      { id: "d", text: "2,824 seats", correct: false }
    ],
    explanation: "To find the empty seats, subtract the filled seats from the total: 3,502 - 1,678 = 1,824 seats",
    hints: ["You may need to regroup (borrow)", "Work from right to left"]
  },
  {
    id: "n003",
    category: "numbers",
    difficulty: "easy",
    question: "Maria wants to buy 4 notebooks. Each notebook costs $25. How much money does she need in total?",
    choices: [
      { id: "a", text: "$90", correct: false },
      { id: "b", text: "$100", correct: true },
      { id: "c", text: "$110", correct: false },
      { id: "d", text: "$120", correct: false }
    ],
    explanation: "To find the total cost, multiply the price by the number of notebooks: 25 × 4 = $100",
    hints: ["Think of quarter dollars: 4 quarters = $1.00", "25 + 25 + 25 + 25"]
  },
  {
    id: "n004",
    category: "numbers",
    difficulty: "medium",
    question: "A teacher has 144 pencils to distribute equally among 12 students. How many pencils will each student receive?",
    choices: [
      { id: "a", text: "11 pencils", correct: false },
      { id: "b", text: "12 pencils", correct: true },
      { id: "c", text: "13 pencils", correct: false },
      { id: "d", text: "14 pencils", correct: false }
    ],
    explanation: "To find how many pencils each student gets, divide the total by the number of students: 144 ÷ 12 = 12 pencils",
    hints: ["What number times 12 equals 144?", "Try skip counting by 12"]
  },
  {
    id: "n005",
    category: "numbers",
    difficulty: "hard",
    question: "Which number is closest to 4,500?",
    choices: [
      { id: "a", text: "4,123", correct: false },
      { id: "b", text: "4,489", correct: true },
      { id: "c", text: "4,901", correct: false },
      { id: "d", text: "3,998", correct: false }
    ],
    explanation: "4,489 is only 11 away from 4,500, making it the closest number.",
    hints: ["Calculate the difference for each option", "4,500 - 4,489 = 11"]
  },
  {
    id: "n006",
    category: "numbers",
    difficulty: "easy",
    question: "What is the value of the digit 7 in 47,832?",
    choices: [
      { id: "a", text: "7", correct: false },
      { id: "b", text: "70", correct: false },
      { id: "c", text: "700", correct: false },
      { id: "d", text: "7,000", correct: true }
    ],
    explanation: "The digit 7 is in the thousands place, so its value is 7,000.",
    hints: ["Look at which place value the 7 is in", "Thousands place"]
  },
  {
    id: "n007",
    category: "numbers",
    difficulty: "medium",
    question: "Round 3,847 to the nearest hundred.",
    choices: [
      { id: "a", text: "3,800", correct: true },
      { id: "b", text: "3,900", correct: false },
      { id: "c", text: "3,850", correct: false },
      { id: "d", text: "4,000", correct: false }
    ],
    explanation: "The tens digit is 4, which is less than 5, so round down to 3,800.",
    hints: ["Look at the tens digit to decide", "Less than 5 means round down"]
  },
  {
    id: "n008",
    category: "numbers",
    difficulty: "medium",
    question: "What is 56 × 23?",
    choices: [
      { id: "a", text: "1,188", correct: false },
      { id: "b", text: "1,288", correct: true },
      { id: "c", text: "1,388", correct: false },
      { id: "d", text: "1,488", correct: false }
    ],
    explanation: "56 × 23 = 1,288. Break it down: (56 × 20) + (56 × 3) = 1,120 + 168 = 1,288",
    hints: ["Try breaking 23 into 20 + 3", "Multiply 56 by each part"]
  },
  {
    id: "n009",
    category: "numbers",
    difficulty: "hard",
    question: "If 8 × ? = 96, what number goes in the blank?",
    choices: [
      { id: "a", text: "11", correct: false },
      { id: "b", text: "12", correct: true },
      { id: "c", text: "13", correct: false },
      { id: "d", text: "14", correct: false }
    ],
    explanation: "96 ÷ 8 = 12, so 8 × 12 = 96",
    hints: ["This is a division problem in disguise", "96 ÷ 8 = ?"]
  },
  {
    id: "n010",
    category: "numbers",
    difficulty: "easy",
    question: "Which number is greatest?",
    choices: [
      { id: "a", text: "5,892", correct: false },
      { id: "b", text: "5,982", correct: true },
      { id: "c", text: "5,829", correct: false },
      { id: "d", text: "5,289", correct: false }
    ],
    explanation: "5,982 is the greatest. Compare from left to right: all have 5 thousands, but 9 hundreds is most.",
    hints: ["Start comparing from the leftmost digit", "Look at the hundreds place"]
  },

  // FRACTIONS (12 questions)
  {
    id: "f001",
    category: "fractions",
    difficulty: "easy",
    question: "Sarah ate 1/2 of a pizza. Which fraction shows an equivalent amount of the pizza Sarah ate?",
    choices: [
      { id: "a", text: "2/3", correct: false },
      { id: "b", text: "3/6", correct: true },
      { id: "c", text: "2/5", correct: false },
      { id: "d", text: "1/3", correct: false }
    ],
    explanation: "3/6 = 1/2 because 3 is half of 6. Both the numerator and denominator are multiplied by 3.",
    hints: ["Multiply both top and bottom by the same number", "1 × 3 = 3, 2 × 3 = 6"]
  },
  {
    id: "f002",
    category: "fractions",
    difficulty: "medium",
    question: "Which fraction is greater: 3/4 or 5/8?",
    choices: [
      { id: "a", text: "3/4", correct: true },
      { id: "b", text: "5/8", correct: false },
      { id: "c", text: "They are equal", correct: false },
      { id: "d", text: "Cannot determine", correct: false }
    ],
    explanation: "Convert to common denominator: 3/4 = 6/8, and 6/8 > 5/8, so 3/4 is greater.",
    hints: ["Find a common denominator", "3/4 = 6/8"]
  },
  {
    id: "f003",
    category: "fractions",
    difficulty: "easy",
    question: "Jake ran 1/4 of a mile in the morning and 1/4 of a mile in the afternoon. What fraction of a mile did Jake run in total?",
    choices: [
      { id: "a", text: "1/8", correct: false },
      { id: "b", text: "1/2", correct: true },
      { id: "c", text: "3/4", correct: false },
      { id: "d", text: "2/8", correct: false }
    ],
    explanation: "To find the total distance, add the fractions: 1/4 + 1/4 = 2/4, which simplifies to 1/2.",
    hints: ["Add the numerators, keep the denominator", "Simplify your answer: 2/4 = 1/2"]
  },
  {
    id: "f004",
    category: "fractions",
    difficulty: "medium",
    question: "What is 5/6 - 1/6?",
    choices: [
      { id: "a", text: "2/3", correct: true },
      { id: "b", text: "4/12", correct: false },
      { id: "c", text: "1", correct: false },
      { id: "d", text: "1/3", correct: false }
    ],
    explanation: "5/6 - 1/6 = 4/6, which simplifies to 2/3 (divide both numerator and denominator by 2).",
    hints: ["Same denominator, so subtract numerators", "Simplify: 4/6 = 2/3"]
  },
  {
    id: "f005",
    category: "fractions",
    difficulty: "hard",
    question: "What is 2/3 + 1/4?",
    choices: [
      { id: "a", text: "3/7", correct: false },
      { id: "b", text: "8/12", correct: false },
      { id: "c", text: "11/12", correct: true },
      { id: "d", text: "3/12", correct: false }
    ],
    explanation: "Find common denominator 12: 2/3 = 8/12, 1/4 = 3/12, so 8/12 + 3/12 = 11/12",
    hints: ["Find a common denominator (12)", "2/3 = 8/12 and 1/4 = 3/12"]
  },
  {
    id: "f006",
    category: "fractions",
    difficulty: "easy",
    question: "Which fraction is closest to 1?",
    choices: [
      { id: "a", text: "1/2", correct: false },
      { id: "b", text: "3/4", correct: false },
      { id: "c", text: "7/8", correct: true },
      { id: "d", text: "1/4", correct: false }
    ],
    explanation: "7/8 is only 1/8 away from 1, making it the closest.",
    hints: ["Which fraction is almost a whole?", "7/8 needs only 1/8 more to make 1"]
  },
  {
    id: "f007",
    category: "fractions",
    difficulty: "medium",
    question: "What is 3 1/2 + 2 1/4?",
    choices: [
      { id: "a", text: "5 1/4", correct: false },
      { id: "b", text: "5 3/4", correct: true },
      { id: "c", text: "5 1/2", correct: false },
      { id: "d", text: "6 1/4", correct: false }
    ],
    explanation: "Add whole numbers: 3 + 2 = 5. Add fractions: 1/2 + 1/4 = 2/4 + 1/4 = 3/4. Total: 5 3/4",
    hints: ["Add whole numbers and fractions separately", "1/2 = 2/4"]
  },
  {
    id: "f008",
    category: "fractions",
    difficulty: "easy",
    question: "What is 1/2 of 10?",
    choices: [
      { id: "a", text: "2", correct: false },
      { id: "b", text: "5", correct: true },
      { id: "c", text: "20", correct: false },
      { id: "d", text: "10", correct: false }
    ],
    explanation: "1/2 of 10 means divide 10 by 2, which equals 5.",
    hints: ["'Of' means multiply", "1/2 × 10 = 10 ÷ 2 = 5"]
  },
  {
    id: "f009",
    category: "fractions",
    difficulty: "hard",
    question: "Which fraction is in simplest form?",
    choices: [
      { id: "a", text: "4/8", correct: false },
      { id: "b", text: "6/9", correct: false },
      { id: "c", text: "3/7", correct: true },
      { id: "d", text: "10/15", correct: false }
    ],
    explanation: "3/7 cannot be simplified further because 3 and 7 have no common factors except 1.",
    hints: ["Can you divide both top and bottom by the same number?", "3 and 7 share no common factors"]
  },
  {
    id: "f010",
    category: "fractions",
    difficulty: "medium",
    question: "Convert 0.75 to a fraction.",
    choices: [
      { id: "a", text: "1/4", correct: false },
      { id: "b", text: "2/3", correct: false },
      { id: "c", text: "3/4", correct: true },
      { id: "d", text: "7/10", correct: false }
    ],
    explanation: "0.75 = 75/100 = 3/4 when simplified.",
    hints: ["0.75 means 75 hundredths", "Simplify 75/100"]
  },
  {
    id: "f011",
    category: "fractions",
    difficulty: "medium",
    question: "What decimal is equivalent to 1/5?",
    choices: [
      { id: "a", text: "0.15", correct: false },
      { id: "b", text: "0.2", correct: true },
      { id: "c", text: "0.25", correct: false },
      { id: "d", text: "0.5", correct: false }
    ],
    explanation: "1/5 = 0.2 because 1 ÷ 5 = 0.2",
    hints: ["Divide 1 by 5", "Think: 5 × 0.2 = 1"]
  },
  {
    id: "f012",
    category: "fractions",
    difficulty: "hard",
    question: "Order from least to greatest: 1/2, 2/5, 3/10",
    choices: [
      { id: "a", text: "1/2, 2/5, 3/10", correct: false },
      { id: "b", text: "3/10, 2/5, 1/2", correct: true },
      { id: "c", text: "2/5, 3/10, 1/2", correct: false },
      { id: "d", text: "3/10, 1/2, 2/5", correct: false }
    ],
    explanation: "Convert to common denominator 10: 3/10, 4/10 (2/5), 5/10 (1/2)",
    hints: ["Convert all to denominator of 10", "1/2 = 5/10, 2/5 = 4/10"]
  },

  // ALGEBRA (10 questions)
  {
    id: "a001",
    category: "algebra",
    difficulty: "easy",
    question: "What is the next number in the pattern? 2, 4, 6, 8, ?",
    choices: [
      { id: "a", text: "9", correct: false },
      { id: "b", text: "10", correct: true },
      { id: "c", text: "12", correct: false },
      { id: "d", text: "14", correct: false }
    ],
    explanation: "The pattern adds 2 each time: 8 + 2 = 10",
    hints: ["What number is being added each time?", "Count by 2s"]
  },
  {
    id: "a002",
    category: "algebra",
    difficulty: "medium",
    question: "What is the rule for this pattern? 5, 10, 15, 20, 25",
    choices: [
      { id: "a", text: "Add 5", correct: true },
      { id: "b", text: "Multiply by 2", correct: false },
      { id: "c", text: "Add 10", correct: false },
      { id: "d", text: "Subtract 5", correct: false }
    ],
    explanation: "Each number increases by 5: 5 + 5 = 10, 10 + 5 = 15, etc.",
    hints: ["What's the difference between consecutive numbers?", "10 - 5 = 5"]
  },
  {
    id: "a003",
    category: "algebra",
    difficulty: "easy",
    question: "If n + 7 = 12, what is n?",
    choices: [
      { id: "a", text: "4", correct: false },
      { id: "b", text: "5", correct: true },
      { id: "c", text: "6", correct: false },
      { id: "d", text: "19", correct: false }
    ],
    explanation: "To find n, subtract 7 from both sides: n = 12 - 7 = 5",
    hints: ["What plus 7 equals 12?", "12 - 7 = ?"]
  },
  {
    id: "a004",
    category: "algebra",
    difficulty: "medium",
    question: "If 3 × m = 21, what is m?",
    choices: [
      { id: "a", text: "6", correct: false },
      { id: "b", text: "7", correct: true },
      { id: "c", text: "8", correct: false },
      { id: "d", text: "18", correct: false }
    ],
    explanation: "To find m, divide both sides by 3: m = 21 ÷ 3 = 7",
    hints: ["What times 3 equals 21?", "21 ÷ 3 = ?"]
  },
  {
    id: "a005",
    category: "algebra",
    difficulty: "hard",
    question: "What is the 6th term in the pattern: 3, 6, 12, 24, 48, ?",
    choices: [
      { id: "a", text: "72", correct: false },
      { id: "b", text: "84", correct: false },
      { id: "c", text: "96", correct: true },
      { id: "d", text: "100", correct: false }
    ],
    explanation: "Each term is multiplied by 2: 48 × 2 = 96",
    hints: ["What operation connects each number?", "Each number is double the previous"]
  },
  {
    id: "a006",
    category: "algebra",
    difficulty: "medium",
    question: "Complete the equation: 15 - ? = 8",
    choices: [
      { id: "a", text: "5", correct: false },
      { id: "b", text: "6", correct: false },
      { id: "c", text: "7", correct: true },
      { id: "d", text: "23", correct: false }
    ],
    explanation: "15 - 7 = 8. You can check: 8 + 7 = 15",
    hints: ["What do you subtract from 15 to get 8?", "15 - 8 = ?"]
  },
  {
    id: "a007",
    category: "algebra",
    difficulty: "easy",
    question: "Which symbol makes this true? 25 ? 5 = 30",
    choices: [
      { id: "a", text: "+", correct: true },
      { id: "b", text: "-", correct: false },
      { id: "c", text: "×", correct: false },
      { id: "d", text: "÷", correct: false }
    ],
    explanation: "25 + 5 = 30",
    hints: ["Try each operation", "What makes 25 and 5 equal 30?"]
  },
  {
    id: "a008",
    category: "algebra",
    difficulty: "hard",
    question: "If x - 8 = 15, what is x?",
    choices: [
      { id: "a", text: "7", correct: false },
      { id: "b", text: "20", correct: false },
      { id: "c", text: "23", correct: true },
      { id: "d", text: "25", correct: false }
    ],
    explanation: "Add 8 to both sides: x = 15 + 8 = 23",
    hints: ["What minus 8 equals 15?", "15 + 8 = ?"]
  },
  {
    id: "a009",
    category: "algebra",
    difficulty: "medium",
    question: "What comes next? △, ○, □, △, ○, ?",
    choices: [
      { id: "a", text: "△", correct: false },
      { id: "b", text: "○", correct: false },
      { id: "c", text: "□", correct: true },
      { id: "d", text: "Cannot determine", correct: false }
    ],
    explanation: "The pattern repeats: triangle, circle, square, triangle, circle, square",
    hints: ["Look for a repeating pattern", "The pattern is 3 shapes long"]
  },
  {
    id: "a010",
    category: "algebra",
    difficulty: "hard",
    question: "What is the missing number? 2, 5, 11, 23, ?",
    choices: [
      { id: "a", text: "35", correct: false },
      { id: "b", text: "41", correct: false },
      { id: "c", text: "47", correct: true },
      { id: "d", text: "46", correct: false }
    ],
    explanation: "Each term is (previous term × 2) + 1: 23 × 2 + 1 = 47",
    hints: ["Look at how much is added each time", "The differences are 3, 6, 12..."]
  },

  // GEOMETRY (10 questions)
  {
    id: "g001",
    category: "geometry",
    difficulty: "easy",
    question: "How many sides does a hexagon have?",
    choices: [
      { id: "a", text: "5", correct: false },
      { id: "b", text: "6", correct: true },
      { id: "c", text: "7", correct: false },
      { id: "d", text: "8", correct: false }
    ],
    explanation: "A hexagon has 6 sides. The prefix 'hex' means six.",
    hints: ["Think of the prefix 'hex'", "A stop sign is an octagon (8 sides)"]
  },
  {
    id: "g002",
    category: "geometry",
    difficulty: "medium",
    question: "What is the perimeter of a rectangle with length 8 cm and width 5 cm?",
    choices: [
      { id: "a", text: "13 cm", correct: false },
      { id: "b", text: "26 cm", correct: true },
      { id: "c", text: "40 cm", correct: false },
      { id: "d", text: "16 cm", correct: false }
    ],
    explanation: "Perimeter = 2(length + width) = 2(8 + 5) = 2(13) = 26 cm",
    hints: ["Add all four sides", "Perimeter = 8 + 5 + 8 + 5"]
  },
  {
    id: "g003",
    category: "geometry",
    difficulty: "easy",
    question: "Which shape has 4 right angles and 4 equal sides?",
    choices: [
      { id: "a", text: "Rectangle", correct: false },
      { id: "b", text: "Square", correct: true },
      { id: "c", text: "Rhombus", correct: false },
      { id: "d", text: "Trapezoid", correct: false }
    ],
    explanation: "A square has 4 right angles and all 4 sides are equal.",
    hints: ["Which shape has equal sides and right angles?", "Not just any rectangle"]
  },
  {
    id: "g004",
    category: "geometry",
    difficulty: "medium",
    question: "What is the area of a rectangle with length 6 inches and width 4 inches?",
    choices: [
      { id: "a", text: "10 square inches", correct: false },
      { id: "b", text: "20 square inches", correct: false },
      { id: "c", text: "24 square inches", correct: true },
      { id: "d", text: "26 square inches", correct: false }
    ],
    explanation: "Area = length × width = 6 × 4 = 24 square inches",
    hints: ["Area = length × width", "6 × 4 = ?"]
  },
  {
    id: "g005",
    category: "geometry",
    difficulty: "hard",
    question: "A triangle has angles of 90° and 45°. What is the third angle?",
    choices: [
      { id: "a", text: "35°", correct: false },
      { id: "b", text: "45°", correct: true },
      { id: "c", text: "50°", correct: false },
      { id: "d", text: "60°", correct: false }
    ],
    explanation: "All angles in a triangle add to 180°: 180 - 90 - 45 = 45°",
    hints: ["Triangle angles add to 180°", "180 - 90 - 45 = ?"]
  },
  {
    id: "g006",
    category: "geometry",
    difficulty: "easy",
    question: "Which shape has no corners?",
    choices: [
      { id: "a", text: "Triangle", correct: false },
      { id: "b", text: "Square", correct: false },
      { id: "c", text: "Circle", correct: true },
      { id: "d", text: "Pentagon", correct: false }
    ],
    explanation: "A circle is round and has no corners or vertices.",
    hints: ["Think of round shapes", "No corners means no angles"]
  },
  {
    id: "g007",
    category: "geometry",
    difficulty: "medium",
    question: "What is the perimeter of a square with side length 7 meters?",
    choices: [
      { id: "a", text: "14 meters", correct: false },
      { id: "b", text: "21 meters", correct: false },
      { id: "c", text: "28 meters", correct: true },
      { id: "d", text: "49 meters", correct: false }
    ],
    explanation: "Perimeter of square = 4 × side = 4 × 7 = 28 meters",
    hints: ["A square has 4 equal sides", "7 + 7 + 7 + 7 = ?"]
  },
  {
    id: "g008",
    category: "geometry",
    difficulty: "hard",
    question: "What is the area of a square with side length 9 cm?",
    choices: [
      { id: "a", text: "18 square cm", correct: false },
      { id: "b", text: "36 square cm", correct: false },
      { id: "c", text: "81 square cm", correct: true },
      { id: "d", text: "90 square cm", correct: false }
    ],
    explanation: "Area of square = side × side = 9 × 9 = 81 square cm",
    hints: ["Area = side × side", "9 × 9 = ?"]
  },
  {
    id: "g009",
    category: "geometry",
    difficulty: "easy",
    question: "A right angle measures:",
    choices: [
      { id: "a", text: "45°", correct: false },
      { id: "b", text: "90°", correct: true },
      { id: "c", text: "180°", correct: false },
      { id: "d", text: "360°", correct: false }
    ],
    explanation: "A right angle is exactly 90°, like the corner of a square.",
    hints: ["Think of the corner of a book", "It's a square corner"]
  },
  {
    id: "g010",
    category: "geometry",
    difficulty: "medium",
    question: "Which shape is a quadrilateral?",
    choices: [
      { id: "a", text: "Triangle", correct: false },
      { id: "b", text: "Pentagon", correct: false },
      { id: "c", text: "Trapezoid", correct: true },
      { id: "d", text: "Hexagon", correct: false }
    ],
    explanation: "A quadrilateral has 4 sides. A trapezoid has 4 sides, so it's a quadrilateral.",
    hints: ["'Quad' means four", "Which shape has 4 sides?"]
  },

  // MEASUREMENT (10 questions)
  {
    id: "m001",
    category: "measurement",
    difficulty: "easy",
    question: "How many inches are in 1 foot?",
    choices: [
      { id: "a", text: "10", correct: false },
      { id: "b", text: "12", correct: true },
      { id: "c", text: "16", correct: false },
      { id: "d", text: "24", correct: false }
    ],
    explanation: "There are 12 inches in 1 foot.",
    hints: ["Think of a ruler", "A foot is 12 inches"]
  },
  {
    id: "m002",
    category: "measurement",
    difficulty: "medium",
    question: "How many feet are in 1 yard?",
    choices: [
      { id: "a", text: "2", correct: false },
      { id: "b", text: "3", correct: true },
      { id: "c", text: "12", correct: false },
      { id: "d", text: "36", correct: false }
    ],
    explanation: "There are 3 feet in 1 yard.",
    hints: ["A yard is longer than a foot", "3 feet = 1 yard"]
  },
  {
    id: "m003",
    category: "measurement",
    difficulty: "easy",
    question: "What time is shown: hour hand on 3, minute hand on 12?",
    choices: [
      { id: "a", text: "12:15", correct: false },
      { id: "b", text: "3:00", correct: true },
      { id: "c", text: "3:12", correct: false },
      { id: "d", text: "12:03", correct: false }
    ],
    explanation: "When the minute hand is on 12, it's o'clock. Hour hand on 3 means 3:00.",
    hints: ["Minute hand on 12 = o'clock", "Hour hand shows the hour"]
  },
  {
    id: "m004",
    category: "measurement",
    difficulty: "medium",
    question: "How many minutes are in 2 hours?",
    choices: [
      { id: "a", text: "60", correct: false },
      { id: "b", text: "100", correct: false },
      { id: "c", text: "120", correct: true },
      { id: "d", text: "200", correct: false }
    ],
    explanation: "1 hour = 60 minutes, so 2 hours = 2 × 60 = 120 minutes",
    hints: ["How many minutes in 1 hour?", "60 + 60 = ?"]
  },
  {
    id: "m005",
    category: "measurement",
    difficulty: "hard",
    question: "A movie starts at 2:45 PM and lasts 2 hours and 15 minutes. What time does it end?",
    choices: [
      { id: "a", text: "4:50 PM", correct: false },
      { id: "b", text: "5:00 PM", correct: true },
      { id: "c", text: "5:15 PM", correct: false },
      { id: "d", text: "4:45 PM", correct: false }
    ],
    explanation: "2:45 + 2 hours = 4:45, then 4:45 + 15 minutes = 5:00 PM",
    hints: ["Add hours first, then minutes", "2:45 + 2 hours + 15 minutes"]
  },
  {
    id: "m006",
    category: "measurement",
    difficulty: "easy",
    question: "Which is heavier: a pound or an ounce?",
    choices: [
      { id: "a", text: "Ounce", correct: false },
      { id: "b", text: "Pound", correct: true },
      { id: "c", text: "They are equal", correct: false },
      { id: "d", text: "Cannot determine", correct: false }
    ],
    explanation: "A pound is heavier. 1 pound = 16 ounces",
    hints: ["Which weighs more?", "16 ounces = 1 pound"]
  },
  {
    id: "m007",
    category: "measurement",
    difficulty: "medium",
    question: "How many centimeters are in 1 meter?",
    choices: [
      { id: "a", text: "10", correct: false },
      { id: "b", text: "100", correct: true },
      { id: "c", text: "1000", correct: false },
      { id: "d", text: "1", correct: false }
    ],
    explanation: "There are 100 centimeters in 1 meter.",
    hints: ["'Centi' means hundred", "1 meter = 100 cm"]
  },
  {
    id: "m008",
    category: "measurement",
    difficulty: "easy",
    question: "How many quarters make one dollar?",
    choices: [
      { id: "a", text: "2", correct: false },
      { id: "b", text: "4", correct: true },
      { id: "c", text: "5", correct: false },
      { id: "d", text: "10", correct: false }
    ],
    explanation: "4 quarters = $1.00. Each quarter is worth $0.25.",
    hints: ["A quarter is 25 cents", "25 + 25 + 25 + 25 = 100 cents"]
  },
  {
    id: "m009",
    category: "measurement",
    difficulty: "hard",
    question: "Sarah has 3 quarters, 4 dimes, and 2 nickels. How much money does she have?",
    choices: [
      { id: "a", text: "$1.15", correct: false },
      { id: "b", text: "$1.20", correct: false },
      { id: "c", text: "$1.30", correct: false },
      { id: "d", text: "$1.25", correct: true }
    ],
    explanation: "3 quarters = $0.75, 4 dimes = $0.40, 2 nickels = $0.10. Total: $0.75 + $0.40 + $0.10 = $1.25",
    hints: ["Quarter = $0.25, dime = $0.10, nickel = $0.05", "Add them up: 75¢ + 40¢ + 10¢"]
  },
  {
    id: "m010",
    category: "measurement",
    difficulty: "medium",
    question: "Which unit would you use to measure the weight of a car?",
    choices: [
      { id: "a", text: "Ounces", correct: false },
      { id: "b", text: "Pounds", correct: true },
      { id: "c", text: "Inches", correct: false },
      { id: "d", text: "Gallons", correct: false }
    ],
    explanation: "Pounds (or tons) are used to measure heavy objects like cars.",
    hints: ["Weight needs weight units", "Which is a weight measurement?"]
  },

  // DATA ANALYSIS (8 questions)
  {
    id: "d001",
    category: "data",
    difficulty: "easy",
    question: "A bar graph shows: Monday-5, Tuesday-3, Wednesday-7. Which day had the most?",
    choices: [
      { id: "a", text: "Monday", correct: false },
      { id: "b", text: "Tuesday", correct: false },
      { id: "c", text: "Wednesday", correct: true },
      { id: "d", text: "All equal", correct: false }
    ],
    explanation: "Wednesday had 7, which is more than Monday (5) and Tuesday (3).",
    hints: ["Which number is biggest?", "7 > 5 > 3"]
  },
  {
    id: "d002",
    category: "data",
    difficulty: "medium",
    question: "What is the mean (average) of 4, 6, 8, and 10?",
    choices: [
      { id: "a", text: "6", correct: false },
      { id: "b", text: "7", correct: true },
      { id: "c", text: "8", correct: false },
      { id: "d", text: "28", correct: false }
    ],
    explanation: "Add all numbers: 4 + 6 + 8 + 10 = 28. Divide by count: 28 ÷ 4 = 7",
    hints: ["Add all numbers, then divide by how many", "(4 + 6 + 8 + 10) ÷ 4"]
  },
  {
    id: "d003",
    category: "data",
    difficulty: "easy",
    question: "What is the mode of: 3, 5, 3, 7, 3, 9?",
    choices: [
      { id: "a", text: "3", correct: true },
      { id: "b", text: "5", correct: false },
      { id: "c", text: "7", correct: false },
      { id: "d", text: "9", correct: false }
    ],
    explanation: "The mode is the number that appears most often. 3 appears three times.",
    hints: ["Which number appears most?", "Count how many times each appears"]
  },
  {
    id: "d004",
    category: "data",
    difficulty: "medium",
    question: "What is the median of: 2, 5, 8, 11, 14?",
    choices: [
      { id: "a", text: "5", correct: false },
      { id: "b", text: "8", correct: true },
      { id: "c", text: "9", correct: false },
      { id: "d", text: "11", correct: false }
    ],
    explanation: "The median is the middle number when in order. 8 is in the middle.",
    hints: ["Find the middle number", "2, 5, [8], 11, 14"]
  },
  {
    id: "d005",
    category: "data",
    difficulty: "hard",
    question: "Students' test scores: 85, 90, 78, 92, 85. What is the range?",
    choices: [
      { id: "a", text: "7", correct: false },
      { id: "b", text: "14", correct: true },
      { id: "c", text: "85", correct: false },
      { id: "d", text: "92", correct: false }
    ],
    explanation: "Range = highest - lowest = 92 - 78 = 14",
    hints: ["Range = biggest minus smallest", "92 - 78 = ?"]
  },
  {
    id: "d006",
    category: "data",
    difficulty: "easy",
    question: "A pictograph shows: ☆ = 2 votes. If there are 4 stars, how many votes?",
    choices: [
      { id: "a", text: "2", correct: false },
      { id: "b", text: "4", correct: false },
      { id: "c", text: "6", correct: false },
      { id: "d", text: "8", correct: true }
    ],
    explanation: "Each star = 2 votes, so 4 stars = 4 × 2 = 8 votes",
    hints: ["Multiply stars by value", "4 × 2 = ?"]
  },
  {
    id: "d007",
    category: "data",
    difficulty: "medium",
    question: "A tally chart shows two groups of 5 tallies (with the diagonal line through them) and 3 single tallies. How many items total?",
    choices: [
      { id: "a", text: "12", correct: false },
      { id: "b", text: "13", correct: true },
      { id: "c", text: "14", correct: false },
      { id: "d", text: "15", correct: false }
    ],
    explanation: "Two complete groups of 5 = 10, plus 3 more = 13 total",
    hints: ["Each complete group with diagonal line = 5", "Count: 5 + 5 + 3"]
  },
  {
    id: "d008",
    category: "data",
    difficulty: "hard",
    question: "Temperatures: Monday 72°F, Tuesday 68°F, Wednesday 75°F. What's the average?",
    choices: [
      { id: "a", text: "70°F", correct: false },
      { id: "b", text: "71°F", correct: false },
      { id: "c", text: "71.7°F", correct: true },
      { id: "d", text: "72°F", correct: false }
    ],
    explanation: "(72 + 68 + 75) ÷ 3 = 215 ÷ 3 = 71.666... ≈ 71.7°F",
    hints: ["Add all temperatures, divide by 3", "(72 + 68 + 75) ÷ 3"]
  },

  // ADDITIONAL NUMBERS QUESTIONS (10 more)
  {
    id: "n011",
    category: "numbers",
    difficulty: "medium",
    question: "What is 2,345 + 6,789?",
    choices: [
      { id: "a", text: "8,134", correct: false },
      { id: "b", text: "9,124", correct: false },
      { id: "c", text: "9,134", correct: true },
      { id: "d", text: "9,234", correct: false }
    ],
    explanation: "2,345 + 6,789 = 9,134",
    hints: ["Line up by place value", "Remember to carry when needed"]
  },
  {
    id: "n012",
    category: "numbers",
    difficulty: "easy",
    question: "What is 15 × 6?",
    choices: [
      { id: "a", text: "80", correct: false },
      { id: "b", text: "90", correct: true },
      { id: "c", text: "100", correct: false },
      { id: "d", text: "95", correct: false }
    ],
    explanation: "15 × 6 = 90",
    hints: ["Think of 15 + 15 + 15 + 15 + 15 + 15", "Or 10 × 6 plus 5 × 6"]
  },
  {
    id: "n013",
    category: "numbers",
    difficulty: "hard",
    question: "What is 5,000 - 2,847?",
    choices: [
      { id: "a", text: "2,153", correct: true },
      { id: "b", text: "2,253", correct: false },
      { id: "c", text: "2,163", correct: false },
      { id: "d", text: "3,153", correct: false }
    ],
    explanation: "5,000 - 2,847 = 2,153. Need to borrow across zeros.",
    hints: ["Borrow from the thousands place", "Think: 4,1000 - 2,847"]
  },
  {
    id: "n014",
    category: "numbers",
    difficulty: "medium",
    question: "What is 420 ÷ 7?",
    choices: [
      { id: "a", text: "50", correct: false },
      { id: "b", text: "60", correct: true },
      { id: "c", text: "70", correct: false },
      { id: "d", text: "80", correct: false }
    ],
    explanation: "420 ÷ 7 = 60",
    hints: ["What times 7 equals 420?", "Think of 42 ÷ 7 = 6, then add a zero"]
  },
  {
    id: "n015",
    category: "numbers",
    difficulty: "easy",
    question: "Which number sentence is true?",
    choices: [
      { id: "a", text: "6 × 7 = 42", correct: true },
      { id: "b", text: "6 × 7 = 48", correct: false },
      { id: "c", text: "6 × 7 = 36", correct: false },
      { id: "d", text: "6 × 7 = 54", correct: false }
    ],
    explanation: "6 × 7 = 42",
    hints: ["Recall your multiplication facts", "6 + 6 + 6 + 6 + 6 + 6 + 6"]
  },
  {
    id: "n016",
    category: "numbers",
    difficulty: "hard",
    question: "Estimate the product: 48 × 52",
    choices: [
      { id: "a", text: "About 2,400", correct: false },
      { id: "b", text: "About 2,500", correct: true },
      { id: "c", text: "About 3,000", correct: false },
      { id: "d", text: "About 2,000", correct: false }
    ],
    explanation: "Round to 50 × 50 = 2,500",
    hints: ["Round both numbers to nearest ten", "50 × 50 = 2,500"]
  },
  {
    id: "n017",
    category: "numbers",
    difficulty: "medium",
    question: "What is the value of the 5 in 25,849?",
    choices: [
      { id: "a", text: "5", correct: false },
      { id: "b", text: "50", correct: false },
      { id: "c", text: "500", correct: false },
      { id: "d", text: "5,000", correct: true }
    ],
    explanation: "The 5 is in the thousands place, so it represents 5,000.",
    hints: ["Look at the place value", "Count from the right: ones, tens, hundreds, thousands"]
  },
  {
    id: "n018",
    category: "numbers",
    difficulty: "easy",
    question: "What is 100 - 37?",
    choices: [
      { id: "a", text: "63", correct: true },
      { id: "b", text: "73", correct: false },
      { id: "c", text: "67", correct: false },
      { id: "d", text: "77", correct: false }
    ],
    explanation: "100 - 37 = 63",
    hints: ["Think: 37 + ? = 100", "Count up from 37 to 100"]
  },
  {
    id: "n019",
    category: "numbers",
    difficulty: "hard",
    question: "Round 47,528 to the nearest thousand.",
    choices: [
      { id: "a", text: "47,000", correct: false },
      { id: "b", text: "48,000", correct: true },
      { id: "c", text: "47,500", correct: false },
      { id: "d", text: "50,000", correct: false }
    ],
    explanation: "The hundreds digit is 5, so round up to 48,000.",
    hints: ["Look at the hundreds place (5)", "5 or more means round up"]
  },
  {
    id: "n020",
    category: "numbers",
    difficulty: "medium",
    question: "What is 75 × 8?",
    choices: [
      { id: "a", text: "560", correct: false },
      { id: "b", text: "600", correct: true },
      { id: "c", text: "640", correct: false },
      { id: "d", text: "580", correct: false }
    ],
    explanation: "75 × 8 = 600",
    hints: ["Think: (70 × 8) + (5 × 8)", "560 + 40 = 600"]
  },

  // ADDITIONAL FRACTIONS QUESTIONS (10 more)
  {
    id: "f013",
    category: "fractions",
    difficulty: "easy",
    question: "What is 2/5 + 1/5?",
    choices: [
      { id: "a", text: "3/5", correct: true },
      { id: "b", text: "3/10", correct: false },
      { id: "c", text: "1/5", correct: false },
      { id: "d", text: "2/5", correct: false }
    ],
    explanation: "When denominators are the same, add numerators: 2 + 1 = 3, so 3/5",
    hints: ["Same denominator, add numerators", "2 + 1 = 3"]
  },
  {
    id: "f014",
    category: "fractions",
    difficulty: "medium",
    question: "Simplify 8/12",
    choices: [
      { id: "a", text: "4/6", correct: false },
      { id: "b", text: "2/3", correct: true },
      { id: "c", text: "8/12", correct: false },
      { id: "d", text: "1/2", correct: false }
    ],
    explanation: "Divide both by 4: 8÷4 = 2, 12÷4 = 3, so 2/3",
    hints: ["Find common factor of 8 and 12", "Both divide by 4"]
  },
  {
    id: "f015",
    category: "fractions",
    difficulty: "hard",
    question: "What is 5/6 - 1/3?",
    choices: [
      { id: "a", text: "4/3", correct: false },
      { id: "b", text: "4/6", correct: false },
      { id: "c", text: "1/2", correct: true },
      { id: "d", text: "2/3", correct: false }
    ],
    explanation: "Convert 1/3 to 2/6, then 5/6 - 2/6 = 3/6 = 1/2",
    hints: ["Get common denominator of 6", "1/3 = 2/6"]
  },
  {
    id: "f016",
    category: "fractions",
    difficulty: "easy",
    question: "Which is larger: 1/3 or 1/4?",
    choices: [
      { id: "a", text: "1/3", correct: true },
      { id: "b", text: "1/4", correct: false },
      { id: "c", text: "Equal", correct: false },
      { id: "d", text: "Cannot tell", correct: false }
    ],
    explanation: "1/3 is larger. With the same numerator, smaller denominator means bigger pieces.",
    hints: ["Would you rather have 1/3 or 1/4 of a pizza?", "Smaller denominator = bigger piece"]
  },
  {
    id: "f017",
    category: "fractions",
    difficulty: "medium",
    question: "Convert 7/4 to a mixed number.",
    choices: [
      { id: "a", text: "1 1/4", correct: false },
      { id: "b", text: "1 3/4", correct: true },
      { id: "c", text: "2 1/4", correct: false },
      { id: "d", text: "1 2/4", correct: false }
    ],
    explanation: "7 ÷ 4 = 1 remainder 3, so 1 3/4",
    hints: ["How many 4s in 7?", "1 whole (4/4) plus 3/4 left"]
  },
  {
    id: "f018",
    category: "fractions",
    difficulty: "hard",
    question: "What is 2/3 × 3?",
    choices: [
      { id: "a", text: "2", correct: true },
      { id: "b", text: "6/3", correct: false },
      { id: "c", text: "2/9", correct: false },
      { id: "d", text: "3", correct: false }
    ],
    explanation: "2/3 × 3 = 6/3 = 2",
    hints: ["Multiply numerator by 3", "2 × 3 = 6, then 6/3 = 2"]
  },
  {
    id: "f019",
    category: "fractions",
    difficulty: "easy",
    question: "What fraction of the whole is shaded if 3 out of 8 parts are shaded?",
    choices: [
      { id: "a", text: "3/5", correct: false },
      { id: "b", text: "3/8", correct: true },
      { id: "c", text: "5/8", correct: false },
      { id: "d", text: "3/11", correct: false }
    ],
    explanation: "3 shaded out of 8 total = 3/8",
    hints: ["Shaded parts over total parts", "3 out of 8"]
  },
  {
    id: "f020",
    category: "fractions",
    difficulty: "medium",
    question: "Which decimal equals 3/5?",
    choices: [
      { id: "a", text: "0.3", correct: false },
      { id: "b", text: "0.5", correct: false },
      { id: "c", text: "0.6", correct: true },
      { id: "d", text: "0.35", correct: false }
    ],
    explanation: "3/5 = 6/10 = 0.6",
    hints: ["Convert to tenths first", "3/5 = 6/10"]
  },
  {
    id: "f021",
    category: "fractions",
    difficulty: "hard",
    question: "Add: 1 1/4 + 2 1/2",
    choices: [
      { id: "a", text: "3 1/4", correct: false },
      { id: "b", text: "3 3/4", correct: true },
      { id: "c", text: "3 1/2", correct: false },
      { id: "d", text: "4", correct: false }
    ],
    explanation: "Convert 2 1/2 to 2 2/4. Whole numbers: 1 + 2 = 3. Fractions: 1/4 + 2/4 = 3/4. Total: 3 3/4",
    hints: ["Convert 1/2 to 2/4 to get common denominator", "Add whole numbers and fractions separately"]
  },
  {
    id: "f022",
    category: "fractions",
    difficulty: "medium",
    question: "Which fraction is NOT equivalent to 1/2?",
    choices: [
      { id: "a", text: "2/4", correct: false },
      { id: "b", text: "3/6", correct: false },
      { id: "c", text: "4/9", correct: true },
      { id: "d", text: "5/10", correct: false }
    ],
    explanation: "4/9 does not equal 1/2. All others do: 2/4 = 3/6 = 5/10 = 1/2",
    hints: ["Check each by simplifying", "4/9 cannot be reduced to 1/2"]
  },

  // ADDITIONAL ALGEBRA QUESTIONS (8 more)
  {
    id: "a011",
    category: "algebra",
    difficulty: "easy",
    question: "What number comes next? 10, 20, 30, 40, ?",
    choices: [
      { id: "a", text: "45", correct: false },
      { id: "b", text: "50", correct: true },
      { id: "c", text: "60", correct: false },
      { id: "d", text: "100", correct: false }
    ],
    explanation: "Add 10 each time: 40 + 10 = 50",
    hints: ["Count by 10s", "Pattern adds 10"]
  },
  {
    id: "a012",
    category: "algebra",
    difficulty: "medium",
    question: "If 4n = 32, what is n?",
    choices: [
      { id: "a", text: "6", correct: false },
      { id: "b", text: "7", correct: false },
      { id: "c", text: "8", correct: true },
      { id: "d", text: "9", correct: false }
    ],
    explanation: "32 ÷ 4 = 8, so n = 8",
    hints: ["What times 4 equals 32?", "32 ÷ 4 = ?"]
  },
  {
    id: "a013",
    category: "algebra",
    difficulty: "hard",
    question: "Find the missing number: 100, 93, 86, 79, ?",
    choices: [
      { id: "a", text: "72", correct: true },
      { id: "b", text: "74", correct: false },
      { id: "c", text: "70", correct: false },
      { id: "d", text: "76", correct: false }
    ],
    explanation: "Subtract 7 each time: 79 - 7 = 72",
    hints: ["What's being subtracted?", "100-93 = 7, 93-86 = 7"]
  },
  {
    id: "a014",
    category: "algebra",
    difficulty: "easy",
    question: "Complete: 8 + 5 = 10 + ?",
    choices: [
      { id: "a", text: "2", correct: false },
      { id: "b", text: "3", correct: true },
      { id: "c", text: "4", correct: false },
      { id: "d", text: "5", correct: false }
    ],
    explanation: "8 + 5 = 13, and 10 + 3 = 13",
    hints: ["What is 8 + 5?", "13 - 10 = ?"]
  },
  {
    id: "a015",
    category: "algebra",
    difficulty: "medium",
    question: "What is the rule? Input: 2→6, 3→9, 4→12, 5→?",
    choices: [
      { id: "a", text: "14", correct: false },
      { id: "b", text: "15", correct: true },
      { id: "c", text: "16", correct: false },
      { id: "d", text: "17", correct: false }
    ],
    explanation: "Multiply by 3: 5 × 3 = 15",
    hints: ["What operation turns 2 into 6?", "Multiply by 3"]
  },
  {
    id: "a016",
    category: "algebra",
    difficulty: "hard",
    question: "If x + 12 = 25, what is x?",
    choices: [
      { id: "a", text: "11", correct: false },
      { id: "b", text: "12", correct: false },
      { id: "c", text: "13", correct: true },
      { id: "d", text: "37", correct: false }
    ],
    explanation: "x = 25 - 12 = 13",
    hints: ["What plus 12 equals 25?", "25 - 12 = ?"]
  },
  {
    id: "a017",
    category: "algebra",
    difficulty: "easy",
    question: "What comes next? ★, ★★, ★★★, ?",
    choices: [
      { id: "a", text: "★★", correct: false },
      { id: "b", text: "★★★★", correct: true },
      { id: "c", text: "★", correct: false },
      { id: "d", text: "★★★★★", correct: false }
    ],
    explanation: "Add one star each time: 1, 2, 3, 4",
    hints: ["Count the stars", "Pattern adds 1 each time"]
  },
  {
    id: "a018",
    category: "algebra",
    difficulty: "medium",
    question: "Complete the pattern: 1, 4, 9, 16, ?",
    choices: [
      { id: "a", text: "20", correct: false },
      { id: "b", text: "23", correct: false },
      { id: "c", text: "25", correct: true },
      { id: "d", text: "24", correct: false }
    ],
    explanation: "These are perfect squares: 1², 2², 3², 4², 5² = 25",
    hints: ["1×1, 2×2, 3×3, 4×4, 5×5", "Square numbers"]
  },

  // ADDITIONAL GEOMETRY QUESTIONS (8 more)
  {
    id: "g011",
    category: "geometry",
    difficulty: "easy",
    question: "How many sides does a triangle have?",
    choices: [
      { id: "a", text: "2", correct: false },
      { id: "b", text: "3", correct: true },
      { id: "c", text: "4", correct: false },
      { id: "d", text: "5", correct: false }
    ],
    explanation: "A triangle always has 3 sides.",
    hints: ["'Tri' means three", "Count the corners"]
  },
  {
    id: "g012",
    category: "geometry",
    difficulty: "medium",
    question: "What is the area of a square with side 5 cm?",
    choices: [
      { id: "a", text: "10 sq cm", correct: false },
      { id: "b", text: "20 sq cm", correct: false },
      { id: "c", text: "25 sq cm", correct: true },
      { id: "d", text: "15 sq cm", correct: false }
    ],
    explanation: "Area of square = side × side = 5 × 5 = 25 square cm",
    hints: ["Side times side", "5 × 5 = ?"]
  },
  {
    id: "g013",
    category: "geometry",
    difficulty: "hard",
    question: "A rectangle is 10 inches long and 3 inches wide. What is its area?",
    choices: [
      { id: "a", text: "13 square inches", correct: false },
      { id: "b", text: "26 square inches", correct: false },
      { id: "c", text: "30 square inches", correct: true },
      { id: "d", text: "33 square inches", correct: false }
    ],
    explanation: "Area = length × width = 10 × 3 = 30 square inches",
    hints: ["Multiply length times width", "10 × 3 = ?"]
  },
  {
    id: "g014",
    category: "geometry",
    difficulty: "easy",
    question: "Which shape has 4 sides of equal length?",
    choices: [
      { id: "a", text: "Rectangle", correct: false },
      { id: "b", text: "Square", correct: true },
      { id: "c", text: "Triangle", correct: false },
      { id: "d", text: "Circle", correct: false }
    ],
    explanation: "A square has 4 equal sides and 4 right angles.",
    hints: ["All sides must be equal", "It has 4 right angles too"]
  },
  {
    id: "g015",
    category: "geometry",
    difficulty: "medium",
    question: "What is the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm?",
    choices: [
      { id: "a", text: "10 cm", correct: false },
      { id: "b", text: "11 cm", correct: false },
      { id: "c", text: "12 cm", correct: true },
      { id: "d", text: "15 cm", correct: false }
    ],
    explanation: "Perimeter = 3 + 4 + 5 = 12 cm",
    hints: ["Add all three sides", "3 + 4 + 5 = ?"]
  },
  {
    id: "g016",
    category: "geometry",
    difficulty: "hard",
    question: "How many lines of symmetry does a square have?",
    choices: [
      { id: "a", text: "2", correct: false },
      { id: "b", text: "3", correct: false },
      { id: "c", text: "4", correct: true },
      { id: "d", text: "8", correct: false }
    ],
    explanation: "A square has 4 lines of symmetry: 2 diagonals and 2 through midpoints",
    hints: ["Vertical, horizontal, and both diagonals", "More than 2"]
  },
  {
    id: "g017",
    category: "geometry",
    difficulty: "easy",
    question: "An obtuse angle is:",
    choices: [
      { id: "a", text: "Less than 90°", correct: false },
      { id: "b", text: "Exactly 90°", correct: false },
      { id: "c", text: "Greater than 90°", correct: true },
      { id: "d", text: "Exactly 180°", correct: false }
    ],
    explanation: "An obtuse angle is between 90° and 180°.",
    hints: ["More than a right angle", "Wide opening"]
  },
  {
    id: "g018",
    category: "geometry",
    difficulty: "medium",
    question: "What is the perimeter of a regular pentagon with side length 6 cm?",
    choices: [
      { id: "a", text: "24 cm", correct: false },
      { id: "b", text: "30 cm", correct: true },
      { id: "c", text: "36 cm", correct: false },
      { id: "d", text: "25 cm", correct: false }
    ],
    explanation: "Pentagon has 5 sides: 5 × 6 = 30 cm",
    hints: ["Pentagon has 5 sides", "6 + 6 + 6 + 6 + 6 = ?"]
  },

  // ADDITIONAL MEASUREMENT QUESTIONS (8 more)
  {
    id: "m011",
    category: "measurement",
    difficulty: "easy",
    question: "How many cups are in 1 pint?",
    choices: [
      { id: "a", text: "1", correct: false },
      { id: "b", text: "2", correct: true },
      { id: "c", text: "4", correct: false },
      { id: "d", text: "8", correct: false }
    ],
    explanation: "1 pint = 2 cups",
    hints: ["Remember: 2 cups make a pint", "Pint is bigger than a cup"]
  },
  {
    id: "m012",
    category: "measurement",
    difficulty: "medium",
    question: "Convert 5 feet to inches.",
    choices: [
      { id: "a", text: "50 inches", correct: false },
      { id: "b", text: "60 inches", correct: true },
      { id: "c", text: "55 inches", correct: false },
      { id: "d", text: "65 inches", correct: false }
    ],
    explanation: "5 feet × 12 inches/foot = 60 inches",
    hints: ["12 inches in each foot", "5 × 12 = ?"]
  },
  {
    id: "m013",
    category: "measurement",
    difficulty: "hard",
    question: "A recipe needs 3/4 cup of sugar. If you triple the recipe, how much sugar?",
    choices: [
      { id: "a", text: "1 1/2 cups", correct: false },
      { id: "b", text: "2 cups", correct: false },
      { id: "c", text: "2 1/4 cups", correct: true },
      { id: "d", text: "2 1/2 cups", correct: false }
    ],
    explanation: "3/4 × 3 = 9/4 = 2 1/4 cups",
    hints: ["Multiply 3/4 by 3", "3 × 3 = 9, so 9/4"]
  },
  {
    id: "m014",
    category: "measurement",
    difficulty: "easy",
    question: "Which is longer?",
    choices: [
      { id: "a", text: "1 meter", correct: true },
      { id: "b", text: "1 centimeter", correct: false },
      { id: "c", text: "They're equal", correct: false },
      { id: "d", text: "Cannot tell", correct: false }
    ],
    explanation: "1 meter = 100 centimeters, so meter is much longer",
    hints: ["100 cm = 1 m", "Meter is the bigger unit"]
  },
  {
    id: "m015",
    category: "measurement",
    difficulty: "medium",
    question: "How many seconds in 3 minutes?",
    choices: [
      { id: "a", text: "120", correct: false },
      { id: "b", text: "150", correct: false },
      { id: "c", text: "180", correct: true },
      { id: "d", text: "200", correct: false }
    ],
    explanation: "3 minutes × 60 seconds/minute = 180 seconds",
    hints: ["60 seconds in each minute", "3 × 60 = ?"]
  },
  {
    id: "m016",
    category: "measurement",
    difficulty: "hard",
    question: "A movie is 1 hour 45 minutes long. How many minutes total?",
    choices: [
      { id: "a", text: "95 minutes", correct: false },
      { id: "b", text: "100 minutes", correct: false },
      { id: "c", text: "105 minutes", correct: true },
      { id: "d", text: "145 minutes", correct: false }
    ],
    explanation: "1 hour = 60 minutes, plus 45 minutes = 105 minutes total",
    hints: ["Convert hours to minutes first", "60 + 45 = ?"]
  },
  {
    id: "m017",
    category: "measurement",
    difficulty: "easy",
    question: "If you have $5.00 and spend $2.75, how much is left?",
    choices: [
      { id: "a", text: "$2.15", correct: false },
      { id: "b", text: "$2.25", correct: true },
      { id: "c", text: "$2.35", correct: false },
      { id: "d", text: "$3.25", correct: false }
    ],
    explanation: "$5.00 - $2.75 = $2.25",
    hints: ["Subtract the prices", "$5.00 - $2.75"]
  },
  {
    id: "m018",
    category: "measurement",
    difficulty: "medium",
    question: "Which is the best estimate for the weight of a textbook?",
    choices: [
      { id: "a", text: "2 ounces", correct: false },
      { id: "b", text: "2 pounds", correct: true },
      { id: "c", text: "20 pounds", correct: false },
      { id: "d", text: "200 pounds", correct: false }
    ],
    explanation: "A textbook weighs about 2 pounds - not too light, not too heavy",
    hints: ["Think about holding a book", "Between 1 and 5 pounds"]
  },

  // ADDITIONAL DATA ANALYSIS QUESTIONS (6 more)
  {
    id: "d009",
    category: "data",
    difficulty: "easy",
    question: "A tally chart shows two complete groups of 5 tallies (with diagonal lines) and 2 single tallies. How many tallies total?",
    choices: [
      { id: "a", text: "11", correct: false },
      { id: "b", text: "12", correct: true },
      { id: "c", text: "13", correct: false },
      { id: "d", text: "10", correct: false }
    ],
    explanation: "Two complete groups of 5 = 10, plus 2 more = 12 tallies",
    hints: ["Each complete group = 5", "Count: 5 + 5 + 2"]
  },
  {
    id: "d010",
    category: "data",
    difficulty: "medium",
    question: "What is the range of these numbers? 12, 15, 8, 20, 11",
    choices: [
      { id: "a", text: "8", correct: false },
      { id: "b", text: "12", correct: true },
      { id: "c", text: "13", correct: false },
      { id: "d", text: "20", correct: false }
    ],
    explanation: "Range = highest - lowest = 20 - 8 = 12",
    hints: ["Find biggest and smallest", "20 - 8 = ?"]
  },
  {
    id: "d011",
    category: "data",
    difficulty: "hard",
    question: "Find the median: 5, 8, 12, 15, 20",
    choices: [
      { id: "a", text: "8", correct: false },
      { id: "b", text: "10", correct: false },
      { id: "c", text: "12", correct: true },
      { id: "d", text: "15", correct: false }
    ],
    explanation: "The middle number in order is 12",
    hints: ["Find the middle value", "5, 8, [12], 15, 20"]
  },
  {
    id: "d012",
    category: "data",
    difficulty: "easy",
    question: "A bar graph shows Jake scored 8, Maria scored 6, Sam scored 10. Who scored least?",
    choices: [
      { id: "a", text: "Jake", correct: false },
      { id: "b", text: "Maria", correct: true },
      { id: "c", text: "Sam", correct: false },
      { id: "d", text: "All equal", correct: false }
    ],
    explanation: "Maria's 6 is less than Jake's 8 and Sam's 10",
    hints: ["Which number is smallest?", "6 < 8 < 10"]
  },
  {
    id: "d013",
    category: "data",
    difficulty: "medium",
    question: "What is the mean of 10, 15, and 20?",
    choices: [
      { id: "a", text: "12", correct: false },
      { id: "b", text: "15", correct: true },
      { id: "c", text: "18", correct: false },
      { id: "d", text: "45", correct: false }
    ],
    explanation: "(10 + 15 + 20) ÷ 3 = 45 ÷ 3 = 15",
    hints: ["Add all numbers, divide by how many", "45 ÷ 3"]
  },
  {
    id: "d014",
    category: "data",
    difficulty: "hard",
    question: "A line graph shows temperatures: Mon 70°, Tue 68°, Wed 72°, Thu 74°. What's the trend?",
    choices: [
      { id: "a", text: "Decreasing", correct: false },
      { id: "b", text: "Increasing overall", correct: true },
      { id: "c", text: "Staying the same", correct: false },
      { id: "d", text: "No pattern", correct: false }
    ],
    explanation: "Overall trend goes from 70° to 74°, increasing",
    hints: ["Compare first day to last day", "70° to 74° is going up"]
  },

  // AUTHENTIC STAAR TEST QUESTIONS (from 2023 STAAR Redesign Practice Test)
  {
    id: "staar001",
    category: "numbers",
    difficulty: "medium",
    question: "A recipe for one batch of cookies uses 1.25 cups of butter. How many cups of butter are needed to make 6 batches of cookies?",
    choices: [
      { id: "a", text: "7.5 cups", correct: true },
      { id: "b", text: "7.3 cups", correct: false },
      { id: "c", text: "6.25 cups", correct: false },
      { id: "d", text: "6.3 cups", correct: false }
    ],
    explanation: "Multiply the amount needed for one batch by the number of batches: 1.25 × 6 = 7.5 cups",
    hints: ["Multiply 1.25 by 6", "Think of 1.25 as 1 and 1/4"]
  },
  {
    id: "staar002",
    category: "numbers",
    difficulty: "medium",
    question: "Which numbers have a value less than 1.069?",
    multiSelect: true,
    correctCount: "TWO",
    choices: [
      { id: "a", text: "1.52", correct: false },
      { id: "b", text: "1.003", correct: true },
      { id: "c", text: "1.052", correct: true },
      { id: "d", text: "1.96", correct: false },
      { id: "e", text: "1.7", correct: false }
    ],
    explanation: "Compare each number to 1.069: 1.003 < 1.069 and 1.052 < 1.069. All other numbers (1.52, 1.96, 1.7) are greater than 1.069.",
    hints: ["Compare the tenths place first", "Then compare hundredths if needed"]
  },
  {
    id: "staar003",
    category: "measurement",
    difficulty: "medium",
    question: "Gabriella walked 6.85 kilometers on Friday. On Saturday she walked 2 3/10 kilometers. How much farther did Gabriella walk on Friday than on Saturday?",
    choices: [
      { id: "a", text: "9.15 kilometers", correct: false },
      { id: "b", text: "4.82 kilometers", correct: false },
      { id: "c", text: "4.55 kilometers", correct: true },
      { id: "d", text: "3.82 kilometers", correct: false }
    ],
    explanation: "First convert 2 3/10 to 2.3. Then subtract: 6.85 - 2.3 = 4.55 kilometers",
    hints: ["Convert the mixed number to a decimal first", "3/10 = 0.3"]
  },
  {
    id: "staar004",
    category: "data",
    image: "/images/page-05.png",
    difficulty: "medium",
    questionType: "dropdown",
    imageDescription: "Cecelia collected data on the amount of time, in minutes, she spent doing homework each day for two weeks. The complete data set is: 10, 10, 10, 12, 14, 14, 14, 16, 16, 18, 18, 18, 18, 20, 20. Cecelia began making a dot plot to display her data, but the dot plot shown is incomplete - it has only 13 dots plotted.",
    question: "Cecelia still needs to add one dot to [DROPDOWN1] minutes and one dot to [DROPDOWN2] minutes.",
    dropdowns: [
      {
        id: "dropdown1",
        options: [
          { value: "10", text: "10" },
          { value: "12", text: "12" },
          { value: "14", text: "14" },
          { value: "16", text: "16" },
          { value: "18", text: "18" },
          { value: "20", text: "20" }
        ],
        correctAnswer: "10"
      },
      {
        id: "dropdown2",
        options: [
          { value: "10", text: "10" },
          { value: "12", text: "12" },
          { value: "14", text: "14" },
          { value: "16", text: "16" },
          { value: "18", text: "18" },
          { value: "20", text: "20" }
        ],
        correctAnswer: "18"
      }
    ],
    explanation: "Looking at the complete data set, 10 appears 3 times and 18 appears 4 times. If the dot plot only shows 13 dots instead of the complete 15, then we're missing one dot at 10 minutes and one dot at 18 minutes. When we compare the complete frequency distribution (10:3, 12:1, 14:3, 16:2, 18:4, 20:2) to what's shown in the incomplete dot plot (10:2, 12:1, 14:3, 16:2, 18:3, 20:2), we can see that 10 needs one more dot and 18 needs one more dot.",
    hints: ["Count how many times each value appears in the complete data set", "Compare to what's shown in the dot plot"]
  },
  {
    id: "staar005",
    category: "algebra",
    image: "/images/page-06.png",
    difficulty: "medium",
    imageDescription: "A table showing the relationship between x and y values:\nx: 4, 8, 16, 32\ny: 14, 18, 26, 42",
    question: "Which statement about the relationship between x and y is true?",
    choices: [
      {
        id: "a",
        text: "It is a multiplicative pattern because each x-value is a multiple of 4.",
        correct: false
      },
      {
        id: "b",
        text: "It is a multiplicative pattern because each y-value is a multiple of 2.",
        correct: false
      },
      {
        id: "c",
        text: "It is an additive pattern because each y-value can be determined by finding the sum of the previous x- and y-values.",
        correct: false
      },
      {
        id: "d",
        text: "It is an additive pattern because each y-value is determined by adding 10 to the corresponding x-value.",
        correct: true
      }
    ],
    explanation: "Looking at the table: 4 + 10 = 14, 8 + 10 = 18, 16 + 10 = 26, 32 + 10 = 42. Each y-value equals the x-value plus 10, making this an additive pattern with the rule y = x + 10.",
    hints: ["Check if y = x + 10 works for all rows", "Compare each x and y pair"]
  },
  {
    id: "staar006",
    category: "geometry",
    image: "/images/page-07.png",
    difficulty: "medium",
    multiSelect: true,
    correctCount: "TWO",
    imageDescription: "Five rectangular prisms are shown with labeled dimensions:\n1. Length: 24 in, Width: 8 in, Height: 2 in\n2. Length: 4 in, Width: 8 in, Height: 2 in\n3. Length: 4 in, Width: 4 in, Height: 4 in\n4. Length: 42 in, Width: 20 in, Height: 2 in\n5. Length: 32 in, Width: 22 in, Height: 10 in",
    question: "Which rectangular prisms have a volume of 64 cubic inches?",
    choices: [
      { id: "a", text: "1", correct: false },
      { id: "b", text: "2", correct: true },
      { id: "c", text: "3", correct: true },
      { id: "d", text: "4", correct: false },
      { id: "e", text: "5", correct: false }
    ],
    explanation: "Calculate the volume (V = length × width × height) for each prism:\n1. 24 × 8 × 2 = 384 cubic inches\n2. 4 × 8 × 2 = 64 cubic inches ✓\n3. 4 × 4 × 4 = 64 cubic inches ✓\n4. 42 × 20 × 2 = 1,680 cubic inches\n5. 32 × 22 × 10 = 7,040 cubic inches\nPrisms 2 and 3 both have a volume of 64 cubic inches.",
    hints: ["Use the formula V = length × width × height", "Calculate volume for each prism"]
  },
  {
    id: "staar007",
    category: "numbers",
    difficulty: "medium",
    question: "Look at the number 3.55. In this number, what is the relationship between the values of the two 5s?",
    choices: [
      { id: "a", text: "The 5 in the tenths place is 10 times the value of the 5 in the hundredths place", correct: true },
      { id: "b", text: "The 5 in the hundredths place is 10 times the value of the 5 in the tenths place", correct: false },
      { id: "c", text: "Both 5s have the same value", correct: false },
      { id: "d", text: "The 5 in the tenths place is 100 times the value of the 5 in the hundredths place", correct: false }
    ],
    explanation: "In 3.55, the first 5 is in the tenths place (0.5) and the second 5 is in the hundredths place (0.05). Since 0.5 = 0.05 × 10, the 5 in the tenths place is 10 times the value of the 5 in the hundredths place.",
    hints: ["Identify which place each 5 is in", "Tenths place is 10 times hundredths place"]
  },
  {
    id: "staar008",
    category: "data",
    image: "/images/page-09.png",
    difficulty: "easy",
    imageDescription: "A bar graph titled 'Votes Received' shows three students running for class president:\n- Casey: 15 votes\n- Blake: 10 votes\n- Shanita: 10 votes\nThe y-axis shows 'Number of Votes' from 0 to 20, and the x-axis shows 'Student' names.",
    question: "What fraction of the total votes received were for Casey?",
    choices: [
      { id: "a", text: "3/4", correct: false },
      { id: "b", text: "3/7", correct: true },
      { id: "c", text: "1/15", correct: false },
      { id: "d", text: "1/3", correct: false }
    ],
    explanation: "First find the total votes: Casey (15) + Blake (10) + Shanita (10) = 35 total votes. Casey received 15 votes out of 35 total. The fraction is 15/35, which simplifies to 3/7 (divide both numerator and denominator by 5).",
    hints: ["Find the total number of votes first", "Simplify the fraction 15/35"]
  },
  {
    id: "staar009",
    category: "geometry",
    difficulty: "medium",
    question: "A rectangular prism has a length of 8 centimeters, a width of 4 centimeters, and a height of 5 centimeters. What is the volume of the rectangular prism?",
    choices: [
      { id: "a", text: "17 cubic centimeters", correct: false },
      { id: "b", text: "68 cubic centimeters", correct: false },
      { id: "c", text: "160 cubic centimeters", correct: true },
      { id: "d", text: "200 cubic centimeters", correct: false }
    ],
    explanation: "Volume = length × width × height = 8 × 4 × 5 = 160 cubic centimeters",
    hints: ["Multiply all three dimensions", "V = l × w × h"]
  },
  {
    id: "staar010",
    category: "geometry",
    difficulty: "easy",
    question: "A rectangle has an area of 48 square inches and a width of 6 inches. What is the perimeter of the rectangle in inches?",
    choices: [
      { id: "a", text: "8 inches", correct: false },
      { id: "b", text: "14 inches", correct: false },
      { id: "c", text: "28 inches", correct: true },
      { id: "d", text: "54 inches", correct: false }
    ],
    explanation: "First find length: Area = length × width, so 48 = length × 6, therefore length = 8 inches. Perimeter = 2(length + width) = 2(8 + 6) = 2(14) = 28 inches",
    hints: ["First find the length using the area", "Perimeter = 2(l + w)"]
  },
  {
    id: "staar011",
    category: "algebra",
    difficulty: "medium",
    question: "The table shows a pattern. Input: 1, 2, 3, 4, 5 Output: 6, 11, 16, 21, 26. Which rule describes the pattern?",
    choices: [
      { id: "a", text: "Multiply the input by 5, then add 1", correct: true },
      { id: "b", text: "Multiply the input by 6", correct: false },
      { id: "c", text: "Add 5 to the input", correct: false },
      { id: "d", text: "Multiply the input by 4, then add 2", correct: false }
    ],
    explanation: "Test the rule: 1 × 5 + 1 = 6, 2 × 5 + 1 = 11, 3 × 5 + 1 = 16. The rule is multiply by 5, then add 1.",
    hints: ["Look at the relationship between input and output", "What operation turns 1 into 6?"]
  },
  {
    id: "staar012",
    category: "geometry",
    image: "/images/page-13.png",
    difficulty: "medium",
    imageDescription: "A rectangular prism with dimensions labeled:\n- Length: 8 cm\n- Width: 5 cm\n- Height: 9 cm\nThe prism is shown in 3D with dashed lines indicating the hidden edges.",
    question: "The prism will be completely filled with unit cubes that each have a volume of 1 cubic centimeter. How many of these cubes are needed to fill the prism?",
    choices: [
      { id: "a", text: "360", correct: true },
      { id: "b", text: "22", correct: false },
      { id: "c", text: "117", correct: false },
      { id: "d", text: "44", correct: false }
    ],
    explanation: "To find how many unit cubes (1 cubic cm each) fit in the prism, calculate the volume: Volume = length × width × height = 8 × 5 × 9 = 360 cubic centimeters. Therefore, 360 unit cubes are needed.",
    hints: ["Calculate the volume: V = length × width × height", "Each unit cube has volume 1 cubic cm"]
  },
  {
    id: "staar013",
    category: "geometry",
    difficulty: "medium",
    question: "One side of a square window has a length of 36 inches. What is the area of the window in square feet?",
    choices: [
      { id: "a", text: "9 square feet", correct: true },
      { id: "b", text: "12 square feet", correct: false },
      { id: "c", text: "108 square feet", correct: false },
      { id: "d", text: "144 square feet", correct: false }
    ],
    explanation: "First convert 36 inches to feet: 36 ÷ 12 = 3 feet. Area of square = side × side = 3 × 3 = 9 square feet",
    hints: ["Convert inches to feet first (12 inches = 1 foot)", "Area of square = side²"]
  },
  {
    id: "staar014",
    category: "fractions",
    difficulty: "easy",
    question: "Jessica made 12 out of 15 free throws at basketball practice. What fraction of the free throws did Jessica make?",
    choices: [
      { id: "a", text: "3/5", correct: false },
      { id: "b", text: "4/5", correct: true },
      { id: "c", text: "5/4", correct: false },
      { id: "d", text: "12/15", correct: false }
    ],
    explanation: "Jessica made 12/15 free throws. Simplify by dividing both by 3: 12 ÷ 3 = 4, 15 ÷ 3 = 5, so 4/5",
    hints: ["Write as 12/15 first", "Simplify by finding the GCF"]
  },
  {
    id: "staar015",
    category: "algebra",
    image: "/images/page-16.png",
    difficulty: "medium",
    multiSelect: true,
    correctCount: "TWO",
    imageDescription: "A coordinate grid showing three plotted points for the equation y = x + 3:\n- Point at (1, 4)\n- Point at (3, 6)\n- Point at (5, 8)\nThe grid has x-axis from 0 to 8 and y-axis from 0 to 8.",
    question: "Which ordered pairs represent other points on the graph for this equation?",
    choices: [
      { id: "a", text: "(4, 1)", correct: false },
      { id: "b", text: "(0, 3)", correct: true },
      { id: "c", text: "(2, 6)", correct: false },
      { id: "d", text: "(5, 2)", correct: false },
      { id: "e", text: "(4, 7)", correct: true }
    ],
    explanation: "For a point to be on the line y = x + 3, the y-coordinate must equal the x-coordinate plus 3.\n• (0, 3): 3 = 0 + 3 ✓\n• (4, 7): 7 = 4 + 3 ✓\nThe other choices don't satisfy the equation:\n• (4, 1): 1 ≠ 4 + 3 = 7\n• (2, 6): 6 ≠ 2 + 3 = 5\n• (5, 2): 2 ≠ 5 + 3 = 8",
    hints: ["Test each ordered pair in the equation y = x + 3", "The y-value should equal x + 3"]
  },
  {
    id: "staar016",
    category: "numbers",
    difficulty: "medium",
    question: "Marcus bought 4 packages of treats for his dog. Each package weighs 6.48 ounces. What is the total weight of all 4 packages?",
    choices: [
      { id: "a", text: "10.48 ounces", correct: false },
      { id: "b", text: "24.32 ounces", correct: false },
      { id: "c", text: "25.92 ounces", correct: true },
      { id: "d", text: "26.12 ounces", correct: false }
    ],
    explanation: "Multiply the weight of one package by 4: 6.48 × 4 = 25.92 ounces",
    hints: ["Multiply 6.48 by 4", "Be careful with decimal placement"]
  },
  {
    id: "staar017",
    category: "fractions",
    difficulty: "medium",
    question: "Sam filled 3 3/4 pages in his stamp album. Each page holds 8 stamps. How many stamps did Sam place in his album?",
    choices: [
      { id: "a", text: "24 stamps", correct: false },
      { id: "b", text: "30 stamps", correct: true },
      { id: "c", text: "32 stamps", correct: false },
      { id: "d", text: "35 stamps", correct: false }
    ],
    explanation: "Convert 3 3/4 to an improper fraction: 15/4. Then multiply: 15/4 × 8 = 120/4 = 30 stamps",
    hints: ["Convert the mixed number to an improper fraction", "Then multiply by 8"]
  },
  {
    id: "staar018",
    category: "algebra",
    difficulty: "medium",
    question: "The equation y = x + 6 represents the relationship between x and y. When x = 10, what is the value of y?",
    choices: [
      { id: "a", text: "4", correct: false },
      { id: "b", text: "13", correct: false },
      { id: "c", text: "16", correct: true },
      { id: "d", text: "18", correct: false }
    ],
    explanation: "Substitute x = 10 into the equation: y = 10 + 6 = 16",
    hints: ["Substitute x = 10 into y = x + 6", "Add 10 + 6"]
  },
  {
    id: "staar018b",
    category: "algebra",
    difficulty: "medium",
    question: "The equation y = x + 6 represents the relationship between x and y. When y = 19, what is the value of x?",
    choices: [
      { id: "a", text: "4", correct: false },
      { id: "b", text: "13", correct: true },
      { id: "c", text: "16", correct: false },
      { id: "d", text: "25", correct: false }
    ],
    explanation: "Substitute y = 19 into the equation: 19 = x + 6. Solve for x: x = 19 - 6 = 13",
    hints: ["Substitute y = 19 into y = x + 6", "Solve: 19 = x + 6, so x = 19 - 6"]
  },
  {
    id: "staar018c",
    category: "algebra",
    difficulty: "medium",
    question: "The equation y = x + 6 represents the relationship between x and y. When x = 24, what is the value of y?",
    choices: [
      { id: "a", text: "18", correct: false },
      { id: "b", text: "25", correct: false },
      { id: "c", text: "30", correct: true },
      { id: "d", text: "16", correct: false }
    ],
    explanation: "Substitute x = 24 into the equation: y = 24 + 6 = 30",
    hints: ["Substitute x = 24 into y = x + 6", "Add 24 + 6"]
  },
  {
    id: "staar019",
    category: "numbers",
    difficulty: "medium",
    question: "A group of students compared their marble collections. The table shows the number of marbles each student has. If they combined all their marbles equally, how many marbles would each of the 4 students have? Carlos: 38, DeShawn: 47, Emma: 61, Fiona: 30",
    choices: [
      { id: "a", text: "44 marbles", correct: true },
      { id: "b", text: "46 marbles", correct: false },
      { id: "c", text: "54 marbles", correct: false },
      { id: "d", text: "176 marbles", correct: false }
    ],
    explanation: "First add all marbles: 38 + 47 + 61 + 30 = 176. Then divide by 4 students: 176 ÷ 4 = 44 marbles each",
    hints: ["First find the total number of marbles", "Then divide by 4"]
  },
  {
    id: "staar020",
    category: "measurement",
    difficulty: "easy",
    question: "Jake's science class is 55 minutes long. The class starts at 1:40 p.m. At what time does Jake's science class end?",
    choices: [
      { id: "a", text: "2:25 p.m.", correct: false },
      { id: "b", text: "2:35 p.m.", correct: true },
      { id: "c", text: "2:45 p.m.", correct: false },
      { id: "d", text: "2:55 p.m.", correct: false }
    ],
    explanation: "From 1:40, add 20 minutes to get to 2:00, then add the remaining 35 minutes: 2:00 + 35 minutes = 2:35 p.m.",
    hints: ["Break it into chunks: 1:40 + 20 min = 2:00", "Then add the remaining 35 minutes"]
  },
  {
    id: "staar021",
    category: "algebra",
    difficulty: "medium",
    question: "Tom has 36 toy cars. This is 4 times as many toy cars as Sam has. How many toy cars does Sam have?",
    choices: [
      { id: "a", text: "9 toy cars", correct: true },
      { id: "b", text: "32 toy cars", correct: false },
      { id: "c", text: "40 toy cars", correct: false },
      { id: "d", text: "144 toy cars", correct: false }
    ],
    explanation: "If Tom has 4 times as many as Sam, divide Tom's amount by 4: 36 ÷ 4 = 9 toy cars",
    hints: ["Tom has 4 times Sam's amount", "Divide 36 by 4"]
  },
  {
    id: "staar022",
    category: "fractions",
    image: "/images/page-23.png",
    difficulty: "medium",
    imageDescription: "A hundredths grid (10×10) with 32 squares shaded, representing 0.32. The shaded area is divided into 4 equal groups of 8 squares each. A key shows that a fully shaded grid = 1 whole.",
    question: "The model shown represents a division equation. Which equation could be represented by the model?",
    choices: [
      { id: "a", text: "32 ÷ 4 = 8", correct: false },
      { id: "b", text: "0.32 ÷ 4 = 0.08", correct: true },
      { id: "c", text: "0.8 ÷ 4 = 0.2", correct: false },
      { id: "d", text: "8 ÷ 4 = 2", correct: false }
    ],
    explanation: "The shaded area represents 32 hundredths (0.32). The model shows this divided into 4 equal groups, with each group containing 8 hundredths (0.08). Therefore: 0.32 ÷ 4 = 0.08",
    hints: ["Count the shaded squares: 32 out of 100", "32 hundredths = 0.32", "Divided into 4 groups of 8 = 0.08"]
  },
  {
    id: "staar024",
    category: "measurement",
    difficulty: "medium",
    question: "A container holds 8.2 liters of water. Morgan pours out 340 milliliters of water. How many milliliters of water are left in the container?",
    choices: [
      { id: "a", text: "4.8 milliliters", correct: false },
      { id: "b", text: "488 milliliters", correct: false },
      { id: "c", text: "7,860 milliliters", correct: true },
      { id: "d", text: "8,540 milliliters", correct: false }
    ],
    explanation: "First convert 8.2 liters to milliliters: 8.2 × 1,000 = 8,200 mL. Then subtract: 8,200 - 340 = 7,860 mL",
    hints: ["Convert liters to milliliters first (1 L = 1,000 mL)", "Then subtract"]
  },
  {
    id: "staar025",
    category: "fractions",
    difficulty: "medium",
    question: "Andrea had 3/4 of a gallon of paint. She used 1/2 of a gallon to paint her bedroom. How much paint does Andrea have left?",
    choices: [
      { id: "a", text: "1/4 gallon", correct: true },
      { id: "b", text: "1/2 gallon", correct: false },
      { id: "c", text: "2/4 gallon", correct: false },
      { id: "d", text: "2/6 gallon", correct: false }
    ],
    explanation: "Subtract the fractions: 3/4 - 1/2. Convert 1/2 to 2/4, then: 3/4 - 2/4 = 1/4 gallon",
    hints: ["Find a common denominator", "1/2 = 2/4"]
  },
  {
    id: "staar026",
    category: "geometry",
    difficulty: "easy",
    question: "Which figure appears to have exactly 2 lines of symmetry?",
    choices: [
      { id: "a", text: "Square", correct: false },
      { id: "b", text: "Rectangle (not square)", correct: true },
      { id: "c", text: "Equilateral triangle", correct: false },
      { id: "d", text: "Circle", correct: false }
    ],
    explanation: "A rectangle (that is not a square) has exactly 2 lines of symmetry - one vertical and one horizontal through the center. A square has 4 lines of symmetry.",
    hints: ["Draw lines through the middle of each shape", "Count how many ways you can fold it in half"]
  },
  {
    id: "staar027",
    category: "data",
    difficulty: "medium",
    question: "The stem-and-leaf plot shows the number of points players scored in a basketball game. Stem: 1 Leaves: 2, 4, 8; Stem: 2 Leaves: 1, 3, 6. What is the range of the data?",
    choices: [
      { id: "a", text: "12 points", correct: false },
      { id: "b", text: "14 points", correct: true },
      { id: "c", text: "15 points", correct: false },
      { id: "d", text: "26 points", correct: false }
    ],
    explanation: "The data values are: 12, 14, 18, 21, 23, 26. Range = highest - lowest = 26 - 12 = 14 points",
    hints: ["List all the data values", "Range = maximum - minimum"]
  },
  {
    id: "staar029",
    category: "numbers",
    difficulty: "medium",
    question: "Which number is 100 times as great as 4.18?",
    choices: [
      { id: "a", text: "0.0418", correct: false },
      { id: "b", text: "41.8", correct: false },
      { id: "c", text: "418", correct: true },
      { id: "d", text: "4,180", correct: false }
    ],
    explanation: "To multiply by 100, move the decimal point 2 places to the right: 4.18 × 100 = 418",
    hints: ["Multiply by 100", "Move the decimal point 2 places right"]
  },
  {
    id: "staar030",
    category: "data",
    image: "/images/page-29.png",
    difficulty: "medium",
    imageDescription: "Stem-and-Leaf Plot: Books Checked Out on Saturday\n\nStem | Leaf\n  1  | 0 5 6\n  2  | 1 4 4\n  3  | 2 5\n\nKey: 2|1 means 21 books\n\nData values represented:\n- 10, 15, 16 (from stem 1)\n- 21, 24, 24 (from stem 2)\n- 32, 35 (from stem 3)",
    question: "This stem-and-leaf plot shows the number of books that were checked out of a library each hour on Saturday. What is the total number of books that were checked out on Saturday?",
    choices: [
      { id: "a", text: "153", correct: false },
      { id: "b", text: "167", correct: false },
      { id: "c", text: "177", correct: true },
      { id: "d", text: "143", correct: false }
    ],
    explanation: "Read each value from the stem-and-leaf plot:\n- Stem 1: 10, 15, 16\n- Stem 2: 21, 24, 24\n- Stem 3: 32, 35\nAdd all values: 10 + 15 + 16 + 21 + 24 + 24 + 32 + 35 = 177 books",
    hints: ["Convert each stem|leaf combination to a number", "Add all 8 values together"]
  },
  {
    id: "staar031",
    category: "fractions",
    difficulty: "medium",
    question: "A baker used 2/5 cup of milk, 3/4 cup of water, and 1/2 cup of oil in a recipe. What is the total amount of liquid the baker used in the recipe?",
    choices: [
      { id: "a", text: "1 13/20 cups", correct: true },
      { id: "b", text: "1 1/2 cups", correct: false },
      { id: "c", text: "6/11 cups", correct: false },
      { id: "d", text: "1 3/5 cups", correct: false }
    ],
    explanation: "Convert to common denominator of 20: 2/5 = 8/20, 3/4 = 15/20, 1/2 = 10/20. Add: 8/20 + 15/20 + 10/20 = 33/20 = 1 13/20 cups",
    hints: ["Find a common denominator for all three fractions", "20 works for 5, 4, and 2"]
  },
  {
    id: "staar033",
    category: "numbers",
    difficulty: "medium",
    question: "A grid has 100 squares. If 0.34 of the grid is shaded, how many squares are shaded?",
    choices: [
      { id: "a", text: "3 squares", correct: false },
      { id: "b", text: "4 squares", correct: false },
      { id: "c", text: "34 squares", correct: true },
      { id: "d", text: "66 squares", correct: false }
    ],
    explanation: "0.34 means 34 hundredths. Since the grid has 100 squares, 0.34 of 100 = 34 squares",
    hints: ["0.34 = 34/100", "Multiply 0.34 × 100"]
  },
  {
    id: "staar034",
    category: "geometry",
    image: "/images/page-30.png",
    difficulty: "easy",
    imageDescription: "A coordinate grid is shown with x-axis from 0 to 9 and y-axis from 0 to 9. The grid has horizontal and vertical lines forming squares. The axes are labeled with 'x' on the horizontal axis and 'y' on the vertical axis.",
    question: "A coordinate grid is shown. Which term best describes the point where the horizontal axis intersects the vertical axis?",
    choices: [
      { id: "a", text: "Quadrant", correct: false },
      { id: "b", text: "x-coordinate", correct: false },
      { id: "c", text: "y-coordinate", correct: false },
      { id: "d", text: "Origin", correct: true }
    ],
    explanation: "The origin is the point (0, 0) where the x-axis (horizontal) and y-axis (vertical) intersect. This is the starting point of the coordinate system.",
    hints: ["Think about the point (0, 0)", "This point has a special name in mathematics"]
  },
  {
    id: "staar035",
    category: "algebra",
    difficulty: "medium",
    question: "Ben saved $12 in January. Each month after that, he saved $4 more than the previous month. How much did Ben save in April?",
    choices: [
      { id: "a", text: "$20", correct: false },
      { id: "b", text: "$24", correct: true },
      { id: "c", text: "$28", correct: false },
      { id: "d", text: "$48", correct: false }
    ],
    explanation: "January: $12, February: $12 + $4 = $16, March: $16 + $4 = $20, April: $20 + $4 = $24",
    hints: ["Create a sequence: $12, $16, $20, ...", "Add $4 each month"]
  },
  {
    id: "staar036",
    category: "measurement",
    difficulty: "medium",
    question: "A fish tank can hold 45 gallons of water. Marco fills the tank to 4/5 of its capacity. How many gallons of water are in the tank?",
    choices: [
      { id: "a", text: "9 gallons", correct: false },
      { id: "b", text: "36 gallons", correct: true },
      { id: "c", text: "40 gallons", correct: false },
      { id: "d", text: "49 gallons", correct: false }
    ],
    explanation: "Multiply the total capacity by the fraction: 45 × 4/5 = 180/5 = 36 gallons",
    hints: ["Find 4/5 of 45", "Multiply 45 × 4, then divide by 5"]
  },
  {
    id: "staar037",
    category: "data",
    difficulty: "easy",
    question: "The following data shows test scores: 85, 92, 78, 85, 90, 85, 88. What is the mode of this data?",
    choices: [
      { id: "a", text: "78", correct: false },
      { id: "b", text: "85", correct: true },
      { id: "c", text: "88", correct: false },
      { id: "d", text: "92", correct: false }
    ],
    explanation: "The mode is the number that appears most often. 85 appears 3 times, more than any other number",
    hints: ["Mode = most frequent value", "Count how many times each number appears"]
  },
  {
    id: "staar038",
    category: "geometry",
    difficulty: "medium",
    question: "A triangle has angles measuring 45 degrees and 55 degrees. What is the measure of the third angle?",
    choices: [
      { id: "a", text: "80 degrees", correct: true },
      { id: "b", text: "90 degrees", correct: false },
      { id: "c", text: "100 degrees", correct: false },
      { id: "d", text: "180 degrees", correct: false }
    ],
    explanation: "The sum of angles in a triangle is 180 degrees. 180 - 45 - 55 = 80 degrees",
    hints: ["All angles in a triangle add up to 180°", "180 - 45 - 55 = ?"]
  },
  {
    id: "staar039",
    category: "fractions",
    difficulty: "hard",
    question: "Maria ran 3/8 of a mile on Monday and 5/6 of a mile on Tuesday. How much farther did Maria run on Tuesday than on Monday?",
    choices: [
      { id: "a", text: "2/14 mile", correct: false },
      { id: "b", text: "11/24 mile", correct: true },
      { id: "c", text: "1/2 mile", correct: false },
      { id: "d", text: "8/14 mile", correct: false }
    ],
    explanation: "Subtract: 5/6 - 3/8. Common denominator is 24: 20/24 - 9/24 = 11/24 mile",
    hints: ["Find a common denominator", "24 is divisible by both 6 and 8"]
  },
  {
    id: "staar040",
    category: "algebra",
    difficulty: "medium",
    question: "If n + 15 = 42, what is the value of n?",
    choices: [
      { id: "a", text: "27", correct: true },
      { id: "b", text: "32", correct: false },
      { id: "c", text: "57", correct: false },
      { id: "d", text: "630", correct: false }
    ],
    explanation: "Subtract 15 from both sides: n = 42 - 15 = 27",
    hints: ["What number plus 15 equals 42?", "Subtract 15 from 42"]
  },
  {
    id: "staar041",
    category: "geometry",
    difficulty: "easy",
    question: "A coordinate grid is shown. Which term best describes the point where the horizontal axis intersects the vertical axis?",
    choices: [
      { id: "a", text: "Quadrant", correct: false },
      { id: "b", text: "x-coordinate", correct: false },
      { id: "c", text: "y-coordinate", correct: false },
      { id: "d", text: "Origin", correct: true }
    ],
    explanation: "The origin is the point (0, 0) where the x-axis (horizontal) and y-axis (vertical) intersect.",
    hints: ["Think about the point (0, 0)", "This point has a special name"]
  },
  {
    id: "staar042",
    category: "data",
    difficulty: "medium",
    question: "Students recorded the number of books they read: 5, 3, 8, 3, 6, 3, 9, 4. What is the mode of this data set?",
    choices: [
      { id: "a", text: "3", correct: true },
      { id: "b", text: "5", correct: false },
      { id: "c", text: "6", correct: false },
      { id: "d", text: "8", correct: false }
    ],
    explanation: "The mode is the value that appears most frequently. The number 3 appears three times, more than any other number.",
    hints: ["Count how many times each number appears", "Which number appears most often?"]
  },
  {
    id: "staar043",
    category: "fractions",
    difficulty: "medium",
    question: "A baker used 2 1/4 cups of flour for cookies and 1 3/4 cups of flour for muffins. How many cups of flour did the baker use in all?",
    choices: [
      { id: "a", text: "3 1/2 cups", correct: false },
      { id: "b", text: "4 cups", correct: true },
      { id: "c", text: "4 1/4 cups", correct: false },
      { id: "d", text: "3 cups", correct: false }
    ],
    explanation: "Add the mixed numbers: 2 1/4 + 1 3/4 = 3 4/4 = 4 cups",
    hints: ["Add the whole numbers first: 2 + 1 = 3", "Then add the fractions: 1/4 + 3/4 = 4/4 = 1"]
  },
  {
    id: "staar032",
    category: "geometry",
    image: "/images/page-30.png",
    difficulty: "medium",
    imageDescription: "Venn diagram with two overlapping circles. Left circle labeled 'Right Triangles', right circle labeled 'Isosceles Triangles'. The intersection (overlapping area) is shaded. Four triangle diagrams are shown as answer choices:\nA: Scalene obtuse triangle (no equal sides, one obtuse angle)\nB: Right isosceles triangle (right angle marker shown, two equal sides marked)\nC: Scalene acute triangle (no equal sides, all acute angles)\nD: Isosceles acute triangle (two equal sides marked, all acute angles)",
    question: "The Venn diagram shows categories for classifying triangles. Which triangle should be placed in the shaded part of the diagram?",
    choices: [
      { id: "a", text: "Triangle A (scalene obtuse triangle)", correct: false },
      { id: "b", text: "Triangle B (right isosceles triangle)", correct: true },
      { id: "c", text: "Triangle C (scalene acute triangle)", correct: false },
      { id: "d", text: "Triangle D (isosceles acute triangle)", correct: false }
    ],
    explanation: "The shaded area represents triangles that are BOTH right triangles AND isosceles triangles. Only Triangle B is a right isosceles triangle - it has a 90-degree angle (making it a right triangle) and two equal sides (making it an isosceles triangle). Triangle A is obtuse and scalene. Triangle C is acute and scalene. Triangle D is isosceles but not a right triangle.",
    hints: ["The shaded area means the triangle must fit BOTH categories", "Look for a triangle with a right angle AND two equal sides"]
  }
];

// Export count by category for verification
export const questionStats = {
  numbers: questions.filter(q => q.category === 'numbers').length,
  fractions: questions.filter(q => q.category === 'fractions').length,
  algebra: questions.filter(q => q.category === 'algebra').length,
  geometry: questions.filter(q => q.category === 'geometry').length,
  measurement: questions.filter(q => q.category === 'measurement').length,
  data: questions.filter(q => q.category === 'data').length,
  total: questions.length
};
