import { useRouter } from "next/navigation";
import { clearData, recallData, saveData } from "./UserDataHandling";

export function routing(route, data) {
    const router = useRouter()
    saveData(data.name, data.username)
    router.push(route)
}

export function routingSuccess() {
    const data = recallData()
    clearData()
    return data
}