// Test script to verify authentication setup
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

console.log("Testing authentication components...");

// Test JWT
const testPayload = { userId: "test123" };
const secret = "test-secret";
try {
  const token = jwt.sign(testPayload, secret, { expiresIn: "1h" });
  const decoded = jwt.verify(token, secret);
  console.log("✅ JWT working:", decoded);
} catch (error) {
  console.log("❌ JWT error:", error.message);
}

// Test bcrypt
try {
  const password = "testpassword";
  const hashedPassword = await bcrypt.hash(password, 12);
  const isValid = await bcrypt.compare(password, hashedPassword);
  console.log("✅ bcrypt working:", isValid);
} catch (error) {
  console.log("❌ bcrypt error:", error.message);
}

console.log("Authentication components test completed!");
