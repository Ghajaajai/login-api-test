import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import bcrypt from 'bcrypt';

const loginHandler = async (request, h) => {
  const { email, password } = request.payload;

  if (!email || !password) {
    return h.response({ error: true, message: "Missing required data" }).code(400);
  }

  const q = query(collection(db, "users"), where("email", "==", email));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return h.response({ error: true, message: "User not found" }).code(401);
  }

  const user = snapshot.docs[0].data();

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return h.response({ error: true, message: 'Wrong password' }).code(401);
  }

    return h.response({
    error: false,
    message: 'Login success',
    loginResult: {
      userId: user.id,
      name: user.name,
    },
  }).code(200);
};

export default loginHandler;
