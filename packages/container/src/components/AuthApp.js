import React, { useRef, useEffect } from "react";
import {useHistory} from 'react-router-dom';

import {mount} from 'auth/auth-module';

export default function AuthApp({ onSignIn }){
    const ref = useRef(null)
    const history = useHistory();

    const config = {
        onNavigate: navigate,
        initialPath: history.location.pathname,
        onSignIn
    }

   function navigate({ pathname: nextPathname }) {
       const { pathname } = history.location;
     if (pathname !== nextPathname) {
       history.push(nextPathname);
     }
   }

    useEffect(()=>{
       const {onUpdateChildNavigation} = mount(ref.current, config)
       history.listen(location => {
        onUpdateChildNavigation(location)
       })
    }, [])

    return <div ref={ref} />
}