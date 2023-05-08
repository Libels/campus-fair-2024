import { useRouter } from "next/router"

export default function AccountManager() {
	const router = useRouter()

	router.replace('/account/login')
}