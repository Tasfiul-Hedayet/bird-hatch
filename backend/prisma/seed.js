const { birds } = require('./birds');
const { weights } = require('./weights');
const prisma = require('../util/db');

async function weightSeed() {
  try {
    for (let weight of weights) {
      await prisma.weights.create({
        data: weight
      });
    }
    console.log('Weights seeded successfully.');
  } catch (error) {
    console.error('Error seeding weights:', error);
    throw error;
  }
}

async function birdSeed() {
  try {
    await weightSeed(); // Ensure weights are seeded before bird seeding
    for (let bird of birds) {
      await prisma.birds.create({
        data: bird
      });
    }
    console.log('Birds seeded successfully.');
  } catch (error) {
    console.error('Error seeding birds:', error);
    throw error;
  } finally {
    prisma.$disconnect();
  }
}

// Call the birdSeed function
birdSeed().catch((error) => {
  console.error(error);
  process.exit(1);
});
