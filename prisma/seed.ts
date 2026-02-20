import prisma from "../lib/prisma";

async function main() {
  console.log("🌱 Seeding database...");

  // Create demo users
  const user1 = await prisma.user.create({
    data: {
      email: "john@example.com",
      emailVerified: new Date(),
      profile: {
        create: {
          name: "John Doe",
          bio: "Software engineer and brotherhood enthusiast",
          country: "United States",
          city: "New York",
          profession: "Software Engineer",
          interests: ["Technology", "Philosophy", "Travel"],
          verificationStatus: "VERIFIED",
          latitude: 40.7128,
          longitude: -74.0060,
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "jane@example.com",
      emailVerified: new Date(),
      profile: {
        create: {
          name: "Jane Smith",
          bio: "Designer and community builder",
          country: "Brazil",
          city: "São Paulo",
          profession: "UX Designer",
          interests: ["Design", "Art", "Community"],
          verificationStatus: "VERIFIED",
          latitude: -23.5505,
          longitude: -46.6333,
        },
      },
    },
  });

  // Create connection
  await prisma.connection.create({
    data: {
      userId: user1.id,
      connectedId: user2.id,
    },
  });

  await prisma.connection.create({
    data: {
      userId: user2.id,
      connectedId: user1.id,
    },
  });

  // Create a demo post
  await prisma.post.create({
    data: {
      authorId: user1.id,
      content: "Excited to be part of the Vitriol Global Brotherhood! Looking forward to connecting with brothers worldwide.",
      published: true,
    },
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
