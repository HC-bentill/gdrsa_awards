import env from "./env";

const options = {
    shared: {

    },
    development: {
        baseAPIUrl: "https://gdrsa.herokuapp.com/"
    },
    staging: {
        baseAPIUrl: "https://gdrsa.herokuapp.com/"
    },
    production: {
        baseAPIUrl: "https://gdrsa.herokuapp.com/"
    }    
}

const config = {
    ...options[env],...options.shared
}


export default config;