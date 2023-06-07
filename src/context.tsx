// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import React, { ReactNode } from "react";
// import { useLocalStorage } from "./useLocalStorage";

// interface contexttype {
//   isLogin: {
//     name: "";
//     id: "";
//     status: false;
//   };
//   setIsLogin: any;
// }
// export const ContextProvider = React.createContext<contexttype>({
//   isLogin: {
//     name: "",
//     id: "",
//     status: false,
//   },
//   setIsLogin: function (): void {
//     throw new Error("Function not implemented.");
//   },
// });

// export const ContextWrapper = (props: { children: ReactNode }) => {
//   const [isLogin, setIsLogin] = useLocalStorage("isLogin", {
//     name: "",
//     id: "",
//     status: false,
//   });

//   return (
//     <ContextProvider.Provider value={{ isLogin, setIsLogin }}>
//       {props.children}
//     </ContextProvider.Provider>
//   );
// };

import React, { ReactNode } from 'react'
import { useLocalStorage } from './useLocalStorage'

interface ContextWrapperProps {
  children: ReactNode
}

interface ValueInterface {
  name: string
  id: null | string
  status: boolean
}

interface MyContextValue {
  isLogin: ValueInterface

  setIsLogin: (value: ValueInterface) => void
}

export const ContextProvider = React.createContext<MyContextValue | null>(null)

export const ContextWrapper: React.FC<ContextWrapperProps> = (props) => {
  const [isLogin, setIsLogin] = useLocalStorage('isLogin', {
    name: '',
    id: null,
    status: false,
  })
  if (!isLogin) {
    // Handle the case when the context value is null
    return null
  }
  return (
    <ContextProvider.Provider value={{ isLogin, setIsLogin }}>
      {props.children}
    </ContextProvider.Provider>
  )
}
