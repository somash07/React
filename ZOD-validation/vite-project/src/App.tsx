import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(5).max(8),
  age: z.number(),
  birthday: z.date().optional(),
  isProgrammer: z.boolean(),
});

type User = z.infer<typeof UserSchema>;

const user = {
  username: "somash",
  age: 8,
  birthday: new Date(),
  isProgrammer: true,
   };

console.log(UserSchema.safeParse(user));
export default function App() {
  return <h1>hi</h1>;
}
