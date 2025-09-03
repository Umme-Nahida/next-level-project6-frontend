import Logo from "@/assets/Icons/logo"
import { useGetUserQuery, useLogOutMutation } from "@/Redux/Features/authApi/authApi";
import { Link } from "react-router"
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ModeToggle } from "./ModeToggle";



export default function Component() {
    const { data, error, isLoading  } = useGetUserQuery(undefined);
    const [logOut, { error: logoutErr, isLoading: signOutLoading }] = useLogOutMutation()

    const user = data?.user?.user;

    if (isLoading || signOutLoading) return <p>Loading...</p>;

    if (error || logoutErr) {
        console.log("error", error)
        console.log("logoutErr",logoutErr)
    }
    
    
    const handleLogout = async() =>{
        const res = await logOut(undefined)
        console.log(res)
        if(res.data){
            toast.success(res.data.message)
        }
        if(res.error){
            toast.error((res.error as any)?.err?.data?.message || "logout is failed")
        }
    }

    console.log(data?.user)

    const menu = <>
        <li>
            <Link to='/' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">Home</Link>
        </li>
        <li>
            <Link to='/about' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">About</Link>
        </li>
        <li>
            <Link to='/feature' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">Feature</Link>
        </li>
        <li>
            <Link to='/contact' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">Contact</Link>
        </li>
        <li>
            <Link to='/FAQ' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">FAQ</Link>
        </li>
        {
            user?.role === "ADMIN" &&
            <li>
                <Link to='/admin' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">Dashboard</Link>
            </li>
        }
        {
            user?.role === "SUPER_ADMIN" &&
            <li>
                <Link to='/admin' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">Dashboard</Link>
            </li>
        }
        {
            user?.role === "RIDER" &&
            (
                <li>
                    <Link to='/user' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">Dashboard</Link>
                </li>

            )
        }
        {
            user?.role === "DRIVER" &&
            (
                <li>
                    <Link to='/driver' className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">Dashboard</Link>
                </li>

            )
        }
    </>

    return (
        <header className="bg-secondary sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center  md:gap-2">
                        <Logo /> <span className="font-medium text-xl sm:text-xl ">Find Rider</span>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {menu}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">

                        {
                            user?.email ?
                            <Button onClick={handleLogout} className="cursor-pointer">Logout</Button> :
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-ring"
                                        href="/login"
                                    >
                                        Login
                                    </a>

                                    <div className="hidden sm:flex">
                                        <a
                                            className="rounded-md bg-primary-foreground border border-primary px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                            href="/register"
                                        >
                                            Register
                                        </a>
                                    </div>
                                </div>
                        }
                        
                        <ModeToggle></ModeToggle>
                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
