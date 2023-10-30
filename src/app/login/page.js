import Link from "next/link";

export default function Login() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-[#FFEFD7] to-[#FFD7C8] pt-28 pl-28">
			<div className="flex gap-16">
				<div className="w-1/3 ">
					<div className="text-[#0C1F5F91] font-normal">
						Hey there,
					</div>
					<div className="font-black text-4xl mb-10">
						Welcome Back
					</div>
					<div className="flex gap-2 mb-5 justify-between">
						<button
							type="button"
							className="grow rounded-lg bg-white py-2 px-4"
						>
							Log in with Google
						</button>
						<button
							type="button"
							className="grow rounded-lg bg-white py-2 px-4"
						>
							Log in with Apple
						</button>
					</div>
					<div className="flex items-center justify-end">
						<hr className="w-full inline-block" />
						<span className=" text-[#797979d4] mx-2">or</span>
						<hr className="w-full inline-block" />
					</div>
					<label htmlFor="name" className="flex flex-col gap-2 mt-8">
						Name
						<input
							type="text"
							id="name"
							placeholder="Type Here"
							autoComplete="name"
							className="rounded-lg p-2 mb-6"
						/>
					</label>
					<label htmlFor="password" className="flex flex-col gap-2">
						Password
						<input
							type="text"
							id="password"
							placeholder="Type Here"
							className="rounded-lg p-2 mb-12"
						/>
					</label>
					<button
						type="submit"
						className="w-full bg-[#0c1f5f] p-2 rounded-lg text-white mb-16"
					>
						Log In
					</button>
					<Link href="/signup">
						<span className="text-[#5f6180b8]">
							First time here?{" "}
						</span>
						<span>Sign up</span>
					</Link>
				</div>
				<div className="grow min-h-full rounded-s-lg border border-black border-r-0 overflow-hidden ml-16 shadow-lg shadow-[#0000006b]">
					<div className="bg-[#dfdce8] py-2 px-10 font-bold text-2xl">
						Timeline
					</div>
					<div className="h-full bg-white"></div>
				</div>
			</div>
		</div>
	);
}