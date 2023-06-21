import Image from "next/image";
import config from '../configs/dashboard-configs'
import Link from "next/link";

export default function VerticalMenu() {

    return (
        <div className='vertical-layout p-7 flex-col '>
            <Image src={'/kreatifsiyah.png'} width={200} height={200} />
            <div className=" mt-10">
                {
                    config.routes.map((route, key) => {
                        return (
                            <div className="my-5" key={key}>
                                <Link href={`/dashboard/${route.path}`} className=" flex justify-start">
                                    <route.icon />
                                    <span className=" ms-4">{route.title}</span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}