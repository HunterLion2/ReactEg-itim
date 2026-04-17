import { createContext } from "react";

export const ThemeContext = createContext();


export function ThemeProvider({children}) {
    return(
        // Burada kullandığımız Provider değeri component'lerin tek bir ana merkez üzerinden iletişim kurmasını sağlar.
        <ThemeContext.Provider value={{theme: "dark"}}>
            {children}
        </ThemeContext.Provider>
    );
}



