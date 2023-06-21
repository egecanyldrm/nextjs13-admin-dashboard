import { Home, Settings, Package, Codepen, Users, Tool } from 'react-feather'

export default {
    routes: [
        {
            path: "/",
            title: "Anasayfa",
            icon: Home
        },
        {
            path: "/categories",
            title: "Kategoriler",
            icon: Codepen
        },
        {
            path: "/product",
            title: "Ürünler",
            icon: Package
        },
        {
            path: "/theme-settings",
            title: "Tema Ayarları",
            icon: Tool
        },
        {
            path: "/business-settigns",
            title: "İşletme Ayarları",
            icon: Settings
        }
    ]
}