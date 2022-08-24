import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/image";
function signIn({ providers }) {
  return (
    <>
      <div className="flex flex-col space-xs-5 items-center  justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <div className="mt-40 shadow border rounded-lg px-5 py-16">
          <div className="flex flex-col items-center   space-y-5">
            <Image
              className="pb-5 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              alt="google logo"
              width={40}
              height={40}
              layout="fixed"
            ></Image>
            <p className="font-bold text-gray-600 text-2xl pb-3">
              Sign in with your Google account!
            </p>

            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="p-3 rounded-lg text-white bg-sky-700 hover:bg-sky-600"
                  //   style={{ backgroundColor: "blue" }}
                  onClick={() =>
                    SignIntoProvider(provider.id, { callbackUrl: "/" })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

//middle Server
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
