import { SignUp } from '@clerk/nextjs';

export default function Register() {
  return (
    <main className='grid place-items-center'>
      <SignUp />
    </main>
  );
}
