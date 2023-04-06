/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({request}){
    const IP_ADDR = request.headers.get('x-forwarded-for');
    /**
     * Accurate as of https://ocul.on.ca/ip-addresses
     */
    if(IP_ADDR && IP_ADDR.includes('131.104.')){
        return {special: true, message: "Looks like you're accessing this site form the University of Guelph ❤️, welcome fellow Gryphon."}
    } else {
        return {special: false}
    }
}