const db = require("./config/firebase");

const test = async () => {
  try {
    const docRef = await db.collection("test").add({
      message: "Firebase Connected",
      createdAt: new Date(),
    });

    console.log("Document ID:", docRef.id);
  } catch (error) {
    console.error(error);
  }
};

test();
