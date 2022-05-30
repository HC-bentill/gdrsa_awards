import env from "./env";

const options = {
    shared: {

    },
    development: {
        baseAPIUrl: "https://awards-backend-6vrhx.ondigitalocean.app/"
    },
    staging: {
        baseAPIUrl: "https://awards-backend-6vrhx.ondigitalocean.app/"
    },
    production: {
        baseAPIUrl: "https://awards-backend-6vrhx.ondigitalocean.app/"
    }    
}

const config = {
    ...options[env],...options.shared
}


export default config;