import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import Newsletter from '@/components/global/card/Newsletter'

export default function Privacy() {
	return (
		<>
			<Head>
				<title>Libels Campus Fair Privacy Policy</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			<LeftBlob />
			<div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
				<div className="mx-auto max-w-2xl gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:gap-y-10">
					<div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-xl leading-7 text-gray-700">
								<p className="text-base font-semibold leading-7 text-fuchsia-600">Privacy Policy</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kamu ada di komunitas yang baik</h1>
								<span className="mt-6 text-sm leading-8 font-semibold text-gray-900">Revisi Terakhir: 21 April 2023</span>
								<p className="mt-6 text-base leading-8">
									Pemberitahuan ini untuk Libels Campus Fair (juga sebagai LCF) (&quot;LCF&quot;, &quot;kita&quot;, atau &quot;kami&quot;), menjelaskan bagaimana kami mungkin akan mendapatkan, menyimpan, menggunakan, dan/atau membagikan (&quot;mengolah&quot;) informasi anda ketika menggunakan layanan (&quot;Layanan&quot;, &quot;Platform&quot;), ketika anda:
								</p>
								<ul className="mt-8 space-y-4 text-gray-600 list-square ml-6">
									<li>
										Mengunjungi website/platform kami yang ada di domain ini.
									</li>
									<li>
										Menghubungi kami dengan cara lain, termasuk penjualan, pemasaran, dan juga acara.
									</li>
								</ul>
								<p className="mt-8">
									<strong className="font-semibold text-gray-900">Punya pertanyaan?</strong> membaca policy ini dapat membantu anda memahami tentang hak privasi dan pilihan anda. Jika anda tidak setuju dengan policy & praktik kami, jangan gunakan layanan kami.
								</p>
								<p className="mt-8">
									Website ini merupakan situs sekaligus platform yang menghubungkan semua pihak. Mulai dari peserta, komunitas alumni, panitia, serta sponsor. Policy ini disusun untuk mematuhi peraturan yang berlaku di Wilayah Indonesia.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Heading 2.</h2>
								<p className="mt-6">
									Paragraph.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. INFORMASI APA YANG DIAMBIL?</h2>
								<h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Informasi yang anda berikan kepada kami</h3>
								<p className="mt-6">
									Kami mengambil data yang anda berikan kepada kami saat melakukan registrasi di Platform ini, menunjukkan kesediaan untuk mendapatkan informasi tentang kami atau produk dan Layanan kami, atau saat anda menghubungi kami.
								</p>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Data pribadi yang anda berikan.</strong> Didapatkan tergantung dari anda cara menggunakan Layanan dan juga kami, pilihan yang dibuat, dan juga produk maupun fitur yang anda gunakan. Data pribadi yang kami ambil dapat berupa:
								</p>
								<ul className="mt-8 space-y-4 text-gray-600 list-square ml-6">
									<li>Nama</li>
									<li>Username</li>
									<li>Password</li>
									<li>Nomor Telepon</li>
									<li>Alamat Email</li>
									<li>Alamat Rumah</li>
									<li>Gelar</li>
									<li>Universitas</li>
									<li>Fakultas</li>
									<li>Program Studi</li>
									<li>Informasi Social Media</li>
								</ul>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Data sensitif.</strong> Ketika diperlukan, kami dapat meminta anda atau ketika dibutuhkan oleh hukum yang berlaku untuk memberikan dan memproses data sensitif sebagai berikut:
								</p>
								<ul className="mt-8 space-y-4 text-gray-600 list-square ml-6">
									<li>Profil Siswa/Mahasiswa</li>
									<li>NIK</li>
									<li>NISN</li>
									<li>NPWP</li>
								</ul>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Data pembayaran.</strong> Kami mungkin mengambil data yang diperlukan untuk memproses pembayaran jika anda melakukan transaksi ataupun donasi, seperti nomor instrumen pembayaran beserta kode keamanan terkait. Semua data pembayaran disimpan oleh Xendit. Anda mungkin ingin mempelajari Privacy Policy mereka di link berikut: <Link className="text-underline text-fuchsia-500" href="https://www.xendit.co/id/privacy-policy/"><a target="_blank">https://www.xendit.co/id/privacy-policy/</a></Link>.
								</p>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Data Login Social Media.</strong> Kami mungkin memberikan opsi kemudahan di Platform ini untuk registrasi atau mentautkan menggunakan akun social media yang sudah ada, seperti akun Twitter, Google, GitHub, LinkedIn. Jika anda memilih untuk registrasi dengan cara ini, kami sudah menjelaskannya di bagian terkait.
								</p>
								<p className="mt-6">
									Data pribadi yang anda berikan harus nyata, lengkap, dan akurat, anda juga diperlukan untuk memberitahukan kami terkait perubahan data pribadi.
								</p>
								<h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Informasi yang secara otomatis diperoleh</h3>
								<p className="mt-6">
									Kami secara otomatis mengambil beberapa data ketika mengunjungi, menggunakan, atau berselancar di dalam Layanan kami. Informasi ini tidak menunjukkan data identitas yang spesifik (seperti nama atau informasi kontak) tapi mungkin dapat berisi informasi terkait device &amp; pengunaan, seperti alamat IP, browser, device, OS, setelan bahasa, URL referral, nama device, negara, lokasi, informasi bagaimana dan kapan anda menggunakan Layanan kami, serta beberapa hal teknis lainnya. Informasi ini ditujukan untuk menjaga keamanan dan operasional Layanan kami, serta analytics internal dan keperluan laporan.
								</p>
								<p className="mt-6">
									Seperti website lainnya, kami juga menggunakan cookies atau teknologi yang serupa untuk memperoleh data.
								</p>
								<p className="mt-6">
									Informasi yang diperoleh meliputi:
								</p>
								<ul className="mt-8 space-y-4 text-gray-600 list-square ml-6">
									<li><i>Log dan Data Penggunaan.</i> Log dan data penggunaan berkaitan dengan Layanan, diagnosa, penggunaan, dan juga informasi performa yang diperoleh secara otomatis oleh server kami ketika mengakses Layanan kami yang disimpan di dalam file log. Bergantung bagaimana cara anda menggunakan dengan Layanan kami, anda anda dapat meliputi alamat IP, informasi device, tipe browser, serta pengaturan dan informasi anda di dalam Layanan (seperti tanggal/rekaman waktu terkait penggunaan anda, halaman yang anda kunjungi, riwayat pencarian, dan juga tindakan lainnya tergantung fitur yang digunakan), informasi device (seperti aktivitas sistem, laporan error (biasanya dikenal sebagai &quot;dump logs&quot;), serta informasi terkait hardware).</li>
									<li><i>Data Device.</i> Kami memperoleh data seperti informasi terkait kompuer, ponsel, tablet, atau device lainnya yang anda gunakan saat mengakses Layanan kami. Data yang diperoleh bergantung device yang digunakan, data device ini dapat meliputi informasi terkait alamat IP (atau server proxy), device dan nomor id aplikasi, lokasi, tipe browser, model hardware, ISP dan/atau operator selular, OS, serta informasi terkait konfigurasi sistem.</li>
									<li><i>Data Lokasi.</i> Kami memperoleh data seperti lokasi device, yang dapat presisi ataupun tidak, seberapa presisi yang dibutuhkan tergantung fitur yang anda gunakan di tipe dan pengaturan dalam device yang anda gunakan saat mengakses Layanan kami. Contoh kami mungkin membutuhkan akses GPS atau teknologi terkait untuk mengambil informasi geolokasi untuk menentukan lokasi saat ini (bergantung dengan alamat IP anda). Anda dapat menolak untuk memberikan informasi dengan menolak pengaturan Lokasi di device anda. Namun hal ini membuat anda tidak dapat mengakses beberapa aspek dalam Layanan ini.</li>
								</ul>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. BAGAIMANA KAMI MEMPROSES DATA ANDA?</h2>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Kami memproses data anda karena berbagai alasan, tergantung dari bagaimana anda menggunakan layanan dengan Layanan kami, meliputi:</strong>
								</p>
								<ul className="mt-8 space-y-4 text-gray-600 list-square ml-6">
									<li><strong className="font-semibold text-gray-900">Autentikasi dan mengatur akun.</strong> Kami mungkin memproses informasi untuk membuat dan login ke akun anda, juga untuk memastikan akun anda bekerja dengan baik.</li>
									<li><strong className="font-semibold text-gray-900">Menyediakan Layanan kepada pengguna.</strong> Kami mungkin memproses informasi data untuk melayani anda ke Layanan yang diinginkan.</li>
									<li><strong className="font-semibold text-gray-900">Untuk bantuan terhadap pengguna.</strong> Kami mungkin memproses informasi untuk menjawab kebutuhan dan menyelesaikan kemungkinan masalah yang dihadapi ketika mengakses Layanan yang diinginkan.</li>
									<li><strong className="font-semibold text-gray-900">Mengirimkan informasi administratif.</strong> Kami mungkin memproses informasi untuk mengirimkan detail tentang produk dan layanan kami, perubahan terkait terms &amp; policies, dan informasi serupa lainnya.</li>
									<li><strong className="font-semibold text-gray-900">Mengirimkan promosi dan marketing.</strong> Kami mungkin memproses informasi untuk memberikan promosi yang menarik untuk kebutuhan marketing kami, jika anda keberatan maka anda dapat mematikan informasi promosional kapan saja.</li>
									<li><strong className="font-semibold text-gray-900">Menampilkan targeting iklan.</strong> Kami mungkin memproses informasi untuk mengembangkan dan menampilkan iklan yang disesuaikan dengan keinginan anda, lokasi, dan lainnya.</li>
									<li><strong className="font-semibold text-gray-900">Mengevaluasi dan meningkatkan Layanan, produk, marketing, beserta pengalaman anda.</strong> Kami mungkin memproses informasi untuk kebutuhan pengembangan, sehingga kami dapat melihat trend penggunaan dan menentukan seberapa efektif marketing promosional kami, dan serta mengevaluasi dan meningkatkan Layanan, produk, marketing, juga pengalaman anda.</li>
									<li><strong className="font-semibold text-gray-900">Menentukan efektifitas marketing dan promosi kami.</strong> Kami mungkin memproses informasi untuk memahami lebih lanjut tentang bagaimana cara memberikan marketing dan promosi yang paling relevan untuk anda.</li>
									<li><strong className="font-semibold text-gray-900">Untuk memenuhi kebutuhan hukum.</strong> Kami mungkin memproses informasi untuk keperluan hukum yang berlaku, merespon permintaan legal, dan menetapkan, atau melindungi hak hukum kami.</li>
								</ul>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. KAPAN DAN DENGAN SIAPA DATA ANDA DIBAGIKAN?</h2>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Vendor, Konsultan, dan Penyedia Layanan Pihak Ketiga Lainnya.</strong> Kami mungkin membagikan data anda dengan vendor, konsultan, penyedia layanan, kontraktor, atau agen (<strong className="font-semibold text-gray-900">&quot;pihak ketikga&quot;</strong>) yang berada dalam layanan kami atau bertindak mewakilkan kami dan membutuhkan informasi tertentu untuk bekerja. Kami memiliki kontrak dengan pihak ketiga, yang dijadikan sebagai penjamin keselamatan data personal anda. Yang berarti mereka tidak dapat melakukan apapun terkait data anda kecuali kami yang memintanya. Mereka juga dilarang untuk membagikan data personal anda dengan organisasi selain kami. Mereka juga berkomitmen untuk menjaga data yang dipegang mewakilkan kami dan juga menyimpannya dalam periode yang kami tentukan. Kategori pihak ketiga yang mungkin kami bagikan adalah sebagai berikut:
								</p>
								<ul className="mt-8 space-y-4 text-gray-600 list-square ml-6">
									<li>Ad Network</li>
									<li>Layanan Data Analytics</li>
									<li>Lembaga Pemerintahan</li>
									<li>Payment Processor</li>
									<li>Social Networks</li>
									<li>Sales &amp; Marketing Tools</li>
									<li>Layanan Registrasi Akun & Autentikasi</li>
									<li>Monitoring Performance Tool</li>
								</ul>
								<p className="mt-6">
									Kami juga mungkin membutuhkan untuk memabgikan data personal anda dalam situasi berikut:
								</p>
								<ul className="mt-8 space-y-4 text-gray-600 list-square ml-6">
									<li><strong className="font-semibold text-gray-900">Transfer Bisnis.</strong> Kami mungkin membagikan atau memberikan informasi dalam rangka negosiasi, merger apapun, penjualan aset, pembiyaan, akuisisi sebagian atau secara penuh bisnis kami ke organisasi lain.</li>
									<li><strong className="font-semibold text-gray-900">Afiliasi.</strong> Kami mungkin membagikan data personal anda dengan afiliasi kami, dan mereka harus patuh terhadap policy ini, mereka dapat meliputi induk, anak, mitra joint venture, ataupun organisasi atau perusahaan yang kami kendalikan atau dalam kendali yang sama dengan kami.</li>
									<li><strong className="font-semibold text-gray-900">Mitra Bisnis.</strong> Kami mungkin membagikan data personal anda dengan mitra bisnis untuk menawarkan anda terhadap suatu produk, layanan, dan promosi.</li>
								</ul>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. APA KAMI MENGGUNAKAN COOKIES ATAU TEKNOLOGI SERUPA?</h2>
								<p className="mt-6">
									Kami menggunakan cookie atau teknologi tracking serupa (seperti web beacons dan pixels) untuk menyimpan dan membaca informasi. Anda dapat menolak untuk menggunakan cookies, namun beberapa aspek layanan mungkin tidak dapat dijangkau.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. BAGAIMANA KAMI MEMPROSES LOGIN SOCIAL MEDIA ANDA?</h2>
								<p className="mt-6">
									Layanan kami menawarkan fitur untuk registrasi &amp; login menggunakan social media pihak ketiga, ketika anda memilih ini maka kami akan memperoleh beberapa informasi dari penyedia social media anda. Informasi yang diperoleh dapat beragam namun kami lebih fokus terhadap nama, alamat email, gambar profil, serta beberapa informasi yang anda atur sebagai publik.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. BERAPA LAMA KAMI AKAN MENYIMPAN DATA ANDA?</h2>
								<p className="mt-6">
									Kami akan menyimpan data anda selama tidak ada permintaan untuk menghapus akun anda, ketika kami sudah tidak melanjutkan Layanan ini, maka kami akan mencoba untuk menghapus data anda serta permintaan untuk penghapusan data terkait ke pihak ketiga.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">7. SEBERAPA AMAN DATA ANDA DISIMPAN?</h2>
								<p className="mt-6">
									Kami sudah menerapkan pengamanan untuk melindungi data anda, namun bagaimanapun kami mencoba untuk melindungi data anda juga kami tidak dapat menjamin 100% apapun yang melalui internet dapat aman, jadi kami tidak dapat menjamin dari hacker, cybercriminal, atau akses pihak ketiga tanpa otoritas tidak dapat menyerang sistem kemanaan kami dan mengambil data, mengakses, mencuri, atau mengubah informasi anda. Meskipun kami sudah berusaha yang terbaik, resiko ditanggung anda sendiri. Anda harus mengakses Layanan ini melalui device dan jaringan yang aman.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">8. APA HAK PRIVASI ANDA?</h2>
								<p className="mt-6">
									Jika anda berada di wilayah Eropa ataupun UK dan yakin jika kami melanggar kewenangan dalam memproses informasi pribadi anda, anda memiliki hak untuk melapor kepada <Link className="text-underline text-fuchsia-500" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">Otoritas pengamanan data anggota setempat</Link> atau <Link className="text-underline text-fuchsia-500" href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">Otoritas pengamanan data UK</Link>.
								</p>
								<p className="mt-6">
									Jika anda berada di Switzerland, anda mungkin dapat menghubungi <Link className="text-underline text-fuchsia-500" href="https://www.edoeb.admin.ch/edoeb/en/home.html">Federasi pengamanan data dan komisi informasi</Link>
								</p>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Membatalkan Izin:</strong> Kami bergantung terhadap izin anda untuk memproses data pribadi, yang mungkin diterapkan tergantung dengan hukum yang berlaku, anda dapat menarik izin anda kapan saja dengan menghubungi kami.
								</p>
								<p className="mt-6">
									Namun ini tidak mempengaruhi kami untuk memproses data yang diberikan sebelum anda mencabut izin bergantung terhadap hukum yang berlaku.
								</p>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Tidak menerima promosi:</strong> Anda dapat berhenti berlangganan kapan saja dengan mengklik link unsubscribe di email yang kami kirimkan. Anda akan dikeluarkan dari marketing list. Namun kami tetap gunakan email anda untuk berkomunikasi terkait akun dan Layanan ini yang penting untuk kebutuhan administrasi dan juga untuk merespon kebutuhan lain non-marketing.
								</p>
								<h3 className="mt-16 text-xl font-bold tracking-tight text-gray-900">Informasi Akun</h3>
								<p className="mt-6">
									Anda dapat kapan saja review ulang atau mengubah informasi pada akun anda atau menutup akun anda dengan login dan pergi ke setting akun lalu update akun anda.
								</p>
								<p className="mt-6">
									Dalam request saat menutup akun, kami akan menonaktifkan akun anda dari database, namun kami akan tetap menyimpan sebagian data untuk menghindari penipuan, troubleshooting, membantu investigasi, menerapkan kebutuhan legal kami sesuai hukum yang berlaku.
								</p>
								<p className="mt-6">
									<strong className="font-semibold text-gray-900">Cookies & teknologi serupa:</strong> Kebanyakan browser menerima & memproses cookies secara default. Namun anda dapat menolak itu jika tidak menginginkan untuk penggunaan cookie, namun ini dapat mempengaruhi sebagian aspek fitur atau layanan dalam Layanan kami. Kami hanya menggunakan cookies untuk keperluan Layanan kami, cookies untuk keperluan marketing dikelola oleh layanan pihak ketiga.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">9. DUKUNGAN UNTUK FITUR DO-NOT-TRACK</h2>
								<p className="mt-6">
									Kebanyakan browser sudah memberikan fitur Do-Not-Track (&quot;DNT&quot;) atau anda dapat menyalakan sinyal untuk preferensi privasi untuk menolak tracking terhadap interaksi dan aktivitas browsing. Saat ini teknologi tersebut belum memiliki standar untuk mengenali dan menrapkan sinyal DNT. Oleh karena itu kami belum dapat memenuhi permintaan DNT atau fitur serupa untuk prefernsi tidak dilacak secara otomatis. Jika sudah ada standar yang dapat kami implementasi maka kami akan segera menerapkan fitur tersebut, kami juga akan memberitahukan kepada anda tentang praktis yang kami lakukan dalam revisi pemberitahuan ini.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">10. APAKAH KAMI MERUBAH PEMBERITAHUAN INI?</h2>
								<p className="mt-6">
									Kami mungkin akan merubah pemberitahuan seiring berjalannya waktu. Versi terbaru diindikasi dengan tanggal perubahan &quot;Revisi&quot; dan juga efektif pada tanggal itu pula. Jika kami melalukan perubahan, kami mungkin memberitahukan anda secara langsung melalui email. Kami menghimbau untuk selalu memperhatikan pemberitahuan ini secara berkala untuk memahami bagaimana kami melindungi informasi anda.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">11. KEMANA ANDA DAPAT MENGHUBUNGI KAMI TERKAIT PEMBERITAHUAN INI?</h2>
								<p className="mt-6">
									Jika anda memiliki beberapa pertanyaan terkait pemberitahuan ini, anda dapat menghubungi kami melalui Instagram kami <Link className="text-underline text-fuchsia-500" href="https://www.instagram.com/lcf_jkt/">@lcf_jkt</Link>.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">12. BAGAIMANA ANDA MENINJAU, UPDATE, ATAU MENGHAPUS DATA YANG KAMI DAPATKAN DARI ANDA?</h2>
								<p className="mt-6">
									Tergantung dari hukum yang berlaku di negara anda, anda memiliki hak untuk mengakses informasi pribadi yang kami dapatkan dari anda, merubah informasi tersebut, atau menghapusnya. Untuk itu anda dapat menghubungi kami melalui Instagram kami <Link className="text-underline text-fuchsia-500" href="https://www.instagram.com/lcf_jkt/">@lcf_jkt</Link>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Newsletter />
			<RightBlob />
		</>
	)
}
