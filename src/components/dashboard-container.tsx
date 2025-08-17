import { useAuthContext } from "../context/auth/useAuthContext"
import DetailProfile from "./ui/detailProfile"
import ProfileCard from "./ui/profileCard"
import WellcomeSection from "./ui/wellcomeSection"

const DashboardContainer = () => {

    const { user, setLoading } = useAuthContext()

    if (!user) {
        setLoading(true)
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <WellcomeSection user={user!} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ProfileCard user={user!} />
                <div className="lg:col-span-2">
                    <DetailProfile user={user!} />
                </div>
            </div>

        </>
    )
}

export default DashboardContainer