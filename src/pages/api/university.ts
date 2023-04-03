// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CommunityPhoto from "@/assets/about/community-photo.webp"

import BuildingFacility from "@/assets/about/dummy/building_facility.jpg"
import Lecture from "@/assets/about/dummy/critics_lecture_architecture.jpg"
import Mascot from "@/assets/about/dummy/mascot_beaver.jpg"

type Data = {
	name: string,
	description: string,
	featuredImage: string,
	features: Array<{
		name: string,
		description: string
	}>,
	contacts: Array<{
		type: string,
		href: string,
		text: string,
		name: string,
	}>,
	gallery: Array<{
		url: string,
		alt: string | null,
		caption: string | null,
	}>,
	staff: Array<{
		name: string,
		major: string,
		enrolled: number,
		imageUrl: string,
	}>,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
	  {
		  name: 'Universitas Sunter',
		  description: 'Sebuah kampus terakreditasi SSR, terletak di ginjal kota Jakarta. Kampus yang berisikan mahasiswa abadi tidak mengenal gelar dan lelah, selalu menjadi pribadi yang baik dan mampu menolong sesama hidup.',
		  featuredImage: CommunityPhoto.src,
		  features: [
			  { name: 'Akreditas', description: 'Diakreditasi SSR oleh Bappebti.' },
			  { name: 'Catatan Pendiri', description: 'Dibangun oleh Fray Dalton (2023)' },
			  { name: 'Fakultas Unggulan', description: 'Ilmu Bar & Disco Millenial' },
			  { name: 'Lokasi', description: 'Sunter Agung, Tanjung Priok, Jakarta Utara' },
			  { name: 'Afiliasi', description: 'UI, UGM, BAN PT, HONDA, ASTRA, SUZUKI, YAMAHA, MIT' },
			  { name: 'Jenis Perguruan', description: 'Padepokan Tinggi Nusantara Swasta' },
		  ],
		  contacts: [
			  {
				  type: 'WhatsApp',
				  href: 'https://wa.me/6281285302139',
				  text: '+62 812 8530 2139',
				  name: 'Reyhan Fabiano',
			  },
			  {
				  type: 'Line',
				  href: 'https://line.me/ti/p/~gresik007',
				  text: '@gresik007',
				  name: 'Reyhan Fabiano',
			  },
		  ],
		  gallery: [
			  {
				  url: BuildingFacility.src,
				  alt: 'Building Facility',
				  caption: 'Maseeh Hall is a coed residence for undergraduate students.',
			  },
			  {
				  url: Lecture.src,
				  alt: 'Critics Lecture Time',
				  caption: 'A student presents his work in an architecture critique.',
			  },
			  {
				  url: Mascot.src,
				  alt: 'Mascot',
				  caption: 'Berang-berang MIT rela ke Jakarta demi jadi maskot Universitas Sunter.',
			  },
			  {
				  url: CommunityPhoto.src,
				  alt: 'Mascot',
				  caption: 'Si paling si paling.',
			  },
		  ],
		  staff: [
			  {
				  name: 'Ahmad Azhari',
				  major: 'Hukum Rimba',
				  enrolled: 2023,
				  imageUrl:
					  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			  },
			  {
				  name: 'Fray Dalton',
				  major: 'Hukum Rimba',
				  enrolled: 2023,
				  imageUrl:
					  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			  },
			  {
				  name: 'Desi Kristianti',
				  major: 'Hukum Rimba',
				  enrolled: 2023,
				  imageUrl:
					  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			  },
			  {
				  name: 'Mutliqa Maimun',
				  major: 'Hukum Rimba',
				  enrolled: 2023,
				  imageUrl:
					  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			  },
			  {
				  name: 'Hanna Balqis',
				  major: 'Hukum Rimba',
				  enrolled: 2023,
				  imageUrl:
					  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			  },
		  ]
	  }
  )
}
