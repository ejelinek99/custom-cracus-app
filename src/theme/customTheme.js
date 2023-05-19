import { extendTheme } from "@chakra-ui/react"

const customConfig = {
    styles: {
        global: () => ({
            body: {
                //backgroundColor: 'blue.700',
                bgGradient: 'linear(to-r, blue.700, purple.400, blue.700)',
                color: 'white'
            },
            option: {
                color: 'black',
            }
        })
    }
}

const customTheme = extendTheme(customConfig)

export default customTheme