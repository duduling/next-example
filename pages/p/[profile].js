import Layout from "../../components/Layout"
import { useRouter } from "next/router"

export default function Profile() {
    const qwe = useRouter()

    return (
        <Layout>
            <p>{`Hello, my name is ${qwe.query.profile}. I use Next.js`}</p>
        </Layout>
    )
}