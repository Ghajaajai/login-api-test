import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

const registerHandler = async (request, h) => {
  const { name, email, password } = request.payload;

  if (!name || !email || !password) {
    return h.response({ error: true, message: 'Missing required data' }).code(400);
  }


  const q = query(collection(db, "users"), where("email", "==", email));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    return h.response({ error: true, message: 'Email already registered' }).code(400);
  }


  const hashedPassword = bcrypt.hashSync(password, 10);
  const id = `user-${nanoid(16)}`;


  await addDoc(collection(db, "users"), {
    id,
    name,
    email,
    password: hashedPassword,
  });

  return h.response({ error: false, message: 'User created', id }).code(201);
};

export default registerHandler;
