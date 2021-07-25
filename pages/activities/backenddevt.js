import Link from 'next/link'

function backend() {
    return (
        <>
        <h1>Backend</h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
        </>
    )
}

export default backend;