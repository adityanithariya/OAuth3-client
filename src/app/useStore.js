import { useSelector } from "react-redux";
import {selectLoggedIn} from '../features/userSlice'

export const useStore = () => {
    return{
        loggedIn: useSelector(selectLoggedIn)
    }
}