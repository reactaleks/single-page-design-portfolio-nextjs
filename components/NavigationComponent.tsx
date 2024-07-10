import ButtonComponent from "./ButtonComponent"
import LogoComponent from "./LogoComponent"

interface Props {
    navType:string
}

export default function NavigationComponent({navType}:Props) {
    if(navType === 'nav') {
        return (
            <nav className="flex justify-between w-[343px] h-[48px] mx-auto mt-6 mb-8
            md:w-[689px] md:h-[64px] md:items-center
            ">
                <LogoComponent/>
                <ButtonComponent buttonType="dark"/>
            </nav>
        )
    } else {
        return (
            <footer className="flex justify-between w-[343px] h-[48px] mx-auto mt-8 mb-6
            md:w-[689px] md:h-[64px] md:items-center
            ">
                <LogoComponent/>
                <ButtonComponent buttonType="dark"/>
            </footer>
        )
    }
    
}