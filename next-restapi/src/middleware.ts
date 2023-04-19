import { NextResponse } from 'next/server'

export function middleware(request: Request){
    
    // if (request.url.includes('/api/')) {}
    //if (regex.test(request.url))
    console.log('Middleware baby lets go!')

    console.log(request.method)
    console.log(request.url)

    const origin = request.headers.get('origin')
    console.log(origin)

    return NextResponse.next()
}

export const config = {
    //this represents any route inside the api file
    matcher: '/api/:path*'
}