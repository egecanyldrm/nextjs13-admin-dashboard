import Link from "next/link"
import dashboardConfigs from "./configs/dashboard-configs"

export default function Home() {
  return (
    <div className=" grid lg:grid-cols-2  grid-cols-1  gap-x-20">
      {
        dashboardConfigs.routes.map((route, key) => {
          return (
            <Link className=" hover:scale-105 my-5 px-10 py-16 bg-gray-100  rounded  flex flex-col justify-center items-center " key={key} href={`/dashboard/${route.path}`}>
              <route.icon size={30} />
              <span className=" ms-4 my-2 text-lg">{route.title}</span>
            </Link>
          )
        })
      }
    </div>
  )
}
