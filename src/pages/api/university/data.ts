import LogoUGM from '@/assets/university/logo/ugm.svg'
import LogoMERCU from '@/assets/university/logo/mercu.jpeg'
import LogoBINUS from '@/assets/university/logo/binus.jpg'
import LogoANDALAS from '@/assets/university/logo/andalas.jpeg'
import LogoATMA from '@/assets/university/logo/atma.jpeg'
import LogoBAKRIE from '@/assets/university/logo/bakrie.jpeg'
import LogoGUNDAR from '@/assets/university/logo/gundar.jpeg'
import LogoIPB from '@/assets/university/logo/ipb.jpeg'
import LogoITERA from '@/assets/university/logo/itera.jpeg'
import LogoITS from '@/assets/university/logo/its.jpeg'
import LogoLSPR from '@/assets/university/logo/lspr.jpeg'
import LogoTELU from '@/assets/university/logo/telu.jpeg'
import LogoTRISAKTI from '@/assets/university/logo/trisakti.jpeg'
import LogoUB from '@/assets/university/logo/ub.jpeg'
import LogoUIN from '@/assets/university/logo/uin.jpeg'
import LogoUNAIR from '@/assets/university/logo/unair.jpeg'
import LogoUNDIP from '@/assets/university/logo/undip.jpeg'
import LogoUNESA from '@/assets/university/logo/unesa.jpeg'
import LogoUNNES from '@/assets/university/logo/unnes.jpeg'
import LogoUNPAD from '@/assets/university/logo/unpad.jpeg'
import LogoUNS from '@/assets/university/logo/uns.jpeg'
import LogoUNSIKA from '@/assets/university/logo/unsika.jpeg'
import LogoUNSOED from '@/assets/university/logo/unsoed.jpeg'
import LogoUNTAG from '@/assets/university/logo/untag.jpeg'
import LogoUNTAR from '@/assets/university/logo/untar.jpeg'
import LogoUNTIRTA from '@/assets/university/logo/untirta.jpeg'
import LogoUNUD from '@/assets/university/logo/unud.jpeg'
import LogoUNY from '@/assets/university/logo/uny.jpeg'
import LogoUP from '@/assets/university/logo/up.jpeg'
import LogoUPH from '@/assets/university/logo/uph.jpeg'
import LogoUPI from '@/assets/university/logo/upi.jpeg'
import LogoUPNVJ from '@/assets/university/logo/upnvj.jpeg'
import LogoUPNVJT from '@/assets/university/logo/upnvjt.jpeg'
import LogoUPNVY from '@/assets/university/logo/upnvy.jpeg'
import LogoUNJ from '@/assets/university/logo/unj.jpeg'
import LogoUI from '@/assets/university/logo/ui.jpeg'

export type Data = {
	city: string,
	name: string,
	imageSrc: string,
	slug: string,
}

