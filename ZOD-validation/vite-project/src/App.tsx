import { z } from "zod";

enum hobby {
  programming, 
  guitar,
  weightlifting
}
const UserSchema = z.object({
  username: z.string().min(5).max(8),
  age: z.number(),
  birthday: z.date().optional(),
  isProgrammer: z.boolean(),
  hobbies: z.nativeEnum(hobby)
});

type User = z.infer<typeof UserSchema>;

const user = {
  username: "somash",
  age: 8,
  birthday: new Date(),
  isProgrammer: true,
  // hobbies: "ksnd"
  hobbies: "programming"
   };

console.log(UserSchema.parse(user));
export default function App() {
  return <h1>hi</h1>;
}
