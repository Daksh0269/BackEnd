import mongoose from 'mongoose';
import dotenv from 'dotenv';
import QuestionBank from './src/models/QuestionBank.js';

dotenv.config();

const seedData = [
 
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