export const Data = [
	{
		city: 'Yogyakarta',
		name: 'Universitas Gadjah Mada',
		imageSrc: LogoUGM,
		slug: 'universitas-gadjah-mada',
	},
	{
		city: 'Jakarta',
		name: 'Mercu Buana',
		imageSrc: LogoMERCU,
		slug: 'mercu',
	},
	{
		city: 'Tangerang',
		name: 'Binus',
		imageSrc: LogoBINUS,
		slug: 'binus',
	},
	{
		city: '',
		name: 'ANDALAS',
		imageSrc: LogoANDALAS,
		slug: 'andalas',
	},
	{
		city: 'Jakarta',
		name: 'Atma Jaya',
		imageSrc: LogoATMA,
		slug: 'atma-jaya',
	},
	{
		city: 'Jakarta',
		name: 'Universitas Bakrie',
		imageSrc: LogoBAKRIE,
		slug: 'bakrie',
	},
	{
		city: 'Jakarta',
		name: 'Universitas Gunadarma',
		imageSrc: LogoGUNDAR,
		slug: 'gundar',
	},
	{
		city: 'Bandung',
		name: 'IPB',
		imageSrc: LogoIPB,
		slug: 'ipb',
	},
	{
		city: 'Lampung',
		name: 'ITERA',
		imageSrc: LogoITERA,
		slug: 'itera',
	},
	{
		city: 'Surabaya',
		name: 'ITS',
		imageSrc: LogoITS,
		slug: 'its',
	},
	{
		city: 'Jakarta',
		name: 'LSPR',
		imageSrc: LogoLSPR,
		slug: 'lspr',
	},
	{
		city: '',
		name: 'TELU',
		imageSrc: LogoTELU,
		slug: 'telu',
	},
	{
		city: 'Jakarta',
		name: 'Trisakti',
		imageSrc: LogoTRISAKTI,
		slug: 'trisakti',
	},
	{
		city: 'Malang',
		name: 'Universitas Brawijaya',
		imageSrc: LogoUB,
		slug: 'ub',
	},
	{
		city: 'Jakarta',
		name: 'UIN',
		imageSrc: LogoUIN,
		slug: 'uin',
	},
	{
		city: '',
		name: 'UNAIR',
		imageSrc: LogoUNAIR,
		slug: 'unair',
	},
	{
		city: 'Bandung',
		name: 'UNDIP',
		imageSrc: LogoUNDIP,
		slug: 'undip',
	},
	{
		city: 'Surabaya',
		name: 'UNESA',
		imageSrc: LogoUNESA,
		slug: 'unesa',
	},
	{
		city: 'Semarang',
		name: 'UNNES',
		imageSrc: LogoUNNES,
		slug: 'unnes',
	},
	{
		city: 'Bandung',
		name: 'UNPAD',
		imageSrc: LogoUNPAD,
		slug: 'unpad',
	},
	{
		city: 'Semarang',
		name: 'UNS',
		imageSrc: LogoUNS,
		slug: 'uns',
	},
	{
		city: 'Karawang',
		name: 'UNSIKA',
		imageSrc: LogoUNSIKA,
		slug: 'unsika',
	},
	{
		city: '',
		name: 'UNSOED',
		imageSrc: LogoUNSOED,
		slug: 'unsoed',
	},
	{
		city: 'Surabaya',
		name: 'UNTAG',
		imageSrc: LogoUNTAG,
		slug: 'untag',
	},
	{
		city: 'Jakarta',
		name: 'UNTAR',
		imageSrc: LogoUNTAR,
		slug: 'untar',
	},
	{
		city: '',
		name: 'UNTIRTA',
		imageSrc: LogoUNTIRTA,
		slug: 'untirta',
	},
	{
		city: 'Denpasar',
		name: 'Universitas Udayana',
		imageSrc: LogoUNUD,
		slug: 'unud',
	},
	{
		city: 'Jogja',
		name: 'UNY',
		imageSrc: LogoUNY,
		slug: 'uny',
	},
	{
		city: '',
		name: 'UP',
		imageSrc: LogoUP,
		slug: 'up',
	},
	{
		city: 'Jakarta',
		name: 'UPH',
		imageSrc: LogoUPH,
		slug: 'uph',
	},
	{
		city: 'Bandung',
		name: 'UPI',
		imageSrc: LogoUPI,
		slug: 'upi',
	},
	{
		city: 'Jakarta',
		name: 'UPNVJ',
		imageSrc: LogoUPNVJ,
		slug: 'upnvj',
	},
	{
		city: 'Surabaya',
		name: 'UPNVJT',
		imageSrc: LogoUPNVJT,
		slug: 'upnvjt',
	},
	{
		city: 'Jogjakarta',
		name: 'UPNVY',
		imageSrc: LogoUPNVY,
		slug: 'upnvy',
	},
	{
		city: 'Jakarta',
		name: 'UNJ',
		imageSrc: LogoUNJ,
		slug: 'unj',
	},
	{
		city: 'Depok',
		name: 'Universitas Indonesia',
		imageSrc: LogoUI,
		slug: 'universitas-indonesia',
	},
]