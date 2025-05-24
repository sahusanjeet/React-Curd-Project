import { createContext, useState } from "react";

export const todocontext = createContext();

const Wrapper = ({ children }) => {
    const [todos, settodos] = useState([]);

    return (
        <todocontext.Provider value={[todos, settodos]}>
            {children}
        </todocontext.Provider>
    );
};

export default Wrapper;
