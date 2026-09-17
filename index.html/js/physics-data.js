/* PhysiVault Physics Database */

const ACADEMIC_LEVELS = [
  {
    "id": "class-9",
    "name": "Class 9",
    "subtitle": "Foundations of Motion, Forces & Work",
    "badge": "Secondary",
    "icon": "atom"
  },
  {
    "id": "class-10",
    "name": "Class 10",
    "subtitle": "Current, Light & Magnetic Effects",
    "badge": "Secondary",
    "icon": "zap"
  },
  {
    "id": "class-11",
    "name": "Class 11",
    "subtitle": "Kinematics, Thermodynamics & Waves",
    "badge": "Senior Secondary",
    "icon": "activity"
  },
  {
    "id": "class-12",
    "name": "Class 12",
    "subtitle": "Electrodynamics, Optics & Modern Physics",
    "badge": "Senior Secondary",
    "icon": "radio"
  },
  {
    "id": "btech",
    "name": "B.Tech / Engineering Physics",
    "subtitle": "Applied Electromagnetism, Lasers & Solid State",
    "badge": "Undergraduate",
    "icon": "cpu"
  },
  {
    "id": "bsc",
    "name": "B.Sc. Physics",
    "subtitle": "Classical Fields, Introductory Quantum & Statistical",
    "badge": "Undergraduate",
    "icon": "compass"
  },
  {
    "id": "msc",
    "name": "M.Sc. Physics",
    "subtitle": "Advanced Quantum Mechanics & Statistical Mechanics",
    "badge": "Postgraduate",
    "icon": "layers"
  },
  {
    "id": "phd",
    "name": "Advanced / PhD",
    "subtitle": "General Relativity, QFT & Particle Physics",
    "badge": "Research",
    "icon": "globe"
  }
];

const SUBJECT_CATEGORIES = [
  {
    "id": "mechanics",
    "name": "Mechanics",
    "icon": "compass",
    "desc": "Study of motion, forces, energy, momentum, and rigid body dynamics.",
    "count": 9
  },
  {
    "id": "properties-of-matter",
    "name": "Properties of Matter",
    "icon": "droplet",
    "desc": "Elasticity, surface tension, viscosity, fluid dynamics, and hydrostatics.",
    "count": 3
  },
  {
    "id": "gravitation",
    "name": "Gravitation",
    "icon": "globe",
    "desc": "Universal gravitation, planetary motion, orbital dynamics, and gravitational fields.",
    "count": 2
  },
  {
    "id": "oscillations-waves",
    "name": "Oscillations & Waves",
    "icon": "activity",
    "desc": "Simple harmonic motion, wave mechanics, resonance, and sound acoustics.",
    "count": 2
  },
  {
    "id": "thermodynamics",
    "name": "Thermodynamics",
    "icon": "flame",
    "desc": "Heat transfer, laws of thermodynamics, entropy, and thermodynamic cycles.",
    "count": 3
  },
  {
    "id": "kinetic-theory",
    "name": "Kinetic Theory",
    "icon": "wind",
    "desc": "Microscopic molecular motion, pressure derivation, and degree of freedom.",
    "count": 1
  },
  {
    "id": "electromagnetism",
    "name": "Electromagnetism",
    "icon": "zap",
    "desc": "Maxwell's unified equations, electromagnetic fields, and Poynting vector.",
    "count": 3
  },
  {
    "id": "electrostatics",
    "name": "Electrostatics",
    "icon": "shield",
    "desc": "Electric charges, Coulomb's law, Gauss's law, electric potential, and capacitance.",
    "count": 3
  },
  {
    "id": "current-electricity",
    "name": "Current Electricity",
    "icon": "battery-charging",
    "desc": "Ohm's law, electrical resistance, Kirchhoff's laws, and drift velocity.",
    "count": 3
  },
  {
    "id": "magnetism",
    "name": "Magnetism",
    "icon": "anchor",
    "desc": "Biot-Savart law, Ampere's circuital law, magnetic materials, and dipole moments.",
    "count": 2
  },
  {
    "id": "electromagnetic-induction",
    "name": "Electromagnetic Induction",
    "icon": "refresh-cw",
    "desc": "Faraday's laws, Lenz's law, eddy currents, and self/mutual inductance.",
    "count": 1
  },
  {
    "id": "ac-circuits",
    "name": "AC Circuits",
    "icon": "trending-up",
    "desc": "Alternating current, impedance, RLC resonance, power factor, and phasors.",
    "count": 1
  },
  {
    "id": "optics",
    "name": "Optics",
    "icon": "eye",
    "desc": "Geometrical optics, refraction, diffraction, polarization, and wave optics.",
    "count": 3
  },
  {
    "id": "modern-physics",
    "name": "Modern Physics",
    "icon": "sun",
    "desc": "Photoelectric effect, Compton scattering, de Broglie waves, and quantum dualism.",
    "count": 2
  },
  {
    "id": "quantum-mechanics",
    "name": "Quantum Mechanics",
    "icon": "disc",
    "desc": "Schr\u00f6dinger equations, wavefunctions, eigenvalues, operators, and potential wells.",
    "count": 7
  },
  {
    "id": "relativity",
    "name": "Relativity",
    "icon": "clock",
    "desc": "Special and general relativity, Lorentz transformations, time dilation, and spacetime.",
    "count": 5
  },
  {
    "id": "atomic-physics",
    "name": "Atomic Physics",
    "icon": "target",
    "desc": "Bohr model, hydrogen spectrum, quantum numbers, and electron transitions.",
    "count": 1
  },
  {
    "id": "nuclear-physics",
    "name": "Nuclear Physics",
    "icon": "alert-triangle",
    "desc": "Radioactivity, mass defect, nuclear binding energy, fission, and fusion.",
    "count": 2
  },
  {
    "id": "semiconductor-physics",
    "name": "Semiconductor Physics",
    "icon": "cpu",
    "desc": "Energy bands, intrinsic/extrinsic doping, carrier concentration, and pn junctions.",
    "count": 1
  },
  {
    "id": "solid-state-physics",
    "name": "Solid State Physics",
    "icon": "box",
    "desc": "Crystal lattices, reciprocal lattice, phonons, and Fermi-Dirac distribution in solids.",
    "count": 2
  },
  {
    "id": "statistical-mechanics",
    "name": "Statistical Mechanics",
    "icon": "bar-chart-2",
    "desc": "Microcanonical/canonical ensembles, partition functions, and quantum statistics.",
    "count": 2
  },
  {
    "id": "mathematical-physics",
    "name": "Mathematical Physics",
    "icon": "code",
    "desc": "Vector calculus, Fourier transforms, differential operators, and Green functions.",
    "count": 1
  },
  {
    "id": "particle-physics",
    "name": "Particle Physics",
    "icon": "crosshair",
    "desc": "Quarks, leptons, gauge bosons, Feynman diagrams, and Standard Model.",
    "count": 1
  },
  {
    "id": "electronics",
    "name": "Electronics",
    "icon": "sliders",
    "desc": "Operational amplifiers, logic gates, transistor amplification, and filter circuits.",
    "count": 1
  }
];

