import { useQuery } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image'

import { USERS } from '@/graphql/queries'

import styles from 'styles/Home.module.scss'

export default function Home() {
  const { loading, error, data } = useQuery(USERS)

  if (error) return <p>{error.message}</p>

  return (
    <div className={styles.container}>
      {loading ? (
        'Loading...'
      ) : (
        <div className={styles.users}>
          {data.users.map(({ id, name, avatar }) => (
            <Link href={`/user/${id}`} key={id}>
              <a>
                <div className={styles.user}>
                  <div className={styles.avatar}>
                    <Image
                      src={avatar}
                      objectFit="cover"
                      layout="fill"
                      quality={100}
                      alt="user"
                    />
                  </div>
                  <span>{name}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// const [users, setUsers] = useState([])
// const [error, setError] = useState(null)
// const [loading, setLoading] = useState(true)

// client.query({ query: USERS }).then(response => {
//   const { data, error: apiError } = response
//   if (error) {
//     setError(apiError.message)
//   }

//   setUsers(data.profiles)
//   setLoading(false)
// })
