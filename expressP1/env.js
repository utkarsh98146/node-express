export const PORT=isNaN(process.env.PORT)?3000:parseInt(process.env.PORT)

import {z,ZodError } from 'zod'

const ageSchema =z.number().min(18).max(90).int()

const userAge=12

try {
    const parseUserAge=ageSchema.parse(userAge)
    console.log(parseUserAge)
} catch (error) {
    if(error instanceof ZodError){
        console.log(error.issue[0].message)
    }
    else{
        console.log("Unexpected error : ",error)
    }
}
