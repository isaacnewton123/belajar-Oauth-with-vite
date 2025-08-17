import DashboardContainer from "../components/dashboard-container"
import Header from "../components/ui/header"

const DashboardPage = () => {
    return (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
            <Header children={"Dashboard"} />
            <DashboardContainer/>
        </div>
    )
}

export default DashboardPage