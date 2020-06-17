import Layout from '../components/Layout'

import { useRouter } from 'next/router'

function Profile() {
    const { query: { name } } = useRouter()

    return (
        <Layout>
            <p>{`Hello, my name is ${name}. I use next.js`}</p>
        </Layout>
    )
}

export default Profile