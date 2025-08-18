import { useEffect } from "react"
import { useOauth } from "../hooks/useOauth"
import Loading from "../components/ui/loading"

const OauthSuccess = () => {

    const {googleCallback} = useOauth()

    useEffect(() => {
        console.log('log useEffect')
        googleCallback()
    }, [])

    return (
        <Loading/>
    )
}

export default OauthSuccess