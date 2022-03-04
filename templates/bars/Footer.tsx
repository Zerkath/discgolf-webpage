import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p>About us</p>
                <div className='footer-content'>

                    <p>example@example.com</p>
                    <p>+358 04123891152</p>

                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <span className='logo'>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>

                    </a>
                </div>
            </div>
        </footer >
    )
}