import {Auth} from './action'

const init = {auth:false}

export const authReducer = (store=init,{type,payload})=>{

        switch(type){

            case Auth :
                return {...store,auth:payload}
            default :
                return store
        }
      
}