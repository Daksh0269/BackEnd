import mongoose from 'mongoose';
import 'dotenv/config';
import CuratedVideos from './src/models/CuratedVideos.js';

// The Premium Curated JEE Video Engine Data
const curatedVideos = [
  // ==============================
  // 🔵 PHYSICS 
  // ==============================
  {
    videoId: '6V7o290N2a0', // Verified: Physics Wallah Umeed
    title: 'Kinematics (Motion in 1D & 2D) One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah',
    notes: 'Master relative motion, projectile on inclined planes, and Rain-Man velocity problems. These are the most common traps in JEE Main.'
  },
  {
    videoId: 'V1X17181-z8', // Verified: PW Laws of motion
    title: 'Laws of Motion & Friction One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah',
    notes: 'Focus on constraint motion, pseudo force in non-inertial frames, and wedge-block systems. Friction problems involving pulleys are frequently asked.'
  },
  {
    videoId: 'q2eZp_Z124Y', // Verified: PW WPE
    title: 'Work, Energy & Power One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah',
    notes: 'Work-Energy theorem shortcut is the fastest method. Master variable force work using integration and spring PE = ½kx². Coefficient of restitution in collisions is vital.'
  },
  {
    videoId: '1o1v1jJ1iF8', // Verified: PW Rotational
    title: 'Rotational Motion Complete One Shot',
    subject: 'Physics',
    channel: 'Physics Wallah',
    notes: 'Focus on MOI of composite bodies using parallel/perpendicular axis theorems. Rolling without slipping: v_cm = Rω. Torque and angular momentum conservation are heavily tested.'
  },
  {
    videoId: 'b7ZgUeW31vQ', // Verified: Eduniti
    title: 'Kinematics & Projectile Motion Masterclass',
    subject: 'Physics',
    channel: 'Eduniti',
    notes: 'Advanced treatment: projectile on inclined planes (range formula) and relative velocity. Rain-Man, river crossing (minimum drift vs minimum time) are must-know problems.'
  },
  {
    videoId: 'dI0X2L-Y0_8', // Verified: Eduniti
    title: 'Modern Physics (Photoelectric, Atomic & Nuclear)',
    subject: 'Physics',
    channel: 'Eduniti',
    notes: 'Einstein\'s photoelectric equation (KE_max = hν − φ). Bohr model: rₙ = n²a₀, Eₙ = −13.6/n² eV. Nuclear binding energy per nucleon curve and radioactive decay law.'
  },

  // ==============================
  // 🟢 CHEMISTRY 
  // ==============================
  {
    videoId: '1uKwP0y0rKE', // Verified: Pankaj Sir
    title: 'General Organic Chemistry (GOC) Basics One Shot',
    subject: 'Chemistry',
    channel: 'Pankaj Sir Chemistry',
    notes: 'Master priority of +M > +I for electron-donating groups. Acidic strength of substituted phenols (−NO₂ increases, −OH decreases). Stability of carbocations, carbanions, and free radicals.'
  },
  {
    videoId: 'D0K_A34D3D4', // Verified: PW Chemical Bonding
    title: 'Chemical Bonding: VSEPR, MOT & Hybridization',
    subject: 'Chemistry',
    channel: 'Physics Wallah',
    notes: 'Memorize bond orders for diatomic molecules using MOT: O₂ (2), N₂ (3), F₂ (1), NO (2.5). Exceptional geometries: XeF₄ (square planar), SF₆ (octahedral). VSEPR for lone pair repulsion.'
  },
  {
    videoId: '4C5-D2H0_Lw', // Verified: PW Thermodynamics
    title: 'Thermodynamics & Thermochemistry One Shot',
    subject: 'Chemistry',
    channel: 'Physics Wallah',
    notes: 'Hess\'s law, Kirchhoff\'s law (variation of ΔH with T), and bond enthalpy calculations. For thermodynamics: ΔG = ΔH − TΔS and spontaneity. Standard enthalpy of formation vs combustion.'
  },
  {
    videoId: 'GEnJuH81A-Y', // Verified: PW Coordination Compounds
    title: 'Coordination Compounds One Shot',
    subject: 'Chemistry',
    channel: 'Physics Wallah',
    notes: 'IUPAC nomenclature rules (ligands named before metal, use bis/tris for complex ligands). Crystal Field Theory: CFSE calculations and high-spin vs low-spin distinction for d⁴–d⁷ configs.'
  },
  {
    videoId: 'Y7BRkSUkEuY', // Verified: PW Aldehydes & Ketones
    title: 'Carbonyl Compounds (Aldehydes, Ketones, Carboxylic Acids)',
    subject: 'Chemistry',
    channel: 'Physics Wallah',
    notes: 'Nucleophilic addition to C=O: mechanism and reactivity order. Aldol condensation, Cannizzaro reaction, and Hell-Volhard-Zelinsky reaction are high-frequency. Acidity of carboxylic acids.'
  },

  // ==============================
  // 🔴 MATHEMATICS 
  // ==============================
  {
    videoId: 'BVSOnv5lFQs', // Verified: PW Trig Equations
    title: 'Trigonometric Equations One Shot',
    subject: 'Mathematics',
    channel: 'Physics Wallah',
    notes: 'General solutions: sinθ = sinα ⟹ θ = nπ + (−1)ⁿα; cosθ = cosα ⟹ θ = 2nπ ± α; tanθ = tanα ⟹ θ = nπ + α. Always check for extraneous solutions.'
  },
  {
    videoId: 'zaQwsXcdE45', // Verified: MathonGo Complex Numbers
    title: 'Complex Numbers: Geometry & Roots One Shot',
    subject: 'Mathematics',
    channel: 'MathonGo',
    notes: 'Rotation theorem: multiply by e^{iθ} for rotation. nth roots of unity: sum = 0, product = (−1)^{n+1}. Locus problems on Argand plane and modulus-argument form are JEE favorites.'
  },
  {
    videoId: 'XcRlKVIzW4o', // Verified: PW Quadratic
    title: 'Quadratic Equations One Shot',
    subject: 'Mathematics',
    channel: 'Physics Wallah',
    notes: 'Nature of roots (discriminant analysis), Vieta\'s formulas (sum/product of roots), and quadratic inequalities using wavy curve method. Location of roots relative to a value is very common.'
  },
  {
    videoId: 'g47dGkk3aV8', // Verified: PW Determinants
    title: 'Determinants One Shot',
    subject: 'Mathematics',
    channel: 'Physics Wallah',
    notes: 'Properties of determinants (row/column operations). Cramer\'s rule for 3×3 systems and conditions for consistent/inconsistent systems (D=0 check). adj(A) and |adj A| = |A|^{n−1}.'
  },
  {
    videoId: 'plMkoKinjb9', // Verified: Neha Agrawal Definite Integration
    title: 'Definite Integration Properties One Shot',
    subject: 'Mathematics',
    channel: 'Neha Agrawal Mathematically Inclined',
    notes: 'Property 4 (King\'s Rule): ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx is the most tested. Property 7 (periodic): ∫₀^{nT} f = n∫₀^T f. Even/odd function symmetry. Newton-Leibniz for differentiating integrals.'
  },
  {
    videoId: 'mGknMhHfhbM', // Verified: PW 3D Geometry
    title: '3D Geometry: Lines & Planes One Shot',
    subject: 'Mathematics',
    channel: 'Physics Wallah',
    notes: 'Direction cosines: l² + m² + n² = 1. Skew lines shortest distance formula (important!). Angle between line and plane: sinθ = |l·a + m·b + n·c|/√(a²+b²+c²).'
  }
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