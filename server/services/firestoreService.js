const db = require("../config/firebase");

// Save roast
const saveRoast = async (roastData) => {
  const docRef = await db.collection("roasts").add({
    ...roastData,
    createdAt: new Date(),
  });

  return docRef.id;
};

// Find roast by URL (for duplicate prevention)
const findRoastByUrl = async (url) => {
  const snapshot = await db
    .collection("roasts")
    .where("url", "==", url)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...doc.data(),
  };
};

// Get recent roasts
const getRecentRoasts = async () => {
  const snapshot = await db
    .collection("roasts")
    .orderBy("createdAt", "desc")
    .limit(20)
    .get();

  const roasts = [];

  snapshot.forEach((doc) => {
    roasts.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return roasts;
};

module.exports = {
  saveRoast,
  findRoastByUrl,
  getRecentRoasts,
};
