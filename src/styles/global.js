import { injectGlobal } from 'styled-components'

export const globalStyle = () => {
    injectGlobal`
    * {
        padding: 0;
        margin: 0;
    }

    html {
      font-family: "SF UI Text", sans-serif;
      color: #fff;
      background-color: #232425;
    }
    
    a {
      color: #fff;
    }

    a:hover, .active {
      color: #8078ff;
    }
`
}
