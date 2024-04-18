import Link from 'next/link'

const PasswordGenerator = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen md:mt-0 md:flex-row md:h-auto">
      <Link href="/generator/randomize" className="block px-7 py-7 mb-7 md:mb-0 md:mr-10 md:py-7 md:p-7 rounded-lg button-gradient">Randomize your password</Link>
      <Link href="/generator/prebuilt" className="block px-7 py-7 md:ml-10 md:py-7 md:p-7 rounded-lg button-gradient">Prebuilt your own password</Link>
    </div>
  );
};

export default PasswordGenerator;