const FORMULAS_DATA = [
  {
    "id": "newton-second-law",
    "name": "Newton\u2019s Second Law of Motion",
    "equation": "F = m \u00b7 a",
    "latex": "F = m a",
    "level": "Class 9",
    "subject": "Mechanics",
    "topic": "Laws of Motion",
    "difficulty": "Beginner",
    "explanation": "The rate of change of momentum of a body is directly proportional to the applied unbalanced external force and takes place in the direction of the force. For constant mass, force equals the product of mass and acceleration.",
    "variables": [
      {
        "symbol": "F",
        "name": "Net Force",
        "unit": "N (Newton)",
        "description": "Vector sum of all external forces acting on the object."
      },
      {
        "symbol": "m",
        "name": "Inertial Mass",
        "unit": "kg",
        "description": "Quantitative measure of an object's resistance to acceleration."
      },
      {
        "symbol": "a",
        "name": "Acceleration",
        "unit": "m/s\u00b2",
        "description": "Time rate of change of velocity produced by the net force."
      }
    ],
    "units": {
      "si": "Newton (N) = kg\u00b7m/s\u00b2",
      "dimension": "[M L T\u207b\u00b2]"
    },
    "derivation": "1. Consider a particle of mass m moving with initial velocity u under net force F.\n2. In time t, its velocity becomes v. Momentum change: \u0394p = m\u00b7v - m\u00b7u = m(v - u).\n3. By Newton's Second Law: F \u221d dp/dt = d(mv)/dt.\n4. If mass m is constant: F \u221d m(dv/dt) = m\u00b7a.\n5. Setting the constant of proportionality k = 1 (defining 1 N as the force producing 1 m/s\u00b2 on 1 kg): F = m\u00b7a.",
    "specialCases": [
      {
        "title": "Zero Net Force (Newton's First Law)",
        "condition": "F_net = 0",
        "equation": "a = 0 \u21d2 v = constant",
        "description": "The object continues in its state of rest or uniform motion."
      },
      {
        "title": "Variable Mass System",
        "condition": "dm/dt \u2260 0",
        "equation": "F = m(dv/dt) + v_rel(dm/dt)",
        "description": "Applicable for rocket propulsion and conveyor belts."
      }
    ],
    "applications": [
      "Calculating braking distances and airbag deployment in automotive engineering.",
      "Aerospace trajectory determination and rocket thrust sizing.",
      "Structural load calculations in civil engineering."
    ],
    "relatedFormulas": [
      "momentum-definition",
      "work-energy-theorem",
      "gravitational-force-newton"
    ],
    "calculatorId": "calc-force",
    "tags": [
      "force",
      "mass",
      "acceleration",
      "newton",
      "motion",
      "laws of motion",
      "f=ma"
    ]
  },
  {
    "id": "kinematic-first",
    "name": "First Equation of Motion (Velocity-Time)",
    "equation": "v = u + a \u00b7 t",
    "latex": "v = u + a t",
    "level": "Class 9",
    "subject": "Mechanics",
    "topic": "Rectilinear Motion",
    "difficulty": "Beginner",
    "explanation": "Relates the final velocity of an object experiencing constant acceleration to its initial velocity and the duration of acceleration.",
    "variables": [
      {
        "symbol": "v",
        "name": "Final Velocity",
        "unit": "m/s",
        "description": "Velocity of the body after elapsed time t."
      },
      {
        "symbol": "u",
        "name": "Initial Velocity",
        "unit": "m/s",
        "description": "Velocity of the body at time t = 0."
      },
      {
        "symbol": "a",
        "name": "Constant Acceleration",
        "unit": "m/s\u00b2",
        "description": "Uniform rate of change of velocity."
      },
      {
        "symbol": "t",
        "name": "Time Elapsed",
        "unit": "s",
        "description": "Time interval over which acceleration occurs."
      }
    ],
    "units": {
      "si": "Meter per second (m/s)",
      "dimension": "[L T\u207b\u00b9]"
    },
    "derivation": "1. Uniform acceleration is defined as the rate of change of velocity: a = (v - u) / t.\n2. Multiplying both sides by t: a \u00b7 t = v - u.\n3. Rearranging for final velocity: v = u + a \u00b7 t.",
    "specialCases": [
      {
        "title": "Starts from Rest",
        "condition": "u = 0",
        "equation": "v = a \u00b7 t",
        "description": "Velocity increases directly proportional to time."
      },
      {
        "title": "Free Fall under Gravity",
        "condition": "a = g, u = 0",
        "equation": "v = g \u00b7 t",
        "description": "Speed gained by an object dropped in vacuum."
      }
    ],
    "applications": [
      "Speedometer and telemetry design in vehicles.",
      "Traffic accident reconstruction to calculate impact speeds.",
      "Runway takeoff calculations for commercial aircraft."
    ],
    "relatedFormulas": [
      "kinematic-second",
      "kinematic-third",
      "newton-second-law"
    ],
    "calculatorId": null,
    "tags": [
      "velocity",
      "acceleration",
      "kinematics",
      "motion",
      "speed",
      "time"
    ]
  },
  {
    "id": "kinematic-second",
    "name": "Second Equation of Motion (Position-Time)",
    "equation": "s = u \u00b7 t + \u00bd \u00b7 a \u00b7 t\u00b2",
    "latex": "s = u t + \\frac{1}{2} a t^2",
    "level": "Class 9",
    "subject": "Mechanics",
    "topic": "Rectilinear Motion",
    "difficulty": "Beginner",
    "explanation": "Calculates the total displacement traversed by an object under constant linear acceleration as a function of time and initial velocity.",
    "variables": [
      {
        "symbol": "s",
        "name": "Displacement",
        "unit": "m",
        "description": "Straight-line distance between initial and final positions."
      },
      {
        "symbol": "u",
        "name": "Initial Velocity",
        "unit": "m/s",
        "description": "Starting velocity at t = 0."
      },
      {
        "symbol": "t",
        "name": "Time Elapsed",
        "unit": "s",
        "description": "Total duration of motion."
      },
      {
        "symbol": "a",
        "name": "Acceleration",
        "unit": "m/s\u00b2",
        "description": "Constant acceleration rate."
      }
    ],
    "units": {
      "si": "Meter (m)",
      "dimension": "[L]"
    },
    "derivation": "1. Average velocity during uniform acceleration: v_avg = (u + v) / 2.\n2. Displacement is s = v_avg \u00b7 t = [(u + v) / 2] \u00b7 t.\n3. Substitute v = u + a\u00b7t from the first equation of motion:\n4. s = [(u + (u + a\u00b7t)) / 2] \u00b7 t = [(2u + a\u00b7t) / 2] \u00b7 t = u\u00b7t + \u00bd\u00b7a\u00b7t\u00b2.",
    "specialCases": [
      {
        "title": "Dropped from Rest",
        "condition": "u = 0, a = g",
        "equation": "s = \u00bd g t\u00b2",
        "description": "Distance fallen under gravity from standstill."
      },
      {
        "title": "Zero Acceleration",
        "condition": "a = 0",
        "equation": "s = u \u00b7 t",
        "description": "Uniform rectilinear motion."
      }
    ],
    "applications": [
      "Elevator travel profiling and jerk optimization.",
      "Braking distance estimation under anti-lock braking systems (ABS).",
      "Ballistic trajectory range estimation."
    ],
    "relatedFormulas": [
      "kinematic-first",
      "kinematic-third",
      "projectile-range"
    ],
    "calculatorId": null,
    "tags": [
      "displacement",
      "position",
      "distance",
      "kinematics",
      "motion"
    ]
  },
  {
    "id": "momentum-definition",
    "name": "Linear Momentum",
    "equation": "p = m \u00b7 v",
    "latex": "p = m v",
    "level": "Class 9",
    "subject": "Mechanics",
    "topic": "Momentum & Collisions",
    "difficulty": "Beginner",
    "explanation": "Momentum is the measure of the quantity of motion contained in a body, defined as the product of its mass and velocity vector.",
    "variables": [
      {
        "symbol": "p",
        "name": "Linear Momentum",
        "unit": "kg\u00b7m/s",
        "description": "Vector quantity in direction of velocity."
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kg",
        "description": "Inertial mass of the moving body."
      },
      {
        "symbol": "v",
        "name": "Velocity",
        "unit": "m/s",
        "description": "Instantaneous velocity vector."
      }
    ],
    "units": {
      "si": "kg\u00b7m/s or N\u00b7s",
      "dimension": "[M L T\u207b\u00b9]"
    },
    "derivation": "Direct physical definition introduced by Isaac Newton to quantify inertial quantity of motion. Net external force equals the time derivative of momentum: F = dp/dt.",
    "specialCases": [
      {
        "title": "Conservation of Momentum",
        "condition": "F_ext = 0",
        "equation": "p_total = constant",
        "description": "Total momentum remains invariant in an isolated system."
      },
      {
        "title": "Relativistic Momentum",
        "condition": "v approaching c",
        "equation": "p = \u03b3 m_0 v",
        "description": "Classical equation becomes modified by Lorentz factor \u03b3."
      }
    ],
    "applications": [
      "Crash testing and structural impact absorption in vehicles.",
      "Recoil compensation in firearms and artillery.",
      "Particle physics collision dynamics in colliders."
    ],
    "relatedFormulas": [
      "newton-second-law",
      "de-broglie-wavelength",
      "relativistic-momentum"
    ],
    "calculatorId": null,
    "tags": [
      "momentum",
      "collision",
      "mass",
      "velocity",
      "conservation of momentum"
    ]
  },
  {
    "id": "gravitational-force-newton",
    "name": "Newton\u2019s Law of Universal Gravitation",
    "equation": "F = G \u00b7 (m\u2081 \u00b7 m\u2082) / r\u00b2",
    "latex": "F = G \\frac{m_1 m_2}{r^2}",
    "level": "Class 9",
    "subject": "Gravitation",
    "topic": "Universal Gravitation",
    "difficulty": "Beginner",
    "explanation": "Every particle of matter in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.",
    "variables": [
      {
        "symbol": "F",
        "name": "Gravitational Force",
        "unit": "N",
        "description": "Attractive force along the line connecting mass centers."
      },
      {
        "symbol": "G",
        "name": "Gravitational Constant",
        "unit": "N\u00b7m\u00b2/kg\u00b2",
        "description": "Universal constant: 6.67430 \u00d7 10\u207b\u00b9\u00b9 N\u00b7m\u00b2/kg\u00b2."
      },
      {
        "symbol": "m\u2081",
        "name": "Mass of First Body",
        "unit": "kg",
        "description": "Mass of source object."
      },
      {
        "symbol": "m\u2082",
        "name": "Mass of Second Body",
        "unit": "kg",
        "description": "Mass of attracted object."
      },
      {
        "symbol": "r",
        "name": "Distance between Centers",
        "unit": "m",
        "description": "Separation distance."
      }
    ],
    "units": {
      "si": "Newton (N)",
      "dimension": "[M L T\u207b\u00b2]"
    },
    "derivation": "1. Newton observed planetary accelerations via Kepler's 3rd Law: T\u00b2 \u221d r\u00b3.\n2. Centripetal acceleration a_c = v\u00b2/r = (4\u03c0\u00b2r/T\u00b2) \u221d 1/r\u00b2.\n3. Hence, F \u221d 1/r\u00b2.\n4. By reciprocity and symmetry of interaction: F \u221d m\u2081 and F \u221d m\u2082.\n5. Combining yields F = G(m\u2081 m\u2082) / r\u00b2.",
    "specialCases": [
      {
        "title": "Surface Gravity of Earth",
        "condition": "m\u2081 = M_E, r = R_E",
        "equation": "g = G\u00b7M_E / R_E\u00b2 \u2248 9.81 m/s\u00b2",
        "description": "Acceleration due to gravity near Earth's surface."
      },
      {
        "title": "Escape Velocity",
        "condition": "E_total = 0",
        "equation": "v_esc = \u221a(2GM/R)",
        "description": "Minimum velocity required to escape gravitational binding."
      }
    ],
    "applications": [
      "Satellite orbit planning (geostationary and low-Earth orbit).",
      "Tidal prediction from lunar and solar gravitational attraction.",
      "Exoplanet detection via radial velocity wobble."
    ],
    "relatedFormulas": [
      "acceleration-gravity",
      "kepler-third-law",
      "escape-velocity"
    ],
    "calculatorId": "calc-gravity",
    "tags": [
      "gravity",
      "gravitation",
      "newton",
      "orbit",
      "mass",
      "inverse square law"
    ]
  },
  {
    "id": "work-mechanical",
    "name": "Work Done by a Constant Force",
    "equation": "W = F \u00b7 d \u00b7 cos(\u03b8)",
    "latex": "W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta",
    "level": "Class 9",
    "subject": "Mechanics",
    "topic": "Work and Energy",
    "difficulty": "Beginner",
    "explanation": "Work is defined as the scalar product of force vector and displacement vector. It represents energy transferred to or from an object via the action of force along a displacement.",
    "variables": [
      {
        "symbol": "W",
        "name": "Work Done",
        "unit": "J (Joule)",
        "description": "Scalar quantity of mechanical energy transferred."
      },
      {
        "symbol": "F",
        "name": "Magnitude of Force",
        "unit": "N",
        "description": "Applied force vector magnitude."
      },
      {
        "symbol": "d",
        "name": "Displacement",
        "unit": "m",
        "description": "Displacement over which force acts."
      },
      {
        "symbol": "\u03b8",
        "name": "Angle between F and d",
        "unit": "degrees / rad",
        "description": "Angle between the applied force and the displacement vector."
      }
    ],
    "units": {
      "si": "Joule (J) = N\u00b7m = kg\u00b7m\u00b2/s\u00b2",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. Work is only done by the component of force along the direction of displacement.\n2. Component of F along d is F_parallel = F \u00b7 cos(\u03b8).\n3. Multiplying by displacement distance d gives: W = (F \u00b7 cos \u03b8) \u00b7 d = F \u00b7 d \u00b7 cos(\u03b8).\n4. In vector calculus notation: W = \u222b F \u00b7 dr.",
    "specialCases": [
      {
        "title": "Force in Direction of Motion",
        "condition": "\u03b8 = 0\u00b0 (cos \u03b8 = 1)",
        "equation": "W = F \u00b7 d",
        "description": "Maximum positive work performed on the system."
      },
      {
        "title": "Perpendicular Force",
        "condition": "\u03b8 = 90\u00b0 (cos \u03b8 = 0)",
        "equation": "W = 0",
        "description": "Centripetal force does zero work on circular orbits."
      }
    ],
    "applications": [
      "Mechanical crane motor rating and lifting capacity calculations.",
      "Internal combustion engine stroke energy analysis.",
      "Energy expenditure tracking in biomechanics."
    ],
    "relatedFormulas": [
      "kinetic-energy-classical",
      "power-mechanical",
      "work-energy-theorem"
    ],
    "calculatorId": "calc-work",
    "tags": [
      "work",
      "energy",
      "force",
      "displacement",
      "joule"
    ]
  },
  {
    "id": "kinetic-energy-classical",
    "name": "Kinetic Energy (Classical)",
    "equation": "KE = \u00bd \u00b7 m \u00b7 v\u00b2",
    "latex": "K = \\frac{1}{2} m v^2",
    "level": "Class 9",
    "subject": "Mechanics",
    "topic": "Work and Energy",
    "difficulty": "Beginner",
    "explanation": "Kinetic energy is the work that an object can do by virtue of its state of motion. It is proportional to the mass and the square of velocity.",
    "variables": [
      {
        "symbol": "KE",
        "name": "Kinetic Energy",
        "unit": "J (Joule)",
        "description": "Energy stored in translational motion."
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kg",
        "description": "Inertial mass of the moving object."
      },
      {
        "symbol": "v",
        "name": "Speed / Velocity",
        "unit": "m/s",
        "description": "Magnitude of velocity."
      }
    ],
    "units": {
      "si": "Joule (J) = kg\u00b7m\u00b2/s\u00b2",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. From kinematics: v\u00b2 = u\u00b2 + 2\u00b7a\u00b7s \u21d2 a\u00b7s = (v\u00b2 - u\u00b2) / 2.\n2. Work done on mass m: W = F \u00b7 s = (m \u00b7 a) \u00b7 s = m \u00b7 (a \u00b7 s).\n3. Substituting: W = m \u00b7 (v\u00b2 - u\u00b2) / 2 = \u00bd m v\u00b2 - \u00bd m u\u00b2.\n4. Starting from rest (u = 0), work done equals kinetic energy: KE = \u00bd m v\u00b2.",
    "specialCases": [
      {
        "title": "Momentum Relation",
        "condition": "p = m \u00b7 v",
        "equation": "KE = p\u00b2 / (2m)",
        "description": "Bridges classical mechanics to quantum operator formalism."
      },
      {
        "title": "Relativistic Limit",
        "condition": "v approaching c",
        "equation": "K = (\u03b3 - 1) m c\u00b2",
        "description": "Classical expression underestimates energy at relativistic speeds."
      }
    ],
    "applications": [
      "Vehicle safety crash energy absorption design.",
      "Hydraulic turbine power output estimation from water flow.",
      "Wind turbine kinetic power harvesting (Betz limit)."
    ],
    "relatedFormulas": [
      "work-mechanical",
      "power-mechanical",
      "relativistic-energy"
    ],
    "calculatorId": "calc-ke",
    "tags": [
      "kinetic energy",
      "energy",
      "velocity",
      "speed",
      "mass",
      "ke=1/2mv^2"
    ]
  },
  {
    "id": "power-mechanical",
    "name": "Mechanical Power",
    "equation": "P = W / t = F \u00b7 v",
    "latex": "P = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v}",
    "level": "Class 9",
    "subject": "Mechanics",
    "topic": "Work and Energy",
    "difficulty": "Beginner",
    "explanation": "Power is defined as the time rate at which work is done or energy is transformed. Instantaneously, it equals the dot product of applied force and instantaneous velocity.",
    "variables": [
      {
        "symbol": "P",
        "name": "Power",
        "unit": "W (Watt)",
        "description": "Rate of doing work (1 W = 1 J/s)."
      },
      {
        "symbol": "W",
        "name": "Work Done",
        "unit": "J",
        "description": "Total energy delivered or converted."
      },
      {
        "symbol": "t",
        "name": "Time Taken",
        "unit": "s",
        "description": "Duration over which work is performed."
      },
      {
        "symbol": "v",
        "name": "Velocity",
        "unit": "m/s",
        "description": "Speed of point of force application."
      }
    ],
    "units": {
      "si": "Watt (W) = J/s = kg\u00b7m\u00b2/s\u00b3",
      "dimension": "[M L\u00b2 T\u207b\u00b3]"
    },
    "derivation": "1. Average power: P_avg = \u0394W / \u0394t.\n2. Instantaneous power: P = dW / dt.\n3. Since differential work dW = F \u00b7 dr: P = d(F \u00b7 dr) / dt = F \u00b7 (dr / dt) = F \u00b7 v.",
    "specialCases": [
      {
        "title": "Electrical Power Analogy",
        "condition": "DC Circuits",
        "equation": "P = V \u00b7 I",
        "description": "Rate of electric energy dissipation across a potential drop."
      },
      {
        "title": "Rotational Power",
        "condition": "Rotating shaft",
        "equation": "P = \u03c4 \u00b7 \u03c9",
        "description": "Product of torque \u03c4 and angular velocity \u03c9."
      }
    ],
    "applications": [
      "Electric motor sizing and horsepower rating in engineering.",
      "Automotive dyno testing for peak kilowatt / horsepower curves.",
      "Renewable energy generation monitoring."
    ],
    "relatedFormulas": [
      "work-mechanical",
      "kinetic-energy-classical",
      "electrical-power-joule"
    ],
    "calculatorId": "calc-power",
    "tags": [
      "power",
      "work",
      "energy rate",
      "watt",
      "force",
      "velocity"
    ]
  },
  {
    "id": "wave-velocity-equation",
    "name": "Wave Velocity Relation",
    "equation": "v = f \u00b7 \u03bb",
    "latex": "v = f \\lambda = \\frac{\\lambda}{T}",
    "level": "Class 9",
    "subject": "Oscillations & Waves",
    "topic": "Wave Mechanics",
    "difficulty": "Beginner",
    "explanation": "Fundamental relation connecting the propagation speed of any periodic wave to its frequency and wavelength.",
    "variables": [
      {
        "symbol": "v",
        "name": "Wave Propagation Velocity",
        "unit": "m/s",
        "description": "Speed at which wave phase travels through medium."
      },
      {
        "symbol": "f",
        "name": "Frequency (or \u03bd)",
        "unit": "Hz (Hertz)",
        "description": "Number of complete oscillations passing a point per second."
      },
      {
        "symbol": "\u03bb",
        "name": "Wavelength",
        "unit": "m",
        "description": "Distance between two consecutive identical points of phase."
      }
    ],
    "units": {
      "si": "Meter per second (m/s)",
      "dimension": "[L T\u207b\u00b9]"
    },
    "derivation": "1. A wave advances by one wavelength \u03bb in exactly one period T.\n2. Speed is distance divided by time: v = \u03bb / T.\n3. Since frequency f is the inverse of time period (f = 1 / T):\n4. v = f \u00b7 \u03bb.",
    "specialCases": [
      {
        "title": "Electromagnetic Waves in Vacuum",
        "condition": "Vacuum",
        "equation": "c = f \u00b7 \u03bb = 299,792,458 m/s",
        "description": "Speed of light constant in all inertial frames."
      },
      {
        "title": "Dispersion in Medium",
        "condition": "v = v(f)",
        "equation": "v_phase \u2260 v_group",
        "description": "Different frequencies travel at different phase velocities."
      }
    ],
    "applications": [
      "Tuning radio RF antennas to carrier frequencies.",
      "Medical ultrasound diagnostic imaging depth resolution.",
      "Seismology and earthquake epicenter triangulation."
    ],
    "relatedFormulas": [
      "shm-time-period",
      "de-broglie-wavelength",
      "photon-energy-planck"
    ],
    "calculatorId": "calc-wave",
    "tags": [
      "wave",
      "frequency",
      "wavelength",
      "velocity",
      "sound",
      "light",
      "v=f*lambda"
    ]
  },
  {
    "id": "ohms-law",
    "name": "Ohm\u2019s Law",
    "equation": "V = I \u00b7 R",
    "latex": "V = I R",
    "level": "Class 10",
    "subject": "Current Electricity",
    "topic": "Electric Circuit Fundamentals",
    "difficulty": "Beginner",
    "explanation": "At constant physical conditions (especially temperature), the electric current flowing through a metallic conductor is directly proportional to the potential difference across its terminals.",
    "variables": [
      {
        "symbol": "V",
        "name": "Potential Difference (Voltage)",
        "unit": "V (Volt)",
        "description": "Work done per unit charge between two nodes."
      },
      {
        "symbol": "I",
        "name": "Electric Current",
        "unit": "A (Ampere)",
        "description": "Rate of flow of charge through the cross-section."
      },
      {
        "symbol": "R",
        "name": "Electrical Resistance",
        "unit": "\u03a9 (Ohm)",
        "description": "Opposition offered by conductor to electron flow."
      }
    ],
    "units": {
      "si": "Volt (V) = Joule/Coulomb, Resistance in Ohm (\u03a9)",
      "dimension": "[M L\u00b2 T\u207b\u00b3 I\u207b\u00b9]"
    },
    "derivation": "1. Electric field in conductor: E = V / L.\n2. Drift velocity of conduction electrons: v_d = (e\u00b7E\u00b7\u03c4) / m = (e\u00b7V\u00b7\u03c4) / (m\u00b7L).\n3. Current: I = n\u00b7A\u00b7e\u00b7v_d = [ (n\u00b7e\u00b2\u00b7A\u00b7\u03c4) / (m\u00b7L) ] \u00b7 V.\n4. Therefore: V = [ (m\u00b7L) / (n\u00b7e\u00b2\u00b7A\u00b7\u03c4) ] \u00b7 I = R \u00b7 I, where R = \u03c1\u00b7(L/A).",
    "specialCases": [
      {
        "title": "Short Circuit",
        "condition": "R \u2192 0",
        "equation": "I \u2192 \u221e (practically limited by source impedance)",
        "description": "Extremely high current hazard."
      },
      {
        "title": "Open Circuit",
        "condition": "R \u2192 \u221e",
        "equation": "I = 0",
        "description": "Zero current despite finite voltage."
      }
    ],
    "applications": [
      "Current-limiting resistor sizing in LED and semiconductor circuitry.",
      "Multimeter voltage and resistance measurements.",
      "Electrical grid power load distribution planning."
    ],
    "relatedFormulas": [
      "electrical-resistance-geometry",
      "electrical-power-joule",
      "joule-heating-law"
    ],
    "calculatorId": "calc-ohm",
    "tags": [
      "ohm",
      "ohms law",
      "resistance",
      "current",
      "voltage",
      "potential difference",
      "circuits",
      "power relations"
    ]
  },
  {
    "id": "electrical-resistance-geometry",
    "name": "Resistance of a Conductor",
    "equation": "R = \u03c1 \u00b7 (L / A)",
    "latex": "R = \\rho \\frac{L}{A}",
    "level": "Class 10",
    "subject": "Current Electricity",
    "topic": "Resistivity & Conductance",
    "difficulty": "Beginner",
    "explanation": "The electrical resistance of a uniform cylindrical conductor is directly proportional to its length and inversely proportional to its cross-sectional area, governed by material resistivity \u03c1.",
    "variables": [
      {
        "symbol": "R",
        "name": "Resistance",
        "unit": "\u03a9 (Ohm)",
        "description": "Resistance of conductor specimen."
      },
      {
        "symbol": "\u03c1",
        "name": "Resistivity",
        "unit": "\u03a9\u00b7m",
        "description": "Intrinsic material property dependent on temperature."
      },
      {
        "symbol": "L",
        "name": "Length of Conductor",
        "unit": "m",
        "description": "Path length along current flow direction."
      },
      {
        "symbol": "A",
        "name": "Cross-Sectional Area",
        "unit": "m\u00b2",
        "description": "Area perpendicular to current flow."
      }
    ],
    "units": {
      "si": "Ohm (\u03a9)",
      "dimension": "[M L\u00b2 T\u207b\u00b3 I\u207b\u00b2]"
    },
    "derivation": "1. Slicing conductor into elements in series shows R is proportional to length: R \u221d L.\n2. Placing elements in parallel divides current, showing R is inversely proportional to area: R \u221d 1/A.\n3. Combining: R = \u03c1 \u00b7 (L / A), where constant of proportionality \u03c1 is the resistivity.",
    "specialCases": [
      {
        "title": "Stretching a Wire",
        "condition": "Volume V = A\u00b7L = const, L \u2192 n\u00b7L",
        "equation": "R' = n\u00b2 \u00b7 R",
        "description": "Resistance scales with the square of the elongation ratio."
      },
      {
        "title": "Superconductivity",
        "condition": "T < T_critical",
        "equation": "\u03c1 = 0 \u21d2 R = 0",
        "description": "Zero DC electrical resistance."
      }
    ],
    "applications": [
      "Strain gauges used in aerospace stress telemetry.",
      "Transmission power line wire gauge selection to reduce I\u00b2R drop.",
      "Precision wire-wound potentiometer manufacturing."
    ],
    "relatedFormulas": [
      "ohms-law",
      "electrical-power-joule",
      "drift-velocity-current"
    ],
    "calculatorId": null,
    "tags": [
      "resistance",
      "resistivity",
      "conductor",
      "ohm",
      "geometry",
      "length",
      "area"
    ]
  },
  {
    "id": "electrical-power-joule",
    "name": "Electric Power & Joule Relations",
    "equation": "P = V \u00b7 I = I\u00b2 \u00b7 R = V\u00b2 / R",
    "latex": "P = V I = I^2 R = \\frac{V^2}{R}",
    "level": "Class 10",
    "subject": "Current Electricity",
    "topic": "Electric Power",
    "difficulty": "Beginner",
    "explanation": "Calculates the rate at which electrical energy is converted into other energy forms (such as thermal, mechanical, or electromagnetic) in a circuit element.",
    "variables": [
      {
        "symbol": "P",
        "name": "Electrical Power",
        "unit": "W (Watt)",
        "description": "Energy consumption rate per second."
      },
      {
        "symbol": "V",
        "name": "Potential Difference",
        "unit": "V (Volt)",
        "description": "Voltage dropped across component."
      },
      {
        "symbol": "I",
        "name": "Current",
        "unit": "A (Ampere)",
        "description": "Current passing through component."
      },
      {
        "symbol": "R",
        "name": "Resistance",
        "unit": "\u03a9",
        "description": "Ohmic resistance of the component."
      }
    ],
    "units": {
      "si": "Watt (W) = Volt \u00d7 Ampere",
      "dimension": "[M L\u00b2 T\u207b\u00b3]"
    },
    "derivation": "1. Work done in moving charge Q through potential V is W = V \u00b7 Q.\n2. Power is P = dW/dt = V \u00b7 (dQ/dt) = V \u00b7 I.\n3. Substituting Ohm's Law V = I\u00b7R gives: P = (I\u00b7R)\u00b7I = I\u00b2\u00b7R.\n4. Alternatively substituting I = V/R gives: P = V \u00b7 (V/R) = V\u00b2 / R.",
    "specialCases": [
      {
        "title": "High Voltage Transmission",
        "condition": "Step-up transformer",
        "equation": "P_loss = I\u00b2\u00b7R_line \u221d 1/V\u00b2",
        "description": "Stepping up voltage minimizes line transmission loss."
      },
      {
        "title": "AC RMS Power",
        "condition": "Sinusoidal AC",
        "equation": "P_avg = V_rms \u00b7 I_rms \u00b7 cos(\u03c6)",
        "description": "Includes power factor cos(\u03c6)."
      }
    ],
    "applications": [
      "Domestic electricity billing (kilowatt-hour meters).",
      "Heating element design (electric ovens, toasters, water heaters).",
      "Thermal management and heat sinking in computer processors."
    ],
    "relatedFormulas": [
      "ohms-law",
      "joule-heating-law",
      "power-mechanical"
    ],
    "calculatorId": "calc-ohm",
    "tags": [
      "power",
      "electric power",
      "ohm",
      "voltage",
      "current",
      "joule",
      "watt",
      "power relations"
    ]
  },
  {
    "id": "mirror-formula",
    "name": "Mirror Formula & Magnification",
    "equation": "1/f = 1/v + 1/u ; m = -v/u",
    "latex": "\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} \\quad , \\quad m = -\\frac{v}{u}",
    "level": "Class 10",
    "subject": "Optics",
    "topic": "Geometrical Optics",
    "difficulty": "Beginner",
    "explanation": "Relates object distance u, image distance v, and focal length f for spherical mirrors (concave and convex) under Cartesian sign convention.",
    "variables": [
      {
        "symbol": "f",
        "name": "Focal Length",
        "unit": "m",
        "description": "Distance from pole to principal focus (f = R/2)."
      },
      {
        "symbol": "u",
        "name": "Object Distance",
        "unit": "m",
        "description": "Distance of object from mirror pole."
      },
      {
        "symbol": "v",
        "name": "Image Distance",
        "unit": "m",
        "description": "Distance of image formed from mirror pole."
      },
      {
        "symbol": "m",
        "name": "Lateral Magnification",
        "unit": "dimensionless",
        "description": "Ratio of image height to object height."
      }
    ],
    "units": {
      "si": "Meter (m)",
      "dimension": "[L]"
    },
    "derivation": "1. Using paraxial ray approximation and similar triangles formed by object, image, and center of curvature.\n2. (h_i / h_o) = -(v - R) / (R - u) = -v / u.\n3. Rearranging using R = 2f yields: 1/v + 1/u = 2/R = 1/f.",
    "specialCases": [
      {
        "title": "Object at Center of Curvature",
        "condition": "u = -2f",
        "equation": "v = -2f, m = -1",
        "description": "Real, inverted image of identical size."
      },
      {
        "title": "Convex Mirror Virtual Image",
        "condition": "f > 0, u < 0",
        "equation": "v > 0, 0 < m < 1",
        "description": "Always forms erect, diminished virtual image."
      }
    ],
    "applications": [
      "Automotive rear-view mirrors (wide convex field of view).",
      "Astronomical reflecting telescopes (parabolic primary mirrors).",
      "Solar concentrators and dental concave diagnostic mirrors."
    ],
    "relatedFormulas": [
      "lens-formula",
      "snells-law-refraction"
    ],
    "calculatorId": null,
    "tags": [
      "optics",
      "mirror",
      "focal length",
      "magnification",
      "reflection",
      "light"
    ]
  },
  {
    "id": "snells-law-refraction",
    "name": "Snell\u2019s Law of Refraction",
    "equation": "n\u2081 \u00b7 sin(\u03b8\u2081) = n\u2082 \u00b7 sin(\u03b8\u2082)",
    "latex": "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2",
    "level": "Class 10",
    "subject": "Optics",
    "topic": "Refraction of Light",
    "difficulty": "Beginner",
    "explanation": "Governs the bending of light rays passing through an interface between two isotropic dielectric media having different refractive indices.",
    "variables": [
      {
        "symbol": "n\u2081",
        "name": "Refractive Index of Medium 1",
        "unit": "dimensionless",
        "description": "Phase speed ratio c/v\u2081."
      },
      {
        "symbol": "\u03b8\u2081",
        "name": "Angle of Incidence",
        "unit": "degrees / rad",
        "description": "Angle ray makes with normal at interface."
      },
      {
        "symbol": "n\u2082",
        "name": "Refractive Index of Medium 2",
        "unit": "dimensionless",
        "description": "Phase speed ratio c/v\u2082."
      },
      {
        "symbol": "\u03b8\u2082",
        "name": "Angle of Refraction",
        "unit": "degrees / rad",
        "description": "Angle refracted ray makes with normal."
      }
    ],
    "units": {
      "si": "Dimensionless ratio",
      "dimension": "[1]"
    },
    "derivation": "1. By Fermat's Principle of Least Time: light traverses path minimizing transit time t = (d\u2081/v\u2081) + (d\u2082/v\u2082).\n2. Differentiating time with respect to interface coordinate x and setting dt/dx = 0:\n3. (sin \u03b8\u2081) / v\u2081 = (sin \u03b8\u2082) / v\u2082.\n4. Since v = c/n: n\u2081 \u00b7 sin \u03b8\u2081 = n\u2082 \u00b7 sin \u03b8\u2082.",
    "specialCases": [
      {
        "title": "Total Internal Reflection (TIR)",
        "condition": "n\u2081 > n\u2082, \u03b8\u2081 \u2265 \u03b8_c",
        "equation": "\u03b8_c = \\arcsin(n\u2082 / n\u2081)",
        "description": "Light completely reflects back into denser medium."
      },
      {
        "title": "Normal Incidence",
        "condition": "\u03b8\u2081 = 0\u00b0",
        "equation": "\u03b8\u2082 = 0\u00b0",
        "description": "Ray passes undeflected without bending."
      }
    ],
    "applications": [
      "Fiber-optic telecommunications (total internal reflection cores).",
      "Eyeglass corrective lenses and camera objective design.",
      "Endoscopes in minimally invasive surgery."
    ],
    "relatedFormulas": [
      "mirror-formula",
      "lens-formula",
      "brewsters-law"
    ],
    "calculatorId": null,
    "tags": [
      "snell",
      "refraction",
      "optics",
      "light",
      "refractive index",
      "tir"
    ]
  },
  {
    "id": "projectile-range",
    "name": "Projectile Motion Range & Max Height",
    "equation": "R = (u\u00b2 \u00b7 sin 2\u03b8) / g ; H = (u\u00b2 \u00b7 sin\u00b2\u03b8) / (2g)",
    "latex": "R = \\frac{u^2 \\sin 2\\theta}{g} \\quad , \\quad H = \\frac{u^2 \\sin^2\\theta}{2g}",
    "level": "Class 11",
    "subject": "Mechanics",
    "topic": "Motion in a Plane",
    "difficulty": "Intermediate",
    "explanation": "Formulas describing the horizontal range R, maximum vertical height H, and total time of flight T = (2u sin \u03b8)/g of a projectile in vacuum under uniform gravitational acceleration.",
    "variables": [
      {
        "symbol": "u",
        "name": "Launch Speed",
        "unit": "m/s",
        "description": "Initial velocity magnitude at launch."
      },
      {
        "symbol": "\u03b8",
        "name": "Launch Angle",
        "unit": "degrees / rad",
        "description": "Elevation angle relative to the horizontal ground."
      },
      {
        "symbol": "g",
        "name": "Gravitational Acceleration",
        "unit": "m/s\u00b2",
        "description": "Standard gravitational acceleration (9.81 m/s\u00b2)."
      },
      {
        "symbol": "R",
        "name": "Horizontal Range",
        "unit": "m",
        "description": "Total distance traveled horizontally before landing."
      },
      {
        "symbol": "H",
        "name": "Maximum Height",
        "unit": "m",
        "description": "Peak altitude above ground."
      }
    ],
    "units": {
      "si": "Meter (m)",
      "dimension": "[L]"
    },
    "derivation": "1. Decompose velocity into x and y: u_x = u cos \u03b8, u_y = u sin \u03b8.\n2. At peak height, v_y = 0: 0 = u sin \u03b8 - g \u00b7 t_up \u21d2 t_up = (u sin \u03b8)/g.\n3. Total flight time: T = 2 t_up = (2 u sin \u03b8)/g.\n4. Range: R = u_x \u00b7 T = (u cos \u03b8) \u00b7 [(2 u sin \u03b8)/g] = (u\u00b2 \u00b7 2 sin \u03b8 cos \u03b8)/g = (u\u00b2 sin 2\u03b8)/g.\n5. Max height from v_y\u00b2 = u_y\u00b2 - 2gH: H = (u sin \u03b8)\u00b2 / (2g).",
    "specialCases": [
      {
        "title": "Maximum Range Angle",
        "condition": "sin 2\u03b8 = 1 \u21d2 \u03b8 = 45\u00b0",
        "equation": "R_max = u\u00b2 / g",
        "description": "45 degree launch angle maximizes horizontal distance in vacuum."
      },
      {
        "title": "Complementary Angles",
        "condition": "\u03b8 and (90\u00b0 - \u03b8)",
        "equation": "R(\u03b8) = R(90\u00b0 - \u03b8)",
        "description": "Identical range achieved with high versus low trajectory."
      }
    ],
    "applications": [
      "Ballistics and artillery targeting tables.",
      "Sports projectile biomechanics (golf, basketball, javelin).",
      "Firefighting nozzle trajectory optimization."
    ],
    "relatedFormulas": [
      "kinematic-second",
      "centripetal-force",
      "newton-second-law"
    ],
    "calculatorId": null,
    "tags": [
      "projectile",
      "range",
      "trajectory",
      "flight time",
      "kinematics",
      "angle"
    ]
  },
  {
    "id": "centripetal-force",
    "name": "Centripetal Acceleration & Force",
    "equation": "F_c = (m \u00b7 v\u00b2) / r = m \u00b7 \u03c9\u00b2 \u00b7 r",
    "latex": "F_c = \\frac{m v^2}{r} = m \\omega^2 r",
    "level": "Class 11",
    "subject": "Mechanics",
    "topic": "Circular Motion",
    "difficulty": "Intermediate",
    "explanation": "The inward radial force required to keep an object of mass m moving at speed v in a circular path of radius r.",
    "variables": [
      {
        "symbol": "F_c",
        "name": "Centripetal Force",
        "unit": "N",
        "description": "Inward directed radial force towards circle center."
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kg",
        "description": "Mass of circulating object."
      },
      {
        "symbol": "v",
        "name": "Linear Tangential Speed",
        "unit": "m/s",
        "description": "Instantaneous speed along path tangent."
      },
      {
        "symbol": "r",
        "name": "Radius of Curvature",
        "unit": "m",
        "description": "Distance from rotation center."
      },
      {
        "symbol": "\u03c9",
        "name": "Angular Velocity",
        "unit": "rad/s",
        "description": "Rate of change of angular displacement (v = \u03c9\u00b7r)."
      }
    ],
    "units": {
      "si": "Newton (N)",
      "dimension": "[M L T\u207b\u00b2]"
    },
    "derivation": "1. Position vector: r(t) = r(cos \u03c9t i + sin \u03c9t j).\n2. Velocity vector: v(t) = dr/dt = r\u03c9(-sin \u03c9t i + cos \u03c9t j).\n3. Acceleration: a(t) = dv/dt = -r\u03c9\u00b2(cos \u03c9t i + sin \u03c9t j) = -\u03c9\u00b2 r.\n4. Magnitude of inward acceleration: a_c = \u03c9\u00b2 r = v\u00b2/r.\n5. By Newton's Second Law: F_c = m \u00b7 a_c = (m v\u00b2) / r.",
    "specialCases": [
      {
        "title": "Banked Road (No Friction)",
        "condition": "v_safe",
        "equation": "tan \u03b8 = v\u00b2 / (r \u00b7 g)",
        "description": "Optimum banking angle where normal force supplies full centripetal force."
      },
      {
        "title": "Gravitational Orbit",
        "condition": "F_c = F_grav",
        "equation": "v_orbital = \u221a(GM / r)",
        "description": "Keplerian orbital velocity."
      }
    ],
    "applications": [
      "Highway banked curve design and railway track cant angle.",
      "Centrifuge separator engineering in chemical processing.",
      "Rollercoaster loop track curvature design."
    ],
    "relatedFormulas": [
      "newton-second-law",
      "gravitational-force-newton",
      "angular-momentum-torque"
    ],
    "calculatorId": null,
    "tags": [
      "centripetal",
      "circular motion",
      "acceleration",
      "rotation",
      "angular velocity"
    ]
  },
  {
    "id": "bernoulli-equation",
    "name": "Bernoulli\u2019s Principle",
    "equation": "P + \u00bd \u00b7 \u03c1 \u00b7 v\u00b2 + \u03c1 \u00b7 g \u00b7 h = constant",
    "latex": "P + \\frac{1}{2} \\rho v^2 + \\rho g h = \\text{constant}",
    "level": "Class 11",
    "subject": "Properties of Matter",
    "topic": "Fluid Dynamics",
    "difficulty": "Intermediate",
    "explanation": "Expresses the conservation of mechanical energy for an incompressible, inviscid fluid flowing along a steady streamline. States that an increase in fluid speed occurs simultaneously with a decrease in static pressure or potential energy.",
    "variables": [
      {
        "symbol": "P",
        "name": "Static Pressure",
        "unit": "Pa (Pascal)",
        "description": "Internal thermodynamic fluid pressure."
      },
      {
        "symbol": "\u03c1",
        "name": "Fluid Density",
        "unit": "kg/m\u00b3",
        "description": "Mass per unit volume of fluid."
      },
      {
        "symbol": "v",
        "name": "Flow Velocity",
        "unit": "m/s",
        "description": "Fluid speed along the streamline."
      },
      {
        "symbol": "g",
        "name": "Gravity Acceleration",
        "unit": "m/s\u00b2",
        "description": "Local acceleration due to gravity."
      },
      {
        "symbol": "h",
        "name": "Elevation / Head",
        "unit": "m",
        "description": "Height above reference datum."
      }
    ],
    "units": {
      "si": "Pascal (Pa) = N/m\u00b2 = J/m\u00b3 (Energy density)",
      "dimension": "[M L\u207b\u00b9 T\u207b\u00b2]"
    },
    "derivation": "1. Consider fluid element of volume \u0394V moving from point 1 to point 2 along a streamline.\n2. Work done by pressure forces: W_net = (P\u2081 - P\u2082) \u0394V.\n3. Change in kinetic energy: \u0394K = \u00bd \u03c1 \u0394V (v\u2082\u00b2 - v\u2081\u00b2).\n4. Change in potential energy: \u0394U = \u03c1 \u0394V g (h\u2082 - h\u2081).\n5. By Work-Energy Theorem: W_net = \u0394K + \u0394U.\n6. Dividing through by \u0394V and grouping: P\u2081 + \u00bd\u03c1v\u2081\u00b2 + \u03c1gh\u2081 = P\u2082 + \u00bd\u03c1v\u2082\u00b2 + \u03c1gh\u2082.",
    "specialCases": [
      {
        "title": "Venturi Tube Flow Meter",
        "condition": "h\u2081 = h\u2082",
        "equation": "P\u2081 - P\u2082 = \u00bd \u03c1 (v\u2082\u00b2 - v\u2081\u00b2)",
        "description": "Measures volumetric pipe flow by measuring pressure difference."
      },
      {
        "title": "Torricelli's Law of Efflux",
        "condition": "P\u2081 = P\u2082 = P_atm, v\u2081 \u2248 0",
        "equation": "v_efflux = \u221a(2gh)",
        "description": "Speed of fluid escaping through tank hole."
      }
    ],
    "applications": [
      "Aircraft aerodynamic wing lift analysis.",
      "Carburetor and perfume atomizer aspiration nozzles.",
      "Pitot tubes for airspeed measurement in aviation."
    ],
    "relatedFormulas": [
      "work-mechanical",
      "kinetic-energy-classical"
    ],
    "calculatorId": null,
    "tags": [
      "bernoulli",
      "fluid",
      "pressure",
      "velocity",
      "streamline",
      "lift"
    ]
  },
  {
    "id": "ideal-gas-law",
    "name": "Ideal Gas Equation of State",
    "equation": "P \u00b7 V = n \u00b7 R \u00b7 T = N \u00b7 k_B \u00b7 T",
    "latex": "P V = n R T = N k_B T",
    "level": "Class 11",
    "subject": "Thermodynamics",
    "topic": "Thermal Physics",
    "difficulty": "Intermediate",
    "explanation": "Equation of state of a hypothetical ideal gas that accurately approximates the behavior of real gases at low pressure and high temperature.",
    "variables": [
      {
        "symbol": "P",
        "name": "Absolute Pressure",
        "unit": "Pa",
        "description": "Gas pressure exerted on container walls."
      },
      {
        "symbol": "V",
        "name": "Volume",
        "unit": "m\u00b3",
        "description": "Spatial volume occupied by gas."
      },
      {
        "symbol": "n",
        "name": "Amount of Substance",
        "unit": "mol",
        "description": "Number of moles of gas particles."
      },
      {
        "symbol": "R",
        "name": "Universal Gas Constant",
        "unit": "J/(mol\u00b7K)",
        "description": "R = 8.31446 J/(mol\u00b7K)."
      },
      {
        "symbol": "T",
        "name": "Absolute Temperature",
        "unit": "K (Kelvin)",
        "description": "Thermodynamic temperature."
      },
      {
        "symbol": "k_B",
        "name": "Boltzmann Constant",
        "unit": "J/K",
        "description": "k_B = R/N_A = 1.380649 \u00d7 10\u207b\u00b2\u00b3 J/K."
      }
    ],
    "units": {
      "si": "Joule (J) on both sides (P\u00b7V has dimensions of energy)",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. Boyle's Law: V \u221d 1/P (at constant T, n).\n2. Charles's Law: V \u221d T (at constant P, n).\n3. Avogadro's Law: V \u221d n (at constant P, T).\n4. Combining all three: V \u221d (n\u00b7T)/P \u21d2 P\u00b7V = n\u00b7R\u00b7T.\n5. Kinetic theory of gases also derives P = \u2153 n_v m <v\u00b2>, which gives P\u00b7V = N k_B T when average translational kinetic energy is 3/2 k_B T.",
    "specialCases": [
      {
        "title": "Isothermal Process",
        "condition": "T = const",
        "equation": "P\u2081 V\u2081 = P\u2082 V\u2082",
        "description": "Hyperbolic PV curve."
      },
      {
        "title": "Adiabatic Process",
        "condition": "Q = 0",
        "equation": "P V^\u03b3 = const",
        "description": "Steeper curve governed by heat capacity ratio \u03b3 = C_p/C_v."
      }
    ],
    "applications": [
      "Combustion chamber thermodynamic cycle modeling.",
      "Weather balloon altitude and buoyancy predictions.",
      "HVAC refrigerant gas compression cycles."
    ],
    "relatedFormulas": [
      "first-law-thermo",
      "carnot-efficiency",
      "maxwell-boltzmann-distribution"
    ],
    "calculatorId": null,
    "tags": [
      "gas",
      "thermodynamics",
      "pressure",
      "volume",
      "temperature",
      "ideal gas",
      "pv=nrt"
    ]
  },
  {
    "id": "shm-time-period",
    "name": "Simple Harmonic Motion (Mass-Spring & Pendulum)",
    "equation": "T_spring = 2\u03c0\u221a(m/k) ; T_pendulum = 2\u03c0\u221a(L/g)",
    "latex": "T = 2\\pi \\sqrt{\\frac{m}{k}} \\quad , \\quad T = 2\\pi \\sqrt{\\frac{L}{g}}",
    "level": "Class 11",
    "subject": "Oscillations & Waves",
    "topic": "Simple Harmonic Motion",
    "difficulty": "Intermediate",
    "explanation": "Calculates the oscillation period for linear simple harmonic oscillators where the restoring force is directly proportional to displacement (Hooke's Law / small angle pendulum).",
    "variables": [
      {
        "symbol": "T",
        "name": "Period of Oscillation",
        "unit": "s",
        "description": "Time required for one complete back-and-forth cycle."
      },
      {
        "symbol": "m",
        "name": "Oscillator Mass",
        "unit": "kg",
        "description": "Inertial mass attached to spring."
      },
      {
        "symbol": "k",
        "name": "Spring Constant",
        "unit": "N/m",
        "description": "Stiffness coefficient of spring."
      },
      {
        "symbol": "L",
        "name": "Pendulum String Length",
        "unit": "m",
        "description": "Effective pendulum length to center of bob mass."
      },
      {
        "symbol": "g",
        "name": "Gravity Acceleration",
        "unit": "m/s\u00b2",
        "description": "Local acceleration due to gravity."
      }
    ],
    "units": {
      "si": "Second (s)",
      "dimension": "[T]"
    },
    "derivation": "1. Spring equation: F = -k\u00b7x = m \u00b7 (d\u00b2x/dt\u00b2).\n2. Standard SHM differential equation: d\u00b2x/dt\u00b2 + \u03c9\u00b2\u00b7x = 0, where angular frequency \u03c9 = \u221a(k/m).\n3. Period T = 2\u03c0 / \u03c9 = 2\u03c0 \u00b7 \u221a(m/k).\n4. For a simple pendulum: Restoring torque \u03c4 = -m\u00b7g\u00b7L\u00b7sin \u03b8 \u2248 -m\u00b7g\u00b7L\u00b7\u03b8 for small angles.\n5. I\u00b7(d\u00b2\u03b8/dt\u00b2) = -m\u00b7g\u00b7L\u00b7\u03b8 \u21d2 (m\u00b7L\u00b2)\u00b7\u03b8'' + (m\u00b7g\u00b7L)\u00b7\u03b8 = 0 \u21d2 \u03b8'' + (g/L)\u00b7\u03b8 = 0.\n6. Thus \u03c9 = \u221a(g/L) and T = 2\u03c0 \u00b7 \u221a(L/g).",
    "specialCases": [
      {
        "title": "Damped Oscillation",
        "condition": "Damping factor b > 0",
        "equation": "x(t) = A e^{-\u03b3 t} cos(\u03c9' t + \u03c6)",
        "description": "Amplitude decays exponentially over time."
      },
      {
        "title": "Resonance",
        "condition": "Driving frequency \u03c9_d = \u03c9_0",
        "equation": "Amplitude \u2192 maximum",
        "description": "Large amplitude response when driving matches natural frequency."
      }
    ],
    "applications": [
      "Vehicle suspension tuned mass dampers and shock absorbers.",
      "Tuned mass dampers in skyscrapers (Taipei 101) to resist earthquake sway.",
      "Atomic force microscopy (AFM) cantilever resonance sensing."
    ],
    "relatedFormulas": [
      "wave-velocity-equation",
      "quantum-harmonic-oscillator"
    ],
    "calculatorId": null,
    "tags": [
      "shm",
      "pendulum",
      "spring",
      "oscillation",
      "frequency",
      "period",
      "harmonic"
    ]
  },
  {
    "id": "coulombs-law",
    "name": "Coulomb\u2019s Law",
    "equation": "F = (1 / 4\u03c0\u03b5\u2080) \u00b7 (|q\u2081 \u00b7 q\u2082| / r\u00b2)",
    "latex": "F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}",
    "level": "Class 12",
    "subject": "Electrostatics",
    "topic": "Electric Charges & Fields",
    "difficulty": "Intermediate",
    "explanation": "Quantifies the electrostatic force of attraction or repulsion between two stationary point electrical charges separated by a distance in vacuum.",
    "variables": [
      {
        "symbol": "F",
        "name": "Electrostatic Force",
        "unit": "N",
        "description": "Repulsive for like charges, attractive for opposite."
      },
      {
        "symbol": "q\u2081, q\u2082",
        "name": "Electric Charges",
        "unit": "C (Coulomb)",
        "description": "Magnitudes of interacting point charges."
      },
      {
        "symbol": "r",
        "name": "Separation Distance",
        "unit": "m",
        "description": "Distance between charge centers."
      },
      {
        "symbol": "\u03b5\u2080",
        "name": "Permittivity of Free Space",
        "unit": "F/m",
        "description": "\u03b5\u2080 \u2248 8.854 \u00d7 10\u207b\u00b9\u00b2 F/m, 1/(4\u03c0\u03b5\u2080) \u2248 8.99 \u00d7 10\u2079 N\u00b7m\u00b2/C\u00b2."
      }
    ],
    "units": {
      "si": "Newton (N)",
      "dimension": "[M L T\u207b\u00b2]"
    },
    "derivation": "1. Charles-Augustin de Coulomb verified with a torsion balance that force between charges varies as F \u221d q\u2081 q\u2082 and F \u221d 1/r\u00b2.\n2. In SI units, the constant of proportionality k_e = 1/(4\u03c0\u03b5\u2080).\n3. Vector form: F\u2081\u2082 = [1/(4\u03c0\u03b5\u2080)] [q\u2081 q\u2082 / r\u2081\u2082\u00b2] r\u0302\u2081\u2082.",
    "specialCases": [
      {
        "title": "Dielectric Medium",
        "condition": "Relative permittivity \u03b5_r",
        "equation": "F_med = F_vacuum / \u03b5_r",
        "description": "Electrostatic force is reduced by dielectric shielding factor \u03b5_r."
      },
      {
        "title": "Electric Field of Point Charge",
        "condition": "E = F / q_test",
        "equation": "E = [1 / 4\u03c0\u03b5\u2080] (q / r\u00b2)",
        "description": "Field intensity at distance r."
      }
    ],
    "applications": [
      "Electrostatic precipitation in industrial air scrubbers.",
      "Xerographic photocopiers and laser printers.",
      "Ion trap mass spectrometry in analytical chemistry."
    ],
    "relatedFormulas": [
      "gauss-law-electrostatics",
      "capacitance-parallel-plate",
      "gravitational-force-newton"
    ],
    "calculatorId": null,
    "tags": [
      "coulomb",
      "charge",
      "electrostatics",
      "electric force",
      "permittivity"
    ]
  },
  {
    "id": "gauss-law-electrostatics",
    "name": "Gauss\u2019s Law of Electrostatics",
    "equation": "\u222e E \u00b7 dA = Q_enclosed / \u03b5\u2080",
    "latex": "\\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0} \\quad \\iff \\quad \\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}",
    "level": "Class 12",
    "subject": "Electrostatics",
    "topic": "Electric Flux",
    "difficulty": "Intermediate",
    "explanation": "The total electric flux passing through any closed Gaussian surface is equal to 1/\u03b5\u2080 times the net electric charge enclosed inside the surface.",
    "variables": [
      {
        "symbol": "E",
        "name": "Electric Field Vector",
        "unit": "V/m or N/C",
        "description": "Vector field across the surface."
      },
      {
        "symbol": "dA",
        "name": "Differential Area Vector",
        "unit": "m\u00b2",
        "description": "Outward normal differential surface element."
      },
      {
        "symbol": "Q_enc",
        "name": "Enclosed Charge",
        "unit": "C",
        "description": "Net sum of charges inside closed volume."
      },
      {
        "symbol": "\u03b5\u2080",
        "name": "Permittivity of Free Space",
        "unit": "F/m",
        "description": "8.854 \u00d7 10\u207b\u00b9\u00b2 F/m."
      }
    ],
    "units": {
      "si": "Electric Flux in N\u00b7m\u00b2/C = V\u00b7m",
      "dimension": "[M L\u00b3 T\u207b\u00b3 I\u207b\u00b9]"
    },
    "derivation": "1. Field of point charge: E = (q / 4\u03c0\u03b5\u2080 r\u00b2) r\u0302.\n2. Flux through sphere of radius r: \u03a6 = \u222e E \u00b7 dA = E \u00b7 (4\u03c0r\u00b2) = [(q / 4\u03c0\u03b5\u2080 r\u00b2)] (4\u03c0r\u00b2) = q / \u03b5\u2080.\n3. By divergence theorem: \u222e E \u00b7 dA = \u222b (\u2207 \u00b7 E) dV = \u222b (\u03c1 / \u03b5\u2080) dV.\n4. Hence differential form: \u2207 \u00b7 E = \u03c1 / \u03b5\u2080 (First Maxwell Equation).",
    "specialCases": [
      {
        "title": "Infinite Sheet of Charge",
        "condition": "Uniform surface charge density \u03c3",
        "equation": "E = \u03c3 / (2\u03b5\u2080)",
        "description": "Uniform field independent of distance."
      },
      {
        "title": "Inside Conductor at Equilibrium",
        "condition": "Electrostatic equilibrium",
        "equation": "E = 0",
        "description": "All excess charge resides strictly on external surface."
      }
    ],
    "applications": [
      "Faraday cage electromagnetic shielding design.",
      "Coaxial cable capacitance and breakdown voltage rating.",
      "High-voltage insulator field gradient profiling."
    ],
    "relatedFormulas": [
      "coulombs-law",
      "maxwell-equations-set",
      "capacitance-parallel-plate"
    ],
    "calculatorId": null,
    "tags": [
      "gauss",
      "flux",
      "electric field",
      "maxwell",
      "charge",
      "electrostatics"
    ]
  },
  {
    "id": "capacitance-parallel-plate",
    "name": "Capacitance of a Parallel Plate Capacitor",
    "equation": "C = (\u03b5\u2080 \u00b7 \u03b5_r \u00b7 A) / d",
    "latex": "C = \\frac{\\varepsilon_0 \\varepsilon_r A}{d}",
    "level": "Class 12",
    "subject": "Electrostatics",
    "topic": "Capacitors & Dielectrics",
    "difficulty": "Intermediate",
    "explanation": "Calculates the charge-storing capacity per unit potential difference of two parallel conducting plates separated by a dielectric medium.",
    "variables": [
      {
        "symbol": "C",
        "name": "Capacitance",
        "unit": "F (Farad)",
        "description": "Ratio of stored charge to voltage (Q = C\u00b7V)."
      },
      {
        "symbol": "A",
        "name": "Plate Area",
        "unit": "m\u00b2",
        "description": "Overlapping surface area of plates."
      },
      {
        "symbol": "d",
        "name": "Plate Separation",
        "unit": "m",
        "description": "Thickness of dielectric insulator."
      },
      {
        "symbol": "\u03b5_r",
        "name": "Dielectric Constant (\u03ba)",
        "unit": "dimensionless",
        "description": "Relative permittivity of insulating material."
      }
    ],
    "units": {
      "si": "Farad (F) = Coulomb / Volt",
      "dimension": "[M\u207b\u00b9 L\u207b\u00b2 T\u2074 I\u00b2]"
    },
    "derivation": "1. Uniform electric field between parallel plates with surface charge \u03c3 = Q/A: E = \u03c3 / (\u03b5\u2080 \u03b5_r) = Q / (A \u03b5\u2080 \u03b5_r).\n2. Potential difference between plates: V = E \u00b7 d = (Q \u00b7 d) / (A \u03b5\u2080 \u03b5_r).\n3. By definition of capacitance C = Q / V:\n4. C = Q / [ (Q \u00b7 d) / (A \u03b5\u2080 \u03b5_r) ] = (\u03b5\u2080 \u03b5_r A) / d.",
    "specialCases": [
      {
        "title": "Energy Stored in Capacitor",
        "condition": "Charged to potential V",
        "equation": "U = \u00bd C V\u00b2 = \u00bd Q\u00b2 / C",
        "description": "Energy stored in electric field between plates."
      },
      {
        "title": "Capacitors in Parallel vs Series",
        "condition": "Combinations",
        "equation": "C_par = \u2211 C_i ; 1/C_ser = \u2211 (1/C_i)",
        "description": "Rules for network synthesis."
      }
    ],
    "applications": [
      "Defibrillator high-energy pulse discharge units.",
      "Touchscreen capacitive finger sensing arrays.",
      "Power supply smoothing filter capacitors in AC-to-DC converters."
    ],
    "relatedFormulas": [
      "coulombs-law",
      "gauss-law-electrostatics",
      "rlc-impedance"
    ],
    "calculatorId": null,
    "tags": [
      "capacitor",
      "capacitance",
      "dielectric",
      "electrostatics",
      "charge storage"
    ]
  },
  {
    "id": "faraday-lenz-induction",
    "name": "Faraday\u2019s Law of Electromagnetic Induction",
    "equation": "\u2130 = -d\u03a6_B / dt = -N \u00b7 (d\u03a6_B / dt)",
    "latex": "\\mathcal{E} = -\\frac{d\\Phi_B}{dt} \\quad \\iff \\quad \\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}",
    "level": "Class 12",
    "subject": "Electromagnetic Induction",
    "topic": "Induced EMF & Magnetic Flux",
    "difficulty": "Intermediate",
    "explanation": "The induced electromotive force (EMF) in any closed circuit is equal to the negative rate of change of magnetic flux through the circuit (Lenz's Law ensures conservation of energy).",
    "variables": [
      {
        "symbol": "\u2130",
        "name": "Induced EMF",
        "unit": "V (Volt)",
        "description": "Electromotive force induced around the loop."
      },
      {
        "symbol": "\u03a6_B",
        "name": "Magnetic Flux",
        "unit": "Wb (Weber)",
        "description": "Surface integral of magnetic field: \u03a6_B = \u222b B \u00b7 dA."
      },
      {
        "symbol": "t",
        "name": "Time",
        "unit": "s",
        "description": "Time over which flux changes."
      },
      {
        "symbol": "N",
        "name": "Number of Coil Turns",
        "unit": "dimensionless",
        "description": "Multiplies total flux linkage."
      }
    ],
    "units": {
      "si": "Volt (V) = Weber/second",
      "dimension": "[M L\u00b2 T\u207b\u00b3 I\u207b\u00b9]"
    },
    "derivation": "1. Magnetic flux: \u03a6_B = B \u00b7 A \u00b7 cos \u03b8.\n2. Experiments by Michael Faraday demonstrated EMF \u221d \u0394\u03a6_B / \u0394t.\n3. Heinrich Lenz demonstrated that the induced current creates an opposing magnetic field to resist the flux change (minus sign).\n4. In differential form via Stokes' theorem: \u222e E \u00b7 dl = \u222b (\u2207 \u00d7 E) \u00b7 dA = -d/dt \u222b B \u00b7 dA \u21d2 \u2207 \u00d7 E = -\u2202B/\u2202t.",
    "specialCases": [
      {
        "title": "Motional EMF",
        "condition": "Rod of length L moving at speed v in field B",
        "equation": "\u2130 = B \u00b7 L \u00b7 v",
        "description": "Lorentz force on conduction electrons."
      },
      {
        "title": "AC Generator",
        "condition": "Coil rotating at angular frequency \u03c9",
        "equation": "\u2130(t) = N B A \u03c9 sin(\u03c9t)",
        "description": "Generates sinusoidal alternating voltage."
      }
    ],
    "applications": [
      "Electric power generators in hydro/thermal/nuclear plants.",
      "Electrical transformers for step-up and step-down power transmission.",
      "Wireless induction charging pads for smartphones and EVs."
    ],
    "relatedFormulas": [
      "maxwell-equations-set",
      "rlc-impedance",
      "biot-savart-law"
    ],
    "calculatorId": null,
    "tags": [
      "faraday",
      "induction",
      "emf",
      "flux",
      "lenz",
      "generator",
      "transformer"
    ]
  },
  {
    "id": "rlc-impedance",
    "name": "AC Impedance in Series RLC Circuit",
    "equation": "Z = \u221a(R\u00b2 + (X_L - X_C)\u00b2) ; \u03c9\u2080 = 1 / \u221a(L \u00b7 C)",
    "latex": "Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2} \\quad , \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}",
    "level": "Class 12",
    "subject": "AC Circuits",
    "topic": "Resonance & Impedance",
    "difficulty": "Intermediate",
    "explanation": "Calculates the total opposition (impedance Z) offered by a resistor, inductor, and capacitor connected in series to sinusoidal alternating current, and the resonant frequency \u03c9\u2080 where impedance is minimized.",
    "variables": [
      {
        "symbol": "Z",
        "name": "Total Impedance",
        "unit": "\u03a9 (Ohm)",
        "description": "Complex magnitude ratio V_rms / I_rms."
      },
      {
        "symbol": "R",
        "name": "Ohmic Resistance",
        "unit": "\u03a9",
        "description": "Real dissipative component."
      },
      {
        "symbol": "X_L",
        "name": "Inductive Reactance",
        "unit": "\u03a9",
        "description": "X_L = \u03c9\u00b7L (increases with frequency)."
      },
      {
        "symbol": "X_C",
        "name": "Capacitive Reactance",
        "unit": "\u03a9",
        "description": "X_C = 1 / (\u03c9\u00b7C) (decreases with frequency)."
      },
      {
        "symbol": "\u03c9\u2080",
        "name": "Resonant Angular Frequency",
        "unit": "rad/s",
        "description": "Frequency where reactances cancel out."
      }
    ],
    "units": {
      "si": "Ohm (\u03a9)",
      "dimension": "[M L\u00b2 T\u207b\u00b3 I\u207b\u00b2]"
    },
    "derivation": "1. In phasor domain: V = V_R + V_L + V_C = I \u00b7 [ R + j(\u03c9L - 1/(\u03c9C)) ].\n2. Complex impedance: Z_complex = R + j(X_L - X_C).\n3. Magnitude: |Z| = \u221a(R\u00b2 + (X_L - X_C)\u00b2).\n4. Resonance condition: X_L = X_C \u21d2 \u03c9L = 1/(\u03c9C) \u21d2 \u03c9\u2080\u00b2 = 1/(LC) \u21d2 \u03c9\u2080 = 1/\u221a(LC).",
    "specialCases": [
      {
        "title": "Electrical Resonance",
        "condition": "X_L = X_C",
        "equation": "Z_min = R ; I_max = V / R",
        "description": "Circuit is purely resistive; current amplitude is maximum."
      },
      {
        "title": "Quality Factor (Q)",
        "condition": "Sharpness of resonance",
        "equation": "Q = (\u03c9\u2080 L) / R = [1/R] \u221a(L/C)",
        "description": "Higher Q gives narrower bandpass selectivity."
      }
    ],
    "applications": [
      "Radio and TV receiver tuner circuits to select target station broadcast frequencies.",
      "Power factor correction capacitor banks in industrial plants.",
      "Electronic bandpass, lowpass, and highpass signal filters."
    ],
    "relatedFormulas": [
      "ohms-law",
      "capacitance-parallel-plate",
      "faraday-lenz-induction"
    ],
    "calculatorId": null,
    "tags": [
      "rlc",
      "impedance",
      "ac circuits",
      "resonance",
      "inductor",
      "capacitor",
      "reactance"
    ]
  },
  {
    "id": "photoelectric-einstein",
    "name": "Einstein\u2019s Photoelectric Equation",
    "equation": "E_photon = h \u00b7 \u03bd = \u03a6 + KE_max",
    "latex": "h\\nu = \\Phi + K_{\\text{max}} = h\\nu_0 + \\frac{1}{2} m v_{\\text{max}}^2",
    "level": "Class 12",
    "subject": "Modern Physics",
    "topic": "Dual Nature of Radiation",
    "difficulty": "Intermediate",
    "explanation": "Explains the emission of electrons from a metallic surface upon absorption of electromagnetic radiation: energy of incident photon equals the work function \u03a6 plus the maximum kinetic energy of emitted photoelectrons.",
    "variables": [
      {
        "symbol": "h",
        "name": "Planck Constant",
        "unit": "J\u00b7s",
        "description": "Fundamental quantum of action: 6.626 \u00d7 10\u207b\u00b3\u2074 J\u00b7s."
      },
      {
        "symbol": "\u03bd (nu)",
        "name": "Frequency of Incident Photon",
        "unit": "Hz",
        "description": "Frequency of incident light (c/\u03bb)."
      },
      {
        "symbol": "\u03a6",
        "name": "Work Function of Metal",
        "unit": "J or eV",
        "description": "Minimum energy required to free an electron from metal surface (\u03a6 = h \u03bd\u2080)."
      },
      {
        "symbol": "KE_max",
        "name": "Maximum Kinetic Energy",
        "unit": "J or eV",
        "description": "KE_max = e \u00b7 V_stop (where V_stop is stopping potential)."
      }
    ],
    "units": {
      "si": "Joule (J) or Electron-Volt (1 eV = 1.602 \u00d7 10\u207b\u00b9\u2079 J)",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. Max Planck proposed energy quantization in cavity radiation: E = n h \u03bd.\n2. Albert Einstein extended this to light itself, proposing light exists as localized packets (photons) of energy E = h \u03bd.\n3. A single photon imparts its entire energy to a single conduction electron.\n4. Energy \u03a6 is consumed overcoming surface binding forces.\n5. The remainder manifests as kinetic energy: h \u03bd = \u03a6 + KE_max.",
    "specialCases": [
      {
        "title": "Threshold Frequency",
        "condition": "KE_max = 0",
        "equation": "\u03bd_threshold = \u03a6 / h",
        "description": "Below this frequency, no electrons are emitted regardless of light intensity."
      },
      {
        "title": "Stopping Potential Relation",
        "condition": "KE_max = e V_0",
        "equation": "e V_0 = h \u03bd - \u03a6",
        "description": "Linear slope of V_0 vs \u03bd equals h/e."
      }
    ],
    "applications": [
      "Photovoltaic solar cells converting sunlight to electrical power.",
      "Photomultiplier tubes (PMT) in particle astrophysics and medical PET scans.",
      "Night vision image intensifiers and light meters."
    ],
    "relatedFormulas": [
      "photon-energy-planck",
      "de-broglie-wavelength",
      "bohr-hydrogen-energy"
    ],
    "calculatorId": "calc-photon",
    "tags": [
      "photoelectric",
      "einstein",
      "photon",
      "work function",
      "modern physics",
      "planck"
    ]
  },
  {
    "id": "de-broglie-wavelength",
    "name": "de Broglie Wavelength",
    "equation": "\u03bb = h / p = h / (m \u00b7 v)",
    "latex": "\\lambda = \\frac{h}{p} = \\frac{h}{m v} = \\frac{h}{\\sqrt{2 m E}}",
    "level": "Class 12",
    "subject": "Modern Physics",
    "topic": "Matter Waves",
    "difficulty": "Intermediate",
    "explanation": "Louis de Broglie hypothesized that all matter exhibits wave-like properties; the matter wavelength \u03bb of any particle is inversely proportional to its linear momentum p.",
    "variables": [
      {
        "symbol": "\u03bb",
        "name": "de Broglie Wavelength",
        "unit": "m",
        "description": "Wavelength of the matter wave associated with particle."
      },
      {
        "symbol": "h",
        "name": "Planck Constant",
        "unit": "J\u00b7s",
        "description": "6.62607 \u00d7 10\u207b\u00b3\u2074 J\u00b7s."
      },
      {
        "symbol": "p",
        "name": "Linear Momentum",
        "unit": "kg\u00b7m/s",
        "description": "Momentum of the particle (m\u00b7v)."
      },
      {
        "symbol": "m",
        "name": "Particle Mass",
        "unit": "kg",
        "description": "Inertial mass of the particle."
      },
      {
        "symbol": "E",
        "name": "Kinetic Energy",
        "unit": "J",
        "description": "E = p\u00b2 / (2m) for non-relativistic motion."
      }
    ],
    "units": {
      "si": "Meter (m) or Angstrom (\u00c5)",
      "dimension": "[L]"
    },
    "derivation": "1. For a photon: E = h \u03bd = h c / \u03bb and from relativity E = p c.\n2. Equating: p c = h c / \u03bb \u21d2 p = h / \u03bb \u21d2 \u03bb = h / p.\n3. De Broglie postulated that this relationship holds universally for matter particles (electrons, protons, atoms) as well as light.\n4. Substituting p = m\u00b7v gives \u03bb = h / (m v).\n5. In terms of kinetic energy E = p\u00b2/(2m) \u21d2 p = \u221a(2mE) \u21d2 \u03bb = h / \u221a(2mE).",
    "specialCases": [
      {
        "title": "Thermal de Broglie Wavelength",
        "condition": "E = 3/2 k_B T",
        "equation": "\u03bb_th = h / \u221a(3 m k_B T)",
        "description": "Quantum degeneracy occurs when interparticle spacing approaches \u03bb_th."
      },
      {
        "title": "Relativistic Particles",
        "condition": "High energy",
        "equation": "\u03bb = h c / \u221a(E\u00b2 - m\u2080\u00b2 c\u2074)",
        "description": "Relativistic momentum substitution."
      }
    ],
    "applications": [
      "Transmission Electron Microscopes (TEM) achieving sub-angstrom atomic resolution.",
      "Electron diffraction (Davisson-Germer experiment) validating quantum mechanics.",
      "Neutron scattering crystallography for probing crystal structures."
    ],
    "relatedFormulas": [
      "photoelectric-einstein",
      "schrodinger-time-independent",
      "heisenberg-uncertainty"
    ],
    "calculatorId": "calc-debroglie",
    "tags": [
      "de broglie",
      "matter wave",
      "wavelength",
      "momentum",
      "quantum",
      "planck"
    ]
  },
  {
    "id": "bohr-hydrogen-energy",
    "name": "Bohr Model Energy Quantization",
    "equation": "E_n = -13.6 eV / n\u00b2 = -(m \u00b7 e\u2074) / (8 \u03b5\u2080\u00b2 h\u00b2 n\u00b2)",
    "latex": "E_n = -\\frac{13.6\\text{ eV}}{n^2} = -\\frac{m_e e^4}{8 \\varepsilon_0^2 h^2 n^2}",
    "level": "Class 12",
    "subject": "Atomic Physics",
    "topic": "Hydrogen Atom",
    "difficulty": "Intermediate",
    "explanation": "Calculates the discrete, quantized energy levels of the electron in a hydrogen-like atom characterized by principal quantum number n.",
    "variables": [
      {
        "symbol": "E_n",
        "name": "Energy of n-th Orbit",
        "unit": "eV or J",
        "description": "Negative sign denotes a bound state."
      },
      {
        "symbol": "n",
        "name": "Principal Quantum Number",
        "unit": "integer (1, 2, 3...)",
        "description": "Orbital shell index (n=1 is ground state)."
      },
      {
        "symbol": "m_e",
        "name": "Electron Mass",
        "unit": "kg",
        "description": "9.109 \u00d7 10\u207b\u00b3\u00b9 kg."
      },
      {
        "symbol": "e",
        "name": "Elementary Charge",
        "unit": "C",
        "description": "1.602 \u00d7 10\u207b\u00b9\u2079 C."
      }
    ],
    "units": {
      "si": "Electron-Volt (eV) or Joule (J)",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. Bohr's quantization postulate: Angular momentum L = m v r = n \u0127 = n (h / 2\u03c0).\n2. Coulomb attraction provides centripetal force: (m v\u00b2) / r = (1/4\u03c0\u03b5\u2080) (e\u00b2 / r\u00b2).\n3. Solving for radius gives Bohr radius: r_n = [4\u03c0\u03b5\u2080 \u0127\u00b2 / (m e\u00b2)] n\u00b2 = a\u2080 n\u00b2 (a\u2080 \u2248 0.529 \u00c5).\n4. Total energy E = KE + PE = \u00bd m v\u00b2 - (1/4\u03c0\u03b5\u2080) (e\u00b2 / r) = -\u00bd (1/4\u03c0\u03b5\u2080) (e\u00b2 / r).\n5. Substituting r_n yields: E_n = - [m e\u2074 / (8 \u03b5\u2080\u00b2 h\u00b2)] (1 / n\u00b2) = -13.6 eV / n\u00b2.",
    "specialCases": [
      {
        "title": "Ionization Energy",
        "condition": "Transition from n = 1 to n = \u221e",
        "equation": "E_ionize = +13.6 eV",
        "description": "Energy required to liberate electron from ground state."
      },
      {
        "title": "Rydberg Spectral Lines",
        "condition": "Transition n\u2082 \u2192 n\u2081",
        "equation": "1/\u03bb = R_H (1/n\u2081\u00b2 - 1/n\u2082\u00b2)",
        "description": "Lyman, Balmer, Paschen series spectral emissions."
      }
    ],
    "applications": [
      "Astronomical spectroscopy identifying hydrogen abundance in distant stars.",
      "Gas discharge neon and sodium vapor lamp lighting design.",
      "Quantum dot semiconductor emission tuning."
    ],
    "relatedFormulas": [
      "photoelectric-einstein",
      "de-broglie-wavelength",
      "schrodinger-time-independent"
    ],
    "calculatorId": null,
    "tags": [
      "bohr",
      "hydrogen",
      "energy levels",
      "rydberg",
      "quantum number",
      "atomic physics"
    ]
  },
  {
    "id": "maxwell-equations-set",
    "name": "Maxwell\u2019s Equations (Differential & Integral)",
    "equation": "\u2207\u00b7E = \u03c1/\u03b5\u2080 ; \u2207\u00b7B = 0 ; \u2207\u00d7E = -\u2202B/\u2202t ; \u2207\u00d7B = \u03bc\u2080J + \u03bc\u2080\u03b5\u2080(\u2202E/\u2202t)",
    "latex": "\\begin{aligned} \\nabla \\cdot \\vec{E} &= \\frac{\\rho}{\\varepsilon_0} & \\oint \\vec{E} \\cdot d\\vec{A} &= \\frac{Q_{\\text{enc}}}{\\varepsilon_0} \\\\ \\nabla \\cdot \\vec{B} &= 0 & \\oint \\vec{B} \\cdot d\\vec{A} &= 0 \\\\ \\nabla \\times \\vec{E} &= -\\frac{\\partial \\vec{B}}{\\partial t} & \\oint \\vec{E} \\cdot d\\vec{l} &= -\\frac{d\\Phi_B}{dt} \\\\ \\nabla \\times \\vec{B} &= \\mu_0 \\vec{J} + \\mu_0\\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t} & \\oint \\vec{B} \\cdot d\\vec{l} &= \\mu_0 I_{\\text{enc}} + \\mu_0\\varepsilon_0 \\frac{d\\Phi_E}{dt} \\end{aligned}",
    "level": "B.Tech / Engineering Physics",
    "subject": "Electromagnetism",
    "topic": "Classical Electrodynamics",
    "difficulty": "Advanced",
    "explanation": "The four foundational equations of classical electromagnetism that unify electricity, magnetism, and light. Formulated by James Clerk Maxwell, adding the displacement current term \u03bc\u2080\u03b5\u2080(\u2202E/\u2202t).",
    "variables": [
      {
        "symbol": "E",
        "name": "Electric Field",
        "unit": "V/m",
        "description": "Vector electric force field."
      },
      {
        "symbol": "B",
        "name": "Magnetic Flux Density",
        "unit": "T (Tesla)",
        "description": "Vector magnetic field."
      },
      {
        "symbol": "\u03c1",
        "name": "Free Charge Density",
        "unit": "C/m\u00b3",
        "description": "Charge per unit volume."
      },
      {
        "symbol": "J",
        "name": "Current Density",
        "unit": "A/m\u00b2",
        "description": "Conduction current per unit cross-sectional area."
      },
      {
        "symbol": "\u03b5\u2080, \u03bc\u2080",
        "name": "Vacuum Permittivity & Permeability",
        "unit": "F/m, H/m",
        "description": "Determines light speed: c = 1/\u221a(\u03bc\u2080\u03b5\u2080)."
      }
    ],
    "units": {
      "si": "Coupled Field Equations",
      "dimension": "Mixed electromagnetic dimensions"
    },
    "derivation": "1. Gauss's Law (Electrostatics): \u2207 \u00b7 E = \u03c1/\u03b5\u2080.\n2. Gauss's Law (Magnetism): No magnetic monopoles exist, hence \u2207 \u00b7 B = 0.\n3. Faraday's Law: Time-varying magnetic fields create curling electric fields: \u2207 \u00d7 E = -\u2202B/\u2202t.\n4. Ampere's circuital law had \u2207 \u00d7 B = \u03bc\u2080 J. But taking divergence yields \u2207 \u00b7 (\u2207 \u00d7 B) = 0 = \u03bc\u2080(\u2207 \u00b7 J), which violates charge conservation \u2207 \u00b7 J = -\u2202\u03c1/\u2202t.\n5. Maxwell resolved this inconsistency by adding the displacement current: J_D = \u03b5\u2080(\u2202E/\u2202t), giving \u2207 \u00d7 B = \u03bc\u2080 J + \u03bc\u2080\u03b5\u2080(\u2202E/\u2202t).",
    "specialCases": [
      {
        "title": "Electromagnetic Wave in Vacuum",
        "condition": "\u03c1 = 0, J = 0",
        "equation": "\u2207\u00b2E = (1/c\u00b2) \u2202\u00b2E/\u2202t\u00b2 ; c = 1/\u221a(\u03bc\u2080\u03b5\u2080)",
        "description": "Predicted the wave nature of light directly from electromagnetic constants."
      },
      {
        "title": "Poynting Vector Energy Flow",
        "condition": "Energy transport",
        "equation": "S = (1/\u03bc\u2080) (E \u00d7 B)",
        "description": "Direction and rate of electromagnetic energy transfer per unit area."
      }
    ],
    "applications": [
      "Antenna and wireless communications (5G, Wi-Fi, radar).",
      "Microwave waveguides and fiber optic transmission lines.",
      "Electromagnetic compatibility (EMC) and shielding."
    ],
    "relatedFormulas": [
      "poynting-vector",
      "wave-equation-em",
      "faraday-lenz-induction",
      "gauss-law-electrostatics"
    ],
    "calculatorId": null,
    "tags": [
      "maxwell",
      "electromagnetism",
      "displacement current",
      "gauss",
      "faraday",
      "ampere",
      "curl",
      "divergence"
    ]
  },
  {
    "id": "poynting-vector",
    "name": "Poynting Vector",
    "equation": "S = (1 / \u03bc\u2080) \u00b7 (E \u00d7 B)",
    "latex": "\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})",
    "level": "B.Tech / Engineering Physics",
    "subject": "Electromagnetism",
    "topic": "EM Energy Transport",
    "difficulty": "Advanced",
    "explanation": "Represents the directional energy flux density (rate of energy transfer per unit area) of an electromagnetic field.",
    "variables": [
      {
        "symbol": "S",
        "name": "Poynting Vector",
        "unit": "W/m\u00b2",
        "description": "Power per unit area transported by EM wave."
      },
      {
        "symbol": "E",
        "name": "Electric Field Vector",
        "unit": "V/m",
        "description": "Electric field component."
      },
      {
        "symbol": "B",
        "name": "Magnetic Field Vector",
        "unit": "T",
        "description": "Magnetic field component."
      },
      {
        "symbol": "\u03bc\u2080",
        "name": "Vacuum Permeability",
        "unit": "H/m",
        "description": "4\u03c0 \u00d7 10\u207b\u2077 H/m."
      }
    ],
    "units": {
      "si": "Watt per square meter (W/m\u00b2)",
      "dimension": "[M T\u207b\u00b3]"
    },
    "derivation": "1. Rate of work done on charges: -\u222b J \u00b7 E dV.\n2. Using Maxwell's equation J = (1/\u03bc\u2080) \u2207 \u00d7 B - \u03b5\u2080 \u2202E/\u2202t.\n3. Vector identity: \u2207 \u00b7 (E \u00d7 B) = B \u00b7 (\u2207 \u00d7 E) - E \u00b7 (\u2207 \u00d7 B).\n4. Substituting \u2207 \u00d7 E = -\u2202B/\u2202t leads to Poynting's theorem: -\u2202u_em/\u2202t = \u2207 \u00b7 S + J \u00b7 E, where S = (1/\u03bc\u2080)(E \u00d7 B) and u_em = \u00bd(\u03b5\u2080E\u00b2 + B\u00b2/\u03bc\u2080).",
    "specialCases": [
      {
        "title": "Time-Averaged Intensity",
        "condition": "Plane harmonic wave",
        "equation": "<S> = \u00bd c \u03b5\u2080 E\u2080\u00b2 = E\u2080\u00b2 / (2 \u03bc\u2080 c)",
        "description": "Average optical irradiance of laser or sunlight."
      },
      {
        "title": "Radiation Pressure",
        "condition": "Full absorption",
        "equation": "P_rad = <S> / c",
        "description": "Pressure exerted by solar photons on solar sails."
      }
    ],
    "applications": [
      "Solar radiation pressure propulsion for deep space probes.",
      "Laser beam intensity profiling and laser machining.",
      "Cellular base station RF radiation exposure safety limits."
    ],
    "relatedFormulas": [
      "maxwell-equations-set",
      "wave-equation-em",
      "photon-energy-planck"
    ],
    "calculatorId": null,
    "tags": [
      "poynting",
      "radiation",
      "energy flux",
      "electromagnetism",
      "irradiance",
      "laser"
    ]
  },
  {
    "id": "braggs-law",
    "name": "Bragg\u2019s Law of X-ray Diffraction",
    "equation": "2 \u00b7 d \u00b7 sin(\u03b8) = n \u00b7 \u03bb",
    "latex": "2 d \\sin\\theta = n \\lambda",
    "level": "B.Tech / Engineering Physics",
    "subject": "Solid State Physics",
    "topic": "Crystal Structure & Diffraction",
    "difficulty": "Intermediate",
    "explanation": "Determines the angles for coherent and constructive scattering of X-rays from lattice planes in a crystal separated by interplanar distance d.",
    "variables": [
      {
        "symbol": "d",
        "name": "Interplanar Spacing",
        "unit": "m or \u00c5",
        "description": "Distance between adjacent parallel atomic planes."
      },
      {
        "symbol": "\u03b8",
        "name": "Bragg Glancing Angle",
        "unit": "degrees / rad",
        "description": "Angle between incident X-ray beam and crystal plane."
      },
      {
        "symbol": "n",
        "name": "Diffraction Order",
        "unit": "integer (1, 2, 3...)",
        "description": "Integer order of reflection."
      },
      {
        "symbol": "\u03bb",
        "name": "X-ray Wavelength",
        "unit": "m or \u00c5",
        "description": "Wavelength of incident monochromatic radiation."
      }
    ],
    "units": {
      "si": "Meter (m)",
      "dimension": "[L]"
    },
    "derivation": "1. Incident rays reflect specularly from successive parallel crystal planes.\n2. Ray reflecting from second plane travels extra path: \u0394x = d sin \u03b8 + d sin \u03b8 = 2d sin \u03b8.\n3. For constructive interference, the path difference must be an integral number of wavelengths: \u0394x = n \u03bb.\n4. Therefore: 2 d sin \u03b8 = n \u03bb.",
    "specialCases": [
      {
        "title": "Cubic Lattice Spacing",
        "condition": "Lattice parameter a, Miller indices (hkl)",
        "equation": "d = a / \u221a(h\u00b2 + k\u00b2 + l\u00b2)",
        "description": "Connects geometric spacing to crystal unit cell dimensions."
      },
      {
        "title": "Maximum Wavelength",
        "condition": "sin \u03b8 \u2264 1",
        "equation": "\u03bb_max = 2d",
        "description": "Diffraction cannot occur for wavelengths exceeding twice the spacing."
      }
    ],
    "applications": [
      "X-ray Crystallography (XRD) solving protein structure and DNA double-helix.",
      "Semiconductor wafer thin-film epitaxy strain characterization.",
      "Phase identification in metallurgy and materials science."
    ],
    "relatedFormulas": [
      "de-broglie-wavelength",
      "snells-law-refraction"
    ],
    "calculatorId": null,
    "tags": [
      "bragg",
      "x-ray",
      "diffraction",
      "crystal",
      "solid state",
      "lattice",
      "miller indices"
    ]
  },
  {
    "id": "schrodinger-time-independent",
    "name": "Time-Independent Schr\u00f6dinger Equation",
    "equation": "[- (\u0127\u00b2 / 2m) \u00b7 \u2207\u00b2 + V(r)] \u00b7 \u03c8(r) = E \u00b7 \u03c8(r)",
    "latex": "-\\frac{\\hbar^2}{2m} \\nabla^2 \\psi(\\vec{r}) + V(\\vec{r})\\psi(\\vec{r}) = E \\psi(\\vec{r}) \\quad \\iff \\quad \\hat{H}\\psi = E\\psi",
    "level": "B.Sc. Physics",
    "subject": "Quantum Mechanics",
    "topic": "Wave Mechanics & Eigenstates",
    "difficulty": "Advanced",
    "explanation": "Fundamental eigenvalue equation in non-relativistic quantum mechanics for stationary states. The Hamiltonian operator H acting on the spatial wavefunction \u03c8 yields the energy eigenvalue E multiplied by \u03c8.",
    "variables": [
      {
        "symbol": "\u0127",
        "name": "Reduced Planck Constant",
        "unit": "J\u00b7s",
        "description": "\u0127 = h / (2\u03c0) = 1.05457 \u00d7 10\u207b\u00b3\u2074 J\u00b7s."
      },
      {
        "symbol": "m",
        "name": "Particle Mass",
        "unit": "kg",
        "description": "Inertial mass of quantum particle."
      },
      {
        "symbol": "\u2207\u00b2",
        "name": "Laplacian Operator",
        "unit": "1/m\u00b2",
        "description": "Spatial kinetic energy operator: \u2202\u00b2/\u2202x\u00b2 + \u2202\u00b2/\u2202y\u00b2 + \u2202\u00b2/\u2202z\u00b2."
      },
      {
        "symbol": "V(r)",
        "name": "Potential Energy",
        "unit": "J",
        "description": "Position-dependent potential function."
      },
      {
        "symbol": "\u03c8(r)",
        "name": "Wavefunction",
        "unit": "1/m^(3/2)",
        "description": "Probability amplitude whose squared magnitude |\u03c8|\u00b2 represents probability density."
      },
      {
        "symbol": "E",
        "name": "Energy Eigenvalue",
        "unit": "J or eV",
        "description": "Allowed stationary state energy."
      }
    ],
    "units": {
      "si": "Joule (J) on both sides",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. Total classical energy: E = p\u00b2/(2m) + V(r).\n2. Apply quantum operator correspondence principle:\n   - Momentum operator: p\u0302 = -i \u0127 \u2207\n   - Kinetic energy operator: p\u0302\u00b2/(2m) = (-i \u0127 \u2207)\u00b2/(2m) = - (\u0127\u00b2/2m) \u2207\u00b2.\n3. Hamiltonian operator: \u0124 = p\u0302\u00b2/(2m) + V(r) = - (\u0127\u00b2/2m) \u2207\u00b2 + V(r).\n4. Postulate eigenvalue relation \u0124 \u03c8 = E \u03c8, giving the Time-Independent Schr\u00f6dinger Equation.",
    "specialCases": [
      {
        "title": "Free Particle",
        "condition": "V(r) = 0",
        "equation": "\u03c8(x) = A e^{i k x} ; E = \u0127\u00b2 k\u00b2 / (2m)",
        "description": "Continuous spectrum of plane wave solutions."
      },
      {
        "title": "Infinite Potential Well (1D Box)",
        "condition": "V = 0 for 0 < x < L, \u221e elsewhere",
        "equation": "E_n = (n\u00b2 \u03c0\u00b2 \u0127\u00b2) / (2 m L\u00b2)",
        "description": "Discrete energy eigenvalues for confined particle."
      }
    ],
    "applications": [
      "Quantum dot confinement energy level tuning in QLED displays.",
      "Scanning Tunnelling Microscopy (STM) electronic density of states probing.",
      "Computational quantum chemistry molecular orbital predictions."
    ],
    "relatedFormulas": [
      "particle-in-box-energy",
      "schrodinger-time-dependent",
      "quantum-harmonic-oscillator",
      "quantum-tunnelling-coeff"
    ],
    "calculatorId": null,
    "tags": [
      "schrodinger",
      "quantum",
      "wavefunction",
      "eigenvalues",
      "hamiltonian",
      "particle in box",
      "tise",
      "quantum mechanics"
    ]
  },
  {
    "id": "particle-in-box-energy",
    "name": "Particle in a 1D Infinite Potential Well",
    "equation": "E_n = (n\u00b2 \u00b7 \u03c0\u00b2 \u00b7 \u0127\u00b2) / (2 \u00b7 m \u00b7 L\u00b2) ; \u03c8_n(x) = \u221a(2/L) \u00b7 sin(n\u03c0x/L)",
    "latex": "E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2} = \\frac{n^2 h^2}{8 m L^2} \\quad , \\quad \\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left(\\frac{n \\pi x}{L}\\right)",
    "level": "B.Sc. Physics",
    "subject": "Quantum Mechanics",
    "topic": "Confined Systems & Bound States",
    "difficulty": "Advanced",
    "explanation": "Calculates the discrete energy eigenvalues E_n and normalized stationary wavefunctions \u03c8_n(x) of a quantum particle of mass m confined in an infinitely deep one-dimensional square potential well of width L.",
    "variables": [
      {
        "symbol": "n",
        "name": "Quantum State Number",
        "unit": "integer (1, 2, 3...)",
        "description": "Energy level index (n = 1 is the zero-point ground state; n cannot be 0)."
      },
      {
        "symbol": "L",
        "name": "Well Width",
        "unit": "m",
        "description": "Spatial confinement width between boundaries x = 0 and x = L."
      },
      {
        "symbol": "m",
        "name": "Particle Mass",
        "unit": "kg",
        "description": "Mass of confined particle."
      },
      {
        "symbol": "\u0127",
        "name": "Reduced Planck Constant",
        "unit": "J\u00b7s",
        "description": "1.05457 \u00d7 10\u207b\u00b3\u2074 J\u00b7s."
      },
      {
        "symbol": "\u03c8_n(x)",
        "name": "Spatial Wavefunction",
        "unit": "1/\u221am",
        "description": "Stationary spatial eigenfunction satisfying boundary conditions \u03c8(0) = \u03c8(L) = 0."
      }
    ],
    "units": {
      "si": "Joule (J) or eV",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. Inside the well (0 < x < L), V(x) = 0: - (\u0127\u00b2/2m) d\u00b2\u03c8/dx\u00b2 = E \u03c8 \u21d2 d\u00b2\u03c8/dx\u00b2 + k\u00b2 \u03c8 = 0, where k = \u221a(2mE)/\u0127.\n2. General solution: \u03c8(x) = A sin(kx) + B cos(kx).\n3. Boundary condition at x = 0: \u03c8(0) = B = 0 \u21d2 \u03c8(x) = A sin(kx).\n4. Boundary condition at x = L: \u03c8(L) = A sin(kL) = 0. For non-trivial solution (A \u2260 0), k L = n \u03c0 (n = 1, 2, 3...).\n5. Energy eigenvalues: k = n\u03c0/L \u21d2 \u221a(2mE)/\u0127 = n\u03c0/L \u21d2 E_n = (n\u00b2 \u03c0\u00b2 \u0127\u00b2) / (2 m L\u00b2).\n6. Normalization condition: \u222b\u2080\u1d38 |\u03c8(x)|\u00b2 dx = 1 \u21d2 |A|\u00b2 \u222b\u2080\u1d38 sin\u00b2(n\u03c0x/L) dx = |A|\u00b2 (L/2) = 1 \u21d2 A = \u221a(2/L).",
    "specialCases": [
      {
        "title": "Zero-Point Energy",
        "condition": "n = 1 (Ground State)",
        "equation": "E\u2081 = (\u03c0\u00b2 \u0127\u00b2) / (2 m L\u00b2) > 0",
        "description": "A quantum particle can never have zero kinetic energy, directly satisfying Heisenberg uncertainty."
      },
      {
        "title": "Probability Density Nodes",
        "condition": "|\u03c8_n(x)|\u00b2 = 0",
        "equation": "Nodes = n - 1",
        "description": "Number of zero-probability nodes inside the well increases with quantum number n."
      }
    ],
    "applications": [
      "Conjugated polyene dye molecules absorption wavelength modeling (particle-in-a-box model for \u03c0 electrons).",
      "Semiconductor quantum well lasers (GaAs/AlGaAs heterostructures).",
      "Quantum confinement energy shift in colloidal quantum dots."
    ],
    "relatedFormulas": [
      "schrodinger-time-independent",
      "schrodinger-time-dependent",
      "heisenberg-uncertainty"
    ],
    "calculatorId": null,
    "tags": [
      "particle in box",
      "schrodinger",
      "energy eigenvalues",
      "wavefunction",
      "normalization",
      "probability density",
      "infinite well",
      "zero point energy"
    ]
  },
  {
    "id": "heisenberg-uncertainty",
    "name": "Heisenberg Uncertainty Principle",
    "equation": "\u0394x \u00b7 \u0394p \u2265 \u0127 / 2 ; \u0394E \u00b7 \u0394t \u2265 \u0127 / 2",
    "latex": "\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} \\quad , \\quad \\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}",
    "level": "B.Sc. Physics",
    "subject": "Quantum Mechanics",
    "topic": "Quantum Measurement & Observables",
    "difficulty": "Advanced",
    "explanation": "A fundamental physical limit asserting that canonically conjugate quantum observables (such as position and momentum, or energy and lifetime) cannot be simultaneously determined with arbitrary precision.",
    "variables": [
      {
        "symbol": "\u0394x",
        "name": "Position Uncertainty",
        "unit": "m",
        "description": "Standard deviation of position measurement: \u221a(<x\u00b2> - <x>\u00b2)."
      },
      {
        "symbol": "\u0394p",
        "name": "Momentum Uncertainty",
        "unit": "kg\u00b7m/s",
        "description": "Standard deviation of momentum: \u221a(<p\u00b2> - <p>\u00b2)."
      },
      {
        "symbol": "\u0127",
        "name": "Reduced Planck Constant",
        "unit": "J\u00b7s",
        "description": "\u0127 = h / (2\u03c0) \u2248 1.055 \u00d7 10\u207b\u00b3\u2074 J\u00b7s."
      },
      {
        "symbol": "\u0394E",
        "name": "Energy Uncertainty / Width",
        "unit": "J",
        "description": "Natural line-width of excited state."
      },
      {
        "symbol": "\u0394t",
        "name": "Lifetime of State",
        "unit": "s",
        "description": "Mean duration or lifetime of quantum state."
      }
    ],
    "units": {
      "si": "Joule\u00b7second (J\u00b7s)",
      "dimension": "[M L\u00b2 T\u207b\u00b9]"
    },
    "derivation": "1. For any two Hermitian operators \u00c2 and B\u0302 with commutator [\u00c2, B\u0302] = \u00c2 B\u0302 - B\u0302 \u00c2 = i \u0108:\n2. Robertson-Schr\u00f6dinger theorem proves: \u03c3_A\u00b2 \u03c3_B\u00b2 \u2265 \u00bc |<[\u00c2, B\u0302]>|\u00b2.\n3. Position and momentum operators satisfy the canonical commutation relation: [x\u0302, p\u0302_x] = i \u0127.\n4. Substituting gives: (\u0394x)\u00b2 (\u0394p)\u00b2 \u2265 \u00bc |i \u0127|\u00b2 = \u0127\u00b2/4.\n5. Taking square roots: \u0394x \u00b7 \u0394p \u2265 \u0127 / 2.",
    "specialCases": [
      {
        "title": "Minimum Uncertainty Wavepacket",
        "condition": "Gaussian wavepacket",
        "equation": "\u0394x \u00b7 \u0394p = \u0127 / 2",
        "description": "Gaussian wavepackets saturate the lower bound."
      },
      {
        "title": "Virtual Particle Creation",
        "condition": "Vacuum fluctuations",
        "equation": "\u0394E \u2248 m c\u00b2 \u21d2 \u0394t \u2248 \u0127 / (2 m c\u00b2)",
        "description": "Explains Casimir effect and Hawking radiation."
      }
    ],
    "applications": [
      "Natural spectral line broadening in laser spectroscopy.",
      "Explaining why atomic electrons do not collapse into the nucleus.",
      "Quantum cryptographic key distribution (QKD, BB84 protocol)."
    ],
    "relatedFormulas": [
      "schrodinger-time-independent",
      "particle-in-box-energy",
      "de-broglie-wavelength"
    ],
    "calculatorId": null,
    "tags": [
      "heisenberg",
      "uncertainty",
      "quantum",
      "momentum",
      "position",
      "planck"
    ]
  },
  {
    "id": "lorentz-transformations",
    "name": "Lorentz Transformations & Time Dilation",
    "equation": "x' = \u03b3(x - vt) ; t' = \u03b3(t - vx/c\u00b2) ; \u0394t = \u03b3 \u00b7 \u0394t\u2080",
    "latex": "\\begin{aligned} x' &= \\gamma (x - v t) \\\\ t' &= \\gamma \\left(t - \\frac{v x}{c^2}\\right) \\end{aligned} \\quad \\text{where } \\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}",
    "level": "B.Sc. Physics",
    "subject": "Relativity",
    "topic": "Special Relativity",
    "difficulty": "Advanced",
    "explanation": "Coordinate transformations connecting space and time measurements between two inertial reference frames moving at constant relative velocity v along the x-axis, preserving the invariance of the speed of light.",
    "variables": [
      {
        "symbol": "\u03b3 (gamma)",
        "name": "Lorentz Factor",
        "unit": "dimensionless (\u2265 1)",
        "description": "Relativistic factor: 1/\u221a(1 - \u03b2\u00b2) where \u03b2 = v/c."
      },
      {
        "symbol": "v",
        "name": "Relative Frame Velocity",
        "unit": "m/s",
        "description": "Speed of moving frame S' relative to S."
      },
      {
        "symbol": "c",
        "name": "Speed of Light in Vacuum",
        "unit": "m/s",
        "description": "299,792,458 m/s."
      },
      {
        "symbol": "\u0394t\u2080",
        "name": "Proper Time",
        "unit": "s",
        "description": "Time interval measured in the rest frame of the clock."
      },
      {
        "symbol": "\u0394t",
        "name": "Dilated Time",
        "unit": "s",
        "description": "Time interval measured by an observer in motion."
      }
    ],
    "units": {
      "si": "Meter (m) and Second (s)",
      "dimension": "[L] and [T]"
    },
    "derivation": "1. Postulates of Special Relativity: (i) Laws of physics are invariant across inertial frames; (ii) Speed of light c is identical in all inertial frames.\n2. Invariant spacetime interval: c\u00b2 t\u00b2 - x\u00b2 - y\u00b2 - z\u00b2 = c\u00b2 t'\u00b2 - x'\u00b2 - y'\u00b2 - z'\u00b2.\n3. Linearity requires x' = \u03b3(x - vt). By symmetry from S' to S: x = \u03b3(x' + vt').\n4. Substituting x' into the equation for x gives t' = \u03b3(t - vx/c\u00b2).\n5. Equating intervals yields \u03b3 = 1 / \u221a(1 - v\u00b2/c\u00b2).",
    "specialCases": [
      {
        "title": "Length Contraction",
        "condition": "Moving rod of proper length L\u2080",
        "equation": "L = L\u2080 / \u03b3 = L\u2080 \u221a(1 - v\u00b2/c\u00b2)",
        "description": "Length along direction of motion contracts."
      },
      {
        "title": "Non-Relativistic Limit",
        "condition": "v \u226a c (\u03b2 \u2192 0, \u03b3 \u2192 1)",
        "equation": "x' = x - vt ; t' = t",
        "description": "Smoothly reduces to classical Galilean transformation."
      }
    ],
    "applications": [
      "GPS satellite clock relativistic corrections (38 microseconds daily drift).",
      "Atmospheric muon lifetime extension reaching Earth's surface.",
      "High-energy particle accelerator beam bunch timing."
    ],
    "relatedFormulas": [
      "relativistic-energy",
      "schrodinger-time-independent"
    ],
    "calculatorId": null,
    "tags": [
      "lorentz",
      "relativity",
      "time dilation",
      "length contraction",
      "gamma",
      "einstein",
      "spacetime"
    ]
  },
  {
    "id": "relativistic-energy",
    "name": "Relativistic Energy-Momentum Relation",
    "equation": "E\u00b2 = (p \u00b7 c)\u00b2 + (m\u2080 \u00b7 c\u00b2)\u00b2 ; E = m \u00b7 c\u00b2",
    "latex": "E^2 = (p c)^2 + (m_0 c^2)^2 \\quad \\iff \\quad E = \\gamma m_0 c^2",
    "level": "B.Sc. Physics",
    "subject": "Relativity",
    "topic": "Relativistic Dynamics",
    "difficulty": "Advanced",
    "explanation": "Fundamental relation of special relativity combining rest mass energy, momentum, and total relativistic energy. Demonstrates the equivalence of mass and energy.",
    "variables": [
      {
        "symbol": "E",
        "name": "Total Relativistic Energy",
        "unit": "J or GeV",
        "description": "Sum of kinetic energy and rest-mass energy."
      },
      {
        "symbol": "p",
        "name": "Relativistic Momentum",
        "unit": "kg\u00b7m/s or GeV/c",
        "description": "p = \u03b3 m\u2080 v."
      },
      {
        "symbol": "m\u2080",
        "name": "Rest Mass",
        "unit": "kg",
        "description": "Invariant mass measured in particle rest frame."
      },
      {
        "symbol": "c",
        "name": "Speed of Light",
        "unit": "m/s",
        "description": "2.998 \u00d7 10\u2078 m/s."
      }
    ],
    "units": {
      "si": "Joule (J) or Electron-Volt (eV)",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. 4-momentum vector: P^\u03bc = (E/c, p_x, p_y, p_z).\n2. Lorentz invariant scalar product of 4-momentum: P_\u03bc P^\u03bc = (E/c)\u00b2 - p\u00b2.\n3. In particle rest frame: p = 0 and E = m\u2080 c\u00b2, hence P_\u03bc P^\u03bc = (m\u2080 c)\u00b2.\n4. Equating invariants: (E/c)\u00b2 - p\u00b2 = (m\u2080 c)\u00b2.\n5. Multiplying through by c\u00b2 gives: E\u00b2 = p\u00b2 c\u00b2 + m\u2080\u00b2 c\u2074.",
    "specialCases": [
      {
        "title": "Massless Particles (Photons)",
        "condition": "m\u2080 = 0",
        "equation": "E = p \u00b7 c",
        "description": "Energy of photons is purely proportional to momentum."
      },
      {
        "title": "Particle at Rest",
        "condition": "p = 0",
        "equation": "E\u2080 = m\u2080 c\u00b2",
        "description": "Famous mass-energy equivalence equation."
      }
    ],
    "applications": [
      "Nuclear fission and fusion mass-defect energy yield calculations.",
      "Positron-electron annihilation gamma-ray spectrometry in PET imaging.",
      "LHC proton collision center-of-mass energy design."
    ],
    "relatedFormulas": [
      "lorentz-transformations",
      "photoelectric-einstein",
      "dirac-equation"
    ],
    "calculatorId": null,
    "tags": [
      "mass energy",
      "e=mc2",
      "relativity",
      "einstein",
      "momentum",
      "rest mass"
    ]
  },
  {
    "id": "schrodinger-time-dependent",
    "name": "Time-Dependent Schr\u00f6dinger Equation",
    "equation": "i\u0127 \u00b7 (\u2202\u03c8/\u2202t) = [ - (\u0127\u00b2 / 2m) \u00b7 \u2207\u00b2 + V ] \u00b7 \u03c8",
    "latex": "i\\hbar \\frac{\\partial \\psi(\\vec{r}, t)}{\\partial t} = \\left[ -\\frac{\\hbar^2}{2m} \\nabla^2 + V(\\vec{r}, t) \\right] \\psi(\\vec{r}, t) = \\hat{H} \\psi(\\vec{r}, t)",
    "level": "M.Sc. Physics",
    "subject": "Quantum Mechanics",
    "topic": "Quantum Dynamics & Unitary Evolution",
    "difficulty": "Expert",
    "explanation": "Master equation governing the deterministic, unitary time evolution of the state vector / wavefunction of a non-relativistic quantum mechanical system.",
    "variables": [
      {
        "symbol": "i",
        "name": "Imaginary Unit",
        "unit": "dimensionless",
        "description": "Square root of -1 (generates unitary phase oscillations)."
      },
      {
        "symbol": "\u0127",
        "name": "Reduced Planck Constant",
        "unit": "J\u00b7s",
        "description": "1.05457 \u00d7 10\u207b\u00b3\u2074 J\u00b7s."
      },
      {
        "symbol": "\u03c8(r, t)",
        "name": "Spatiotemporal Wavefunction",
        "unit": "1/m^(3/2)",
        "description": "Complex probability amplitude."
      },
      {
        "symbol": "\u2202/\u2202t",
        "name": "Partial Time Derivative",
        "unit": "1/s",
        "description": "Generates time evolution via Hamiltonian generator."
      },
      {
        "symbol": "\u0124",
        "name": "Hamiltonian Operator",
        "unit": "J",
        "description": "Total energy operator of the system."
      }
    ],
    "units": {
      "si": "Joule (J) on both sides",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. For a free plane wave: \u03c8(x, t) = A e^{i(k x - \u03c9 t)}.\n2. Apply energy-momentum relations: p = \u0127 k and E = \u0127 \u03c9.\n3. Take partial time derivative: \u2202\u03c8/\u2202t = -i \u03c9 \u03c8 = -i (E/\u0127) \u03c8 \u21d2 i \u0127 (\u2202\u03c8/\u2202t) = E \u03c8.\n4. Take spatial derivative: \u2202\u00b2\u03c8/\u2202x\u00b2 = -k\u00b2 \u03c8 = - (p\u00b2/\u0127\u00b2) \u03c8 \u21d2 - (\u0127\u00b2/2m) (\u2202\u00b2\u03c8/\u2202x\u00b2) = (p\u00b2/2m) \u03c8.\n5. Combining total energy E = p\u00b2/(2m) + V yields: i \u0127 (\u2202\u03c8/\u2202t) = [ - (\u0127\u00b2/2m) \u2207\u00b2 + V ] \u03c8.",
    "specialCases": [
      {
        "title": "Separation of Variables",
        "condition": "Time-independent potential V(r)",
        "equation": "\u03c8(r, t) = \u03c6(r) e^{-i E t / \u0127}",
        "description": "Decouples into spatial stationary state and harmonic phase factor."
      },
      {
        "title": "Probability Conservation",
        "condition": "Hermitian Hamiltonian",
        "equation": "\u2202(|\u03c8|\u00b2)/\u2202t + \u2207 \u00b7 J = 0",
        "description": "Continuity equation ensuring normalization \u222b |\u03c8|\u00b2 d\u00b3r = 1 is strictly conserved over time."
      }
    ],
    "applications": [
      "Quantum computing qubit gate simulation and decoherence modeling.",
      "Femtosecond pump-probe chemical reaction transition state dynamics.",
      "Nuclear magnetic resonance (NMR / MRI) spin precession modeling."
    ],
    "relatedFormulas": [
      "schrodinger-time-independent",
      "particle-in-box-energy",
      "quantum-tunnelling-coeff",
      "dirac-equation"
    ],
    "calculatorId": null,
    "tags": [
      "schrodinger",
      "time dependent",
      "tdse",
      "wavefunction",
      "quantum",
      "probability density",
      "normalization",
      "unitary",
      "hamiltonian",
      "particle in box"
    ]
  },
  {
    "id": "quantum-tunnelling-coeff",
    "name": "Quantum Tunnelling Transmission Coefficient",
    "equation": "T \u2248 exp( -2 \u00b7 a \u00b7 \u221a(2m(V\u2080 - E)) / \u0127 )",
    "latex": "T \\approx e^{-2 \\kappa a} \\quad \\text{where } \\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}",
    "level": "M.Sc. Physics",
    "subject": "Quantum Mechanics",
    "topic": "Potential Barriers & Scattering",
    "difficulty": "Expert",
    "explanation": "Approximates the probability that a quantum particle with incident kinetic energy E penetrates and tunnels through a finite potential energy barrier of height V\u2080 (where V\u2080 > E) and thickness a.",
    "variables": [
      {
        "symbol": "T",
        "name": "Transmission Probability",
        "unit": "dimensionless (0 to 1)",
        "description": "Ratio of transmitted probability current to incident probability current."
      },
      {
        "symbol": "a",
        "name": "Barrier Width",
        "unit": "m",
        "description": "Physical thickness of the barrier."
      },
      {
        "symbol": "V\u2080",
        "name": "Barrier Height",
        "unit": "J or eV",
        "description": "Potential energy step height."
      },
      {
        "symbol": "E",
        "name": "Particle Incident Energy",
        "unit": "J or eV",
        "description": "Energy of incident particle (E < V\u2080)."
      },
      {
        "symbol": "\u03ba (kappa)",
        "name": "Decay Constant",
        "unit": "1/m",
        "description": "Spatial attenuation rate of the evanescent wave inside the barrier."
      }
    ],
    "units": {
      "si": "Dimensionless probability",
      "dimension": "[1]"
    },
    "derivation": "1. Solve TISE in Region I (x < 0): \u03c8_I(x) = e^{ikx} + R e^{-ikx}, where k = \u221a(2mE)/\u0127.\n2. Inside barrier Region II (0 < x < a): d\u00b2\u03c8/dx\u00b2 = \u03ba\u00b2 \u03c8, where \u03ba = \u221a(2m(V\u2080-E))/\u0127.\n3. Evanescent solution: \u03c8_II(x) = C e^{-\u03bax} + D e^{\u03bax}.\n4. Region III (x > a): \u03c8_III(x) = t_trans e^{ikx}.\n5. Matching \u03c8 and d\u03c8/dx boundary conditions at x = 0 and x = a, and taking thick barrier limit (\u03ba a \u226b 1):\n6. T = |t_trans|\u00b2 \u2248 16 (E/V\u2080)(1 - E/V\u2080) e^{-2\u03baa} \u221d e^{-2\u03baa}.",
    "specialCases": [
      {
        "title": "WKB Approximation for Arbitrary Barrier",
        "condition": "V(x) varies smoothly",
        "equation": "T \\approx \\exp\\left( -\\frac{2}{\\hbar} \\int_{x_1}^{x_2} \\sqrt{2m(V(x) - E)}\\, dx \\right)",
        "description": "WKB formula applicable to alpha radioactive decay (Gamow theory)."
      },
      {
        "title": "Zero Barrier",
        "condition": "V\u2080 \u2192 0",
        "equation": "T \u2192 1",
        "description": "Classical complete transmission."
      }
    ],
    "applications": [
      "Flash memory floating gate tunnel injection (Fowler-Nordheim tunneling).",
      "Scanning Tunneling Microscope (STM) achieving atomic imaging by measuring picoampere tunnel currents.",
      "Nuclear alpha decay rate calculations (Gamow factor explaining Geiger-Nuttall law)."
    ],
    "relatedFormulas": [
      "schrodinger-time-dependent",
      "schrodinger-time-independent",
      "particle-in-box-energy"
    ],
    "calculatorId": null,
    "tags": [
      "tunneling",
      "quantum tunneling",
      "barrier",
      "transmission",
      "evanescent",
      "wavepacket",
      "schrodinger"
    ]
  },
  {
    "id": "bose-einstein-distribution",
    "name": "Bose-Einstein Distribution Function",
    "equation": "f_BE(E) = 1 / [ exp((E - \u03bc) / (k_B \u00b7 T)) - 1 ]",
    "latex": "f_{\\text{BE}}(E) = \\frac{1}{e^{(E - \\mu)/(k_B T)} - 1}",
    "level": "M.Sc. Physics",
    "subject": "Statistical Mechanics",
    "topic": "Quantum Statistics",
    "difficulty": "Expert",
    "explanation": "Determines the mean occupancy number of identical, indistinguishable integer-spin bosons (photons, gluons, helium-4 atoms) in a single-particle quantum state of energy E at thermodynamic equilibrium.",
    "variables": [
      {
        "symbol": "f_BE(E)",
        "name": "Average Occupation Number",
        "unit": "dimensionless",
        "description": "Expected number of bosons occupying the state (can exceed 1)."
      },
      {
        "symbol": "E",
        "name": "State Energy",
        "unit": "J or eV",
        "description": "Energy of the quantum microstate."
      },
      {
        "symbol": "\u03bc",
        "name": "Chemical Potential",
        "unit": "J",
        "description": "For bosons, \u03bc must be strictly less than ground state energy (\u03bc = 0 for photons)."
      },
      {
        "symbol": "k_B",
        "name": "Boltzmann Constant",
        "unit": "J/K",
        "description": "1.38065 \u00d7 10\u207b\u00b2\u00b3 J/K."
      },
      {
        "symbol": "T",
        "name": "Absolute Temperature",
        "unit": "K",
        "description": "Thermodynamic temperature."
      }
    ],
    "units": {
      "si": "Dimensionless average number",
      "dimension": "[1]"
    },
    "derivation": "1. In grand canonical ensemble, grand partition function for a single bosonic state: \u039e = \u2211_{n=0}^\u221e e^{-n(E - \u03bc)/k_B T}.\n2. This is an infinite geometric series with ratio r = e^{-(E - \u03bc)/k_B T} < 1: \u039e = 1 / (1 - e^{-(E - \u03bc)/k_B T}).\n3. Average number of particles: <n> = k_B T (\u2202 ln \u039e / \u2202\u03bc).\n4. Differentiating yields: <n> = 1 / [ e^{(E - \u03bc)/k_B T} - 1 ].",
    "specialCases": [
      {
        "title": "Bose-Einstein Condensation (BEC)",
        "condition": "T < T_c, \u03bc \u2192 0",
        "equation": "N\u2080 / N = 1 - (T / T_c)^{3/2}",
        "description": "Macroscopic fraction of bosons condense into zero-momentum ground state."
      },
      {
        "title": "Planck Radiation Law",
        "condition": "Photons (\u03bc = 0, E = \u0127\u03c9)",
        "equation": "u(\u03c9) = (\u0127 \u03c9\u00b3 / \u03c0\u00b2 c\u00b3) / (e^{\u0127\u03c9/k_B T} - 1)",
        "description": "Derives blackbody spectral energy density."
      }
    ],
    "applications": [
      "Bose-Einstein Condensation in laser-cooled rubidium/sodium optical dipole traps.",
      "Superfluidity in liquid Helium-4 (frictional dissipation-free flow).",
      "Thermal radiation laws and cosmic microwave background spectrum."
    ],
    "relatedFormulas": [
      "fermi-dirac-distribution",
      "maxwell-boltzmann-distribution",
      "photoelectric-einstein"
    ],
    "calculatorId": null,
    "tags": [
      "bose",
      "einstein",
      "bosons",
      "statistical mechanics",
      "bec",
      "planck",
      "distribution"
    ]
  },
  {
    "id": "fermi-dirac-distribution",
    "name": "Fermi-Dirac Distribution Function",
    "equation": "f_FD(E) = 1 / [ exp((E - E_F) / (k_B \u00b7 T)) + 1 ]",
    "latex": "f_{\\text{FD}}(E) = \\frac{1}{e^{(E - E_F)/(k_B T)} + 1}",
    "level": "M.Sc. Physics",
    "subject": "Statistical Mechanics",
    "topic": "Quantum Statistics",
    "difficulty": "Expert",
    "explanation": "Calculates the probability that a single-particle state of energy E is occupied by an identical half-integer spin fermion (electron, proton, neutron) subject to the Pauli Exclusion Principle.",
    "variables": [
      {
        "symbol": "f_FD(E)",
        "name": "Occupancy Probability",
        "unit": "dimensionless (0 to 1)",
        "description": "Bounded strictly between 0 and 1 due to Pauli exclusion."
      },
      {
        "symbol": "E",
        "name": "Single-Particle Energy",
        "unit": "eV or J",
        "description": "Energy level under evaluation."
      },
      {
        "symbol": "E_F",
        "name": "Fermi Energy / Chemical Potential",
        "unit": "eV",
        "description": "Energy at which occupancy probability is exactly 0.5 at any temperature."
      },
      {
        "symbol": "T",
        "name": "Absolute Temperature",
        "unit": "K",
        "description": "Thermodynamic temperature."
      }
    ],
    "units": {
      "si": "Dimensionless probability",
      "dimension": "[1]"
    },
    "derivation": "1. Pauli exclusion restricts occupation to n = 0 or n = 1 only.\n2. Grand partition function: \u039e = \u2211_{n=0}^1 e^{-n(E - \u03bc)/k_B T} = 1 + e^{-(E - \u03bc)/k_B T}.\n3. Average occupancy: <n> = k_B T (\u2202 ln \u039e / \u2202\u03bc) = [ e^{-(E - \u03bc)/k_B T} ] / [ 1 + e^{-(E - \u03bc)/k_B T} ].\n4. Multiplying numerator and denominator by e^{(E - \u03bc)/k_B T} gives: f_FD(E) = 1 / [ e^{(E - E_F)/k_B T} + 1 ].",
    "specialCases": [
      {
        "title": "Absolute Zero Temperature",
        "condition": "T = 0 K",
        "equation": "f(E) = 1 (for E < E_F) ; f(E) = 0 (for E > E_F)",
        "description": "Sharp step function: all states below Fermi level are completely filled."
      },
      {
        "title": "High Temperature Limit",
        "condition": "E - E_F \u226b k_B T",
        "equation": "f(E) \u2248 e^{-(E - E_F)/k_B T}",
        "description": "Smoothly converges to classical Maxwell-Boltzmann statistics."
      }
    ],
    "applications": [
      "Conduction electron carrier density calculations in semiconductors.",
      "White dwarf star electron degeneracy pressure stabilization.",
      "Thermal and electrical conductivity in metals (Sommerfeld model)."
    ],
    "relatedFormulas": [
      "bose-einstein-distribution",
      "maxwell-boltzmann-distribution",
      "schrodinger-time-independent"
    ],
    "calculatorId": null,
    "tags": [
      "fermi",
      "dirac",
      "fermions",
      "electrons",
      "fermi energy",
      "pauli exclusion",
      "solid state"
    ]
  },
  {
    "id": "dirac-equation",
    "name": "The Dirac Equation",
    "equation": "(i \u00b7 \u03b3^\u03bc \u00b7 \u2202_\u03bc - m \u00b7 c / \u0127) \u00b7 \u03c8 = 0",
    "latex": "(i \\gamma^\\mu \\partial_\\mu - m) \\psi = 0 \\quad \\iff \\quad \\left( i \\hbar \\gamma^\\mu \\partial_\\mu - m c \\right) \\psi = 0",
    "level": "Advanced / PhD",
    "subject": "Particle Physics",
    "topic": "Relativistic Quantum Mechanics & QFT",
    "difficulty": "Expert",
    "explanation": "Relativistic wave equation formulated by Paul Dirac for spin-\u00bd fermions (such as electrons and quarks). Unifies special relativity and quantum mechanics, naturally predicting intrinsic electron spin and the existence of antimatter (positrons).",
    "variables": [
      {
        "symbol": "\u03c8",
        "name": "Dirac 4-Component Spinor",
        "unit": "dimensionless",
        "description": "Bispinor field describing both spin-up/spin-down particles and antiparticles."
      },
      {
        "symbol": "\u03b3^\u03bc",
        "name": "Dirac Gamma Matrices",
        "unit": "4\u00d74 matrices",
        "description": "Satisfy Clifford algebra anti-commutation: {\u03b3^\u03bc, \u03b3^\u03bd} = 2 \u03b7^{\u03bc\u03bd} I\u2084."
      },
      {
        "symbol": "\u2202_\u03bc",
        "name": "4-Gradient Operator",
        "unit": "1/m",
        "description": "Covariant 4-derivative: ( (1/c) \u2202/\u2202t, \u2207 )."
      },
      {
        "symbol": "m",
        "name": "Rest Mass",
        "unit": "kg",
        "description": "Fermion invariant mass."
      }
    ],
    "units": {
      "si": "Natural units (\u0127 = c = 1) or SI units (J/m)",
      "dimension": "[M L\u207b\u00b9 T\u207b\u00b9]"
    },
    "derivation": "1. Klein-Gordon equation (-\u2202_t\u00b2 + \u2207\u00b2 - m\u00b2)\u03c8 = 0 is second-order in time, yielding negative probability densities.\n2. Dirac sought a wave equation linear in both \u2202/\u2202t and \u2207: (i \u0127 \u2202_t - H)\u03c8 = 0 with H = c \u03b1 \u00b7 p + \u03b2 m c\u00b2.\n3. Squaring H must recover the relativistic energy-momentum invariant H\u00b2 = p\u00b2 c\u00b2 + m\u00b2 c\u2074.\n4. This imposes constraints on matrices \u03b1_i and \u03b2:\n   - \u03b1_i \u03b1_j + \u03b1_j \u03b1_i = 2 \u03b4_ij\n   - \u03b1_i \u03b2 + \u03b2 \u03b1_i = 0\n   - \u03b2\u00b2 = 1\n5. Rewriting using 4-vector notation \u03b3\u2070 = \u03b2, \u03b3^i = \u03b2 \u03b1_i yields the covariant Dirac equation: (i \u03b3^\u03bc \u2202_\u03bc - m) \u03c8 = 0.",
    "specialCases": [
      {
        "title": "Massless Dirac Equation (Weyl Equation)",
        "condition": "m = 0",
        "equation": "i \u03b3^\u03bc \u2202_\u03bc \u03c8 = 0",
        "description": "Decouples into left-handed and right-handed 2-component Weyl spinors."
      },
      {
        "title": "Non-Relativistic Limit",
        "condition": "v \u226a c",
        "equation": "Pauli Equation with g = 2",
        "description": "Naturally derives the electron's gyromagnetic ratio g-factor equal to 2 without empirical tuning."
      }
    ],
    "applications": [
      "Quantum Electrodynamics (QED) high-precision Lamb shift calculations.",
      "Prediction and discovery of the positron (antimatter).",
      "Relativistic effects in heavy element chemistry (explaining the yellow color of gold and liquidity of mercury)."
    ],
    "relatedFormulas": [
      "schrodinger-time-dependent",
      "relativistic-energy",
      "einstein-field-equations"
    ],
    "calculatorId": null,
    "tags": [
      "dirac",
      "spinor",
      "quantum field theory",
      "antimatter",
      "positron",
      "relativity",
      "gamma matrices",
      "qft"
    ]
  },
  {
    "id": "einstein-field-equations",
    "name": "Einstein Field Equations (General Relativity)",
    "equation": "G_\u03bc\u03bd + \u039b \u00b7 g_\u03bc\u03bd = (8\u03c0G / c\u2074) \u00b7 T_\u03bc\u03bd",
    "latex": "G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu} \\quad \\iff \\quad R_{\\mu\\nu} - \\frac{1}{2} R g_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}",
    "level": "Advanced / PhD",
    "subject": "Relativity",
    "topic": "General Relativity & Gravitation",
    "difficulty": "Expert",
    "explanation": "The central set of 10 coupled nonlinear partial differential equations in Albert Einstein's General Theory of Relativity describing how spacetime geometry (curvature) is dictated by the distribution of mass-energy and momentum.",
    "variables": [
      {
        "symbol": "G_\u03bc\u03bd",
        "name": "Einstein Curvature Tensor",
        "unit": "1/m\u00b2",
        "description": "G_\u03bc\u03bd = R_\u03bc\u03bd - \u00bd R g_\u03bc\u03bd representing spacetime curvature."
      },
      {
        "symbol": "R_\u03bc\u03bd",
        "name": "Ricci Curvature Tensor",
        "unit": "1/m\u00b2",
        "description": "Trace contraction of the 4th-rank Riemann curvature tensor R^\u03bb_\u03bc\u03b1\u03b2."
      },
      {
        "symbol": "g_\u03bc\u03bd",
        "name": "Spacetime Metric Tensor",
        "unit": "dimensionless",
        "description": "Defines proper distance and time interval ds\u00b2 = g_\u03bc\u03bd dx^\u03bc dx^\u03bd."
      },
      {
        "symbol": "T_\u03bc\u03bd",
        "name": "Stress-Energy-Momentum Tensor",
        "unit": "J/m\u00b3 = N/m\u00b2",
        "description": "Density and flux of energy, momentum, shear stress, and pressure."
      },
      {
        "symbol": "\u039b",
        "name": "Cosmological Constant",
        "unit": "1/m\u00b2",
        "description": "Vacuum energy density driving accelerated cosmic expansion."
      }
    ],
    "units": {
      "si": "1/m\u00b2 on both sides",
      "dimension": "[L\u207b\u00b2]"
    },
    "derivation": "1. In Newtonian gravity, Poisson's equation is \u2207\u00b2\u03a6 = 4\u03c0G \u03c1.\n2. In relativity, energy density \u03c1 generalizes to the rank-2 symmetric Stress-Energy Tensor T_\u03bc\u03bd.\n3. Conservation of energy-momentum requires vanishing covariant divergence: \u2207^\u03bc T_\u03bc\u03bd = 0.\n4. A geometric tensor must be constructed from metric g_\u03bc\u03bd and its second derivatives with vanishing divergence.\n5. The contracted Bianchi identity proves that \u2207^\u03bc (R_\u03bc\u03bd - \u00bd R g_\u03bc\u03bd) = 0.\n6. Equating gives G_\u03bc\u03bd \u221d T_\u03bc\u03bd. Matching the Newtonian weak-field slow-motion limit fixes the proportionality factor to 8\u03c0G/c\u2074.",
    "specialCases": [
      {
        "title": "Vacuum Solutions (Schwarzschild Metric)",
        "condition": "T_\u03bc\u03bd = 0, \u039b = 0 outside spherical mass",
        "equation": "R_\u03bc\u03bd = 0 \u21d2 r_s = 2GM / c\u00b2",
        "description": "Predicts black hole event horizons and gravitational time dilation."
      },
      {
        "title": "Weak-Field Gravitational Waves",
        "condition": "g_\u03bc\u03bd = \u03b7_\u03bc\u03bd + h_\u03bc\u03bd (|h| \u226a 1)",
        "equation": "\u25a1 h_\u03bc\u03bd = - (16\u03c0G/c\u2074) T_\u03bc\u03bd",
        "description": "Transverse-traceless gravitational wave ripples in spacetime."
      }
    ],
    "applications": [
      "Gravitational wave astronomy detection with LIGO and Virgo interferometers.",
      "Supermassive black hole shadow imaging by Event Horizon Telescope (M87*, Sgr A*).",
      "Precision GPS satellite orbital positioning clock adjustments."
    ],
    "relatedFormulas": [
      "lorentz-transformations",
      "gravitational-force-newton",
      "friedmann-equations"
    ],
    "calculatorId": null,
    "tags": [
      "general relativity",
      "einstein",
      "curvature",
      "spacetime",
      "black hole",
      "cosmology",
      "tensor"
    ]
  },
  {
    "id": "friedmann-equations",
    "name": "Friedmann Equations (Cosmology)",
    "equation": "(\u0227 / a)\u00b2 = (8\u03c0G / 3)\u00b7\u03c1 - (k\u00b7c\u00b2 / a\u00b2) + (\u039b\u00b7c\u00b2 / 3)",
    "latex": "\\left(\\frac{\\dot{a}}{a}\\right)^2 = \\frac{8\\pi G}{3} \\rho - \\frac{k c^2}{a^2} + \\frac{\\Lambda c^2}{3} = H(t)^2",
    "level": "Advanced / PhD",
    "subject": "Relativity",
    "topic": "Cosmological Dynamics",
    "difficulty": "Expert",
    "explanation": "Governs the dynamic expansion of space in a homogeneous and isotropic universe described by the Friedmann-Lema\u00eetre-Robertson-Walker (FLRW) metric under General Relativity.",
    "variables": [
      {
        "symbol": "a(t)",
        "name": "Cosmic Scale Factor",
        "unit": "dimensionless",
        "description": "Quantifies relative expansion of universe (normalized to 1 today)."
      },
      {
        "symbol": "H(t)",
        "name": "Hubble Expansion Parameter",
        "unit": "km/(s\u00b7Mpc) or 1/s",
        "description": "H(t) = \u0227 / a."
      },
      {
        "symbol": "\u03c1",
        "name": "Total Mass-Energy Density",
        "unit": "kg/m\u00b3",
        "description": "Sum of radiation, baryonic matter, and dark matter densities."
      },
      {
        "symbol": "k",
        "name": "Spatial Curvature Parameter",
        "unit": "dimensionless (-1, 0, +1)",
        "description": "k=0 (flat), k=+1 (closed sphere), k=-1 (open hyperboloid)."
      },
      {
        "symbol": "\u039b",
        "name": "Cosmological Constant (Dark Energy)",
        "unit": "1/s\u00b2",
        "description": "Drives cosmic acceleration."
      }
    ],
    "units": {
      "si": "1/s\u00b2",
      "dimension": "[T\u207b\u00b2]"
    },
    "derivation": "1. Substitute isotropic FLRW metric ds\u00b2 = -c\u00b2dt\u00b2 + a(t)\u00b2 [dr\u00b2/(1-kr\u00b2) + r\u00b2 d\u03a9\u00b2] into Einstein Field Equations.\n2. Model cosmic matter as a perfect fluid: T_\u03bc^\u03bd = diag(-\u03c1c\u00b2, P, P, P).\n3. The 0-0 time component yields the first Friedmann equation: (\u0227/a)\u00b2 = 8\u03c0G\u03c1/3 - kc\u00b2/a\u00b2 + \u039bc\u00b2/3.\n4. The spatial components yield the second (acceleration) Friedmann equation: \u00e4/a = - (4\u03c0G/3)(\u03c1 + 3P/c\u00b2) + \u039bc\u00b2/3.",
    "specialCases": [
      {
        "title": "Critical Density",
        "condition": "Flat universe (k = 0, \u039b = 0)",
        "equation": "\u03c1_crit = 3 H\u00b2 / (8\u03c0G) \u2248 9 \u00d7 10\u207b\u00b2\u2077 kg/m\u00b3",
        "description": "Density required for a flat Euclidean universe."
      },
      {
        "title": "de Sitter Vacuum Expansion",
        "condition": "Dark energy dominated (\u03c1_matter \u2192 0)",
        "equation": "a(t) \u221d e^{H t} \\quad \\text{where } H = \\sqrt{\\Lambda c^2 / 3}",
        "description": "Exponential runaway cosmic inflation."
      }
    ],
    "applications": [
      "Cosmic Microwave Background (CMB) acoustic peak parameter fitting (Planck satellite).",
      "Type Ia supernovae cosmological distance-redshift curve dark energy discovery.",
      "Big Bang nucleosynthesis elemental abundance predictions."
    ],
    "relatedFormulas": [
      "einstein-field-equations",
      "lorentz-transformations"
    ],
    "calculatorId": null,
    "tags": [
      "friedmann",
      "cosmology",
      "big bang",
      "hubble",
      "dark energy",
      "expansion",
      "scale factor"
    ]
  },
  {
    "id": "hookes-law-elasticity",
    "name": "Hooke\u2019s Law & Modulus of Elasticity",
    "equation": "\u03c3 = Y \u00b7 \u03b5 ; F = -k \u00b7 x",
    "latex": "\\sigma = Y \\varepsilon \\quad \\iff \\quad F = -k x",
    "level": "Class 11",
    "subject": "Properties of Matter",
    "topic": "Elasticity & Stress-Strain",
    "difficulty": "Intermediate",
    "explanation": "Within the proportional limit of deformation, stress is directly proportional to strain. For a spring, restoring force is directly proportional to displacement from equilibrium.",
    "variables": [
      {
        "symbol": "\u03c3",
        "name": "Tensile Stress",
        "unit": "N/m\u00b2 (Pa)",
        "description": "Deforming force per unit cross-sectional area (F/A)."
      },
      {
        "symbol": "\u03b5",
        "name": "Longitudinal Strain",
        "unit": "dimensionless",
        "description": "Fractional elongation: \u0394L / L\u2080."
      },
      {
        "symbol": "Y",
        "name": "Young\u2019s Modulus",
        "unit": "N/m\u00b2 (Pa)",
        "description": "Material stiffness measure."
      },
      {
        "symbol": "k",
        "name": "Spring Constant",
        "unit": "N/m",
        "description": "Spring stiffness coefficient."
      }
    ],
    "units": {
      "si": "Pascal (Pa) = N/m\u00b2",
      "dimension": "[M L\u207b\u00b9 T\u207b\u00b2]"
    },
    "derivation": "1. Robert Hooke determined empirically in 1676 that extension is proportional to load: F \u221d x.\n2. Normalizing for geometry: F/A \u221d \u0394L/L\u2080 \u21d2 \u03c3 \u221d \u03b5.\n3. The constant of proportionality is Young's Modulus: Y = \u03c3 / \u03b5 = (F \u00b7 L\u2080) / (A \u00b7 \u0394L).",
    "specialCases": [
      {
        "title": "Elastic Potential Energy",
        "condition": "Stretched by x",
        "equation": "U = \u00bd k x\u00b2 = \u00bd (Stress)(Strain) \u00d7 Volume",
        "description": "Work stored as elastic strain energy."
      },
      {
        "title": "Bulk Modulus",
        "condition": "Hydrostatic pressure",
        "equation": "B = - V (\u0394P / \u0394V)",
        "description": "Resistance to volumetric compression."
      }
    ],
    "applications": [
      "Structural beam load sizing in civil bridge construction.",
      "Vehicle suspension spring wire grade selection.",
      "Biomechanical tendon elasticity testing."
    ],
    "relatedFormulas": [
      "shm-time-period",
      "work-mechanical"
    ],
    "calculatorId": null,
    "tags": [
      "hooke",
      "elasticity",
      "youngs modulus",
      "stress",
      "strain",
      "spring"
    ]
  },
  {
    "id": "archimedes-buoyancy",
    "name": "Archimedes\u2019 Principle of Buoyancy",
    "equation": "F_b = \u03c1_fluid \u00b7 V_disp \u00b7 g",
    "latex": "F_b = \\rho_{\\text{fluid}} V_{\\text{disp}} g",
    "level": "Class 9",
    "subject": "Properties of Matter",
    "topic": "Hydrostatics & Floatation",
    "difficulty": "Beginner",
    "explanation": "Any body completely or partially submerged in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the body.",
    "variables": [
      {
        "symbol": "F_b",
        "name": "Buoyant Force",
        "unit": "N (Newton)",
        "description": "Net upward hydrostatic force exerted by surrounding fluid."
      },
      {
        "symbol": "\u03c1_fluid",
        "name": "Fluid Density",
        "unit": "kg/m\u00b3",
        "description": "Mass density of the liquid or gas."
      },
      {
        "symbol": "V_disp",
        "name": "Displaced Fluid Volume",
        "unit": "m\u00b3",
        "description": "Submerged volume of the object."
      },
      {
        "symbol": "g",
        "name": "Gravitational Acceleration",
        "unit": "m/s\u00b2",
        "description": "9.81 m/s\u00b2."
      }
    ],
    "units": {
      "si": "Newton (N)",
      "dimension": "[M L T\u207b\u00b2]"
    },
    "derivation": "1. Consider a submerged cylinder of height h and cross-sectional area A.\n2. Pressure at top face: P\u2081 = P\u2080 + \u03c1 g h\u2081; downward force: F\u2081 = P\u2081 A.\n3. Pressure at bottom face: P\u2082 = P\u2080 + \u03c1 g (h\u2081 + h); upward force: F\u2082 = P\u2082 A.\n4. Net upward force: F_b = F\u2082 - F\u2081 = (P\u2082 - P\u2081) A = \u03c1 g h A.\n5. Since V_disp = h \u00b7 A, F_b = \u03c1_fluid \u00b7 V_disp \u00b7 g (weight of displaced fluid).",
    "specialCases": [
      {
        "title": "Principle of Floatation",
        "condition": "F_b = Weight of body",
        "equation": "V_sub / V_total = \u03c1_body / \u03c1_fluid",
        "description": "Condition for floating equilibrium."
      },
      {
        "title": "Apparent Weight",
        "condition": "Submerged",
        "equation": "W_apparent = W_true - F_b",
        "description": "Apparent reduction in scale weight in fluid."
      }
    ],
    "applications": [
      "Submarine ballast tank depth and surfacing control.",
      "Naval ship hull displacement tonnage calculations.",
      "Hydrometer specific gravity liquid density measurement."
    ],
    "relatedFormulas": [
      "bernoulli-equation",
      "gravitational-force-newton"
    ],
    "calculatorId": null,
    "tags": [
      "archimedes",
      "buoyancy",
      "floatation",
      "fluid",
      "density",
      "volume"
    ]
  },
  {
    "id": "escape-velocity-formula",
    "name": "Escape Velocity from a Gravitational Field",
    "equation": "v_esc = \u221a(2 \u00b7 G \u00b7 M / R) = \u221a(2 \u00b7 g \u00b7 R)",
    "latex": "v_{\\text{esc}} = \\sqrt{\\frac{2 G M}{R}} = \\sqrt{2 g R}",
    "level": "Class 11",
    "subject": "Gravitation",
    "topic": "Orbital Mechanics",
    "difficulty": "Intermediate",
    "explanation": "The minimum speed that an unpropelled body must achieve at the surface of a spherical mass M to escape its gravitational pull to infinity without further propulsion.",
    "variables": [
      {
        "symbol": "v_esc",
        "name": "Escape Velocity",
        "unit": "m/s",
        "description": "Escape speed from planetary surface (approx 11.2 km/s for Earth)."
      },
      {
        "symbol": "G",
        "name": "Gravitational Constant",
        "unit": "N\u00b7m\u00b2/kg\u00b2",
        "description": "6.6743 \u00d7 10\u207b\u00b9\u00b9 N\u00b7m\u00b2/kg\u00b2."
      },
      {
        "symbol": "M",
        "name": "Planetary Mass",
        "unit": "kg",
        "description": "Mass of attracting central body."
      },
      {
        "symbol": "R",
        "name": "Planetary Radius",
        "unit": "m",
        "description": "Distance from center to launch surface."
      },
      {
        "symbol": "g",
        "name": "Surface Gravity",
        "unit": "m/s\u00b2",
        "description": "g = GM / R\u00b2."
      }
    ],
    "units": {
      "si": "Meter per second (m/s)",
      "dimension": "[L T\u207b\u00b9]"
    },
    "derivation": "1. At surface: Kinetic energy K = \u00bd m v\u00b2, Gravitational Potential energy U = - G M m / R.\n2. Total mechanical energy at launch: E = \u00bd m v\u00b2 - (G M m / R).\n3. At infinity (r \u2192 \u221e), potential energy U(\u221e) = 0 and minimum kinetic energy for escape is K(\u221e) = 0, so E_final = 0.\n4. By conservation of energy: \u00bd m v_esc\u00b2 - (G M m / R) = 0.\n5. Solving for v_esc: v_esc = \u221a(2 G M / R) = \u221a(2 g R).",
    "specialCases": [
      {
        "title": "Earth Escape Speed",
        "condition": "M = 5.972 \u00d7 10\u00b2\u2074 kg, R = 6.371 \u00d7 10\u2076 m",
        "equation": "v_esc \u2248 11.186 km/s \u2248 40,270 km/h",
        "description": "Benchmark for interplanetary space missions."
      },
      {
        "title": "Black Hole Horizon (Schwarzschild)",
        "condition": "v_esc = c",
        "equation": "R_s = 2 G M / c\u00b2",
        "description": "Radius where light cannot escape."
      }
    ],
    "applications": [
      "Interplanetary rocket delta-v launch trajectory budgets.",
      "Atmospheric retention physics (why the Moon lacks an atmosphere).",
      "Gravitational slingshot maneuver calculations."
    ],
    "relatedFormulas": [
      "gravitational-force-newton",
      "schwarzschild-radius",
      "kinetic-energy-classical"
    ],
    "calculatorId": null,
    "tags": [
      "escape velocity",
      "gravitation",
      "orbit",
      "planet",
      "speed",
      "newton"
    ]
  },
  {
    "id": "first-law-thermodynamics",
    "name": "First Law of Thermodynamics",
    "equation": "\u0394U = Q - W",
    "latex": "\\Delta U = Q - W \\quad \\iff \\quad dU = \\delta Q - \\delta W",
    "level": "Class 11",
    "subject": "Thermodynamics",
    "topic": "Laws of Thermodynamics",
    "difficulty": "Intermediate",
    "explanation": "Conservation of energy applied to thermodynamic systems: the change in internal energy \u0394U of a closed system is equal to the net heat Q transferred into the system minus the work W performed by the system on its surroundings.",
    "variables": [
      {
        "symbol": "\u0394U",
        "name": "Change in Internal Energy",
        "unit": "J (Joule)",
        "description": "State function representing microscopic kinetic and potential molecular energy."
      },
      {
        "symbol": "Q",
        "name": "Heat Added to System",
        "unit": "J",
        "description": "Thermal energy transferred across system boundary."
      },
      {
        "symbol": "W",
        "name": "Work Done by System",
        "unit": "J",
        "description": "Mechanical boundary work (W = \u222b P dV)."
      }
    ],
    "units": {
      "si": "Joule (J)",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "Direct manifestation of the Law of Conservation of Energy across thermal and mechanical work boundaries, formulated by Rudolf Clausius and William Thomson (Lord Kelvin).",
    "specialCases": [
      {
        "title": "Isochoric Process (Constant Volume)",
        "condition": "dV = 0 \u21d2 W = 0",
        "equation": "\u0394U = Q_v = n C_v \u0394T",
        "description": "All heat added goes entirely into raising internal energy."
      },
      {
        "title": "Isothermal Process (Ideal Gas)",
        "condition": "\u0394T = 0 \u21d2 \u0394U = 0",
        "equation": "Q = W = n R T ln(V\u2082 / V\u2081)",
        "description": "Heat added is converted entirely to mechanical expansion work."
      }
    ],
    "applications": [
      "Steam power plant Rankine cycle thermal analysis.",
      "Automotive four-stroke Otto and Diesel engine thermodynamic cycles.",
      "Compressor and refrigeration cycle performance coefficients."
    ],
    "relatedFormulas": [
      "ideal-gas-law",
      "carnot-efficiency",
      "work-mechanical"
    ],
    "calculatorId": null,
    "tags": [
      "thermodynamics",
      "internal energy",
      "heat",
      "work",
      "first law",
      "conservation of energy"
    ]
  },
  {
    "id": "carnot-efficiency",
    "name": "Carnot Engine Thermal Efficiency",
    "equation": "\u03b7_carnot = 1 - (T_C / T_H) = (T_H - T_C) / T_H",
    "latex": "\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H} = \\frac{T_H - T_C}{T_H}",
    "level": "Class 11",
    "subject": "Thermodynamics",
    "topic": "Second Law & Heat Engines",
    "difficulty": "Intermediate",
    "explanation": "Calculates the maximum theoretical efficiency that any heat engine operating between two thermal reservoirs at absolute temperatures T_H (hot) and T_C (cold) can ever achieve.",
    "variables": [
      {
        "symbol": "\u03b7",
        "name": "Thermal Efficiency",
        "unit": "dimensionless (0 to 1)",
        "description": "Ratio of net mechanical work produced to heat absorbed from hot reservoir: W_net / Q_H."
      },
      {
        "symbol": "T_H",
        "name": "Hot Reservoir Temperature",
        "unit": "K (Kelvin)",
        "description": "Source temperature."
      },
      {
        "symbol": "T_C",
        "name": "Cold Reservoir Temperature",
        "unit": "K (Kelvin)",
        "description": "Sink / exhaust temperature."
      }
    ],
    "units": {
      "si": "Dimensionless ratio / percentage",
      "dimension": "[1]"
    },
    "derivation": "1. Carnot cycle consists of two reversible isotherms and two reversible adiabats.\n2. Heat absorbed on isotherm at T_H: Q_H = n R T_H ln(V\u2082 / V\u2081).\n3. Heat rejected on isotherm at T_C: Q_C = n R T_C ln(V\u2083 / V\u2084).\n4. Adiabatic relations give V\u2082 / V\u2081 = V\u2083 / V\u2084.\n5. Therefore: Q_C / Q_H = T_C / T_H.\n6. Efficiency: \u03b7 = W / Q_H = (Q_H - Q_C) / Q_H = 1 - Q_C / Q_H = 1 - T_C / T_H.",
    "specialCases": [
      {
        "title": "100% Efficiency Limit",
        "condition": "T_C = 0 K or T_H \u2192 \u221e",
        "equation": "\u03b7 = 1",
        "description": "Impossible due to Third Law of Thermodynamics (absolute zero cannot be reached)."
      },
      {
        "title": "Real Engines (Carnot Inequality)",
        "condition": "Irreversible processes",
        "equation": "\u03b7_real < \u03b7_carnot",
        "description": "Friction and turbulence always degrade real efficiency."
      }
    ],
    "applications": [
      "Nuclear power station turbine steam temperature optimization.",
      "Combined-cycle gas turbine (CCGT) thermodynamic headroom analysis.",
      "Thermoelectric generator efficiency bounds."
    ],
    "relatedFormulas": [
      "first-law-thermodynamics",
      "ideal-gas-law"
    ],
    "calculatorId": null,
    "tags": [
      "carnot",
      "efficiency",
      "heat engine",
      "thermodynamics",
      "temperature",
      "entropy"
    ]
  },
  {
    "id": "kinetic-gas-pressure",
    "name": "Kinetic Theory Pressure of an Ideal Gas",
    "equation": "P = \u2153 \u00b7 \u03c1 \u00b7 v_rms\u00b2 = \u2153 \u00b7 (N/V) \u00b7 m \u00b7 v_rms\u00b2",
    "latex": "P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{1}{3} \\frac{N}{V} m v_{\\text{rms}}^2",
    "level": "Class 11",
    "subject": "Kinetic Theory",
    "topic": "Molecular Dynamics of Gases",
    "difficulty": "Intermediate",
    "explanation": "Derives the macroscopic pressure exerted by an ideal gas from microscopic momentum transfers of randomly colliding molecules against container walls.",
    "variables": [
      {
        "symbol": "P",
        "name": "Gas Pressure",
        "unit": "Pa (N/m\u00b2)",
        "description": "Force per unit wall area."
      },
      {
        "symbol": "\u03c1",
        "name": "Gas Density",
        "unit": "kg/m\u00b3",
        "description": "Mass per unit volume (N\u00b7m / V)."
      },
      {
        "symbol": "v_rms",
        "name": "Root-Mean-Square Speed",
        "unit": "m/s",
        "description": "v_rms = \u221a(3 k_B T / m)."
      },
      {
        "symbol": "N/V",
        "name": "Number Density",
        "unit": "particles/m\u00b3",
        "description": "Molecules per unit container volume."
      }
    ],
    "units": {
      "si": "Pascal (Pa)",
      "dimension": "[M L\u207b\u00b9 T\u207b\u00b2]"
    },
    "derivation": "1. Consider a cubical container of side L with N gas molecules of mass m.\n2. In one collision with wall perpendicular to x-axis, momentum change: \u0394p_x = 2 m v_x.\n3. Time between successive collisions with same wall: \u0394t = 2L / v_x.\n4. Average force per molecule: F_x = \u0394p_x / \u0394t = (2 m v_x) / (2L / v_x) = m v_x\u00b2 / L.\n5. Total force from N particles: F_total = (m/L) \u2211 v_x\u00b2 = (N m / L) <v_x\u00b2>.\n6. For isotropic motion: <v_x\u00b2> = <v_y\u00b2> = <v_z\u00b2> = \u2153 <v\u00b2> = \u2153 v_rms\u00b2.\n7. Pressure: P = F_total / A = F_total / L\u00b2 = (N m / L\u00b3) \u00b7 \u2153 v_rms\u00b2 = \u2153 \u03c1 v_rms\u00b2.",
    "specialCases": [
      {
        "title": "Connection to Temperature",
        "condition": "Translational KE = 3/2 k_B T",
        "equation": "P V = N k_B T",
        "description": "Derives ideal gas law directly from molecular mechanics."
      },
      {
        "title": "RMS Speed Equation",
        "condition": "Rearranging for speed",
        "equation": "v_rms = \u221a(3 R T / M_molar)",
        "description": "Speed of gas molecules increases with square root of temperature."
      }
    ],
    "applications": [
      "Vacuum chamber molecular mean free path and degassing analysis.",
      "Gas effusion and isotopic separation (Graham's Law).",
      "Atmospheric pressure profiling at varying altitudes."
    ],
    "relatedFormulas": [
      "ideal-gas-law",
      "maxwell-boltzmann-distribution"
    ],
    "calculatorId": null,
    "tags": [
      "kinetic theory",
      "pressure",
      "v_rms",
      "gas",
      "molecules",
      "temperature"
    ]
  },
  {
    "id": "biot-savart-law",
    "name": "Biot-Savart Law",
    "equation": "dB = (\u03bc\u2080 / 4\u03c0) \u00b7 (I \u00b7 dl \u00d7 r\u0302) / r\u00b2",
    "latex": "d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l} \\times \\hat{r}}{r^2}",
    "level": "Class 12",
    "subject": "Magnetism",
    "topic": "Magnetic Fields from Currents",
    "difficulty": "Intermediate",
    "explanation": "Calculates the differential magnetic flux density dB produced at a field point by a current element I dl situated at displacement vector r.",
    "variables": [
      {
        "symbol": "dB",
        "name": "Differential Magnetic Field",
        "unit": "T (Tesla)",
        "description": "Field vector produced by current element."
      },
      {
        "symbol": "\u03bc\u2080",
        "name": "Permeability of Free Space",
        "unit": "T\u00b7m/A (or H/m)",
        "description": "4\u03c0 \u00d7 10\u207b\u2077 H/m."
      },
      {
        "symbol": "I",
        "name": "Current",
        "unit": "A (Ampere)",
        "description": "Steady electric current."
      },
      {
        "symbol": "dl",
        "name": "Differential Length Vector",
        "unit": "m",
        "description": "Conductor element vector in current direction."
      },
      {
        "symbol": "r",
        "name": "Distance to Field Point",
        "unit": "m",
        "description": "Distance from source element to observation point."
      }
    ],
    "units": {
      "si": "Tesla (T) = N/(A\u00b7m)",
      "dimension": "[M T\u207b\u00b2 I\u207b\u00b9]"
    },
    "derivation": "1. Jean-Baptiste Biot and F\u00e9lix Savart experimentally showed dB \u221d I, dB \u221d dl, dB \u221d sin \u03b8, and dB \u221d 1/r\u00b2.\n2. In SI units: dB = (\u03bc\u2080 / 4\u03c0) (I dl sin \u03b8 / r\u00b2).\n3. Vector cross product: dl \u00d7 r\u0302 = dl sin \u03b8 n\u0302, where n\u0302 is normal given by right-hand thumb rule.\n4. Hence: dB = (\u03bc\u2080 / 4\u03c0) (I dl \u00d7 r\u0302 / r\u00b2).",
    "specialCases": [
      {
        "title": "Long Straight Conductor",
        "condition": "Infinite wire",
        "equation": "B = (\u03bc\u2080 I) / (2\u03c0 r)",
        "description": "Concentric cylindrical magnetic field lines."
      },
      {
        "title": "Center of Circular Current Loop",
        "condition": "Radius R, N turns",
        "equation": "B = (\u03bc\u2080 N I) / (2 R)",
        "description": "Uniform axial magnetic field at loop center."
      }
    ],
    "applications": [
      "Electromagnet and solenoid magnetic field sizing.",
      "MRI superconducting coil design.",
      "Helmholtz coil uniform magnetic calibration rigs."
    ],
    "relatedFormulas": [
      "maxwell-equations-set",
      "amperes-circuital-law",
      "lorentz-force-law"
    ],
    "calculatorId": null,
    "tags": [
      "biot savart",
      "magnetism",
      "magnetic field",
      "current",
      "tesla",
      "wire"
    ]
  },
  {
    "id": "amperes-circuital-law",
    "name": "Ampere\u2019s Circuital Law",
    "equation": "\u222e B \u00b7 dl = \u03bc\u2080 \u00b7 I_enclosed",
    "latex": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}} \\quad \\iff \\quad \\nabla \\times \\vec{B} = \\mu_0 \\vec{J}",
    "level": "Class 12",
    "subject": "Magnetism",
    "topic": "Circuital Law & Solenoids",
    "difficulty": "Intermediate",
    "explanation": "The line integral of magnetic field B around any closed loop (Amperian loop) is equal to \u03bc\u2080 times the total steady electric current enclosed by the loop.",
    "variables": [
      {
        "symbol": "B",
        "name": "Magnetic Field",
        "unit": "T",
        "description": "Magnetic field vector."
      },
      {
        "symbol": "dl",
        "name": "Differential Line Element",
        "unit": "m",
        "description": "Path tangent element along Amperian contour."
      },
      {
        "symbol": "\u03bc\u2080",
        "name": "Permeability of Free Space",
        "unit": "H/m",
        "description": "4\u03c0 \u00d7 10\u207b\u2077 H/m."
      },
      {
        "symbol": "I_enc",
        "name": "Enclosed Current",
        "unit": "A",
        "description": "Net current threading through loop."
      }
    ],
    "units": {
      "si": "Tesla\u00b7meter (T\u00b7m) = Weber/meter",
      "dimension": "[M L T\u207b\u00b2 I\u207b\u00b9]"
    },
    "derivation": "1. By Stokes' theorem, the line integral converts to a surface integral of curl: \u222e B \u00b7 dl = \u222b (\u2207 \u00d7 B) \u00b7 dA.\n2. Total current is the surface integral of current density: I_enc = \u222b J \u00b7 dA.\n3. Equating integrals for arbitrary surfaces: \u222b (\u2207 \u00d7 B) \u00b7 dA = \u03bc\u2080 \u222b J \u00b7 dA.\n4. Therefore, differential form: \u2207 \u00d7 B = \u03bc\u2080 J (for static currents).",
    "specialCases": [
      {
        "title": "Ideal Solenoid",
        "condition": "n turns per unit meter",
        "equation": "B = \u03bc\u2080 n I",
        "description": "Uniform axial field inside core, zero outside."
      },
      {
        "title": "Toroid",
        "condition": "Mean radius R, N turns",
        "equation": "B = (\u03bc\u2080 N I) / (2\u03c0 r)",
        "description": "Completely confined azimuthal magnetic field."
      }
    ],
    "applications": [
      "Inductor and transformer core geometry winding design.",
      "Magnetic confinement fusion Tokamak poloidal/toroidal field design.",
      "Clamp-on ammeter contactless AC/DC current sensing."
    ],
    "relatedFormulas": [
      "biot-savart-law",
      "maxwell-equations-set",
      "faraday-lenz-induction"
    ],
    "calculatorId": null,
    "tags": [
      "ampere",
      "magnetism",
      "solenoid",
      "toroid",
      "circuital",
      "curl",
      "current"
    ]
  },
  {
    "id": "lorentz-force-law",
    "name": "Lorentz Force Law",
    "equation": "F = q \u00b7 (E + v \u00d7 B)",
    "latex": "\\vec{F} = q \\left( \\vec{E} + \\vec{v} \\times \\vec{B} \\right)",
    "level": "Class 12",
    "subject": "Electromagnetism",
    "topic": "Charged Particles in Fields",
    "difficulty": "Intermediate",
    "explanation": "Calculates the net electromagnetic force exerted on a point charge q moving with velocity v in the presence of both electric and magnetic fields.",
    "variables": [
      {
        "symbol": "F",
        "name": "Lorentz Force",
        "unit": "N (Newton)",
        "description": "Vector sum of electrostatic and magnetic forces."
      },
      {
        "symbol": "q",
        "name": "Charge",
        "unit": "C (Coulomb)",
        "description": "Signed electric charge of particle."
      },
      {
        "symbol": "E",
        "name": "Electric Field Vector",
        "unit": "V/m",
        "description": "Exerts force parallel to field lines (q E)."
      },
      {
        "symbol": "v",
        "name": "Velocity Vector",
        "unit": "m/s",
        "description": "Particle velocity."
      },
      {
        "symbol": "B",
        "name": "Magnetic Flux Density",
        "unit": "T",
        "description": "Exerts deflecting perpendicular force (q v \u00d7 B)."
      }
    ],
    "units": {
      "si": "Newton (N)",
      "dimension": "[M L T\u207b\u00b2]"
    },
    "derivation": "1. Stationary charge experiences electrostatic force: F_e = q E.\n2. A charge moving through magnetic field B experiences perpendicular force: F_m = q (v \u00d7 B).\n3. Superposition principle dictates total force is the vector sum: F = F_e + F_m = q (E + v \u00d7 B).",
    "specialCases": [
      {
        "title": "Velocity Selector (Wien Filter)",
        "condition": "E and B perpendicular, F_net = 0",
        "equation": "v_selected = E / B",
        "description": "Only particles with speed E/B pass undeflected."
      },
      {
        "title": "Cyclotron Frequency",
        "condition": "Uniform B perpendicular to v",
        "equation": "\u03c9_c = (q B) / m ; r_c = (m v) / (q B)",
        "description": "Circular helical orbit radius and orbital frequency."
      }
    ],
    "applications": [
      "Particle accelerators (Cyclotrons and Synchrotrons).",
      "Mass spectrometers sorting isotopes by charge-to-mass ratio m/q.",
      "Hall effect sensors in automotive brushless motor commutation."
    ],
    "relatedFormulas": [
      "coulombs-law",
      "biot-savart-law",
      "centripetal-force"
    ],
    "calculatorId": null,
    "tags": [
      "lorentz force",
      "electric field",
      "magnetic field",
      "cyclotron",
      "charge",
      "velocity selector"
    ]
  },
  {
    "id": "radioactive-decay-law",
    "name": "Law of Radioactive Decay",
    "equation": "N(t) = N\u2080 \u00b7 e^(-\u03bb \u00b7 t) ; T_\u00bd = ln(2) / \u03bb",
    "latex": "N(t) = N_0 e^{-\\lambda t} \\quad , \\quad T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}",
    "level": "Class 12",
    "subject": "Nuclear Physics",
    "topic": "Radioactivity & Half-Life",
    "difficulty": "Intermediate",
    "explanation": "Calculates the statistical exponential decay of unstable radionuclides over time, parameterized by the radioactive decay constant \u03bb and half-life T_\u00bd.",
    "variables": [
      {
        "symbol": "N(t)",
        "name": "Remaining Nuclei Count",
        "unit": "dimensionless integer",
        "description": "Number of undecayed parent nuclei at time t."
      },
      {
        "symbol": "N\u2080",
        "name": "Initial Nuclei Count",
        "unit": "dimensionless integer",
        "description": "Parent nuclei count at t = 0."
      },
      {
        "symbol": "\u03bb (lambda)",
        "name": "Decay Constant",
        "unit": "1/s",
        "description": "Probability of decay per unit time."
      },
      {
        "symbol": "t",
        "name": "Elapsed Time",
        "unit": "s",
        "description": "Duration of radioactive decay."
      },
      {
        "symbol": "T_\u00bd",
        "name": "Half-Life",
        "unit": "s or years",
        "description": "Time required for half the parent nuclei to disintegrate."
      }
    ],
    "units": {
      "si": "Becquerel (Bq) for activity A = \u03bb N = -dN/dt",
      "dimension": "[T\u207b\u00b9]"
    },
    "derivation": "1. Rate of disintegration is directly proportional to number of radioactive atoms present: dN/dt = -\u03bb N.\n2. Separating variables: dN / N = -\u03bb dt.\n3. Integrating both sides from t = 0 (N\u2080) to t (N): ln(N / N\u2080) = -\u03bb t.\n4. Exponentiating both sides: N(t) = N\u2080 e^{-\u03bb t}.\n5. For half-life: N(T_\u00bd) = N\u2080 / 2 \u21d2 e^{-\u03bb T_\u00bd} = \u00bd \u21d2 -\u03bb T_\u00bd = -ln 2 \u21d2 T_\u00bd = ln 2 / \u03bb.",
    "specialCases": [
      {
        "title": "Mean Lifetime (\u03c4)",
        "condition": "\u03c4 = 1 / \u03bb",
        "equation": "N(\u03c4) = N\u2080 / e \u2248 0.368 N\u2080",
        "description": "Average lifespan of an unstable radionuclide."
      },
      {
        "title": "Carbon-14 Dating",
        "condition": "T_\u00bd = 5730 years",
        "equation": "t = [ln(A\u2080 / A)] / \u03bb",
        "description": "Radiometric age determination of organic archeological samples."
      }
    ],
    "applications": [
      "Carbon-14 archaeological radiocarbon dating.",
      "Nuclear medicine radiotherapy dosimetry (Cobalt-60, Iodine-131).",
      "Nuclear reactor fuel depletion and spent rod radiotoxicity management."
    ],
    "relatedFormulas": [
      "nuclear-binding-energy",
      "schrodinger-time-dependent"
    ],
    "calculatorId": null,
    "tags": [
      "radioactivity",
      "half life",
      "decay",
      "nuclear",
      "decay constant",
      "carbon dating"
    ]
  },
  {
    "id": "nuclear-binding-energy",
    "name": "Nuclear Binding Energy & Mass Defect",
    "equation": "\u0394m = [Z\u00b7m_p + (A - Z)\u00b7m_n] - M_nucleus ; BE = \u0394m \u00b7 c\u00b2",
    "latex": "\\Delta m = \\left[ Z m_p + (A - Z) m_n \\right] - M_{\\text{nucleus}} \\quad , \\quad E_b = \\Delta m \\cdot c^2",
    "level": "Class 12",
    "subject": "Nuclear Physics",
    "topic": "Nuclear Binding & Stability",
    "difficulty": "Intermediate",
    "explanation": "The mass of a stable atomic nucleus is always strictly less than the sum of the masses of its constituent free protons and neutrons. The difference (mass defect \u0394m) corresponds to the binding energy holding the nucleus together.",
    "variables": [
      {
        "symbol": "\u0394m",
        "name": "Mass Defect",
        "unit": "kg or amu (u)",
        "description": "Mass discrepancy: 1 u \u2248 931.5 MeV/c\u00b2."
      },
      {
        "symbol": "Z",
        "name": "Atomic Number",
        "unit": "integer",
        "description": "Number of protons in nucleus."
      },
      {
        "symbol": "A",
        "name": "Mass Number",
        "unit": "integer",
        "description": "Total nucleon count (protons + neutrons)."
      },
      {
        "symbol": "m_p",
        "name": "Proton Mass",
        "unit": "u",
        "description": "1.007276 u."
      },
      {
        "symbol": "m_n",
        "name": "Neutron Mass",
        "unit": "u",
        "description": "1.008665 u."
      },
      {
        "symbol": "E_b",
        "name": "Binding Energy",
        "unit": "MeV",
        "description": "Total energy released when nucleus forms from isolated nucleons."
      }
    ],
    "units": {
      "si": "Mega Electron-Volt (MeV) or Joule (J)",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. By Einstein's mass-energy equivalence E = m c\u00b2.\n2. Total mass of separated free nucleons: M_constituents = Z m_p + (A - Z) m_n.\n3. Bound nucleus rests in a lower energy state: E_nucleus = M_nucleus c\u00b2.\n4. Energy liberated during fusion: E_b = M_constituents c\u00b2 - M_nucleus c\u00b2 = \u0394m \u00b7 c\u00b2.\n5. In atomic mass units: E_b (MeV) = \u0394m (in u) \u00d7 931.5 MeV.",
    "specialCases": [
      {
        "title": "Peak Nuclear Stability",
        "condition": "Iron-56 / Nickel-62",
        "equation": "E_b / A \u2248 8.8 MeV / nucleon",
        "description": "Highest binding energy per nucleon; divides fission and fusion regimes."
      },
      {
        "title": "Fission vs Fusion Yield",
        "condition": "A_fission \u2248 235, A_fusion \u2264 4",
        "equation": "Yield = \u0394(E_b/A) \u00d7 A",
        "description": "Exothermic nuclear power generation."
      }
    ],
    "applications": [
      "Nuclear fission reactor core energy release predictions (Uranium-235).",
      "Stellar nucleosynthesis and thermonuclear fusion (ITER Tokamak).",
      "Radioisotope thermoelectric generators (RTG) powering deep-space probes (Voyager)."
    ],
    "relatedFormulas": [
      "relativistic-energy",
      "radioactive-decay-law"
    ],
    "calculatorId": null,
    "tags": [
      "binding energy",
      "mass defect",
      "nuclear",
      "fusion",
      "fission",
      "nucleon",
      "e=mc2"
    ]
  },
  {
    "id": "double-slit-interference",
    "name": "Young\u2019s Double Slit Interference Fringe Width",
    "equation": "\u03b2 = (\u03bb \u00b7 D) / d ; I(\u03b8) = I\u2080 \u00b7 cos\u00b2(\u03c0 d sin \u03b8 / \u03bb)",
    "latex": "\\beta = \\frac{\\lambda D}{d} \\quad , \\quad I(\\theta) = I_0 \\cos^2\\left(\\frac{\\pi d \\sin\\theta}{\\lambda}\\right)",
    "level": "Class 12",
    "subject": "Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Intermediate",
    "explanation": "Calculates the spatial separation (fringe width \u03b2) between adjacent bright or dark fringes on an observation screen placed distance D away from two coherent slits separated by distance d.",
    "variables": [
      {
        "symbol": "\u03b2 (beta)",
        "name": "Fringe Width",
        "unit": "m",
        "description": "Linear spacing between adjacent maxima or minima."
      },
      {
        "symbol": "\u03bb",
        "name": "Optical Wavelength",
        "unit": "m or nm",
        "description": "Wavelength of coherent light source."
      },
      {
        "symbol": "D",
        "name": "Distance to Screen",
        "unit": "m",
        "description": "Distance from slit plane to screen (D \u226b d)."
      },
      {
        "symbol": "d",
        "name": "Slit Separation",
        "unit": "m or mm",
        "description": "Distance between center of the two slits."
      },
      {
        "symbol": "I(\u03b8)",
        "name": "Intensity Distribution",
        "unit": "W/m\u00b2",
        "description": "Angle-dependent optical intensity profile."
      }
    ],
    "units": {
      "si": "Meter (m)",
      "dimension": "[L]"
    },
    "derivation": "1. Optical path difference between rays from slits S\u2081 and S\u2082 to point P on screen at height y: \u0394x = d sin \u03b8 \u2248 d (y / D).\n2. Constructive interference (bright fringes): \u0394x = n \u03bb \u21d2 d (y_n / D) = n \u03bb \u21d2 y_n = n (\u03bb D / d).\n3. Destructive interference (dark fringes): \u0394x = (n + \u00bd) \u03bb \u21d2 y_n' = (n + \u00bd) (\u03bb D / d).\n4. Fringe width \u03b2 = y_{n+1} - y_n = (n + 1) (\u03bb D / d) - n (\u03bb D / d) = (\u03bb D) / d.",
    "specialCases": [
      {
        "title": "Submerged in Medium",
        "condition": "Refractive index n_med",
        "equation": "\u03b2' = \u03b2 / n_med",
        "description": "Fringe width shrinks proportionally as wavelength shortens in medium."
      },
      {
        "title": "Single Slit Diffraction Envelope",
        "condition": "Slit width a",
        "equation": "I = I\u2080 [sin(\u03b1)/\u03b1]\u00b2 cos\u00b2(\u03b2)",
        "description": "Modulated by single-slit diffraction envelope."
      }
    ],
    "applications": [
      "Optical coherence length and laser wavelength calibration.",
      "Antireflection thin-film optical coating design.",
      "Quantum wave-particle duality demonstration with photons, electrons, and buckyballs."
    ],
    "relatedFormulas": [
      "wave-velocity-equation",
      "de-broglie-wavelength",
      "snells-law-refraction"
    ],
    "calculatorId": null,
    "tags": [
      "double slit",
      "interference",
      "fringe width",
      "young",
      "wave optics",
      "intensity"
    ]
  },
  {
    "id": "quantum-harmonic-oscillator",
    "name": "Quantum Harmonic Oscillator Energy Eigenvalues",
    "equation": "E_n = (n + \u00bd) \u00b7 \u0127 \u00b7 \u03c9 ; V(x) = \u00bd \u00b7 m \u00b7 \u03c9\u00b2 \u00b7 x\u00b2",
    "latex": "E_n = \\left(n + \\frac{1}{2}\\right) \\hbar \\omega \\quad , \\quad n = 0, 1, 2, 3\\dots",
    "level": "B.Sc. Physics",
    "subject": "Quantum Mechanics",
    "topic": "Harmonic Potential & Ladder Operators",
    "difficulty": "Advanced",
    "explanation": "Calculates the equally spaced, quantized energy eigenvalues of a quantum particle moving in a parabolic harmonic potential well V(x) = \u00bd m \u03c9\u00b2 x\u00b2.",
    "variables": [
      {
        "symbol": "E_n",
        "name": "Energy Eigenvalue",
        "unit": "J or eV",
        "description": "Equally spaced ladder of quantized energies."
      },
      {
        "symbol": "n",
        "name": "Vibrational Quantum Number",
        "unit": "integer (0, 1, 2...)",
        "description": "n = 0 is ground state."
      },
      {
        "symbol": "\u0127",
        "name": "Reduced Planck Constant",
        "unit": "J\u00b7s",
        "description": "1.05457 \u00d7 10\u207b\u00b3\u2074 J\u00b7s."
      },
      {
        "symbol": "\u03c9",
        "name": "Classical Angular Frequency",
        "unit": "rad/s",
        "description": "\u03c9 = \u221a(k/m)."
      },
      {
        "symbol": "E\u2080",
        "name": "Zero-Point Energy",
        "unit": "J",
        "description": "E\u2080 = \u00bd \u0127 \u03c9 (non-zero ground state)."
      }
    ],
    "units": {
      "si": "Joule (J)",
      "dimension": "[M L\u00b2 T\u207b\u00b2]"
    },
    "derivation": "1. Hamiltonian: \u0124 = p\u0302\u00b2/(2m) + \u00bd m \u03c9\u00b2 x\u0302\u00b2.\n2. Define dimensionless ladder operators (annihilation a and creation a\u2020):\n   a = \u221a(m\u03c9/2\u0127) (x\u0302 + i p\u0302/(m\u03c9)), a\u2020 = \u221a(m\u03c9/2\u0127) (x\u0302 - i p\u0302/(m\u03c9)).\n3. Commutator [a, a\u2020] = 1.\n4. Hamiltonian in terms of number operator N\u0302 = a\u2020 a:\n   \u0124 = \u0127 \u03c9 (a\u2020 a + \u00bd) = \u0127 \u03c9 (N\u0302 + \u00bd).\n5. The spectrum of N\u0302 is non-negative integers n = 0, 1, 2...\n6. Therefore: E_n = (n + \u00bd) \u0127 \u03c9.",
    "specialCases": [
      {
        "title": "Zero-Point Fluctuations",
        "condition": "n = 0",
        "equation": "E\u2080 = \u00bd \u0127 \u03c9",
        "description": "Particle never rests at the bottom of the potential."
      },
      {
        "title": "Equal Energy Spacing",
        "condition": "\u0394E = E_{n+1} - E_n",
        "equation": "\u0394E = \u0127 \u03c9",
        "description": "Absorbs and emits single quanta of energy \u0127\u03c9 (phonons/photons)."
      }
    ],
    "applications": [
      "Molecular vibrational spectroscopy (Infrared IR and Raman spectra).",
      "Phonon quantization in crystal lattices and solid-state heat capacity (Einstein/Debye models).",
      "Superconducting microwave resonator circuit QED qubits."
    ],
    "relatedFormulas": [
      "schrodinger-time-independent",
      "particle-in-box-energy",
      "shm-time-period"
    ],
    "calculatorId": null,
    "tags": [
      "harmonic oscillator",
      "quantum",
      "zero point energy",
      "ladder operators",
      "hermite polynomials",
      "eigenvalues"
    ]
  },
  {
    "id": "wavefunction-normalization",
    "name": "Wavefunction Normalization & Probability Density",
    "equation": "\u222b |\u03c8(x, t)|\u00b2 dx = 1 ; P(a \u2264 x \u2264 b) = \u222b_a^b |\u03c8(x, t)|\u00b2 dx",
    "latex": "\\int_{-\\infty}^{\\infty} |\\psi(x, t)|^2 \\, dx = 1 \\quad , \\quad P(a \\le x \\le b) = \\int_a^b \\psi^*(x, t) \\psi(x, t) \\, dx",
    "level": "B.Sc. Physics",
    "subject": "Quantum Mechanics",
    "topic": "Born Statistical Interpretation",
    "difficulty": "Intermediate",
    "explanation": "Max Born's probabilistic interpretation: the wavefunction \u03c8 is a probability amplitude whose modulus squared |\u03c8|\u00b2 represents the spatial probability density. The total probability of finding the particle anywhere in the entire universe must strictly equal 1.",
    "variables": [
      {
        "symbol": "\u03c8(x, t)",
        "name": "Complex Wavefunction",
        "unit": "1/\u221am",
        "description": "Quantum state amplitude."
      },
      {
        "symbol": "|\u03c8|\u00b2",
        "name": "Probability Density",
        "unit": "1/m",
        "description": "|\u03c8|\u00b2 = \u03c8* \u03c8 (always real and non-negative)."
      },
      {
        "symbol": "P(a \u2264 x \u2264 b)",
        "name": "Probability",
        "unit": "dimensionless (0 to 1)",
        "description": "Probability of measurement detecting particle in interval [a, b]."
      }
    ],
    "units": {
      "si": "Integral is dimensionless (= 1)",
      "dimension": "[1]"
    },
    "derivation": "1. Since the particle must exist somewhere in physical space at any instant t, the sum of probabilities over all space must be certainty (100% or 1).\n2. Born postulate: Probability in interval dx is dP = |\u03c8(x)|\u00b2 dx.\n3. Integrating over all space: \u222b_{-\u221e}^{\u221e} |\u03c8(x)|\u00b2 dx = 1.\n4. Unitary time evolution under Hermitian Hamiltonian preserves this norm: d/dt \u222b |\u03c8|\u00b2 dx = 0.",
    "specialCases": [
      {
        "title": "Orthogonality of Eigenstates",
        "condition": "Stationary states m \u2260 n",
        "equation": "\u222b \u03c8_m*(x) \u03c8_n(x) dx = \u03b4_mn",
        "description": "Eigenstates of Hermitian operators form an orthonormal basis."
      },
      {
        "title": "Expectation Value",
        "condition": "Observable operator \u00c2",
        "equation": "<\u00c2> = \u222b \u03c8* \u00c2 \u03c8 dx",
        "description": "Average measurement expectation value."
      }
    ],
    "applications": [
      "Electron orbital cloud visualization in atomic chemistry (s, p, d orbitals).",
      "Quantum measurement tomography in quantum computing.",
      "Tunneling probability and alpha decay lifetime calculations."
    ],
    "relatedFormulas": [
      "particle-in-box-energy",
      "schrodinger-time-independent",
      "schrodinger-time-dependent"
    ],
    "calculatorId": null,
    "tags": [
      "normalization",
      "probability density",
      "born interpretation",
      "wavefunction",
      "quantum",
      "particle in box",
      "integral"
    ]
  },
  {
    "id": "semiconductor-mass-action",
    "name": "Mass Action Law in Semiconductors",
    "equation": "n \u00b7 p = n_i\u00b2 = N_c \u00b7 N_v \u00b7 exp(-E_g / (k_B \u00b7 T))",
    "latex": "n \\cdot p = n_i^2 = N_c N_v e^{-E_g / (k_B T)}",
    "level": "B.Tech / Engineering Physics",
    "subject": "Semiconductor Physics",
    "topic": "Carrier Concentrations",
    "difficulty": "Advanced",
    "explanation": "Under thermal equilibrium, the product of free electron concentration n in the conduction band and free hole concentration p in the valence band is a constant equal to n_i\u00b2 for a given semiconductor at temperature T, independent of doping.",
    "variables": [
      {
        "symbol": "n",
        "name": "Electron Concentration",
        "unit": "1/cm\u00b3",
        "description": "Free electrons per unit volume in conduction band."
      },
      {
        "symbol": "p",
        "name": "Hole Concentration",
        "unit": "1/cm\u00b3",
        "description": "Free holes per unit volume in valence band."
      },
      {
        "symbol": "n_i",
        "name": "Intrinsic Carrier Concentration",
        "unit": "1/cm\u00b3",
        "description": "Carrier concentration in pure undoped crystal."
      },
      {
        "symbol": "E_g",
        "name": "Bandgap Energy",
        "unit": "eV",
        "description": "Energy gap between valence and conduction bands (1.12 eV for Silicon)."
      },
      {
        "symbol": "N_c, N_v",
        "name": "Effective Density of States",
        "unit": "1/cm\u00b3",
        "description": "Conduction and valence band effective state densities."
      }
    ],
    "units": {
      "si": "1/m\u2076 (or 1/cm\u2076)",
      "dimension": "[L\u207b\u2076]"
    },
    "derivation": "1. Electron density: n = N_c exp(-(E_c - E_F)/k_B T).\n2. Hole density: p = N_v exp(-(E_F - E_v)/k_B T).\n3. Multiplying together: n \u00b7 p = N_c N_v exp(-(E_c - E_v)/k_B T).\n4. Since E_c - E_v = E_g (bandgap energy):\n5. n \u00b7 p = N_c N_v exp(-E_g / k_B T) = n_i\u00b2.",
    "specialCases": [
      {
        "title": "n-type Semiconductor",
        "condition": "Donor doping N_d \u226b n_i",
        "equation": "n \u2248 N_d ; p \u2248 n_i\u00b2 / N_d",
        "description": "Holes become minority carriers."
      },
      {
        "title": "p-type Semiconductor",
        "condition": "Acceptor doping N_a \u226b n_i",
        "equation": "p \u2248 N_a ; n \u2248 n_i\u00b2 / N_a",
        "description": "Electrons become minority carriers."
      }
    ],
    "applications": [
      "PN junction diode built-in barrier voltage design.",
      "Bipolar junction transistor (BJT) minority carrier injection efficiency.",
      "CMOS microprocessor leakage current modeling at elevated temperatures."
    ],
    "relatedFormulas": [
      "fermi-dirac-distribution",
      "drude-conductivity"
    ],
    "calculatorId": null,
    "tags": [
      "semiconductor",
      "mass action",
      "bandgap",
      "carrier concentration",
      "silicon",
      "doping"
    ]
  },
  {
    "id": "drude-conductivity",
    "name": "Drude Model Electrical Conductivity",
    "equation": "\u03c3 = (n \u00b7 e\u00b2 \u00b7 \u03c4) / m ; J = \u03c3 \u00b7 E",
    "latex": "\\sigma = \\frac{n e^2 \\tau}{m} \\quad \\iff \\quad \\vec{J} = \\sigma \\vec{E}",
    "level": "B.Sc. Physics",
    "subject": "Solid State Physics",
    "topic": "Electronic Conduction in Metals",
    "difficulty": "Intermediate",
    "explanation": "Calculates the DC electrical conductivity \u03c3 of a conductor based on Paul Drude's free-electron gas model with mean collision relaxation time \u03c4.",
    "variables": [
      {
        "symbol": "\u03c3",
        "name": "Electrical Conductivity",
        "unit": "S/m (Siemens/meter)",
        "description": "Inverse of resistivity (\u03c3 = 1/\u03c1)."
      },
      {
        "symbol": "n",
        "name": "Free Conduction Electron Density",
        "unit": "1/m\u00b3",
        "description": "Number of free valence electrons per unit volume."
      },
      {
        "symbol": "e",
        "name": "Elementary Charge",
        "unit": "C",
        "description": "1.602 \u00d7 10\u207b\u00b9\u2079 C."
      },
      {
        "symbol": "\u03c4 (tau)",
        "name": "Mean Relaxation Time",
        "unit": "s",
        "description": "Average time between electron-ion lattice collisions."
      },
      {
        "symbol": "m",
        "name": "Electron Mass",
        "unit": "kg",
        "description": "9.109 \u00d7 10\u207b\u00b3\u00b9 kg."
      }
    ],
    "units": {
      "si": "Siemens per meter (S/m) = 1/(\u03a9\u00b7m)",
      "dimension": "[M\u207b\u00b9 L\u207b\u00b3 T\u00b3 I\u00b2]"
    },
    "derivation": "1. Force on electron in electric field E: F = m (dv/dt) = -e E.\n2. In presence of scattering drag: m (dv/dt + v/\u03c4) = -e E.\n3. Steady-state drift velocity: v_d = - (e E \u03c4) / m.\n4. Current density: J = - n e v_d = n e [(e E \u03c4) / m] = [ (n e\u00b2 \u03c4) / m ] E.\n5. By microscopic Ohm's law J = \u03c3 E, electrical conductivity is \u03c3 = (n e\u00b2 \u03c4) / m.",
    "specialCases": [
      {
        "title": "Wiedemann-Franz Law",
        "condition": "Thermal vs Electrical conductivity ratio",
        "equation": "\u03ba / \u03c3 = L_lorentz \u00b7 T",
        "description": "Lorenz number connects thermal and electrical conductivity in metals."
      },
      {
        "title": "AC Conductivity (Plasma Frequency)",
        "condition": "High frequency field \u03c9",
        "equation": "\u03c3(\u03c9) = \u03c3\u2080 / (1 - i \u03c9 \u03c4) ; \u03c9_p = \u221a(n e\u00b2 / (\u03b5\u2080 m))",
        "description": "Explains metal reflectivity and optical transparency cutoff."
      }
    ],
    "applications": [
      "Copper and aluminum transmission cable conductivity grading.",
      "Thin-film metal interconnect resistivity in integrated circuits.",
      "Plasmonics and optical shielding coatings."
    ],
    "relatedFormulas": [
      "ohms-law",
      "electrical-resistance-geometry"
    ],
    "calculatorId": null,
    "tags": [
      "drude",
      "conductivity",
      "resistivity",
      "electron gas",
      "relaxation time",
      "solid state"
    ]
  },
  {
    "id": "schwarzschild-radius",
    "name": "Schwarzschild Radius (Black Hole Event Horizon)",
    "equation": "r_s = (2 \u00b7 G \u00b7 M) / c\u00b2",
    "latex": "r_s = \\frac{2 G M}{c^2}",
    "level": "Advanced / PhD",
    "subject": "Relativity",
    "topic": "Black Holes & Spacetime Geometry",
    "difficulty": "Expert",
    "explanation": "Calculates the event horizon radius of a static, uncharged (Schwarzschild) spherically symmetric black hole of mass M. Within this boundary, escape velocity equals the speed of light.",
    "variables": [
      {
        "symbol": "r_s",
        "name": "Schwarzschild Radius",
        "unit": "m (or km)",
        "description": "Radius of the black hole event horizon (approx 3 km per solar mass)."
      },
      {
        "symbol": "G",
        "name": "Newtonian Gravitational Constant",
        "unit": "N\u00b7m\u00b2/kg\u00b2",
        "description": "6.6743 \u00d7 10\u207b\u00b9\u00b9 N\u00b7m\u00b2/kg\u00b2."
      },
      {
        "symbol": "M",
        "name": "Black Hole Mass",
        "unit": "kg (or M_sun)",
        "description": "Total mass of gravitating object."
      },
      {
        "symbol": "c",
        "name": "Speed of Light",
        "unit": "m/s",
        "description": "299,792,458 m/s."
      }
    ],
    "units": {
      "si": "Meter (m)",
      "dimension": "[L]"
    },
    "derivation": "1. Karl Schwarzschild solved Einstein's vacuum field equations R_\u03bc\u03bd = 0 in 1916 for spherical symmetry.\n2. Metric: ds\u00b2 = -(1 - 2GM/(r c\u00b2)) c\u00b2 dt\u00b2 + (1 - 2GM/(r c\u00b2))\u207b\u00b9 dr\u00b2 + r\u00b2 d\u03a9\u00b2.\n3. The metric coefficient g_rr diverges and g_00 vanishes when 1 - 2GM/(r c\u00b2) = 0.\n4. Solving for r gives the coordinate singularity (event horizon): r_s = 2GM / c\u00b2.\n5. (Remarkably, setting Newtonian escape velocity v_esc = \u221a(2GM/R) = c yields the exact same formula).",
    "specialCases": [
      {
        "title": "Solar Mass Black Hole",
        "condition": "M = 1 M_\u2609 \u2248 1.989 \u00d7 10\u00b3\u2070 kg",
        "equation": "r_s \u2248 2.95 km",
        "description": "If the Sun collapsed into a black hole, its radius would be ~3 km."
      },
      {
        "title": "Gravitational Time Dilation",
        "condition": "Observed from infinity",
        "equation": "\u0394t = \u0394t\u2080 / \u221a(1 - r_s / r)",
        "description": "Clocks appear to freeze completely at r = r_s to distant observers."
      }
    ],
    "applications": [
      "LIGO gravitational wave binary black hole merger ringdown analysis.",
      "Event Horizon Telescope shadow diameter verification for Sagittarius A*.",
      "Astrophysical accretion disk relativistic ray tracing."
    ],
    "relatedFormulas": [
      "einstein-field-equations",
      "escape-velocity-formula",
      "friedmann-equations"
    ],
    "calculatorId": null,
    "tags": [
      "schwarzschild",
      "black hole",
      "event horizon",
      "general relativity",
      "spacetime",
      "singularity"
    ]
  },
  {
    "id": "fourier-transform-formula",
    "name": "Continuous Fourier Transform & Parseval Theorem",
    "equation": "F(\u03c9) = \u222b f(t)\u00b7e^(-i\u03c9t) dt ; f(t) = (1/2\u03c0) \u222b F(\u03c9)\u00b7e^(i\u03c9t) d\u03c9",
    "latex": "\\mathcal{F}\\{f(t)\\} = F(\\omega) = \\int_{-\\infty}^{\\infty} f(t) e^{-i\\omega t}\\, dt \\quad , \\quad \\int |f(t)|^2 dt = \\frac{1}{2\\pi}\\int |F(\\omega)|^2 d\\omega",
    "level": "Mathematical Physics",
    "subject": "Mathematical Physics",
    "topic": "Integral Transforms & Spectral Analysis",
    "difficulty": "Advanced",
    "explanation": "Decomposes any physical signal or wavepacket from its continuous temporal or spatial domain representation into its constituent harmonic frequencies.",
    "variables": [
      {
        "symbol": "f(t)",
        "name": "Time-Domain Function",
        "unit": "arbitrary",
        "description": "Physical waveform signal."
      },
      {
        "symbol": "F(\u03c9)",
        "name": "Frequency-Domain Spectrum",
        "unit": "signal unit \u00b7 s",
        "description": "Complex spectral amplitude and phase distribution."
      },
      {
        "symbol": "\u03c9",
        "name": "Angular Frequency",
        "unit": "rad/s",
        "description": "Fourier transform dual variable."
      }
    ],
    "units": {
      "si": "Dual domain spectral transform",
      "dimension": "Product of f(t) and [T]"
    },
    "derivation": "1. Generalizes Fourier series to a continuous spectrum as period T \u2192 \u221e.\n2. Orthonormality of complex exponential basis: (1/2\u03c0) \u222b e^{i(\u03c9 - \u03c9')t} dt = \u03b4(\u03c9 - \u03c9').\n3. Applying Plancherel's theorem guarantees total energy conservation between time and frequency domains.",
    "specialCases": [
      {
        "title": "Gaussian Wavepacket Transform",
        "condition": "f(t) = exp(-a t\u00b2)",
        "equation": "F(\u03c9) = \u221a(\u03c0/a) exp(-\u03c9\u00b2 / 4a)",
        "description": "Fourier transform of a Gaussian is another Gaussian (saturates uncertainty bound)."
      },
      {
        "title": "Dirac Delta Sifting",
        "condition": "f(t) = \u03b4(t - t\u2080)",
        "equation": "F(\u03c9) = e^{-i \u03c9 t\u2080}",
        "description": "Uniform white spectrum."
      }
    ],
    "applications": [
      "Quantum state momentum-space wavefunctions \u03c8(p) = (1/\u221a(2\u03c0\u0127)) \u222b \u03c8(x) e^{-ipx/\u0127} dx.",
      "Optical Fourier filtering and diffraction pattern formation in focal plane of lens.",
      "NMR / MRI radio-frequency FID signal image reconstruction."
    ],
    "relatedFormulas": [
      "heisenberg-uncertainty",
      "wave-velocity-equation"
    ],
    "calculatorId": null,
    "tags": [
      "fourier",
      "transform",
      "frequency",
      "spectral",
      "mathematical physics",
      "wavepacket"
    ]
  },
  {
    "id": "opamp-inverting-gain",
    "name": "Operational Amplifier Inverting Closed-Loop Gain",
    "equation": "V_out = - (R_f / R_in) \u00b7 V_in",
    "latex": "A_v = \\frac{V_{\\text{out}}}{V_{\\text{in}}} = -\\frac{R_f}{R_{\\text{in}}}",
    "level": "Electronics",
    "subject": "Electronics",
    "topic": "Operational Amplifiers",
    "difficulty": "Intermediate",
    "explanation": "Calculates the closed-loop voltage amplification of an ideal operational amplifier circuit configured in negative-feedback inverting mode.",
    "variables": [
      {
        "symbol": "A_v",
        "name": "Closed-Loop Voltage Gain",
        "unit": "dimensionless (V/V)",
        "description": "Negative sign indicates 180\u00b0 phase inversion."
      },
      {
        "symbol": "R_f",
        "name": "Feedback Resistor",
        "unit": "\u03a9",
        "description": "Resistor connecting output to inverting terminal."
      },
      {
        "symbol": "R_in",
        "name": "Input Resistor",
        "unit": "\u03a9",
        "description": "Resistor between input voltage source and inverting terminal."
      },
      {
        "symbol": "V_in",
        "name": "Input Signal Voltage",
        "unit": "V",
        "description": "Analog voltage source."
      }
    ],
    "units": {
      "si": "Dimensionless ratio / Volts per Volt",
      "dimension": "[1]"
    },
    "derivation": "1. Ideal Op-Amp golden rules: (i) Infinite input impedance \u21d2 zero current into terminals (I_in = I_f); (ii) Infinite open-loop gain with negative feedback \u21d2 inverting terminal is at virtual ground (V_(-) = V_(+) = 0 V).\n2. Input branch current: I_in = (V_in - 0) / R_in = V_in / R_in.\n3. Feedback branch current: I_f = (0 - V_out) / R_f = -V_out / R_f.\n4. Equating currents by KCL: V_in / R_in = -V_out / R_f.\n5. Therefore: V_out / V_in = - R_f / R_in.",
    "specialCases": [
      {
        "title": "Unity Gain Inverter (Buffer Inversion)",
        "condition": "R_f = R_in",
        "equation": "A_v = -1",
        "description": "Inverts signal polarity with unity magnitude."
      },
      {
        "title": "Summing Amplifier",
        "condition": "Multiple inputs V_1, V_2",
        "equation": "V_out = - R_f (V_1/R_1 + V_2/R_2)",
        "description": "Performs analog algebraic addition."
      }
    ],
    "applications": [
      "Analog signal conditioning and active audio filtering.",
      "Current-to-voltage transimpedance amplifiers in photodiodes.",
      "Analog computers executing mathematical integration and differentiation."
    ],
    "relatedFormulas": [
      "ohms-law",
      "electrical-power-joule"
    ],
    "calculatorId": null,
    "tags": [
      "opamp",
      "electronics",
      "gain",
      "amplifier",
      "virtual ground",
      "inverting"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ACADEMIC_LEVELS, SUBJECT_CATEGORIES, FORMULAS_DATA };
}
