import Error from 'next/error';
import fetch from 'isomorphic-unfetch';


const Page = ({ errorCode }) => {
    
    if (errorCode) {
        return (
            <>
                <Error statusCode={errorCode} title="error" />
            </>
        )
    }

    return <Error title="Page not found" />
};

Page.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const errorCode = res.statusCode > 200 ? res.statusCode : false
  
    return { errorCode }
}



export default Page;

