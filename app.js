const subjects = [
  {
    id: "tamil",
    name: "Tamil",
    chapters: [
      "இயல் 1 - மொழி",
      "இயல் 2 - இயற்கை",
      "இயல் 3 - பண்பாடு",
      "இயல் 4 - கல்வி",
      "இயல் 5 - அறம்",
      "இயல் 6 - தொழில்",
      "இயல் 7 - நாடு",
      "இயல் 8 - மனிதநேயம்",
      "இலக்கணம்",
      "கட்டுரை / கடிதம்",
    ],
  },
  {
    id: "english",
    name: "English",
    chapters: [
      "Prose",
      "Poetry",
      "Supplementary",
      "Grammar - Tenses",
      "Grammar - Voice",
      "Grammar - Speech",
      "Vocabulary",
      "Comprehension",
      "Letter / Email",
      "Paragraph Writing",
    ],
  },
  {
    id: "maths",
    name: "Maths",
    chapters: [
      "Relations and Functions",
      "Numbers and Sequences",
      "Algebra",
      "Geometry",
      "Coordinate Geometry",
      "Trigonometry",
      "Mensuration",
      "Statistics",
      "Probability",
      "Revision Problems",
    ],
  },
  {
    id: "science",
    name: "Science",
    chapters: [
      "Laws of Motion",
      "Optics",
      "Thermal Physics",
      "Electricity",
      "Atoms and Molecules",
      "Periodic Classification",
      "Chemical Reactions",
      "Life Processes",
      "Heredity",
      "Environment",
    ],
  },
  {
    id: "social",
    name: "Social Science",
    chapters: [
      "History - Nationalism",
      "History - Freedom Movement",
      "Civics - Constitution",
      "Civics - Democracy",
      "Geography - Resources",
      "Geography - Agriculture",
      "Geography - Industries",
      "Economics - Development",
      "Economics - Money and Credit",
      "Map Work",
    ],
  },
];

