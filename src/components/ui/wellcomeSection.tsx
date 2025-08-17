import type { User } from "../../services/types"

interface Profile {
    user: User
}

const WellcomeSection = ({user} : Profile) => {
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {user.name}</h2>
            <p className="text-slate-600">Here's what's happening with your account today.</p>
        </div>
    )
}

export default WellcomeSection