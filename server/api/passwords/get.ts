export default defineEventHandler((event) => {
  const template = {
    title: "",
    email: "",
    password: "",
    health: "",
    website: "",
    folder: "1",
  };

  function randomString(length: number) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  }

  // Function to generate a random data set
  function generateRandomData(template: { title: string; email: string; password: string; health: number; website: string; folder: string; }) {
    const randomData = { ...template }; // Create a copy of the template
    randomData.title = randomString(8); // Generate a random title (8 characters)
    randomData.email = randomString(10) + "@example.com"; // Generate a random email
    randomData.password = randomString(12); // Generate a random password (12 characters)
    randomData.health = Math.floor(Math.random() * 101); // Generate a random health value (0-100)
    randomData.website =
      "https://www.example" + Math.floor(Math.random() * 10) + ".com"; // Generate a random website
    return randomData;
  }

  // Generate 5 random data sets
  const randomDataSets = [];
  for (let i = 0; i < 25; i++) {
    randomDataSets.push(generateRandomData(template));
  }

  console.log(randomDataSets);

  return {
    body: { randomDataSets },
  };
});
