import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../variants";

const packageData = [
  {
    name: "DataStruct-Kit",
    pypiBadge: "https://img.shields.io/pypi/v/datastruct-kit.svg",
    description: "A comprehensive Python library providing efficient implementations of data structures and algorithms with detailed documentation and examples.",
    installation: "pip install datastruct-kit",
    usage: `from datastruct_kit import LinkedList, BinaryTree, Graph

# Create a linked list
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)

# Create a binary tree
bt = BinaryTree()
bt.insert(5)
bt.insert(3)
bt.insert(7)

# Create a graph
g = Graph()
g.add_edge('A', 'B')
g.add_edge('B', 'C')
g.add_edge('C', 'A')`,
    useCases: [
      "Educational purposes for learning data structures",
      "Algorithm implementation reference",
      "Quick prototyping of data structure solutions",
      "Academic projects and research"
    ],
    githubLink: "https://github.com/Pavansai20054/datastruct-kit",
    docsLink: "https://datastruct-kit.readthedocs.io/",
    pypiLink: "https://pypi.org/project/datastruct-kit/"
  },
  {
    name: "logictools",
    pypiBadge: "https://img.shields.io/pypi/v/logictools.svg",
    description: "A Python toolkit for digital logic design, circuit simulation, and logic gate operations with visualization capabilities.",
    installation: "pip install logictools",
    usage: `from logictools import LogicGate, Circuit

# Create logic gates
and_gate = LogicGate('AND')
or_gate = LogicGate('OR')
not_gate = LogicGate('NOT')

# Build a circuit
circuit = Circuit()
circuit.add_gate(and_gate, inputs=['A', 'B'])
circuit.add_gate(or_gate, inputs=['C', 'D'])
circuit.add_gate(not_gate, inputs=['E'])

# Evaluate circuit
result = circuit.evaluate({
    'A': True, 'B': False, 'C': True, 
    'D': False, 'E': True
})`,
    useCases: [
      "Digital logic design and education",
      "Circuit simulation and testing",
      "Computer architecture projects",
      "Logic gate visualization"
    ],
    githubLink: "https://github.com/Pavansai20054/logictools",
    docsLink: "https://logictools.readthedocs.io/",
    pypiLink: "https://pypi.org/project/logictools/"
  }
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-20 sm:py-24 md:py-28 lg:py-32 xl:text-left px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold"
          >
            Python <span className="text-accent">Packages</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 text-base sm:text-lg md:text-xl text-center max-w-3xl leading-relaxed"
          >
            Open-source Python packages I&apos;ve developed and published on PyPI to help the developer community.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {packageData.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8"
            >
              {/* Package Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-accent">{pkg.name}</h3>
                <a
                  href={pkg.pypiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity self-start sm:self-auto"
                >
                  <Image
                    src={pkg.pypiBadge}
                    alt={`PyPI version for ${pkg.name}`}
                    width={80}
                    height={24}
                    className="h-5 sm:h-6 w-auto"
                  />
                </a>
              </div>

              {/* Description */}
              <p className="text-white/60 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{pkg.description.replace(/'/g, "&apos;")}</p>

              {/* Installation */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Installation</h4>
                <div className="bg-primary/50 rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <code className="text-accent font-mono text-xs sm:text-sm whitespace-nowrap">{pkg.installation}</code>
                </div>
              </div>

              {/* Usage Example */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Quick Start</h4>
                <div className="bg-primary/50 rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <pre className="text-white/80 font-mono text-xs sm:text-sm">
                    <code>{pkg.usage}</code>
                  </pre>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Use Cases</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {pkg.useCases.map((useCase, useCaseIndex) => (
                    <li key={useCaseIndex} className="text-white/60 flex items-start text-sm sm:text-base">
                      <span className="text-accent mr-2 flex-shrink-0">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
                <a
                  href={pkg.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-all text-sm text-center"
                >
                  GitHub
                </a>
                <a
                  href={pkg.docsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-accent/80 transition-all text-sm text-center"
                >
                  Documentation
                </a>
                <a
                  href={pkg.pypiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm text-center"
                >
                  View on PyPI
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contributing to Open Source</h3>
            <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              I believe in the power of open-source software and actively contribute to the Python ecosystem. 
              These packages are designed to be educational, well-documented, and easy to use for developers of all skill levels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="https://github.com/Pavansai20054"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base"
              >
                View All Projects
              </a>
              <a
                href="https://pypi.org/user/Pavansai20054/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-accent/80 transition-all text-sm sm:text-base"
              >
                PyPI Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Packages; 