const realMathsBank = [
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "One mark bank",
    "mark": 1,
    "question": "If A = {1, 2} and B = {3, 4}, how many elements are in A x B?",
    "answer": "A x B has 2 x 2 = 4 ordered pairs. Correct answer: A. 4",
    "options": [
      "4",
      "2",
      "6",
      "8"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "One mark bank",
    "mark": 1,
    "question": "If f(x) = 2x + 3, find f(4).",
    "answer": "f(4) = 2(4) + 3 = 11. Correct answer: A. 11",
    "options": [
      "11",
      "8",
      "9",
      "14"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "2 mark",
    "mark": 2,
    "question": "Let f(x) = 3x - 1. Find f(5).",
    "answer": "f(5) = 3(5) - 1 = 15 - 1 = 14.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "2 mark",
    "mark": 2,
    "question": "If f = {(1,2), (2,4), (3,6)}, write the domain and range.",
    "answer": "Domain = {1,2,3}. Range = {2,4,6}.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "3 mark",
    "mark": 3,
    "question": "If f(x) = x + 2 and g(x) = 2x, find (fog)(3).",
    "answer": "g(3)=2(3)=6. f(g(3))=f(6)=6+2=8. Therefore (fog)(3)=8.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "3 mark",
    "mark": 3,
    "question": "Check whether {(1,3),(2,3),(3,4)} is a function.",
    "answer": "Each first element 1,2,3 has only one image. Therefore it is a function. It is many-one because 1 and 2 have the same image 3.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "5 mark",
    "mark": 5,
    "question": "If f(x)=2x+1 and g(x)=x-3, find fog and gof.",
    "answer": "fog(x)=f(g(x))=f(x-3)=2(x-3)+1=2x-6+1=2x-5. gof(x)=g(f(x))=g(2x+1)=2x+1-3=2x-2.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "5 mark",
    "mark": 5,
    "question": "Let A={1,2,3}. If f:A→A is given by f={(1,2),(2,3),(3,1)}, check whether f is one-one and onto.",
    "answer": "Images are {2,3,1}. No two elements have the same image, so f is one-one. Range={1,2,3}=A, so f is onto. Hence f is bijective.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Relations and Functions",
    "lesson": "Relations and Functions",
    "type": "8 mark",
    "mark": 8,
    "question": "Explain domain, codomain, range and function using f={(1,2),(2,4),(3,6)} from A={1,2,3} to B={2,4,6,8}.",
    "answer": "Given A={1,2,3}, B={2,4,6,8}, f={(1,2),(2,4),(3,6)}. Domain is the set of first elements: {1,2,3}. Codomain is the target set B={2,4,6,8}. Range is the set of actual images: {2,4,6}. Since every element of A has exactly one image in B, f is a function. It is not onto because 8 in B has no preimage.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "One mark bank",
    "mark": 1,
    "question": "Find the 10th term of the AP 3, 7, 11, ...",
    "answer": "a=3, d=4. a10 = a+9d = 3+36=39. Correct answer: A. 39",
    "options": [
      "39",
      "40",
      "43",
      "36"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "One mark bank",
    "mark": 1,
    "question": "HCF of 24 and 36 is",
    "answer": "Factors common highest = 12. Correct answer: A. 12",
    "options": [
      "12",
      "6",
      "24",
      "36"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "2 mark",
    "mark": 2,
    "question": "Find the 15th term of the AP 5, 8, 11, ...",
    "answer": "a=5, d=3. a15 = a+14d = 5+42 = 47.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "2 mark",
    "mark": 2,
    "question": "Find the sum of first 20 natural numbers.",
    "answer": "Sum = n(n+1)/2 = 20(21)/2 = 210.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "3 mark",
    "mark": 3,
    "question": "Find the sum of first 12 terms of AP 2, 5, 8, ...",
    "answer": "a=2, d=3, n=12. S12=n/2[2a+(n-1)d] = 12/2[4+11(3)] = 6(37)=222.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "3 mark",
    "mark": 3,
    "question": "Using Euclid division algorithm, find HCF of 65 and 117.",
    "answer": "117 = 65 x 1 + 52. 65 = 52 x 1 + 13. 52 = 13 x 4 + 0. HCF = 13.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "5 mark",
    "mark": 5,
    "question": "A milkman has 175 litres cow milk and 105 litres buffalo milk. Find the largest capacity container to measure both exactly.",
    "answer": "Largest container capacity = HCF(175,105). 175=105x1+70, 105=70x1+35, 70=35x2+0. HCF=35 litres.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "5 mark",
    "mark": 5,
    "question": "Find the 12th term from the end of AP -2, -4, -6, ..., -100.",
    "answer": "First, write down the given Arithmetic Progression: -2, -4, -6, ..., -100. To find a term from the end, the easiest method is to reverse the entire AP so the last term becomes the first term. The reversed AP is: -100, -98, -96, ... . In this reversed AP, the first term (a) is -100. The common difference (d) can be found by subtracting the first term from the second: d = -98 - (-100) = 2. We need to find the 12th term, so we use the nth term formula: t_n = a + (n - 1)d. Substitute the values a = -100, d = 2, and n = 12 into the formula. t_12 = -100 + (12 - 1)2. t_12 = -100 + 11(2). t_12 = -100 + 22. Therefore, t_12 = -78. The 12th term from the end of the AP is -78.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Numbers and Sequences",
    "lesson": "Numbers and Sequences",
    "type": "8 mark",
    "mark": 8,
    "question": "Find the sum of the first 25 odd natural numbers and prove the general result used.",
    "answer": "Sum of first n odd natural numbers = n². For n=25, sum = 25² = 625. General proof: 1=1², 1+3=4=2², 1+3+5=9=3². In general, nth odd number is 2n-1. Sum = n/2[2(1)+(n-1)2] = n/2[2+2n-2] = n².",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "One mark bank",
    "mark": 1,
    "question": "The roots of x² - 5x + 6 = 0 are",
    "answer": "x² -5x+6=(x-2)(x-3). Roots are 2 and 3.",
    "options": [
      "2, 3",
      "1, 6",
      "-2, -3",
      "5, 6"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "One mark bank",
    "mark": 1,
    "question": "Degree of polynomial 3x² + 2x - 1 is",
    "answer": "Highest power is 2. Correct answer: A. 2",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "2 mark",
    "mark": 2,
    "question": "Solve x² - 9 = 0.",
    "answer": "x²=9, so x=±3.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "2 mark",
    "mark": 2,
    "question": "Factorise x² + 7x + 12.",
    "answer": "x²+7x+12=(x+3)(x+4).",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "3 mark",
    "mark": 3,
    "question": "Solve x² - 7x + 10 = 0.",
    "answer": "x² -7x +10 = (x-5)(x-2)=0. Therefore x=5 or x=2.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "3 mark",
    "mark": 3,
    "question": "Find the GCD of x²-1 and x²-3x+2.",
    "answer": "x²-1=(x-1)(x+1). x²-3x+2=(x-1)(x-2). Common factor is x-1. GCD=x-1.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "5 mark",
    "mark": 5,
    "question": "Solve 2x² - 5x + 3 = 0 by factorisation.",
    "answer": "2x²-5x+3=0. Split -5x as -2x-3x. 2x²-2x-3x+3=0. 2x(x-1)-3(x-1)=0. (x-1)(2x-3)=0. x=1 or x=3/2.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "5 mark",
    "mark": 5,
    "question": "Form a quadratic equation whose roots are 4 and -3.",
    "answer": "Sum of roots = 1. Product = -12. Equation: x² - (sum)x + product = 0. x² - x - 12 = 0.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Algebra",
    "lesson": "Algebra",
    "type": "8 mark",
    "mark": 8,
    "question": "A rectangular park has perimeter 320 m and area 4800 m². Find its dimensions.",
    "answer": "Let length=l and breadth=b. 2(l+b)=320 so l+b=160. Area lb=4800. Let l=x, b=160-x. x(160-x)=4800. x²-160x+4800=0. Divide by 1: x²-160x+4800=0. Factor: discriminant = 160²-4(4800)=25600-19200=6400, √6400=80. x=(160±80)/2 gives 120 or 40. Dimensions are 120 m and 40 m.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "One mark bank",
    "mark": 1,
    "question": "A tangent to a circle is perpendicular to the radius at the point of contact.",
    "answer": "True. This is the tangent-radius theorem.",
    "options": [
      "True",
      "False",
      "Sometimes",
      "Cannot say"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "One mark bank",
    "mark": 1,
    "question": "From an external point, how many tangents can be drawn to a circle?",
    "answer": "Two tangents can be drawn from an external point.",
    "options": [
      "2",
      "1",
      "0",
      "Infinite"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "2 mark",
    "mark": 2,
    "question": "If tangents PA and PB are drawn from point P to a circle, what is the relation between PA and PB?",
    "answer": "Tangents drawn from an external point to a circle are equal. Therefore PA = PB.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "2 mark",
    "mark": 2,
    "question": "State the tangent-radius theorem.",
    "answer": "The tangent at any point of a circle is perpendicular to the radius drawn to the point of contact.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "3 mark",
    "mark": 3,
    "question": "A point P is 13 cm from centre O of a circle of radius 5 cm. Find tangent length PA.",
    "answer": "OA=5, OP=13, OA ⟂ PA. PA²=OP²-OA²=13²-5²=169-25=144. PA=12 cm.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "3 mark",
    "mark": 3,
    "question": "In similar triangles, if scale factor is 2:3 and smaller side is 8 cm, find corresponding larger side.",
    "answer": "Ratio smaller:larger = 2:3. Larger side = 8 x 3/2 = 12 cm.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "5 mark",
    "mark": 5,
    "question": "In triangle ABC, DE is parallel to BC. If AD=6 cm, DB=4 cm and AE=9 cm, find EC.",
    "answer": "By Basic Proportionality Theorem, AD/DB = AE/EC. 6/4 = 9/EC. 6EC = 36. EC = 6 cm.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "5 mark",
    "mark": 5,
    "question": "From point P, two tangents PA and PB are drawn to a circle. If PA=7 cm, find PB and justify.",
    "answer": "Tangents from an external point are equal. Therefore PA=PB. Given PA=7 cm, PB=7 cm.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Geometry",
    "lesson": "Geometry",
    "type": "8 mark",
    "mark": 8,
    "question": "Prove that tangents drawn from an external point to a circle are equal.",
    "answer": "Let PA and PB be tangents from external point P to a circle with centre O, touching at A and B. Join OA, OB and OP. Radius is perpendicular to tangent, so OA ⟂ PA and OB ⟂ PB. In right triangles OAP and OBP, OA=OB (radii), OP is common, and both are right triangles. By RHS congruence, ΔOAP ≅ ΔOBP. Hence PA=PB.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "One mark bank",
    "mark": 1,
    "question": "Distance between (0,0) and (3,4) is",
    "answer": "Distance = √(3²+4²)=5.",
    "options": [
      "5",
      "7",
      "1",
      "25"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "One mark bank",
    "mark": 1,
    "question": "Slope of line y = 2x + 5 is",
    "answer": "In y=mx+c, slope m=2.",
    "options": [
      "2",
      "5",
      "-2",
      "1/2"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "2 mark",
    "mark": 2,
    "question": "Find the midpoint of A(2,4) and B(6,8).",
    "answer": "Midpoint = ((2+6)/2, (4+8)/2) = (4,6).",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "2 mark",
    "mark": 2,
    "question": "Find slope of line joining (1,2) and (3,6).",
    "answer": "Slope = (6-2)/(3-1)=4/2=2.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "3 mark",
    "mark": 3,
    "question": "Find distance between A(-1,2) and B(5,10).",
    "answer": "Distance = √[(5+1)²+(10-2)²] = √(6²+8²)=√100=10 units.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "3 mark",
    "mark": 3,
    "question": "Find equation of line with slope 3 and y-intercept 2.",
    "answer": "Equation y=mx+c. m=3, c=2. Therefore y=3x+2.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "5 mark",
    "mark": 5,
    "question": "Find equation of line passing through (2,3) and slope 4.",
    "answer": "Using y-y1=m(x-x1): y-3=4(x-2). y-3=4x-8. y=4x-5.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "5 mark",
    "mark": 5,
    "question": "Find area of triangle with vertices (0,0), (4,0), (0,3).",
    "answer": "Area = 1/2 x base x height = 1/2 x 4 x 3 = 6 sq.units.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Coordinate Geometry",
    "lesson": "Coordinate Geometry",
    "type": "8 mark",
    "mark": 8,
    "question": "Show that points (0,0), (4,0), (4,3), (0,3) form a rectangle and find its area.",
    "answer": "Let A(0,0), B(4,0), C(4,3), D(0,3). AB=4, BC=3, CD=4, DA=3 using distance formula. Slopes: AB=0, BC undefined, so adjacent sides are perpendicular. Opposite sides are equal and parallel. Hence ABCD is a rectangle. Area = length x breadth = 4 x 3 = 12 sq.units.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "One mark bank",
    "mark": 1,
    "question": "sin 30° =",
    "answer": "sin 30° = 1/2.",
    "options": [
      "1/2",
      "√3/2",
      "1",
      "0"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "One mark bank",
    "mark": 1,
    "question": "tan 45° =",
    "answer": "tan 45° = 1.",
    "options": [
      "1",
      "0",
      "√3",
      "1/√3"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "2 mark",
    "mark": 2,
    "question": "Evaluate cos 60° + sin 30°.",
    "answer": "cos 60°=1/2 and sin 30°=1/2. Sum=1.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "2 mark",
    "mark": 2,
    "question": "If tan θ = 1 and θ is acute, find θ.",
    "answer": "tan 45°=1. Therefore θ=45°.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "3 mark",
    "mark": 3,
    "question": "Evaluate sin²30° + cos²30°.",
    "answer": "sin 30°=1/2, cos 30°=√3/2. sin²30°+cos²30°=1/4+3/4=1.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "3 mark",
    "mark": 3,
    "question": "A pole casts shadow 10 m when angle of elevation of sun is 45°. Find height.",
    "answer": "tan 45° = height/shadow = h/10. 1=h/10. h=10 m.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "5 mark",
    "mark": 5,
    "question": "From a point 20 m away from a tower, angle of elevation is 30°. Find height of tower.",
    "answer": "tan 30°=h/20. 1/√3=h/20. h=20/√3 m = 20√3/3 m.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "5 mark",
    "mark": 5,
    "question": "Prove that sin²θ + cos²θ = 1 for θ=60°.",
    "answer": "sin60°=√3/2, cos60°=1/2. sin²60°+cos²60°=3/4+1/4=1. Hence verified.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Trigonometry",
    "lesson": "Trigonometry",
    "type": "8 mark",
    "mark": 8,
    "question": "A ladder 10 m long leans against a wall and makes an angle 60° with the ground. Find height reached on wall and distance from wall.",
    "answer": "Ladder is hypotenuse=10 m. Height = 10 sin60° = 10(√3/2)=5√3 m. Distance from wall = 10 cos60° = 10(1/2)=5 m. Therefore height reached is 5√3 m and foot is 5 m from wall.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "One mark bank",
    "mark": 1,
    "question": "Volume of cylinder formula is",
    "answer": "Volume of cylinder = πr²h.",
    "options": [
      "πr²h",
      "2πrh",
      "πrl",
      "4πr²"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "One mark bank",
    "mark": 1,
    "question": "Curved surface area of cone is",
    "answer": "CSA of cone = πrl.",
    "options": [
      "πrl",
      "πr²h",
      "2πrh",
      "4πr²"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "2 mark",
    "mark": 2,
    "question": "Find volume of cylinder r=7 cm, h=10 cm. Use π=22/7.",
    "answer": "V=πr²h=22/7 x 7 x 7 x 10 = 1540 cm³.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "2 mark",
    "mark": 2,
    "question": "Find CSA of cylinder r=3 cm, h=5 cm. Use π=22/7.",
    "answer": "CSA=2πrh=2 x 22/7 x 3 x 5 = 660/7 = 94.29 cm².",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "3 mark",
    "mark": 3,
    "question": "Find TSA of cylinder r=7 cm, h=10 cm.",
    "answer": "TSA=2πr(h+r)=2 x 22/7 x 7 x (10+7)=44 x 17=748 cm².",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "3 mark",
    "mark": 3,
    "question": "Find volume of cone r=7 cm, h=12 cm.",
    "answer": "V=1/3πr²h=1/3 x 22/7 x 7 x 7 x 12 = 616 cm³.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "5 mark",
    "mark": 5,
    "question": "A cylindrical tank has radius 3.5 m and height 4 m. Find its capacity.",
    "answer": "V=πr²h=22/7 x 3.5 x 3.5 x 4 = 154 m³.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "5 mark",
    "mark": 5,
    "question": "Find surface area of sphere radius 7 cm.",
    "answer": "Surface area = 4πr² = 4 x 22/7 x 7 x 7 = 616 cm².",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Mensuration",
    "lesson": "Mensuration",
    "type": "8 mark",
    "mark": 8,
    "question": "A solid cylinder of radius 7 cm and height 10 cm is melted and recast into cones of radius 7 cm and height 5 cm. Find number of cones.",
    "answer": "Volume of cylinder = πr²h = 22/7 x 7 x 7 x 10 = 1540 cm³. Volume of one cone = 1/3πr²h = 1/3 x 22/7 x 7 x 7 x 5 = 770/3 cm³. Number of cones = 1540 ÷ (770/3) = 1540 x 3 / 770 = 6.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "One mark bank",
    "mark": 1,
    "question": "Mean of 2, 4, 6 is",
    "answer": "Mean=(2+4+6)/3=12/3=4.",
    "options": [
      "4",
      "6",
      "2",
      "12"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "One mark bank",
    "mark": 1,
    "question": "Probability of getting head in one coin toss is",
    "answer": "There are two outcomes H,T. Probability of head=1/2.",
    "options": [
      "1/2",
      "1",
      "0",
      "2"
    ]
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "2 mark",
    "mark": 2,
    "question": "Find range of 12, 18, 9, 25, 16.",
    "answer": "Range = highest - lowest = 25 - 9 = 16.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "2 mark",
    "mark": 2,
    "question": "A die is rolled once. Find probability of getting an even number.",
    "answer": "Even outcomes={2,4,6}, total outcomes=6. Probability=3/6=1/2.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "3 mark",
    "mark": 3,
    "question": "Find mean of 10, 12, 14, 16, 18.",
    "answer": "Sum=70, number=5. Mean=70/5=14.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "3 mark",
    "mark": 3,
    "question": "Find probability of drawing a red ball from a bag with 3 red and 5 blue balls.",
    "answer": "Total balls=8. Favourable red balls=3. Probability=3/8.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "5 mark",
    "mark": 5,
    "question": "Find variance of 2, 4, 6.",
    "answer": "Mean=4. Deviations: -2,0,2. Squares:4,0,4. Variance=(4+0+4)/3=8/3.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "5 mark",
    "mark": 5,
    "question": "Two coins are tossed. Find probability of getting exactly one head.",
    "answer": "Sample space={HH,HT,TH,TT}. Exactly one head={HT,TH}. Probability=2/4=1/2.",
    "options": null
  },
  {
    "subjectId": "maths",
    "subject": "Maths",
    "chapter": "Statistics and Probability",
    "lesson": "Statistics and Probability",
    "type": "8 mark",
    "mark": 8,
    "question": "Find mean, variance and standard deviation of 2, 3, 5, 7, 8.",
    "answer": "Mean=(2+3+5+7+8)/5=25/5=5. Deviations: -3,-2,0,2,3. Squares:9,4,0,4,9. Variance=(26)/5=5.2. Standard deviation=√5.2≈2.28.",
    "options": null
  }
];

const realScienceBank = [
  {
    subjectId: "science", subject: "Science", chapter: "Laws of Motion", lesson: "Laws of Motion",
    type: "One mark bank", mark: 1,
    question: "Inertia of a body depends on",
    answer: "Mass of the object.",
    options: ["Weight of the object", "Acceleration due to gravity", "Mass of the object", "Both mass and weight"]
  },
  {
    subjectId: "science", subject: "Science", chapter: "Laws of Motion", lesson: "Laws of Motion",
    type: "2 mark", mark: 2,
    question: "State Newton's second law of motion.",
    answer: "The force acting on a body is directly proportional to the rate of change of linear momentum of the body.",
    options: null
  },
  {
    subjectId: "science", subject: "Science", chapter: "Optics", lesson: "Optics",
    type: "One mark bank", mark: 1,
    question: "The refractive index of glass is",
    answer: "1.5",
    options: ["1.0", "1.33", "1.5", "2.42"]
  },
  {
    subjectId: "science", subject: "Science", chapter: "Optics", lesson: "Optics",
    type: "5 mark", mark: 5,
    question: "Differentiate between convex and concave lenses.",
    answer: "Convex lens is thicker at the center, converges light rays. Concave lens is thinner at the center, diverges light rays.",
    options: null
  },
  {
    subjectId: "science", subject: "Science", chapter: "Electricity", lesson: "Electricity",
    type: "2 mark", mark: 2,
    question: "State Ohm's Law.",
    answer: "At a constant temperature, the steady current 'I' flowing through a conductor is directly proportional to the potential difference 'V' between the two ends of the conductor. V = IR.",
    options: null
  },
  {
    subjectId: "science", subject: "Science", chapter: "Acoustics", lesson: "Acoustics",
    type: "One mark bank", mark: 1,
    question: "What is the minimum distance required to hear an echo?",
    answer: "17.2 m",
    options: ["17.2 m", "34.4 m", "10 m", "20 m"]
  },
  {
    subjectId: "science", subject: "Science", chapter: "Atoms and Molecules", lesson: "Atoms and Molecules",
    type: "5 mark", mark: 5,
    question: "Write any five postulates of modern atomic theory.",
    answer: "An atom is no longer indivisible (discovery of electrons, protons, and neutrons). Atoms of the same element may have different atomic masses (isotopes). Atoms of different elements may have same atomic masses (isobars). Atoms of one element can be transmuted into atoms of other elements (artificial transmutation). The ratio of atoms in a molecule may be fixed and integral but may not be simple (e.g., C12H22O11).",
    options: null
  },
  {
    subjectId: "science", subject: "Science", chapter: "Solutions", lesson: "Solutions",
    type: "2 mark", mark: 2,
    question: "Define solubility.",
    answer: "Solubility is defined as the number of grams of a solute that can be dissolved in 100g of a solvent to form a saturated solution at a given temperature and pressure.",
    options: null
  },
  {
    subjectId: "science", subject: "Science", chapter: "Genetics", lesson: "Genetics",
    type: "One mark bank", mark: 1,
    question: "Who is known as the Father of Genetics?",
    answer: "Gregor Johann Mendel",
    options: ["Charles Darwin", "Gregor Johann Mendel", "Watson and Crick", "Jean Baptiste Lamarck"]
  },
  {
    subjectId: "science", subject: "Science", chapter: "Plant Anatomy", lesson: "Plant Anatomy",
    type: "5 mark", mark: 5,
    question: "Differentiate between Monocot root and Dicot root.",
    answer: "In dicot root, the xylem is usually tetrarch (four xylem bundles), whereas in monocot root, it is polyarch (many xylem bundles). Pith is absent or poorly developed in dicot root, but it is large and well-developed in monocot root. Secondary growth occurs in dicot roots, but it is absent in monocot roots. The pericycle produces lateral roots and vascular cambium in dicots, whereas it only produces lateral roots in monocots.",
    options: null
  },
  {
    subjectId: "science", subject: "Science", chapter: "Transportation in Plants and Animals", lesson: "Transportation in Plants and Animals",
    type: "8 mark", mark: 8,
    question: "Describe the structure of the human heart with its functions.",
    answer: "The human heart is a muscular pumping organ located in the thoracic cavity between the two lungs. It is enclosed by a double-walled membrane called the pericardium. The heart is divided into four chambers: two upper auricles (atria) and two lower ventricles. The right atrium receives deoxygenated blood from the body via the vena cava. The right ventricle pumps it to the lungs for oxygenation through the pulmonary artery. The left atrium receives oxygenated blood from the lungs via the pulmonary veins. The left ventricle pumps this oxygenated blood to all parts of the body through the aorta. Valves (tricuspid, bicuspid, and semilunar) prevent the backward flow of blood. The rhythmic contraction and relaxation of the heart muscle ensures continuous blood circulation.",
    options: null
  }
];

const realSocialBank = [
  {
    subjectId: "social", subject: "Social Science", chapter: "History - Nationalism", lesson: "History - Nationalism",
    type: "One mark bank", mark: 1,
    question: "Who founded the Indian National Congress?",
    answer: "A.O. Hume",
    options: ["W.C. Bonnerjee", "A.O. Hume", "Mahatma Gandhi", "Jawaharlal Nehru"]
  },
  {
    subjectId: "social", subject: "Social Science", chapter: "Geography - Resources", lesson: "Geography - Resources",
    type: "2 mark", mark: 2,
    question: "What is meant by resource planning?",
    answer: "Resource planning is a widely accepted strategy for judicious use of resources.",
    options: null
  },
  {
    subjectId: "social", subject: "Social Science", chapter: "Civics - Constitution", lesson: "Civics - Constitution",
    type: "One mark bank", mark: 1,
    question: "The Constitution of India was adopted on",
    answer: "26 November 1949",
    options: ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1948"]
  },
  {
    subjectId: "social", subject: "Social Science", chapter: "Economics - Development", lesson: "Economics - Development",
    type: "5 mark", mark: 5,
    question: "Explain the meaning of sustainable development.",
    answer: "Sustainable development means development should take place without damaging the environment, and development in the present should not compromise with the needs of future generations.",
    options: null
  }
];

const realEnglishBank = [
  {
    subjectId: "english", subject: "English", chapter: "Vocabulary", lesson: "Vocabulary",
    type: "One mark bank", mark: 1,
    question: "Choose the appropriate synonym for the italicised word: The young seagull was alone on his *ledge*.",
    answer: "A narrow shelf that juts out from a vertical surface",
    options: ["narrow shelf", "deep valley", "wide ocean", "tall tree"]
  },
  {
    subjectId: "english", subject: "English", chapter: "Prose", lesson: "Prose",
    type: "2 mark", mark: 2,
    question: "Why did the young seagull fail to fly?",
    answer: "The young seagull failed to fly because he lacked confidence. He was afraid that his wings would not support him, so he hesitated to take the plunge.",
    options: null
  },
  {
    subjectId: "english", subject: "English", chapter: "Grammar - Voice", lesson: "Grammar - Voice",
    type: "2 mark", mark: 2,
    question: "Change into passive voice: The teacher is correcting the answer scripts.",
    answer: "The answer scripts are being corrected by the teacher.",
    options: null
  },
  {
    subjectId: "english", subject: "English", chapter: "Poetry", lesson: "Poetry",
    type: "3 mark", mark: 3,
    question: "Explain with reference to the context: 'Let me but live my life from year to year, With forward face and unreluctant soul.'",
    answer: "Reference: These lines are from the poem 'Life' written by Henry Van Dyke. Context: The poet says these words while expressing how he wants to live his life. Explanation: The poet wants to live his life looking forward, with courage and dedication, without hesitation.",
    options: null
  },
  {
    subjectId: "english", subject: "English", chapter: "Prose", lesson: "Prose",
    type: "5 mark", mark: 5,
    question: "Describe the funny incident that caused the confusion in the house in 'The Night the Ghost Got In'.",
    answer: "The author heard footsteps in the dining room and thought it was a ghost. He woke his brother Herman up, and they heard the steps moving around the dining table. They went to their mother's room. Their mother thought it was burglars and threw a shoe through the neighbour's window to get help. The neighbour called the police. The police arrived, broke down the door, and searched the house, creating chaos. Finally, grandfather shot at the police thinking they were deserters. The whole confusion was simply caused by grandfather walking around the dining table at night for water.",
    options: null
  },
  {
    subjectId: "english", subject: "English", chapter: "Supplementary", lesson: "Supplementary",
    type: "8 mark", mark: 8,
    question: "Write a detailed paragraph on how the tempest was brought to an end by Prospero.",
    answer: "Prospero commanded Ariel to bring the tempest to an end. After causing the shipwreck, Ariel separated the passengers into different groups on the island. Prospero ensured that no one was harmed during the storm. He used the tempest only to bring his enemies (Alonso, Antonio) to the island to make them realize their guilt. Once his purpose was achieved and the enemies repented, he forgave them, set Ariel free, and promised to break his magic staff and return to Milan.",
    options: null
  }
];

const modelPattern = [
  { title: "Part I - 1 Mark", instruction: "Choose the best answer. 20 x 1 = 20", count: 20, mark: 1 },
  { title: "Part II - 2 Mark", instruction: "Answer in short steps. 10 x 2 = 20", count: 10, mark: 2 },
  { title: "Part III - 3 Mark", instruction: "Answer with method and explanation. 10 x 3 = 30", count: 10, mark: 3 },
  { title: "Part IV - 5 Mark", instruction: "Answer in detail with full working or points. 8 x 5 = 40", count: 8, mark: 5 },
  { title: "Part V - 8 Mark", instruction: "Answer long questions with complete steps. 2 x 8 = 16", count: 2, mark: 8 },
];

const subjectSelect = document.querySelector("#subjectSelect");
const typeSelect = document.querySelector("#typeSelect");
const searchInput = document.querySelector("#searchInput");
const questionList = document.querySelector("#questionList");
const questionCount = document.querySelector("#questionCount");
const printModel = document.querySelector("#printModel");
const showModel = document.querySelector("#showModel");
const modelSetSelect = document.querySelector("#modelSetSelect");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setupSubjects() {
  subjectSelect.innerHTML = subjects.map((subject) => `<option value="${subject.id}">${subject.name}</option>`).join("");
}

function answerDepth(mark) {
  if (mark === 1) return "Choose the best option.";
  if (mark === 2) return "Write formula/key point and final answer.";
  if (mark === 3) return "Show method, substitution, and conclusion.";
  if (mark === 5) return "Write full working with all important steps.";
  if (mark === 8) return "Write a complete solution with explanation, steps, and final answer.";
  return "Answer according to the mark value.";
}

function optionSet(correct, wrong1, wrong2, wrong3) {
  return [String(correct), String(wrong1), String(wrong2), String(wrong3)];
}

function makeQuestion({ subjectId, subject, chapter, mark, type, question, answer, options = null, number = 1 }) {
  return {
    id: `${subjectId}-${mark}-${number}`,
    subjectId,
    subject,
    chapter,
    lesson: chapter,
    mark,
    type,
    questionNo: number,
    question,
    answer,
    options,
  };
}

function mathsProblem(chapterIndex, i, mark) {
  const chapter = subjects.find((subject) => subject.id === "maths").chapters[chapterIndex];
  const n = i + chapterIndex * 7;

  if (chapter.includes("Relations")) {
    const a = (n % 5) + 1;
    const b = (n % 4) + 2;
    const x = (n % 6) + 1;
    return {
      question: mark === 1 ? `If f(x) = ${a}x + ${b}, find f(${x}).` : `For f(x) = ${a}x + ${b}, find f(${x}) and explain the substitution.`,
      answer: `f(${x}) = ${a}(${x}) + ${b} = ${a * x + b}.`,
      options: optionSet(a * x + b, a + x + b, a * b + x, a * x - b),
    };
  }

  if (chapter.includes("Sequences")) {
    const first = (n % 6) + 2;
    const diff = (n % 5) + 2;
    const term = (n % 7) + 5;
    const ans = first + (term - 1) * diff;
    return {
      question: mark === 1 ? `Find the ${term}th term of AP: ${first}, ${first + diff}, ${first + 2 * diff}, ...` : `Find the ${term}th term of the AP with first term ${first} and common difference ${diff}.`,
      answer: `a_n = a + (n - 1)d = ${first} + (${term} - 1)${diff} = ${ans}.`,
      options: optionSet(ans, ans + diff, first * term, ans - diff),
    };
  }

  if (chapter.includes("Algebra")) {
    const root1 = (n % 5) + 1;
    const root2 = (n % 4) + 2;
    const sum = root1 + root2;
    const product = root1 * root2;
    return {
      question: mark === 1 ? `If roots are ${root1} and ${root2}, choose the quadratic equation.` : `Form the quadratic equation whose roots are ${root1} and ${root2}.`,
      answer: `Equation: x^2 - (${sum})x + ${product} = 0, so x^2 - ${sum}x + ${product} = 0.`,
      options: optionSet(`x² - ${sum}x + ${product} = 0`, `x² + ${sum}x + ${product} = 0`, `x² - ${product}x + ${sum} = 0`, `x² + ${product}x - ${sum} = 0`),
    };
  }

  if (chapter.includes("Geometry")) {
    const angle = 30 + (n % 5) * 10;
    const other = 180 - angle;
    return {
      question: mark === 1 ? `In a linear pair, one angle is ${angle}°. Find the other angle.` : `Two angles form a linear pair. If one angle is ${angle}°, find the other and state the property used.`,
      answer: `Linear pair angles add to 180°. Other angle = 180° - ${angle}° = ${other}°.`,
      options: optionSet(`${other}°`, `${angle}°`, `${90 - angle}°`, `${180 + angle}°`),
    };
  }

  if (chapter.includes("Coordinate")) {
    const x1 = n % 5;
    const y1 = (n % 4) + 1;
    const x2 = x1 + 3;
    const y2 = y1 + 4;
    return {
      question: mark === 1 ? `Find the distance between (${x1}, ${y1}) and (${x2}, ${y2}).` : `Find the distance between points A(${x1}, ${y1}) and B(${x2}, ${y2}) using the distance formula.`,
      answer: `Distance = √[(${x2}-${x1})² + (${y2}-${y1})²] = √(3²+4²) = 5 units.`,
      options: optionSet("5 units", "7 units", "4 units", "25 units"),
    };
  }

  if (chapter.includes("Trigonometry")) {
    const pairs = [
      ["sin 30°", "1/2"],
      ["cos 60°", "1/2"],
      ["tan 45°", "1"],
      ["sin 90°", "1"],
      ["cos 0°", "1"],
    ];
    const [ratio, value] = pairs[n % pairs.length];
    return {
      question: mark === 1 ? `Choose the value of ${ratio}.` : `Evaluate ${ratio} and use the standard trigonometric table.`,
      answer: `${ratio} = ${value}.`,
      options: optionSet(value, "0", "√3/2", "1/√3"),
    };
  }

  if (chapter.includes("Mensuration")) {
    const r = (n % 6) + 3;
    const h = (n % 5) + 5;
    const volume = 22 * r * r * h / 7;
    return {
      question: mark === 1 ? `Find the volume of a cylinder with r = ${r} cm and h = ${h} cm. Use π = 22/7.` : `Find the volume of a cylinder of radius ${r} cm and height ${h} cm. Use π = 22/7.`,
      answer: `Volume = πr²h = 22/7 x ${r}² x ${h} = ${volume.toFixed(2)} cm³.`,
      options: optionSet(`${volume.toFixed(2)} cm³`, `${(2 * 22 * r * h / 7).toFixed(2)} cm³`, `${(22 * r * r / 7).toFixed(2)} cm³`, `${(r * h).toFixed(2)} cm³`),
    };
  }

  if (chapter.includes("Statistics")) {
    const values = [n % 10 + 10, n % 8 + 12, n % 6 + 14, n % 5 + 16, n % 4 + 18];
    const sum = values.reduce((total, value) => total + value, 0);
    const mean = sum / values.length;
    return {
      question: mark === 1 ? `Find the mean of ${values.join(", ")}.` : `Find the arithmetic mean of the data: ${values.join(", ")}.`,
      answer: `Mean = sum of observations / number = ${sum}/5 = ${mean.toFixed(2)}.`,
      options: optionSet(mean.toFixed(2), (mean + 1).toFixed(2), (sum / 4).toFixed(2), (mean - 1).toFixed(2)),
    };
  }

  if (chapter.includes("Probability")) {
    const red = (n % 4) + 2;
    const blue = (n % 5) + 3;
    const total = red + blue;
    return {
      question: mark === 1 ? `A bag has ${red} red and ${blue} blue balls. Probability of red?` : `A bag contains ${red} red balls and ${blue} blue balls. Find the probability of drawing a red ball.`,
      answer: `P(red) = favourable outcomes / total outcomes = ${red}/${total}.`,
      options: optionSet(`${red}/${total}`, `${blue}/${total}`, `${red}/${blue}`, `${total}/${red}`),
    };
  }

  const a = (n % 9) + 2;
  const b = (n % 7) + 3;
  return {
    question: mark === 1 ? `Simplify ${a}² + ${b}².` : `Simplify ${a}² + ${b}² and show the calculation.`,
    answer: `${a}² + ${b}² = ${a * a} + ${b * b} = ${a * a + b * b}.`,
    options: optionSet(a * a + b * b, a + b, a * b, (a + b) * (a + b)),
  };
}

function buildMathsBank() {
  const subject = subjects.find((item) => item.id === "maths");
  const questions = [];
  let number = 1;

  subject.chapters.forEach((chapter, chapterIndex) => {
    for (let i = 1; i <= 50; i += 1) {
      const problem = mathsProblem(chapterIndex, i, 1);
      questions.push(makeQuestion({
        subjectId: "maths",
        subject: subject.name,
        chapter,
        mark: 1,
        type: "One mark bank",
        number: number++,
        ...problem,
      }));
    }
  });

  [2, 3, 5, 8].forEach((mark) => {
    subject.chapters.forEach((chapter, chapterIndex) => {
      for (let i = 1; i <= 12; i += 1) {
        const problem = mathsProblem(chapterIndex, i + mark * 3, mark);
        const detail =
          mark >= 5
            ? `${problem.answer} Write formula, substitution, simplification, and final answer clearly.`
            : problem.answer;
        questions.push(makeQuestion({
          subjectId: "maths",
          subject: subject.name,
          chapter,
          mark,
          type: `${mark} mark`,
          number: number++,
          question: problem.question,
          answer: detail,
          options: mark === 1 ? problem.options : null,
        }));
      }
    });
  });

  return questions;
}

function nonMathQuestion(subject, chapter, mark, index) {
  const subjectName = subject.name;
  const isTamil = subject.id === "tamil";
  const oneMarkSkills = isTamil ? ["மையக் கருத்து", "சொற்பொருள்", "சரியான கூற்று", "இலக்கணப் பகுதி", "வரையறை", "எடுத்துக்காட்டு", "காரணம்", "விளைவு", "ஒப்பீடு", "மீள்பார்வைத் தகவல்", "ஆசிரியர் குறிப்பு", "பாடச்செய்தி", "பொருத்தம்", "எதிர்சொல்", "இணைச்சொல்"] : ["main idea", "key term", "correct statement", "grammar point", "definition", "example", "cause", "result", "comparison", "revision fact", "author clue", "lesson message", "matching pair", "opposite word", "synonym"] ;
  const twoMarkSkills = isTamil ? ["இரண்டு முக்கியக் கருத்துகள்", "பொருள் மற்றும் எடுத்துக்காட்டு", "காரணம் மற்றும் விளைவு", "சிறு ஒப்பீடு", "வரையறை மற்றும் பயன்பாடு", "காரணம்", "நன்மை", "சுருக்கம்", "முக்கிய சொல்", "பயன்பாடு", "பாடச்செய்தி", "இலக்கண விளக்கம்"] : ["two key points", "meaning and example", "cause and effect", "short comparison", "definition and use", "reason", "benefit", "summary", "important term", "application", "lesson message", "grammar use"] ;
  const threeMarkSkills = isTamil ? ["மூன்று ஆதாரக் கருத்துகள்", "சிறு விளக்கம்", "நிகழ்வுகளின் வரிசை", "மூன்று புள்ளி ஒப்பீடு", "எடுத்துக்காட்டுடன் கருத்து", "பயன்பாடு", "கருப்பொருள்", "செயல்முறை", "முக்கியத்துவம்", "மீள்பார்வைக் குறிப்பு", "பண்பு விளக்கம்", "இலக்கணப் பயிற்சி"] : ["three supporting points", "short explanation", "sequence", "three-point comparison", "concept with example", "application", "theme", "process", "importance", "revision note", "character points", "grammar practice"] ;
  const fiveMarkSkills = isTamil ? ["விரிவான குறிப்பு", "பத்தி வடிவ விடை", "எடுத்துக்காட்டுகள்", "காரணங்களும் விளைவுகளும்", "விரிவான ஒப்பீடு", "பாடச்செய்தி", "கட்டுரை/கடிதப் பயிற்சி", "முக்கியக் கருத்துகள்", "பொது தேர்வு விடை", "பாத்திரப் பண்புகள்", "நல்லொழுக்கச் செய்தி", "இலக்கணப் பயன்பாடு"] : ["detailed note", "paragraph answer", "examples", "causes and results", "detailed comparison", "lesson message", "writing task", "critical points", "map or diagram points", "public exam answer", "character analysis", "application"] ;
  const eightMarkSkills = isTamil ? ["நீண்ட விடை", "கட்டுரை வடிவ விடை", "முழு விளக்கம்", "முழுமையான ஒப்பீடு", "படைப்பாற்றல் விடை", "சூழ்நிலை அடிப்படையிலான விடை", "பாடச் சுருக்கம்", "விரிவான செயல்முறை", "இறுதி மீள்பார்வை விடை", "முழுமையான பொது தேர்வு விடை"] : ["long answer", "essay answer", "full explanation", "complete comparison", "creative answer", "case-based answer", "lesson summary", "detailed process", "final revision answer", "complete public exam answer"] ;
  const pick = (list) => list[(index - 1) % list.length];
  const skill =
    mark === 1
      ? pick(oneMarkSkills)
      : mark === 2
        ? pick(twoMarkSkills)
        : mark === 3
          ? pick(threeMarkSkills)
          : mark === 5
            ? pick(fiveMarkSkills)
            : pick(eightMarkSkills);
  const stem =
    mark === 1
      ? isTamil
        ? `${chapter} பகுதியில் ${skill} அடிப்படையில் சரியான விடையைத் தேர்ந்தெடுக்கவும்.`
        : `Choose the best answer from ${chapter}: ${skill}.`
      : isTamil
        ? `${chapter}: ${skill} பற்றி ${mark} மதிப்பெண் விடை எழுதுக.`
        : `${chapter}: write a ${mark}-mark answer on ${skill}.`;
  const answer =
    mark === 1
      ? "A. Correct textbook point"
      : mark === 2
        ? `Write ${skill} in two direct points with textbook keywords.`
        : mark === 3
          ? `Write ${skill} in three clear points and add one supporting line.`
          : mark === 5
            ? `Write ${skill} with definition/context, key points, example, and conclusion.`
            : `Write ${skill} with introduction, explanation, examples, and conclusion.`;
  return makeQuestion({
    subjectId: subject.id,
    subject: subjectName,
    chapter,
    mark,
    type: mark === 1 ? "One mark bank" : `${mark} mark`,
    number: index,
    question: `${stem} (${index})`,
    answer,
    options: mark === 1 ? optionSet("Correct textbook point", "Unrelated point", "Wrong statement", "Incomplete idea") : null,
  });
}

function buildNonMathBank(subject) {
  const questions = [];
  let number = 1;
  subject.chapters.forEach((chapter) => {
    for (let i = 1; i <= 50; i += 1) {
      questions.push(nonMathQuestion(subject, chapter, 1, number++));
    }
  });
  [2, 3, 5, 8].forEach((mark) => {
    subject.chapters.forEach((chapter) => {
      for (let i = 1; i <= 12; i += 1) {
        questions.push(nonMathQuestion(subject, chapter, mark, number++));
      }
    });
  });
  return questions;
}

function buildAllQuestions() {
  return subjects.flatMap((subject) => {
    if (subject.id === "maths") return realMathsBank.map((q, index) => ({ ...q, questionNo: index + 1 }));
    if (subject.id === "science") return realScienceBank.map((q, index) => ({ ...q, questionNo: index + 1 })).concat(buildNonMathBank(subject).slice(realScienceBank.length));
    if (subject.id === "social") return realSocialBank.map((q, index) => ({ ...q, questionNo: index + 1 })).concat(buildNonMathBank(subject).slice(realSocialBank.length));
    if (subject.id === "english") return realEnglishBank.map((q, index) => ({ ...q, questionNo: index + 1 })).concat(buildNonMathBank(subject).slice(realEnglishBank.length));
    return buildNonMathBank(subject);
  });
}

const allQuestions = buildAllQuestions();


function uniqueQuestions(questions) {
  const seen = new Set();
  return questions.filter((question) => {
    const key = question.question.toLowerCase().replace(/\(\d+\)\s*$/g, "").replace(/\s+/g, " ").trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

let bookmarks = new Set(JSON.parse(localStorage.getItem('questionBookmarks') || '[]'));
const bookmarkFilter = document.querySelector("#bookmarkFilter");

function toggleBookmark(id) {
  if (bookmarks.has(id)) {
    bookmarks.delete(id);
  } else {
    bookmarks.add(id);
  }
  localStorage.setItem('questionBookmarks', JSON.stringify([...bookmarks]));
}

function filteredQuestions() {
  const subjectId = subjectSelect.value;
  const type = typeSelect.value;
  const search = searchInput.value.trim().toLowerCase();
  const showBookmarksOnly = bookmarkFilter ? bookmarkFilter.checked : false;

  return uniqueQuestions(allQuestions.filter((question) => {
    const typeMatches =
      type === "all" ||
      (type === "One mark bank" && question.mark === 1) ||
      (type === "Model exam" && question.subjectId === subjectId) ||
      question.type === type;
    const searchMatches =
      !search ||
      `${question.chapter} ${question.question} ${question.answer}`.toLowerCase().includes(search);
    const bookmarkMatches = !showBookmarksOnly || bookmarks.has(question.id);

    return question.subjectId === subjectId && typeMatches && searchMatches && bookmarkMatches;
  }));
}


function formatAnswer(question) {
  const markValue = question.modelMark || question.mark;
  let ans = escapeHtml(question.answer);

  if (markValue > 1) {
    const steps = question.answer.split(". ").filter(s => s.trim().length > 0);
    if (steps.length > 1) {
      const label = question.subjectId === "maths" ? "Step" : "Point";
      ans = '<div style="margin-top: 8px; display: grid; gap: 8px;">' + steps.map((step, idx) => `<div><strong>${label} ${idx + 1}:</strong> ${escapeHtml(step)}${step.endsWith('.') ? '' : '.'}</div>`).join("") + '</div>';
    }
  }

  return ans;
}

function answerHtml(question) {
  const isMaths = question.subjectId === "maths";
  return `
    <button class="answer-toggle" type="button">See answer</button>
    <div class="answer" hidden>
      ${isMaths ? '' : `<div style="margin-bottom: 8px;"><strong>How to answer:</strong> ${escapeHtml(answerDepth(question.modelMark || question.mark))}</div>`}
      <div>${isMaths ? '' : '<strong>Answer:</strong> '}${formatAnswer(question)}</div>
    </div>
  `;
}

function questionCard(question, number = question.questionNo) {
  const isBookmarked = bookmarks.has(question.id);
  return `
    <article class="question-card ${question.mark === 1 ? "one-mark-card" : ""}" data-id="${question.id}">
      <button type="button" class="bookmark-btn ${isBookmarked ? 'active' : ''}" aria-label="Bookmark this question">
        <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
      </button>
      <div class="question-meta">
        <span class="pill">${escapeHtml(question.chapter)}</span>
        <span class="pill">${question.modelMark || question.mark} mark question</span>
        <span class="pill mark">${question.modelMark || question.mark} mark</span>
      </div>
      <h2>${number}. ${escapeHtml(question.question)}</h2>
      ${
        question.options
          ? `<ul class="mcq-options" data-answer="${escapeHtml(question.answer.split('. ')[0])}">
               ${question.options.map((option) => `<li><button class="mcq-option-btn" data-value="${escapeHtml(option)}">${escapeHtml(option)}</button></li>`).join("")}
             </ul>`
          : ""
      }
      ${answerHtml(question)}
    </article>
  `;
}

function renderQuestions() {
  if (typeSelect.value === "Model exam") {
    renderModelPaper();
    return;
  }

  const questions = filteredQuestions();
  questionCount.textContent = questions.length;
  questionList.innerHTML = `
    ${
      typeSelect.value === "One mark bank"
        ? `<section class="model-title"><p class="eyebrow">Choose the best answer</p><h2>${escapeHtml(subjects.find((s) => s.id === subjectSelect.value).name)} - 500 One Mark Questions</h2><p>All one-mark questions are MCQ format with A/B/C/D options.</p></section>`
        : ""
    }
    ${questions.map((question, index) => questionCard(question, index + 1)).join("")}
  `;
}

function pickForModel(subjectId, mark, count, setNumber = 1) {
  const subject = subjects.find((item) => item.id === subjectId);
  const byChapter = subject.chapters.map((chapter) =>
    uniqueQuestions(allQuestions.filter((question) => question.subjectId === subjectId && question.mark === mark && question.chapter === chapter)),
  );
  const picked = [];
  let round = Math.max(0, setNumber - 1);
  while (picked.length < count) {
    let addedThisRound = false;
    for (const chapterQuestions of byChapter) {
      if (picked.length >= count) break;
      if (chapterQuestions.length) {
        picked.push(chapterQuestions[round % chapterQuestions.length]);
        addedThisRound = true;
      }
    }
    if (!addedThisRound) break;
    round += 1;
  }
  return picked.slice(0, count);
}


function unitCoverageHtml(modelQuestions) {
  const counts = new Map();
  modelQuestions.forEach((question) => {
    counts.set(question.chapter, (counts.get(question.chapter) || 0) + 1);
  });
  return `
    <div class="unit-coverage">
      <strong>Units covered in this model:</strong>
      ${[...counts.entries()]
        .map(([chapter, count]) => `<span>${escapeHtml(chapter)}: ${count}</span>`)
        .join("")}
    </div>
  `;
}

function renderModelPaper() {
  const subject = subjects.find((item) => item.id === subjectSelect.value);
  let number = 1;
  const sections = modelPattern.map((section) => {
    const setNumber = Number(modelSetSelect?.value || 1);
    const questions = pickForModel(subject.id, section.mark, section.count, setNumber).map((question) => ({
      ...question,
      modelMark: section.mark,
      modelNo: number++,
    }));
    return { ...section, questions };
  });
  const allModelQuestions = sections.flatMap((section) => section.questions);
  questionCount.textContent = allModelQuestions.length;
  questionList.innerHTML = `
    <section class="model-title">
      <p class="eyebrow">Public exam practice</p>
      <h2>${escapeHtml(subject.name)} - 50 Question Model Paper Set ${setNumber}</h2>
      <div class="question-meta">
        <span class="pill">1, 2, 3, 5 and 8 mark sections</span>
        <span class="pill mark">50 questions</span>
      </div>
      <p>Questions are arranged mark-wise and selected from all units/chapters of the subject.</p>
      ${unitCoverageHtml(allModelQuestions)}
    </section>
    ${sections
      .map(
        (section) => `
          <section class="model-section">
            <div class="model-section-head">
              <h2>${escapeHtml(section.title)}</h2>
              <p>${escapeHtml(section.instruction)}</p>
            </div>
            ${section.questions.map((question) => questionCard(question, question.modelNo)).join("")}
          </section>
        `,
      )
      .join("")}
  `;
}

function printModelTest() {
  renderModelPaper();
  window.print();
}

setupSubjects();
renderQuestions();

subjectSelect.addEventListener("change", renderQuestions);
typeSelect.addEventListener("change", renderQuestions);
searchInput.addEventListener("input", renderQuestions);
if (bookmarkFilter) bookmarkFilter.addEventListener("change", renderQuestions);
showModel?.addEventListener("click", renderModelPaper);
modelSetSelect?.addEventListener("change", () => {
  if (typeSelect.value === "Model exam") renderModelPaper();
});
printModel.addEventListener("click", printModelTest);

questionList.addEventListener("click", (event) => {
  const bookmarkBtn = event.target.closest(".bookmark-btn");
  if (bookmarkBtn) {
    const card = bookmarkBtn.closest(".question-card");
    const id = card.dataset.id;
    toggleBookmark(id);
    const isBookmarked = bookmarks.has(id);
    bookmarkBtn.classList.toggle("active", isBookmarked);
    bookmarkBtn.innerHTML = `<i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>`;
    if (bookmarkFilter && bookmarkFilter.checked && !isBookmarked) {
      renderQuestions(); // Remove from view if filtering
    }
    return;
  }

  const optionBtn = event.target.closest(".mcq-option-btn");
  if (optionBtn) {
    const container = optionBtn.closest(".mcq-options");
    const correctAnswerText = container.dataset.answer;
    
    // Disable all options
    const allButtons = container.querySelectorAll(".mcq-option-btn");
    allButtons.forEach(btn => btn.disabled = true);
    
    // Highlight selected
    const selectedValue = optionBtn.dataset.value;
    
    // Simple correct check (for generated options, usually exact match or first part matches)
    const isCorrect = correctAnswerText.includes(selectedValue);
    
    if (isCorrect) {
      optionBtn.classList.add("quiz-correct");
    } else {
      optionBtn.classList.add("quiz-incorrect");
      // Find and highlight correct one
      allButtons.forEach(btn => {
        if (correctAnswerText.includes(btn.dataset.value)) {
          btn.classList.add("quiz-correct");
        }
      });
    }
    
    // Auto-reveal answer block
    const card = optionBtn.closest(".question-card");
    const answerToggle = card.querySelector(".answer-toggle");
    if (answerToggle) {
      const answer = answerToggle.nextElementSibling;
      if (answer && answer.hasAttribute("hidden")) {
        answer.removeAttribute("hidden");
        answerToggle.textContent = "Close answer";
      }
    }
    return;
  }

  const button = event.target.closest(".answer-toggle");
  if (!button) return;
  const answer = button.nextElementSibling;
  const isHidden = answer.hasAttribute("hidden");
  if (isHidden) {
    answer.removeAttribute("hidden");
    button.textContent = "Close answer";
  } else {
    answer.setAttribute("hidden", "");
    button.textContent = "See answer";
  }
});
