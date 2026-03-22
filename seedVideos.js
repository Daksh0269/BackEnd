import mongoose from 'mongoose';
import 'dotenv/config';
import CuratedVideos from './src/models/CuratedVideos.js';

// The Premium Curated JEE Video Engine Data
const curatedVideos = [
 


  {
    videoId: 'vmgkz9fFyus',
    title: 'Kinematics (Motion in 1D & 2D) One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Master relative motion, projectile on inclined planes, and Rain-Man velocity problems. These are the most common traps in JEE Main.'
  },
  {
    videoId: 'Xs_zRsrQFWI',
    title: 'Laws of Motion & Friction One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Focus on constraint motion, pseudo force in non-inertial frames, and wedge-block systems. Friction problems involving pulleys are frequently asked.'
  },
  {
    videoId: '0t8yDFjsKkM',
    title: 'Work, Energy & Power One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'Work-Energy theorem shortcut is the fastest method. Master variable force work using integration and spring PE = ½kx². Coefficient of restitution in collisions is vital.'
  },
  {
    videoId: 'v2pje4r_q8k',
    title: 'Rotational Motion Complete One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'Focus on MOI of composite bodies using parallel/perpendicular axis theorems. Rolling without slipping: v_cm = Rω. Torque and angular momentum conservation are heavily tested.'
  },
  {
    videoId: 'w7y2JBWNGUI',
    title: 'Gravitation One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Orbital velocity, escape velocity, and binding energy are core. Variation of g with altitude/depth and Kepler\'s laws (especially T² ∝ R³) appear every year.'
  },
  {
    videoId: 'K2W_eMTSZa4',
    title: 'Properties of Matter (Elasticity, Fluid Mechanics, SHM) One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'Bernoulli\'s equation applications (venturimeter, Torricelli\'s theorem) and SHM (spring combinations, pendulum in lifts) are JEE regulars. Viscosity and surface tension also tested.'
  },
  {
    videoId: 'ckTJvPGaS4Q',
    title: 'Simple Harmonic Motion (SHM) One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Energy in SHM (KE + PE = constant), composition of SHM, and springs in series/parallel. Phase difference and phasor diagrams are asked conceptually.'
  },
  {
    videoId: 'nzLWjMuL6Ew',
    title: 'Waves & Sound One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'Standing waves in strings and pipes (organ pipe open/closed). Beats, Doppler effect, and resonance column experiment are high-frequency JEE topics.'
  },
  {
    videoId: 'VuBTKqoEeGk',
    title: 'Thermodynamics & Kinetic Theory One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Derivation of Cp − Cv = R using first law. Efficiency of Carnot engine = 1 − T₂/T₁. Degrees of freedom and mean free path from KTG are vital. PV diagrams for all processes.'
  },
  {
    videoId: 'pn1VqWDHMps',
    title: 'Electrostatics One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Gauss\'s Law (field due to shell, infinite plate), electric potential and potential energy, and capacitor combinations (series/parallel) with dielectrics. Energy stored = ½CV².'
  },
  {
    videoId: 'W2YbUyLqnGI',
    title: 'Current Electricity One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'Kirchhoff\'s laws (complex circuits), Wheatstone bridge, and potentiometer/meter bridge applications. Internal resistance and terminal voltage problems are common.'
  },
  {
    videoId: 'S6Hv9nKuGTs',
    title: 'Magnetic Effects of Current & Magnetism One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Biot-Savart law vs Ampere\'s law applications. Force on a current-carrying conductor in B-field. Motion of a charge in combined E & B fields (cyclotron, velocity selector).'
  },
  {
    videoId: 'ePTSsHgS6mE',
    title: 'Electromagnetic Induction & AC One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Lenz\'s law, motional EMF (e = Blv), and self/mutual inductance. For AC: impedance of LCR circuits, resonance condition, and power factor = cos φ. Transformer ratios.'
  },
  {
    videoId: 'Cg5kJp0YFCQ',
    title: 'Ray Optics & Wave Optics One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Mirror and lens formula with sign convention. Prism deviation formula and TIR. For Wave Optics: YDSE fringe width β = λD/d, thin film interference, and diffraction single slit.'
  },
  {
    videoId: 'dRsYIiheM_E',
    title: 'Modern Physics (Photoelectric, Atomic & Nuclear) One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'Einstein\'s photoelectric equation (KE_max = hν − φ). Bohr model: rₙ = n²a₀, Eₙ = −13.6/n² eV. Nuclear binding energy per nucleon curve and radioactive decay law.'
  },
  {
    videoId: 'b7ZgUeW31vQ',
    title: 'Kinematics & Projectile Motion Masterclass',
    subject: 'Physics',
    channel: 'Eduniti',
    notes: 'Advanced treatment: projectile on inclined planes (range formula) and relative velocity. Rain-Man, river crossing (minimum drift vs minimum time) are must-know problems.'
  },
  {
    videoId: 'YMrXi8mGmCk',
    title: 'Semiconductors & Communication Systems One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'p-n junction diode (forward/reverse bias), Zener as voltage regulator, and transistor (CE configuration, gain β). Logic gates (AND, OR, NOT, NAND, NOR) and Boolean algebra.'
  },
  {
    videoId: '3XNdXSqhPrc',
    title: 'Dual Nature of Radiation & Matter One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'de Broglie wavelength λ = h/mv and its application to electrons in atoms. Work function, threshold frequency, and stopping potential. X-ray production and Bragg\'s law.'
  },
  {
    videoId: 'rWpO0yLIhvg',
    title: 'Electromagnetic Waves One Shot',
    subject: 'Physics',
    channel: 'JEE Wallah',
    notes: 'Displacement current and Ampere-Maxwell law. Properties and spectrum of EM waves. Speed c = 1/√(μ₀ε₀). Energy density, intensity, and radiation pressure — conceptually tested.'
  },
  {
    videoId: 'hQpQ0hxVkQ4',
    title: 'Units, Dimensions & Error Analysis One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah - Alakh Pandey',
    notes: 'Dimensional analysis for deriving formulas and checking homogeneity. Significant figures and error propagation rules (max fractional error in multiplication/division). Least count.'
  },


  // ==============================
  // 🟢 CHEMISTRY (22 Chapters)
  // ==============================

  {
    videoId: 'pX1nJGP_mEo',
    title: 'Mole Concept & Stoichiometry One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Limiting reagent, percentage yield, and concentration terms (molarity, molality, mole fraction). Empirical vs molecular formula derivation is a guaranteed JEE question type.'
  },
  {
    videoId: 'DGPPmNEWaEk',
    title: 'Atomic Structure One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Quantum numbers (n, l, m, s) and their rules. Aufbau, Hund\'s rule, Pauli exclusion principle for electronic configuration. Heisenberg uncertainty principle and de Broglie wavelength for electrons.'
  },
  {
    videoId: 'rdWanHbNzcA',
    title: 'Chemical Bonding: VSEPR, MOT & Hybridization One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Memorize bond orders for diatomic molecules using MOT: O₂ (2), N₂ (3), F₂ (1), NO (2.5). Exceptional geometries: XeF₄ (square planar), SF₆ (octahedral). VSEPR for lone pair repulsion.'
  },
  {
    videoId: '1uKwP0y0rKE',
    title: 'General Organic Chemistry (GOC) Basics One Shot',
    subject: 'Chemistry',
    channel: 'Pankaj Sir Chemistry',
    notes: 'Master priority of +M > +I for electron-donating groups. Acidic strength of substituted phenols (−NO₂ increases, −OH decreases). Stability of carbocations, carbanions, and free radicals.'
  },
  {
    videoId: 'CvJz7vdKMsA',
    title: 'Thermodynamics & Thermochemistry One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Hess\'s law, Kirchhoff\'s law (variation of ΔH with T), and bond enthalpy calculations. For thermodynamics: ΔG = ΔH − TΔS and spontaneity. Standard enthalpy of formation vs combustion.'
  },
  {
    videoId: 'lO0iLRKTStw',
    title: 'Chemical Equilibrium One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Kc vs Kp relationship (Kp = Kc(RT)^Δn). Le Chatelier\'s principle applications and effect of temperature/pressure/concentration. Degree of dissociation and van\'t Hoff factor.'
  },
  {
    videoId: 'HqCpWNvfE4k',
    title: 'Ionic Equilibrium (pH, Buffers, Solubility) One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'pH calculations for strong/weak acids and bases. Henderson-Hasselbalch equation for buffers. Ksp and common ion effect for precipitation. Degree of hydrolysis for salt solutions.'
  },
  {
    videoId: 'K0mZdLFHIHw',
    title: 'Electrochemistry One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Nernst equation: E = E° − (0.0592/n)log Q at 25°C. EMF series, galvanic vs electrolytic cells. Faraday\'s laws of electrolysis (m = ZIt). Kohlrausch\'s law for molar conductivity.'
  },
  {
    videoId: 'DP14RUxSlEE',
    title: 'Chemical Kinetics One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Integrated rate laws for 0th, 1st, 2nd order reactions. Half-life for 1st order: t½ = 0.693/k. Arrhenius equation: k = Ae^(−Ea/RT). Activation energy from log k vs 1/T graph.'
  },
  {
    videoId: 'P0LqbPnXGkw',
    title: 'Solutions & Colligative Properties One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Vapour pressure lowering (Raoult\'s law), elevation in boiling point (ΔTb = Kb × m), and depression in freezing point (ΔTf = Kf × m). Osmotic pressure π = CRT. Abnormal mol. mass.'
  },
  {
    videoId: 'YKAj-9f3CXk',
    title: 'Coordination Compounds One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'IUPAC nomenclature rules (ligands named before metal, use bis/tris for complex ligands). Crystal Field Theory: CFSE calculations and high-spin vs low-spin distinction for d⁴–d⁷ configs.'
  },
  {
    videoId: 'JdU-9dlVoUM',
    title: 'p-Block Elements (Group 13–18) One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Structures of PCl₅, XeF₂, XeF₄, XeOF₄ are very frequently tested. Anomalous behavior of N and O vs P and S. Oxoacids of P and S with oxidation states must be memorized.'
  },
  {
    videoId: 'iqklKWaYJpQ',
    title: 'd & f Block Elements One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Variable oxidation states due to (n−1)d and ns electrons. KMnO₄ reactions in acidic/basic/neutral media. K₂Cr₂O₇ as oxidizing agent. Lanthanoid contraction and its consequences.'
  },
  {
    videoId: 'FvJWVuqDqFM',
    title: 'Hydrocarbons (Alkanes, Alkenes, Alkynes, Aromatic) One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Electrophilic addition to alkenes (Markovnikov\'s rule) vs free radical addition (anti-Markovnikov). EAS mechanism for benzene (directing effects of groups). Acidic nature: alkynes > alkenes > alkanes.'
  },
  {
    videoId: 'GEnJuH81A-Y',
    title: 'Alkyl Halides, Alcohols & Ethers One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'SN1 vs SN2 mechanism (substrate & solvent effects). E1 vs E2 elimination (Zaitsev\'s rule). Lucas test (ZnCl₂/HCl) for primary, secondary, tertiary alcohols is a common MCQ trap.'
  },
  {
    videoId: 'Y7BRkSUkEuY',
    title: 'Carbonyl Compounds (Aldehydes, Ketones, Carboxylic Acids) One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Nucleophilic addition to C=O: mechanism and reactivity order. Aldol condensation, Cannizzaro reaction, and Hell-Volhard-Zelinsky reaction are high-frequency. Acidity of carboxylic acids.'
  },
  {
    videoId: 'abc987xyz65',
    title: 'Amines & Biomolecules One Shot',
    subject: 'Chemistry',
    channel: 'Physics Wallah',
    notes: 'Basicity order of amines (3° > 2° > 1° > NH₃ in gas phase, reversed in water). Diazonium salt reactions (Sandmeyer, Gattermann). For biomolecules: reducing vs non-reducing sugars, peptide bonds.'
  },
  {
    videoId: 'i4flVeJMFGY',
    title: 'Surface Chemistry & States of Matter One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Freundlich and Langmuir adsorption isotherms. Types of colloids, Tyndall effect, and coagulation by electrolytes (Hardy-Schulze rule). Kinetic theory of gases: Maxwell distribution.'
  },
  {
    videoId: 'hkqPaYYMJoU',
    title: 'Environmental & Practical Chemistry One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Qualitative analysis (flame test, precipitate colors). Lassaigne\'s test for N, S, halogens. Environmental: BOD, ozone depletion (CFC mechanism), and green chemistry principles.'
  },
  {
    videoId: 'N-cFtDHQ1Rg',
    title: 's-Block Elements & Hydrogen One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Anomalous properties of Li (resembles Mg) and Be (resembles Al) — diagonal relationship. Solubility and thermal stability trends of carbonates and bicarbonates of alkali/alkaline earth metals.'
  },
  {
    videoId: 'X3vpFHVpNMQ',
    title: 'Solid State & Nuclear Chemistry One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Packing efficiency: SC (52%), BCC (68%), FCC/HCP (74%). Radius ratio rules for ionic solids. Schottky vs Frenkel defects. Radioactive decay series and nuclear reactions (fission/fusion).'
  },
  {
    videoId: 'MjOdqSalxNw',
    title: 'Polymers & Chemistry in Everyday Life One Shot',
    subject: 'Chemistry',
    channel: 'JEE Wallah',
    notes: 'Classification of polymers (addition vs condensation, natural vs synthetic). Common examples: Nylon-6,6 (polyamide), Terylene (polyester), Bakelite (thermosetting). Drug types and their mechanisms.'
  },


  // ==============================
  // 🔴 MATHEMATICS (29 Chapters)
  // ==============================

  {
    videoId: 'XcRlKVIzW4o',
    title: 'Quadratic Equations One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Nature of roots (discriminant analysis), Vieta\'s formulas (sum/product of roots), and quadratic inequalities using wavy curve method. Location of roots relative to a value is very common in JEE Main.'
  },
  {
    videoId: 'tRDEm7KJMiE',
    title: 'Complex Numbers: Geometry & Roots One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Rotation theorem (coni method): multiply by e^{iθ} for rotation. nth roots of unity: sum = 0, product = (−1)^{n+1}. Locus problems on Argand plane and modulus-argument form are JEE favorites.'
  },
  {
    videoId: 'H_7fEaFGYro',
    title: 'Sequences & Series (AP, GP, HP, AGP) One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'AGP sum formula, telescoping sums, and Vn method for denominators in product form. AM-GM-HM inequality applied to minimization/maximization. Sum of special series: Σn, Σn², Σn³.'
  },
  {
    videoId: 'plMkoKinjb9',
    title: 'Permutations & Combinations One Shot',
    subject: 'Mathematics',
    channel: 'Neha Agrawal Mathematically Inclined',
    notes: 'Distribution problems (objects into groups, identical/distinct). Derangements and circular permutations. Multinomial theorem for arrangements with repetition. Stars and bars for non-negative integer solutions.'
  },
  {
    videoId: 'gP0EKdSZa3E',
    title: 'Binomial Theorem One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'General term T_{r+1} = ⁿCᵣ a^{n−r} b^r. Term independent of x, greatest binomial coefficient. Binomial coefficients properties (sum = 2ⁿ, alternating = 0). Multinomial expansion for 3-term binomials.'
  },
  {
    videoId: 'MxZpNNM7Hm8',
    title: 'Statistics (Mean, Variance, Standard Deviation) One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Variance formula: σ² = Σf(x−x̄)²/N = Σfx²/N − (x̄)². Effect of change of origin/scale on mean and variance. Median class and mode for grouped frequency distribution using interpolation formula.'
  },
  {
    videoId: 'ZQnWQdV8h6Y',
    title: 'Matrices One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Matrix multiplication non-commutativity, transpose properties, and symmetric/skew-symmetric decomposition. Adjoint and inverse: A⁻¹ = adj(A)/|A|. Cayley-Hamilton theorem: A satisfies its own characteristic equation.'
  },
  {
    videoId: 'g47dGkk3aV8',
    title: 'Determinants One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Properties of determinants (row/column operations). Cramer\'s rule for 3×3 systems and conditions for consistent/inconsistent systems (D=0 check). adj(A) and |adj A| = |A|^{n−1}.'
  },
  {
    videoId: 'C6OdqQGPHDg',
    title: 'Probability One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Bayes\' theorem: P(A|B) = P(B|A)P(A)/P(B). Binomial distribution: P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ, mean = np, variance = npq. Geometric probability (favorable length/area to total). Conditional probability traps.'
  },
  {
    videoId: 'J2eMxV_C4s4',
    title: 'Sets, Relations & Functions Basics One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Equivalence relations (reflexive, symmetric, transitive — all three must hold). Minimum elements to add to make a relation reflexive/symmetric/transitive. Power set cardinality = 2ⁿ. Relations on Cartesian products.'
  },
  {
    videoId: '5q0UzrwbPuQ',
    title: 'Functions: Domain, Range & Types One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Domain restrictions for log, square root, and inverse trig combinations. Range of rational functions using quadratic discriminant. Injective (one-one), surjective (onto) tests. Periodic functions and composition fog.'
  },
  {
    videoId: 'z4OFKxBn0oU',
    title: 'Limits One Shot',
    subject: 'Mathematics',
    channel: 'Mohit Tyagi',
    notes: 'L\'Hôpital\'s rule for 0/0 and ∞/∞ forms. Standard limits: lim (sinx/x)=1, lim (1+1/x)^x = e. Sandwich theorem and series expansion method. 1^∞ form: e^{lim (f−1)g}. Leibniz rule for differentiation under integral sign.'
  },
  {
    videoId: 'rMgRUjXsM9A',
    title: 'Continuity & Differentiability One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Left-hand and right-hand limits must equal function value for continuity. Differentiability ⟹ continuity (not vice versa). Points of non-differentiability for |f(x)| and [x] (GIF). Rolle\'s and LMVT theorems.'
  },
  {
    videoId: 'Y0B8oMoBFZ4',
    title: 'Differentiation One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Chain rule, product rule, quotient rule for composite functions. Implicit differentiation for curves defined implicitly. Parametric differentiation: dy/dx = (dy/dt)/(dx/dt). Logarithmic differentiation for x^x type.'
  },
  {
    videoId: 'I4qaMoGfpSc',
    title: 'Application of Derivatives One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'First and second derivative tests for maxima/minima. Monotonicity analysis using f\'(x) sign. Tangent and normal equations. Rate of change problems (sphere volume, cone etc.). Angle between two curves.'
  },
  {
    videoId: 'plMkoKinjb9',
    title: 'Definite Integration Properties One Shot',
    subject: 'Mathematics',
    channel: 'Neha Agrawal Mathematically Inclined',
    notes: 'Property 4 (King\'s Rule): ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx is the most tested. Property 7 (periodic): ∫₀^{nT} f = n∫₀^T f. Even/odd function symmetry. Newton-Leibniz for differentiating integrals with variable limits.'
  },
  {
    videoId: 'k5VlZFXNhsc',
    title: 'Indefinite Integration One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Integration by parts (ILATE priority). Standard forms for ∫dx/(x²+a²), ∫dx/√(a²−x²). Euler substitution for irrational integrands. Reduction formulas for ∫sinⁿx dx and ∫cosⁿx dx.'
  },
  {
    videoId: 'n8-J4Gs2GiA',
    title: 'Area Under Curves One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Area between two curves: ∫|f(x)−g(x)|dx. Symmetric area (fold at axis). Area bounded by parabola and chord. videoIdentifying correct limits by finding intersection points first is the key step.'
  },
  {
    videoId: 'A4Wv-MLwCJg',
    title: 'Differential Equations One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Variable separable, homogeneous (substitute y = vx), and linear first-order ODE (integrating factor = e^{∫Pdx}). Bernoulli\'s equation reduction technique. Exact differential equations and formation from families of curves.'
  },
  {
    videoId: 'K4f2bCzrv_A',
    title: 'Straight Lines One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Angle bisector equations, family of lines through intersection point (L₁ + λL₂ = 0). Distance of a point from a line. Image/reflection of a point in a line. Orthocenter, centrovideoId, and circumcenter properties.'
  },
  {
    videoId: 'zaQwsXcdE45',
    title: 'Circles One Shot',
    subject: 'Mathematics',
    channel: 'MathonGo',
    notes: 'Family of circles: S₁ + λS₂ = 0 (radical axis). Common chord condition. Condition for two circles to be orthogonal: 2g₁g₂ + 2f₁f₂ = c₁ + c₂. Tangent from external point length = √S₁₁.'
  },
  {
    videoId: 'yMRxlV4CTNA',
    title: 'Parabola One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Standard parabola y² = 4ax: focus (a, 0), directrix x = −a, tangent: ty = x + at². Focal chord: if one end is (at², 2at), other end has parameter −1/t. Latus rectum = 4a. Normal slope form.'
  },
  {
    videoId: 'UNdItRFj4Xo',
    title: 'Ellipse One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Equation: x²/a² + y²/b² = 1 (a > b). Eccentricity e = c/a where c² = a² − b². Sum of focal distances = 2a. Chord of contact: T = 0 form. Director circle equation: x² + y² = a² + b².'
  },
  {
    videoId: 'H3aBGBjxioE',
    title: 'Hyperbola One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Rectangular hyperbola xy = c²: parametric (ct, c/t). Difference of focal distances = 2a. Asymptotes y = ±(b/a)x. Conjugate hyperbola shares same asymptotes. Eccentricity e > 1 always.'
  },
  {
    videoId: 'WJnfR7n5gKY',
    title: 'Trigonometric Ratios & videoIdentities One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Product-to-sum and sum-to-product formulas. sin 3θ = 3sinθ − 4sin³θ videoIdentity and its use in finding exact values. Conditional videoIdentities when A + B + C = π. Maximum/minimum of a cosθ + b sinθ = ±√(a²+b²).'
  },
  {
    videoId: 'BVSOnv5lFQs',
    title: 'Trigonometric Equations One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'General solutions: sinθ = sinα ⟹ θ = nπ + (−1)ⁿα; cosθ = cosα ⟹ θ = 2nπ ± α; tanθ = tanα ⟹ θ = nπ + α. Always check for extraneous solutions. Parametric substitution for simultaneous trig equations.'
  },
  {
    videoId: 'R-HcLb4TSAU',
    title: 'Inverse Trigonometric Functions One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Principal value ranges: sin⁻¹ in [−π/2, π/2], cos⁻¹ in [0, π], tan⁻¹ in (−π/2, π/2). Key videoIdentities: sin⁻¹x + cos⁻¹x = π/2, tan⁻¹x + cot⁻¹x = π/2. tan⁻¹x + tan⁻¹y formula with condition check.'
  },
  {
    videoId: 'O97r1jASwok',
    title: 'Vector Algebra One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Dot product: a·b = |a||b|cosθ (projection formula). Cross product: |a×b| = |a||b|sinθ (area of parallelogram). Scalar triple product [a b c] = 0 for coplanar vectors. Vector triple product: a×(b×c) = (a·c)b − (a·b)c.'
  },
  {
    videoId: 'mGknMhHfhbM',
    title: '3D Geometry: Lines & Planes One Shot',
    subject: 'Mathematics',
    channel: 'JEE Wallah',
    notes: 'Direction cosines: l² + m² + n² = 1. Skew lines shortest distance formula (important!). Angle between line and plane: sinθ = |l·a + m·b + n·c|/√(a²+b²+c²). Foot of perpendicular from point to plane.'
  },


];

// Execute the Seeding Process
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB Connected for Video Seeding');
    
    try {
      // 1. Wipe all existing documents
      await CuratedVideos.deleteMany({});
      
      // ⚡ 2. THE CURE: Tell MongoDB to delete the old "id" rules!
      await CuratedVideos.collection.dropIndexes();
      console.log('🧹 Cleared old ghost rules from the database.');
      
      // 3. Insert the new array
      await CuratedVideos.insertMany(curatedVideos);
      console.log(`🚀 Successfully seeded ${curatedVideos.length} Curated Videos into the Vault!`);
      
    } catch (error) {
      console.error('❌ Error seeding videos:', error);
    } finally {
      // 4. Close connection
      mongoose.connection.close();
      process.exit();
    }
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });