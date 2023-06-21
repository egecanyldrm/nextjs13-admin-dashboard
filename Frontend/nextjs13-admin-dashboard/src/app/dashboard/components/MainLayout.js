import Navbar from "./Navbar";

export default function MainLayout({ children }) {
    return (
        <div className=' main-layout bg-gray-100'>
            <Navbar />
            <div className=" bg-white rounded p-5 mt-4">
                {children}
            </div>
            <footer>Footer</footer>
        </div>
    )
}
