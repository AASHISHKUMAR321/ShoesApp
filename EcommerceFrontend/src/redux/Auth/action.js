export const Auth="AUTH";

export const setAuth = (data)=>{

        return {
            type:Auth,
            payload:data
        }
}