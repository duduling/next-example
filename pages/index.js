import Header from '../components/Header'
import Layout from '../components/Layout'

import Link from 'next/link'
import axios from 'axios'

function ProfileLink({ name }) {
    return (
        <div>
            <Link href={`p/[profile]`} as={`p/${name}`}>
                <a>{`Go to ${name}'s profile`}</a>
            </Link>
        </div>
    )
}

function Index({ nameList }) {
    return (
        <Layout>
            <p>Friends List</p>
            {nameList && nameList.map((name, idx) => {
                return (
                    <ProfileLink key={idx} name={name} />
                )
            })}
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const data = await axios({
        method: 'GET',
        url: 'http://admin.dev.mcs.best/users',
    })
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))

    return {
        nameList: data.map(item => item.nickname)
    }
}

export default Index