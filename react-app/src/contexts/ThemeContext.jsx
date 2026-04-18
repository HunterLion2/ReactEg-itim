import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {

    const [bg, setBg] = useState("dark");
    const [item,setItem] = useState("white");

    const toggleTheme = () => {
        setBg((prev) => (prev === "dark" ? "light" : "dark"));
        setItem((prev) => (prev === "white" ? "black" : "white"));
    }

    return(
        // Burada kullandığımız Provider değeri component'lerin tek bir ana merkez üzerinden iletişim kurmasını sağlar.
        // Buranın içerisine birden fazla değer gönderebiliriz ve bunları üst tarafta kontrol edebilirizç
        <ThemeContext.Provider value={{bg, item, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}



