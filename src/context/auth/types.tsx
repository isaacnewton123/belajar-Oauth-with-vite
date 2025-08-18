import type { User } from "../../services/types";

export interface MyJwtPayload {
    exp : number
}

export interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}