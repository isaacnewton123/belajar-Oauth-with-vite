import type { User } from "../../services/types"

interface Profile {
    user: User
}

const ProfileCard = ({user}: Profile) => {
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-purple-600 h-20"></div>
                <div className="px-6 pb-6">
                    <div className="flex flex-col items-center -mt-10">
                        <div className="h-20 w-20 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-4">
                            <div className="h-16 w-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl font-bold">NP</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{user.name}</h3>
                        <p className="text-slate-600 text-sm mb-4">{user.email}</p>
                        <div className="flex space-x-2 w-full">
                            <button className="flex-1 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                                Edit Profile
                            </button>
                            <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                                Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard