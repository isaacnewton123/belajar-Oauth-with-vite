import type { User } from "../../services/types"

interface Profile {
    user: User
}

const DetailProfile = ({user} : Profile) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">User ID</label>
                    <div className="p-3 bg-slate-50 rounded-lg border">
                        <p className="text-sm text-slate-900 font-mono">{user._id}</p>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Display Name</label>
                    <div className="p-3 bg-slate-50 rounded-lg border">
                        <p className="text-sm text-slate-900">{user.name}</p>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <div className="p-3 bg-slate-50 rounded-lg border">
                        <p className="text-sm text-slate-900">{user.email}</p>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Account Role</label>
                    <div className="p-3 bg-slate-50 rounded-lg border">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                            {user.role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProfile