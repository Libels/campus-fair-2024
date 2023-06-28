import { useSelector } from 'react-redux'
import { ReduxTypes } from '@/redux-reducer'

export default function LoadingOverlay() {
	const loading: boolean = useSelector((state: ReduxTypes) => state.pageLoading)

	return (
		loading ?
			<div className="bg-gray-100 opacity-70 fixed w-full h-full left-0 top-0 z-[100] flex justify-center items-center" >
				<div className="bg-fuchsia-300 w-10 h-10 absolute animate-ping"></div>
			</div> : <></>
	)
}