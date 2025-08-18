import { useAuth } from "../../hooks/useAuth"
import { Button } from "./button"

const Header = ({children}: {children:string}) => {

    const {logout} =useAuth()

    return (
        <div className="bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            {children}
                        </h1>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                        <i className="fas fa-bell text-slate-600"></i>
                    </button>
                    <Button className="bg-red-600 cursor-pointer" onClick={logout}>
                        Log Out
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header